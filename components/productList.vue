<template>
  <v-row class="pa-2">
    <v-col
      v-for="(product, index) in products"
      :key="product.id"
      cols="6"
      :class="cardPadding(index)"
    >
      <v-card
        elevation="0"
        class="mx-auto"
        max-width="344"
      >
        <v-img
          :src="imgUrlSetting(index)"
          class="white--text align-end"
          height="200px"
        >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="updateLike(product.id)">
              <v-icon :color="likeColor(product.id)">{{ likeToggle(product.id) }}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-img>
      </v-card>
      <!-- product info -->
      <div class="prd-info-wrap">
        <div class="prd-shopnm">{{ product.shopName }}</div>
        <div class="prd-title">{{ product.title }}</div>
        <div class="prd-price">{{ product.price | comma }}</div>
      </div>

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "productList",
  data() {
    return {
      likeProduct: [1,2] // product id
    }
  },
  props: {
    products: Array
  },
  computed: {
    cardPadding() {
      return (index) => {
        return (index%2 == 0) ? 'pr-2' : 'pl-2';
      }
    },
    likeColor() {
      return (id) => {
        const productId = this.likeProduct.find((value) => value == id);
        return (productId === undefined) ? 'white' : 'primary';
      }
    },
    likeToggle() {
      return (id) => {
        const productId = this.likeProduct.find((value) => value == id);
        return (productId === undefined) ? 'mdi-heart-outline' : 'mdi-heart';
      }
    }
  },
  filters:{
    comma(val){
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  methods: {
    imgUrlSetting (id) { // 배너 이미지 임시용
      return `/images/banner${id%3+1}.jpg`;
    },
    updateLike(id) {
      const productId = this.likeProduct.find((value) => value == id);
      if(productId === undefined) {
        this.likeProduct.push(id);
      }else {
        const idx = this.likeProduct.indexOf(productId);
        if (idx > -1) this.likeProduct.splice(idx, 1);
      }
    }
  }
}
</script>

<style scoped>
.prd-info-wrap {
  /*border: 1px solid black;*/
  font-size:0.7rem;
  padding-top: 10px;
}
.prd-shopnm {
  font-weight: bold;
  color: #616161;
}
.prd-price {
  font-weight: bold;
  color: black;
  font-size:0.8rem;
}
</style>
