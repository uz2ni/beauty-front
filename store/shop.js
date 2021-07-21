export const state = () => ({
  shopList: [
    {
      id: 1,
      action: '155K',
      subtitle: `기초제품 | 스킨 | 기초 1위`,
      title: '마녀공장',
      profile: '/images/brand-logo/manyo.png',
      like: true
    },
    {
      id: 2,
      action: '2M',
      subtitle: `기초제품 | 토너`,
      title: '파파레서피',
      profile: '/images/brand-logo/papa-recipe.png',
      like: false
    },
    {
      id: 3,
      action: '60K',
      subtitle: `메이크업 | 아이라이너 | 색조 1위`,
      title: '삐아',
      profile: '/images/brand-logo/bbia.jpg',
      like: true
    },
    {
      id: 4,
      action: '',
      subtitle: `메이크업 | 쿠션 | 매트`,
      title: '클리오',
      profile: '/images/brand-logo/clio.jpg',
      like: false
    },
    {
      id: 5,
      action: '18M',
      subtitle: `순함 | 녹차 | 기초`,
      title: '시드물',
      profile: '/images/brand-logo/sidmool.jpg',
      like: false
    },
    {
      id: 6,
      action: '155K',
      subtitle: `기초제품 | 스킨 | 기초 1위`,
      title: '마녀공장2',
      profile: '/images/brand-logo/manyo.png',
      like: false
    },
    {
      id: 7,
      action: '2M',
      subtitle: `기초제품 | 토너`,
      title: '파파레서피2',
      profile: '/images/brand-logo/papa-recipe.png',
      like: false
    },
    {
      id: 8,
      action: '60K',
      subtitle: `메이크업 | 아이라이너 | 색조 1위`,
      title: '삐아2',
      profile: '/images/brand-logo/bbia.jpg',
      like: false
    },
    {
      id: 9,
      action: '',
      subtitle: `메이크업 | 쿠션 | 매트`,
      title: '클리오2',
      profile: '/images/brand-logo/clio.jpg',
      like: false
    },
    {
      id: 10,
      action: '18M',
      subtitle: `순함 | 녹차 | 기초`,
      title: '시드물2',
      profile: '/images/brand-logo/sidmool.jpg',
      like: false
    },
  ]
})

export const mutations = {
  fetchLike(state, id) {
    console.log(id);
    const idx = state.shopList.findIndex(shop => (shop.id === id));
    if(idx !== undefined) {
      state.shopList[idx].like = !state.shopList[idx].like;
    }
    console.log(state.shopList);
  }
}

export const actions = {
  updateLike({ commit }, id) {
    commit('fetchLike', id);
    // 업데디트 호출
    // 리로드?
  }
}

export const getters = {
  getShopAll: state => {
      return state.shopList;
  },
  getLikeShops: state => {
    return state.shopList.filter(shop => shop.like);
  }
}
