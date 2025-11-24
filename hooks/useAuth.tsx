
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { User } from '../types';
import { mockUsers } from '../data/mockAuth';

type Theme = 'light' | 'dark';

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    signup: (email: string, name: string, password: string, city: string) => Promise<void>;
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const [theme, setThemeState] = useState<Theme>(() => {
        try {
            const savedTheme = localStorage.getItem('theme') as Theme | null;
            if (savedTheme) {
                return savedTheme;
            }
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
        } catch (error) {
            console.error("Could not access localStorage for theme.", error);
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    const setTheme = (newTheme: Theme) => {
        try {
            localStorage.setItem('theme', newTheme);
        } catch (error) {
             console.error("Could not save theme to localStorage.", error);
        }
        setThemeState(newTheme);
    };


    const login = (email: string, password: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => { // Simulate network delay
                const foundUser = mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
                if (!foundUser) {
                    reject(new Error('Email não cadastrado.'));
                } else if (foundUser.password !== password) {
                    reject(new Error('Senha incorreta.'));
                }
                else {
                    const { password, ...userToSet } = foundUser;
                    setUser(userToSet);
                    resolve();
                }
            }, 500);
        });
    };

    const logout = () => {
        setUser(null);
    };

    const signup = (email: string, name: string, password: string, city: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => { // Simulate network delay
                const userExists = mockUsers.some(u => u.email.toLowerCase() === email.toLowerCase());
                if (userExists) {
                    reject(new Error('Este email já está em uso.'));
                } else {
                    const isAdmin = email.toLowerCase().includes('admin');
                    const newUser = { email, name, isAdmin, password, city };
                    mockUsers.push(newUser);
                    const { password: _, ...userToSet } = newUser;
                    setUser(userToSet);
                    resolve();
                }
            }, 500);
        });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, signup, theme, setTheme }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
