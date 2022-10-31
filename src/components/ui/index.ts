// Barrel
// 複数のモジュールから一つのモジュールにまとめてエクスポートする方法、エントリーファイルにモジュールをエクスポートすることで、indexを記述しなくても、一括でコンポーネントをimportすることができる

// ex) import { Text, Sample } from '@/components/ui'

// 別記法
// export * from './Text'
// export * as Text from './Text'
export { default as Text } from './Text'