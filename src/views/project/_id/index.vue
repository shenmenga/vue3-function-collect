<template>
  <div class="index">111动态路由</div>
</template>
<script setup lang="ts">
import {useRoute} from 'vue-router'
const route = useRoute()
console.log(111,route);
</script>