<template>
  <div class="min-h-screen bg-[#f5f5f5] text-slate-900 font-sans">
    <!-- pakai component -->
    <Header />

    <!-- HERO -->
    <section class="bg-[#8ea3a7] text-white">
      <div class="max-w-5xl mx-auto px-4 py-12 md:py-16 text-center">
        <h1 class="text-2xl md:text-3xl font-bold mb-2 text-black">
          Foot Zone
        </h1>
        <p class="text-xs md:text-sm mb-4 text-black">
          Temukan Sepatu Impianmu di FootZone
        </p>
        <p class="text-[11px] md:text-xs max-w-xl mx-auto mb-4 leading-relaxed text-black">
          Temukan koleksi sepatu terbaik untuk setiap momen. Dari olahraga hingga
          formal, kami punya semuanya.
        </p>
        <RouterLink
          to="/product"
          class="inline-flex items-center gap-2 mt-4
                text-xs md:text-sm font-semibold text-slate-900
                transition-transform duration-200"
        >
          <span
            class="border-b border-slate-700/40 pb-0.5
                  hover:border-slate-900 hover:text-emerald-700
                  hover:-translate-y-0.5 inline-block"
          >
            Temukan Sekarang
          </span>
          <img
            src="@/assets/image/icon_arrow_kanan.png"
            alt=""
            class="h-4 w-auto md:h-5 md:w-auto
                  transform hover:-translate-y-0.5 transition-transform duration-200"
        />
        </RouterLink>
      </div>
    </section>

    <!-- CATEGORY -->
    <section class="bg-white">
      <div class="max-w-6xl mx-auto px-4 lg:px-0 py-10 md:py-12">
        <div class="text-center mb-8">
          <h2 class="text-lg md:text-xl font-semibold mb-2">
            Shop by Category
          </h2>
          <p class="text-[11px] md:text-xs text-slate-500">
            Temukan sepatu yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="category in categories"
            :key="category.name"
            class="rounded-2xl bg-[#4f6367] text-white px-5 py-6 shadow-sm"
          >
            <h3 class="text-sm font-semibold mb-2">
              {{ category.name }}
            </h3>
            <p class="text-[11px] leading-relaxed opacity-90">
              {{ category.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED PRODUCTS -->
    <section class="bg-[#f1f1f1] border border-slate-200 rounded-xl px-3 py-6 md:px-5 md:py-8 mb-10">
      <div class="mb-4">
        <h2 class="text-base md:text-lg font-semibold">
          Featured Products
        </h2>
        <p class="text-[11px] md:text-xs text-slate-500 mt-1">
          Koleksi pilihan terbaik minggu ini
        </p>
      </div>

      <div class="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-4">
        <Product_Card
          v-for="product in featuredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>

        <!-- OVERVIEW / TENTANG FOOTZONE -->
    <section class="bg-[#f7f7f8]">
    <div class="max-w-6xl mx-auto px-4 lg:px-0 py-14">
        <!-- Judul & subjudul di tengah -->
        <div class="text-center max-w-2xl mx-auto mb-10">
        <h2 class="text-xl md:text-2xl font-semibold text-slate-900">
            Overview FootZone
        </h2>
        <p class="mt-2 text-xs md:text-sm text-slate-500 leading-relaxed">
            FootZone adalah toko sepatu online yang mengkurasi pilihan terbaik untuk gaya
            sehari-hari, aktivitas outdoor, hingga acara formal. Semua dikemas dengan fokus
            pada kenyamanan dan style.
        </p>
        </div>

        <!-- 2 kolom: teks kiri, kartu brand kanan -->
        <div class="grid gap-8 md:grid-cols-2 items-center">
        <!-- Kiri: deskripsi -->
        <div class="space-y-4 text-xs md:text-sm text-slate-600">
            <h3
            class="text-[13px] md:text-sm font-semibold text-emerald-600 uppercase tracking-wide"
            >
            Langkah Nyaman, Gaya Maksimal
            </h3>

            <p>
            Di FootZone, setiap pasang sepatu dipilih untuk menemani aktivitasmu tanpa
            mengorbankan kenyamanan. Dari sneakers ringan hingga sepatu formal klasik,
            kami ingin setiap langkah terasa mantap.
            </p>

            <p>
            Tim kami terus memperbarui katalog dengan model terbaru sehingga kamu bisa
            mengikuti tren tanpa perlu keliling banyak toko.
            </p>

            <ul class="space-y-2">
            <li class="flex gap-2 items-start">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <span>Kurasi brand terpercaya dengan fokus pada kualitas bahan dan kenyamanan.</span>
            </li>
            <li class="flex gap-2 items-start">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <span>Pilihan kategori lengkap: sports, casual, formal, hingga lifestyle sneakers.</span>
            </li>
            <li class="flex gap-2 items-start">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <span>Promo berkala dan rekomendasi produk yang disesuaikan dengan kebutuhanmu.</span>
            </li>
            </ul>
        </div>

        <!-- Kanan: kartu brand / logo -->
        <div class="flex justify-center">
            <div
            class="w-full max-w-xs bg-white rounded-3xl shadow-md px-6 py-8 relative overflow-hidden"
            >
            <!-- lingkaran dekoratif -->
            <div
                class="absolute -right-10 -top-10 w-32 h-32 rounded-full border border-emerald-100"
            ></div>

            <div class="relative">
                <!-- “Logo” sederhana -->
                <div>
                    <img src="@/assets/image/Logo_Foot_Zone.png" alt="Foot Zone Logo" class="h-18 w-auto"/>
                </div>

                <p class="text-[11px] text-slate-500 mb-1">
                Koleksi unggulan FootZone
                </p>
                <p class="text-sm font-medium text-slate-900 mb-2">
                Sneakers dan sepatu casual siap pakai untuk setiap aktivitas harian.
                </p>
                <p class="text-[11px] text-slate-500">
                Ringan, nyaman, dan mudah dipadukan dengan outfit favoritmu.
                </p>

                <RouterLink
                to="/product"
                tag="button"
                class="mt-4 inline-flex items-center text-[11px] font-semibold text-emerald-600 hover:underline"
                >
                Jelajahi koleksi
                <span class="ml-1">→</span>
                </RouterLink>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>

    

    <!-- pakai component -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Product_Card from "@/components/Product_Card.vue";
import { products } from "@/data/product.js";

const categories = [
  {
    name: "Sports",
    description: "Sepatu untuk olahraga dan aktivitas fisik",
  },
  {
    name: "Formal",
    description: "Sepatu formal untuk kantor dan acara resmi",
  },
  {
    name: "Casual",
    description: "Sepatu santai untuk sehari-hari",
  },
  {
    name: "Sneakers",
    description: "Sepatu sneaker trendy dan stylish",
  },
];



function getRandomProducts(list, count) {
  const array = [...list]; 
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array.slice(0, count);
}


const featuredProducts = ref(getRandomProducts(products, 4));

</script>
