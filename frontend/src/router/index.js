import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import addProduct from '../views/addProduct.vue'
import editProduct from '../views/editProduct.vue'
import Category from '../views/Category.vue'
import editCategory from '../views/editCategory.vue'
import addCategory from '../views/addCategory.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/add_product',
    name: 'addProduct',
    component: addProduct
  },
  {
    path: '/edit_product',
    name: 'editProduct',
    component: editProduct
  },
  {
    path: '/edit_category',
    name: 'editCategory',
    component: editCategory
  },
  {
    path: '/add_category',
    name: 'addCategory',
    component: addCategory
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})  

export default router
