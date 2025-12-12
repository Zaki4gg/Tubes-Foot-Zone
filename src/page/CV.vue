<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

const categories = [
  {
    name: "Skill 1",
    description: "makan",
  },
  {
    name: "skill 2",
    description: "tidur",
  },
  {
    name: "skill 3",
    description: "Prompt dengan sopan",
  },
  {
    name: "Skill 4",
    description: "Immortal",
  },
];

</script>

<template>
    <div class="min-h-screen bg-[white] text-slate-900">
        <Header />
        
        <section class="bg-[#8ea3a7] text-black">
            <div class="max-w-6xl mx-auto px-4 lg:px-0 py-10 md:py-14 ">
                <h1 class="text-2xl md:text-3xl font-bold mb-3">Muhammad Zaki Afriza</h1>
                <h2>
                    11231067
                </h2>
                <p class="text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
                    saya adalah mahasiswa informatika ITK dimana saya adalah mahasiswa. brrrrrrrrrrrrrrrrrrrrrrrrr ok saya semangat sekali
                </p>
            </div>
        </section>

        <section>
            <img>
                <src></src>
            </img>
        </section>

        <section class="bg-white">
            <div class="max-w-6xl mx-auto px-4 lg:px-0 py-10 md:py-12">

                <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

        <Footer />
    </div>
</template>