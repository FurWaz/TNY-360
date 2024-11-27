<template>
    <div class="h-fit min-h-full w-full">
        Page en construction
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();

useSeoMeta({
    title: `${t('order.name')} | ${t('order.subtitle')}`,
    description: t('order.description'),
    ogImage: 'https://tny360.projects.furwaz.com/icon.png',
    ogUrl: 'https://tny360.projects.furwaz.com/order',
    ogType: 'website',
    keywords: 'home, page, website, robot, furwaz',
});
</script>
