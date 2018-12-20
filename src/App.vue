<template>
  <div class="font-sans bg-grey-lightest h-screen border-t-2 border-green">
    <NavigationHeader/>
    <router-view/>
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
