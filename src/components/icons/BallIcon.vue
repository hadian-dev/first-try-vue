<template>
  <div class="ball-icon">
    <img src="../../assets/ball-icon.svg" alt="ball" />
  </div>
</template>

<style scoped>
.ball-icon {
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  user-select: none;
  background: #fe1e9a;
  background: -webkit-linear-gradient(182deg, #fe1e9a 0%, #254dde 100%);
  background: linear-gradient(182deg, #fe1e9a 0%, #254dde 100%);
}

.ball-icon img {
  width: 16px;
  height: 16px;
  object-fit: contain;
}
</style>
