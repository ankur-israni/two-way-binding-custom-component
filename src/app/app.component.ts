import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products = [];
  productToUpdate: any;

  ngOnInit() {
    // @ts-ignore
    this.products = this.getProducts();
  }


  getProducts() {
    return [
      {id: '1', title: 'Screw Driver', price: 400, stock: 11},
      {id: '2', title: 'Nut Volt', price: 200, stock: 5},
      {id: '3', title: 'Resistor', price: 78, stock: 45},
      {id: '4', title: 'Tractor', price: 20000, stock: 1},
      {id: '5', title: 'Roller', price: 62, stock: 15},
    ];
  }

  /**
   * Find the product selected on the front end, whose value has changed,
   * then update the stock value for this component.
   *
   * 'find' is a built in method in angular.
   *
   * this.productToUpdate.stock --------
   * this.product.updatedStockValue ----'updatedStockValue' is a ngModel
   */
  processStockValueChange(product) {
    this.productToUpdate = this.products.find(this.findProducts, [product.id]);
    this.productToUpdate.stock = this.productToUpdate.stock + product.updatedStockValue;
  }

  findProducts(product) {
    return product.id === this[0];


  }
}
