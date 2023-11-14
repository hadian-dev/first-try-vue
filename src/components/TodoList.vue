<script setup lang="ts">
import TodoCard from './TodoCard.vue';

defineProps<{ showCheckBox: boolean }>();

const todoList = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur exadipiscing elit',
    id: '1',
  },
  {
    title: 'sit consectetur exadipiscing elit',
    id: '2',
  },
  {
    title: 'exadipiscing elit ipsum amet dolor',
    id: '3',
  },
];
</script>

<template>
  <div class="todo-list">
    <TodoCard
      v-for="item in todoList"
      :key="item.id"
      :title="item.title"
      :checked="true"
      :show-check-box="showCheckBox"
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
