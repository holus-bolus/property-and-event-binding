import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
})
export class EvenComponent implements OnInit {
  @Input('secondsEl') evenSeconds: number;

  constructor() {}
  ngOnInit() {
    if (this.evenSeconds % 2 === 0) {
      console.log('even');
    }
  }
}
