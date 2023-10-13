<template>
  <div>
    <div
      class="fixed top-0 left-0 w-full z-40 bg-primaryDarker dark:bg-secondaryDarker dark:text-primaryDarker text-tertiary border-b-2 border-secondaryLighter dark:border-secondary">
      <div
        class="flex flex-row justify-between w-full px-8 py-2 border-b border-primaryDarker dark:border-tertiaryDarker items-center xs:p-6">
        <NuxtLink to="/" class="flex flex-row font-bold py-2 tracking-tight items-center gap-2">
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center text-secondary dark:text-secondaryLighter border-2 border-secondary dark:border-secondaryLighter">
            <span class="text-xl font-bold">N</span>
          </div>
          <div class="flex flex-col text-tertiary dark:text-primary">
            <div class="tracking-wide">Nibros Ari Wibowo</div>
            <div class="whitespace-nowrap -mt-1 font-light tracking-widest dark:text-primaryDarker">Front-end
              Developer
            </div>
          </div>
        </NuxtLink>
        <div v-auto-animate class="flex flex-row gap-4 items-center text-secondaryLighter dark:text-primaryDarker">
          <NuxtLink to="/"
            :class="{ '!underline text-secondary dark:text-secondaryLighter decoration-4 underline-offse8 decoration-secondary dark:decoration-secondaryDarker': homePath.includes(route.path) }"
            class="font-bold dark:hover:text-secondaryLighter hover:text-secondary decoration-secondary dark:decoration-secondaryLighter cursor-pointer hover:underline hover:decoration-4 underline-offset-8 transition-all ease-in-out">
            Home
          </NuxtLink>
          <NuxtLink to="/contacts"
            :class="{ '!underline text-secondary dark:text-secondaryLighter decoration-4 underline-offse8 decoration-secondary dark:decoration-secondaryDarker': contactsPath.includes(route.path) }"
            class="font-bold dark:hover:text-secondaryLighter hover:text-secondary decoration-secondary dark:decoration-secondaryLighter cursor-pointer hover:underline hover:decoration-4 underline-offset-8 transition-all ease-in-out">
            Contact
          </NuxtLink>
          <NuxtLink to="/projects"
            :class="{ '!underline text-secondary dark:text-secondaryLighter decoration-4 underline-offse8 decoration-secondary dark:decoration-secondaryDarker': projectsPath.includes(route.path) }"
            class="font-bold dark:hover:text-secondaryLighter hover:text-secondary decoration-secondary dark:decoration-secondaryLighter cursor-pointer hover:underline hover:decoration-4 underline-offset-8 transition-all ease-in-out">
            Projects
          </NuxtLink>
          <div :class="{ 'dark:bg-tertiaryDarker': isSettingsOpen }"
            class="flex items-center rounded-full hover:bg-primaryDarkest dark:hover:bg-tertiaryDarker p-2 cursor-pointer transition ease-in-out duration-200"
            @click="openSettingsDropdown">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48">
              <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4">
                <path
                  d="M18.284 43.171a19.995 19.995 0 0 1-8.696-5.304a6 6 0 0 0-5.182-9.838A20.09 20.09 0 0 1 4 24c0-2.09.32-4.106.916-6H5a6 6 0 0 0 5.385-8.65a19.968 19.968 0 0 1 8.267-4.627A6 6 0 0 0 24 8a6 6 0 0 0 5.348-3.277a19.968 19.968 0 0 1 8.267 4.627A6 6 0 0 0 43.084 18A19.99 19.99 0 0 1 44 24c0 1.38-.14 2.728-.406 4.03a6 6 0 0 0-5.182 9.838a19.995 19.995 0 0 1-8.696 5.303a6.003 6.003 0 0 0-11.432 0Z" />
                <path d="M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z" />
              </g>
            </svg>
          </div>
          <div v-if="isSettingsOpen"
            class="block absolute right-0 top-12 py-4 px-4 bg-primary dark:bg-tertiary dark:border-tertiaryDarker divide-y divide-primaryDarker rounded-lg border-2 border-primaryDarkest w-56 transition ease-in-out duration-200 text-tertiary dark:text-primary">
            <div class="flex flex-col">
              <div class="font-bold my-2">Settings</div>

              <div class="relative flex w-full items-center py-2">
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
      class="flex flex-col bg-primaryDarker font-black dark:bg-tertiaryDarker mt-12 px-12 py-8 md:px-10 sm:px-6 w-full min-h-screen"
      @click="toggleCloseDropdown">
      <slot />
    </div>
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
]
</script>