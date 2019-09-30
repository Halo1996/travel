<template>
  <div>
    <div class="item" v-for="(item, index) of categoryList" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon">
          <img
            class="icon-img"
            src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
            alt
          />
        </span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-chilren">
        <detail-list :categoryList="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    categoryList: Array
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="stylus" scoped>
.item-title-icon {
  position: relative;
  left: 0.06rem;
  display: inline-block;
  width: 0.36rem;
  height: 0.36rem;
  margin-right: 0.1rem;
}

.icon-img {
  width: 100%;
  height: 0.36rem;
  vertical-align: middle;
}

.item-title {
  line-height: 0.8rem;
  font-size: 0.32rem;
  padding: 0 0.2rem;
}

.item-chilren {
  padding: 0 0.2rem;
}
</style>