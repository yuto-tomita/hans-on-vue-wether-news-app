<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import { Text } from '@/components/ui'
interface Props {
	height?: number
	title: string
	imgSrc: string
	description: string
}

withDefaults(defineProps<Props>(), {
  height: 500
})
</script>

<template>
  <div
    class="border-2 border-stone-200 w-1/5 shadow-xl"
    style="height: 600px"
  >
	
    <img
      :src="imgSrc"
      class="h-1/2 w-full"
    >
    <div class="m-auto flex justify-center items-center">
      <Text variant="h2">
        {{ title }}
      </Text>
    </div>

    <p class=" px-4 font-bold">
      {{ description }}
    </p>
  </div>
</template>