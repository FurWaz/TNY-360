import { getCustomBlocks as colorBlocks } from './blocks/color';
import { getCustomBlocks as motorBlocks } from './blocks/motor';

function getCustomBlocks() {
    return []
    .concat(colorBlocks() as any)
    .concat(motorBlocks() as any);
}

export { getCustomBlocks };