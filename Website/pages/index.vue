<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();

useSeoMeta({
    title: `${t('home.title')} | ${t('home.subtitle')}`,
    description: t('home.description'),
    ogImage: 'https://tny360.projects.furwaz.com/icon.png',
    ogUrl: 'https://tny360.projects.furwaz.com',
    ogType: 'website',
    keywords: 'home, page, website, robot, furwaz',
});
</script>

<template>
    <div class="min-h-screen w-full">
        <div class="flex flex-col space-y-2 justify-center items-center w-full py-64">
            <h1 class="text-7xl font-main"> {{ $t('home.title') }} </h1>
            <p class="text-xl"> {{ $t('home.subtitle') }} </p>
        </div>
        <div>
            <!-- contenu -->
        </div>
    </div>
</template>
