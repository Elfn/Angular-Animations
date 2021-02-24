import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
})
export class LanguageComponent implements OnInit {
  @Input() languages: any;
  constructor() {}

  ngOnInit(): void {}
}
