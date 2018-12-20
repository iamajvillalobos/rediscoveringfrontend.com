<template>
  <section class="max-w-lg mx-auto">
    <div class="pt-8 flex flex-col">
      <img :src="`${baseUrl}avatar.jpg`" alt="image of me" class="h-auto w-1/2 self-center">

      <div class="sm:px-8 pt-8">
        <p>Hey there! 👋 I'm AJ. I'm a web developer from Manila, Philippines.</p>
        <p class="pt-3">
          I love how exciting 🤩 front-end web development these days.
          Before that I was a Ruby developer and working both frontend and
          backend but not doing great at both.
        </p>
        <p class="pt-3">
          This year
          <span class="text-grey-darker text-base">(2019)</span> as I
          transition to working more in the frontend, I want to share my
          experiences and learnings here in this blog.
        </p>
        <p class="pt-3">
          Hope you enjoy reading here and will have something
          new learned.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      baseUrl: process.env.BASE_URL
    };
  }
};
</script>

<style lang="scss" scoped>
p {
  @apply text-xl leading-normal;
}
</style>


