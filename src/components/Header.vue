<template>
  <header class="bg-white border-b border-slate-200">
    <div class="max-w-6xl mx-auto flex items-center justify-between px-4 lg:px-0 py-4">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <img src="@/assets/image/Logo_Foot_Zone.png" alt="Foot Zone Logo" class="h-18 w-auto" />
      </div>

      <!-- Nav links -->
      <nav class="hidden md:flex items-center gap-6 text-[13px] ml-auto">
        <RouterLink to="/" :class="navClass('home')">
          Home
        </RouterLink>

        <RouterLink to="/product" :class="navClass('product')">
          Product
        </RouterLink>

        <RouterLink to="/about" :class="navClass('about')">
          About
        </RouterLink>

        <RouterLink to="/contact" :class="navClass('contact')">
          Contact
        </RouterLink>
      </nav>

      <!-- Cart icon -->
      <button
        class="h-12 w-12 flex items-center justify-center rounded-full hover:bg-slate-100 transition ml-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835L5.25 7.5m0 0L6.6 13.2A1.125 1.125 0 007.71 14.25h10.665a1.125 1.125 0 001.092-.846l1.443-5.788A.563.563 0 0020.36 7.5H5.25zM10.5 19.125a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const baseClass = 'hover:text-slate-900 transition'

const navClass = (name) => {
  return route.name === name
    ? `text-emerald-600 font-semibold ${baseClass}`
    : `text-slate-700 ${baseClass}`
}
</script>
