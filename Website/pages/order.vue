<template>
    <div class="h-fit min-h-full w-full">
        <HeaderBar />
        <div class="flex flex-col w-full h-fit">
            <div class="flex flex-col w-full h-fit justify-center items-center px-4 py-16 space-y-4">
                <h2 class="text-center text-primary"> {{ t('order.title') }} </h2>
                <h3 class="text-center"> {{ t('order.subtitle') }} </h3>
            </div>
            <div class="flex flex-wrap md:p-8 justify-evenly items-center">
                <OrderCard class="max-w-[30em] m-4"
                    :title="t('order.ready.title')" highlight
                    :description1="t('order.ready.description1')"
                    :description2="t('order.ready.description2')"
                    :button="t('order.ready.button')"
                    icon="i-heroicons-sparkles" />
                <OrderCard class="max-w-[30em] m-4"
                    :title="t('order.assemble.title')"
                    :description1="t('order.assemble.description1')"
                    :description2="t('order.assemble.description2')"
                    :button="t('order.assemble.button')"
                    icon="i-heroicons-puzzle-piece" />
            </div>
            <div class="flex w-full h-fit justify-center items-center p-8">
                <UButton variant="link" color="gray" size="xl" >
                    {{ t('order.spare.name') }}
                </UButton>
            </div>
        </div>
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
    keywords: 'order, page, website, robot, furwaz, tny, 360, buy, purchase',
});
</script>
