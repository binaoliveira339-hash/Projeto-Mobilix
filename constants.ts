import { LocationData, EquipmentStatus } from './types';

export const LOCATIONS_DATA: LocationData[] = [
    {
        id: 'sp-se',
        state: 'SP',
        city: 'São Paulo',
        neighborhood: 'Sé',
        installationType: 'Metrô, Shoppings',
        operatingHours: '05:00 - 00:00',
        address: 'Praça da Sé, s/n - Sé, São Paulo - SP',
        mapsLink: 'https://maps.google.com/?q=Praça+da+Sé,São+Paulo',
        reportFee: 4.50,
        equipments: [
            { id: 'se-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: '2025-07-20T10:00:00Z', nextMaintenance: '2025-09-10', repairEstimate: null, history: [{ date: '2025-06-15', event: 'Manutenção Preventiva' }] },
            { id: 'se-e2', type: 'Esteira Rolante', status: EquipmentStatus.Maintenance, lastChecked: '2025-07-19T14:30:00Z', nextMaintenance: '2025-08-25', repairEstimate: '4 horas', history: [{ date: '2025-07-19', event: 'Falha reportada por usuário' }, { date: '2025-07-10', event: 'Reparo concluído' }] }
        ]
    },
    {
        id: 'sp-consolacao',
        state: 'SP',
        city: 'São Paulo',
        neighborhood: 'Consolação',
        installationType: 'Metrô, Centros comerciais',
        operatingHours: '06:00 - 23:00',
        address: 'R. da Consolação, 2300 - Consolação, São Paulo - SP',
        mapsLink: 'https://maps.google.com/?q=Rua+da+Consolação,2300,São+Paulo',
        reportFee: 5.00,
        equipments: [
            { id: 'co-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: '2025-07-20T11:00:00Z', nextMaintenance: '2025-10-15', repairEstimate: null, history: [] },
            { id: 'co-e2', type: 'Escada Rolante', status: EquipmentStatus.Stopped, lastChecked: '2025-07-20T08:15:00Z', nextMaintenance: '2025-11-05', repairEstimate: 'Aguardando técnico', history: [{ date: '2025-07-20', event: 'Parada inesperada' }] }
        ]
    },
    {
        id: 'rj-copacabana',
        state: 'RJ',
        city: 'Rio de Janeiro',
        neighborhood: 'Copacabana',
        installationType: 'Metrô, Terminais, Shoppings',
        operatingHours: '05:30 - 23:30',
        address: 'Praça Cardeal Arcoverde - Copacabana, Rio de Janeiro - RJ',
        mapsLink: 'https://maps.google.com/?q=Praça+Cardeal+Arcoverde,Rio+de+Janeiro',
        reportFee: 3.80,
        equipments: [
            { id: 'copa-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: '2025-07-20T09:00:00Z', nextMaintenance: '2025-09-30', repairEstimate: null, history: [] },
            { id: 'copa-e2', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: '2025-07-20T09:00:00Z', nextMaintenance: '2025-09-30', repairEstimate: null, history: [] }
        ]
    },
    {
        id: 'mg-savassi',
        state: 'MG',
        city: 'Belo Horizonte',
        neighborhood: 'Savassi',
        installationType: 'Centros comerciais, Terminais',
        operatingHours: '08:00 - 22:00',
        address: 'Praça Diogo de Vasconcelos - Savassi, Belo Horizonte - MG',
        mapsLink: 'https://maps.google.com/?q=Praça+Diogo+de+Vasconcelos,Belo+Horizonte',
        reportFee: 4.20,
        equipments: [
            { id: 'sav-e1', type: 'Esteira Rolante', status: EquipmentStatus.Maintenance, lastChecked: '2025-07-18T18:00:00Z', nextMaintenance: '2025-08-20', repairEstimate: '2 dias', history: [{ date: '2025-07-18', event: 'Manutenção Programada' }] }
        ]
    },
    {
        id: 'pr-curitiba-centro',
        state: 'PR',
        city: 'Curitiba',
        neighborhood: 'Centro',
        installationType: 'Metrô (integrado), Terminais',
        operatingHours: '06:00 - 00:00',
        address: 'Praça Rui Barbosa - Centro, Curitiba - PR',
        mapsLink: 'https://maps.google.com/?q=Praça+Rui+Barbosa,Curitiba',
        reportFee: 5.50,
        equipments: [
            { id: 'cwb-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: '2025-07-20T12:00:00Z', nextMaintenance: '2025-10-01', repairEstimate: null, history: [] },
            { id: 'cwb-e2', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: '2025-07-20T12:00:00Z', nextMaintenance: '2025-10-01', repairEstimate: null, history: [] }
        ]
    },
    {
        id: 'rs-portoalegre-centro',
        state: 'RS',
        city: 'Porto Alegre',
        neighborhood: 'Centro Histórico',
        installationType: 'Terminais, Shoppings',
        operatingHours: '07:00 - 21:00',
        address: 'Mercado Público de Porto Alegre - Centro Histórico, Porto Alegre - RS',
        mapsLink: 'https://maps.google.com/?q=Mercado+Público+de+Porto+Alegre',
        reportFee: 3.25,
        equipments: [
            { id: 'poa-e1', type: 'Escada Rolante', status: EquipmentStatus.Stopped, lastChecked: '2025-07-19T20:00:00Z', nextMaintenance: '2025-08-18', repairEstimate: 'Aguardando peça', history: [{date: '2025-07-19', event: 'Falha no motor'}] }
        ]
    },
     {
        id: 'df-asasul',
        state: 'DF',
        city: 'Brasília',
        neighborhood: 'Asa Sul',
        installationType: 'Terminais, Shoppings',
        operatingHours: '06:00 - 23:00',
        address: 'Estação Central - Asa Sul, Brasília - DF',
        mapsLink: 'https://maps.google.com/?q=Estação+Central,Brasília',
        reportFee: 6.00,
        equipments: [
            { id: 'bsb-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: '2025-07-20T11:30:00Z', nextMaintenance: '2025-12-10', repairEstimate: null, history: [] }
        ]
    },
    {
        id: 'ba-salvador-barra',
        state: 'BA',
        city: 'Salvador',
        neighborhood: 'Barra',
        installationType: 'Aeroporto, Shoppings',
        operatingHours: '09:00 - 22:00',
        address: 'Shopping Barra - Barra, Salvador - BA',
        mapsLink: 'https://maps.google.com/?q=Shopping+Barra,Salvador',
        reportFee: 4.00,
        equipments: [
            { id: 'ssa-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: '2025-07-20T10:45:00Z', nextMaintenance: '2025-11-22', repairEstimate: null, history: [] },
            { id: 'ssa-e2', type: 'Esteira Rolante', status: EquipmentStatus.Working, lastChecked: '2025-07-20T10:45:00Z', nextMaintenance: '2025-11-20', repairEstimate: null, history: [] }
        ]
    },
    {
        id: 'pe-recife-boaviagem',
        state: 'PE',
        city: 'Recife',
        neighborhood: 'Boa Viagem',
        installationType: 'Aeroporto, Shoppings',
        operatingHours: '24/7',
        address: 'Aeroporto Internacional do Recife/Guararapes - Recife - PE',
        mapsLink: 'https://maps.google.com/?q=Aeroporto+Internacional+do+Recife',
        reportFee: 3.50,
        equipments: [
            { id: 'rec-e1', type: 'Esteira Rolante', status: EquipmentStatus.Working, lastChecked: '2025-07-20T13:00:00Z', nextMaintenance: '2025-09-05', repairEstimate: null, history: [] }
        ]
    },
    {
        id: 'ce-fortaleza-meireles',
        state: 'CE',
        city: 'Fortaleza',
        neighborhood: 'Meireles',
        installationType: 'Aeroporto, Shoppings',
        operatingHours: '10:00 - 22:00',
        address: 'Shopping Aldeota - Meireles, Fortaleza - CE',
        mapsLink: 'https://maps.google.com/?q=Shopping+Aldeota,Fortaleza',
        reportFee: 4.75,
        equipments: [
            { id: 'for-e1', type: 'Escada Rolante', status: EquipmentStatus.Maintenance, lastChecked: '2025-07-19T09:00:00Z', nextMaintenance: '2025-10-25', repairEstimate: '8 horas', history: [{date: '2025-07-19', event: 'Troca de degraus'}] }
        ]
    },
    // New SP locations
    {
        id: 'sp-campinas-cambui', state: 'SP', city: 'Campinas', neighborhood: 'Cambuí', installationType: 'Terminais, Centros comerciais',
        operatingHours: '07:00 - 23:00', address: 'Av. Coronel Silva Telles, 500 - Cambuí, Campinas - SP',
        mapsLink: 'https://maps.google.com/?q=Av.+Coronel+Silva+Telles,500,Campinas', reportFee: 4.80,
        equipments: [{ id: 'cam-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-11-15', repairEstimate: null, history: [] }]
    },
    {
        id: 'sp-santos-gonzaga', state: 'SP', city: 'Santos', neighborhood: 'Gonzaga', installationType: 'Shoppings, Orla marítima',
        operatingHours: '10:00 - 22:00', address: 'Praça da Independência, 10 - Gonzaga, Santos - SP',
        mapsLink: 'https://maps.google.com/?q=Praça+da+Independência,10,Santos', reportFee: 3.90,
        equipments: [{ id: 'san-e1', type: 'Esteira Rolante', status: EquipmentStatus.Stopped, lastChecked: new Date().toISOString(), nextMaintenance: '2025-08-12', repairEstimate: 'Aguardando peça', history: [{date: '2025-07-20', event: 'Falha no sensor'}] }]
    },
    {
        id: 'sp-ribeirao-centro', state: 'SP', city: 'Ribeirão Preto', neighborhood: 'Centro', installationType: 'Shoppings, Terminais urbanos',
        operatingHours: '08:00 - 21:00', address: 'R. Álvares Cabral, 550 - Centro, Ribeirão Preto - SP',
        mapsLink: 'https://maps.google.com/?q=R.+Álvares+Cabral,550,Ribeirão+Preto', reportFee: 5.10,
        equipments: [{ id: 'rib-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-12-01', repairEstimate: null, history: [] }]
    },
    {
        id: 'sp-sjc-jdsatelite', state: 'SP', city: 'São José dos Campos', neighborhood: 'Jardim Satélite', installationType: 'Centros comerciais, Terminais',
        operatingHours: '09:00 - 22:00', address: 'Av. Andrômeda, 227 - Jardim Satélite, São José dos Campos - SP',
        mapsLink: 'https://maps.google.com/?q=Av.+Andrômeda,227,São+José+dos+Campos', reportFee: 4.60,
        equipments: [{ id: 'sjc-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-09-20', repairEstimate: null, history: [] }]
    },
    {
        id: 'sp-sorocaba-campolim', state: 'SP', city: 'Sorocaba', neighborhood: 'Campolim', installationType: 'Shoppings, Terminais',
        operatingHours: '10:00 - 22:00', address: 'Av. Professora Izoraida Marques Peres, 401 - Campolim, Sorocaba - SP',
        mapsLink: 'https://maps.google.com/?q=Av.+Professora+Izoraida+Marques+Peres,401,Sorocaba', reportFee: 5.20,
        equipments: [{ id: 'sor-e1', type: 'Esteira Rolante', status: EquipmentStatus.Maintenance, lastChecked: new Date().toISOString(), nextMaintenance: '2025-10-30', repairEstimate: '48 horas', history: [{date: '2025-07-21', event: 'Manutenção Preventiva'}] }]
    },
    {
        id: 'sp-guarulhos-centro', state: 'SP', city: 'Guarulhos', neighborhood: 'Centro', installationType: 'Aeroporto, Terminais',
        operatingHours: '24/7', address: 'Aeroporto Internacional de Guarulhos - Guarulhos - SP',
        mapsLink: 'https://maps.google.com/?q=Aeroporto+Internacional+de+Guarulhos', reportFee: 5.80,
        equipments: [{ id: 'gru-e1', type: 'Esteira Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-09-01', repairEstimate: null, history: [] }, { id: 'gru-e2', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-09-01', repairEstimate: null, history: [] }]
    },
    // New RJ locations
    {
        id: 'rj-niteroi-icarai', state: 'RJ', city: 'Niterói', neighborhood: 'Icaraí', installationType: 'Terminais, Shoppings',
        operatingHours: '08:00 - 22:00', address: 'R. Gavião Peixoto, 182 - Icaraí, Niterói - RJ',
        mapsLink: 'https://maps.google.com/?q=R.+Gavião+Peixoto,182,Niterói', reportFee: 3.75,
        equipments: [{ id: 'nit-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-11-25', repairEstimate: null, history: [] }]
    },
    {
        id: 'rj-petropolis-centro', state: 'RJ', city: 'Petrópolis', neighborhood: 'Centro', installationType: 'Centros comerciais',
        operatingHours: '09:00 - 20:00', address: 'R. do Imperador, 700 - Centro, Petrópolis - RJ',
        mapsLink: 'https://maps.google.com/?q=R.+do+Imperador,700,Petrópolis', reportFee: 4.10,
        equipments: [{ id: 'pet-e1', type: 'Escada Rolante', status: EquipmentStatus.Stopped, lastChecked: new Date().toISOString(), nextMaintenance: '2025-08-05', repairEstimate: 'Técnico a caminho', history: [{date: '2025-07-22', event: 'Falha Elétrica'}] }]
    },
    {
        id: 'rj-novaiguacu-centro', state: 'RJ', city: 'Nova Iguaçu', neighborhood: 'Centro', installationType: 'Terminais urbanos, Shoppings',
        operatingHours: '06:00 - 23:00', address: 'Av. Mal. Floriano Peixoto, 2500 - Centro, Nova Iguaçu - RJ',
        mapsLink: 'https://maps.google.com/?q=Av.+Mal.+Floriano+Peixoto,2500,Nova+Iguaçu', reportFee: 3.60,
        equipments: [{ id: 'nig-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-12-20', repairEstimate: null, history: [] }]
    },
    // New MG locations
    {
        id: 'mg-contagem-eldorado', state: 'MG', city: 'Contagem', neighborhood: 'Eldorado', installationType: 'Terminais urbanos',
        operatingHours: '05:00 - 00:00', address: 'Terminal Metropolitano de Contagem - Eldorado, Contagem - MG',
        mapsLink: 'https://maps.google.com/?q=Terminal+Metropolitano+de+Contagem', reportFee: 4.30,
        equipments: [{ id: 'con-e1', type: 'Esteira Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-09-18', repairEstimate: null, history: [] }]
    },
    {
        id: 'mg-uberlandia-centro', state: 'MG', city: 'Uberlândia', neighborhood: 'Centro', installationType: 'Shoppings, Terminais',
        operatingHours: '08:00 - 22:00', address: 'Av. João Naves de Ávila, 1331 - Centro, Uberlândia - MG',
        mapsLink: 'https://maps.google.com/?q=Av.+João+Naves+de+Ávila,1331,Uberlândia', reportFee: 4.90,
        equipments: [{ id: 'ube-e1', type: 'Escada Rolante', status: EquipmentStatus.Maintenance, lastChecked: new Date().toISOString(), nextMaintenance: '2025-10-10', repairEstimate: '12 horas', history: [{date: '2025-07-20', event: 'Revisão periódica'}] }]
    },
    {
        id: 'mg-juizdefora-centro', state: 'MG', city: 'Juiz de Fora', neighborhood: 'Centro', installationType: 'Shoppings, Terminais urbanos',
        operatingHours: '09:00 - 21:00', address: 'Av. Barão do Rio Branco, 2000 - Centro, Juiz de Fora - MG',
        mapsLink: 'https://maps.google.com/?q=Av.+Barão+do+Rio+Branco,2000,Juiz+de+Fora', reportFee: 4.40,
        equipments: [{ id: 'jdf-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-11-11', repairEstimate: null, history: [] }]
    },
    // New PR locations
    {
        id: 'pr-londrina-gleba', state: 'PR', city: 'Londrina', neighborhood: 'Gleba Palhano', installationType: 'Shoppings, Centros comerciais',
        operatingHours: '10:00 - 22:00', address: 'Av. Ayrton Senna da Silva, 400 - Gleba Fazenda Palhano, Londrina - PR',
        mapsLink: 'https://maps.google.com/?q=Av.+Ayrton+Senna+da+Silva,400,Londrina', reportFee: 5.60,
        equipments: [{ id: 'lon-e1', type: 'Esteira Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-08-28', repairEstimate: null, history: [] }]
    },
    {
        id: 'pr-maringa-zona1', state: 'PR', city: 'Maringá', neighborhood: 'Zona 1', installationType: 'Terminais, Centros comerciais',
        operatingHours: '09:00 - 21:00', address: 'Av. Brasil, 3500 - Zona 1, Maringá - PR',
        mapsLink: 'https://maps.google.com/?q=Av.+Brasil,3500,Maringá', reportFee: 5.30,
        equipments: [{ id: 'mga-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-12-12', repairEstimate: null, history: [] }]
    },
    // New RS locations
    {
        id: 'rs-caxias-centro', state: 'RS', city: 'Caxias do Sul', neighborhood: 'Centro', installationType: 'Terminais, Shoppings',
        operatingHours: '08:00 - 20:00', address: 'R. Sinimbu, 2000 - Centro, Caxias do Sul - RS',
        mapsLink: 'https://maps.google.com/?q=R.+Sinimbu,2000,Caxias+do+Sul', reportFee: 3.40,
        equipments: [{ id: 'cax-e1', type: 'Escada Rolante', status: EquipmentStatus.Stopped, lastChecked: new Date().toISOString(), nextMaintenance: '2025-09-22', repairEstimate: 'Aguardando peça', history: [{date: '2025-07-18', event: 'Falha mecânica'}] }]
    },
    {
        id: 'rs-pelotas-tresvendas', state: 'RS', city: 'Pelotas', neighborhood: 'Três Vendas', installationType: 'Centros comerciais',
        operatingHours: '10:00 - 22:00', address: 'Av. Fernando Osório, 1500 - Três Vendas, Pelotas - RS',
        mapsLink: 'https://maps.google.com/?q=Av.+Fernando+Osório,1500,Pelotas', reportFee: 3.10,
        equipments: [{ id: 'pel-e1', type: 'Esteira Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-11-18', repairEstimate: null, history: [] }]
    },
    // New DF location
    {
        id: 'df-taguatinga-centro', state: 'DF', city: 'Taguatinga', neighborhood: 'Centro', installationType: 'Terminais, Centros comerciais',
        operatingHours: '09:00 - 22:00', address: 'Praça do Relógio, Lote A - Taguatinga Centro, Taguatinga - DF',
        mapsLink: 'https://maps.google.com/?q=Praça+do+Relógio,Taguatinga', reportFee: 5.90,
        equipments: [{ id: 'tag-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-10-20', repairEstimate: null, history: [] }]
    },
    // New BA locations
    {
        id: 'ba-feiradesantana-centro', state: 'BA', city: 'Feira de Santana', neighborhood: 'Centro', installationType: 'Terminais, Shoppings',
        operatingHours: '08:00 - 21:00', address: 'Av. Senhor dos Passos, 980 - Centro, Feira de Santana - BA',
        mapsLink: 'https://maps.google.com/?q=Av.+Senhor+dos+Passos,980,Feira+de+Santana', reportFee: 4.15,
        equipments: [{ id: 'fsa-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-08-30', repairEstimate: null, history: [] }]
    },
    {
        id: 'ba-laurodefreitas-vilas', state: 'BA', city: 'Lauro de Freitas', neighborhood: 'Vilas do Atlântico', installationType: 'Aeroporto, Centros comerciais',
        operatingHours: '10:00 - 22:00', address: 'Estrada do Coco, Km 7.5 - Vilas do Atlântico, Lauro de Freitas - BA',
        mapsLink: 'https://maps.google.com/?q=Estrada+do+Coco,Lauro+de+Freitas', reportFee: 3.95,
        equipments: [{ id: 'ldf-e1', type: 'Esteira Rolante', status: EquipmentStatus.Maintenance, lastChecked: new Date().toISOString(), nextMaintenance: '2025-12-05', repairEstimate: '8 horas', history: [{date: '2025-07-22', event: 'Troca de esteira'}] }]
    },
    // New PE location
    {
        id: 'pe-olinda-bairronovo', state: 'PE', city: 'Olinda', neighborhood: 'Bairro Novo', installationType: 'Terminais, Shoppings',
        operatingHours: '09:00 - 21:00', address: 'Av. Gov. Carlos de Lima Cavalcanti, 100 - Bairro Novo, Olinda - PE',
        mapsLink: 'https://maps.google.com/?q=Av.+Gov.+Carlos+de+Lima+Cavalcanti,100,Olinda', reportFee: 3.65,
        equipments: [{ id: 'oli-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-09-12', repairEstimate: null, history: [] }]
    },
    // New CE location
    {
        id: 'ce-caucaia-centro', state: 'CE', city: 'Caucaia', neighborhood: 'Centro', installationType: 'Terminais, Centros comerciais',
        operatingHours: '08:00 - 20:00', address: 'R. Jerônimo do Amaral, 200 - Centro, Caucaia - CE',
        mapsLink: 'https://maps.google.com/?q=R.+Jerônimo+do+Amaral,200,Caucaia', reportFee: 4.65,
        equipments: [{ id: 'cau-e1', type: 'Escada Rolante', status: EquipmentStatus.Stopped, lastChecked: new Date().toISOString(), nextMaintenance: '2025-10-28', repairEstimate: 'Aguardando técnico', history: [{date: '2025-07-21', event: 'Parada inesperada'}] }]
    },
    // Other new locations from SP
     {
        id: 'sp-osasco-centro', state: 'SP', city: 'Osasco', neighborhood: 'Centro', installationType: 'Shoppings, Terminais urbanos',
        operatingHours: '09:00 - 22:00', address: 'Av. dos Autonomistas, 1828 - Centro, Osasco - SP',
        mapsLink: 'https://maps.google.com/?q=Av.+dos+Autonomistas,1828,Osasco', reportFee: 5.05,
        equipments: [{ id: 'osc-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-11-10', repairEstimate: null, history: [] }]
    },
    {
        id: 'sp-santoandre-vilaassuncao', state: 'SP', city: 'Santo André', neighborhood: 'Vila Assunção', installationType: 'Terminais, Centros comerciais',
        operatingHours: '08:00 - 22:00', address: 'Av. Pereira Barreto, 42 - Vila Assunção, Santo André - SP',
        mapsLink: 'https://maps.google.com/?q=Av.+Pereira+Barreto,42,Santo+André', reportFee: 4.95,
        equipments: [{ id: 'sta-e1', type: 'Esteira Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-08-15', repairEstimate: null, history: [] }]
    },
    {
        id: 'sp-saobernardo-rudgeramos', state: 'SP', city: 'São Bernardo do Campo', neighborhood: 'Rudge Ramos', installationType: 'Terminais, Shoppings',
        operatingHours: '07:00 - 23:00', address: 'Av. Caminho do Mar, 3300 - Rudge Ramos, São Bernardo do Campo - SP',
        mapsLink: 'https://maps.google.com/?q=Av.+Caminho+do+Mar,3300,São+Bernardo+do+Campo', reportFee: 5.15,
        equipments: [{ id: 'sbc-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-12-15', repairEstimate: null, history: [] }]
    },
    {
        id: 'sp-saocaetano-santapaula', state: 'SP', city: 'São Caetano do Sul', neighborhood: 'Santa Paula', installationType: 'Shoppings, Terminais',
        operatingHours: '10:00 - 22:00', address: 'Al. Terracota, 545 - Santa Paula, São Caetano do Sul - SP',
        mapsLink: 'https://maps.google.com/?q=Al.+Terracota,545,São+Caetano+do+Sul', reportFee: 5.35,
        equipments: [{ id: 'scs-e1', type: 'Esteira Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-10-18', repairEstimate: null, history: [] }]
    },
    {
        id: 'sp-bauru-jardimestoril', state: 'SP', city: 'Bauru', neighborhood: 'Jardim Estoril', installationType: 'Centros comerciais',
        operatingHours: '09:00 - 22:00', address: 'R. Henrique Savi, 15-55 - Jardim Estoril, Bauru - SP',
        mapsLink: 'https://maps.google.com/?q=R.+Henrique+Savi,15-55,Bauru', reportFee: 4.55,
        equipments: [{ id: 'bau-e1', type: 'Escada Rolante', status: EquipmentStatus.Maintenance, lastChecked: new Date().toISOString(), nextMaintenance: '2025-09-25', repairEstimate: '4 horas', history: [{date: '2025-07-19', event: 'Manutenção agendada'}] }]
    },
    {
        id: 'sp-mogi-centro', state: 'SP', city: 'Mogi das Cruzes', neighborhood: 'Centro', installationType: 'Terminais urbanos',
        operatingHours: '05:00 - 00:00', address: 'Praça Sacadura Cabral, s/n - Centro, Mogi das Cruzes - SP',
        mapsLink: 'https://maps.google.com/?q=Praça+Sacadura+Cabral,Mogi+das+Cruzes', reportFee: 4.25,
        equipments: [{ id: 'mog-e1', type: 'Escada Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-11-28', repairEstimate: null, history: [] }]
    },
    {
        id: 'sp-jundiai-anhangabau', state: 'SP', city: 'Jundiaí', neighborhood: 'Anhangabaú', installationType: 'Shoppings, Terminais',
        operatingHours: '10:00 - 22:00', address: 'Av. Nove de Julho, 3333 - Anhangabaú, Jundiaí - SP',
        mapsLink: 'https://maps.google.com/?q=Av.+Nove+de+Julho,3333,Jundiaí', reportFee: 4.85,
        equipments: [{ id: 'jun-e1', type: 'Esteira Rolante', status: EquipmentStatus.Working, lastChecked: new Date().toISOString(), nextMaintenance: '2025-08-22', repairEstimate: null, history: [] }]
    },
];

export const STATUS_CONFIG: { [key in EquipmentStatus]: { text: string; color: string; bgColor: string } } = {
    [EquipmentStatus.Working]: { text: 'Funcionando', color: 'text-green-800', bgColor: 'bg-green-100' },
    [EquipmentStatus.Stopped]: { text: 'Parado', color: 'text-yellow-800', bgColor: 'bg-yellow-100' },
    [EquipmentStatus.Maintenance]: { text: 'Em Manutenção', color: 'text-red-800', bgColor: 'bg-red-100' },
};
