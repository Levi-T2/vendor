import { Value } from "./models/Value.js"
import { VendingInventory } from "./models/VendingInventory.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"



class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  money = 0

  vendorItems = [
    new VendingInventory({ name: 'Boise Burrito', imgUrl: 'https://www.onceuponachef.com/images/2018/03/Breakfast-Burritos-1200x898.jpg', price: 9.00 }),
    new VendingInventory({ name: 'Caldwell Fries', imgUrl: 'https://static.toiimg.com/photo/54659021.cms', price: 4.00 }),
    new VendingInventory({ name: 'Kuna Burger', imgUrl: 'https://external-preview.redd.it/4DX4xFbUu1ZcQq82s0noWcuRjRY0WCNC_801fPWZglQ.jpg?auto=webp&s=1f3a8064429ace4c14ed21b216c710bd8ab3d6ce', price: 12.00 }),
    new VendingInventory({ name: 'Eagle Omelet', imgUrl: 'https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1.jpg', price: 7.00 }),
    new VendingInventory({ name: 'Nampa Nachos', imgUrl: 'https://theicn.org/cnrb/wp-content/uploads/2020/07/Nachos-With-Diced-Chicken-3.jpg', price: 5.00 }),
    new VendingInventory({ name: 'Cascade Pizza', imgUrl: 'https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?crop=center&height=800&v=1644590192&width=800', price: 10.00 }),
    new VendingInventory({ name: 'Melba Cookie', imgUrl: 'https://sugarspunrun.com/wp-content/uploads/2019/07/giant-chocolate-chip-cookies-1-of-1.jpg', price: 2.00 }),
    new VendingInventory({ name: 'Twin Falls Bar', imgUrl: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/05/granola-bars.jpg', price: 1.00 }),
  ]

  myItems = loadState('myItems', [VendingInventory])

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
