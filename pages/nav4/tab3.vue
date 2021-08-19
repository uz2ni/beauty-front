<template>
  <div>
    <CardList :products="ProductLikeList" :options="options"/>
  </div>
</template>
<script>
import CardList from "@/components/grid/cardList";
import { mapGetters } from 'vuex';
export default {
  components: {
    CardList
  },
  computed: {
    ...mapGetters({
      ProductLikeList: 'product/getLikeProducts'
    })
  },
  data() {
    return {
      options: {
      scrollDirection: "VERTICAL"
      }
    }
  }
}
</script>
<style scoped>
</style>
