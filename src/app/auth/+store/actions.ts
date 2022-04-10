import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/core/interfaces/user";

const profileDomain = '[ProfileComponent]'

export const profileLoaded = createAction(`${profileDomain} Profile loaded`, props<{profile: IUser}>());
export const profilePageInitalized = createAction(`${profileDomain} Profile Initailize`);
export const profileLoadError = createAction(`${profileDomain} Error`);

const loginDomain = '[LoginComponent]';

export const startLoginProcess = createAction(`${loginDomain} Start Login`);
export const endLoginProcess = createAction(`${loginDomain} End Login`);
export const loginProcessError = createAction(`${loginDomain} Login Error`, props<{errorMessage: string}>());
export const initializeLoginState = createAction(`${loginDomain} Login Initialize`);
