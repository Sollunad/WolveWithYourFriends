import {Lobby} from "../../../models/Lobby";
import {User} from "../../../models/User";

export class LobbyService {
    lobbies: Lobby[] = [];

    createLobby(gameCode: string, gameMaster: User) {
        const lobby = new Lobby(gameCode, gameMaster);
        this.lobbies.push(lobby);
    }

    joinLobby(gameCode: string, user: User) {
        const lobby = this.getLobby(gameCode);
        if (!lobby) return;
        lobby.players.push(user);
    }

    getLobby(gameCode: string): Lobby | undefined {
        return this.lobbies.find(l => l.gameCode = gameCode);
    }

    setRoleConfig(gameCode: string) {

    }

    startLobby(gameCode: string) {

    }
}