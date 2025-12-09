<!-- src/components/SearchBar.vue -->
<template>
  <form @submit.prevent="onSubmit" class="w-full">
    <label class="sr-only" for="search-input">Cari produk</label>
    <div class="relative">
      <input
        id="search-input"
        v-model="keyword"
        type="text"
        placeholder="Cari sepatu (misal: Samba, Onitsuka)..."
        class="w-full rounded-full border border-slate-300 bg-white
               px-3 py-1.5 md:px-4 md:py-2
               text-[11px] md:text-sm text-slate-700
               focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-emerald-500"
      />

      <button
        type="submit"
        class="absolute inset-y-0 right-1 flex items-center px-2 md:px-3
               text-slate-500 hover:text-emerald-600"
      >
        <!-- Icon dari Iconify -->
        <Icon icon="tabler:search" class="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const emit = defineEmits(['search'])

const keyword = ref('')

const onSubmit = () => {
  const term = keyword.value.trim()
  emit('search', term)
}
</script>
