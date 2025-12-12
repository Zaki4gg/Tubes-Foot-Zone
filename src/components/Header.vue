<template>
  <header class="bg-white border-b border-slate-200">
    <div class="w-full px-3 sm:px-4 lg:px-12">
      <!-- BARIS ATAS -->
      <div class="h-14 md:h-16 flex items-center gap-3">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2 shrink-0">
          <img :src="logo" alt="Foot Zone" class="h-10 w-auto md:h-18" />
        </RouterLink>

        <!-- Search bar: desktop & mobile, di tengah -->
        <div class="flex-1 flex justify-center">
          <div class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <Search_Bar @search="handleSearch" />
          </div>
        </div>

        <!-- Kanan: nav (desktop) + icon (mobile+desktop) -->
        <div class="flex items-center gap-2 md:gap-5">
          <!-- Desktop nav -->
          <nav
            class="hidden md:flex items-center gap-4 text-[11px] md:text-sm text-slate-700"
          >
            <RouterLink
              to="/"
              class="pb-0.5 border-b-2 border-transparent hover:border-emerald-500 hover:text-emerald-600"
              :class="activeClass('/')"
            >
              Home
            </RouterLink>

            <RouterLink
              to="/product"
              class="pb-0.5 border-b-2 border-transparent hover:border-emerald-500 hover:text-emerald-600"
              :class="activeClass('/product')"
            >
              Product
            </RouterLink>

            <RouterLink
              to="/about"
              class="pb-0.5 border-b-2 border-transparent hover:border-emerald-500 hover:text-emerald-600"
              :class="activeClass('/about')"
            >
              About
            </RouterLink>

            <RouterLink
              to="/contact"
              class="pb-0.5 border-b-2 border-transparent hover:border-emerald-500 hover:text-emerald-600"
              :class="activeClass('/contact')"
            >
              Contact
            </RouterLink>

            <RouterLink
              to="/cv"
              class="pb-0.5 border-b-2 border-transparent hover:border-emerald-500 hover:text-emerald-600"
              :class="activeClass('/cv')"
            >
              CV
            </RouterLink>
          </nav>

          <!-- Icon cart (selalu ada) -->
          <RouterLink
            to="/cart"
            class="shrink-0 flex items-center justify-center"
          >
            <Icon
              icon="tabler:shopping-cart"
              class="w-5 h-5 md:w-6 md:h-6 text-slate-800"
            />
          </RouterLink>

          <!-- Hamburger untuk mobile -->
          <button
            type="button"
            class="md:hidden shrink-0 flex items-center justify-center"
            @click="isMobileMenuOpen = true"
          >
            <Icon icon="tabler:menu-2" class="w-6 h-6 text-slate-800" />
          </button>
        </div>
      </div>
    </div>
    
    <Mobile_Side_Nav
      :is-open="isMobileMenuOpen"
      @close="isMobileMenuOpen = false"
    />

  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import Search_Bar from './Search_Bar.vue' // karena satu folder dengan Header.vue
import Mobile_Side_Nav from './Mobile_Side_Nav.vue'
import logo from '@/assets/image/Logo_Foot_Zone.png'

const route = useRoute()
const router = useRouter()

const isMobileMenuOpen = ref(false)

const activeClass = (path) =>
  route.path === path ? 'border-emerald-500 text-emerald-600' : ''

// ketika user submit cari dari header
const handleSearch = (term) => {
  if (!term) return

  router.push({
    path: '/product',
    query: { q: term },
  })
}
</script>
