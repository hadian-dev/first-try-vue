<script setup lang="ts">
import MenuIcon from './icons/MenuIcon.vue';
</script>

<template>
  <header>
    <div class="container">
      <h1>TODO</h1>
      <button>
        <MenuIcon />
      </button>
    </div>
  </header>
</template>

<style scoped>
header {
  margin-top: 80px;
}
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  padding: 16px 16px 24px;
  background: rgba(255, 255, 255, 0);
  background: -webkit-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 100%
  );
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #ffffff 80%);
}

.container h1 {
  font-weight: 400;
}

.container button {
  padding: 4px 6px;
  position: absolute;
  right: 16px;
  top: 18px;
  z-index: 2;
  background-color: transparent;
}
</style>
