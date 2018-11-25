<template>
  <section
    ref="section"
    class="screen screen__intro">
    <div class="container">
      <div
        class="screen__info screen__info_intro">
        <transition name="text">
          <div v-show="show">
            <h1 class="h1">New paradigm digital bank</h1>
            <p class="text">
              Developing based on the Bank-as-a-Platform principle digital bank, designed to provide a free banking for everyone globally and revolutionise the access to financial products.
            </p>
            <h3 class="h3">Would you like to get early access?</h3>
            <h3 class="h3 subscribed">You are subscribed!</h3>
             
            <form class="screen__form">
              <div class="input-box">
                <input
                  v-model="email"
                  class="input-box__input" 
                  type="text" 
                  name="email" 
                  placeholder="E-mail"
                  @input="checkInputEmail">
              </div>
              <button
                :class="{disabled: !markFollowBtn}" 
                class="btn btn_blue"
                @click.prevent="$emit('subscribe', !subscribe)">Follow updates</button>
            </form>
          </div>
        </transition>
      </div>
      <transition name="slideDown">
        <div v-show="show">
          <div class="phone-block">
            <img src="/img/section_1_image_1.png">
          </div>
        </div>
      </transition>
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
    subscribedEmail: {
      type: String,
      default: ''
    },
    device: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      show: true,
      subscribe: false,
      emailPattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      email: '',
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
            window.scrollY > this.$refs.section.offsetHeight + 50 ? true : false
          this.$emit('scroll', this.headerFollowBtn)
        })
      }
    }
  }
}
</script>

<style scoped>
.text-enter-active,
.text-leave-active {
  animation: text 1.5s ease-in;
}
.slideDown-enter-active,
.slideDown-leave-active {
  animation: image 1s ease-out;
}
@keyframes text {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes image {
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
