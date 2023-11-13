<script setup lang="ts">
import TodoCard from './TodoCard.vue';
</script>

<template>
  <div class="todo-list">
    <TodoCard
      title="Lorem ipsum dolor sit amet, consectetur exadipiscing elit"
    />
    <TodoCard
      title="Lorem ipsum dolor sit amet, consectetur exadipiscing elit"
    />
    <TodoCard
      title="Lorem ipsum dolor sit amet, consectetur exadipiscing elit"
    />
    <TodoCard
      title="Lorem ipsum dolor sit amet, consectetur exadipiscing elit"
    />
  </div>
</template>

<style scoped>
.todo-list {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
