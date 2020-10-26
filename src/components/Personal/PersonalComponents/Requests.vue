<template>
  <div class="requests">
    <div class="requests__list">
      <div class="requests__item">
        <div class="requests__img">
          <img
              v-bind:src="'/image/customer-rates-ico.jpg'"
              alt="ico"
          >
        </div>
        <div class="requests__info">
          <div class="requests__head">
            <div class="requests__name">
              David_33
            </div>
            <div class="requests__time">
              <span>10:12</span>
              <span>02.03.2020</span>
            </div>
            <div class="requests__price requests__price--mobile">
              <span>$75</span>
              / 2 weeks
            </div>
          </div>
          <div class="requests__txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </div>
        <div class="requests__right">
          <div class="requests__price">
            <span>$75</span>
            / 2 weeks
          </div>
          <div class="requests__btn">
            <Btn
                class="requests__btn-i"
                :btnStyle="`transparent`"
                :btnName="`Choose offer`"
            />
          </div>
        </div>
      </div>
      <div class="requests__item">
        <div class="requests__img">
          <img
              v-bind:src="'/image/customer-rates-ico.jpg'"
              alt="ico"
          >
          <div class="requests__premium">
            Premium
          </div>
        </div>
        <div class="requests__info">
          <div class="requests__head">
            <div class="requests__name">
              David_33
            </div>
            <div class="requests__time">
              <span>10:12</span>
              <span>02.03.2020</span>
            </div>
            <div class="requests__price requests__price--mobile red">
              <span>$75</span>
              / 2 weeks
            </div>
          </div>
          <div class="requests__txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </div>
        <div class="requests__right">
          <div class="requests__price red">
            <span>$75</span>
            / 2 weeks
          </div>
          <div class="requests__btn">
            <Btn
                class="requests__btn-i"
                :btnStyle="`transparent`"
                :btnName="`Choose offer`"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Btn from "../../UI/Btn";

  export default {
    name: "Requests",
    components: {
      Btn
    },

    data(){
      return {

      }
    },
  }
</script>

<style lang="scss">
  @import '../../../scss/requests';
</style>
