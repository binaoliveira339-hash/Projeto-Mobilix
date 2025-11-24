import React from 'react';
import { useAuth } from '../hooks/useAuth';
import IconSearch from './icons/IconSearch';
import IconSun from './icons/IconSun';
import IconMoon from './icons/IconMoon';

interface HeaderProps {
    onSearch: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
    const { user, theme, setTheme } = useAuth();

    return (
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Search bar */}
                    <div className="flex-1 max-w-xl">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <IconSearch className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Buscar por bairro, cidade, endereço..."
                                onChange={(e) => onSearch(e.target.value)}
                                className="block w-full bg-slate-100 dark:bg-slate-800 border-transparent rounded-lg py-3 pl-11 pr-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* Right side actions */}
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <button
                            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <IconMoon className="h-6 w-6" /> : <IconSun className="h-6 w-6" />}
                        </button>

                        <div className="flex items-center">
                             <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white text-lg">
                                {user?.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="ml-3 hidden md:block">
                                <p className="text-sm font-semibold text-gray-800 dark:text-white truncate">{user?.name}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user?.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
