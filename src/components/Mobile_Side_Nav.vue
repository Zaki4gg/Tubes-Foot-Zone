<template>
  <!-- Hanya muncul ketika isOpen = true -->
  <div v-if="isOpen" class="fixed inset-0 z-40 md:hidden">
    <!-- overlay gelap -->
    <div
      class="absolute inset-0 bg-black/40"
      @click="close"
    ></div>

    <!-- drawer kanan dengan animasi slide -->
    <transition
      enter-active-class="transform transition-transform duration-200"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transform transition-transform duration-200"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 top-0 h-full w-64 bg-white shadow-xl flex flex-col"
      >
        <div
          class="px-4 py-3 border-b border-slate-200 flex items-center justify-between"
        >
          <span class="font-semibold text-sm text-slate-900">
            Menu
          </span>
          <button
            type="button"
            class="p-1"
            @click="close"
          >
            <Icon icon="tabler:x" class="w-5 h-5 text-slate-700" />
          </button>
        </div>

        <nav
          class="flex-1 flex flex-col gap-1 px-4 pt-4 text-sm text-slate-700"
        >
          <RouterLink
            to="/"
            class="py-2 border-b border-slate-100"
            :class="activeClass('/')"
            @click="close"
          >
            Home
          </RouterLink>

          <RouterLink
            to="/product"
            class="py-2 border-b border-slate-100"
            :class="activeClass('/product')"
            @click="close"
          >
            Product
          </RouterLink>

          <RouterLink
            to="/about"
            class="py-2 border-b border-slate-100"
            :class="activeClass('/about')"
            @click="close"
          >
            About
          </RouterLink>

          <RouterLink
            to="/contact"
            class="py-2 border-b border-slate-100"
            :class="activeClass('/contact')"
            @click="close"
          >
            Contact
          </RouterLink>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])

const route = useRoute()

const close = () => emit('close')

const activeClass = (path) =>
  route.path === path ? 'font-semibold text-emerald-600' : ''
</script>
