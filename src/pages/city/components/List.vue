<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapepr">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapepr">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapepr">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapepr">
            <div class="button">南京</div>
          </div>
          <div class="button-wrapepr">
            <div class="button">成都</div>
          </div>
          <div class="button-wrapepr">
            <div class="button">重庆</div>
          </div>
          <div class="button-wrapepr">
            <div class="button">西安</div>
          </div>
          <div class="button-wrapepr">
            <div class="button">大连</div>
          </div>
          <div class="button-wrapepr">
            <div class="button">广州</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.title {
  line-height: 0.54rem;
  background-color: #eee;
  padding-left: 0.2rem;
  color: #666666;
  font-size: 0.26rem;
}

.border-topbottom&:before {
  border-color: #ccc;
}

.border-bottom&:before {
  border-color: #ccc;
}

.border-topbottom&:after {
  border-color: #ccc;
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  bottom: 0;
  left: 0;
  right: 0;
}

.button-list {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;

  .button-wrapepr {
    float: left;
    width: 33.33%;

    .button {
      margin: 0.1rem;
      padding: 0.1rem 0;
      border-radius: 0.06rem;
      border: 0.02rem solid #ccc;
      text-align: center;
    }
  }
}

.item-list {
  .item {
    line-height: 0.76rem;
    padding-left: 0.2rem;
  }
}
</style>