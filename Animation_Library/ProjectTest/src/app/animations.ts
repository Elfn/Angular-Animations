import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const clickedStateTrigger = trigger('clicked', [
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
]);

export const numberEnteredStateTrigger = trigger('numEnteredState', [
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
      backgroundColor: 'lightblue',
      color: 'white',
      padding: '5px',
      marginLeft: '5px',
    })
  ),
  transition('unselected => selected', [
    style({ border: '2px solid black', padding: '4px' }),
    animate(
      '600ms 100ms ease-out',
      style({
        backgroundColor: 'red',
        transform: 'scale(1.05)',
      })
    ),
    animate(300),
    ,
  ]),
]);
