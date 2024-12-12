<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style lang="scss">
body {
  font-family: sans-serif;
  margin: 0;
  overflow-x: hidden;
  position: relative;
  height: 100%;
  overflow: hidden;
  background-attachment: local;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      linear-gradient(rgba(0 0 0 / 50%), rgba(0 0 0 / 50%)),
      url('/public/background.jpg') no-repeat center center fixed;
    background-size: cover;
    transform: translateZ(0);
    background-color: rgba(47 53 59);
    z-index: -1;
  }
}
</style>
