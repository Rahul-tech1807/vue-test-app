<template>
  <div>
    <h2 v-if="message">Message from First Child to Second child: {{ message }}</h2>
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>
<style scoped>
div {
  margin-top: 5px;
  text-align: center;
}

h2 {
  color: #8e44ad;
}
</style>

