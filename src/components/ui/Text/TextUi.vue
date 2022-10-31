<script setup lang="ts">
// 本来setupを使用して入れば、definePropsの記述はいらないがeslint設定で明示的にimportをしないといけない記述をしないといけないため記述
import { defineProps, computed } from 'vue'
type Variant = 'h1' | 'h2' | 'h3'
interface Props {
	variant: Variant
}

const props = defineProps<Props>()

type VariantClasses = Record<Variant, string>
type Classes = VariantClasses[Variant]

const variantStyle = computed((): Classes => {
  const styleClass: VariantClasses = {
    h1: 'text-3xl font-bold',
    h2: 'text-2xl font-bold',
    h3: 'text-lg font-bold'
  }

  return styleClass[props.variant]
})
</script>

<template>
  <div
    :class="variantStyle"
    class=""
  >
    <slot />
  </div>
</template>