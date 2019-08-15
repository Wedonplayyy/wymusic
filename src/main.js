import App from './App'
import Vue from 'vue'
import VHtmlPlugin from '@megalo/vhtml-plugin'
import Vuex from 'vuex'
const Fly = require("./native/lib/fly/wx.js")
const fly = new Fly
fly.config.baseURL = "http://116.62.234.172:3000"

Vue.use(VHtmlPlugin)
Vue.use(Vuex)

const store = require('./store').default
Vue.prototype.$store = store
Vue.prototype.$fly = fly

const app = new Vue(App)

app.$mount()

export default {
  config: {
    // pages 的首个页面会被编译成首页
    pages: [
      'pages/home/home',
      'pages/user/user',
      'pages/singer/singer',
      'pages/musicList/musicList'
    ],
    tabBar: {
      color: '#333',
      selectedColor: "#c10d0d",
      list: [
        {
          pagePath: 'pages/home/home',
          text: '首页',
          iconPath: 'native/icons/音乐1.png',
          selectedIconPath: 'native/icons/音乐2.png'
        },
        {
          pagePath: 'pages/singer/singer',
          text: '歌手',
          iconPath: 'native/icons/话筒1.png',
          selectedIconPath: 'native/icons/话筒.png'
        },
        {
          pagePath: 'pages/user/user',
          text: '用户',
          iconPath: 'native/icons/我的1.png',
          selectedIconPath: 'native/icons/我的.png'
        }
      ]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#c10d0d',
      navigationBarTitleText: '网易云音乐',
      navigationBarTextStyle: 'white'
    }
  }
}
