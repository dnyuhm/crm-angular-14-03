import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss'],
})
export class TemplateFullWidthComponent implements OnInit, OnChanges {
  @Input() public title: string;
  constructor() {
    this.title = 'Le titre est ici';
    console.log(this.title);
  }

  ngOnChanges(): void {
    console.log(this.title);
  }

  ngOnInit(): void {
    console.log(this.title);
  }
}
