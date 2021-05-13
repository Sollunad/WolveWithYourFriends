import {Lobby} from "../../../models/Lobby";
import {User} from "../../../models/User";
import {Player} from "../../../models/Player";

export class LobbyService {
    lobbies: Lobby[] = [];

    createLobby(gameCode: string, gameMaster: User) {
        const lobby = new Lobby(gameCode, gameMaster);
        this.lobbies.push(lobby);
    }

    joinLobby(gameCode: string, user: User) {
        const lobby = this.getLobby(gameCode);
        if (!lobby) return;
        const player = new Player(user);
        lobby.players.push(player);
    }

    getLobby(gameCode: string): Lobby | undefined {
        return this.lobbies.find(l => l.gameCode = gameCode);
    }

    startLobby(gameCode: string) {

    }
}