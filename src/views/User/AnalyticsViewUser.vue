<script setup>
import { getAnalyticsVacancy } from '@/api/services/alalytic.js'


const result = getAnalyticsVacancy().then((res) => {
  const responcesCount = res.data;
  console.log(responcesCount);

  const getCompanyName = (id) => {
    if (responcesCount.length > 0) {
      const int = responcesCount.find(prop => prop.id === id);
      console.log(int.name);
      return int.name;
    }
    else return ""
  }

  getCompanyName(responcesCount.id);
})
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Analytics for employer
          </h1>
          <div class="space-y-4 md:space-y-6">
            <li v-for="(item, idx) in result" :key="idx">
              {{ item }}
            </li>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
