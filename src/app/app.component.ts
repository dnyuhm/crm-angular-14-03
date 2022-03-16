import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string;
  private obs: Observable<any>;
  private subj: Subject<any>;
  private behav: BehaviorSubject<any>;

  constructor() {
    this.title = 'crm';
    this.obs = new Observable<any>((listX) => {
      listX.next(Math.random());
    });
    this.subj = new Subject<any>();
    this.behav = new BehaviorSubject<any>('toto');

    // this.obs.subscribe((data) => console.log(data));
    // this.obs.subscribe((data) => console.log(data));
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next('toto');
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next(Math.random());
    // this.subj.subscribe((data) => console.log(data));
    // this.behav.next('toto2');
    // this.behav.subscribe((data) => console.log(data));
    // this.behav.next(Math.random());
    // this.behav.subscribe((data) => console.log(data));
  }
}
