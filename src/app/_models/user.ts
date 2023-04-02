import { Role } from "./role";

export interface User {
    // id: number;
    // firstName: string;
    // lastName: string;
    // username: string;
    // role: Role;
    // token?: string;

    ok:boolean;
    token?:string;
    mssg?:string;
    id?:string;
    name?:string;
    email?:string;
    role?:Role;
}