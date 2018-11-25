<template>
  <div class="screen__wave">
    <img
      src="/img/wave.png"
      alt="wave">
  </div>
</template>

<script>
export default {
  name: 'Wave'
}
</script>
<style scoped lang="sass">
  .screen__wave
    bottom: -1px
    height: 339px
    left: 0
    position: fixed
    width: 100%
    z-index: -1
    
    img
      bottom: 0
      left: 50%
      transform: translateX(-50%)
      height: auto
      position: absolute
      max-width: 100%
</style>
