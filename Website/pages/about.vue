<template>
    <div class="h-fit min-h-full w-full">
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
    keywords: 'home, page, website, robot, furwaz',
});
</script>
