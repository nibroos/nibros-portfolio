<template>
  <div>

    <Head>
      <Title>
        Frontend Dev: {{ runtimeConfig.public.APP_NAME }}
      </Title>
      <Meta name="description"
        content="Looking for a frontend developer? Expect top-tier quality in every project. As a frontend developer I optimize web performance and bring your web to achieve the best results. Explore my portfolio and experience web development at its finest." />
    </Head>

    <div class="flex flex-col gap-12">
      <LazyHeroSectionComponent />

      <LazyMainProjectSectionComponent />

      <LazySideProjectSectionComponent />

      <LazySkillsSectionComponent />

      <LazyExperiencesSectionComponent />

    </div>

  </div>
</template>

<script setup>

const runtimeConfig = useRuntimeConfig();

</script>