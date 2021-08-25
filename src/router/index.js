import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout'
import User from "../views/User";
import Book from "../views/Book";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        redirect:'/home',
        children:[
            {
                path: '/home',
                name: 'Home',
                show:true,
                icon:'ios-home',
                component:Home
            },
            {
                path: '/user',
                name: '用户管理',
                show:true,
                icon:'md-contacts',
                component:User
            },
            {
                path: '/book',
                name: '图书管理',
                show:true,
                icon:'ios-book',
                component:Book
            },
            {
                path: '/about',
                name: 'About',
                show: true,
                icon:'md-folder',
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router
