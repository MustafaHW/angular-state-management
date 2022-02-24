import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess, signupStart, signupSuccess } from "./auth.actions";
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { AuthService } from "../../services/auth.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { setErrorMessage, setLoadingSpinner } from "src/app/store/shared/shared.actions";
import { of } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private store: Store<AppState>,
        private router: Router
    ) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService.login(action.email, action.password).pipe(
                    map((data) => {
                        console.log('data ', data);
                        const user = this.authService.formatUser(data);
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        this.store.dispatch(setErrorMessage({ message: '' }));
                        return loginSuccess({ user });
                    }),
                    catchError((error) => {
                        console.log(error);
                        const errorMessage = this.authService.getLoginErrorMessage(error.error.message);
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        return of(setErrorMessage({ message: errorMessage }));
                    })
                );
            })
        )
    });

    loginRedirect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginSuccess),
            tap((action) => {
                this.router.navigate(['/']);
            })
        )
    },
        {
            dispatch: false
        }
    );

    signup$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(signupStart),
            exhaustMap((action) => {
                return this.authService.signup(action.data).pipe(
                    map((data) => {
                        console.log('data ', data);
                        const user = this.authService.formatUser(data);
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        this.store.dispatch(setErrorMessage({ message: '' }));
                        return signupSuccess({ user });
                    }),
                    catchError((error) => {
                        console.log('error ', error);
                        const errorSignUp = this.authService.getSignUpErrorMessage(error.error.message);
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        return of(setErrorMessage({ message: errorSignUp }));
                    })
                )
            }),
        )
    });

    signupRedirect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(signupSuccess),
            tap((action) => {
                this.router.navigate(['/']);
            })
        )
    },
        {
            dispatch: false
        }
    );
}