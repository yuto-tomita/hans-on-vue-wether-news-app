<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, computed } from 'vue'
import { Text, Card } from '@/components/ui'
import { useFetchApi } from '@/modules/store/useFetchApi'
import type { CoffeeHotGet200ResponseInner } from '@/types/typescript-fetch'

const fetchApi = useFetchApi()

onMounted(async() => {
  await Promise.all([
    fetchApi.fetchHotCoffeeList(),
    fetchApi.fetchIcedCoffeeList()
  ])
})

/** coffeeListのプロパティにアクセスしてvalueを返す */
const getCoffeeInfoFromApiData = computed(() => {
  return (
    // keyの引数は 'title' | 'description' | 'image'のみを許容する
    key: keyof Pick<CoffeeHotGet200ResponseInner, 'title' | 'description' | 'image'>,
    index: number
  ): string => {
    // null合体演算子 左辺がnull | undefinedである場合に右辺を返す
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
    return fetchApi.getHotCoffeeList[index][key] ?? ''
  }
})
</script>

<template>
  <!-- Titleを表示するためのコンポーネントを作成する -->
  <Text
    variant="h1"
    class="text-center mt-2"
  >
    Coffee Enjoy!
  </Text>

  <div class="flex flex-wrap justify-center gap-4 mt-4 pb-10">
    <!-- 引数を使用しない場合は`_`にすることでエディタからのwarningを回避することができる -->
    <Card
      v-for="(_, index) in fetchApi.getHotCoffeeList"
      :key="index"
      :img-src="getCoffeeInfoFromApiData('image', index)"
      :description="getCoffeeInfoFromApiData('description', index)"
      :title="getCoffeeInfoFromApiData('title', index)"
    />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
