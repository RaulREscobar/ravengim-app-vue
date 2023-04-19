<template>
    <h1>Users</h1>
    <ul>
        <li><router-link :to="{name: 'user', params:{id: 1}}">USer1</router-link></li>
        <li><router-link :to="{name: 'user', params:{id: 2}}">USer2</router-link></li>
        <li><router-link :to="{name: 'user', params:{id: 3}}">USer3</router-link></li>
        <li><router-link :to="{name: 'user', params:{id: 4}}">USer4</router-link></li>
    </ul>
</template>