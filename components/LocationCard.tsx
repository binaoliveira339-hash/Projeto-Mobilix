import React, { useMemo } from 'react';
import { LocationData, EquipmentStatus } from '../types';
import IconStar from './icons/IconStar';
import IconMapPin from './icons/IconMapPin';

interface LocationCardProps {
    location: LocationData;
    isFavorite: boolean;
    onToggleFavorite: (locationId: string) => void;
    onSelect: (location: LocationData) => void;
}

const StatusPill: React.FC<{ status: EquipmentStatus, count: number}> = ({ status, count }) => {
    const colorClasses = {
        [EquipmentStatus.Working]: 'bg-green-100 text-green-800 dark:bg-green-500/10 dark:text-green-400',
        [EquipmentStatus.Stopped]: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-500/10 dark:text-yellow-400',
        [EquipmentStatus.Maintenance]: 'bg-red-100 text-red-800 dark:bg-red-500/10 dark:text-red-400',
    };
     const dotClasses = {
        [EquipmentStatus.Working]: 'bg-green-500',
        [EquipmentStatus.Stopped]: 'bg-yellow-500',
        [EquipmentStatus.Maintenance]: 'bg-red-500',
    };
    const text = {
        [EquipmentStatus.Working]: 'Funcionando',
        [EquipmentStatus.Stopped]: 'Parado',
        [EquipmentStatus.Maintenance]: 'Manutenção',
    }

    if (count === 0) return null;

    return (
        <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${colorClasses[status]}`}>
            <span className={`w-2 h-2 mr-1.5 rounded-full ${dotClasses[status]}`}></span>
            {count} {text[status]}
        </div>
    );
}

const LocationCard: React.FC<LocationCardProps> = ({ location, isFavorite, onToggleFavorite, onSelect }) => {
    const statusCounts = useMemo(() => {
        const counts = {
            [EquipmentStatus.Working]: 0,
            [EquipmentStatus.Stopped]: 0,
            [EquipmentStatus.Maintenance]: 0,
        };
        location.equipments.forEach(eq => {
            counts[eq.status]++;
        });
        return counts;
    }, [location.equipments]);

    return (
        <div 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg dark:hover:bg-slate-700/50 transition-all duration-300 p-6 cursor-pointer flex flex-col justify-between"
            onClick={() => onSelect(location)}
        >
            <div>
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100">{location.neighborhood}</h3>
                        <p className="text-sm text-gray-500 dark:text-slate-400">{location.city}, {location.state}</p>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); onToggleFavorite(location.id); }} className="p-2 -mr-2 -mt-2 rounded-full text-gray-400 hover:bg-yellow-50 dark:hover:bg-slate-700">
                        <IconStar className={`w-6 h-6 transition-colors ${isFavorite ? 'text-yellow-400 fill-current' : 'hover:text-yellow-300'}`} />
                    </button>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                   <StatusPill status={EquipmentStatus.Working} count={statusCounts[EquipmentStatus.Working]} />
                   <StatusPill status={EquipmentStatus.Stopped} count={statusCounts[EquipmentStatus.Stopped]} />
                   <StatusPill status={EquipmentStatus.Maintenance} count={statusCounts[EquipmentStatus.Maintenance]} />
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-slate-700 flex justify-between text-sm text-gray-600 dark:text-slate-300">
                <span className="font-medium">{location.installationType}</span>
                <span>{location.operatingHours}</span>
            </div>
        </div>
    );
};

export default LocationCard;
