// Export the data and functions
export { mockTerceros, TerceroDataSource, mockCities, CityDataSource, mockEvents };

// Mock data for terceros
const mockTerceros = [
    { id: '1', ccTercero: 'CC001', nombreTercero: 'Juan Pérez', inicialTercero: 'JP', tipoDocumentoTercero: '03', numeroDocumentoTercero: '12345678', props: { tipoTercero: 'CONTRATISTA', baseLiquidacion: '5000000', cargoServidor: 'Contratista', entidadBancaria: 'BANCOLOMBIA', cuentaBancaria: '1234567890', tipoCuenta: 'Ahorro', telefono: '3001234567', correo: 'juan.perez@example.com', fechaNacimiento: '1980-05-15', contrato: 'C001' } },
    { id: '2', ccTercero: 'CC002', nombreTercero: 'María Gómez', inicialTercero: 'MG', tipoDocumentoTercero: '03', numeroDocumentoTercero: '87654321', props: { tipoTercero: 'CATEDRATICO', baseLiquidacion: '3000000', cargoServidor: 'Hora Catedra', entidadBancaria: 'BANCO DAVIVIENDA', cuentaBancaria: '0987654321', tipoCuenta: 'Corriente', telefono: '3109876543', correo: 'maria.gomez@example.com', fechaNacimiento: '1990-08-22', contrato: 'C002' } },
    { id: '3', ccTercero: 'CC003', nombreTercero: 'Carlos López', inicialTercero: 'CL', tipoDocumentoTercero: '03', numeroDocumentoTercero: '11223344', props: { tipoTercero: 'SERVIDOR', baseLiquidacion: '4000000', cargoServidor: 'Servidor', entidadBancaria: 'BANCO DE BOGOTA', cuentaBancaria: '4567891234', tipoCuenta: 'Ahorro', telefono: '3204567890', correo: 'carlos.lopez@example.com', fechaNacimiento: '1975-03-10', contrato: 'C003' } }
];

// Mock data source simulation for terceros
const TerceroDataSource = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve([...mockTerceros]), 500);
    });
};

// Mock data for cities
const mockCities = [
    { id: '1', nombreCiudad: 'CALI', departamento: 'VALLE', categoria: 1 },
    { id: '2', nombreCiudad: 'BOGOTA', departamento: 'CUNDINAMARCA', categoria: 2 },
    { id: '3', nombreCiudad: 'MEDELLIN', departamento: 'ANTIOQUIA', categoria: 1 },
    { id: '4', nombreCiudad: 'CARTAGENA', departamento: 'BOLIVAR', categoria: 3 },
    { id: '5', nombreCiudad: 'BARRANQUILLA', departamento: 'ATLANTICO', categoria: 2 },
    { id: '6', nombreCiudad: 'PEREIRA', departamento: 'RISARALDA', categoria: 1 }
];

// Mock data source simulation for cities
const CityDataSource = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve([...mockCities]), 500);
    });
};

// Mock data for events in May 2025
const mockEvents = [
    {
        id: '1',
        title: 'Juan Pérez',
        description: 'REUNION-PLANIFICACION-2025',
        startDate: '2025-05-01T00:00:00',
        endDate: '2025-05-03T00:00:00',
        color: '#3b82f6',
        terceroId: '1', // Juan Pérez from mockTerceros
        viatica: true,
        transporte: '1,500,000',
        origen: '1', // CALI from mockCities
        destino: '2', // BOGOTA from mockCities
        rutaAdicional: 'RUTA NORTE'
    },
    {
        id: '2',
        title: 'María Gómez',
        description: 'CONFERENCIA-EDUCACION',
        startDate: '2025-05-10T00:00:00',
        endDate: '2025-05-12T00:00:00',
        color: '#10b981',
        terceroId: '2', // María Gómez from mockTerceros
        viatica: true,
        transporte: '2,000,000',
        origen: '3', // MEDELLIN from mockCities
        destino: '4', // CARTAGENA from mockCities
        rutaAdicional: 'RUTA COSTA'
    },
    {
        id: '3',
        title: 'Carlos López',
        description: 'TALLER-CAPACITACION',
        startDate: '2025-05-15T00:00:00',
        endDate: '2025-05-16T00:00:00',
        color: '#8b5cf6',
        terceroId: '3', // Carlos López from mockTerceros
        viatica: true,
        transporte: '800,000',
        origen: '5', // BARRANQUILLA from mockCities
        destino: '6', // PEREIRA from mockCities
        rutaAdicional: 'RUTA CENTRO'
    }
];

