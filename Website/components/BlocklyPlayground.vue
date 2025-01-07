<template>
    <div class="relative flex grow">
        <div id="blocklyDiv" class="h-full w-full"></div>
        <div class="absolute bottom-0 right-0 p-4">
            <UButton v-show="!running" @click="runCode" icon="i-heroicons-play" />
            <UButton v-show="running" @click="running = false" icon="i-heroicons-pause" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import * as Blockly from 'blockly';
import libraryBlocks from 'blockly/blocks';
import { javascriptGenerator } from 'blockly/javascript';
import En from '~/assets/scripts/blockly/en';
import Fr from '~/assets/scripts/blockly/fr';
import { getCustomBlocks } from '~/assets/scripts/blockly/blocks';
import { createTheme } from '~/assets/scripts/blockly/theme';
import defaultToolbox from '~/assets/toolbox.json';
import TnyRemote from  '~/assets/scripts/TnyRemote';

// get locale from nuxt
const { locale } = useI18n();

async function loadBlocklyScripts() {
    return new Promise((resolve, reject) => {
        const scripts = [
            'blockly_compressed.js',
            'blocks_compressed.js',
            'msg/en.js',
            'msg/fr.js'
        ];
        
        let loaded = 0;
        const loadNextScript = () => {
            if (loaded < scripts.length) {
                const script = scripts[loaded];
                const scriptElement = document.createElement('script');
                scriptElement.src = `./blockly/${script}`;
                scriptElement.onload = () => {
                    loaded++;
                    loadNextScript();
                };
                scriptElement.onerror = (error) => {
                    reject(error);
                };
                document.body.appendChild(scriptElement);
            } else {
                resolve(true);
            }
        };
        loadNextScript();
    });
}

function loadBlocklyBlocks(workspace: Blockly.Workspace, blocks: any) {
    Blockly.serialization.workspaces.load({blocks: {blocks: blocks, languageVersion: 0}}, workspace);
}

function saveBlocklyBlocks(workspace: Blockly.Workspace) {
    return Blockly.serialization.workspaces.save(workspace);
}

function spawnDefaultWorkspace(workspace: Blockly.Workspace) {
    // setup event
    Blockly.Blocks['event_setup'] = {
        init: function() {
            this.appendDummyInput().appendField(Blockly.Msg['TNY_SETUP_TITLE']);
            this.appendStatementInput("insts").setCheck(null);
            this.setTooltip("");
            this.setHelpUrl("");
            this.setMovable(true);
            this.setStyle("event_blocks");
        }
    };
    javascriptGenerator.forBlock['event_setup'] = function(block: Blockly.Block) {
        const insts = javascriptGenerator.statementToCode(block, 'insts');
        return `window.blockly_setup = async () => {\n${insts}\n}\n`;
    };

    // loop event
    Blockly.Blocks['event_loop'] = {
        init: function() {
            this.appendDummyInput().appendField(Blockly.Msg['TNY_LOOP_TITLE']);
            this.appendStatementInput("insts").setCheck(null);
            this.setTooltip("");
            this.setHelpUrl("");
            this.setMovable(true);
            this.setStyle("event_blocks");
        }
    };
    javascriptGenerator.forBlock['event_loop'] = function(block: Blockly.Block) {
        const insts = javascriptGenerator.statementToCode(block, 'insts');
        return `window.blockly_loop = async () => {\n${insts}\n}\n`;
    };

    loadBlocklyBlocks(workspace, [{
        type: 'event_setup',
        deletable: false,
        x: 60,
        y: 60
    }, {
        type: 'event_loop',
        deletable: false,
        x: 540,
        y: 60
    }]);
}

let compileCode: () => void;
async function initBlockly() {
    const locales = {
        en: En,
        fr: Fr
    };
    
    if (locale.value in locales) {
        Blockly.setLocale((locales as any)[locale.value]);
    } else {
        Blockly.setLocale(locales.en as any);
    }

    const toolbox = {
        kind: "categoryToolbox",
        contents: defaultToolbox.map((categ) => ({
            ...categ,
            name: Blockly.Msg[`TNY_CTG_${categ.id?.toUpperCase()}`]
        }))
    };

    getCustomBlocks().forEach((block: any) => {
        if (Blockly.Blocks[block.block.type]) {
            console.error("Le bloc "+block.type+" existe déjà");
            return;
        }

        Blockly.defineBlocksWithJsonArray([block.block]);
        javascriptGenerator.forBlock[block.block.type] = block.js;

        const categIndex = toolbox.contents.findIndex(categ => categ.id === block.category);
        if (categIndex < 0) {
            console.error("Impossible de trouver la catégorie "+block.category+" dans la toolbox")
            return;
        }
        const categ = toolbox.contents[categIndex] as any;
        categ.contents.push({
            kind: "block",
            type: block.block.type
        });
    });

    const workspace = Blockly.inject(
        'blocklyDiv',
        {
            toolbox: toolbox,
            theme: 'tny',
            renderer: 'zelos',
            grid: {
                spacing: 40,
                length: 4,
                colour: '#8888',
                snap: true
            },
            move: {
                scrollbars: true,
                drag: true,
                wheel: false
            },
            zoom: {
                controls: false,
                wheel: true,
                startScale: 0.8,
                pinch: false
            },
            trashcan: false,
            sounds: false
        }
    );

    // add setup() and loop() endpoints
    spawnDefaultWorkspace(workspace);

    // hide flyout scrollbar
    const div = document.getElementById('blocklyDiv');
    if (!div) {
        console.error('blocklyDiv not found');
        return;
    }
    div.querySelectorAll(".blocklyFlyoutScrollbar").forEach((e: any) => {
        e.style.display = "none";
    });

    function highlightBlock(id: string) {
        workspace.highlightBlock(id);
    }
    function unhighlightBlock(id: string) {
        workspace.highlightBlock(null);
    }

    // define run button
    compileCode = () => {
        javascriptGenerator.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
        javascriptGenerator.STATEMENT_SUFFIX = 'unhighlightBlock(%1);\n';
        javascriptGenerator.addReservedWords('highlightBlock');
        const code = javascriptGenerator.workspaceToCode(workspace);
        
        try { eval(code); }
        catch (e) { console.error('Error running code', e); }
    }
}

const running = ref(false);
async function runCode() {
    compileCode();
    await (window as any).blockly_setup?.();

    function loop() {
        if (running.value) {
            (window as any).blockly_loop?.().then(() => {
                setTimeout(loop, 10);
            });
        }
    }
    running.value = true;
    loop();
}

if (import.meta.client) {
    // install scripts by adding them to the document
    loadBlocklyScripts().then((res) => {
        createTheme();
        initBlockly();
        TnyRemote.getInstance();
    }).catch((error) => {
        console.error(error);
    });
}

</script>

<style></style>