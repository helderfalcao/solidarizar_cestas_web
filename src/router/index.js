import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import InstitutionSave from '../views/InstitutionSave.vue'
import DonateSave from '../views/DonateSave.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Solidarizar' }
  },
  {
    path: '/institution',
    name: 'Institution',
    component: InstitutionSave,
    meta: { title: 'Instituições' }
  },
  {
    path: '/donate',
    name: 'Donate',
    component: DonateSave,
    meta: { title: 'Campanhas' }
  }
]

const router = new VueRouter({
  routes
})

export default router
