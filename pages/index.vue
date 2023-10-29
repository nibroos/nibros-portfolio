<template>
  <div>

    <Head>
      <Title>
        Frontend Dev: {{ runtimeConfig.public.APP_NAME }}
      </Title>
      <Meta name="description"
        content="Looking for a frontend developer? Expect top-tier quality in every project. As a frontend developer I optimize web performance and bring your web to achieve the best results. Explore my portfolio and experience web development at its finest." />
    </Head>

    <div class="flex flex-col gap-12 pb-12">
      <LazyHeroSectionComponent />

      <div
        class="flex flex-col text-tertiary dark:text-secondaryLighter font-normal w-full text-center items-center animate-pulse">
        <div>scroll down</div>
        <div>
          <svg width="1" height="48" viewBox="0 0 1 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="48" x2="0.499998" y2="2.18557e-08" stroke="currentColor" />
          </svg>
        </div>
      </div>

      <div class="px-8 lg:px-0">
        <LazyMainProjectSectionComponent />
      </div>

      <div class="px-8 lg:px-0">
        <LazySideProjectSectionComponent />
      </div>

      <LazySkillsSectionComponent />

      <LazyExperiencesSectionComponent />

    </div>

  </div>
</template>

<script setup>

const runtimeConfig = useRuntimeConfig();

</script>