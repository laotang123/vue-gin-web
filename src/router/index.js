import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Home",
            meta: { title: '房源计划创建', icon: 'el-icon-arrow-left' },
            component: Home,
            redirect: '/home',
            children:[
                {
                    path: "/home",
                    name: "home",
                    component: Home
                },
            ]
        },
        {
            path: "/h1",
            name: "Hello",
            meta: { title: '房源计划', icon: 'el-icon-arrow-left' },
            component: ()=>import('@/views/HelloWorld.vue')
        }
    ]
});

export default router;
