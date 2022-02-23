export class User {
    constructor(
        private access_token: string,
        private id: number,
        private email: string,
        private name: string,
        private phoneNumber: string,
    ) {}
}