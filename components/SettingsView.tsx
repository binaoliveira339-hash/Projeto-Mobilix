
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import IconMoon from './icons/IconMoon';
import IconSun from './icons/IconSun';

const SettingsView: React.FC = () => {
    const { user, theme, setTheme } = useAuth();

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Configurações</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">Gerencie suas informações e preferências.</p>

            <div className="mt-8 space-y-8 max-w-2xl">
                {/* Profile Section */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Perfil</h3>
                    <div className="space-y-3">
                        <div>
                            <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Nome</label>
                            <p className="text-md text-gray-800 dark:text-gray-200">{user?.name}</p>
                        </div>
                         <div>
                            <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Cidade</label>
                            <p className="text-md text-gray-800 dark:text-gray-200">{user?.city || 'Não informada'}</p>
                        </div>
                         <div>
                            <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</label>
                            <p className="text-md text-gray-800 dark:text-gray-200">{user?.email}</p>
                        </div>
                    </div>
                </div>

                {/* Appearance Section */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Aparência</h3>
                    <div className="flex items-center justify-between">
                        <div>
                             <label className="text-md font-medium text-gray-800 dark:text-gray-200">Tema</label>
                             <p className="text-sm text-gray-500 dark:text-gray-400">Escolha entre o tema claro ou escuro.</p>
                        </div>
                        <div className="relative inline-flex items-center h-8 rounded-full p-1 bg-gray-200 dark:bg-slate-700 transition-colors">
                            <button 
                                onClick={() => setTheme('light')}
                                className={`relative z-10 p-1 rounded-full w-14 transition-colors ${theme === 'light' ? 'text-blue-600' : 'text-gray-500'}`}
                            >
                                <IconSun className="w-5 h-5 mx-auto" />
                            </button>
                            <button 
                                onClick={() => setTheme('dark')}
                                className={`relative z-10 p-1 rounded-full w-14 transition-colors ${theme === 'dark' ? 'text-blue-500' : 'text-gray-500'}`}
                            >
                                <IconMoon className="w-5 h-5 mx-auto"/>
                            </button>
                            <span 
                                className={`absolute top-1 w-1/2 h-6 rounded-full bg-white dark:bg-slate-800 shadow-md transform transition-transform ${theme === 'light' ? 'translate-x-0' : 'translate-x-full'}`}
                            ></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsView;
