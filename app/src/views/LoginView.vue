<script setup>
    import { useCounterStore } from '../stores/counter'

    const store = useCounterStore();
</script>

<template>
    <button @click="store.increment">click {{ store.$state.count }}</button>
</template>