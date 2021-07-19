<template>
  <div class="search-wrap">
    <v-autocomplete
      dense
      rounded
      solo
      placeholder="검색어를 입력해주세요 :)"
    ></v-autocomplete>
  </div>
</template>

<script>
export default {
  name: "searchBar"
}
</script>

<style scoped>
.search-wrap {
  display: flex;
  align-items: center;
}
.search-wrap::v-deep i {
  color: rgba(0, 0, 0, 0.54) !important;
}
.search-wrap::v-deep .v-text-field__details {
  display: none;
}
.search-wrap::v-deep .v-input__control {
  width: 30vh;
  min-height: 30px !important;
}
.search-wrap::v-deep .v-input__control > div {
  margin-bottom: 0;
  padding: 0 10px;
}
.search-wrap::v-deep .v-input__control > div .v-select__slot > input {
  font-size: 0.75rem;
}
</style>
