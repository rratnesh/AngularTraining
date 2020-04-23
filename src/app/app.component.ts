import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo1';

  cart = [];

  products = [
    {
      id: 1,
      title: 'Pencil',
      price: 67,
      brand: 'HP',
      description: 'Very nice product kl klklklkl klklklklk klklkl kl'
    },
    {
      id: 2,
      title: 'Pencil',
      price: 67,
      brand: 'HP',
      description: 'Very nice product kl klklklkl klklklklk klklkl kl'
    },
    {
      id: 3,
      title: 'Pencil',
      price: 67,
      brand: 'HP',
      description: 'Very nice product kl klklklkl klklklklk klklkl kl'
    },
    {
      id: 4,
      title: 'Pencil',
      price: 67,
      brand: 'HP',
      description: 'Very nice product kl klklklkl klklklklk klklkl kl'

    }
  ];


  addToCart(id) {
    let item = this.cart.find((cartItem) => {
      return cartItem.id == id;
    });
    if (item) {
      item.qty += 1;
    } else {
      let pItem = this.products.find((pItem) => {
        return pItem.id == id;
      });
      this.cart.push({ ...pItem, qty: 1 });
    }
    this.cart = [...this.cart];
  }
}
