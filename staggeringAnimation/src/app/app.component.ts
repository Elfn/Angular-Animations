import {
  animate,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Optional } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(
          ':enter',
          stagger('100ms', [
            animate(
              '1s ease-in',
              keyframes([
                style({
                  opacity: 0,
                  transform: 'translateX(-10px)',
                  offset: 0,
                }),
                style({
                  opacity: 0,
                  transform: 'translateX(80px)',
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
        // query(
        //   ':leave',
        //   stagger('100ms', [
        //     animate(
        //       '1s ease-in',
        //       keyframes([
        //         style({
        //           opacity: 0,
        //           transform: 'translateX(0)',
        //           offset: 0,
        //         }),
        //         style({
        //           opacity: 1,
        //           transform: 'translateX(80px)',
        //           offset: 0.3,
        //         }),
        //         style({ opacity: 0, transform: 'translateY(0)', offset: 1 }),
        //       ])
        //     ),
        //   ]),
        //   { optional: true }
        // ),
      ]),
    ]),
    // trigger('explainerAnim', [
    //   transition('* => *', [
    //     query('.col', style({ opacity: 0, transform: 'translateX(-40px' })),
    //     query(
    //       '.col',
    //       stagger('500ms', [
    //         animate(
    //           '800ms 1.2s ease-out',
    //           style({ opacity: 1, transform: 'translateX(0)' })
    //         ),
    //       ])
    //     ),
    //   ]),
    // ]),
  ],
})
export class AppComponent {
  title = 'staggeringAnimation';

  items = [];

  constructor() {
    this.items = ['ONE', 'TWO', 'THREE'];
  }

  pushItems() {
    this.items.push('FOUR');
  }

  removeItems() {
    this.items.pop();
  }
}
