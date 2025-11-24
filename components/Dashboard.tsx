import React, { useState, useMemo, useEffect } from 'react';
import { LocationData, EquipmentStatus } from '../types';
import { LOCATIONS_DATA } from '../constants';
import { useAuth } from '../hooks/useAuth';
import Sidebar from './Sidebar';
import Header from './Header';
import LocationCard from './LocationCard';
import LocationDetailModal from './LocationDetailModal';
import NotificationToast from './NotificationToast';
import NotificationsView from './NotificationsView';
import SettingsView from './SettingsView';

const Dashboard: React.FC = () => {
    const { user } = useAuth();
    const [locations, setLocations] = useState<LocationData[]>(LOCATIONS_DATA);
    const [activeView, setActiveView] = useState<'home' | 'favorites' | 'notifications' | 'settings'>('home');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);

    const [favorites, setFavorites] = useState<Set<string>>(() => {
        try {
            const saved = localStorage.getItem('favoriteLocations');
            return saved ? new Set(JSON.parse(saved)) : new Set();
        } catch (error) {
            console.error("Failed to parse favorites from localStorage", error);
            return new Set();
        }
    });

    const [enabledNotifications, setEnabledNotifications] = useState<Set<string>>(() => {
        try {
            const saved = localStorage.getItem('enabledNotifications');
            return saved ? new Set(JSON.parse(saved)) : new Set();
        } catch (error) {
            console.error("Failed to parse notifications from localStorage", error);
            return new Set();
        }
    });

    const [notification, setNotification] = useState<string | null>(null);

    useEffect(() => {
        localStorage.setItem('favoriteLocations', JSON.stringify(Array.from(favorites)));
    }, [favorites]);

    useEffect(() => {
        localStorage.setItem('enabledNotifications', JSON.stringify(Array.from(enabledNotifications)));
    }, [enabledNotifications]);

    const handleToggleFavorite = (locationId: string) => {
        setFavorites(prev => {
            const newFavs = new Set(prev);
            if (newFavs.has(locationId)) {
                newFavs.delete(locationId);
            } else {
                newFavs.add(locationId);
            }
            return newFavs;
        });
    };

    const handleToggleNotification = (locationId: string) => {
        setEnabledNotifications(prev => {
            const newNotifications = new Set(prev);
            const location = locations.find(l => l.id === locationId);
            if (newNotifications.has(locationId)) {
                newNotifications.delete(locationId);
                setNotification(`Notificações desativadas para ${location?.neighborhood}.`);
            } else {
                newNotifications.add(locationId);
                setNotification(`Notificações ativadas para ${location?.neighborhood}.`);
            }
            return newNotifications;
        });
    };

    const handleStatusChange = (equipmentId: string, newStatus: EquipmentStatus) => {
        if (!selectedLocation) return;

        const newLocations = locations.map(loc => {
            if (loc.id === selectedLocation.id) {
                const newEquipments = loc.equipments.map(eq => {
                    if (eq.id === equipmentId) {
                        return { ...eq, status: newStatus, lastChecked: new Date().toISOString() };
                    }
                    return eq;
                });
                return { ...loc, equipments: newEquipments };
            }
            return loc;
        });
        setLocations(newLocations);

        const updatedLocation = newLocations.find(l => l.id === selectedLocation.id);
        setSelectedLocation(updatedLocation || null);

        if (enabledNotifications.has(selectedLocation.id)) {
            const equipment = selectedLocation.equipments.find(e => e.id === equipmentId);
            setNotification(`O status de ${equipment?.type} em ${selectedLocation.neighborhood} foi alterado para ${newStatus}.`);
        }
    };

    const filteredLocations = useMemo(() => {
        let result = locations;
        if (activeView === 'favorites') {
            result = locations.filter(loc => favorites.has(loc.id));
        }

        if (searchTerm) {
            const lowercasedSearchTerm = searchTerm.toLowerCase();
            result = result.filter(loc =>
                loc.neighborhood.toLowerCase().includes(lowercasedSearchTerm) ||
                loc.city.toLowerCase().includes(lowercasedSearchTerm) ||
                loc.address.toLowerCase().includes(lowercasedSearchTerm)
            );
        }
        return result;
    }, [locations, searchTerm, activeView, favorites]);

    const renderContent = () => {
        switch (activeView) {
            case 'notifications':
                return <NotificationsView locations={locations} enabledNotifications={enabledNotifications} onToggleNotification={handleToggleNotification} />;
            case 'settings':
                return <SettingsView />;
            case 'favorites':
            case 'home':
            default:
                return (
                    <>
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                            {activeView === 'favorites' ? 'Meus Favoritos' : 'Visão Geral'}
                        </h2>
                        {filteredLocations.length > 0 ? (
                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredLocations.map(location => (
                                    <LocationCard
                                        key={location.id}
                                        location={location}
                                        isFavorite={favorites.has(location.id)}
                                        onToggleFavorite={handleToggleFavorite}
                                        onSelect={setSelectedLocation}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                                <p className="text-lg font-semibold">{activeView === 'favorites' ? 'Você ainda não tem locais favoritos.' : 'Nenhum local encontrado.'}</p>
                                <p>{activeView === 'favorites' ? 'Clique na estrela para adicionar um local aos seus favoritos.' : 'Tente ajustar sua busca.'}</p>
                            </div>
                        )}
                    </>
                );
        }
    };

    return (
        <div className="bg-slate-100 dark:bg-slate-900 flex">
            <Sidebar activeView={activeView} onViewChange={setActiveView} />
            <main className="flex-1 min-h-screen">
                <Header onSearch={setSearchTerm} />
                <div className="p-8">
                    {renderContent()}
                </div>
            </main>
            {selectedLocation && (
                <LocationDetailModal
                    location={selectedLocation}
                    onClose={() => setSelectedLocation(null)}
                    isAdmin={user?.isAdmin || false}
                    onStatusChange={handleStatusChange}
                    isNotificationEnabled={enabledNotifications.has(selectedLocation.id)}
                    onToggleNotification={handleToggleNotification}
                />
            )}
            {notification && (
                <NotificationToast message={notification} onClose={() => setNotification(null)} />
            )}
        </div>
    );
};

export default Dashboard;
