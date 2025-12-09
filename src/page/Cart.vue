<template>
  <div class="min-h-screen flex flex-col bg-[#f5f5f5] text-slate-900">
    <Header />

    <main class="flex-1">
      <div class="max-w-6xl mx-auto px-3 sm:px-4 lg:px-0 py-6 md:py-10">
        <h1 class="text-center text-lg md:text-xl font-semibold mb-6">
          Keranjang Belanja
        </h1>

        <div class="grid gap-6 md:grid-cols-3 items-start">
          <!-- ================= KIRI: LIST ITEM ================= -->
          <section class="md:col-span-2 bg-white rounded-md border border-slate-200 overflow-hidden">
            <!-- Desktop / laptop: TABEL -->
            <div class="hidden md:block overflow-x-auto">
              <table class="w-full text-left text-xs">
                <thead class="bg-slate-50 text-[11px] text-slate-500 uppercase">
                  <tr>
                    <th class="px-4 py-3 w-[40%]">Item</th>
                    <th class="px-4 py-3 w-[20%] text-center">Harga</th>
                    <th class="px-4 py-3 w-[20%] text-center">Jumlah</th>
                    <th class="px-4 py-3 w-[20%] text-center">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in cartItems"
                    :key="item.id"
                    class="border-t border-slate-200 align-top"
                  >
                    <!-- Item -->
                    <td class="px-4 py-4">
                      <div class="flex gap-3">
                        <div
                          class="w-28 h-24 bg-slate-50 rounded-lg overflow-hidden flex items-center justify-center"
                        >
                          <template v-if="item.image">
                            <img
                              :src="item.image"
                              :alt="item.name"
                              class="w-full h-full object-contain"
                            />
                          </template>
                          <template v-else>
                            <span class="text-[10px] text-slate-400">Gambar</span>
                          </template>
                        </div>
                        <div class="text-[11px] leading-snug">
                          <p class="font-semibold text-slate-900">
                            {{ item.brand }}
                          </p>
                          <p class="text-slate-700">{{ item.name }}</p>
                          <p class="mt-1 text-slate-500">
                            ukuran: {{ item.size }}<br />
                            warna: {{ item.color }}
                          </p>
                        </div>
                      </div>
                    </td>

                    <!-- Harga -->
                    <td class="px-4 py-4 text-[11px] text-slate-700 text-center align-middle">
                      Rp. {{ item.price.toLocaleString('id-ID') }}
                    </td>

                    <!-- Jumlah -->
                    <td class="px-4 py-4 text-center align-middle">
                      <div
                        class="inline-flex items-center border border-slate-300 rounded-full overflow-hidden"
                      >
                        <button
                          type="button"
                          class="px-3 py-1 text-xs hover:bg-slate-100"
                          @click="decrement(item)"
                        >
                          −
                        </button>
                        <span class="px-3 text-xs">{{ item.quantity }}</span>
                        <button
                          type="button"
                          class="px-3 py-1 text-xs hover:bg-slate-100"
                          @click="increment(item)"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <!-- Subtotal -->
                    <td class="px-4 py-4 text-center text-[11px] align-middle">
                      Rp.
                      {{
                        (item.price * item.quantity).toLocaleString('id-ID')
                      }}
                    </td>
                  </tr>

                  <tr v-if="cartItems.length === 0">
                    <td colspan="4" class="px-4 py-6 text-center text-[11px] text-slate-500">
                      Keranjang belanja kosong.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Mobile: KARTU PER ITEM -->
            <div class="md:hidden divide-y divide-slate-200">
              <div
                v-for="item in cartItems"
                :key="item.id"
                class="px-4 py-4 flex gap-3"
              >
                <!-- Gambar -->
                <div
                  class="w-24 h-20 bg-slate-50 rounded-lg overflow-hidden flex items-center justify-center shrink-0"
                >
                  <template v-if="item.image">
                    <img
                      :src="item.image"
                      :alt="item.name"
                      class="w-full h-full object-contain"
                    />
                  </template>
                  <template v-else>
                    <span class="text-[10px] text-slate-400">Gambar</span>
                  </template>
                </div>

                <!-- Detail + kontrol -->
                <div class="flex-1 text-[11px]">
                  <p class="font-semibold text-slate-900">
                    {{ item.brand }}
                  </p>
                  <p class="text-slate-700">
                    {{ item.name }}
                  </p>
                  <p class="mt-1 text-slate-500">
                    ukuran: {{ item.size }} | warna: {{ item.color }}
                  </p>

                  <div class="mt-3 flex items-center justify-between">
                    <span class="text-slate-500">Harga</span>
                    <span class="font-medium text-slate-900">
                      Rp. {{ item.price.toLocaleString('id-ID') }}
                    </span>
                  </div>

                  <div class="mt-2 flex items-center justify-between">
                    <span class="text-slate-500">Jumlah</span>
                    <div
                      class="inline-flex items-center border border-slate-300 rounded-full overflow-hidden"
                    >
                      <button
                        type="button"
                        class="px-3 py-1 text-xs hover:bg-slate-100"
                        @click="decrement(item)"
                      >
                        −
                      </button>
                      <span class="px-3 text-xs">{{ item.quantity }}</span>
                      <button
                        type="button"
                        class="px-3 py-1 text-xs hover:bg-slate-100"
                        @click="increment(item)"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div class="mt-2 flex items-center justify-between">
                    <span class="text-slate-500">Subtotal</span>
                    <span class="font-semibold text-slate-900">
                      Rp.
                      {{
                        (item.price * item.quantity).toLocaleString('id-ID')
                      }}
                    </span>
                  </div>
                </div>
              </div>

              <div
                v-if="cartItems.length === 0"
                class="px-4 py-6 text-center text-[11px] text-slate-500"
              >
                Keranjang belanja kosong.
              </div>
            </div>
          </section>

          <!-- ================= KANAN: RINGKASAN ================= -->
          <aside class="md:col-span-1 bg-white rounded-md border border-slate-200 p-5">
            <h2 class="text-sm font-semibold mb-4">
              Ringkasan Belanja
            </h2>

            <div class="flex items-center justify-between text-[11px] mb-4">
              <span class="text-slate-500">Total</span>
              <span class="font-semibold text-slate-900">
                Rp. {{ totalPrice.toLocaleString('id-ID') }}
              </span>
            </div>

            <button
              type="button"
              class="w-full mt-2 inline-flex items-center justify-center
                     rounded-full bg-[#4f6367] text-white text-xs font-medium
                     py-2.5 hover:bg-[#43565a] disabled:opacity-40 disabled:cursor-not-allowed"
              :disabled="cartItems.length === 0"
              @click="goToCheckout"
            >
              Checkout
            </button>
          </aside>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

//import gambar
import ImgSambaOG from '@/assets/image/product/Adidas_Samba_OG_product.png'
import ImgMexico66 from '@/assets/image/product/Onitsuka_Tiger_Mexico_66-2.png'
import ImgTokuten from '@/assets/image/product/Onitsuka_Tiger_Tokuten.png'

const router = useRouter()

// Data contoh; gambar bisa kamu isi nanti (biarkan string kosong dulu).
const cartItems = ref([
  {
    id: 1,
    brand: 'Adidas',
    name: 'Samba OG',
    size: 38,
    color: 'putih pink',
    price: 2000000,
    quantity: 1,
    image: ImgSambaOG, 
  },
  {
    id: 2,
    brand: 'Onitsuka Tiger',
    name: 'Mexico 66',
    size: 42,
    color: 'cream biru',
    price: 2600000,
    quantity: 1,
    image: ImgMexico66,
  },
  {
    id: 3,
    brand: 'Onitsuka Tiger',
    name: 'Tokuten',
    size: 40,
    color: 'putih hitam',
    price: 2800000,
    quantity: 1,
    image: ImgTokuten,
  },
])

const totalPrice = computed(() =>
  cartItems.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  ),
)

const increment = (item) => {
  item.quantity++
}

const decrement = (item) => {
  if (item.quantity > 1) {
    item.quantity--
  } else {
    // kalau jumlah jadi 0, hapus item dari cart
    cartItems.value = cartItems.value.filter((i) => i.id !== item.id)
  }
}

const goToCheckout = () => {
  if (cartItems.value.length === 0) return
  router.push('/checkout')
}
</script>
