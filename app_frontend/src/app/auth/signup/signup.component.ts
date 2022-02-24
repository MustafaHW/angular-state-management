import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';
import { AppState } from '../../store/app.state';
import { loginStart, signupStart } from '../state/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private store: Store<AppState>
  ) { }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.store.dispatch(setLoadingSpinner({ status: true }));
      this.store.dispatch(signupStart({data: this.signupForm.value}));
    }
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(11)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

}
