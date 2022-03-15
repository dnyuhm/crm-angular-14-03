import { Component, OnInit } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-close',
  templateUrl: './icon-close.component.html',
  styleUrls: ['./icon-close.component.scss'],
})
export class IconCloseComponent implements OnInit {
  public myIcon: IconDefinition;

  constructor() {
    this.myIcon = faTimes;
  }

  ngOnInit(): void {}
}
