import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home";
import About from "@/views/About";
import Contact from "@/views/Contact";
import Gallery from "@/views/Gallery";
import Product from "@/views/Product";


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
