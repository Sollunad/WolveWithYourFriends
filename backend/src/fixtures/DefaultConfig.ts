import {Config} from "../../../models/Config";
import {
    ROLE_AMOR, ROLE_ASSASSINE,
    ROLE_BESCHUETZER, ROLE_DOPPELGAENGER,
    ROLE_DORFBEWOHNER, ROLE_EINSAMER_WOLF,
    ROLE_HEXE,
    ROLE_SEHER,
    ROLE_VERFLUCHTER,
    ROLE_WERWOLF
} from "./Roles";

export const DEFAULT_CONFIG: Config = {
    roles: [
        { role: ROLE_DORFBEWOHNER, probability: 0.2 },
        { role: ROLE_WERWOLF, probability: 0.2 },
        { role: ROLE_HEXE, probability: 0.5, maxCount: 1 },
        { role: ROLE_SEHER, probability: 0.5, maxCount: 1 },
        { role: ROLE_BESCHUETZER, probability: 0.5, maxCount: 1 },
        { role: ROLE_AMOR, probability: 0.3, maxCount: 1 },
        { role: ROLE_VERFLUCHTER, probability: 0.3, maxCount: 1 },
        { role: ROLE_DOPPELGAENGER, probability: 0.3, maxCount: 1 },
        { role: ROLE_EINSAMER_WOLF, probability: 0.3, maxCount: 1 },
        { role: ROLE_ASSASSINE, probability: 0.2, maxCount: 1 },
    ],
    balanceVariability: 1,
}