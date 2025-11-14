<template>
  <div class="min-h-screen bg-[#f5f5f5] text-slate-900 font-sans">
    <!-- pakai component -->
    <Header />

    <!-- HERO -->
    <section class="bg-[#8ea3a7] text-white">
      <div class="max-w-6xl mx-auto px-4 lg:px-0 py-16 md:py-20 text-center">
        <h1 class="text-3xl md:text-4xl font-bold mb-2 text-black">Foot Zone</h1>
        <p class="text-sm md:text-base mb-6 text-black">
          Temukan Sepatu Impianmu di FootZone
        </p>
        <p class="text-[11px] md:text-xs max-w-xl mx-auto mb-2 leading-relaxed text-black">
          Temukan koleksi sepatu terbaik untuk setiap momen. Dari olahraga hingga
          formal, kami punya semuanya.
        </p>
        <button
          class="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#D9D9D9] text-slate-900 text-xs md:text-sm font-medium shadow-sm hover:bg-slate-100 transition"
        >
          Temukan Sekarang
            <img src="@/assets/image/icon_arrow_kanan.png" class="h-10 w-auto" />       
        </button>
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
    <section class="bg-[#f1f1f1] border-t border-slate-200">
      <div class="max-w-6xl mx-auto px-4 lg:px-0 py-10 md:py-12">
        <div class="mb-6">
          <h2 class="text-lg md:text-xl font-semibold">
            Featured Products
          </h2>
          <p class="text-[11px] md:text-xs text-slate-500 mt-1">
            Koleksi pilihan terbaik minggu ini
          </p>
        </div>

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="product in products"
            :key="product.name"
            class="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden flex flex-col"
          >
            <div
              class="aspect-[4/3] bg-slate-100 flex items-center justify-center text-[10px] text-slate-400"
            >
              Gambar Sepatu
            </div>
            <div class="px-3 pb-3 pt-2">
              <h3 class="text-[11px] font-medium text-slate-800">
                {{ product.name }}
              </h3>
              <p class="text-[11px] text-slate-500 mt-1">
                Rp. {{ product.price.toLocaleString('id-ID') }}
              </p>
            </div>
          </article>
        </div>
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

                <button
                class="mt-4 inline-flex items-center text-[11px] font-semibold text-emerald-600 hover:underline"
                >
                Jelajahi koleksi
                <span class="ml-1">→</span>
                </button>
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
import Header from "./Header.vue";
import Footer from "./Footer.vue";

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

const products = [
  { name: "Adidas Ultraboot 5s", price: 2300000 },
  { name: "Onitsuka Tiger TS-2Run", price: 2200000 },
  { name: "Onitsuka Tiger Mexico 66", price: 2500000 },
  { name: "Adidas Campus 80s", price: 1700000 },
];
</script>
