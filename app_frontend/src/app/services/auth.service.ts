import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthResponseData } from "../models/auth-response.model";
import { SignUpInterface } from "../models/signup.model";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private httpClient: HttpClient
    ) { }

    login(email: string, password: string): Observable<AuthResponseData> {
        return this.httpClient.post<AuthResponseData>(`${environment.apiUrl}/auth/login`,
            { email, password }
        );
    }

    signup(data: SignUpInterface): Observable<AuthResponseData> {
        console.log(data)
        return this.httpClient.post<AuthResponseData>(`${environment.apiUrl}/auth/register`, data);
    }

    formatUser(data: AuthResponseData) {
        const user = new User(
            data.token,
            data.user.id,
            data.user.email,
            data.user.name,
            data.user.phoneNumber
        );
        return user;
    }

    saveUser(user: User) {
        localStorage.setItem('userData', JSON.stringify(user));
    }

    getUser() {
        const userData = localStorage.getItem('userData');
        if(userData){
            return JSON.parse(userData);
        }
        else{
            return null;
        }
    }

    logout(){
        localStorage.removeItem('userData');
    }

    getLoginErrorMessage(message: string) {
        console.log("getLoginErrorMessage", message);
        return message;
    }

    getSignUpErrorMessage(message: string) {
        console.log('getSignUpErrorMessage', message)
        return message;
    }
}