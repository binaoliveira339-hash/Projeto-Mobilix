import React from 'react';
import { EquipmentStatus } from '../types';
import { STATUS_CONFIG } from '../constants';

interface StatusIndicatorProps {
    status: EquipmentStatus;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
    const config = STATUS_CONFIG[status];

    const dotColor = {
        [EquipmentStatus.Working]: 'bg-green-500',
        [EquipmentStatus.Stopped]: 'bg-yellow-500',
        [EquipmentStatus.Maintenance]: 'bg-red-500',
    }[status];
    
    const darkBgColor = {
        [EquipmentStatus.Working]: 'dark:bg-green-500/10',
        [EquipmentStatus.Stopped]: 'dark:bg-yellow-500/10',
        [EquipmentStatus.Maintenance]: 'dark:bg-red-500/10',
    }[status];

    const darkTextColor = {
        [EquipmentStatus.Working]: 'dark:text-green-400',
        [EquipmentStatus.Stopped]: 'dark:text-yellow-400',
        [EquipmentStatus.Maintenance]: 'dark:text-red-400',
    }[status];


    return (
        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bgColor} ${config.color} ${darkBgColor} ${darkTextColor}`}>
            <span className={`w-2 h-2 mr-1.5 rounded-full ${dotColor}`}></span>
            {config.text}
        </div>
    );
};

export default StatusIndicator;
