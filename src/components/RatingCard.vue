<script setup>
import StarRating from './StarRating.vue';
import { ref, onMounted } from 'vue';

const stars = [1, 2, 3, 4, 5];
const selectedStar = ref(null);
const showThankYou = ref(false);
const ratingCard = ref(null);
const thankYouCard = ref(null);

const selectRating = (star) => {
  selectedStar.value = star;
};

const submitRating = () => {
  if (selectedStar.value !== null) {
    showThankYou.value = true;
  } else {
    console.warn("Please select a rating before submitting.");
  }
};

onMounted(() => {
  // ... (le reste de votre code)
  ratingCard.value = document.querySelector('#rating-card');
  thankYouCard.value = document.querySelector('#thank-you-card');
});
</script>

<template>

  <article id="rating-card" class="z-10 w-[327px] m-auto md:w-[412px] h-[360px] md:h-[416px] px-[24px] pt-[24px] md:pt-[32px] md:pl-[32px] md:pr-[40px] rounded-[15px] md:rounded-[30px] bgRadial">

    <div class="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full bg-darkBlue flex items-center justify-center">

      <img height="16" width="16" class="mx-auto" src="/images/icon-star.svg" alt="Star icon">

    </div>

    <h1 class="text-[24px] md:text-[28px] text-white mt-[16px] md:mt-[30px] font-bold overpass md:leading-normal">How did we do?</h1>

    <p class="mt-[10px] md:mt-[7px] text-[14px] md:text-[15px] text-lightGrey font-normal leading-[22px] md:leading-[24px]">Please let us know how we did with your support request. All feedback is appreciated
      to help us improve our offering!</p>

    <div class="mt-[24px] flex justify-between">

      <StarRating v-for="star in stars" :key="star" @select="selectRating" :value="star" />

    </div>

    <button type="submit" class="mt-[24px] md:mt-[32px] h-[45px] w-full rounded-[23px] md:rounded-[22.5px] hover:bg-white text-white hover:text-orange flex items-center justify-center bg-orange" @click.prevent="submitRating">

      <span class="text-[14px] font-bold tracking-[1.3px] md:tracking-[2px] uppercase leading-normal	 tracking-[1.867px]">Submit</span>

    </button>

  </article>

</template>

<style scoped>
.bgRadial {
  background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
}
</style>