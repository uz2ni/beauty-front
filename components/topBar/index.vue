<template>
  <div class="tbar-wrap">
    <AppSubject/>
    <SearchBar/>
    <IconBar/>
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
import AppSubject from "@/components/topBar/appSubject";
import SearchBar from "@/components/topBar/searchBar";
import IconBar from "@/components/topBar/iconBar";
export default {
  name: "topBar",
  components: {
    AppSubject, SearchBar, IconBar
  },
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
.tbar-wrap > * {
  /*border: 1px solid black;*/
}
</style>
