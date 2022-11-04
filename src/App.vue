<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { Text, Card } from '@/components/ui'
import { useFetchApi } from '@/modules/store/useFetchApi'

type HotOrIced = 'HOT' | 'ICED'
const selectHotOrIced = ref<HotOrIced>('HOT')

const fetchApi = useFetchApi()

onMounted(async() => {
  await Promise.all([
    fetchApi.fetchHotCoffeeList(),
    fetchApi.fetchIcedCoffeeList()
  ])
})

const switchActiveTab = (CoffeeType: HotOrIced) => {
  selectHotOrIced.value = CoffeeType
}

const activeTabClasses = computed(() => {
  return (coffeeType: HotOrIced) => {
    return coffeeType === selectHotOrIced.value ? 'font-black' : 'text-slate-200' 
  }
})

const coffeeList = computed(() => {
  return selectHotOrIced.value === 'HOT' ? fetchApi.getHotCoffeeList : fetchApi.getIcedCoffeeList
})

/** coffeeListのプロパティにアクセスしてvalueを返す */
const getCoffeeInfoFromApiData = computed(() => {
  return (
    // keyの引数は 'title' | 'description' | 'image'のみを許容する
    key:'title' | 'description' | 'image',
    index: number
  ): string => {
    if (selectHotOrIced.value === 'HOT') {
      // null合体演算子 左辺がnull | undefinedである場合に右辺を返す
      // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
      return fetchApi.getHotCoffeeList[index][key] ?? ''
    } else {
      return fetchApi.getIcedCoffeeList[index][key] ?? ''
    }
  }
})
</script>

<template>
  <!-- Titleを表示するためのコンポーネントを作成する -->
  <div class="text-center mt-2">
    <Text variant="h1">
      Coffee Enjoy!
    </Text>
  
    <!-- タブ切り分け機能は最初は実装しない。lintエラー解消の次のタイミングで実装する -->
    <div>
      <span
        :class="activeTabClasses('HOT')"
        class="text-lg cursor-pointer"
        @click="switchActiveTab('HOT')"
      >
        Hot
      </span>
      |
      <span
        :class="activeTabClasses('ICED')"
        class="text-lg cursor-pointer"
        @click="switchActiveTab('ICED')"
      >
        Iced
      </span>
    </div>
  </div>

  <div class="flex flex-wrap justify-center gap-4 mt-4 pb-10">
    <!-- 引数を使用しない場合は`_`にすることでエディタからのwarningを回避することができる -->
    <!-- 勉強会手順1: まずは普通にHTMLにベタ書きする -->
    <!-- 勉強会手順2: コンポーネントに分割してみる -->
    <!-- 勉強会手順3: 発生するlintエラーを解消する -->
    <!-- 勉強会手順4: タブ実装 -->
    <!-- 勉強会手順4: 返すListをHot, Icedに変更できるようにする -->
    <Card
      v-for="(_, index) in coffeeList"
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
