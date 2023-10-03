import { AppState } from "../AppState.js"
import { VendingInventory } from "../models/VendingInventory.js"
import { vendingService } from "../services/VendingService.js"
import { setHTML } from "../utils/Writer.js"

function _drawVendingCatalog() {
    const vendorItems = AppState.vendorItems
    console.log('here is our items', vendorItems)
    let items = ''
    vendorItems.forEach(vendorItems => items += vendorItems.VendingCatalog)
    setHTML('vendingCatalog', items)
}

function _drawCustomerInventory() {
    const customerItems = AppState.myItems
    console.log('my stuff', customerItems)
    let items = ''
    customerItems.forEach(customerItems => items += customerItems.VendingCatalog)
    setHTML('myInventory', items)
}

export class VendingController {
    constructor() {
        console.log('Vending Controller is initialized')
        _drawVendingCatalog()
        _drawCustomerInventory()


        AppState.on('myItems', _drawCustomerInventory)
    }

    getVendingItem(itemName) {
        console.log('you clicked the get vending item button', itemName)
        vendingService.getVendingItem(itemName)
    }


}
