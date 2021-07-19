<template>
  <v-row>
    <v-carousel
      cycle
      height="25vh"
      hide-delimiter-background
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(banner, i) in banners"
        :key="i"
        :src="banner.src"
        :href="banner.landingUrl"
      >
      </v-carousel-item>
    </v-carousel>
  </v-row>
</template>

<script>
export default {
  name: "topBanner",
  props: {
    banners: Array
  }
}
</script>

<style scoped>
::v-deep .v-carousel__controls > div > button{
  margin: 0;
  width: 17px;
  height: 17px;
}
::v-deep .v-carousel__controls > div > button > span > i {
  font-size: 10px !important;
}
</style>
