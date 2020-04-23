import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() products;
  @Output() buyClicked = new EventEmitter();

  title = 'Ratnesh';

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(id) {
    this.buyClicked.emit(id);
  }

  seeInConsole() {
    console.log(this.title);
  }

}
