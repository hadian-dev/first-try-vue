<script setup lang="ts">
import { computed } from 'vue';
import RainbowCheckIcon from './icons/RainbowCheckIcon.vue';

// defineProps<{
//   modelValue:string;
//   // isChecked:boolean;
//   // label:string;
//   // value: []
//   // id:number
// }>()

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <label class="checkbox">
    <input type="checkbox" v-model="value" />
    <span class="icon">
      <RainbowCheckIcon />
    </span>
  </label>
</template>

<style scoped>
.checkbox {
  border: 2px solid #18174333;
  border-radius: 8px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.checkbox input {
  visibility: hidden;
  position: absolute;
  width: 0;
  height: 0;
  top: 0;
  left: 0;
}

.checkbox .icon {
  opacity: 0;
  width: 0;
  transition: all 200ms ease-in-out;
}

.checkbox input:checked + .icon {
  opacity: 1;
  width: 30px;
  transition: all 200ms ease-in-out;
}
</style>
