import Vue from 'vue'
// import ElementUI from 'element-ui'

// import '~/assets/css/element.scss'

import CodeHighlight from '~/components/Highlight'

import Fragment from 'vue-fragment'
import Alert from '~/components/Alert'
import Badge from '~/components/Badge'
import Button from '~/components/Button'
import Card from '~/components/Card'
import InputCheckbox from '~/components/Form/InputCheckbox'
import InputRadio from '~/components/Form/InputRadio'
import Display from '~/components/Display'
import InputText from '~/components/Form/InputText'
import InputTextarea from '~/components/Form/InputTextarea'
import InputToggle from '~/components/Form/InputToggle'
import FormGroup from '~/components/Form/FormGroup'

// Vue.use(ElementUI)

Vue.use(Fragment.Plugin)
Vue.component('Alert', Alert)
Vue.component('Badge', Badge)
Vue.component('Button', Button)
Vue.component('Card', Card)
Vue.component('Display', Display)
Vue.component('InputCheckbox', InputCheckbox)
Vue.component('InputRadio', InputRadio)
Vue.component('InputText', InputText)
Vue.component('InputTextarea', InputTextarea)
Vue.component('InputToggle', InputToggle)
Vue.component('FormGroup', FormGroup)
Vue.component('CodeHighlight', CodeHighlight)
