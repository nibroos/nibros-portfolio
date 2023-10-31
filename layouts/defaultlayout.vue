<template>
  <div>
    <div
      class="fixed top-0 sm:bottom-0 sm:top-auto left-0 w-full z-40 bg-primaryDarker dark:bg-secondaryDarker dark:text-primaryDarker text-secondaryLighter border-b-2 sm:border-b-0 sm:border-t-2 border-secondaryLighter">
      <div
        class="flex flex-row justify-between sm:justify-evenly w-full px-8 py-4 sm:py-2 border-b border-primaryDarker dark:border-tertiaryDarker items-center xs:px-6">
        <NuxtLink to="/" :class="{ 'text-secondary': homePath.includes(route.path) }"
          class="flex flex-row font-bold tracking-tight items-center gap-2 sm:flex-col sm:justify-center sm:w-1/3 sm:gap-0">
          <div
            :class="{ '!text-secondary dark:!text-primary !border-secondary dark:!border-primary': homePath.includes(route.path) }"
            class="w-10 h-10 rounded-full flex items-center justify-center border-2 text-secondaryLighter dark:text-secondaryLighter border-secondaryLighter sm:w-7 sm:h-7">
            <span class="text-xl font-bold">N</span>
          </div>
          <div class="flex flex-col text-tertiary dark:text-primary sm:hidden">
            <div class="tracking-wide">Nibros Ari Wibowo</div>
            <div class="whitespace-nowrap -mt-1 font-light tracking-widest dark:text-primaryDarker">Front-end
              Developer
            </div>
          </div>
          <div :class="{ 'text-secondary dark:!text-primary': homePath.includes(route.path) }"
            class="sm:flex sm:text-xs flex-col justify-center items-center hidden dark:text-secondaryLighter">
            <div>Home</div>
            <div :class="{ '!inline-block': homePath.includes(route.path) }"
              class="hidden border-b-4 rounded-lg border-secondary dark:border-primary w-4 h-1"></div>
          </div>
        </NuxtLink>

        <NuxtLink to="/projects" :class="{ 'text-secondary dark:!text-primary': projectsPath.includes(route.path) }"
          class="font-bold dark:text-secondaryLighter dark:hover:text-secondaryLighter hover:text-secondary cursor-pointer transition-all ease-in-out hidden sm:flex sm:w-1/3 sm:justify-center sm:flex-col sm:items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                <path fill="currentColor"
                  d="M3 4a2 2 0 0 1 2-2h2c.364 0 .706.097 1 .268A1.99 1.99 0 0 1 9 2h2c.727 0 1.364.388 1.714.969c.21-.168.456-.296.732-.37l1.932-.517a2 2 0 0 1 2.45 1.414l4.14 15.455a2 2 0 0 1-1.414 2.45l-1.932.517a2 2 0 0 1-2.45-1.414L13 8.663V20a2 2 0 0 1-2 2H9a1.99 1.99 0 0 1-1-.268A1.99 1.99 0 0 1 7 22H5a2 2 0 0 1-2-2V4Zm2 0h2v16H5V4Zm6 16H9V4h2v16Zm2.963-15.469l1.932-.517l4.142 15.455l-1.932.517l-4.142-15.455Z" />
              </g>
            </svg>
          </div>
          <div :class="{ 'text-secondary dark:text-primary': projectsPath.includes(route.path) }"
            class="flex flex-col justify-center items-center sm:text-xs">
            <div>Projects</div>
            <div :class="{ '!inline-block': projectsPath.includes(route.path) }"
              class="hidden border-b-4 rounded-lg border-secondary dark:border-primary w-4 h-1"></div>
          </div>
        </NuxtLink>
        <a href="https://docs.nibross.com" target="_blank"
          class="font-bold dark:text-secondaryLighter dark:hover:text-secondaryLighter hover:text-secondary cursor-pointer transition-all ease-in-out hidden sm:flex sm:w-1/3 sm:justify-center sm:flex-col sm:items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20">
              <path fill="currentColor"
                d="M17.226 0C18.206 0 19 .814 19 1.818v16.364C19 19.186 18.206 20 17.226 20H4.542c-.98 0-1.774-.814-1.774-1.818l-.001-1.686H1.665a.674.674 0 0 1-.665-.68c0-.377.298-.682.665-.682h1.102v-2.419H1.665A.674.674 0 0 1 1 12.033c0-.377.298-.682.665-.682l1.102-.001V8.919H1.665A.674.674 0 0 1 1 8.239c0-.377.298-.682.665-.682l1.102-.001V5.122H1.665A.674.674 0 0 1 1 4.441c0-.377.298-.682.665-.682l1.102-.001l.001-1.94C2.768.814 3.562 0 4.542 0h12.684Zm-3.248 1.364H4.466a.344.344 0 0 0-.246.118a.428.428 0 0 0-.12.268v2.008h.844a.668.668 0 0 1 .665.683a.674.674 0 0 1-.665.681H4.1v2.431h.873l.045.007l-.074-.004a.65.65 0 0 1 .313.08l.02.011a.53.53 0 0 1 .124.101l-.055-.053a.684.684 0 0 1 .261.509l-.007-.08a.676.676 0 0 1-.596.792l-.03.002l-.016.001H4.1v2.431h.844a.65.65 0 0 1 .308.078c.062.03.111.066.15.111l-.03-.029a.687.687 0 0 1 .216.696l-.009.03a.682.682 0 0 1-.286.378l-.01.005a.644.644 0 0 1-.339.095H4.1v2.419h.873c.008 0 .016.002.023.004l-.052-.004c.367 0 .665.305.665.682c0 .222-.104.42-.265.544l-.013.01a.524.524 0 0 1-.062.04l-.008.004a.628.628 0 0 1-.275.082h-.013l-.015.002h-.014l-.844-.001v1.764c.006.067.03.13.072.19l.048.058c.073.077.163.12.27.13h9.488V1.364Zm3.264-.002h-1.938v17.274h1.974c.091 0 .176-.042.256-.13a.473.473 0 0 0 .134-.267V1.794a.486.486 0 0 0-.134-.298a.415.415 0 0 0-.292-.134Z" />
            </svg>
          </div>
          <div class="flex flex-col justify-center items-center sm:text-xs">
            <div>Docs</div>
            <div class="hidden border-b-4 rounded-lg border-secondary dark:border-primary w-4 h-1"></div>
          </div>
        </a>
        <div v-auto-animate
          class="flex flex-row sm:justify-center gap-4 items-center text-secondaryLighter dark:text-secondaryLighter sm:w-1/3">

          <a href="https://docs.nibross.com" target="_blank"
            class="font-bold dark:hover:text-primary hover:text-secondary decoration-secondary dark:decoration-primary cursor-pointer hover:underline hover:decoration-4 underline-offset-8 transition-all ease-in-out sm:hidden">Docs</a>
          <NuxtLink to="/projects"
            :class="{ '!underline text-secondary dark:text-primary decoration-4 underline-offse8 decoration-secondary dark:decoration-primary': projectsPath.includes(route.path) }"
            class="font-bold dark:hover:text-primary hover:text-secondary decoration-secondary dark:decoration-primary cursor-pointer hover:underline hover:decoration-4 underline-offset-8 transition-all ease-in-out sm:hidden">
            Projects
          </NuxtLink>
          <div @click="openSettingsDropdown" class="sm:w-full flex justify-center">
            <div :class="{ 'dark:bg-tertiaryDarker': isSettingsOpen }"
              class="flex items-center rounded-full hover:bg-primaryDarkest dark:hover:bg-tertiaryDarker p-2 cursor-pointer transition ease-in-out duration-200 sm:w-max">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48">
                <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4">
                  <path
                    d="M18.284 43.171a19.995 19.995 0 0 1-8.696-5.304a6 6 0 0 0-5.182-9.838A20.09 20.09 0 0 1 4 24c0-2.09.32-4.106.916-6H5a6 6 0 0 0 5.385-8.65a19.968 19.968 0 0 1 8.267-4.627A6 6 0 0 0 24 8a6 6 0 0 0 5.348-3.277a19.968 19.968 0 0 1 8.267 4.627A6 6 0 0 0 43.084 18A19.99 19.99 0 0 1 44 24c0 1.38-.14 2.728-.406 4.03a6 6 0 0 0-5.182 9.838a19.995 19.995 0 0 1-8.696 5.303a6.003 6.003 0 0 0-11.432 0Z" />
                  <path d="M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z" />
                </g>
              </svg>
            </div>
          </div>
          <div v-if="isSettingsOpen"
            class="block absolute right-2 top-16 sm:-top-36 py-4 px-4 bg-primary dark:bg-tertiary divide-y divide-primaryDarker rounded-lg border-2 border-secondaryLighter dark:border-secondaryLighter w-56 transition ease-in-out duration-200 text-tertiary dark:text-primary">
            <div class="flex flex-col gap-2">
              <div class="font-bold">Settings</div>

              <div class="relative flex w-full items-center">
                <div class="flex-grow border-t border-secondary dark:border-tertiaryDarkest"></div>
              </div>

              <div @click="toggleTheme"
                class="mt-2 group cursor-pointer flex flex-row rounded-lg p-1.5 text-tertiary dark:text-primary bg-primaryDarker hover:bg-primaryDarkest dark:bg-tertiary dark:hover:bg-tertiaryDarker text-sm transition ease-in-out duration-200">
                <div
                  class="flex flex-row w-1/2 mr-1 justify-center items-center py-1 px-3 bg-primary group-hover:bg-primaryDarkest border-none group-hover:dark:bg-secondaryDarker dark:bg-tertiary border border-brown-300 dark:border-tertiary rounded-lg transition ease-in-out duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                    <rect x="0" y="0" width="256" height="256" fill="none" stroke="none" />
                    <path fill="currentColor"
                      d="M128 56a72 72 0 1 0 72 72a72.1 72.1 0 0 0-72-72Zm0 120a48 48 0 1 1 48-48a48 48 0 0 1-48 48ZM116 28V12a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0Zm74.2 37.8a12 12 0 0 1 0-17l11.3-11.3a12 12 0 0 1 17 17l-11.3 11.3a12 12 0 0 1-8.5 3.5a12.2 12.2 0 0 1-8.5-3.5ZM256 128a12 12 0 0 1-12 12h-16a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12Zm-37.5 73.5a12 12 0 0 1 0 17a11.6 11.6 0 0 1-8.5 3.5a12 12 0 0 1-8.5-3.5l-11.3-11.3a12 12 0 0 1 17-17ZM140 228v16a12 12 0 0 1-24 0v-16a12 12 0 0 1 24 0Zm-74.2-37.8a12 12 0 0 1 0 17l-11.3 11.3A12 12 0 0 1 46 222a11.6 11.6 0 0 1-8.5-3.5a12 12 0 0 1 0-17l11.3-11.3a12 12 0 0 1 17 0ZM28 140H12a12 12 0 0 1 0-24h16a12 12 0 0 1 0 24Zm9.5-85.5a12 12 0 0 1 17-17l11.3 11.3a12 12 0 0 1 0 17a12.2 12.2 0 0 1-8.5 3.5a12 12 0 0 1-8.5-3.5Z" />
                  </svg>
                  <span class="ml-2">
                    Light
                  </span>
                </div>
                <div
                  class="flex flex-row w-1/2 ml-1 justify-center items-center py-1 px-3 rounded-lg bg-primaryDarker group-hover:bg-secondaryLighter group-hover:dark:bg-tertiaryDarker dark:bg-tertiaryDarker transition ease-in-out duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                    <rect x="0" y="0" width="256" height="256" fill="none" stroke="none" />
                    <path fill="currentColor"
                      d="M228.1 149.1a12 12 0 0 0-11.6-8.5a11.4 11.4 0 0 0-3.3.6a80 80 0 0 1-98.3-98.4a13.5 13.5 0 0 0 .4-2.8a12 12 0 0 0-7.5-11.8a12.6 12.6 0 0 0-7.9-.4A104 104 0 1 0 228.2 156a12.5 12.5 0 0 0-.1-6.9ZM128 208A80 80 0 0 1 88.1 58.6a104.2 104.2 0 0 0 109.3 109.3A80.4 80.4 0 0 1 128 208Z" />
                  </svg>
                  <span class="ml-2">
                    Dark
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col bg-primaryDarker font-black dark:bg-tertiaryDarker mt-12 sm:mt-0 px-12 md:px-10 sm:px-6 pt-8 w-full min-h-screen"
      @click="toggleCloseDropdown">
      <slot />
    </div>

    <LazyFooterComponent />
  </div>
</template>

<script setup>

const route = useRoute()
const { toggleTheme } = useTheme()
const isDropdownOpen = ref(0);
const isSettingsOpen = ref(false);
const isMasterOpen = ref(false);

switch (isDropdownOpen) {
  case 0:
    isDropdownOpen = 0;
    break;
  case 1:
    isDropdownOpen = 1;
    break;
  case 2:
    isDropdownOpen = 2;
}


const toggleCloseDropdown = () => {
  isDropdownOpen.value = 0
  isSettingsOpen.value = false
  isMasterOpen.value = false
};

const openSettingsDropdown = () => {
  isMasterOpen.value = false
  isSettingsOpen.value = !isSettingsOpen.value
}


const homePath = [
  '/',
]

const contactsPath = [
  '/contacts',
]

const projectsPath = [
  '/projects',
  '/projects/espbu',
]
</script>