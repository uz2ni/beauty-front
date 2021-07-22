<template>
  <div>
    <CardList :products="ProductLikeList"/>
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
  }
}
</script>
<style scoped>
</style>
