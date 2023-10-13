<template>
  <div>

    <Head>
      <Title>{{ runtimeConfig.public.APP_NAME }}
      </Title>
      <Meta name="description" content="Dashboard" />
    </Head>

    <div class="flex flex-col gap-12">
      <LazyHeroSectionComponent />

      <LazyMainProjectSectionComponent />

      <LazySkillsSectionComponent />

      <LazyExperiencesSectionComponent />
      <LazyFooterComponent />
    </div>

  </div>
</template>

<script setup>

const runtimeConfig = useRuntimeConfig();

</script>