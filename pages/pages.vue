<template>
  <div class="py-12 sm:py-24 px-3 sm:px-0 border-b">
    <div class="container mx-auto">
      <div class="sm:flex">
        <div class="sm:w-1/3">
          <div class="font-bold font-display text-2xl mb-3">Page Examples</div>
          <div class="text-gray-600">
            Putting it all together with full example pages.
          </div>
        </div>
        <div class="sm:w-2/3">
          <div>
            <h3 class="font-display text-lg font-bold mb-6">Account</h3>
            <div class="leading-10">
              <nuxt-link to="/account/profile">Account Profile</nuxt-link>
            </div>
            <div class="leading-10">
              <nuxt-link to="/auth/login">Login</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //
}
</script>
