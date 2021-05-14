import {User} from "../../../models/User";
import { v4 as uuidv4 } from 'uuid';

export class UserService {
    users: User[] = [];

    login(name: string): User {
        const uuid = uuidv4();
        const newUser = new User(uuid, name);
        this.users.push(newUser);
        return newUser;
    }

    getUser(id: string): User | undefined {
        return this.users.find(u => u.id === id);
    }
}