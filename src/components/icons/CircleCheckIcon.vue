<script setup lang="ts">
import CheckIcon from './CheckIcon.vue';
</script>

<template>
  <div class="check-icon">
    <CheckIcon width="18" height="18" />
  </div>
</template>

<style scoped>
.check-icon {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  user-select: none;
  color: #ffffff;
  background: #254dde;
  background: -webkit-linear-gradient(50deg, #254dde 0%, #fe1e9a 100%);
  background: linear-gradient(50deg, #254dde 0%, #fe1e9a 100%);
}
</style>
