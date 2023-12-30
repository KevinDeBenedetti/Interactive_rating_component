<script setup>
import { ref, onMounted } from "vue";

const ratingCard = ref(null);
const ratingForm = ref(null);
const thankYouCard = ref(null);
const thankYouMessage = ref(null);
const starLabels = ref([]);

let selectedIndex = ref(-1);

onMounted(() => {
  ratingCard.value = document.querySelector('#rating-card');
  thankYouCard.value = document.querySelector('#thank-you-card');
  thankYouMessage.value = document.querySelector('#thank-you-message');

  starLabels.value = document.querySelectorAll('.star-label');
})

const handleStarClick = (index) => {
  if (selectedIndex.value !== -1) {
    starLabels.value[selectedIndex.value].style.backgroundColor = 'var(--darkBlue)';
    starLabels.value[selectedIndex.value].style.color = 'red';
  }

  if (selectedIndex.value === index) {
    selectedIndex.value = -1;
  } else {
    starLabels.value[index].style.backgroundColor  = 'var(--orange)';
    starLabels.value[index].style.color = 'white';
    selectedIndex.value = index;
  }
}

const submitRating = (event) => {
  const data = new FormData(ratingForm.value);
  console.log(data);

  let output = '';

/*  for (const entry of data) {
    output = entry[i];
  }*/

  ratingCard.value.classList.add('hidden');
  thankYouCard.value.classList.remove('hidden');
  thankYouMessage.value.textContent = `You selected ${output} out of 5`;

  event.preventDefault();
}

</script>

<template>
  <article id="rating-card" class="z-10 w-[330px] m-auto desktop:w-[412px] h-[360px] desktop:h-[415px] p-[25px] desktop:p-[34px] bg-darkBlue bg-opacity-80 rounded-[20px] desktop:rounded-[32px]">

    <div class="w-[40px] desktop:w-[50px] h-[40px] desktop:h-[50px] rounded-full bg-darkBlue flex items-center justify-center">
      <img height="16" width="16" class="mx-auto" src="/images/icon-star.svg" alt="Star icon">
    </div>

    <h1 class="text-[24px] desktop:text-[28px] text-white mt-[13px] desktop:mt-[25px] tracking-[0.4px] overpass">How did we do?</h1>

    <p class="text-[15px] text-lightGrey mt-[9px] desktop:mt-[7px] tracking-[-0.6px] desktop:tracking-[-0.2px] desktop:leading-[24px]">Please let us know how we did with your support request. All feedback is appreciated
      to help us improve our offering!</p>

    <form id="ratingForm" action="#">

      <div class="mt-[27px] flex justify-between text-[15px] font-bold text-lightGrey overpass">

        <input type="radio" id="star1" name="rating" value="1" class="hidden" @click="handleStarClick(1)">
        <label for="star1" class="star-label rating">
          <span>1</span>
        </label>

        <input type="radio" id="star2" name="rating" value="2" class="hidden" @click="handleStarClick(2)">
        <label for="star2" class="star-label rating">
          <span>2</span>
        </label>

        <input type="radio" id="star3" name="rating" value="3" class="hidden" @click="handleStarClick(3)">
        <label for="star3" class="star-label rating">
          <span>3</span>
        </label>

        <input type="radio" id="star4" name="rating" value="4" class="hidden" @click="handleStarClick(4)">
        <label for="star4" class="star-label rating">
          <span>4</span>
        </label>

        <input type="radio" id="star5" name="rating" value="5" class="hidden" @click="handleStarClick(5)">
        <label for="star5" class="star-label rating">
          <span>5</span>
        </label>

      </div>

      <button type="submit" class="mt-[25px] desktop:mt-[33px] h-[45px] w-full rounded-[23px] text-white uppercase text-[15px] tracking-[1.3px] desktop:tracking-[2px] hover:bg-white hover:text-orange flex items-center justify-center bg-orange" @click.prevent="submitRating">
        <span>Submit</span>
      </button>

    </form>

  </article>
</template>

<style scoped>

.rating {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background-color: var(--darkBlue);
  border-radius: 9999px;
}

.rating:hover {
  background-color: var(--lightGrey);
  color: white;
}

@media (min-width: 1440px) {
  .rating {
    height: 50px;
    width: 50px;
  }
}

</style>