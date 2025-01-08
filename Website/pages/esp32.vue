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
    title: `${t('esp32.name')} | ${t('esp32.subtitle')}`,
    description: t('esp32.description'),
    ogImage: 'https://tny360.projects.furwaz.com/icon.png',
    ogUrl: 'https://tny360.projects.furwaz.com/esp32',
    ogType: 'website',
    keywords: 'esp, arduino, esp32, page, website, robot, furwaz, tny, 360, iot, internet, things, electronics',
});
</script>
