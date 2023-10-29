<template>
  <div
    class="flex flex-col rounded-lg antialiased font-sans selection:bg-tertiary selection:text-primary selection:dark:bg-primary selection:dark:text-tertiary">
    <slot></slot>
  </div>
</template>
<script setup>
const route = useRoute()
</script>