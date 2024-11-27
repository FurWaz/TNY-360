<template>
    <div class="z-50 flex flex-col sticky top-0 w-full h-fit p-2 pb-1 bg-slate-50 dark:bg-slate-700 border-b-4 border-slate-400 dark:border-slate-900 shadow-lg">
        <div class="hidden md:flex w-full h-fit">
            <div class="w-10">
                <img src="/icon.png" alt="icon" class="w-10 h-10 invert dark:invert-0" />
            </div>
            <div class="flex justify-center w-full space-x-8">
                <UButton v-for="btn in buttons" :to="btn.link" variant="ghost" color="gray" size="xl">
                    {{ $t(btn.key) }}
                </UButton>
            </div>
            <div class="w-10"></div>
        </div>
        <div class="flex md:hidden w-full h-fit justify-between pr-1">
            <div class="flex w-fit">
                <img src="/icon.png" alt="icon" class="w-10 h-10 invert dark:invert-0" />
            </div>
            <div class="flex w-fit h-full items-center justify-center my-auto">
                <p class="font-main">TNY - 360</p>
            </div>
            <div class="w-10">
                <UButton variant="ghost" color="gray" size="xl" icon="i-heroicons-bars-3" @click="toggleHeader" />
            </div>
        </div>
        <div id="mobileHeader" class="flex md:hidden w-full h-fit overflow-hidden transition-all" style="max-height: 0px;">
            <div class="flex flex-col w-full h-fit">
                <UButton v-for="btn in buttons" :to="btn.link" variant="ghost" color="gray" size="xl">
                    {{ $t(btn.key) }}
                </UButton>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const buttons = [
    {
        key: 'home.name',
        link: '/'
    },
    {
        key: 'docs.name',
        link: '/docs'
    },
    {
        key: 'order.name',
        link: '/order'
    },
    {
        key: 'about.name',
        link: '/about'
    }
];

function toggleHeader() {
    const header = document.getElementById('mobileHeader')
    if (!header) return;

    if (header.style.maxHeight === '0px') {
        const headerChild = header.firstElementChild;
        const childHeight = headerChild?.getBoundingClientRect().height;
        header.style.maxHeight = `${childHeight}px`;
    } else {
        header.style.maxHeight = '0px';
    }
}

</script>

<style>

</style>