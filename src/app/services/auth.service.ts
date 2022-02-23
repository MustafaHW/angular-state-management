import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthResponseData } from "../models/auth-response.model";
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

    formatUser(data: AuthResponseData) {
        const user = new User(
            data.access_token,
            data.payload.id,
            data.payload.email,
            data.payload.name,
            data.payload.phoneNumber
        );
        return user;
    }

    getErrorMessage(message: string) {
        if (message == 'Invalid user credentials!') {
            return 'Invalid user credentials!';
        } else {
            return 'Unknown error';
        }
    }
}