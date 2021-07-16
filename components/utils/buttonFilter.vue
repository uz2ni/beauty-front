<template>
  <v-row>
    <v-col
      cols="12" class="py-0"
    >
      <v-sheet>
        <v-chip-group
          active-class="primary--text"
          v-model="tagSelected"
        >
          <v-chip
            v-for="(tag, index) in tags"
            :key="tag"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-sheet>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: "ButtonFilter",
  data() {
    return {
      tagSelected: 0,
      tags: [
        '전체',
        '10대',
        '20대',
        '30대',
        '40대',
        '50대'
      ]
    }
  }
}
</script>

<style scoped>
::v-deep .v-chip__content {
  font-size: 0.8rem;
}
::v-deep .v-chip:not(.v-chip--active) {
  background: none;
  border: 1px solid #e0e0e0;
}
::v-deep .v-chip--active {
  background-color: #0D47A1 !important;
}
::v-deep .v-chip--active .v-chip__content {
  color: white;
}

</style>
