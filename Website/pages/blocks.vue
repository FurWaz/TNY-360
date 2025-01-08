<template>
    <BlocksBar />
    <div class="flex grow h-full w-full">
        <BlocklyPlayground />
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const { t } = useI18n();

useSeoMeta({
    title: `${t('blocks.name')} | ${t('blocks.subtitle')}`,
    description: t('blocks.description'),
    ogImage: 'https://tny360.projects.furwaz.com/icon.png',
    ogUrl: 'https://tny360.projects.furwaz.com/blocks',
    ogType: 'website',
    keywords: 'blocks, page, website, robot, furwaz, tny, 360, blockly, playground, code',
});
</script>

<style></style>