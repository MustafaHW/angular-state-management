import { createAction, props } from "@ngrx/store";
import { SignUpInterface } from "src/app/models/signup.model";
import { User } from "src/app/models/user.model";

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';

export const SIGNUP_START = '[signup page] signup start';
export const SIGNUP_SUCCESS = '[signup page] signup success';
export const SIGNUP_FAIL = '[signup page] signup fail';

export const loginStart = createAction(
    LOGIN_START,
    props<{
        email: string; password: string
    }>());
export const loginSuccess = createAction(
    LOGIN_SUCCESS,
    props<{ user: User }>());

export const signupStart = createAction(
    SIGNUP_START,
    props<{ data: SignUpInterface }>());
export const signupSuccess = createAction(
    SIGNUP_SUCCESS,
    props<{ user: User }>());