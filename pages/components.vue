<template>
  <div>
    <div v-if="false" class="sticky top-0 bg-gray-100 py-6 border-b-2">
      <div class="container mx-auto">
        <div class="flex">
          <a
            href="#alerts"
            class="rounded-full px-4 py-2 text-white bg-gray-700 font-bold"
            >Alerts</a
          >
        </div>
      </div>
    </div>
    <Alerts />
    <Badges />
    <Buttons />
    <Forms />
  </div>
</template>

<script>
import Alerts from '~/partials/Alerts'
import Badges from '~/partials/Badges'
import Buttons from '~/partials/Buttons'
import Forms from '~/partials/Forms'
export default {
  components: {
    Alerts,
    Badges,
    Buttons,
    Forms
  },
  computed: {
    example5() {
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
