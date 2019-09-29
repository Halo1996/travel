<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="InnerItem of item" :key="InnerItem.id">
          <div class="item border-bottom">{{InnerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
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

  .button-wrapper {
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