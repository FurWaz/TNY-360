<template>
    <div class="z-50 flex flex-col sticky top-0 w-full h-fit p-2 pb-1 bg-slate-50 dark:bg-slate-700 border-b-4 border-slate-400 dark:border-slate-900 shadow-lg">
        <div class="relative flex w-full h-fit justify-between pr-1">
            <div class="flex w-12 justify-center items-center">
                <UIcon name="i-heroicons-code-bracket" class="w-8 h-8" />
            </div>
            <div class="flex w-fit h-full items-center justify-center my-auto">
                <p class="font-main">TNY - EDITOR</p>
            </div>
            <div class="w-12">
                <UButton variant="ghost" color="gray" size="xl" icon="i-heroicons-bars-3" @click="toggleOptions" />
            </div>
            <div v-show="showOptions" id="options" class="show-down absolute bottom-0 right-0 w-0 h-0">
                <div class="absolute w-fit h-fit min-w-[15em] right-0 top-4 p-2 bg-slate-50 dark:bg-slate-700 border border-b-4 border-slate-400 dark:border-slate-900 rounded-lg shadow-xl space-y-2">
                    <UButton v-for="button in buttons" :key="button.key" @click="() => { button.callback(); showOptions = false; }" variant="ghost" color="gray" size="lg" class="w-full" :icon="button.icon">
                        {{ button.label }}
                    </UButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import * as Blockly from 'blockly';

const buttons = [
    {
        key: 'save',
        icon: 'i-heroicons-arrow-down-tray',
        callback: () => {
            const workspace = Blockly.getMainWorkspace();
            const content = Blockly.serialization.workspaces.save(workspace);
            const blocks = content.blocks.blocks;
            const json = JSON.stringify(blocks);
            const blob = new Blob([json], {type: 'application/json'});
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a') as HTMLAnchorElement;
            link.style.display = 'none';
            link.href = url;
            link.download = 'My project.tnyblk';
            document.body.appendChild(link);
            link.click();
        },
        label: 'Save'
    },
    {
        key: 'load',
        icon: 'i-heroicons-folder-open',
        callback: () => {
            // select file
            const select = document.createElement('input');
            select.type = 'file';
            select.accept = '.tnyblk';
            select.onchange = (event: any) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = (event) => {
                    const json = event.target?.result;
                    const workspace = Blockly.getMainWorkspace();
                    const blocks = JSON.parse(json as string);
                    Blockly.serialization.workspaces.load({blocks: {blocks: blocks, languageVersion: 0}}, workspace);
                };
                reader.readAsText(file);
            };
            select.click();
        },
        label: 'Load'
    },
    {
        key: 'new',
        icon: 'i-heroicons-document-plus',
        callback: () => {
            window.location.reload();
        },
        label: 'New'
    }
];

const showOptions = ref(false);
function toggleOptions() {
    showOptions.value = !showOptions.value;
}

</script>

<style>

</style>