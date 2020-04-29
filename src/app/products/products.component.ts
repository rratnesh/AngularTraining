import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {



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


  constructor() { }

  ngOnInit(): void {
  }

}
