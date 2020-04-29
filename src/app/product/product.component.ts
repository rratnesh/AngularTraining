import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('component initialize');
    this.activatedRoute.params.subscribe((data) => {
      if (data['id']) {
        console.log(data);
      }
    })

    this.activatedRoute.queryParams.subscribe((data) => {
        console.log(data);
      
    })
  }

  ngOnDestroy() {
    alert('klkl')
  }

}
