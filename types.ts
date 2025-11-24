
export enum EquipmentStatus {
    Working = 'funcionando',
    Stopped = 'parado',
    Maintenance = 'manutenção',
}

export interface Equipment {
    id: string;
    type: 'Escada Rolante' | 'Esteira Rolante';
    status: EquipmentStatus;
    lastChecked: string;
    nextMaintenance: string;
    repairEstimate: string | null;
    history: { date: string; event: string }[];
}

export interface LocationData {
    id: string;
    state: string;
    city: string;
    neighborhood: string;
    installationType: string;
    operatingHours: string;
    address: string;
    mapsLink: string;
    reportFee: number;
    equipments: Equipment[];
}

export interface User {
    email: string;
    name: string;
    isAdmin: boolean;
    city?: string;
}
