import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: 'game-control.component.html',
})
export class GameControlComponent {
  id: number;
  startInterval: any;
  lastNumber: number = 0;
  @Output() intervalFired = new EventEmitter<number>();

  start() {
    this.startInterval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  stop() {
    if (this.startInterval) {
      clearInterval(this.startInterval);
    }
  }
}
