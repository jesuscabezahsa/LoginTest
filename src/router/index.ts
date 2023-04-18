import { createRouter, createWebHistory } from "vue-router";
import AnimalRandomVue from "../AnimalsRandom/components/AnimalRandom.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/", name: 'AnimalRandom', component: AnimalRandomVue
        },
        {
            path:"/login", name: 'Login', component: () => import("../Login/components/Login.vue")
        },
        {
            path: "/:pathMatch(.*)*", name: 'NotFound', redirect: () => ({ name: 'AnimalRandom'})
        }
    ]
})

export default router