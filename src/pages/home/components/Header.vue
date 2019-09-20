<template>
  <div class="header">
    <div class="left">
      北京
      <span class="iconfont">&#xe606;</span>
    </div>
    <div class="input">
      <img src="@/assets/images/search.png" class="search" />
      <input type="text" placeholder="十一去哪玩呢？" class="text" />
    </div>
    <div class="right">
      <div class="iconfontright">&#xe60d;</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style scoped>
.header {
  display: flex;
  line-height: 86px;
  color: #fff;
}
.left {
  width: 124px;
  float: left;
  font-size: 24px;
  text-align: center;
}
.input {
  /*  flex 是 flex-grow、flex-shrink、flex-basis的缩写。 
      flex:1;的值是1 1 0% 
      flex-grow:：当父控件还有剩余空间的时候，是否进行放大(grow)其中数值代表的是放大比例，值为0的时候表示不放大；

      flex-shrink：当父控件空间不够的时候，是否进行缩小(shrink)其中数值代表的是与控件大小有关的缩小比例；

      flex-basis：当子空间含有这个属性的时候，代表了子空间占主轴的大小，主轴就是flex的主方向row是横向，column是竖向；
      */
  flex: 1;
  height: 64px;
  line-height: 64px;
  font-size: 34px;
  border-radius: 30px;
  margin: 12px 10px;
  color: #ccc;
  background-color: #fff;
  position: relative;
}
.text {
  height: 54px;
  line-height: 54px;
  display: inline-block;
  position: absolute;
  top: 6px;
}
.search {
  margin-left: 20px;
  margin-top: 12px;
  height: 40px;
  width: 40px;
}
.iconfontright {
  font-family: 'iconfont' !important;
  font-size: 52px;
  font-style: normal;
  text-align: center;
}
.right {
  width: 70px;
  float: right;
}
</style>
