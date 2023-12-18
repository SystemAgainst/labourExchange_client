<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useAuthStore } from '@/store/modules/auth.module.js'

const router = useRouter();
const store = useAuthStore();

const login = ref("");
const password = ref("");

const loginUserHandler = async () => {
  try {
    if (!login.value || !password.value) {
      console.error('Login and password are required');
      return;
    }

    await store.checkAuthenticationRequest({ login: login.value, password: password.value });

    const isAuthenticated = store.isAuthenticated;

    if (isAuthenticated) {
      await router.push('/');
    } else {
      console.error('Authentication failed');
      await router.push('/auth');
    }

  } catch (error) {
    console.error('An error occurred during authentication:', error);
  }
};
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <router-link
        to="/"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        Биржа труда
      </router-link>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Войдите в ваш аккаунт
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="loginUserHandler()">
            <div>
              <label
                for="login"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Имя пользователя
              </label>
              <input
                type="text"
                name="login"
                id="login"
                v-model="login"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Имя пользователя"
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                Пароль
              </label>
              <input
                type="password"
                name="password"
                id="password"
                v-model="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

<!--            <div>-->
<!--&lt;!&ndash;              <label&ndash;&gt;-->
<!--&lt;!&ndash;                for="role"&ndash;&gt;-->
<!--&lt;!&ndash;                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"&ndash;&gt;-->
<!--&lt;!&ndash;              >&ndash;&gt;-->
<!--&lt;!&ndash;                Роль&ndash;&gt;-->
<!--&lt;!&ndash;              </label>&ndash;&gt;-->
<!--&lt;!&ndash;              <div class="flex items-center">&ndash;&gt;-->
<!--&lt;!&ndash;                <input&ndash;&gt;-->
<!--&lt;!&ndash;                  type="checkbox"&ndash;&gt;-->
<!--&lt;!&ndash;                  id="role"&ndash;&gt;-->
<!--&lt;!&ndash;                  v-model="isEmployer"&ndash;&gt;-->
<!--&lt;!&ndash;                  class="mr-2"&ndash;&gt;-->
<!--&lt;!&ndash;                />&ndash;&gt;-->
<!--&lt;!&ndash;                <label&ndash;&gt;-->
<!--&lt;!&ndash;                  for="role"&ndash;&gt;-->
<!--&lt;!&ndash;                  class="text-sm text-gray-900 dark:text-white"&ndash;&gt;-->
<!--&lt;!&ndash;                >&ndash;&gt;-->
<!--&lt;!&ndash;                  Я работодатель&ndash;&gt;-->
<!--&lt;!&ndash;                </label>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--            </div>-->

            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Войти
            </button>
<!--            <p class="text-sm font-light text-blue-500 dark:text-gray-400">-->
<!--              У вас пока нет аккаунта?-->
<!--              <router-link-->
<!--                to="/"-->
<!--                class="font-medium text-primary-600 hover:underline dark:text-primary-500"-->
<!--                >-->
<!--                Регистрация-->
<!--              </router-link>-->
<!--            </p>-->
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
