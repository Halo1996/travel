<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe601;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe605;</span> 输入城市/景点/游玩/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe607;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
    // ...mapGetters(['doubleCity'])
  }
}
</script>
<style lang="stylus" scoped>
// 使用@代替src 在css中引入前面要加一个~
@import '~styles/varibles.styl';

.header {
  line-height: 0.86rem;
  background-color: $bgColor;
  display: flex;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background-color: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    min-width: 1.04rem;
    padding: 0 0.1rem;
    float: right;
    text-align: center;
    color: white;

    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>