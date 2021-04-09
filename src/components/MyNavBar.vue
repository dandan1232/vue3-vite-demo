//底部导航栏组件
<template>
  <van-tabbar v-model="active">
      <van-tabbar-item icon="notes-0" @click="link('/')"> 首页</van-tabbar-item>
      <van-tabbar-item icon="notes-0" @click="link('/find')"> 发现</van-tabbar-item>
      <van-tabbar-item icon="user-0" @click="link('/profile')"> 我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
export default {
    name: 'NavBar',
    props:{
        msg:String,
    },
    setup(){
        const router=useRouter();
        const active=ref(0);
        const link = (path)=>{
            router.push({path});
        };
        return{
            active,
            link,
        };
    },
};
</script>

<style>

</style>