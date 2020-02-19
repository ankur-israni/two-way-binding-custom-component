import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stockstatus',
  templateUrl: './stockstatus.component.html',
  styleUrls: ['./stockstatus.component.scss']
})
export class StockstatusComponent implements OnChanges {

  @Input() productId;
  @Input() stock;
  @Output() onStockValueChange = new EventEmitter();

  color = 'red';
  updatedStockValue: number;

  sendUpdatedStockValueToParent() {

    // Sending the onStockValueChange event here.
    this.onStockValueChange.emit({id: this.productId, updatedStockValue: this.updatedStockValue});
    this.updatedStockValue = null;
  }

  ngOnChanges() {
    if (this.stock > 10) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }
  }



}
