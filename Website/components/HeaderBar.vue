<template>
    <div class="z-50 flex flex-col sticky top-0 w-full h-fit p-2 pb-1 bg-slate-50 dark:bg-slate-700 border-b-4 border-slate-400 dark:border-slate-900 shadow-lg">
        <div class="hidden md:flex w-full h-fit">
            <div class="w-10">
                <img src="/icon.png" alt="icon" class="w-10 h-10 invert dark:invert-0" />
            </div>
            <div class="flex justify-center w-full space-x-8">
                <div v-for="btn in buttons" :key="btn.key">
                    <UButton v-if="btn.link" :to="btn.link" variant="ghost" color="gray" size="xl">
                        {{ $t(btn.key) }}
                    </UButton>
                    <div v-if="btn.elements" class="relative">
                        <UButton variant="ghost" color="gray" size="xl" @click="btn.show.value = !btn.show.value" icon="i-heroicons-chevron-down">
                            {{ $t(btn.key) }}
                        </UButton>
                        <div v-show="btn.show.value" class="flex justify-center absolute w-full h-0">
                            <div class="flex flex-col p-2 absolute top-1 min-w-full w-fit h-fit bg-slate-50 dark:bg-slate-700 rounded-b-lg border-b-4 border-slate-400 dark:border-slate-900">
                                <UButton v-for="el in btn.elements" :to="el.link" variant="ghost" color="gray" size="xl">
                                    <span class="whitespace-nowrap">{{ $t(el.key) }}</span>
                                </UButton>
                            </div>
                        </div>
                    </div>
                </div>
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
                <div v-for="btn in buttons" :key="btn.key">
                    <UButton v-if="btn.link" :to="btn.link" variant="ghost" color="gray" size="xl">
                        {{ $t(btn.key) }}
                    </UButton>
                    <div v-if="btn.elements">
                        <UButton variant="ghost" color="gray" size="xl" @click="() => { btn.show.value = !btn.show.value; after(openMobileHeader, 0); }" :icon="`i-heroicons-chevron-${btn.show.value? 'down': 'right'}`">
                            {{ $t(btn.key) }}
                        </UButton>
                        <div v-show="btn.show.value" class="flex flex-col p-2 pl-4 min-w-full w-fit h-fit">
                            <UButton v-for="el in btn.elements" :to="el.link" variant="ghost" color="gray" size="xl">
                                <span class="whitespace-nowrap">{{ $t(el.key) }}</span>
                            </UButton>
                        </div>
                    </div>
                </div>
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
        link: '/docs/'
    },
    {
        key: 'home.integrations',
        show: ref(false),
        elements: [
            {
                key: 'mobile.name',
                link: '/mobile'
            },
            {
                key: 'blocks.name',
                link: '/blocks'
            },
            {
                key: 'python.name',
                link: '/python'
            },
            {
                key: 'ros2.name',
                link: '/ros2'
            },
            {
                key: 'esp32.name',
                link: '/esp32'
            },
        ]
    },
    {
        key: 'order.name',
        link: '/order'
    },
    {
        key: 'about.name',
        link: '/about'
    },
];

function openMobileHeader() {
    const header = document.getElementById('mobileHeader')
    if (!header) return;

    const headerChild = header.firstElementChild;
    const childHeight = headerChild?.getBoundingClientRect().height;
    header.style.maxHeight = `${childHeight}px`;
}

function after(cb: any, time: number) {
    setTimeout(cb, time);
}

function toggleHeader() {
    const header = document.getElementById('mobileHeader')
    if (!header) return;

    if (header.style.maxHeight === '0px') {
        openMobileHeader();
    } else {
        header.style.maxHeight = '0px';
    }
}

</script>

<style>

</style>