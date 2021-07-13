<template>
  <div>
    <div class="text-center mb-7 shop-title" style="line-height: 7vh; height:7vh;"><strong>Papa Recipe</strong></div>
    <ul class="prdList">
      <li v-for="product in products"
          :key="product.id"
      >
        <div class="thumbnail">
          <a :href="'https://m.paparecipe.com' + product.detailUrl">
            <img :src="product.thumbUrl" :alt="product.title">
          </a>
        </div>
        <div class="description">
          <strong class="name"><nuxt-link :to="product.detailUrl">{{ product.title }}</nuxt-link></strong>
          <ul v-if="product.salePrice != ''" class="price">
            <!-- 할인가 있는 경우 -->
            <li>
              <strong class="title d-none"><span>판매가</span></strong>
              <span style="text-decoration:line-through;">{{ product.price | comma }}원</span>
            </li>
            <li>
              <strong class="title d-none"><span>할인가</span></strong>
              <span><strong>{{ product.salePrice | comma }}원</strong></span>
            </li>
          </ul>
          <!-- 할인가 없는 경우 -->
          <ul v-else class="price">
            <li>
              <strong class="title d-none"><span>판매가</span></strong>
              <span><strong>{{ product.price | comma }}원</strong></span>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  // async asyncData ({ app, params }) {
  //   console.log("params:");
  //   console.log(params);
  //   const { data } = await app.$axios.$get(`shop/${params.id}/products`)
  //   return { products: data.products }
  // },
  data() {
    return {
      products: [
        {
          "title" : "제품명1",
          "price" : 10000,
          "salePrice" : 9000,
          "detailUrl" : "http://naver.com",
          "thumbUrl" : "/images/price-banner-01.png"
        }
      ]
    }
  },
  created() {
    console.log(this.products);
  },
  filters:{
    comma(val){
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }

}
</script>

<style scoped>
.shop-title {
 font-size: 1.7rem;
}
.prdList {
  padding-left: 0;
}
.prdList > li {
  display: inline-block;
  margin: 0 0 23px;
  vertical-align: top;
  text-align: center;
  padding: 0 4px;
  /* 반응형 너비 */
  width: 50%;
}
.prdList > li img {
  width: 100%;
}
.price span > strong {
  color: rgb(13 71 161);
}

/* common */
a {
  text-decoration: none;
  color: #333;
}
ul li {
  list-style: none;
}
.description {
  font-size: 0.9rem;
  letter-spacing: -.5px;
}

/* 데스크탑 */
@media screen and (min-width: 769px) {
  .prdList > li {
    width: 25%;
  }
}
</style>
