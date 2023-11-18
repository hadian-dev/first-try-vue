<script setup lang="ts">
import Header from '@/components/Header.vue';
import TodoList from '@/components/TodoList.vue';
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon.vue';
import { PATHS } from '@/constants/paths';
</script>

<template>
  <main class="main-content">
    <!-- <header>
      <div class="container">
        <RouterLink :to="`${PATHS.HOME}`">
          <ArrowLeftIcon />
        </RouterLink>
        <h1>DONE TASKS</h1>
      </div>
    </header> -->
    <Header>
      <h1>DONE TASKS</h1>
      <RouterLink :to="`${PATHS.HOME}`">
        <ArrowLeftIcon />
      </RouterLink>
    </Header>
    <TodoList />
  </main>
</template>

<style scoped>
.main-content {
  max-width: 1000px;
  margin: 0 auto;
}

.container h1 {
  font-weight: 300;
}

.container a {
  padding: 4px 6px;
  position: absolute;
  left: 16px;
  top: 14px;
  z-index: 2;
  background-color: transparent;
}
</style>
