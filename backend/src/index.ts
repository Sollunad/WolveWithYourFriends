import express from 'express';
import {RoledrawService} from "./services/RoledrawService";
import {User} from "../../models/User";
import {LobbyService} from "./services/LobbyService";
import {UserService} from "./services/UserService";

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    const lobbyService = new LobbyService();
    const userService = new UserService();
    const user1 = userService.login('User 1');
    const user2 = userService.login('User 2');
    const user3 = userService.login('User 3');
    const user4 = userService.login('User 4');
    const user5 = userService.login('User 5');
    const user6 = userService.login('User 6');
    const gameCode = 'ABCDEFGH';

    lobbyService.createLobby(gameCode, user1);
    lobbyService.joinLobby(gameCode, user2);
    lobbyService.joinLobby(gameCode, user3);
    lobbyService.joinLobby(gameCode, user4);
    lobbyService.joinLobby(gameCode, user5);
    lobbyService.joinLobby(gameCode, user6);

    lobbyService.startLobby(gameCode);
} );