import {createRouter, createWebHistory} from 'vue-router'


import MyAbout from '../views/MyAbout'
import MyHome from '../views/MyHome'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MyHome
    },
    {
        path: '/about',
        name: 'About',
        component: MyAbout
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router