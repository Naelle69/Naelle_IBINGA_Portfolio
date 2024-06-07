import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MyWork from '../views/MyWork.vue'
/* import MyWork from '../views/MyWork.vue' */

const routes = [
  { path: '/', name: HomePage, component: HomePage },
  { path: '/MyWork', name: 'MyWork', component: MyWork},
  /*  { path: '/contact', component: Contact } 
  { path: '/MyWork', name: 'MyWork', component: () => import( '../views/MyWork.vue') },*/
];






const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router