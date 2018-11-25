<template>
  <div class="modal">
    <div
      class="close"
      @click="$emit('closeModal', true)"/>
    <form class="subscribe__form">
      <div class="title">Follow updates</div>
      <p class="description">
        Enter your email to subscribe news about Globex
      </p>
      <div class="input-box">
        <input
          v-model="email"
          class="input-box__input" 
          type="text" 
          name="email" 
          placeholder="Email"
          @input="checkInputEmail">
      </div>
      <button
        :class="{disabled: !markFollowBtn}"
        class="btn btn_blue">Subscribe</button>
    </form>
    <div
      v-if="subscribed"
      class="subscribed">
      <div class="subtitle">You are subscribed!</div>
      <div class="btn btn_blue">Great</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  data() {
    return {
      markFollowBtn: false,
      emailPattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      email: '',
      subscribed: false
    }
  },
  methods: {
    checkInputEmail() {
      this.markFollowBtn = this.emailPattern.test(this.email) ? true : false
    }
  }
}
</script>
<style lang="sass" scoped>
.modal
  background: #fff
  box-sizing: border-box
  height: 100vh
  left: 50%
  padding-top: 13%
  position: fixed
  top: 0
  transform: translate(-50%, -200%)
  transition: transform .3s linear
  width: 100%
  z-index: 100

  &.visible
    transform: translate(-50%, 0)

  .close
    box-sizing: border-box
    border: 1px solid rgba($blue-dark, .1)
    border-radius: 50%
    cursor: pointer
    height: 53px
    position: absolute
    right: 35px
    text-align: center
    top: 35px
    width: 53px

    &::before
      content: ''
      background: url('/img/close.svg') center no-repeat / cover
      height: 40px
      left: 51%
      position: absolute
      top: 50%
      transform: translate(-50%, -50%)
      width: 40px

  .subscribe__form
    text-align: center

    .title
      color: #000
      font: 26px/26px $MRegular

    .description
      color: $blue-dark
      font: 22px/22px $Avenir
      margin-top: 25px

    .input-box
      display: inline-block
      margin-top: 115px
      width: 490px

    .btn
      display: block
      margin: 0 auto
      margin-top: 185px
      min-width: 360px

  .subscribed
    margin: 0 auto
    width: 360px

    .subtitle
      font: 36px/36px $MRegular
      margin-bottom: 200px

    .btn
      margin: 0
      min-width: 100%

  @media(max-width: 1680px)
    padding-top: 16%
    
    .subscribe__form
      .input-box
        margin-top: 100px

      .btn
         margin-top: 100px
</style>
