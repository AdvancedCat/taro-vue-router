<template>
  <view class="index">
    <view>说明：你可以从 $route.params 中获取到 pathname 中的路由参数</view>
    <view>path: {{ $route.path }}</view>
    <view>groupId: {{ $route.params.groupId }}</view>
    <view>id: {{ $route.params.id }}</view>
  </view>
</template>

<script>

</script>
