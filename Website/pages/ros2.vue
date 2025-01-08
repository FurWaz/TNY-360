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
    title: `${t('ros2.name')} | ${t('ros2.subtitle')}`,
    description: t('ros2.description'),
    ogImage: 'https://tny360.projects.furwaz.com/icon.png',
    ogUrl: 'https://tny360.projects.furwaz.com/ros2',
    ogType: 'website',
    keywords: 'ros, ros2, page, website, robot, furwaz, tny, 360, robotics, operating, system',
});
</script>
