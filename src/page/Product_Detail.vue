<template>
  <div class="min-h-screen bg-[#f5f5f5] text-slate-900">
    <Header />

    <main class="max-w-6xl mx-auto px-4 lg:px-0 py-8 md:py-10">
      <!-- back link -->
      <button
        class="text-[11px] md:text-xs text-slate-500 hover:text-slate-800 mb-6"
        @click="goBack"
      >
        ← Kembali ke daftar produk
      </button>

      <!-- DETAIL PRODUK -->
      <section class="grid gap-10 md:grid-cols-2 items-start">
        <!-- Kiri: informasi produk -->
        <div>
          <p class="text-sm md:text-base font-semibold text-slate-900">
            {{ product.brand }}
          </p>
          <h1 class="mt-1 text-xl md:text-2xl font-semibold text-slate-900">
            {{ product.name }} Shoes
          </h1>
          <p class="mt-1 text-xs md:text-sm text-slate-500">
            {{ product.type }}
          </p>

          <p class="mt-4 text-lg md:text-xl font-semibold text-slate-900">
            Rp. {{ product.price.toLocaleString('id-ID') }}
          </p>

          <!-- opsi ukuran & kuantitas -->
          <div class="mt-6 space-y-4 text-xs md:text-sm">
            <div class="space-y-1">
              <label class="block font-medium text-slate-700">Ukuran</label>
              <select
                v-model="selectedSize"
                class="w-44 border border-slate-300 rounded-md px-3 py-2 bg-white
                       focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="" disabled>Pilih ukuran...</option>
                <option
                  v-for="size in sizes"
                  :key="size"
                  :value="size"
                >
                  {{ size }}
                </option>
              </select>
            </div>

            <div class="space-y-1">
              <label class="block font-medium text-slate-700">Kuantitas</label>
              <select
                v-model.number="selectedQty"
                class="w-44 border border-slate-300 rounded-md px-3 py-2 bg-white
                       focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="" disabled>Pilih jumlah...</option>
                <option
                  v-for="q in quantities"
                  :key="q"
                  :value="q"
                >
                  {{ q }}
                </option>
              </select>
            </div>

            <!-- tombol aksi -->
            <div class="mt-6 flex flex-col gap-3 md:max-w-xs">
              <button
                type="button"
                class="w-full rounded-full bg-[#4f6367] text-white text-xs md:text-sm font-medium py-2.5 hover:bg-[#43565a] transition"
                @click="handleBuyNow"
              >
                Beli sekarang
              </button>

              <button
                type="button"
                class="w-full rounded-full bg-[#d4544c] text-white text-xs md:text-sm font-medium py-2.5 hover:bg-[#c2463f] transition"
                @click="handleAddToCart"
              >
                Tambah ke keranjang
              </button>
            </div>
          </div>

          <!-- deskripsi -->
          <p class="mt-6 text-[11px] md:text-xs leading-relaxed text-slate-600 max-w-md">
            {{ product.description }}
          </p>
        </div>

        <!-- Kanan: gambar produk -->
        <div class="space-y-6">
          <div
            class="w-full aspect-[4/3] rounded-xl bg-slate-100 flex items-center justify-center"
          >
            <img
              v-if="product.image"
              :src="product.image"
              :alt="`Foto utama ${product.name}`"
              class="w-full h-full object-contain"
            />
          </div>
          <div
            class="w-full aspect-[4/3] rounded-xl bg-slate-100 flex items-center justify-center"
          >
            <img
              v-if="product.image"
              :src="product.image"
              :alt="`Foto samping ${product.name}`"
              class="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      <!-- REKOMENDASI -->
      <section class="mt-12">
        <h2 class="text-sm md:text-base font-semibold text-slate-900 mb-4">
          Rekomendasi untukmu
        </h2>

        <div class="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          <RouterLink
            v-for="item in recommended"
            :key="item.id"
            :to="{ name: 'product-detail', params: { id: item.id } }"
            class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col
                   hover:shadow-md transition cursor-pointer"
          >
            <div
              class="aspect-[4/3] bg-slate-100 flex items-center justify-center"
            >
              <span class="text-[11px] text-slate-400">Gambar Sepatu</span>
            </div>
            <div class="px-3 pb-4 pt-3">
              <p class="text-[10px] uppercase tracking-wide text-slate-400 mb-1">
                {{ item.brand }}
              </p>
              <p class="text-[12px] font-medium text-slate-800">
                {{ item.name }}
              </p>
              <p class="mt-1 text-[11px] text-slate-600">
                Rp. {{ item.price.toLocaleString('id-ID') }}
              </p>
            </div>
          </RouterLink>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { product_detail } from '@/data/product_detail.js'

const route = useRoute()
const router = useRouter()


const product = computed(() => {
  const id = Number(route.params.id)
  return product_detail.find((p) => p.id === id) || product_detail[0]
})


const recommended = computed(() =>
  product_detail.filter((p) => p.id !== product.value.id).slice(0, 4),
)


const sizes = ['38', '39', '40', '41', '42', '43', '44']
const quantities = [1, 2, 3, 4, 5]

const selectedSize = ref('')
const selectedQty = ref('')

const validateSelection = () => {
  if (!selectedSize.value || !selectedQty.value) {
    alert('Silakan pilih ukuran dan kuantitas terlebih dahulu.')
    return false
  }
  return true
}

const handleBuyNow = () => {
  if (!validateSelection()) return
  alert(
    `Beli sekarang: ${product.value.name} (Ukuran ${selectedSize.value}, ${selectedQty.value} pasang).`,
  )
  router.push('/checkout')
}

const handleAddToCart = () => {
  if (!validateSelection()) return
  alert(
    `Ditambahkan ke keranjang: ${product.value.name} (Ukuran ${selectedSize.value}, ${selectedQty.value} pasang).`,
  )
}

const goBack = () => {
  router.push({ name: 'product' })
}
</script>
