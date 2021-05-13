export enum RoleType {
    GOOD,
    EVIL,
    NEUTRAL,
}

export enum WinCondition {
    ONLY_TYPE,
    ONLY_ROLE,
    ALONE
}

export class Role {
    name: string;
    description: string;
    type: RoleType;
    winCondition: WinCondition;
    balanceValue: number;
}