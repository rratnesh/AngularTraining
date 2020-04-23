import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @ViewChild('f') form;
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

  show() {
    console.log(this.form);
  }

  submit(){
    console.log(this.form);
  }

}
