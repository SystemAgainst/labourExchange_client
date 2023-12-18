<script setup>
import VacancyCard from "@/components/VacancyCard.vue";
import { onMounted, ref } from 'vue'
import { getVacancies } from '@/api/services/vacancy.js'
// import router from '@/router';

const vacancies = ref("");

const handleFavouriteClick = async (vacancyId) => {
  console.log('Add to favourite: ', vacancyId);
  // await router.push({ name: "vacancy", params: { id: vacancyId } });
};

onMounted(async () => {
  await getVacancies().then((res) => {
    console.log(res.data);
    vacancies.value = res.data;
  });
});
</script>

<template>
  <h2>Добро пожаловать, Администратор</h2>
  <div
    class="flex items-center justify-center"
    v-for="vacancy in vacancies"
    :key="vacancy.id"
  >
    <vacancy-card
      :vacancy="vacancy"
      @favourite-click="(vacancyId) => handleFavouriteClick(vacancyId)"
    />
  </div>
</template>

<style scoped lang="css"></style>
