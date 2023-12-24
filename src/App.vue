

<template>
    <router-link :to="item.path" v-for="item in  routes" :key="item.name">{{ item.meta.title }}</router-link>
    <router-view></router-view>
</template>
<script setup lang="ts">
import {routes} from './router'
</script>
<style scoped>
</style>
