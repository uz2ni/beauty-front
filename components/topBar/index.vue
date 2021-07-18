<template>
  <div class="tbar-wrap">
    <div>logo/Title</div>
    <div>searchBar</div>
    <div>iconBar</div>
  </div>
    <!--<v-row
      no-gutters
      class="">
      <v-col cols="" class="d-flex align-center justify-center">
        <v-toolbar-title class="text-center" style="color: white;">BEAUTY</v-toolbar-title>
      </v-col>
      <v-col cols="" class="d-flex align-center justify-center">
        <v-toolbar-title class="text-center" style="color: white;">BEAUTY</v-toolbar-title>
      </v-col>
      <v-col cols="" class="d-flex align-center justify-center">
        <v-toolbar-title class="text-center" style="color: white;">BEAUTY</v-toolbar-title>
      </v-col>
    </v-row>-->
</template>

<script>
export default {
  name: "topBar",
  data() {
    return {
    }
  }

}
</script>

<style scoped>
.tbar-wrap {
  height: 5vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.tbar-wrap > div {
  border: 1px solid black;
}
</style>
