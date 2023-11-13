<template>
  <div class="check-icon">
    <img src="../../assets/plus-icon.svg" alt="plus" />
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
  background: #254dde;
  background: -webkit-linear-gradient(50deg, #254dde 0%, #00ffff 100%);
  background: linear-gradient(50deg, #254dde 0%, #00ffff 100%);
}

.check-icon img {
  width: 16px;
  height: 16px;
  object-fit: contain;
}
</style>
