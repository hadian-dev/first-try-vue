<script setup lang="ts">
import DoubleCheckIcon from './icons/DoubleCheckIcon.vue';
import CloseIcon from './icons/CloseIcon.vue';
</script>

<template>
  <footer>
    <button class="check-button" @click="$emit('setShowCheckBox', false)">
      <DoubleCheckIcon />
    </button>
    <button class="close-button" @click="$emit('setShowCheckBox', false)">
      <CloseIcon />
    </button>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 24px;
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  background: #e8ecfd;
  background: -webkit-linear-gradient(
    0deg,
    #e8ecfd 0%,
    rgba(204, 236, 255, 0) 100%
  );
  background: linear-gradient(0deg, #e8ecfd 0%, rgba(204, 236, 255, 0) 100%);
}

footer button {
  padding: 0;
  border-radius: 100%;
  border-width: 0;
}

footer .check-button {
  filter: drop-shadow(0 3px 8px #fe1e9a63);
}

footer .close-button {
  filter: drop-shadow(0 3px 8px #18174363);
}
</style>
