import { AppState } from "../AppState.js";
import { saveState } from "../utils/Store.js";

function _saveMyItems() {
    saveState('myItems', AppState.myItems)
}


class VendingService {
    getVendingItem(itemName) {
        const foundItem = AppState.vendorItems.find(vendorItems => vendorItems.name == itemName)
        if (AppState.money >= foundItem.price) {
            AppState.money -= foundItem.price
            console.log("you picked", foundItem, AppState.money)
        } else {
            window.alert('Too broke')
            return
        }

        AppState.myItems.push(foundItem)
        _saveMyItems()
        AppState.emit('myItems')
        console.log('these are our current foods', AppState.myItems)

    }
}

export const vendingService = new VendingService()