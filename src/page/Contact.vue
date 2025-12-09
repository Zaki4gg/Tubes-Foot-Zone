<template>
  <div class="min-h-screen bg-[#f5f5f5] text-slate-900">
    <!-- HEADER -->
    <Header />

    <!-- HERO CONTACT -->
    <section class="bg-[#8ea3a7] text-white">
      <div class="max-w-6xl mx-auto px-4 lg:px-0 py-10 md:py-14 text-center">
        <h1 class="text-2xl md:text-3xl font-bold text-black">Contact</h1>
        <p class="text-1xl mt-2 md:text-[12px] font-semibold text-black">Hubungi tim kami hari ini dan dapatkan respons dalam waktu 1x24 jam. Kami siap mendengarkan kebutuhan Anda.</p>
      </div>
    </section>

    <!-- MAIN CONTACT CONTENT -->
    <main class="bg-white">
      <div class="max-w-6xl mx-auto px-4 lg:px-0 py-10 md:py-12">
        <div class="grid gap-8 md:grid-cols-2">
          <!-- KARTU INFORMASI KONTAK -->
          <section
            class="bg-white rounded-xl border border-slate-200 shadow-sm px-6 py-6 md:py-8"
          >
            <h2 class="text-sm md:text-base font-semibold mb-6">
              Informasi Kontak
            </h2>

            <div class="space-y-6 text-xs md:text-sm text-slate-600">
              <!-- Alamat -->
              <div class="flex items-start gap-3">
                <div class="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21.75s-6.75-4.344-6.75-10.125A6.75 6.75 0 1118.75 11.625C18.75 17.406 12 21.75 12 21.75z"
                    />
                    <circle cx="12" cy="11.25" r="2.25" />
                  </svg>
                </div>
                <div>
                  <p class="font-medium mb-1">Alamat</p>
                  <p class="text-[11px] md:text-xs text-slate-500 leading-relaxed">
                    Jl. Sepatu No. 10<br />
                    Jakarta Barat 11480<br />
                    Indonesia
                  </p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start gap-3">
                <div class="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 5.25h16.5v13.5H3.75z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6l8 6 8-6"
                    />
                  </svg>
                </div>
                <div>
                  <p class="font-medium mb-1">Email</p>
                  <p class="text-[11px] md:text-xs text-slate-500 leading-relaxed">
                    info@footzone.com<br />
                    support@footzone.com
                  </p>
                </div>
              </div>

              <!-- Telepon -->
              <div class="flex items-start gap-3">
                <div class="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 5.25l3-1.5 2.25 4.5-2.1 1.05a11.25 11.25 0 005.55 5.55l1.05-2.1 4.5 2.25-1.5 3a2.25 2.25 0 01-2.03 1.27 13.5 13.5 0 01-12-12A2.25 2.25 0 014.5 5.25z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="font-medium mb-1">Telepon</p>
                  <p class="text-[11px] md:text-xs text-slate-500 leading-relaxed">
                    +62 812-3456-7890<br />
                    +62 21-9999-8888
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- FORM KONTAK -->
          <section
            class="bg-white rounded-xl border border-slate-200 shadow-sm px-6 py-6 md:py-8"
          >
            <h2 class="text-sm md:text-[18px] font-bold mb-6 text-center">
              Kirim Pesan Kepada Kami
            </h2>

            <form class="space-y-4 text-xs md:text-sm">
              <!-- Nama -->
              <div class="space-y-1">
                <label
                  for="name"
                  class="block text-[11px] md:text-xs font-medium text-slate-700"
                >
                  Nama
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="masukkan nama anda..."
                  class="w-full border border-slate-300 rounded-md px-3 py-2 text-xs md:text-sm
                         focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                />
              </div>

              <!-- Email -->
              <div class="space-y-1">
                <label
                  for="email"
                  class="block text-[11px] md:text-xs font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="footzone@example.com"
                  class="w-full border border-slate-300 rounded-md px-3 py-2 text-xs md:text-sm
                         focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                />
              </div>

              <!-- Pesan -->
              <div class="space-y-1">
                <label
                  for="message"
                  class="block text-[11px] md:text-xs font-medium text-slate-700"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="w-full border border-slate-300 rounded-md px-3 py-2 text-xs md:text-sm
                         focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 bg-white resize-none"
                ></textarea>
              </div>

              <div class="pt-2 flex justify-center">
                <button
                  type="submit"
                  class="inline-flex items-center gap-2 px-6 py-2 rounded-full
                         bg-[#8ea3a7] text-black text-xs md:text-sm font-medium
                         hover:bg-[#7a9094] transition"
                >
                  Kirim
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 4.5l13.5 7.5-13.5 7.5 3-7.5-3-7.5z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>

    <!-- INFO & MAPS (SEBELUM FOOTER) -->
    <section class="bg-[#f7f7f8] border-t border-slate-200">
      <div class="max-w-6xl mx-auto px-4 lg:px-0 py-10 md:py-12">
        <div class="flex flex-col md:flex-row gap-8 md:items-start">
          <!-- Info singkat -->
          <div class="md:w-5/12 space-y-4 text-xs md:text-sm text-slate-600">
            <h2 class="text-sm md:text-base font-semibold text-slate-900">
              Info & Maps
            </h2>
            <p>
              Toko utama FootZone berlokasi di area strategis Jakarta Barat sehingga
              mudah dijangkau dengan kendaraan pribadi maupun transportasi umum.
            </p>
            <p>
              Kamu bisa mengambil pesanan secara langsung (pick-up) atau hanya
              sekadar mencoba koleksi terbaru kami.
            </p>

            <div class="mt-4">
              <p class="text-[11px] font-semibold text-slate-700 mb-1">
                Jam Operasional
              </p>
              <ul class="text-[11px] text-slate-500 space-y-1">
                <li class="flex justify-between max-w-xs">
                  <span>Senin – Jumat</span><span>09.00 – 21.00</span>
                </li>
                <li class="flex justify-between max-w-xs">
                  <span>Sabtu</span><span>10.00 – 21.00</span>
                </li>
                <li class="flex justify-between max-w-xs">
                  <span>Minggu / Libur</span><span>10.00 – 18.00</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Map placeholder -->
          <div
            class="w-full max-w-xs sm:max-w-sm md:max-w-full
                    h-48 sm:h-56 md:h-72 lg:h-80
                    rounded-xl overflow-hidden mx-auto md:mx-0"
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.30471194289572!2d116.83364979541838!3d-1.2456877087175473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df147ad00c2b2c1%3A0x36ac94c73bdadeb6!2sTeras%20Panorama!5e0!3m2!1sid!2sid!4v1765195267362!5m2!1sid!2sid" class="w-full h-full border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
