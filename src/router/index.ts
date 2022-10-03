import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("@/routes/index.vue")
    }
]

export const router = createRouter({
    routes,
    history: createWebHistory()
})