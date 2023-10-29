<template>
  <div>
    <h2 class="font-bold text-lg">{{ text }}</h2>
  </div>
</template>
<script setup>
const props = defineProps({
  text: String
})

</script>