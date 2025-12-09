<template>
  <div class="min-h-screen bg-[#f5f5f5] text-slate-900">
    <Header />

    <!-- HERO ABOUT -->
    <section class="bg-[#8ea3a7] text-black">
      <div class="max-w-6xl mx-auto px-4 lg:px-0 py-10 md:py-14 text-center">
        <h1 class="text-2xl md:text-3xl font-bold mb-3">About</h1>
        <p class="text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
          Kami adalah toko sepatu terpercaya yang telah melayani ribuan pelanggan di
          seluruh Indonesia dengan menyediakan sepatu berkualitas untuk semua kebutuhan Anda.
        </p>
      </div>
    </section>

    <!-- STATISTIK SINGKAT -->
    <section class="bg-white">
      <div class="max-w-6xl mx-auto px-4 lg:px-0 py-8 md:py-10">
        <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="item in stats"
            :key="item.label"
            class="bg-[#f5f5f5] rounded-xl py-6 px-4 flex flex-col items-center text-center"
          >
            <div
              class="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-3"
            >
              <Icon :icon="item.icon" class="w-5 h-5 text-slate-700" />
            </div>
            <p class="text-sm font-semibold mb-1">
              {{ item.value }}
            </p>
            <p class="text-[11px] text-slate-500">
              {{ item.label }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- VISI & MISI -->
    <section class="bg-[#8ea3a7]">
      <div class="max-w-6xl mx-auto px-4 lg:px-0 py-10 md:py-12">
        <div class="grid gap-6 md:grid-cols-2">
          <div class="bg-white rounded-xl shadow-sm px-6 py-6 md:py-8">
            <div class="flex items-start gap-3 mb-3">
              <div
                class="h-8 w-8 rounded-full bg-[#8ea3a7]/10 flex items-center justify-center"
              >
                <Icon icon="tabler:eye" class="w-4 h-4 text-slate-700" />
              </div>
              <h2 class="text-sm md:text-base font-semibold text-slate-900">
                Visi Kami
              </h2>
            </div>
            <p class="text-[11px] md:text-xs text-slate-600 leading-relaxed">
              Menjadi toko sepatu pilihan utama di Indonesia yang dikenal dengan kualitas
              produk, pelayanan terbaik, dan kepercayaan pelanggan.
            </p>
          </div>

          <div class="bg-white rounded-xl shadow-sm px-6 py-6 md:py-8">
            <div class="flex items-start gap-3 mb-3">
              <div
                class="h-8 w-8 rounded-full bg-[#8ea3a7]/10 flex items-center justify-center"
              >
                <Icon icon="tabler:target" class="w-4 h-4 text-slate-700" />
              </div>
              <h2 class="text-sm md:text-base font-semibold text-slate-900">
                Misi Kami
              </h2>
            </div>
            <p class="text-[11px] md:text-xs text-slate-600 leading-relaxed">
              Menyediakan sepatu berkualitas dengan harga kompetitif, memberikan pengalaman
              belanja yang menyenangkan, dan membangun hubungan jangka panjang dengan
              pelanggan.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- NILAI-NILAI KAMI -->
    <section class="bg-white">
      <div class="max-w-6xl mx-auto px-4 lg:px-0 py-10 md:py-12">
        <div class="text-center mb-8">
          <h2 class="text-sm md:text-base font-semibold mb-1">
            Nilai - Nilai Kami
          </h2>
          <p class="text-[11px] md:text-xs text-slate-500">
            Prinsip yang menjadi fondasi dalam setiap aspek bisnis kami
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <div
            v-for="value in values"
            :key="value.title"
            class="bg-[#f5f5f5] rounded-xl px-5 py-6 text-center"
          >
            <div
              class="h-9 w-9 rounded-full bg-white border border-slate-200 flex items-center justify-center mx-auto mb-3"
            >
              <Icon :icon="value.icon" class="w-4 h-4 text-slate-700" />
            </div>
            <h3 class="text-sm font-semibold mb-2">
              {{ value.title }}
            </h3>
            <p class="text-[11px] md:text-xs text-slate-600 leading-relaxed">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { Icon } from '@iconify/vue'

const stats = [
  {
    icon: 'tabler:shopping-cart',
    value: '10.000+',
    label: 'Produk Terjual',
  },
  {
    icon: 'tabler:clock',
    value: '20+',
    label: 'Tahun Pengalaman',
  },
  {
    icon: 'tabler:mood-smile',
    value: '5000+',
    label: 'Pelanggan Puas',
  },
  {
    icon: 'tabler:shoe',
    value: '200+',
    label: 'Koleksi Produk',
  },
]

const values = [
  {
    icon: 'tabler:shield-check',
    title: 'Kualitas Terjamin',
    description:
      'Kami hanya menjual produk original dari brand terpercaya dengan garansi resmi.',
  },
  {
    icon: 'tabler:users',
    title: 'Kepuasan Pelanggan',
    description:
      'Kepuasan pelanggan adalah prioritas utama kami. Tim kami siap membantu Anda 24/7.',
  },
  {
    icon: 'tabler:scale',
    title: 'Integritas',
    description:
      'Kami berkomitmen untuk selalu jujur dan transparan dalam setiap transaksi.',
  },
]
</script>
