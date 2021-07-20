<template>
  <StackList :items="shopLikeList"/>
</template>
<script>
import StackList from "@/components/grid/stackList";
import { mapGetters } from 'vuex';
export default {
  components: {
    StackList
  },
  computed: {
    ...mapGetters({
      shopLikeList: 'shop/getLikeShops'
    })
  }
}
</script>
<style scoped>
</style>
