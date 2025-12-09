<template>
  <div class="min-h-screen flex flex-col bg-[#f5f5f5] text-slate-900 font-sans">
    <Header />

    <main class="flex-1">
      <div class="max-w-5xl mx-auto px-4 lg:px-0 py-8 md:py-10">
        <!-- Judul & ringkasan barang -->
        <section class="mb-8">
          <h1 class="text-lg md:text-xl font-semibold mb-4">
            Barang Belanja
          </h1>

          <div
            class="bg-white border border-slate-300 rounded-md px-6 py-4 text-xs md:text-sm"
          >
            <div class="grid grid-cols-[1.5fr_auto] gap-x-4 gap-y-1">
              <span>Adidas Samba OG</span>
              <span class="text-right">Rp. 2.000.000</span>

              <span>Onitsuka Tiger Mexico 66</span>
              <span class="text-right">Rp. 2.600.000</span>

              <span>Onitsuka Tiger Tokuten</span>
              <span class="text-right">Rp. 2.800.000</span>
            </div>
          </div>
        </section>

        <!-- FORM + METODE PEMBAYARAN -->
        <section
          class="bg-white border border-slate-300 rounded-md px-6 md:px-8 py-8 space-y-8"
        >
          <div class="border-t border-slate-200 -mx-6 md:-mx-8 mb-4"></div>

          <div class="grid gap-8 md:grid-cols-2 items-start">
            <!-- Form data pemesan -->
            <form class="space-y-4 text-xs md:text-sm" @submit.prevent="handleSubmit">
              <div>
                <label class="block mb-1 text-[11px] font-medium text-slate-700">
                  Nama Lengkap
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  class="w-full border border-slate-300 rounded-sm px-3 py-2 text-xs
                         focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Masukkan nama lengkapmu..."
                  required
                />
              </div>

              <div>
                <label class="block mb-1 text-[11px] font-medium text-slate-700">
                  Email
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  class="w-full border border-slate-300 rounded-sm px-3 py-2 text-xs
                         focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="contoh: footzone@example.com"
                  required
                />
              </div>

              <div>
                <label class="block mb-1 text-[11px] font-medium text-slate-700">
                  Nomor Telepon
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  class="w-full border border-slate-300 rounded-sm px-3 py-2 text-xs
                         focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Masukkan nomor telepon aktif..."
                  required
                />
              </div>

              <div>
                <label class="block mb-1 text-[11px] font-medium text-slate-700">
                  Alamat
                </label>
                <textarea
                  v-model="form.address"
                  rows="3"
                  class="w-full border border-slate-300 rounded-sm px-3 py-2 text-xs resize-none
                         focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Masukkan alamat lengkapmu..."
                  required
                />
              </div>
            </form>

            <!-- Metode Pembayaran -->
            <div class="space-y-4 text-xs md:text-sm">
              <h2 class="font-semibold text-slate-900 mb-2">
                Metode Pembayaran
              </h2>

              <button
                v-for="method in paymentMethods"
                :key="method.id"
                type="button"
                class="w-full flex items-center justify-between px-4 py-2.5 rounded-sm border text-left
                       transition bg-white"
                :class="
                  selectedMethod === method.id
                    ? 'border-emerald-500 shadow-sm'
                    : 'border-slate-300 hover:border-slate-400'
                "
                @click="selectedMethod = method.id"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="h-7 w-7 rounded-sm border border-slate-300 flex items-center justify-center"
                  >
                    <Icon :icon="method.icon" class="w-4 h-4 text-slate-700" />
                  </div>
                  <div class="flex flex-col">
                    <span class="text-[11px] font-medium text-slate-800">
                      {{ method.label }}
                    </span>
                    <span class="text-[10px] text-slate-500" v-if="method.caption">
                      {{ method.caption }}
                    </span>
                  </div>
                </div>

                <div
                  class="h-3 w-3 rounded-full border flex items-center justify-center"
                  :class="
                    selectedMethod === method.id
                      ? 'border-emerald-500'
                      : 'border-slate-300'
                  "
                >
                  <span
                    v-if="selectedMethod === method.id"
                    class="h-2 w-2 rounded-full bg-emerald-500"
                  ></span>
                </div>
              </button>
            </div>
          </div>

          <!-- Tombol aksi bawah -->
          <div class="flex justify-center gap-4 pt-4">
            <RouterLink
              to="/product"
              type="button"
              class="px-6 py-2 rounded-sm border border-slate-300 text-xs md:text-sm text-slate-700
                     hover:bg-slate-100 transition"
            >
              Cancel
            </RouterLink>

            <button
              type="button"
              class="px-8 py-2 rounded-sm bg-[#8ea3a7] text-white text-xs md:text-sm font-medium
                     hover:bg-[#7a9094] transition"
              @click="handleSubmit"
            >
              Confirm
            </button>
          </div>
        </section>
      </div>
    </main>

    <Footer />

    <!-- Modal pembayaran dipanggil sebagai komponen -->
    <Payment_Modal
      :visible="showPaymentModal"
      :method="selectedPaymentMethod"
      @close="closeModal"
      @finish="finishOrder"
    />

    <!-- Modal sukses transaksi -->
    <Pembayaran_Berhasil
      :visible="showPembayaranBerhasil"
      :customer-name="form.name"
      :email="form.email"
      :payment-label="selectedPaymentMethod.label"
      @close="closepembayaranBerhasil"
      @done="goToHome"
    />
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Payment_Modal from '@/components/Payment_Modal.vue'
import Pembayaran_Berhasil from '@/components/Pembayaran_Berhasil.vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  address: '',
})

const paymentMethods = [
  {
    id: 'qris',
    label: 'QRIS',
    caption: '',
    icon: 'tabler:qrcode',
  },
  {
    id: 'ewallet',
    label: 'E-Wallet',
    caption: 'Gopay, OVO, ShopeePay',
    icon: 'tabler:wallet',
  },
  {
    id: 'bank',
    label: 'Transfer Bank',
    caption: 'BCA, BRI, Mandiri, BNI',
    icon: 'tabler:building-bank',
  },
]

const selectedMethod = ref('qris')
const showPaymentModal = ref(false)
const showPembayaranBerhasil = ref(false)

const selectedPaymentMethod = computed(
  () => paymentMethods.find((m) => m.id === selectedMethod.value) ?? paymentMethods[0],
)

const handleSubmit = () => {
  if (!form.name || !form.email || !form.phone || !form.address) {
    alert('Lengkapi data terlebih dahulu.')
    return
  }

  if (!selectedMethod.value) {
    alert('Silakan pilih metode pembayaran.')
    return
  }

  showPaymentModal.value = true
}

// const handleCancel = () => {
//   form.name = ''
//   form.email = ''
//   form.phone = ''
//   form.address = ''
//   selectedMethod.value = ''
// }

const closeModal = () => {
  showPaymentModal.value = false
}

const finishOrder = () => {
  showPaymentModal.value = false
  showPembayaranBerhasil.value = true
  // kalau mau redirect:
  // router.push('/')
}

const closepembayaranBerhasil = () => {
  showPembayaranBerhasil.value = false
}

const goToHome = () => {
  showPembayaranBerhasil.value = false
  router.push('/')
}
  // kalau mau redirect:
  // router.push('/')
</script>
