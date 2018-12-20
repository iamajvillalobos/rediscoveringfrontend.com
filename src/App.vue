<template>
  <div class="font-sans">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@tailwind preflight;
@tailwind components;
/**
Add custom components here like .btn, .box etc
**/
@tailwind utilities;
</style>
