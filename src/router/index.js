import {createWebHistory, createRouter} from 'vue-router';

import Home from '@/page/Home.vue';
import Contact from '@/page/Contact.vue';
import Product from '@/page/Product.vue';
import About from '@/page/About.vue';
import Product_Detail from '@/page/Product_Detail.vue';
import Cart from '@/page/Cart.vue';
import Checkout from '@/page/Checkout.vue';
import CV from '@/page/CV.vue';

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
    },

    {
        path: "/cart",
        name: 'cart',
        component: Cart
    },

    {
        path: "/checkout",
        name: 'checkout',
        component: Checkout
    },

    {
        path: "/cv",
        name: 'cv',
        component: CV
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router