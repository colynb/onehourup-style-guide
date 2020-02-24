import Vue from 'vue'

import CodeHighlight from '~/components/Highlight'

import Fragment from 'vue-fragment'
import Alert from '~/components/Alert'
import Badge from '~/components/Badge'
import Button from '~/components/Button'
import Card from '~/components/Card'
import Display from '~/components/Display'
import InputText from '~/components/Form/InputText'
import InputTextarea from '~/components/Form/InputTextarea'
import FormGroup from '~/components/Form/FormGroup'

import 'vue-code-highlight/themes/prism.css'

Vue.use(Fragment.Plugin)
Vue.component('Alert', Alert)
Vue.component('Badge', Badge)
Vue.component('Button', Button)
Vue.component('Card', Card)
Vue.component('Display', Display)
Vue.component('InputText', InputText)
Vue.component('InputTextarea', InputTextarea)
Vue.component('FormGroup', FormGroup)
Vue.component('CodeHighlight', CodeHighlight)
