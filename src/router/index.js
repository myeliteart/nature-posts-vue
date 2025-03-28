import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Dashboard from '@/views/User/Dashboard/index.vue'
import Profile from '@/components/Dashboard/Profile.vue'
import Articles from '@/components/Dashboard/Articles.vue'
import Add from '@/components/Dashboard/Add.vue'
import Edit from '@/components/Dashboard/Edit.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path: '/',
    name: 'home',
    component: Home
   },
   {
    path: '/:id',
    name: 'articlDetails',
    component: () => import('@/views/ArticleDetails.vue')
   },
   {
    path: '/:id/add-review',
    name: 'AddReview',
    component: () => import ('@/views/AddReview.vue')
   },
   {
    path: '/favorites',
    name: 'favorites',
    component: ()=> import('@/views/Favorites.vue')
   },
   {
    path: '/signin',
    name: 'signin',
    component: ()=> import('@/views/User/signin.vue')
   },
   {
    path: '/user/dashboard',
    redirect: '/user/dashboard/profile',
    name: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: '/user/dashboard',
        redirect: '/user/dashboard/profile'
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile,
      },
      {
        path: 'articles',
        name: 'articles',
        component: Articles,
      },
      {
        path: 'add-articles',
        name: 'addarticles',
        component: Add,
      },
      {
        path: 'edit-articles',
        name: 'editarticles',
        component: Edit,
      }
     ]
    },
    {
        path: '/sun-articles',
        name: 'SunArticle',
        component: () => import ('@/views/Tags/SunArticle.vue')
    },
    {
        path: '/sky-articles',
        name: 'SkyArticle',
        component: () => import ('@/views/Tags/SkyArticle.vue')
    },
    {
        path: '/tree-articles',
        name: 'TreeArticle',
        component: () => import ('@/views/Tags/TreeArticle.vue')
    },
    {
        path: '/water-articles',
        name: 'WaterArticle',
        component: () => import ('@/views/Tags/WaterArticle.vue')
    },
    {
        path: '/mountain-articles',
        name: 'MountainArticle',
        component: () => import ('@/views/Tags/MountainArticle.vue')
    }
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'notFound',
    //   component: () => import('@/views/notFound.vue')
    // }
  ],

    scrollBehavior(){
      return { top: 0}
    },

    linkActiveClass: 'active',
    linkExactActiveClass: 'activeLink'
  })

export default router
