import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue'
import Main from '@/views/Main.vue'
import HelloWorld from '@/views/HelloWorld.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Main",
            // meta: { title: '房源计划创建', icon: 'el-icon-arrow-left' },
            component: Main,
            // redirect: '/home',
            children: [
                {
                    path: "/home",
                    name: "home",
                    component: Home
                },
                {
                    path: "/hello",
                    name: "hello",
                    component: HelloWorld
                },
            ]
        },
        {
            path: "/h1",
            name: "Hello",
            meta: {title: '房源计划', icon: 'el-icon-arrow-left'},
            component: () => import('@/views/HelloWorld.vue')
        }
    ]
});

export default router;
