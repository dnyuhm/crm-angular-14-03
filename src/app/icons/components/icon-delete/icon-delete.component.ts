import { Component, OnInit } from '@angular/core';
import { faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-delete',
  templateUrl: './icon-delete.component.html',
  styleUrls: ['./icon-delete.component.scss'],
})
export class IconDeleteComponent implements OnInit {
  public myIcon: IconDefinition;

  constructor() {
    this.myIcon = faTrash;
  }

  ngOnInit(): void {}
}
