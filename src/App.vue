<template>
  <div id="app"  v-cloak>
    <router-view  v-wechat-title='$route.name'/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
[v-cloak]{
			display: none!important
		}
#app {
  height: 100%;
  padding: 0;
  margin: 0;
}
html  {
  height: 100%
}
body {
  height: 100%
}
</style>


