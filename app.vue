<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
body {
  font-family: sans-serif;
  margin: 0;
  overflow-x: hidden;
  background: url('/public/background.jpg') no-repeat center center fixed;
  background-size: cover;
  background-color: rgba(47 53 59);

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0 0 0 / 55%);
    z-index: 1;
  }
}
</style>
