import { defineStore } from 'pinia'
import { DefaultApi } from '@/types/typescript-fetch/apis'
import type { CoffeeHotGet200ResponseInner, CoffeeIcedGet200ResponseInner } from '@/types/typescript-fetch'

const defaultApi = new DefaultApi()

export const useFetchApi = defineStore('fetchApi', {
  state: (): {
    hotCoffeeList: CoffeeHotGet200ResponseInner[]
    icedCoffeeList: CoffeeIcedGet200ResponseInner[]
  } => {
    return {
      hotCoffeeList: [],
      icedCoffeeList: []
    }
  },
  getters: {
    getHotCoffeeList(state) {
      // apiから余計?なデータが混ざっているためfilteringする
      return state.hotCoffeeList.filter(val => typeof val.id !== 'string')
    },
    getIcedCoffeeList(state) {
      return state.icedCoffeeList
    }
  },
  actions: {
    fetchHotCoffeeList() {
      defaultApi.coffeeHotGet().then((res) => {
        this.hotCoffeeList = res
      }).catch(e => {
        console.log(e)
      })
    },
    async fetchIcedCoffeeList() {
      try {
        this.icedCoffeeList = await defaultApi.coffeeIcedGet()
      } catch (e) {
        console.log(e)
      }
    }
  }
})