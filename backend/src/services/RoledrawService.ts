import {Config, RoleWithParams} from "../../../models/Config";
import {DEFAULT_CONFIG} from "../fixtures/DefaultConfig";
import {Role} from "../../../models/Role";

export class RoledrawService {
    static drawRoles(players: number, config: Config): Role[] {
        const rolePool = config.roles;
        let bestRoles: Role[] = [];
        let bestScore = 9999999;
        let iterations = 0;
        const minRoles = this.fillMinRoles(rolePool);

        while (true) {
            const chosenRoles: Role[] = [...minRoles];
            while (chosenRoles.length < players) {
                const role = this.drawFromPool(rolePool, chosenRoles)
                chosenRoles.push(role);
            }

            const balanceScore = Math.abs(this.calculateBalance(chosenRoles))

            if (balanceScore <= config.balanceVariability) {
                return this.shuffleRoles(chosenRoles);
            }

            if (balanceScore < bestScore) {
                bestRoles = chosenRoles;
                bestScore = balanceScore
            }

            iterations++;
            if (iterations === 20) {
                return this.shuffleRoles(bestRoles);
            }
        }
    }

    static fillMinRoles(pool: RoleWithParams[]): Role[] {
        const chosenRoles = [];
        const rolesWithMinCount = pool.filter(role => role.minCount);
        for (const role of rolesWithMinCount) {
            for (let i = 0; i < role.minCount; i++) {
                chosenRoles.push(role.role);
            }
        }
        return chosenRoles;
    }

    static drawFromPool(pool: RoleWithParams[], chosenRoles: Role[]): Role {
        const currentScore = this.calculateBalance(chosenRoles);
        const remainingPool = pool.filter(poolRole => {
            const newAbsoluteScore = Math.abs(currentScore + poolRole.role.balanceValue);
            if (newAbsoluteScore > 5 && newAbsoluteScore > Math.abs(currentScore)) return false;
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

    static shuffleRoles(roles: Role[]): Role[] {
        for (let i = roles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [roles[i], roles[j]] = [roles[j], roles[i]];
        }
        return roles;
    }
}