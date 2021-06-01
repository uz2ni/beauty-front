<template>
  <v-row>
    <v-col>
      <v-list>
        <nuxt-link to="/shop/prd-list">
          <v-list-item
            v-for="item in items"
            :key="item.title"
          >
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
          </v-list-item>
        </nuxt-link>
      </v-list>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {icon: true, title: 'Papa Receipe', avatar: '/images/brand-logo/papa-recipe.png'},
        {title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
        {title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
      ]
    }
  }
}
</script>
