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
    title: `${t('about.name')} | ${t('about.subtitle')}`,
    description: t('about.description'),
    ogImage: 'https://tny360.projects.furwaz.com/icon.png',
    ogUrl: 'https://tny360.projects.furwaz.com/about',
    ogType: 'website',
    keywords: 'about, page, website, robot, furwaz, information, tny, 360',
});
</script>
