<template>
  <a :href="href">
    <img
      :src="src" 
      class="logo__img"
      alt="Logo">
  </a>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    src: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="sass">
  @import './logo'
</style>
