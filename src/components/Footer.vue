<script setup lang="ts">
import CheckIcon from './icons/CheckIcon.vue';
import CalenderIcon from './icons/CalenderIcon.vue';
import PlusIcon from './icons/PlusIcon.vue';
import DoubleCheckIcon from './icons/DoubleCheckIcon.vue';
import CloseIcon from './icons/CloseIcon.vue';
defineProps<{ showCheckBox: boolean }>();
</script>

<template>
  <div>
    <footer
      :style="[
        showCheckBox
          ? { opacity: 0, zIndex: '0' }
          : { opacity: 1, zIndex: '10' },
      ]"
    >
      <button class="check-button" @click="$emit('setShowCheckBox', true)">
        <CheckIcon />
      </button>
      <button class="calender-button">
        <CalenderIcon />
      </button>
      <button class="plus-button">
        <PlusIcon />
      </button>
    </footer>
    <footer
      :style="[
        showCheckBox
          ? { opacity: 1, zIndex: '10' }
          : { opacity: 0, zIndex: '0' },
      ]"
    >
      <button class="check-button" @click="$emit('setShowCheckBox', false)">
        <DoubleCheckIcon />
      </button>
      <button class="close-button" @click="$emit('setShowCheckBox', false)">
        <CloseIcon />
      </button>
    </footer>
  </div>
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
  transition: all 200ms ease-in;
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
