<template>
  <div class="close-icon">
    <img src="../../assets/close-icon.svg" alt="close" />
  </div>
</template>

<style scoped>
.close-icon {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  user-select: none;
  background: #181743;
  background: -webkit-linear-gradient(50deg, #181743 0%, #88889f 100%);
  background: linear-gradient(50deg, #181743 0%, #88889f 100%);
}

.close-icon img {
  width: 16px;
  height: 16px;
  object-fit: contain;
}
</style>
