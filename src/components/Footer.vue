<template>
  <footer class="bg-[#8ea3a7] text-white">
    <div class="max-w-6xl mx-auto px-4 lg:px-0 py-6 md:py-10">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div class="max-w-md text-[11px] leading-relaxed">
          <p class="mb-1 font-medium">
            Toko sepatu terpercaya dengan koleksi lengkap untuk semua kebutuhan Anda.
            Kualitas terbaik, harga terjangkau.
          </p>
        </div>

        <div class="flex justify-center gap-6 text-[11px]">
          <RouterLink to="/about" class="hover:underline">About</RouterLink>
          <RouterLink to="/contact" class="hover:underline">Contact Us</RouterLink>
        </div>
      </div>

      <div class="mt-8 border-t border-white/30 pt-3 text-center text-[10px]">
        © 2025 FootZone. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
// no logic yet
</script>
