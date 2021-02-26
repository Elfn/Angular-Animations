import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('clicked', [
      //It is an array of animations metadata
      state(
        'default',
        style({
          backgroundColor: 'orange',
          width: '100px',
          height: '100px',
        })
      ),
      state(
        'clickedState',
        style({
          backgroundColor: 'blue',
          width: '300px',
          height: '50px',
        })
      ),
      state(
        'mouseDown',
        style({
          backgroundColor: 'red',
          border: '1px solid black',
          width: '100px',
          height: '100px',
        })
      ),
      transition(
        'default => clickedState', //From / to,
        animate('1s 500ms ease-in') //Timing animation
      ),
      transition(
        'clickedState => default', //From / to,
        animate('200ms  ease-in') //Timing animation
      ),
      transition(
        'mouseDown => clickedState', //From / to,
        animate('200ms  ease-in') //Timing animation
      ),
    ]),
    trigger('numEnteredState', [
      state(
        'unselected',
        style({
          border: '1px solid black',
          padding: '5px',
          marginLeft: '5px',
        })
      ),
      state(
        'selected',
        style({
          border: '1px solid black',
          backgroundColor: 'blue',
          color: 'white',
          padding: '5px',
          marginLeft: '5px',
        })
      ),
      transition('unselected => selected', animate(300)),
    ]),
  ],
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
