<template>
  <div class="workspace-review">
    <div class="workspace-review__section">
      <div class="workspace-review__title">
        Leave review about the work
      </div>
      <div class="workspace-review__rating">
        <div class="workspace-review__rating-label">
          Rate the work
        </div>

        <div class="workspace-review__rate">
          <star-rating
              :increment="0.01"
              :fixed-points="2"
              :star-size="28"
              v-model="ratingModel"
              @click.native="changeRating"
              :show-rating="false"
              :inactive-color="`#F0F0F0`"
              :active-color="`#D23D20`"
              :star-points="[14.89450,0.86042, 18.11630,7.49853, 25.64050,8.41397, 26.98850,10.08150, 26.43970,11.05310, 20.97830,16.01190, 22.40390,23.22370, 21.17670,24.97300, 20.14330,24.81480, 13.49860,21.27390, 6.85392,24.81480, 4.75602,24.22410, 4.59334,23.22180, 6.01894,16.01190, 0.48597,10.98910, 0.41914,8.87659, 1.35672,8.41658, 1.35672,8.41397, 8.88027,7.49853, 12.10200,0.86042, 14.15130,0.14035, 14.89450,0.86042]"
              :padding="8"
          />
        </div>
      </div>


      <div class="workspace-review__textarea">
        <div class="ui-label-title">
          Work description
        </div>
        <div class="ui-textarea">
                <textarea type="text" placeholder="Text of your review"
                          id="textareaId01">
                </textarea>
        </div>
      </div>

      <div class="workspace-review__btn">
        <Btn class="workspace-review__btn-add-i" :btnName="`Send review`"/>
        <Btn class="workspace-review__btn-add-i transparent" :btnName="`Return to messenger`"/>
      </div>

    </div>
  </div>
</template>

<script>
  import Btn from "../../UI/Btn";
  import StarRating from 'vue-star-rating';

  export default {
    name: "Review",
    components:{
      Btn,
      StarRating
    },

    data() {
      return {
        ratingModel: 1,
      }
    },

  }
</script>

<style lang="scss">
  .workspace-review{

    /*.vue-star-rating-star svg{*/
      /*width: 42px;*/
      /*height: 39px;*/
    /*}*/

    &__section{

    }

    &__title{
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #141414;
      margin-bottom: 28px;
    }

    &__rating{
      margin-bottom: 35px;
    }

    &__rating-label{
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #141414;
      margin-bottom: 13px;
    }

    &__rate{

    }

    &__textarea{
      margin-bottom: 40px;
    }

    &__btn{
      display: flex;
    }

    &__btn-add-i{
      margin-left: 50px;
      min-height: 56px;
      padding: 0 10px;
      max-width: 200px;
      width: 100%;
      justify-content: center;

      &:first-child{
        margin-left: 0;
      }
    }

    .ui-label-title{
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #141414;
    }

    .ui-textarea textarea{
      min-height: 110px;
    }
  }

</style>