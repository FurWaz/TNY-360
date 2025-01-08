<template>
    <div class="bg-slate-700 border-2 rounded-lg p-4 md:p-8 space-y-16" :class="highlight ? 'border-primary' : 'border-slate-600'">
        <div class="flex flex-col md:flex-row space-x-4 items-center justify-center">
            <UIcon :name="icon" class="text-primary w-10 h-10" />
            <h2 class="text-center text-3xl"> {{ title }} </h2>
        </div>
        <div class="flex flex-col space-y-4">
            <p class="text-lg text-center"> {{ description1 }} </p>
            <p class="text-lg text-center"> {{ description2 }} </p>
        </div>
        <div class="flex justify-center">
            <UButton variant="solid" size="xl" disabled> {{ button }} </UButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    title: string;
    description1: string;
    description2: string;
    button: string;
    icon: string;
    highlight?: boolean;
}>();
</script>

<style></style>