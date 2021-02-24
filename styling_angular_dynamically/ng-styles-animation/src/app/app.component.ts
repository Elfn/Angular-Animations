import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  languages = [
    { title: 'JAVA', isPopular: false },
    { title: 'C++', isPopular: false },
    { title: 'Python', isPopular: false },
    { title: 'JS', isPopular: false },
  ];
}
