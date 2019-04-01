<template>
  <header
    class="header centered">
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
            href="#"
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
        <button
          :class="{ show: followButton, hide: !followButton }"
          target="_blank"
          class="btn btn_blue"
          @click="$emit('openModal', false)">Follow updates</button>
        <Button
          target="_blank"
          class="btn btn_red">Watch Video</Button>
      </div>
      <nuxt-link
        to="/invest"
        class="header__link invest"/>
      <a
        target="_blank"
        class="header__link">Blog</a>
    <!-- href="https://blog.omegabank.one/" -->
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Button from '~/components/Button.vue'

export default {
  name: 'Header',
  components: { Logo, Button },
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
