<template>
  <!-- Buttons -->
  <div class="py-12 sm:py-24 px-3 sm:px-0 border-b">
    <div class="container mx-auto">
      <div class="sm:flex">
        <div class="sm:w-1/3 pr-12">
          <div class="font-bold font-display text-2xl mb-3">Buttons</div>
          <div class="text-gray-600">
            Styles for actions in forms, dialogs, and more with support for
            multiple sizes, states, and more.
          </div>
        </div>
        <div class="sm:w-2/3">
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
            <Button dark>Dark</Button>
            <Button dark outlined>Dark Outlined</Button>
          </div>

          <div class="flex items-start mb-6">
            <Button pill small dark>Dark</Button>
            <Button pill small dark outlined>Dark Outlined</Button>
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
  <!-- End Buttons -->
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
        <Button dark outlined>Outlined</Button>
        <Button dark outlined>Outlined Danger</Button>
        <Button pill>Pill Button</Button>
      `
        .replace(/        /g, '')
        .trim()
    }
  }
}
</script>
