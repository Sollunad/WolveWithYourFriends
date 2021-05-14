import {User} from "./User";
import {Config} from "./Config";
import {Game} from "./Game";
import {DEFAULT_CONFIG} from "../backend/src/fixtures/DefaultConfig";

export class Lobby {
    gameCode: string;
    players: User[];
    gameMaster: User;
    config: Config;
    runningGame?: Game | undefined;

    constructor(gameCode: string, gameMaster: User) {
        this.gameCode = gameCode;
        this.gameMaster = gameMaster;
        this.players = [];
        this.config = DEFAULT_CONFIG;
    }
}