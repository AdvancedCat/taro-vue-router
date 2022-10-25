<template>
  <view>说明：本页面演示了 vue-router 的基础功能</view>

  <a></a>

  <view>页面href：{{currentHref}}</view>

  <nut-divider dashed>操作区</nut-divider>
  <nut-button type="default" @click="showHistory">history</nut-button>
  <nut-button type="default" @click="showLocation">location</nut-button>
  <nut-button type="default" @click="clickBack">back()</nut-button>
  <nut-button type="default" @click="clickForward">forward()</nut-button>

  <nut-divider dashed>点击Tab</nut-divider>
  <view>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <view class="tab-box">
      <router-link class="tab-item" to="/" replace>Home</router-link> |
      <!-- query传参 -->
      <router-link class="tab-item" to="/tab1?name=advancedcat&from=china" replace>Tab 1</router-link> |
      <!-- 命名视图 -->
      <router-link class="tab-item" to="/tab2">Tab 2</router-link> |
      <!-- 路由传参 -->
      <router-link class="tab-item" to="/tab3/1234/8765">Tab 3</router-link> |
      <!-- 命名路由 -->
      <router-link class="tab-item" :to="{ name: 'user', params: { id: '9876' }}">User</router-link> |
    </view>

    <router-view name="Header"></router-view>
    <router-view></router-view>
    <router-view name="Footer"></router-view>
  </view>

</template>

<script setup>
  import {ref, onMounted} from 'vue'
  import './index.scss'

  const currentHref = ref(window.location.href)

  onMounted(() => {
    window.addEventListener('popstate', () => {
      console.log('触发popstate事件')
      currentHref.value = window.location.href
    })
  })

  function showHistory(){
    console.log('history', window.history)
  }

  function showLocation(){
    console.log('location', window.location)
  }

  function clickBack(){
    window.history.back()
  }

  function clickForward(){
    window.history.forward()
  }
</script>
