import React from 'react';
import { useAuth } from '../hooks/useAuth';
import IconHome from './icons/IconHome';
import IconStar from './icons/IconStar';
import IconBell from './icons/IconBell';
import IconSettings from './icons/IconSettings';
import IconLogout from './icons/IconLogout';

type ActiveView = 'home' | 'favorites' | 'notifications' | 'settings';

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    onClick: () => void;
}
const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
    <button onClick={onClick} className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors duration-200 text-left ${active ? 'bg-slate-700 text-white' : 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-200'}`}>
        {icon}
        <span className="ml-3 font-medium">{label}</span>
    </button>
);

interface SidebarProps {
    activeView: ActiveView;
    onViewChange: (view: ActiveView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange }) => {
    const { user, logout } = useAuth();
    
    return (
        <aside className="w-64 bg-slate-800 text-white flex-col h-screen sticky top-0 hidden md:flex">
            <div className="px-6 py-5 flex items-center">
                <svg className="w-9 h-9 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                <h1 className="ml-2 text-2xl font-bold">Mobilix</h1>
            </div>

            <nav className="flex-1 px-4 py-2 space-y-2">
                <NavItem icon={<IconHome className="w-6 h-6" />} label="Início" active={activeView === 'home'} onClick={() => onViewChange('home')} />
                <NavItem icon={<IconStar className="w-6 h-6" />} label="Favoritos" active={activeView === 'favorites'} onClick={() => onViewChange('favorites')} />
                <NavItem icon={<IconBell className="w-6 h-6" />} label="Notificações" active={activeView === 'notifications'} onClick={() => onViewChange('notifications')} />
                <NavItem icon={<IconSettings className="w-6 h-6" />} label="Configurações" active={activeView === 'settings'} onClick={() => onViewChange('settings')} />
            </nav>

            <div className="px-4 py-4 mt-auto border-t border-slate-700">
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                        {user?.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-semibold text-white">{user?.name}</p>
                        <p className="text-xs text-slate-400">{user?.email}</p>
                    </div>
                </div>
                 <button
                    onClick={logout}
                    className="w-full mt-4 px-4 py-2 flex items-center justify-center text-sm font-medium text-slate-300 bg-slate-700 rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-blue-500 transition duration-150"
                >
                    <IconLogout className="w-5 h-5 mr-2"/>
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
