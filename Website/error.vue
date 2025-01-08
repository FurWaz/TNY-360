<template>
    <div class="flex flex-col justify-center items-center w-full h-full">
        <div class="flex flex-col w-full h-fit justify-center items-center px-4 py-16 space-y-4">
            <h2 class="text-center text-primary"> {{ $t('error.title') }} </h2>
            <h3 class="text-center"> {{ error.statusCode }} : {{ $t('error.'+error.statusCode) }} </h3>
        </div>
        <div class="flex w-full h-fit justify-center items-center p-8">
            <UButton variant="solid" color="primary" size="lg" to="/">
                {{ $t('error.back') }}
            </UButton>
        </div>
    </div>
</template>

<script setup>
const error = useError();
</script>