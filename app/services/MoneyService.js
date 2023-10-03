import { AppState } from "../AppState.js";


class MoneyService {
    insertCoin() {
        AppState.money += 0.25
        console.log('you actually inserted the coin', AppState.money)
    }
}

export const moneyService = new MoneyService()