<template>
  <header 
    class="header container">
    <div class="header__inner">
      <Logo 
        :href="'/'"
        :src="'/img/logo.png'"
        class="logo"/>
      <div
        class="slogan">
        <span class="slogan__text">
          We are
          <a
            class="slogan__text_colored"
            href="https://blog.revolut.com/"
            target="_blank">
            fundraising!
          </a>
          😎
        </span>
      </div>
    </div>
    <div class="header__inner header__inner_end">
      <div
        class="btns-block">
        <Button
          target="_blank" 
          class="btn btn_red">Learn more</Button>
        <button
          v-if="followButton"
          target="_blank" 
          class="btn btn_blue"
          @click="$emit('openModal', false)">Follow updates</button>
        <div
          v-if="!followButton"
          class="block block_ios"/>
        <div
          v-if="!followButton"
          class="block block_android"/>
      </div>
      <Lang/>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Button from '~/components/Button.vue'
import Lang from '~/components/Lang.vue'

export default {
  name: 'Header',
  components: { Logo, Button, Lang },
  props: {
    followButton: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang="sass">
  @import './header'
</style>
