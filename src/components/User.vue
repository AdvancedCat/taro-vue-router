<template>
  <view class="index">
    <view>说明：User tab 演示了嵌套路由的用法</view>
    <view>User ID: {{ $route.params.id }}</view>

    <router-link class="tab-item" :to="'/user/'+$route.params.id+'/profile'"><text>Profile</text></router-link>
    <router-link class="tab-item" :to="'/user/'+$route.params.id+'/posts'"><text>Posts</text></router-link>

    <router-view></router-view>
  </view>
</template>

<script setup>
  // 组件内的守卫
  import {onBeforeRouteUpdate} from 'vue-router'
  onBeforeRouteUpdate((to, from) => {
    console.log('to:', to, 'from:', from)
  })
</script>
