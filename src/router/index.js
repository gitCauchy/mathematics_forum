import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router";
import Home from "@/views/Home";

const routes = [
    {path: '/', component: Home}

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router