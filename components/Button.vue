<template>
  <a 
    :href="href">
    <slot/>
  </a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    href: {
      type: String,
      default: '#'
    }
  }
}
</script>
<style lang="sass">
  @import './button'
</style>
