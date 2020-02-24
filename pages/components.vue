<template>
  <div>
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
