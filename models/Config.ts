import {Role, RoleType} from "./Role";

export class RoleWithParams {
    role: Role;
    probability: number;
    minCount?: number;
    maxCount?: number;
}

export class Config {
    roles: RoleWithParams[];
    balanceVariability: number;
}