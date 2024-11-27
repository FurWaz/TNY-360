<template>
    <div class="h-fit min-h-full w-full">
        Page en construction
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();

useSeoMeta({
    title: `${t('docs.name')} | ${t('docs.subtitle')}`,
    description: t('docs.description'),
    ogImage: 'https://tny360.projects.furwaz.com/icon.png',
    ogUrl: 'https://tny360.projects.furwaz.com/docs',
    ogType: 'website',
    keywords: 'home, page, website, robot, furwaz',
});
</script>
