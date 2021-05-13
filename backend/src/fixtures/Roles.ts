import {Role, RoleType, WinCondition} from "../../../models/Role";

export const ROLE_DORFBEWOHNER: Role = {
    type: RoleType.GOOD,
    name: 'Dorfbewohner',
    description: 'Bleibe am Leben und wähle am Tag die Werwölfe aus dem Dorf',
    winCondition: WinCondition.ONLY_TYPE,
    balanceValue: 1,
}

export const ROLE_WERWOLF: Role = {
    type: RoleType.EVIL,
    name: 'Werwolf',
    description: 'Töte das Dorf in der Nacht',
    winCondition: WinCondition.ONLY_TYPE,
    balanceValue: -6,
}

export const ROLE_HEXE: Role = {
    type: RoleType.GOOD,
    name: 'Hexe',
    description: 'Du hast pro Spiel einen Heiltrank und einen Todestrank. Rette Werwolf-Opfer und töte deine Verdächtigen.',
    winCondition: WinCondition.ONLY_TYPE,
    balanceValue: 4,
}

export const ROLE_AMOR: Role = {
    type: RoleType.GOOD,
    name: 'Amor',
    description: '...',
    winCondition: WinCondition.ONLY_TYPE,
    balanceValue: -3,
}

export const ROLE_VERLIEBTER: Role = {
    type: RoleType.GOOD,
    name: 'Verliebter',
    description: '...',
    winCondition: WinCondition.ONLY_ROLE,
    balanceValue: 0,
}

export const ROLE_BESCHUETZER: Role = {
    type: RoleType.GOOD,
    name: 'Beschützer',
    description: '...',
    winCondition: WinCondition.ONLY_TYPE,
    balanceValue: 3,
}

export const ROLE_SEHER: Role = {
    type: RoleType.GOOD,
    name: 'Seher',
    description: '...',
    winCondition: WinCondition.ONLY_TYPE,
    balanceValue: 7,
}

export const ROLE_DOPPELGAENGER: Role = {
    type: RoleType.GOOD,
    name: 'Doppelgänger',
    description: '...',
    winCondition: WinCondition.ONLY_TYPE,
    balanceValue: -2,
}

export const ROLE_VERFLUCHTER: Role = {
    type: RoleType.GOOD,
    name: 'Verfluchter',
    description: '...',
    winCondition: WinCondition.ONLY_TYPE,
    balanceValue: -3,
}

export const ROLE_EINSAMER_WOLF: Role = {
    type: RoleType.EVIL,
    name: 'Einsamer Wolf',
    description: '...',
    winCondition: WinCondition.ALONE,
    balanceValue: -5,
}

export const ROLE_ASSASSINE: Role = {
    type: RoleType.NEUTRAL,
    name: 'Assassine',
    description: '...',
    winCondition: WinCondition.ALONE,
    balanceValue: -3,
}