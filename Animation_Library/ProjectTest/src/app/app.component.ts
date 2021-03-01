import { Component } from '@angular/core';
import { clickedStateTrigger, numberEnteredStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [clickedStateTrigger, numberEnteredStateTrigger],
})
export class AppComponent {
  clickInfo = 'default';
  numEntered;
  onClickSimple() {
    this.clickInfo = 'clickedState';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 3000);
  }
}
