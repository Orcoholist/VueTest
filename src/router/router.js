
import {createRouter, createWebHistory} from "vue-router";

import UserPosts from '@/components/pages/UserPosts.vue';
import Main from "@/components/pages/Main.vue"; 
import About from "@/components/pages/About.vue";
import PostIdPage from "@/components/pages/PostIdPage.vue";




const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: UserPosts
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    // {
    //     path: '/store',
    //     component: PostPageWithStore
    // },
    // {
    //     path: '/composition',
    //     component: PostPageCompositionApi
    // },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;