import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePageRoute from '../HomePage/route/index'
import ProfilePageRoute from '../ProfilePage/route/index';
import DynamicPageRoute from '../DynamicPage/route/index';

Vue.use(VueRouter)

const routes = [
  HomePageRoute,
  ProfilePageRoute,
  DynamicPageRoute
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
