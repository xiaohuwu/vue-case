import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

Vue.use(Router)

export default new Router({
    mode: 'history', // 可选：不带 hash
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '', // 默认子路由
                    component: Home
                },
                {
                    path: 'about',
                    component: About
                }
            ]
        }
    ]
})
