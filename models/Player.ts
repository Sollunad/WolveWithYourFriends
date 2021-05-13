import {Role} from "./Role";
import {User} from "./User";

export class Player {
    user: User;
    role: Role | undefined;
    extraRole: Role | undefined;
    alive: boolean;

    constructor(user: User) {
        this.user = user;
    }
}