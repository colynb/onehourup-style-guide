<template>
  <div class="py-12 sm:py-24 border-b">
    <div class="container mx-auto">
      <div class="md:flex">
        <div class="w-1/3 pr-12">
          <div class="font-bold font-display text-2xl mb-3">Accordions</div>
          <div class="text-gray-600">
            Toggle element based on the Card for displaying discrete portions of
            information.
          </div>
        </div>
        <div class="w-2/3">
          <div class="flex items-start mb-6">
            <Button small>Small</Button>
            <Button>Standard</Button>
            <Button large>Large</Button>
          </div>
          <div class="flex items-start mb-6">
            <Button danger>Danger</Button>
            <Button outlined>Outlined</Button>
            <Button danger outlined>Outlined Danger</Button>
          </div>

          <div class="flex items-start mb-6">
            <Button pill>Pill Button</Button>
            <Button pill outlined>Pill Button</Button>
            <Button pill outlined danger>Pill Button</Button>
          </div>

          <div class="flex items-start mb-6">
            <Button disabled>Disabled</Button>
          </div>
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
        <Button>Standard</Button>
        <Button small>Small</Button>
        <Button large>Large</Button>
        <Button danger>Danger</Button>
        <Button disabled>Disabled</Button>
        <Button outlined>Outlined</Button>
        <Button danger outlined>Outlined Danger</Button>
        <Button pill>Pill Button</Button>
      `
        .replace(/        /g, '')
        .trim()
    }
  }
}
</script>
