<template>
  <div class="font-sans text-gray-700 bg-gray-100">
    <div class="bg-primary-darker text-white">
      <div class="container mx-auto py-16">
        <div>
          <Logo class="w-48" />
          <h1 class="font-display font-bold text-6xl">
            Style Guide
          </h1>
          <h2 class="font-display text-2xl">
            An overview of OneHourUp's styling and VueJS components. Based on
            <a
              href="https://tailwindcss.com/"
              class="text-primary hover:underline"
              >Tailwind CSS</a
            >.
          </h2>
        </div>
      </div>
      <div class="container mx-auto">
        <ul class="flex text-xl">
          <li class="-mb-px mr-1">
            <nuxt-link
              to="/"
              class="inline-block py-2 px-4 text-primary-light font-semibold hover:text-primary-dark hover:no-underline"
              >Basics</nuxt-link
            >
          </li>
          <li class="mr-1">
            <nuxt-link
              to="/components"
              class="inline-block py-2 px-4 text-primary-light hover:text-primary-dark hover:no-underline font-semibold"
              >Components</nuxt-link
            >
          </li>
          <li class="mr-1">
            <nuxt-link
              to="/pages"
              class="inline-block py-2 px-4 text-primary-light hover:text-primary-dark hover:no-underline font-semibold"
              >Pages</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo
  }
}
</script>

<style>
html {
  @apply bg-gray-100;
}
.nuxt-link-exact-active {
  @apply rounded-t-lg;
  @apply bg-gray-100;
  @apply text-gray-800;
}
</style>
