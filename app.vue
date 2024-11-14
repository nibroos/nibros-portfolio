<template>
  <div>
    <NuxtLoadingIndicator />

    <Head>
      <Title>Frontend Developer • Nibros Ari Wibowo</Title>
      <Meta name="description"
        content="Looking for a frontend developer? Expect top-tier quality in every project. As a frontend developer I optimize web performance and bring your web to achieve the best results. Explore my portfolio and experience web development at its finest." />
    </Head>

    <div v-if="!layout">
      <StartAppLoadingComponent />

      <Head>
        <Title>Frontend Developer • Nibros Ari Wibowo</Title>
        <Meta name="description"
          content="Looking for a frontend developer? Expect top-tier quality in every project. As a frontend developer I optimize web performance and bring your web to achieve the best results. Explore my portfolio and experience web development at its finest." />
      </Head>

    </div>

    <NuxtLayout v-else :name="layout">
      <ContainerComponent>
        <NuxtPage></NuxtPage>
      </ContainerComponent>
    </NuxtLayout>

  </div>
</template>

<script setup>

import { useEnvStore } from './stores/envStore';

const layout = ref('')

onMounted(async () => {
  await useEnvStore().getValue()
})

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