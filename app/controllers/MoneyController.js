import { AppState } from "../AppState.js"
import { moneyService } from "../services/MoneyService.js"
import { setText } from "../utils/Writer.js"


function _drawMoney() {
    let totalMoney = AppState.money
    setText('totalMoney', totalMoney)
}

export class MoneyController {

    constructor() {

        console.log('Money Controller is initialized')

        AppState.on('money', _drawMoney)

    }

    insertCoin() {
        // console.log('You tried to insert coin')
        moneyService.insertCoin()
    }

}

