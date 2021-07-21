<template>
  <v-row class="my-0">
    <v-col cols="12">
      <div>
        <v-list two-line class="py-0">
          <v-list-item-group
            active-class="primary--text"
          >
            <template v-for="(item, index) in items">
              <v-list-item :key="item.title" class="list-item-wrap">
                <template v-slot:default="{ active }">
                  <v-list-item-content class="list-content-wrap flex-nowrap py-0">
                    <div class="item-idx">{{ index+1 }}</div>
                    <v-list-item-avatar class="avatar mx-2">
                      <v-img :src="item.profile"></v-img>
                    </v-list-item-avatar>
                    <div class="content-wrap">
                      <v-list-item-title v-text="item.title" class="font-weight-bold item-title"></v-list-item-title>
                      <v-list-item-subtitle v-text="item.subtitle" class="mt-1 item-subtitle"></v-list-item-subtitle>
                    </div>
                  </v-list-item-content>

                  <v-list-item-action class="item-action" @click="updateSelected(item.id)">
                    <v-icon
                      v-if="!item.like"
                      color="grey lighten-1"
                    >
                      mdi-heart-outline
                    </v-icon>

                    <v-icon
                      v-else
                      color="primary darken-3"
                    >
                      mdi-heart
                    </v-icon>
                    <v-list-item-action-text v-text="item.action" class="action-text"></v-list-item-action-text>
                  </v-list-item-action>
                </template>
              </v-list-item>

              <v-divider
                v-if="index < items.length - 1"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>

      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "stackList",
  props: {
    items: Array
  },
  methods: {
    updateSelected(id) {
      this.$store.dispatch('shop/updateLike', id);
    }
  }
}
</script>

<style scoped>
.list-item-wrap {
  height: 80px;
  min-height: 80px;
}
.list-content-wrap > *{
  display: block;
}
.item-idx {
  max-width: 17px;
  font-size: 0.9rem;
}
.avatar {
  max-width: 40px;
}
.item-action {
  width: 40px;
  margin-left: 0 !important;
  align-self: inherit !important;
  align-items: center !important;
}
.action-text {
  font-size: 0.7rem;
}
.item-title {
  font-size: 0.9rem;
}
.item-subtitle {
  font-size: 0.8rem;
}
</style>
