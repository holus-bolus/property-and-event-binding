import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Output('secondsEl') seconds: number = 0;

  onChanged(increased: any) {
    increased === true ? this.seconds++ : this.seconds--;
  }
}
