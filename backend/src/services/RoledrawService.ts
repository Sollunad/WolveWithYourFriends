import {Config, RoleWithParams} from "../../../models/Config";
import {DEFAULT_CONFIG} from "../fixtures/DefaultConfig";
import {Role} from "../../../models/Role";

export class RoledrawService {
    static drawRoles(players: number, config: Config = DEFAULT_CONFIG): Role[] {
        const rolePool = config.roles;
        let bestRoles: Role[] = [];
        let bestScore = 9999999;
        let iterations = 0;

        while (true) {
            const chosenRoles: Role[] = [];
            for (let i = 0; i < players; i++) {
                const role = this.drawFromPool(rolePool, chosenRoles)
                chosenRoles.push(role);
            }

            const balanceScore = Math.abs(this.calculateBalance(chosenRoles))

            if (balanceScore <= config.balanceVariability) {
                return chosenRoles;
            }

            if (balanceScore < bestScore) {
                bestRoles = chosenRoles;
                bestScore = balanceScore
            }

            iterations++;
            if (iterations === 20) {
                return bestRoles;
            }
        }
    }

    static drawFromPool(pool: RoleWithParams[], chosenRoles: Role[]): Role {
        const currentScore = this.calculateBalance(chosenRoles);
        const remainingPool = pool.filter(poolRole => {
            if (Math.abs(currentScore + poolRole.role.balanceValue) > 5) return false;
            if (!poolRole.maxCount) return true;
            const occurence = chosenRoles.filter(chosenRole => chosenRole.name === poolRole.role.name).length;
            return occurence < poolRole.maxCount;
        });

        let i;
        const weights = [];

        for (i = 0; i < remainingPool.length; i++)
            weights[i] = remainingPool[i].probability + (weights[i - 1] || 0);

        const random = Math.random() * weights[weights.length - 1];

        for (i = 0; i < weights.length; i++)
            if (weights[i] > random)
                break;

        return remainingPool[i].role;
    }

    static calculateBalance(roles: Role[]): number {
        return roles.map(r => r.balanceValue).reduce((a, b) => a + b, 0);
    }
}