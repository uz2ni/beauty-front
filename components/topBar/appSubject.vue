<template>
  <div class="subject-wrap">
    <h4 v-if="subject.length>0" :class="fontColor">{{ subject }}</h4>
  </div>
</template>

<script>
export default {
  name: "appSubject",
  props: {
    subject: String,
    isColor: Boolean
  },
  computed: {
    fontColor: function() {
      return (this.isColor === false) ? 'font-light' : 'font-dark';
    }
  }
}
</script>

<style scoped>
.subject-wrap {
  display: flex;
  align-items: center;
  color: white;
  padding: 7px;
}
.font-light {
  color: white;
}
.font-dark {
  color: #424242;
}
</style>
