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
            <v-btn icon @click="toggleLike(product.id)">
              <template v-if="product.like"><v-icon color="primary">mdi-heart</v-icon></template>
              <template v-else><v-icon color="white">mdi-heart-outline</v-icon></template>
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
  name: "cardList",
  props: {
    products: Array
  },
  computed: {
    cardPadding() {
      return (index) => {
        return (index%2 == 0) ? 'pr-2' : 'pl-2';
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
    toggleLike(id) {
      this.$store.dispatch('product/updateLike', id);
    }
  }
}
</script>

<style scoped>
.prd-info-wrap {
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
