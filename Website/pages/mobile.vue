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
    title: `${t('mobile.name')} | ${t('mobile.subtitle')}`,
    description: t('mobile.description'),
    ogImage: 'https://tny360.projects.furwaz.com/icon.png',
    ogUrl: 'https://tny360.projects.furwaz.com/mobile',
    ogType: 'website',
    keywords: 'mobile, app, page, website, robot, furwaz, companion, tny, 360',
});
</script>
