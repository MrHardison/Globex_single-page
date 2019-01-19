<template>
  <div class="message-block">
    <p class="description">
      By browsing this website, you accept the use of cookies 🍪, as they help us optimise your experience. 
      <nuxt-link
        to="/policy"
        class="link"
        target="_blank">Learn more</nuxt-link>
    </p>
    <button
      class="btn btn_blue"
      @click="$emit('message', $event)">
      ok</button>
  </div>
</template>

<script>
import Button from '~/components/Button.vue'
export default {
  name: 'Message',
  components: { Button }
}
</script>

<style lang="sass" scoped>
.message-block
  align-items: flex-start
  background: #fff
  bottom: 20px
  border-radius: 10px
  box-shadow: 0 2px 20px rgba(0, 0, 0, .14)
  box-sizing: border-box
  display: flex
  left: 20px
  position: fixed
  padding: 16px 20px
  justify-content: space-between
  width: 512px
  z-index: 3

  .description
    color: #000
    font: 14px/24px $MRegular
    text-align: left
    width: 380px

    .link
      color: $blue
      display: block

  .btn
    border-radius: 8px
    height: 35px
    line-height: 35px
    min-width: 61px
    text-transform: uppercase
    font-weight: bold

  @media(max-width: 1390px)
    left: 4%

  @media(max-width: 1023px)
    border-radius: 0
    bottom: 0
    box-shadow: 0 2px 20px rgba(0,0,0,.14)
    left: 0
    padding: 26px 23px 42px 23px
    justify-content: center
    width: 100%

    .description
      width: 236px
      
      .link
        display: inline-block

</style>
