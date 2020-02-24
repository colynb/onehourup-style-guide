import Vue from 'vue'

import CodeHighlight from '~/components/Highlight'

import Alert from '~/components/Alert'
import Badge from '~/components/Badge'
import Button from '~/components/Button'
import InputText from '~/components/Form/InputText'
import InputTextarea from '~/components/Form/InputTextarea'

import 'vue-code-highlight/themes/prism.css'

Vue.component('Alert', Alert)
Vue.component('Badge', Badge)
Vue.component('Button', Button)
Vue.component('InputText', InputText)
Vue.component('InputTextarea', InputTextarea)
Vue.component('CodeHighlight', CodeHighlight)
