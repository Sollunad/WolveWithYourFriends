import {Role} from "./Role";
import {User} from "./User";

export class Player {
    user: User;
    role: Role;
    extraRole?: Role | undefined;
    alive: boolean;
}