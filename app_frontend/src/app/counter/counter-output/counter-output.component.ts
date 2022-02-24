import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getCounter } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit
//, OnDestroy 
{

  counter: number;
  // counter$: Observable<{ counter: number }>
  counter$: Observable<number>
  name: string;
  // counterSubscription: Subscription;

  constructor(
    // private store: Store<{ counter: CounterState }>
    private store: Store<AppState>
  ) { }


  ngOnInit(): void {
    // this.counterSubscription = this.store.select('counter').subscribe((data) => {
    //   this.counter = data.counter;
    //   console.log(this.counter);
    // });
    // this.counter$ = this.store.select('counter');
    // console.log(this.counter$);
    // this.store.select(getCounter).subscribe((data)=>{
    //   console.log('counter ', data);
    //   this.counter = data;
    // });
    this.counter$ = this.store.select(getCounter);
    // console.log('counter ', this.counter$);
  }

  // ngOnDestroy(): void {
  //   if (this.counterSubscription) {
  //     this.counterSubscription.unsubscribe();
  //   }
  // }
}
