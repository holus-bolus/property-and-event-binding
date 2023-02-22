import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: 'game-control.component.html',
})
export class GameControlComponent {
  id: number;
  startInterval: any;
  @Output() onChanged = new EventEmitter<boolean>();

  start(increased: any) {
    this.startInterval = setInterval(() => {
      this.onChanged.emit(increased);
    }, 1000);
  }

  stop() {
    if (this.startInterval) {
      clearInterval(this.startInterval);
    }
  }
}
