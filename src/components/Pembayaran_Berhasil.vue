<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4"
  >
    <div class="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
      <div class="flex justify-center mb-3">
        <div
          class="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center"
        >
          <Icon icon="tabler:circle-check" class="w-7 h-7 text-emerald-600" />
        </div>
      </div>

      <h2 class="text-base md:text-lg font-semibold text-center mb-1">
        Transaksi Berhasil
      </h2>
      <p class="text-[11px] text-slate-600 text-center mb-4">
        Terima kasih,
        <span class="font-medium">{{ customerName || 'Customer' }}</span>! Pesananmu
        dengan metode pembayaran
        <span class="font-medium">{{ paymentLabel }}</span>
        sedang kami proses.
      </p>

      <div class="bg-slate-50 border border-slate-200 rounded-md px-4 py-3 mb-4">
        <p class="text-[11px] text-slate-500">
          Kode pesanan:
          <span class="font-semibold text-slate-800">
            {{ orderCode }}
          </span>
        </p>
        <p class="mt-1 text-[11px] text-slate-500">
          Detail pesanan dan informasi pengiriman akan dikirim ke email:
        </p>
        <p class="text-[11px] font-medium text-slate-800">
          {{ email || '-' }}
        </p>
      </div>

      <div class="flex justify-end gap-2">
        <button
          type="button"
          class="px-4 py-1.5 rounded-sm border border-slate-300 text-xs text-slate-700
                 hover:bg-slate-100 transition"
          @click="$emit('close')"
        >
          Tutup
        </button>
        <RouterLink
          to="/product"
          type="button"
          class="px-4 py-1.5 rounded-sm bg-emerald-600 text-white text-xs font-medium
                 hover:bg-emerald-700 transition"
          @click="$emit('done')"
        >
          Kembali ke Beranda
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  customerName: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
  },
  paymentLabel: {
    type: String,
    default: '',
  },
  orderCode: {
    type: String,
    default: 'FZ-' + Math.floor(Math.random() * 999999).toString().padStart(6, '0'),
  },
})

defineEmits(['close', 'done'])
</script>
