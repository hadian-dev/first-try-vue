<template>
  <div class="check-icon">
    <img src="../../assets/check-icon.svg" alt="check" />
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
  background: #254dde;
  background: -webkit-linear-gradient(50deg, #254dde 0%, #fe1e9a 100%);
  background: linear-gradient(50deg, #254dde 0%, #fe1e9a 100%);
}

.check-icon img {
  width: 16px;
  height: 16px;
  object-fit: contain;
}
</style>
