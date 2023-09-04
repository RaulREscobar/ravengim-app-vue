<template>
    <v-container>
        <v-card title="Mis pagos">
            <v-table fixed-header height="300px">
                <thead>
                    <tr>
                        <th class="text-left">
                            Mes
                        </th>
                        <th class="text-left">
                            Monto
                        </th>
                        <th class="text-left">
                            Estado
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="pay in payments" :key="pay.id">
                        <td>{{ pay.month }}</td>
                        <td>{{ pay.amount }}</td>
                        <td>{{ pay.status > 0 ? "Pago" : "Impago" }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>
    </v-container>
</template>
<script setup>
const payments = [
    {
        id: 1,
        month: "Enero",
        amount: 2365,
        status: 1,
    },
    {
        id: 2,
        month: "Febrero",
        amount: 2365,
        status: 1,
    },
    {
        id: 3,
        month: "Marzo",
        amount: 2365,
        status: 1,
    },
    {
        id: 4,
        month: "Abril",
        amount: 2365,
        status: 1,
    },
    {
        id: 5,
        month: "Junio",
        amount: 2365,
        status: 0,
    }
]
</script>