<template>
  <div class="demo">使用rem适配</div>
  <div class="norem">
  <div class="demo1">不适用rem适配</div>
  </div>
  <h2>Home</h2>
    <van-button size="large" type="primary">人人都能学Vue3</van-button>
    <i class="iconfont icon-heart"></i>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style>

.demo{
  width: 100px;
  height: 100px;
  background-color: aquamarine;
}
.norem .demo1{
  width: 110px;
  height: 110px;
  background-color: blueviolet;
}

.icon-heart{
  font-size: 3rem;
  color: red;
}
</style>
