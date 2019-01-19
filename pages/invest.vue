<template>
  <div>
    <div class="header-block">
      <Header class="invest"/>
    </div>
    <div class="head-block">
      <div class="container">
        <div class="image">
          <img
            src="/img/invest-img.png"
            alt="Invest">
        </div>
        <nuxt-link
          to="/"
          class="home-link">
          Back to Home
        </nuxt-link>
        <h2 class="main-title">Our investment prospectus</h2>
        <p class="main-description text">
          Our investment prospectus covers the general Galeo's project details, including the product, marketing, execution process, and the exceptional investment opportunity that Galeo provides. To view the prospectus, please tell us what type of investor you are.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="agreement">
        <div
          ref="item_1"
          class="item">
          <div class="title">
            <h3 class="h3">Everyday investor</h3>
            <div
              :class="{disabled: activeItem === 1 }"
              class="btn btn_blue"
              @click="selectItem(1)">
              Select
            </div>
          </div>
          <p class="description text">
            I haven't and won't invest more than 10% of my<br> assets in illiquid investments like Galeo shares.
          </p>
          <transition name="item">
            <div
              v-show="activeItem === 1"
              class="main-text">
              <p class="text">
                I make this statement so that I can receive promotional communications relating to unlisted shares and unlisted debt securities as a restricted investor. I declare that I qualify as a restricted investor because:
              </p>
              <ul class="text-list">
                <li>
                  in the twelve months preceding, I have not invested more than 10% of my net assets in unlisted shares or unlisted debt securities; and
                </li>
                <li>
                  I undertake that in the twelve months following I will not invest more than 10% of my net assets in unlisted shares or unlisted debt securities.
                </li>
              </ul>
              <p class="text">
                Net assets for these purposes do not include:
              </p>
              <ul class="text-list">
                <li>
                  the property which is my primary residence or any money raised through a loan secured on that property;
                </li>
                <li>
                  any rights of mine under a qualifying contract of insurance; or
                </li>
                <li>
                  any benefits (in the form of pensions or otherwise) which are payable on the termination of my service or on my death or retirement and to which I am (or my dependants are), or may be entitled.
                </li>
              </ul>
              <p class="text">
                I accept that the investments to which the promotions will relate may expose me to a significant risk of losing all of the money or other property invested. I am aware that it is open to me to seek advice from an authorised person who specialises in advising on unlisted shares and unlisted debt securities.
              </p>
              <a
                href="https://galeo.one/files/Galeo_Pitch_Deck.pdf"
                class="btn btn_blue btn_wide">
                I agree to this agreement
              </a>
            </div>
          </transition>
        </div>
        <div
          ref="item_2"
          class="item">
          <div class="title">
            <h3 class="h3">Advised investor</h3>
            <div
              :class="{disabled: activeItem === 2}"
              class="btn btn_blue"
              @click="selectItem(2)">
              Select
            </div>
          </div>
          <p class="description text">
            I've had or will get investment advice from a regulated investment adviser, who'll make sure that my investment in Galeo is right for me before I invest.
          </p>
          <transition name="item">
            <div
              v-show="activeItem === 2"
              class="main-text">
              <p class="text">
                I make this statement so that I can receive promotional communications relating to unlisted shares and unlisted debt securities as a restricted investor. I declare that I qualify as a restricted investor because:
              </p>
              <ul class="text-list">
                <li>
                  in the twelve months preceding, I have not invested more than 10% of my net assets in unlisted shares or unlisted debt securities; and
                </li>
                <li>
                  I undertake that in the twelve months following I will not invest more than 10% of my net assets in unlisted shares or unlisted debt securities.
                </li>
              </ul>
              <p class="text">
                Net assets for these purposes do not include:
              </p>
              <ul class="text-list">
                <li>
                  the property which is my primary residence or any money raised through a loan secured on that property;
                </li>
                <li>
                  any rights of mine under a qualifying contract of insurance; or
                </li>
                <li>
                  any benefits (in the form of pensions or otherwise) which are payable on the termination of my service or on my death or retirement and to which I am (or my dependants are), or may be entitled.
                </li>
              </ul>
              <p class="text">
                I accept that the investments to which the promotions will relate may expose me to a significant risk of losing all of the money or other property invested. I am aware that it is open to me to seek advice from an authorised person who specialises in advising on unlisted shares and unlisted debt securities.
              </p>
              <a
                href="https://galeo.one/files/Galeo_Pitch_Deck.pdf"
                class="btn btn_blue btn_wide">
                I agree to this agreement
              </a>
            </div>
          </transition>
        </div>
        <div
          ref="item_3"
          class="item">
          <div class="title">
            <h3 class="h3">Self-certified sophisticated</h3>
            <div
              :class="{disabled: activeItem === 3}"
              class="btn btn_blue"
              @click="selectItem(3)">
              Select
            </div>
          </div>
          <p class="description text">
            I've invested in an unlisted company in the last two years, I work in a relevant financial industry, or I'm a director of a company with at least £1m turnover.
          </p>
          <transition name="item">
            <div
              v-show="activeItem === 3"
              class="main-text">
              <p class="text">
                I make this statement so that I can receive promotional communications relating to unlisted shares and unlisted debt securities as a restricted investor. I declare that I qualify as a restricted investor because:
              </p>
              <ul class="text-list">
                <li>
                  in the twelve months preceding, I have not invested more than 10% of my net assets in unlisted shares or unlisted debt securities; and
                </li>
                <li>
                  I undertake that in the twelve months following I will not invest more than 10% of my net assets in unlisted shares or unlisted debt securities.
                </li>
              </ul>
              <p class="text">
                Net assets for these purposes do not include:
              </p>
              <ul class="text-list">
                <li>
                  the property which is my primary residence or any money raised through a loan secured on that property;
                </li>
                <li>
                  any rights of mine under a qualifying contract of insurance; or
                </li>
                <li>
                  any benefits (in the form of pensions or otherwise) which are payable on the termination of my service or on my death or retirement and to which I am (or my dependants are), or may be entitled.
                </li>
              </ul>
              <p class="text">
                I accept that the investments to which the promotions will relate may expose me to a significant risk of losing all of the money or other property invested. I am aware that it is open to me to seek advice from an authorised person who specialises in advising on unlisted shares and unlisted debt securities.
              </p>
              <a
                href="https://galeo.one/files/Galeo_Pitch_Deck.pdf"
                class="btn btn_blue btn_wide">
                I agree to this agreement
              </a>
            </div>
          </transition>
        </div>
        <div
          ref="item_4"
          class="item">
          <div class="title">
            <h3 class="h3">High net-worth investor</h3>
            <div
              :class="{disabled: activeItem === 4}"
              class="btn btn_blue"
              @click="selectItem(4)">
              Select
            </div>
          </div>
          <p class="description text">
            I have an annual income of at least £100,000, and/or net assets of at least £250,000.
          </p>
          <transition name="item">
            <div
              v-show="activeItem === 4"
              class="main-text">
              <p class="text">
                I make this statement so that I can receive promotional communications relating to unlisted shares and unlisted debt securities as a restricted investor. I declare that I qualify as a restricted investor because:
              </p>
              <ul class="text-list">
                <li>
                  in the twelve months preceding, I have not invested more than 10% of my net assets in unlisted shares or unlisted debt securities; and
                </li>
                <li>
                  I undertake that in the twelve months following I will not invest more than 10% of my net assets in unlisted shares or unlisted debt securities.
                </li>
              </ul>
              <p class="text">
                Net assets for these purposes do not include:
              </p>
              <ul class="text-list">
                <li>
                  the property which is my primary residence or any money raised through a loan secured on that property;
                </li>
                <li>
                  any rights of mine under a qualifying contract of insurance; or
                </li>
                <li>
                  any benefits (in the form of pensions or otherwise) which are payable on the termination of my service or on my death or retirement and to which I am (or my dependants are), or may be entitled.
                </li>
              </ul>
              <p class="text">
                I accept that the investments to which the promotions will relate may expose me to a significant risk of losing all of the money or other property invested. I am aware that it is open to me to seek advice from an authorised person who specialises in advising on unlisted shares and unlisted debt securities.
              </p>
              <a
                href="https://galeo.one/files/Galeo_Pitch_Deck.pdf"
                class="btn btn_blue btn_wide">
                I agree to this agreement
              </a>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Button from '~/components/Button.vue'

export default {
  name: 'Invest',
  components: {
    Header,
    Footer,
    Button
  },
  data() {
    return {
      activeItem: 0
    }
  },
  methods: {
    selectItem(item) {
      this.activeItem = item
      // if (item === 1) {
      //   window.scrollTo(0, this.$refs.item_1.getBoundingClientRect().top * 2)
      // } else if (item === 2) {
      //   window.scrollTo(0, this.$refs.item_2.getBoundingClientRect().top * 2)
      // } else if (item === 3) {
      //   window.scrollTo(0, this.$refs.item_3.getBoundingClientRect().top * 2)
      // } else if (item === 4) {
      //   window.scrollTo(0, this.$refs.item_4.getBoundingClientRect().top * 2)
      // }
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  max-width: 860px
  padding: 0 15px
  text-align: center

.header-block
  background: $blue-light
  position: fixed
  height: 80px
  width: 100%
  z-index: 2

.head-block
  background: $blue-light
  padding: 174px 0 120px 0
  .image
    height: 138px
    box-shadow: 0 10px 20px #C7CED3
    margin: 0 auto
    width: 220px

    img
      height: auto
      width: 100%

  .home-link
    align-items: center
    color: #000
    display: inline-flex
    font: 18px/18px Avenir
    text-align: center
    margin-top: 25px 

    &::before
      background: url('/img/invest-arrow.svg') center no-repeat
      content: ''
      height: 12px
      margin-right: 10px
      width: 17px

  .main-title
    color: #000
    font: 36px/36px $MRegular
    margin: 55px 0 0 0

  .main-description
    margin: 0 auto
    margin-top: 45px
    text-align: center

  @media(max-width: 1024px)
    padding-bottom: 55px

.agreement
  margin-top: 60px

  .item
    margin-bottom: 60px
    
    .title
      align-items: center
      display: flex
      justify-content: space-between

      .btn
        min-width: 100px

    .description
      font: 18px/32px $Avenir
      margin-top: 30px

    .main-text
      margin-top: 40px

      .text
        margin-top: 40px

      .text-list
        margin-top: 40px

      .btn_wide
        margin-top: 40px

  @media (max-width: 1024px)
    .item
      .title
        .h3
          font: 20px/21px $MRegular
          margin: 0
          text-align: left

        .btn
          height: 30px
          line-height: 30px
          min-width: 74px

      .description
        text-align: left
        
      .main-text
        .text
          text-align: left
          
        .btn_wide
          height: 45px
          line-height: 45px
</style>
