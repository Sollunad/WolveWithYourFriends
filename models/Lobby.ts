import {User} from "./User";
import {Config} from "./Config";

export class Lobby {
    gameCode: string;
    players: User[];
    gameMaster: User;
    roleConfig: Config;

    constructor(gameCode: string, gameMaster: User) {
        this.gameCode = gameCode;
        this.gameMaster = gameMaster;
    }
}