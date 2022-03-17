import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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
  public collection$: Observable<Order[]>;

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

    this.collection$ = this.ordersService.collection$;
  }

  // public total(val: number, coef: number, tva?: number): number {
  //   console.log('total called');
  //   if (tva) return val * coef * (1 + tva / 100);
  //   return val * coef;
  // }
}
