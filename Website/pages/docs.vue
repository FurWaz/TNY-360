<template>
    <div>
        Redirecting to docs...
    </div>
</template>

<script lang="ts" setup>
// little hack : reload to request the new page from the server (not nuxt website but material docs website)
if (import.meta.client) {
    window.location.href = window.location.href;
}
</script>