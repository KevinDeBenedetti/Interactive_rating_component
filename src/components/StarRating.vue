<script setup>
import { ref } from 'vue';

const value = ref(null);

const selectRating = () => {
  emit('select', value.value);
};
</script>

<template>
  <div class="h-[42px] md:h-[51px] w-[42px] md:w-[51px] bg-darkBlue hover:bg-orange text-lightGrey hover:text-white rounded-full flex items-center justify-center cursor-pointer" @click="selectRating">
    <span class="overpass text-[14px] md:text-[16px] font-bold w-[6.588px] md:w-[8px] text-center leading-[24px] tracking-[0.175px] md:tracking-[0.2px]">{{ value }}</span>
  </div>
</template>

<style scoped>

</style>