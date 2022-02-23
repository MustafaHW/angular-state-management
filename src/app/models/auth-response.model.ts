export interface AuthResponseData {
    access_token: string,
    payload: {
        id: number,
        email: string,
        name: string,
        phoneNumber: string
    }
}