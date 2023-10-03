

export class VendingInventory {
    constructor(data) {
        this.name = data.name
        this.imgUrl = data.imgUrl
        this.price = data.price

    }

    get VendingCatalog() {
        return `
        <div class="col-3">
          <div class="itemCards">
            <img src="${this.imgUrl}"
              class="img-fluid img-bd">
            <p>${this.name}</p>
            <p>${this.price}</p>
            <button class="btn btn-success" onclick='app.VendingController.getVendingItem("${this.name}")'>Buy!</button>
          </div>
        </div>`
    }

}