import Vue from 'vue'

import Alert from '~/components/Alert'
import Badge from '~/components/Badge'
import Button from '~/components/Button'
import TypographyDisplay from '~/components/Typography/TypographyDisplay'
import TypographyBlockquote from '~/components/Typography/TypographyBlockquote'

import 'vue-code-highlight/themes/prism.css'

Vue.component('Display', TypographyDisplay)
Vue.component('Blockquote', TypographyBlockquote)
Vue.component('Alert', Alert)
Vue.component('Badge', Badge)
Vue.component('Button', Button)
