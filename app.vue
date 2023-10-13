<template>
  <div>
    <NuxtLoadingIndicator />
    <div v-if="!layout">
      <StartAppLoadingComponent />
    </div>

    <NuxtLayout v-else :name="layout">
      <ContainerComponent>
        <NuxtPage></NuxtPage>
      </ContainerComponent>
    </NuxtLayout>

  </div>
</template>

<script setup>

const layout = ref('')

onMounted(() => {
  layout.value = 'defaultlayout'
})

useHead({
  script: [{
    children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark")
        document.documentElement.style.backgroundColor = "rgb(113, 80, 69)";
    } else {
      document.documentElement.removeAttribute("data-theme")
        document.documentElement.style.backgroundColor = "rgb(245, 242, 235)";
    }`}],
  htmlAttrs: {
    lang: 'en',
  }
})
</script>