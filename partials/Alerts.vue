<template>
  <!--- Alerts -->
  <div class="py-12 sm:py-24 px-3 sm:px-0 border-b">
    <div class="container mx-auto">
      <div class="sm:flex">
        <div class="sm:w-1/3">
          <div class="font-bold font-display text-2xl mb-3">Alerts</div>
          <div class="text-gray-600">
            Used for adding notices around the interface
          </div>
        </div>
        <div class="sm:w-2/3">
          <Alert class="mb-4">
            A simple Default alert. Here is
            <a href="#">an example link</a>.
          </Alert>
          <Alert type="primary" class="mb-4">
            A simple Primary alert. Here is
            <a href="#">an example link</a>.
          </Alert>
          <Alert type="success" class="mb-4">
            A simple Success alert. Here is
            <a href="#">an example link</a>.
          </Alert>
          <Alert type="warning" class="mb-4">
            A simple Warning alert. Here is
            <a href="#">an example link</a>.
          </Alert>
          <Alert type="danger" class="mb-4">
            A simple Danger alert. Here is
            <a href="#">an example link</a>.
          </Alert>

          <Alert type="info" class="mb-4">
            A simple Information alert. Here is
            <a href="#">an example link</a>.
          </Alert>

          <code-highlight>{{ example }}</code-highlight>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    example() {
      return `
        <Alert class="mb-4">
          A simple Primary alert. Here is
          <a href="#">an example link</a>.
        </Alert>

        <Alert type="success" class="mb-4">
          A simple Success alert. Here is
          <a href="#">an example link</a>.
        </Alert>

        <Alert type="warning" class="mb-4">
          A simple Warning alert. Here is
          <a href="#">an example link</a>.
        </Alert>

        <Alert type="danger" class="mb-4">
          A simple Danger alert. Here is
          <a href="#">an example link</a>.
        </Alert>

        <Alert type="info" class="mb-4">
          A simple Information alert. Here is
          <a href="#">an example link</a>.
        </Alert>
      `
        .replace(/        /g, '')
        .trim()
    }
  }
}
</script>

<style scoped>
.sticky {
  top: 120px;
}
</style>
