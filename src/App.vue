<template>
  <img src="./assets/background.svg" id="background" alt="" />
  <RouterView />
</template>

<style scoped>
#background {
  position: fixed;
  top: -16px;
  left: -40px;
  width: 124%;
  height: 104%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.7;
}
</style>
