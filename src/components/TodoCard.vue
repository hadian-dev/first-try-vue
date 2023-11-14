<script setup lang="ts">
import ShoppingIcon from './icons/ShoppingIcon.vue';
import Checkbox from './Checkbox.vue';

defineProps<{ title: string; checked: boolean; showCheckBox?: boolean }>();
</script>

<template>
  <div class="todo-card">
    <ShoppingIcon />
    <span class="status" />
    <h5 @title="title" class="todo-title">{{ title }}</h5>
    <div class="todo-option-box">
      <div
        :style="[
          showCheckBox ? { opacity: 0, zIndex: 1 } : { opacity: 1, zIndex: 2 },
        ]"
        class="todo-date"
      >
        <strong>18 Jun</strong>
        <span>10:26</span>
      </div>
      <div
        :style="[
          showCheckBox ? { opacity: 1, zIndex: 2 } : { opacity: 0, zIndex: 1 },
        ]"
        class="checkbox"
      >
        <Checkbox :modelValue="checked" />
      </div>
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

.todo-option-box {
  flex-shrink: 0;
  height: 40px;
  min-width: 55px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
}

.checkbox {
  position: absolute;
  margin-right: 4px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 200ms ease-in;
}

.todo-date {
  gap: 8px;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  transition: all 200ms ease-in;
}

.todo-date span {
  font-size: 0.7em;
}
</style>
