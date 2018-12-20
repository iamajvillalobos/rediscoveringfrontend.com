<template>
  <header class="bg-white shadow py-12">
    <!-- Logo -->
    <div class="container mx-auto flex justify-center">
      <router-link class="no-underline text-grey-darkest" to="/">
        <div class="flex flex-row items-center">
          <svg
            class="h-6 w-6 fill-current text-green"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z"></path>
          </svg>
          <h1 class="text-3xl font-medium tracking-normal">rediscoveringfrontend</h1>
        </div>
      </router-link>
    </div>

    <!-- Links -->
    <div class="flex flex-row justify-center p-2">
      <ul class="flex flex-row list-reset">
        <li>
          <router-link class="link" to="/about">About</router-link>
        </li>
        <li>
          <router-link class="link" to="/archives">Archives</router-link>
        </li>
        <li>
          <router-link class="link" to="/now">Now</router-link>
        </li>
        <li>
          <router-link class="link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavigationHeader"
};
</script>

<style lang="scss" scoped>
li {
  @apply pl-4;
}

.link {
  @apply no-underline text-sm uppercase text-green-dark tracking-wide;
}
</style>


