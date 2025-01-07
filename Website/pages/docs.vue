<template>
    <div class="flex grow h-full w-full justify-center items-center">
        <div class="h-fit w-fit space-y-8">
            <img src="/icon.png" alt="icon" class="w-20 h-20 m-auto" />
            <h2>Redirecting to docs...</h2>
        </div>
    </div>
</template>

<script lang="ts" setup>
// little hack : reload to request the new page from the server (not nuxt website but material docs website)
if (import.meta.client) {
    window.location.href = window.location.href;
}
</script>