<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, computed } from 'vue'
import { Text } from '@/components/ui'
import { useFetchApi } from '@/modules/store/useFetchApi'

const fetchApi = useFetchApi()

onMounted(async() => {
  await Promise.all([
    fetchApi.fetchHotCoffeeList(),
    fetchApi.fetchIcedCoffeeList()
  ])
})
</script>

<template>
  <!-- Titleを表示するためのコンポーネントを作成する -->
  <Text variant="h1">
    Coffee Enjoy!
  </Text>

  <div class="flex flex-wrap">
    <div
      v-for="hotCoffee in fetchApi.getHotCoffeeList"
      :key="hotCoffee.id"
      class="border border-solid border-stone-200 w-1/5 mt-4"
    >
      <Text
        variant="h3"
        class="align-text-top"
      >
        {{ hotCoffee.title }}
      </Text>

      <img
        :src="hotCoffee.image"
        class=" h-56 w-full"
      >
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
