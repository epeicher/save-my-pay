export default [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' }
];

const categories = {
  1: { id: 1, value: 'Salud, saber y deporte' },
  2: { id: 2, value: 'Vivienda y vehículo' },
  3: { id: 3, value: 'Seguros' },
  4: { id: 4, value: 'Servicios típicos' },
  5: { id: 5, value: 'Ocio y transporte' },
  6: { id: 6, value: 'Compras' },
  7: { id: 7, value: 'Bancos y organismos' },
  8: { id: 8, value: 'Gastos varios' }
};

export { categories };

const subCategories = {
  1: [
    'Farmacia',
    'Belleza',
    'Óptica y dentista',
    'Médico',
    'Deporte',
    'Estudios',
    'Asociaciones',
    'Solidaridad',
    'Otros salud, saber y deporte'
  ],
  2: [
    'Alquiler y compra',
    'Comunidad',
    'Servicio doméstico',
    'Mantenimiento hogar',
    'Mantenimiento vehículo',
    'Compra vehículo',
    'Otros vivienda'
  ],
  3: [
    'Seguro auto',
    'Seguro moto',
    'Seguro hogar',
    'Seguro salud',
    'Seguro vida',
    'Seguro viaje',
    'Seguro mascotas',
    'Otros seguros'
  ],
  4: [
    'Internet',
    'Móvil',
    'Electricidad',
    'Gas',
    'Agua',
    'Alarmas y seguridad',
    'Televisión',
    'Servicios y productos online',
    'Otros servicios'
  ],
  5: [
    'Restaurante',
    'Hotel',
    'Transportes',
    'Alquiler vehículos',
    'Espectáculos',
    'Gasolina',
    'Parking y peaje',
    'Lotería',
    'Otros ocio'
  ],
  6: [
    'Hogar',
    'Electrónica',
    'Supermercado',
    'Ropa',
    'Material deportivo',
    'Librería',
    'Niños y mascotas',
    'Regalos',
    'Otras compras'
  ],
  7: [
    'Hipoteca',
    'Préstamos',
    'Cargos bancarios',
    'Impuestos',
    'Ayuntamiento',
    'Seguridad Social',
    'Multas y licencias',
    'Asesores y abogados',
    'Otros organismos'
  ],
  8: ['Efectivo', 'Pensión familiar', 'Transferencias', 'Otros gastos']
};

function flatSubCategories() {
  return Object.values(subCategories).reduce((acc, ini) => acc.concat(ini));
}

const listAllSubCategories = flatSubCategories();

export { subCategories, listAllSubCategories };

let lang = {};

lang['G0100'] = 'Salud, saber y deporte';
lang['G0200'] = 'Vivienda y vehículo';
lang['G0300'] = 'Seguros';
lang['G0400'] = 'Servicios típicos';
lang['G0500'] = 'Ocio y transporte';
lang['G0600'] = 'Compras';
lang['G0700'] = 'Bancos y organismos';
lang['G0800'] = 'Gastos varios';

lang['G0101'] = 'Farmacia';
lang['G0102'] = 'Belleza';
lang['G0103'] = 'Óptica y dentista';
lang['G0104'] = 'Médico';
lang['G0105'] = 'Deporte';
lang['G0106'] = 'Estudios';
lang['G0107'] = 'Asociaciones';
lang['G0108'] = 'Solidaridad';
lang['G0198'] = 'Otros salud, saber y deporte';

lang['G0201'] = 'Alquiler y compra';
lang['G0202'] = 'Comunidad';
lang['G0203'] = 'Servicio doméstico';
lang['G0204'] = 'Mantenimiento hogar';
lang['G0205'] = 'Mantenimiento vehículo';
lang['G0206'] = 'Compra vehículo';
lang['G0298'] = 'Otros vivienda';

lang['G0301'] = 'Seguro auto';
lang['G0302'] = 'Seguro moto';
lang['G0303'] = 'Seguro hogar';
lang['G0304'] = 'Seguro salud';
lang['G0305'] = 'Seguro vida';
lang['G0306'] = 'Seguro viaje';
lang['G0307'] = 'Seguro mascotas';
lang['G0398'] = 'Otros seguros';

lang['G0401'] = 'Internet';
lang['G0402'] = 'Móvil';
lang['G0403'] = 'Electricidad';
lang['G0404'] = 'Gas';
lang['G0405'] = 'Agua';
lang['G0406'] = 'Alarmas y seguridad';
lang['G0407'] = 'Televisión';
lang['G0408'] = 'Servicios y productos online';
lang['G0498'] = 'Otros servicios';

lang['G0501'] = 'Restaurante';
lang['G0502'] = 'Hotel';
lang['G0503'] = 'Transportes';
lang['G0504'] = 'Alquiler vehículos';
lang['G0505'] = 'Espectáculos';
lang['G0506'] = 'Gasolina';
lang['G0507'] = 'Parking y peaje';
lang['G0508'] = 'Lotería';
lang['G0598'] = 'Otros ocio';

lang['G0601'] = 'Hogar';
lang['G0602'] = 'Electrónica';
lang['G0603'] = 'Supermercado';
lang['G0604'] = 'Ropa';
lang['G0605'] = 'Material deportivo';
lang['G0606'] = 'Librería';
lang['G0607'] = 'Niños y mascotas';
lang['G0608'] = 'Regalos';
lang['G0698'] = 'Otras compras';

lang['G0701'] = 'Hipoteca';
lang['G0702'] = 'Préstamos';
lang['G0703'] = 'Cargos bancarios';
lang['G0704'] = 'Impuestos';
lang['G0705'] = 'Ayuntamiento';
lang['G0706'] = 'Seguridad Social';
lang['G0707'] = 'Multas y licencias';
lang['G0708'] = 'Asesores y abogados';
lang['G0798'] = 'Otros organismos';

lang['G0801'] = 'Efectivo';
lang['G0802'] = 'Pensión familiar';
lang['G0897'] = 'Transferencias';
lang['G0898'] = 'Otros gastos';

lang['I0100'] = 'Ingresos';

lang['I0101'] = 'Nómina';
lang['I0102'] = 'Rentas alquiler';
lang['I0103'] = 'Pensión';
lang['I0104'] = 'Devolución impuestos';
lang['I0105'] = 'Rendimientos';
lang['I0106'] = 'Subvenciones y ayudas';
lang['I0107'] = 'Regalos recibidos';
lang['I0108'] = 'Ingreso efectivo';
lang['I0197'] = 'Transferencias';
lang['I0198'] = 'Otros ingresos';
