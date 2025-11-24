import React from 'react';
import { LocationData } from '../types';
import IconBell from './icons/IconBell';

interface NotificationsViewProps {
    locations: LocationData[];
    enabledNotifications: Set<string>;
    onToggleNotification: (locationId: string) => void;
}

const NotificationsView: React.FC<NotificationsViewProps> = ({ locations, enabledNotifications, onToggleNotification }) => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Gerenciar Notificações</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">Ative ou desative alertas para atualizações de status nos locais.</p>

            <div className="mt-8 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <ul className="divide-y divide-gray-200 dark:divide-slate-700">
                    {locations.map(location => {
                        const isEnabled = enabledNotifications.has(location.id);
                        return (
                            <li key={location.id} className="px-6 py-4 flex items-center justify-between">
                                <div>
                                    <p className="text-md font-semibold text-gray-800 dark:text-slate-100">{location.neighborhood}</p>
                                    <p className="text-sm text-gray-500 dark:text-slate-400">{location.city}, {location.state}</p>
                                </div>
                                <button
                                    onClick={() => onToggleNotification(location.id)}
                                    className={`p-2 rounded-full transition-colors ${isEnabled ? 'text-blue-500 hover:bg-blue-100 dark:hover:bg-slate-700' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-slate-700'}`}
                                    aria-label={isEnabled ? `Desativar notificações para ${location.neighborhood}` : `Ativar notificações para ${location.neighborhood}`}
                                    aria-pressed={isEnabled}
                                >
                                    <IconBell className={`w-6 h-6 ${isEnabled ? 'fill-current' : ''}`} />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default NotificationsView;
