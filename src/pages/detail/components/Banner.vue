<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_600x330_3f524da7.jpg"
        alt
      />
      <div class="banner-info">
        <div class="banner-title">奥林匹克塔</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe655;</span>8
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data() {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1804/cf/cfab40f6cd9d80f1a3.img.jpg_350x240_57952850.jpg',
        'http://img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_350x240_8b1488b0.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true
    },
    handleGallaryClose() {
      this.showGallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  color: #fff;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      font-size: 0.32rem;
      padding: 0 0.2rem;
      flex: 1;
    }

    .banner-number {
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      line-height: 0.32rem;
      height: 0.32rem;
      border-radius: 0.2rem;
      background-color: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
    }

    .banner-icon {
      font-size: 0.24rem;
    }
  }
}
</style>