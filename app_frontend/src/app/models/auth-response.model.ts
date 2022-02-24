export interface AuthResponseData {
    token: string,
    user: {
        id: number,
        email: string,
        name: string,
        phoneNumber: string
    }
}