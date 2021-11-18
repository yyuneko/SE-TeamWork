import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
// import router from "@/router";
import router from "./router";
import VueCompositionAPI from '@vue/composition-api'
import VueLazyload from "vue-lazyload";
import ECharts from 'vue-echarts'
import {use} from 'echarts/core'
// 手动引入 ECharts 各模块来减小打包体积
import {CanvasRenderer} from 'echarts/renderers'
import {LineChart} from 'echarts/charts'
import {GridComponent, TooltipComponent} from 'echarts/components'
use([
    CanvasRenderer,
    LineChart,
    GridComponent,
    TooltipComponent
]);
Vue.component('v-chart', ECharts)

Vue.use(VueMaterial, VueCompositionAPI)
Vue.use(VueLazyload,{
    loading:'/loading.gif',
    error:'/loading.gif',
    attempt:20
})
Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
