<template>
  <div class="min-h-screen flex flex-col bg-[#f5f5f5] text-slate-900">
    <Header />

    <main class="flex-1">
      <div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-0 py-6 md:py-10">
        <!-- Judul -->
        <div class="mb-6 text-center md:text-left">
          <p class="text-[11px] font-medium text-slate-500 uppercase tracking-[0.16em]">
            Our Product
          </p>
          <p class="mt-1 text-xs md:text-sm text-slate-600">
            Jelajahi koleksi lengkap sepatu kami.
          </p>
        </div>

        <!-- TAB FILTER -->
        <section class="mb-6">
          <Tab_Filter v-model="activeTab" :tabs="tabs" />
        </section>

        <!-- GRID PRODUK -->
        <section class="mb-12">
          <div
            class="grid grid-cols-2 gap-x-6 gap-y-6
                   sm:grid-cols-3
                   lg:grid-cols-4"
          >
            <Product_Card
              v-for="product in filteredProducts"
              :key="product.id"
              :product="product"
            />
          </div>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Product_Card from '@/components/Product_Card.vue'
import Tab_Filter from '@/components/Tab_Filter.vue'
import { products } from '@/data/product.js'

const tabs = [
  { label: 'All', value: 'all' },
  { label: 'Sports', value: 'sports' },
  { label: 'Formal', value: 'formal' },
  { label: 'Casual', value: 'casual' },
  { label: 'Sneakers', value: 'sneakers' },
]

const activeTab = ref('all')

const filteredProducts = computed(() => {
  if (activeTab.value === 'all') return products
  return products.filter((p) => p.category === activeTab.value)
})
</script>
