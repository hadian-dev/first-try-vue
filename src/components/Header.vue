<script setup lang="ts"></script>

<template>
  <header>
    <div class="container">
      <slot />
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
</style>
