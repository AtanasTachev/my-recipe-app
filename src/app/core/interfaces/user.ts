import { IBase } from "./base";

export interface IUser extends IBase{
    name: string,
    username: string,
    email: string,
    address: string,
    phone:string
    password: string,
    repeatPassword: string,
  }