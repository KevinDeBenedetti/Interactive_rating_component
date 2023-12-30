<script setup>
import { onMounted, ref } from 'vue';

const stars = [1, 2, 3, 4, 5];
const selectedStar = ref(null);
const showThankYou = ref(false);
const ratingCard = ref(null);
const thankYouCard = ref(null);

const selectRating = (star) => {
  selectedStar.value = star;
};

const starClasses = (star) => [
  'h-[42px] w-[42px] flex items-center justify-center cursor-pointer rounded-full',
  {
    'bg-darkBlue hover:bg-orange text-lightGrey hover:text-white': star !== selectedStar.value,
    'bg-mediumGrey text-white': star === selectedStar.value,
  },
];

const submitRating = () => {
  showThankYou.value = true;
}

onMounted(() => {
  ratingCard.value = document.querySelector('#rating-card');
  thankYouCard.value = document.querySelector('#thank-you-card');
});
</script>

<template>

  <article v-if="!showThankYou" id="rating-card" class="z-10 w-[327px] m-auto md:w-[412px] h-[360px] md:h-[416px] px-[24px] pt-[24px] md:pt-[32px] md:pl-[32px] md:pr-[40px] rounded-[15px] md:rounded-[30px] bgRadial">

    <div class="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full bg-darkBlue flex items-center justify-center">

      <img height="16" width="16" class="mx-auto" src="/images/icon-star.svg" alt="Star icon">

    </div>

    <h1 class="text-[24px] md:text-[28px] text-white mt-[16px] md:mt-[30px] font-bold overpass md:leading-normal">How did we do?</h1>

    <p class="mt-[10px] md:mt-[7px] text-[14px] md:text-[15px] text-lightGrey font-normal leading-[22px] md:leading-[24px]">Please let us know how we did with your support request. All feedback is appreciated
      to help us improve our offering!</p>

    <div class="mt-[24px] flex justify-between">

      <div class="h-[42px] md:h-[51px] w-[42px] md:w-[51px] bg-darkBlue hover:bg-orange text-lightGrey hover:text-white rounded-full flex items-center justify-center cursor-pointer" v-for="star in stars" :key="star" @click="selectRating(star)" :class="starClasses(star)">

        <span class="overpass text-[14px] md:text-[16px] font-bold w-[6.588px] md:w-[8px] text-center leading-[24px] tracking-[0.175px] md:tracking-[0.2px]">{{ star }}</span>

      </div>

    </div>

    <button type="submit" class="mt-[24px] md:mt-[32px] h-[45px] w-full rounded-[23px] md:rounded-[22.5px] hover:bg-white text-white hover:text-orange flex items-center justify-center bg-orange" @click.prevent="submitRating">
      
      <span class="text-[14px] font-bold tracking-[1.3px] md:tracking-[2px] uppercase leading-normal	 tracking-[1.867px]">Submit</span>

    </button>

  </article>

<!--Thank You Card-->
  <article v-if="showThankYou" id="thank-you-card" class="z-10 w-[327px] md:w-[412px] h-[360px] md:h-[416px] m-auto pt-[34px] md:pt-[45px] px-[24px] md:pl-[32px] md:pr-[40px] rounded-[20px] md:rounded-[30px] bgRadial">

    <div class="flex flex-col justify-content items-center">

      <img class="h-[96px] w-auto md:h-[108px]" height="108" width="162" src="/images/illustration-thank-you.svg" alt="Thank you image">

      <div class="text-orange bg-darkBlue mt-[24px] md:mt-[32px] h-[32px] w-[168px] md:w-[193px] rounded-[22.5px] flex items-center justify-center">

        <span class="text-[14px] md:text-[15px] overpass leading-[22px] md:leading-[24px] text-center font-normal">

          {{ `You selected ${selectedStar} out of 5` }}

        </span>

      </div>

    </div>

    <h2 class="text-[24px] md:text-[28px] text-white mt-[24px] md:mt-[32px] text-center font-bold leading-normal">Thank you!</h2>

    <p class="text-lightGrey mt-[10px] md:mt-[7px] text-[14px] md:text-[15px] text-center leading-[22px] md:leading-[25px] font-normal">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>

  </article>

</template>

<style scoped>
  .bgRadial {
    background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
  }
</style>