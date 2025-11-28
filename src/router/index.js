import {createWebHistory, createRouter} from 'vue-router';

import Home from '@/components/Home.vue';
import Contact from '@/components/Contact.vue';
import Product from '@/components/Product.vue';
import About from '@/components/About.vue';
import Product_Detail from '@/components/Product_Detail.vue';

const routes = [
    {
        path: "/",
        name: 'home',
        component: Home
    },

    {
        path: "/contact",
        name: 'contact',
        component: Contact
    },

    {
        path: "/product",
        name: 'product',
        component: Product
    },

    {
        path: "/about",
        name: 'about',
        component: About
    },

    {
        path: "/product/:id",
        name: 'product-detail',
        component: Product_Detail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router