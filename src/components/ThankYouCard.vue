<script setup>
import { ref } from 'vue';

const showThankYou = ref(false);
</script>

<template>

  <article v-if="showThankYou" id="thank-you-card" class="z-10 w-[327px] md:w-[412px] h-[360px] md:h-[416px] m-auto pt-[34px] md:pt-[45px] px-[24px] md:pl-[32px] md:pr-[40px] rounded-[20px] md:rounded-[30px] bgRadial">
    <!-- ... le reste de votre code -->
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