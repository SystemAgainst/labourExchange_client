<script setup>
import { onMounted, ref } from 'vue'
import { getVacancyById } from '@/api/services/vacancy.js'
import { useRoute } from 'vue-router'


const vacancy = ref({});
const route = useRoute();
const vacancyId = route.params.id;

const title = ref("");
const salary = ref("");
const description = ref("");

const handleFavouriteClick = async (vacancyId) => {
  console.log('Add to favourite: ', vacancyId);
  // await router.push({ name: "vacancy", params: { id: vacancyId } });
};

onMounted(async () => {
  await getVacancyById(vacancyId).then((res) => {
    vacancy.value = res.data;
  });
});
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Employee
          </h1>
          <form class="space-y-4 md:space-y-6">
            <div class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <div class="mb-8">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Вакансия:
                </label>
                <p>
                  {{ vacancy.title }}
                </p>
              </div>

              <div class="mb-8">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Описание:
                </label>
                <p>
                  {{ vacancy.description }}
                </p>
              </div>

              <div class="mb-8">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Зарплата:
                </label>
                <p>
                  {{ vacancy.salary }}
                </p>
              </div>
            </div>

            <div>
              <router-link to="/" class="mt-3 inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                Назад
              </router-link>
              <div class="relative mt-3">
                <button
                  @click="handleFavouriteClick(vacancy.id)"
                  class="absolute bottom-0 right-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  В избранное
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>

</style>
