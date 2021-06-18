// eslint-disable-next-line import/no-unresolved
import { Role } from '../types'

export default class AppStorage {
    static get token(): string | undefined {
        const token = localStorage.getItem('token');
        return token ?? undefined;
    }

    static set token(token: string | undefined) {
        localStorage.setItem('token', token ? token : '');
    }

    static get userRole(): Role | undefined {
        const roleString = localStorage.getItem('role');
        if (!roleString) return undefined;
        const role = Number.parseInt(roleString, 10);
        if (Number.isNaN(role)) return undefined;
        return role;
    }

    static set userRole(role: Role | undefined) {
        localStorage.setItem('role', role !== undefined ? role.toString() : '');
    }
}
