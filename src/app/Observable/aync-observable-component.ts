import { Component } from '@angular/core';
import  {Observable } from 'rxjs'

@Component({
  selector: 'async-observable-pipe',
  template: `<div><code>observable|async</code>:
       Time: {{ navStart | async }}</div>`
})
export class AsyncObservablePipeComponent {
  navStart: Observable<string>;
  time:string;
  constructor(){
    this.navStart = new Observable<string>(observer => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
  }
  //Observable is interface for handling variety of asynchronous operations
  // time = new Observable<string>(observer => {
  //   setInterval(() => observer.next(new Date().toString()), 1000);
  // });
  ngOnInit() {
    this.navStart.subscribe((i) => this.time = i);
  }
}