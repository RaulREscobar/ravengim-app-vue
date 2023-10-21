import { ref } from 'vue';

export const headers = ref([
    {
        align: 'start',
        key: 'nroSocio',
        sortable: false,
        title: 'Socio Nro',
    },
    { key: `name`, title: 'Nombre' },
    { key: 'alDia', title: 'Al Día?' },
    { key: 'phone', title: 'Tel.' },
    { key: 'rol', title: 'Rol' },
    { key: 'edit', title: "Editar", sortable: false },
    { key: 'pay', title: "Agregar Pago", sortable: false },
]);
