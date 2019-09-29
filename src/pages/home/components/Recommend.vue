<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img :src="item.imgUrl" alt class="item-img" />

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommecd',
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_200x200_32e22bed.jpg',
          title: '奥林匹克塔',
          desc: '奥林匹克塔'
        },
        {
          id: '0002',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫',
          desc: '故宫'
        },
        {
          id: '0003',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
          title: '北京野生动物园',
          desc: '北京野生动物园'
        },
        {
          id: '0004',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
          title: '八达岭长城',
          desc: '八达岭长城'
        },
        {
          id: '0005',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
          title: '北京欢乐谷',
          desc: '北京欢乐谷'
        },
        {
          id: '0006',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1903/5d/5dcaf453dfd6f5dba3.img.jpg_200x200_51d03f19.jpg',
          title: '古北水镇',
          desc: '古北水镇'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.2rem;
}

.item {
  display: flex;
  height: 1.9rem;
  overflow: hidden;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    min-width: 0;
    padding: 0.1rem;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }

    .item-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      color: #fff;
      background-color: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
    }
  }
}
</style>