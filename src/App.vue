<template>
  <div class="font-sans">
    <NavigationHeader/>
  </div>
</template>

<script>
import NavigationHeader from "./components/NavigationHeader";

export default {
  name: "App",
  components: {
    NavigationHeader
  }
};
</script>


<style lang="scss">
@tailwind preflight;
@tailwind components;
/**
Add custom components here like .btn, .box etc
**/
@tailwind utilities;
</style>
