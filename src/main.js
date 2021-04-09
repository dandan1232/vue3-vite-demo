import {
    createApp
} from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

import 'vant/lib/index.css'
//引入移动端rem适配
import 'lib-flexible/flexible'

//按需引入vant的按钮组件
import {
    Button,
    Tabbar,
    TabbarItem,
    Icon
} from 'vant'

//链式写法
createApp(App)
    .use(router)
    .use(Button)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Icon)
    .mount('#app')

// //vue2风格的使用
// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'
// import router from './router'
// // 全局引入vant组件库样式
// import "vant/lib/index.css"
// //按需引入vant的按钮组件
// import { Button } from 'vant'

// const app = createApp(App)
// app.use(router)
// app.use(Button)
// app.mount('#app')