<template>
  <div class="flex justify-center">
    <div
      class="inline-flex items-center gap-1 bg-white rounded-full border border-slate-200 shadow-sm px-2 py-1"
    >
      <button
        v-for="tab in tabs"
        :key="tab.value"
        type="button"
        @click="onSelect(tab.value)"
        class="px-4 py-1.5 rounded-full text-[11px] md:text-xs transition"
        :class="
          modelValue === tab.value
            ? 'bg-[#8ea3a7] text-white shadow-sm'
            : 'text-slate-600 hover:bg-slate-100'
        "
      >
        {{ tab.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  tabs: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const onSelect = (value) => {
  emit('update:modelValue', value)
}
</script>
