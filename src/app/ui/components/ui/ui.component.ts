import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  public close: boolean;

  constructor() {
    this.close = false;
  }

  ngOnInit(): void {}

  public toggle(): void {
    this.close = !this.close;
    // console.log(this.close);
  }
}
