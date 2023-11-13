<script setup lang="ts">
import ShoppingIcon from './icons/ShoppingIcon.vue';

defineProps<{ title: string }>();
</script>

<template>
  <div class="todo-card">
    <ShoppingIcon />
    <span class="status" />
    <h5 @title="title" class="todo-title">{{ title }}</h5>
    <div class="todo-date">
      <strong>18 Jun</strong>
      <span>10:26</span>
    </div>
  </div>
</template>

<style scoped>
.todo-card {
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  color: #000;
  gap: 16px;
  position: relative;
  z-index: 1;
  -webkit-box-shadow: 1.5px 1.5px 5px 1.5px #dddddd;
  -moz-box-shadow: 1.5px 1.5px 5px 1.5px #dddddd;
  box-shadow: 1.5px 1.5px 5px 1.5px #dddddd;
}
.status {
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: #fe1e9970;
  position: absolute;
  z-index: 42;
  left: 4px;
  top: 4px;
}
.todo-title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 400;
  font-size: 1em;
}
.todo-date {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
}

.todo-date span {
  font-size: 0.7em;
}
</style>
