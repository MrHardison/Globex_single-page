<template>
  <section
    ref="section"
    class="screen screen__intro">
    <div class="container">
      <div
        class="screen__info screen__info_intro">
        <h1 class="h1">New paradigm digital bank</h1>
        <p class="text">
          Galeo is a digital bank designed to provide free banking service globally and democratise access to financial products and services by leveraging the Bank-as-a-Platform model.
        </p>
        <h3
          v-if="status === null || status === 2"
          class="h3">Would you like to get early access?</h3>
        <h3
          v-if="status === 1"
          class="h3 lineheight">Congratulations! You are on the waitlist now.<br>We will keep you updated on Galeo news!</h3>
        <form
          class="screen__form">
          <div
            v-if="status === null || status === 2"
            class="input-box">
            <input
              v-model="email"
              class="input-box__input" 
              type="text" 
              placeholder="E-mail"
              @input="checkInputEmail">
            <div
              :class="{error: status === 2}"
              class="message">{{ message }}</div>
          </div>
          <button
            v-if="status === null || status === 2"
            :class="{ disabled: !markFollowBtn }"
            name="subscribe"
            class="btn btn_blue"
            @click.prevent="subscribe">Follow updates</button>
        </form>
      </div>
      <div class="phone-block">
        <img src="/img/section_1_image_1.png">
      </div>
    </div>
  </section>
</template>

<script>
import Button from '~/components/Button.vue'

export default {
  name: 'Intro',
  components: {
    Button
  },
  props: {
    device: {
      type: Number,
      default: 0
    },
    subscribed: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ''
    },
    status: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      show: true,
      emailPattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      email: null,
      markFollowBtn: false,
      headerFollowBtn: false
    }
  },
  mounted() {
    this.show = true
    this.showFollowBtn()
  },
  methods: {
    checkInputEmail() {
      this.markFollowBtn = this.emailPattern.test(this.email) ? true : false
    },
    showFollowBtn() {
      if (this.device !== 1) {
        return
      } else {
        window.addEventListener('scroll', e => {
          this.headerFollowBtn =
            window.scrollY > this.$refs.section.offsetHeight - 50 ? true : false
          this.$emit('scroll', this.headerFollowBtn)
        })
      }
    },
    subscribe() {
      if (this.markFollowBtn) {
        this.$emit('subscribe', this.email)
      }
    }
  }
}
</script>

<style scoped>
</style>
