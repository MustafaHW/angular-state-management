import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { customIncrementValue } from '../state/counter-actions';
import { getChangedName } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  value: number;
  // name: string; 
  name$ : Observable<string>

  constructor(
    // private store: Store<{ counter: CounterState }>
    private store: Store<AppState>
  ) { }


  onSubmit() {
    this.store.dispatch(customIncrementValue({ value: +this.value }));
  }

  ngOnInit(): void {
    // this.store.select(getChangedName).subscribe((data) => {
    //   console.log('name ', data);
    //   this.name = data;
    // });
    this.name$ = this.store.select(getChangedName);
    // console.log('name ', this.name$);
  }

}
