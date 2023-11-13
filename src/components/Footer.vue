<script setup lang="ts">
import CheckIcon from './icons/CheckIcon.vue';
import CalenderIcon from './icons/CalenderIcon.vue';
import PlusIcon from './icons/PlusIcon.vue';
</script>

<template>
  <footer>
    <button class="check-button">
      <CheckIcon />
    </button>
    <button class="calender-button">
      <CalenderIcon />
    </button>
    <button class="plus-button">
      <PlusIcon />
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
footer .calender-button {
  -webkit-box-shadow: 0px 3px 5px 2px #14141488;
  -moz-box-shadow: 0px 3px 5px 2px #14141488;
  box-shadow: 0px 3px 5px 2px #14141488;
}
footer .plus-button {
  filter: drop-shadow(0 3px 8px #00ffff63);
}
</style>
