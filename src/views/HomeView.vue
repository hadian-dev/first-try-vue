<script setup lang="ts">
import { ref } from 'vue';
import { PATHS } from '@/constants/paths';
import MenuIcon from '@/components/icons/MenuIcon.vue';
import Header from '@/components/Header.vue';
import TodoList from '@/components/TodoList.vue';
import Footer from '@/components/Footer.vue';

const showCheckBox = ref(false);

function setShowCheckBox(value: boolean) {
  showCheckBox.value = value;
}
</script>

<template>
  <main class="main-content">
    <Header>
      <h1>TODO</h1>
      <RouterLink :to="`${PATHS.DONE_TODO_LIST}`">
        <MenuIcon />
      </RouterLink>
    </Header>
    <TodoList :show-check-box="showCheckBox" />
    <Footer
      :show-check-box="showCheckBox"
      @set-show-check-box="setShowCheckBox"
    />
  </main>
</template>

<style scoped>
.main-content {
  max-width: 1000px;
  margin: 0 auto;
}

.container h1 {
  font-weight: 400;
}

.container a {
  padding: 4px 6px;
  position: absolute;
  right: 16px;
  top: 18px;
  z-index: 2;
  background-color: transparent;
}
</style>
