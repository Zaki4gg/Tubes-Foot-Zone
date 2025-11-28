<template>
  <div class="min-h-screen bg-[#f5f5f5] text-slate-900">
    <Header />

    <main class="max-w-6xl mx-auto px-4 lg:px-0 py-8 md:py-10">
      <!-- Judul & deskripsi kecil -->
      <div
        class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
      >
        <div>
          <p class="text-[11px] font-medium text-slate-500 uppercase tracking-[0.16em]">
            Our Product
          </p>
          <p class="mt-1 text-xs md:text-sm text-slate-600">
            Jelajahi koleksi lengkap sepatu kami.
          </p>
        </div>
      </div>

      <!-- TAB FILTER -->
      <section class="flex justify-center mb-10">
        <div
          class="inline-flex items-center gap-1 bg-white rounded-full border border-slate-200 shadow-sm px-2 py-1"
        >
          <button
            v-for="tab in tabs"
            :key="tab.value"
            type="button"
            @click="activeTab = tab.value"
            class="px-4 py-1.5 rounded-full text-[11px] md:text-xs transition"
            :class="
              activeTab === tab.value
                ? 'bg-[#8ea3a7] text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            "
          >
            {{ tab.label }}
          </button>
        </div>
      </section>

      <!-- GRID PRODUK -->
      <section class="mb-12">
        <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <!-- Kartu produk (bisa diklik ke halaman detail) -->
          <RouterLink
            v-for="product in filteredProducts"
            :key="product.id"
            :to="{ name: 'product-detail', params: { id: product.id } }"
            class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col
                   hover:shadow-md transition cursor-pointer"
          >
            <div
              class="aspect-[4/3] bg-slate-100 flex items-center justify-center"
            >
              <span class="text-[11px] text-slate-400">Gambar Sepatu</span>
            </div>
            <div class="px-4 pt-3 pb-4">
              <p class="text-[10px] uppercase tracking-wide text-slate-400 mb-1">
                {{ product.brand }}
              </p>
              <p class="text-[12px] font-medium text-slate-800">
                {{ product.name }}
              </p>
              <p class="mt-1 text-[11px] text-slate-600">
                Rp. {{ product.price.toLocaleString('id-ID') }}
              </p>
            </div>
          </RouterLink>

          <!-- Kartu placeholder supaya grid kelihatan penuh (seperti desain) -->
          <article
            v-for="placeholder in placeholderCards"
            :key="placeholder.id"
            class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col"
          >
            <div
              class="aspect-[4/3] bg-slate-50 flex items-center justify-center border-b border-dashed border-slate-200"
            >
              <span class="text-[11px] text-slate-300">Slot produk</span>
            </div>
            <div class="px-4 pt-3 pb-4">
              <p class="text-[10px] uppercase tracking-wide text-slate-300 mb-1">
                Brand
              </p>
              <p class="text-[12px] font-medium text-slate-300">
                Nama sepatu
              </p>
              <p class="mt-1 text-[11px] text-slate-300">
                Rp. -
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import Header from './Header.vue'
import Footer from './Footer.vue'

// Tab kategori
const tabs = [
  { label: 'All', value: 'all' },
  { label: 'Sports', value: 'sports' },
  { label: 'Formal', value: 'formal' },
  { label: 'Casual', value: 'casual' },
  { label: 'Sneakers', value: 'sneakers' },
]

const activeTab = ref('all')

// Data produk – id, brand, name, price & category
// (Samakan id & nama dengan ProductDetail.vue)
const products = [
  {
    id: 1,
    brand: 'Adidas',
    name: 'Samba OG',
    price: 2000000,
    category: 'casual',
  },
  {
    id: 2,
    brand: 'Adidas',
    name: 'Adizero Adios Pro 4',
    price: 4000000,
    category: 'sports',
  },
  {
    id: 3,
    brand: 'Adidas',
    name: 'Gazelle Indoor',
    price: 1900000,
    category: 'casual',
  },
  {
    id: 4,
    brand: 'Adidas',
    name: 'Campus 00s',
    price: 1700000,
    category: 'sneakers',
  },
  {
    id: 5,
    brand: 'Onitsuka Tiger',
    name: 'Mexico 66',
    price: 2500000,
    category: 'casual',
  },
  {
    id: 6,
    brand: 'Onitsuka Tiger',
    name: 'Tokuten',
    price: 2800000,
    category: 'casual',
  },
]

// Filter produk berdasarkan tab aktif
const filteredProducts = computed(() => {
  if (activeTab.value === 'all') return products
  return products.filter((p) => p.category === activeTab.value)
})

// Biar grid selalu kelihatan penuh (misal 12 slot)
const placeholderCards = computed(() => {
  const totalSlots = 12
  const need = Math.max(totalSlots - filteredProducts.value.length, 0)
  return Array.from({ length: need }, (_, i) => ({
    id: `placeholder-${i}`,
  }))
})
</script>
