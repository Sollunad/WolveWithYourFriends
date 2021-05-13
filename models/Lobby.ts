import {Player} from "./Player";
import {User} from "./User";

export class Lobby {
    gameCode: string;
    players: Player[];
    gameMaster: User;

    constructor(gameCode: string, gameMaster: User) {
        this.gameMaster = gameMaster;
    }
}