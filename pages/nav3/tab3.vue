<template>
  <div>
    <v-row class="pl-4 pt-4"><h4 class="stack-title">LIVE NOW</h4></v-row>
    <CardList :products="productList" :options="options"/>
  </div>
</template>

<script>
import CardList from "@/components/grid/cardList";
import { mapGetters } from "vuex";
export default {
  components: {
    CardList
  },
  computed: {
    ...mapGetters({
      productList: 'product/getProductAll'
    })
  },
  data() {
    return {
      options: {
        scrollDirection: "HORIZONTAL"
      }
    }
  }
}
</script>
<style scoped>
.stack-title {
  color: #616161;
}
</style>
