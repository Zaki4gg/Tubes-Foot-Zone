<template>
  <RouterLink
    :to="{ name: 'product-detail', params: { id: product.id } }"
    class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col
           hover:shadow-md transform transition cursor-pointer duration-300 ease-in-out hover:-translate-y-1"
  >
    <div class="aspect-[4/3] bg-slate-100 overflow-hidden flex items-center justify-center">
      <img
        v-if="product.image || product.imageCard"
        :src="product.image || product.imageCard"
        :alt="product.name"
        class="w-full h-full object-contain"
      />
      <span v-else class="text-[10px] text-slate-400">
        Gambar Sepatu
      </span>
    </div>

    <div class="px-3 pt-2 pb-3">
      <p class="text-[10px] uppercase tracking-wide text-slate-400 mb-1">
        {{ product.brand }}
      </p>
      <h3 class="text-[11px] font-medium text-slate-800 leading-snug">
        {{ product.name }}
      </h3>
      <p class="mt-1 text-[11px] text-slate-600">
        Rp. {{ product.price.toLocaleString('id-ID') }}
      </p>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>
