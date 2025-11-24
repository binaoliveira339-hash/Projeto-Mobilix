import React from 'react';
import { LocationData, Equipment, EquipmentStatus } from '../types';
import StatusIndicator from './StatusIndicator';
import IconBell from './icons/IconBell';
import IconMapPin from './icons/IconMapPin';
import IconExternalLink from './icons/IconExternalLink';
import IconCash from './icons/IconCash';


interface LocationDetailModalProps {
    location: LocationData;
    onClose: () => void;
    isAdmin: boolean;
    onStatusChange: (equipmentId: string, newStatus: EquipmentStatus) => void;
    isNotificationEnabled: boolean;
    onToggleNotification: (locationId: string) => void;
}

const EquipmentRow: React.FC<{
    equipment: Equipment;
    isAdmin: boolean;
    onStatusChange: (equipmentId: string, newStatus: EquipmentStatus) => void;
}> = ({ equipment, isAdmin, onStatusChange }) => {
    
    const maintenanceDate = new Date(equipment.nextMaintenance);
    const comparisonDate = new Date('2025-10-01T00:00:00Z');
    const maintenanceLabel = maintenanceDate < comparisonDate ? 'Última Manutenção:' : 'Próxima Manutenção:';

    return (
        <div className="py-4 px-2 hover:bg-gray-50 dark:hover:bg-slate-700/50 rounded-md">
            <div className="grid grid-cols-3 gap-4 items-center">
                <div>
                    <p className="font-semibold text-gray-800 dark:text-slate-100">{equipment.type}</p>
                    <p className="text-xs text-gray-500 dark:text-slate-400">ID: {equipment.id}</p>
                </div>
                <div>
                    <StatusIndicator status={equipment.status} />
                     {equipment.status !== EquipmentStatus.Working && (
                        <p className="text-xs text-yellow-700 dark:text-yellow-500 mt-1">Reparo: {equipment.repairEstimate || 'N/A'}</p>
                    )}
                </div>
                 {isAdmin ? (
                    <div>
                        <select
                            value={equipment.status}
                            onChange={(e) => onStatusChange(equipment.id, e.target.value as EquipmentStatus)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                            onClick={e => e.stopPropagation()}
                        >
                            <option value={EquipmentStatus.Working}>Funcionando</option>
                            <option value={EquipmentStatus.Stopped}>Parado</option>
                            <option value={EquipmentStatus.Maintenance}>Em Manutenção</option>
                        </select>
                    </div>
                ) : (
                     <div>
                        <p className="text-sm text-gray-600 dark:text-slate-400">{maintenanceLabel}</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-slate-200">{maintenanceDate.toLocaleDateString('pt-BR')}</p>
                     </div>
                )}
            </div>
        </div>
    );
};


const LocationDetailModal: React.FC<LocationDetailModalProps> = ({ location, onClose, isAdmin, onStatusChange, isNotificationEnabled, onToggleNotification }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity" onClick={onClose}>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-full max-w-2xl m-4 transform transition-all flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100">{location.neighborhood}</h2>
                            <p className="text-md text-gray-500 dark:text-slate-400">{location.city}, {location.state}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                             <button onClick={() => onToggleNotification(location.id)} className={`p-2 rounded-full transition-colors ${isNotificationEnabled ? 'text-blue-500 hover:bg-blue-100 dark:hover:bg-slate-700' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-slate-700'}`}>
                                <IconBell className={`w-6 h-6 ${isNotificationEnabled ? 'fill-current' : ''}`}/>
                             </button>
                             <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-3xl font-light">&times;</button>
                        </div>
                    </div>
                </div>

                 <div className="px-6 pb-6 flex-1 overflow-y-auto">
                    <div className="border-t dark:border-slate-700 pt-4">
                         <div className="space-y-4 text-sm">
                            <div className="flex items-start">
                                <IconMapPin className="w-5 h-5 mr-3 mt-0.5 text-gray-400 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-slate-300">{location.address}</span>
                            </div>
                             <div className="flex items-center">
                                <IconCash className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-slate-300">
                                    Taxa de Reporte: <span className="font-semibold text-gray-800 dark:text-slate-100">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(location.reportFee)}</span>
                                </span>
                            </div>
                            <a 
                                href={location.mapsLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                <IconExternalLink className="w-4 h-4 mr-2" />
                                Ver no mapa
                            </a>
                        </div>
                    </div>

                    <div className="mt-6 border-t dark:border-slate-700 pt-4">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-2">Equipamentos no Local</h3>
                         <div className="divide-y divide-gray-200 dark:divide-slate-700 max-h-[40vh] overflow-y-auto pr-2">
                            {location.equipments.map(equip => (
                                <EquipmentRow 
                                    key={equip.id}
                                    equipment={equip}
                                    isAdmin={isAdmin}
                                    onStatusChange={onStatusChange}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationDetailModal;