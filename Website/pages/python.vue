<template>
    <div class="h-fit min-h-full w-full">
        <HeaderBar />
        Page en construction
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();

useSeoMeta({
    title: `${t('python.name')} | ${t('python.subtitle')}`,
    description: t('python.description'),
    ogImage: 'https://tny360.projects.furwaz.com/icon.png',
    ogUrl: 'https://tny360.projects.furwaz.com/python',
    ogType: 'website',
    keywords: 'python, page, website, robot, furwaz, tny, 360, code, programming',
});
</script>
