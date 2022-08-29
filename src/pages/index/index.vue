<template>

  <view>说明：本页面演示了仅依靠 history & location 对象实现页面路由功能，未使用 vue-router 的功能</view>

  <view>页面href：{{currentHref}}</view>

  <nut-divider dashed>操作区</nut-divider>
  <nut-button type="default" @click="showHistory">history</nut-button>
  <nut-button type="default" @click="showLocation">location</nut-button>
  <nut-button type="default" @click="clickBack">back()</nut-button>
  <nut-button type="default" @click="clickForward">forward()</nut-button>

  <nut-divider dashed>点击Tab</nut-divider>

  <view class="tab-box">
    <view class="tab-item" data-hash="#/" @click="clickLink">Tab1</view>
    <view class="tab-item" data-hash="#/2" @click="clickLink">Tab2</view>
    <view class="tab-item" data-hash="#/3" @click="clickLink">Tab3</view>
  </view>
  <component :is="currentView" />

  <nut-divider dashed>跳转</nut-divider>
  <nut-button block type="default" @click="goToPage('/pages/vue-router/index')">前往"vue-router"页面</nut-button>

</template>

<script>
// 示例来源于Vue官方文档： https://staging-cn.vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch
import './index.scss'
import Taro from '@tarojs/taro'

import Tab1 from './Tab1.vue'
import Tab2 from './Tab2.vue'
import Tab3 from './Tab3.vue'
const routes = {
  '/': Tab1,
  '/2': Tab2,
  '/3': Tab3
}

export default {
  data() {
    return {
      currentPath: window.location.hash,
      currentHref: window.location.href
    }
  },
  methods: {
    clickLink(event){
      const hash = event.target.dataset.hash
      window.history.pushState(null, '', hash)
    },

    clickBack(){
      window.history.back()
    },

    clickForward(){
      window.history.forward()
    },

    showHistory(){
      console.log('history', window.history)
    },

    showLocation(){
      console.log('location', window.location)
    },

    goToPage(url){
      Taro.navigateTo({url})
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/']
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
      this.currentHref = window.location.href
		})
  }
}
</script>
