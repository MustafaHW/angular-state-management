import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private httpClient: HttpClient
    ) { }

    login(email: string, password: string) {
        return this.httpClient.post(`${environment.apiUrl}/auth/login`,
            { email, password }
        );
    }
}