<template>
  <div>

    <Head>
      <Title>
        Koperasi: {{ runtimeConfig.public.APP_NAME }}
      </Title>
      <Meta name="description"
        content="Need a developer? I can offer you a Laravel web apps, Vue.js interfaces, and Nuxt-powered solutions in my portfolio. Explore my projects, including some management apps, and see tech and creativity in action." />
    </Head>

    <div class="flex flex-col gap-12">
      <div class="flex flex-row text-tertiaryDarker dark:text-primaryDarkest">
        <div
          class="flex flex-col w-9/12 md:w-full gap-8 border-r border-secondaryLighter pt-10 h-screen overflow-y-auto md:h-max md:overflow-y-hidden md:border-none font-normal">
          <section id="titleESPBU" class="flex flex-col justify-between">
            <h1 class="text-4xl font-bold text-center font-serif">E-SPBU Management</h1>
            <!-- <a href="#authESPBU" class="text-2xl font-bold">Users</a> -->
            <nuxt-img src="/portfolio.png" format="webp" />
          </section>

          <section id="usersDemoESPBU">
            <SectionTitleComponent text="Users Demo" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quas aspernatur placeat, velit, eos in
              cupiditate est incidunt at sed ipsam rem! Quae, ipsam?</p>
          </section>

          <section id="authESPBU">
            <SectionTitleComponent text="Authentication & Authorization" />
          </section>

          <section id="mastersESPBU">
            <SectionTitleComponent text="Masters" />
          </section>

          <section id="shiftManagementESPBU">
            <SectionTitleComponent text="Shift Management" />
          </section>

          <section id="reportsumESPBU">
            <SectionTitleComponent text="Report Summary" />
          </section>

          <section id="filtersavingESPBU">
            <SectionTitleComponent text="State filter-saving" />
          </section>

          <section id="stockopnameESPBU">
            <SectionTitleComponent text="Stock Opname" />
          </section>

          <section id="validationESPBU">
            <SectionTitleComponent text="Report Validations & Verifications" />
          </section>

          <section id="exportpdfESPBU">
            <SectionTitleComponent text="Export PDF & Excel" />
          </section>

          <section id="timelinesESPBU">
            <SectionTitleComponent text="Timelines" />
          </section>

          <section id="logactivitiesESPBU">
            <SectionTitleComponent text="Log Activities" />
          </section>

        </div>
        <!-- <div
          class="fixed top-0 sm:bottom-0 sm:top-auto left-0 w-full z-40 bg-primaryDarker dark:bg-secondaryDarker dark:text-primaryDarker text-secondaryLighter border-b-2 sm:border-b-0 sm:border-t-2 border-secondaryLighter">
          <div class="flex flex-col">
            <div>Problems</div>
          </div>
        </div> -->
        <div class="flex-none w-3/12 pr-4 sticky top-0 overflow-y-auto pt-10 pb-4 pl-4 h-screen font-normal md:hidden">
          <div class="">Table of contents.</div>
          <ul class="list-disc list-outside pl-4 gap-2">
            <li><a href="#usersDemoESPBU">Users Demo</a></li>
            <li><a href="#authESPBU">Authentication &
                Authorization</a></li>
            <li><a href="#mastersESPBU">Masters</a></li>
            <li><a href="#shiftManagementESPBU">Shift Management</a></li>
            <li><a href="#reportsumESPBU">Report Summary</a></li>
            <li><a href="#filtersavingESPBU">State filter-saving</a></li>
            <li><a href="#stockopnameESPBU">Stock Opname</a></li>
            <li><a href="#validationESPBU">Report Validations & Verifications</a></li>
            <li><a href="#exportpdfESPBU">Export PDF & Excel</a></li>
            <li><a href="#timelinesESPBU">Timelines</a></li>
            <li><a href="#logactivitiesESPBU">Log Activities</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();
const imagetest = [{
  src: 'http://espbu.undip.id/images/1695715835-H8FZbY1iECeDgMzpyBetY884ek0bqNyG.png'
}]
</script>