import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue'
import Main from '@/views/Main.vue'
import HelloWorld from '@/views/HelloWorld.vue'
import Mall from '@/views/Mall.vue'
import User from '@/views/User.vue'
import PageOne from '@/views/PageOne.vue'
import PageTwo from '@/views/PageTwo.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Main",
            // meta: { title: '房源计划创建', icon: 'el-icon-arrow-left' },
            component: Main,
            redirect: '/home',
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
                {
                    path: "/mall",
                    name: "mall",
                    component: Mall
                },
                {
                    path: "/user",
                    name: "user",
                    component: User
                },
                {
                    path: "/other/page1",
                    name: "page1",
                    component: PageOne
                },
                {
                    path: "/other/page2",
                    name: "page2",
                    component: PageTwo
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

const originalPush = VueRouter.prototype.push;
//重写route的push方法，捕获重复push的异常
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};
export default router;
