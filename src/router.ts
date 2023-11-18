import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import DoneTodoListView from './views/done-todo-list/DoneTodoListView.vue';

import { PATHS } from './constants/paths';

const routes = [
  { path: PATHS.HOME, component: HomeView },
  { path: PATHS.DONE_TODO_LIST, component: DoneTodoListView },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
