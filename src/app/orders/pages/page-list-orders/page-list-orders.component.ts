import { Component } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent {
  public myTitle: string;
  public headers: string[];
  public collection!: Order[];

  constructor(private ordersService: OrdersService) {
    this.myTitle = 'my orders list';
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'TjmHt',
      'TOTAL HT',
      'TOTAL TTC',
      'STATE',
    ];

    this.ordersService.collection$.subscribe(
      (data) => (this.collection = data)
    );
  }
}
