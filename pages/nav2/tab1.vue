<template>
  <div>
    <buttonFilter :tags="tagList" :isMultiple="true" class="mt-1"/>

    <v-row class="my-0">
      <v-col cols="12">
        <div>
          <v-list two-line class="py-0">
            <v-list-item-group
              v-model="selected"
              active-class="primary--text"
              multiple
            >
              <template v-for="(item, index) in items">
                <v-list-item :key="item.title" class="list-item-wrap">
                  <template v-slot:default="{ active }">
                    <v-list-item-content class="list-content-wrap flex-nowrap py-0">
  <!--                    <span>{{ index+1 }}</span>-->
                      <div class="item-idx">{{ index+1 }}</div>
                      <v-list-item-avatar class="avatar mx-2">
                        <v-img :src="item.profile"></v-img>
                      </v-list-item-avatar>
                      <div class="content-wrap">
                        <v-list-item-title v-text="item.title" class="font-weight-bold item-title"></v-list-item-title>
                        <v-list-item-subtitle v-text="item.subtitle" class="mt-1 item-subtitle"></v-list-item-subtitle>
                      </div>
                    </v-list-item-content>

                    <v-list-item-action class="item-action">
                      <v-icon
                        v-if="!active"
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
  </div>
</template>

<script>
import ButtonFilter from "@/components/utils/buttonFilter";
export default {
  components: {
    ButtonFilter
  },
  data() {
    return {
      selected: [],
      items: [
        {
          action: '155K',
          subtitle: `기초제품 | 스킨 | 기초 1위`,
          title: '마녀공장',
          profile: '/images/brand-logo/manyo.png'
        },
        {
          action: '2M',
          subtitle: `기초제품 | 토너`,
          title: '파파레서피',
          profile: '/images/brand-logo/papa-recipe.png'
        },
        {
          action: '60K',
          subtitle: `메이크업 | 아이라이너 | 색조 1위`,
          title: '삐아',
          profile: '/images/brand-logo/bbia.jpg'
        },
        {
          action: '',
          subtitle: `메이크업 | 쿠션 | 매트`,
          title: '클리오',
          profile: '/images/brand-logo/clio.jpg'
        },
        {
          action: '18M',
          subtitle: `순함 | 녹차 | 기초`,
          title: '시드물',
          profile: '/images/brand-logo/sidmool.jpg'
        },
        {
          action: '155K',
          subtitle: `기초제품 | 스킨 | 기초 1위`,
          title: '마녀공장2',
          profile: '/images/brand-logo/manyo.png'
        },
        {
          action: '2M',
          subtitle: `기초제품 | 토너`,
          title: '파파레서피2',
          profile: '/images/brand-logo/papa-recipe.png'
        },
        {
          action: '60K',
          subtitle: `메이크업 | 아이라이너 | 색조 1위`,
          title: '삐아2',
          profile: '/images/brand-logo/bbia.jpg'
        },
        {
          action: '',
          subtitle: `메이크업 | 쿠션 | 매트`,
          title: '클리오2',
          profile: '/images/brand-logo/clio.jpg'
        },
        {
          action: '18M',
          subtitle: `순함 | 녹차 | 기초`,
          title: '시드물2',
          profile: '/images/brand-logo/sidmool.jpg'
        },
      ],
      tagSelected: [0],
      tagList: [
        '전체',
        '스킨케어',
        '썬케어',
        '메이크업',
        '립',
        '크림'
      ]
    }
  }
}
</script>

<style scoped>
.h-100 {
  height: 100%;
}
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
.tag-wrap {
  font-size: 0.8rem;
}
</style>
