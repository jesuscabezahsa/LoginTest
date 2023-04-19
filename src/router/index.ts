import { createRouter, createWebHistory } from "vue-router";
import AnimalRandomPage from "../AnimalsRandom/pages/AnimalRandomPage.vue";
import isAutetincatedGuard from "./auth-guard";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'AnimalRandom',
            beforeEnter: [isAutetincatedGuard],
            component: AnimalRandomPage
        },
        {
            path: "/login",
            name: 'Login',
            component: () => import("../Login/pages/LoginPage.vue")
        },
        {
            path: "/:pathMatch(.*)*",
            name: 'NotFound',
            redirect: () => ({ name: 'AnimalRandom' })
        }
    ]
})

export default router