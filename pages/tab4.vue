<template>
  <v-row>
    <v-col>
      <v-list>
        <v-list-item
            v-for="item in items"
            :key="item.title"
        >
          <nuxt-link :to="'/shop/'+item.id" class="shop-a">
            <v-list-item-icon>
              <v-icon
                v-if="item.icon"
                color="pink"
              >
                mdi-star
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
          </nuxt-link>
        </v-list-item>

      </v-list>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {id: 1, icon: true, title: 'Papa Receipe', avatar: '/images/brand-logo/papa-recipe.png'},
        {id: 2, title: '테스트 브랜드2', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {id: 3, title: '테스트 브랜드3', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
        {id: 4, title: '테스트 브랜드4', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
        {id: 5, title: '테스트 브랜드5', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {id: 6, title: '테스트 브랜드6', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
        {id: 7, title: '테스트 브랜드7', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
        {id: 8, title: '테스트 브랜드8', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {id: 9, title: '테스트 브랜드9', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
        {id: 10, title: '테스트 브랜드10', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'}
      ]
    }
  }
}
</script>
<style scoped>
.shop-a {
  display: flex;
  width: 100%;
}
</style>
