import {Lobby} from "../../../models/Lobby";
import {User} from "../../../models/User";
import {Config} from "../../../models/Config";
import {RoledrawService} from "./RoledrawService";
import {Player} from "../../../models/Player";

export class LobbyService {
    lobbies: Lobby[] = [];

    createLobby(gameCode: string, gameMaster: User) {
        const lobby = new Lobby(gameCode, gameMaster);
        this.lobbies.push(lobby);
    }

    joinLobby(gameCode: string, user: User) {
        const lobby = this.getLobby(gameCode);
        // TODO User dürfen nur in einer Lobby sein
        if (lobby) lobby.players.push(user);
    }

    getLobby(gameCode: string): Lobby | undefined {
        return this.lobbies.find(l => l.gameCode = gameCode);
    }

    setRoleConfig(gameCode: string, config: Config) {
        const lobby = this.getLobby(gameCode);
        if (lobby) lobby.config = config;
    }

    startLobby(gameCode: string) {
        const lobby = this.getLobby(gameCode);
        if (!lobby) return;

        const playerCount = lobby.players.length;
        if (playerCount < 3) return;

        const drawnRoles = RoledrawService.drawRoles(playerCount, lobby.config);

        const gamePlayers: Player[] = [];

        for (const [i, user] of lobby.players.entries()) {
            gamePlayers.push({
                user,
                role: drawnRoles[i],
                alive: true,
            });
        }

        lobby.runningGame = { players: gamePlayers };

        console.log(lobby.runningGame.players);
    }
}