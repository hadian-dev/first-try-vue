<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
import TodoListVue from './components/TodoList.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
  
  </div> -->
  <img src="./assets/background.svg" id="background" alt="" />
  <Header />
  <TodoListVue />
  <Footer />
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
#background {
  position: fixed;
  top: -16px;
  left: -25px;
  width: 124%;
  height: 104%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.7;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
