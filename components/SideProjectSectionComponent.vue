<template>
  <div class="px-8 lg:px-0 flex flex-col gap-8 text-tertiaryDarker dark:text-primaryDarkest">
    <div class="flex flex-row justify-between">
      <div class="text-2xl font-bold">Side Projects</div>
    </div>

    <div class="grid gap-4 grid-cols-2 lg:grid-cols-1 font-normal">

      <div
        class="flex flex-row sm:flex-col-reverse rounded-lg bg-secondaryLighter bg-opacity-50 border border-secondary dark:border-secondaryLighter p-4 gap-2 sm:gap-4">

        <div class="flex flex-col gap-4 sm:gap-0 w-5/12 sm:w-full text-secondaryDarker dark:text-primary">
          <div class="font-bold">Highlight Features</div>
          <div class="flex flex-col justify-between h-full sm:gap-2">
            <div class="flex flex-col gap-2">
              <ul class="list-disc list-outside pl-4 text-sm sm:hidden">
                <li>Dark Mode</li>
                <li>Responsive Dimension</li>
              </ul>

              <div class="flex-col gap-1 flex sm:hidden">
                <div class="text-sm flex flex-row gap-1">
                  <div class="text-sm sm:hidden">Status: <span class="font-bold">Development</span></div>
                </div>
                <div class="text-sm flex flex-row gap-1">
                  <div>Role:</div>
                  <div class="font-bold">Frontend Dev</div>
                </div>
                <div class="text-sm flex flex-row gap-1">
                  <div>Started:</div>
                  <div class="font-bold">2023-10-01</div>
                </div>
              </div>
            </div>
            <div class="flex-row gap-2 hidden sm:flex">
              <ul class="list-disc list-outside pl-4 text-xs hidden sm:block">
                <li>Mobile responsive</li>
                <li>Dark Mode</li>
              </ul>
            </div>
            <div class="flex-col gap-1 sm:flex hidden">
              <div class="text-sm flex flex-row gap-1">
                <div class="text-sm">Status: <span class="font-bold">Development</span></div>
              </div>
              <div class="text-sm flex flex-row gap-1">
                <div>Role:</div>
                <div class="font-bold">Frontend Dev</div>
              </div>
              <div class="text-sm flex flex-row gap-1">
                <div>Started:</div>
                <div class="font-bold">2023-10-01</div>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex flex-row gap-1">
                <div class="dark:rounded-full dark:bg-tertiaryDarker dark:p-2">
                  <svg width="26" height="26" viewBox="0 0 100 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M56.1008 66.6667H93.2752C94.4558 66.6668 95.6158 66.3588 96.6383 65.7737C97.6608 65.1885 98.5098 64.3468 99.1 63.3332C99.6902 62.3197 100 61.1698 100 59.9997C99.9995 58.8295 99.688 57.68 99.097 56.667L74.1318 13.8098C73.5418 12.7965 72.693 11.955 71.6707 11.3699C70.6483 10.7848 69.4887 10.4768 68.3082 10.4768C67.1277 10.4768 65.968 10.7848 64.9457 11.3699C63.9233 11.955 63.0745 12.7965 62.4843 13.8098L56.1008 24.7755L43.6202 3.33255C43.0295 2.31928 42.1803 1.47788 41.1577 0.892933C40.1352 0.30795 38.9753 0 37.7945 0C36.6138 0 35.454 0.30795 34.4313 0.892933C33.4088 1.4779 32.5595 2.31928 31.969 3.33255L0.902951 56.667C0.311951 57.68 0.000500603 58.8295 6.03104e-07 59.9997C-0.000499397 61.1698 0.309901 62.3197 0.900017 63.3332C1.49013 64.3468 2.33915 65.1885 3.36167 65.7737C4.38418 66.3588 5.54415 66.6668 6.72488 66.6667H30.0598C39.3053 66.6667 46.1235 62.6417 50.8152 54.789L62.2055 35.2383L68.3063 24.7755L86.6163 56.2037H62.2055L56.1008 66.6667ZM29.6793 56.193L13.3946 56.1893L37.8055 14.2874L49.9855 35.2383L41.8305 49.2417C38.7148 54.3367 35.1752 56.193 29.6793 56.193Z"
                      fill="#00DC82" />
                  </svg>
                </div>

                <div class="dark:rounded-full dark:bg-tertiaryDarker dark:p-2">
                  <svg width="26" height="26" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M409.6 36H512L256 477.6L0 36H101.12H195.84L256 138.4L314.88 36H409.6Z" fill="#41B883" />
                    <path d="M0 36L256 477.6L512 36H409.6L256 300.96L101.12 36H0Z" fill="#41B883" />
                    <path d="M101.12 36L256 302.24L409.6 36H314.88L256 138.4L195.84 36H101.12Z" fill="#35495E" />
                  </svg>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-7/12 sm:w-full justify-between gap-4">
          <div class="flex flex-col gap-4">
            <div class="flex flex-row justify-between">
              <div class="font-bold">Portfolio</div>
              <div>
                <NuxtLink
                  class="cursor-pointer text-secondary dark:text-secondaryLighter hover:text-tertiaryDarker dark:hover:text-primaryDarkest transition-all ">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
                      fill="currentColor" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
            <img src="../assets/images/portfolio.png" class="object-cover rounded-lg" alt="E-SPBU Management System">
            <p class="text-sm">
              This is where I showcase my work experience during my career as a developer. Design created within 2
              weeks and implemented from scratch using Nuxt, with a focus on website performance and SEO.
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
</script>