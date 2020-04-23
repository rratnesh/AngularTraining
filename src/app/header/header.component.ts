import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  _cart = [];
  totalPrice = 0;

  @Input()
  set cart(value) {
    this._cart = value;
    this.calculateTotalPrice();
  }


  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  calculateTotalPrice() {
    this.totalPrice = 0;
    this._cart.forEach(cItem => {
      this.totalPrice += cItem.price * cItem.qty;
    });
  }
}
