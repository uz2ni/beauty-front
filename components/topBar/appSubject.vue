<template>
  <div class="subject-wrap">
    <h4 v-if="subject.length>0">{{ subject }}</h4>
  </div>
</template>

<script>
export default {
  name: "appSubject",
  props: {
    subject: String
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
</style>
