import express from 'express';
import {RoledrawService} from "./services/RoledrawService";

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    // ts-lint ignore-next-line
    const testRoles = RoledrawService.drawRoles(8);
    console.log(testRoles);
    console.log(RoledrawService.calculateBalance(testRoles));
} );