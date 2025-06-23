import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Contact from '@/components/Contact.vue'
import Gallery from "@/components/Gallery.vue";
import About from "@/components/About.vue";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/about', name: 'About', component: About },
    { path: '/gallery', name: 'Gallery', component: Gallery }


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router