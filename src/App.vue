<script setup>
import { useRoute } from "vue-router";
import {computed} from "vue";

const route = useRoute();

const layout = computed(() => route.meta.layout || "auth");
</script>

<template>
  <component :is="layout + '-layout'" v-if="layout" />
</template>

<style scoped>

</style>
