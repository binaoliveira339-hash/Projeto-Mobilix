
import { User } from '../types';

// Extend User to include password for mock authentication
export interface MockUser extends User {
    password?: string;
}

// In-memory list to simulate a user database
export let mockUsers: MockUser[] = [
    {
        email: 'admin@mobilix.com',
        name: 'Admin',
        city: 'São Paulo',
        isAdmin: true,
        password: 'adminpassword'
    },
    {
        email: 'usuario@exemplo.com',
        name: 'Usuário Comum',
        city: 'Rio de Janeiro',
        isAdmin: false,
        password: 'usuariopassword'
    },
     {
        email: 'ana.silva@email.com',
        name: 'Ana Silva',
        city: 'Belo Horizonte',
        isAdmin: false,
        password: 'password123'
    },
];
