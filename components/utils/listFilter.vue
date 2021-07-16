<template>
  <v-row>
    <v-col
      cols="12" class="mt-4 py-0"
    >
      <v-sheet>
        <v-chip-group
          v-model="tagSelected"
        >
          <div
            v-for="(tag, index) in tags"
            :key="tag"
            @click="tagToggle(index)"
            :class="tagActive(index)"
          >
            {{ tag }}
          </div>
        </v-chip-group>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ListFilter",
  data() {
    return {
      tagSelected: 0,
      tags: [
        '전체',
        '스킨/로션',
        '썬케어',
        '크림',
        '립',
        '베이스',
        '마스크'
      ]
    }
  },
  computed: {
    tagActive(index) {
      return (index) => {
        return (index == this.tagSelected) ? 'tag-active' : '';
      }
    }
  },
  methods: {
    tagToggle(index) {
      this.tagSelected = index;
    }
  }
}
</script>

<style scoped>
::v-deep .v-slide-group__content > div {
  font-size: 0.95rem;
  font-weight: bold;
  color: #ccc;
  /* box size */
  height: 25px;
  line-height: 25px;
  text-align: center;
  margin: 0 7px;
}
.tag-active {
  color: #0D47A1 !important;
}

</style>
