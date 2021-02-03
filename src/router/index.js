import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Consult from '../views/Consult.vue';
import Contact from '../views/Contact.vue';
import New from '../views/New.vue';
import Ref from '../views/Ref.vue';
import Service from '../views/Service.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/consult',
    name: 'Consult',
    component: Consult
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/new',
    name: 'New',
    component: New
  },
  {
    path: '/ref',
    name: 'Ref',
    component: Ref
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  }
];

const router = new VueRouter({
  routes
});

export default router;