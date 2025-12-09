<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
  >
    <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
      <h2 class="text-base md:text-lg font-semibold mb-1">
        Pembayaran via {{ method?.label ?? '-' }}
      </h2>
      <p class="text-[11px] text-slate-500 mb-4">
        Silakan ikuti instruksi di bawah ini untuk menyelesaikan pembayaran.
      </p>

      <!-- QRIS -->
      <div v-if="method?.id === 'qris'" class="space-y-3">
        <p class="text-xs text-slate-600">
          Scan QRIS menggunakan aplikasi pembayaran (Gopay, OVO, ShopeePay,
          m-banking, dll).
        </p>
        <div
          class="w-40 h-40 mx-auto bg-slate-100 border border-dashed border-slate-300
                 flex items-center justify-center text-[11px] text-slate-400"
        >
          QR Code di sini
        </div>
      </div>

      <!-- E-Wallet -->
      <div v-else-if="method?.id === 'ewallet'" class="space-y-3">
        <p class="text-xs text-slate-600">
          Gunakan salah satu e-wallet berikut untuk menyelesaikan pembayaran:
        </p>
        <ul class="text-[11px] text-slate-600 list-disc list-inside space-y-1">
          <li>Gopay: 08xx-xxxx-xxxx</li>
          <li>OVO: 08xx-xxxx-xxxx</li>
          <li>ShopeePay: 08xx-xxxx-xxxx</li>
        </ul>
        <p class="text-[11px] text-slate-500">
          Pastikan nominal sesuai total pesanan. Sistem akan mengecek pembayaran
          secara otomatis.
        </p>
      </div>

      <!-- Transfer Bank -->
      <div v-else-if="method?.id === 'bank'" class="space-y-3">
        <p class="text-xs text-slate-600">
          Lakukan transfer ke salah satu rekening berikut:
        </p>
        <ul class="text-[11px] text-slate-600 space-y-1">
          <li>BCA — 1234567890 a.n. FootZone Store</li>
          <li>BRI — 9876543210 a.n. FootZone Store</li>
          <li>Mandiri — 1122334455 a.n. FootZone Store</li>
        </ul>
        <p class="text-[11px] text-slate-500">
          Setelah transfer, simpan bukti pembayaran jika sewaktu-waktu diperlukan.
        </p>
      </div>

      <!-- fallback kalau belum ada method -->
      <div v-else class="text-xs text-slate-600">
        Metode pembayaran belum dipilih.
      </div>

      <!-- Tombol modal -->
      <div class="mt-6 flex justify-end gap-2">
        <button
          type="button"
          class="px-4 py-1.5 rounded-sm border border-slate-300 text-xs text-slate-700
                 hover:bg-slate-100 transition"
          @click="$emit('close')"
        >
          Kembali
        </button>
        <button
          type="button"
          class="px-4 py-1.5 rounded-sm bg-emerald-600 text-white text-xs font-medium
                 hover:bg-emerald-700 transition"
          @click="$emit('finish')"
        >
          Selesai
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  method: {
    type: Object,
    default: null,
  },
})

defineEmits(['close', 'finish'])
</script>
