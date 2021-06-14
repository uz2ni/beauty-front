<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="banner in banners"
        :key="banner.id"
        :cols="12"
      >
        <a :href="banner.landingUrl"><v-card class="my-1">
          <v-img
            src="/images/price-banner-01.png"
            class="white--text align-center"
            height="100px"
          >
            <v-card-title v-text="banner.title" class="card-tit font-weight-bold"></v-card-title>
            <v-card-subtitle class="font-weight-bold">{{ banner.price }}원</v-card-subtitle>
          </v-img>
        </v-card></a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ app, params }) {
    const { data } = await app.$axios.$get('price-banner')
    return { banners: data.priceBanners }
  }
}
</script>
<style scoped>
.card-tit {
  font-size: 0.9rem;
  line-height: 1rem;
}
</style>
