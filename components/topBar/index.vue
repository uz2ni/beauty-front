<template>
  <div class="tbar-wrap">
    <AppSubject :subject="options.pageName"/>
    <SearchBar v-if="options.isSearchBar" @click.native="updateRoute('common/search')"/>
    <IconBar :options="options"/>
  </div>
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
  props: {
    options: Object
  },
  methods: {
    updateRoute(path) {
      this.$router.push({ path: `/${path}`, query:{subject: '검색하기'}, props:true })
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
