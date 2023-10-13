<template>
  <div class="px-8 lg:px-0 pt-16 flex flex-col gap-6 text-tertiaryDarker dark:text-primaryDarkest">

    <div class="flex flex-col font-bold gap-2 text-4xl sm:text-2xl sm:gap-1 xs:text-xl">
      <div class="text-tertiaryDarker dark:text-primary">Need Front-end Developer</div>
      <div class="text-secondaryLighter dark:text-secondaryLighter">or Backend Developer ?</div>
    </div>

    <div class="flex flex-col font-light text-lg xs:w-full w-6/12 lg:w-7/12 sm:w-full sm:text-base">
      <p class="text-tertiaryDarker dark:text-primaryDarkest">With <span class="font-bold">almost 2 years</span> of
        development
        experience using
        <span class="font-bold">Laravel</span> and <span class="font-bold">Vue</span>, I believe I can contribute to get
        the best quality of your projects. You're welcome to test
        applications I've worked on in the past, <span class="font-bold">Rate me</span> based on those projects, <span
          class="font-bold">then we can talk!</span>
      </p>
    </div>

    <div class="flex flex-row font-light text-lg w-full gap-3 xs:flex-col xs:gap-0">
      <div class="font-bold xs:hidden">&gt;</div>
      <NuxtLink to="/projects"
        class="font-bold hover:underline hover:decoration-2 hover:underline-offset-8 cursor-pointer hover:decoration-tertiaryDarkest hover:dark:decoration-primary">
        View Projects
      </NuxtLink>
      <div>or</div>
      <div
        class="font-bold hover:underline hover:decoration-2 hover:underline-offset-8 cursor-pointer hover:decoration-tertiaryDarkest hover:dark:decoration-primary">
        Download Resume
      </div>
    </div>

    <div class="flex flex-row gap-2">
      <a href="https://github.com/nibroos" target="_blank"
        class="cursor-pointer transition-all ease-in-out text-secondaryLighter dark:text-secondaryLighter hover:text-tertiary dark:hover:text-primaryDarkest">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
            fill="currentColor" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/nibros" target="_blank"
        class="cursor-pointer transition-all ease-in-out text-secondaryLighter dark:text-secondaryLighter hover:text-tertiary dark:hover:text-primaryDarkest">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 0.47998C5.63761 0.47998 0.480011 5.63758 0.480011 12C0.480011 18.3624 5.63761 23.52 12 23.52C18.3624 23.52 23.52 18.3624 23.52 12C23.52 5.63758 18.3624 0.47998 12 0.47998ZM9.18001 16.7748H6.84721V9.26758H9.18001V16.7748ZM7.99921 8.34598C7.26241 8.34598 6.78601 7.82398 6.78601 7.17838C6.78601 6.51958 7.27681 6.01318 8.02921 6.01318C8.78161 6.01318 9.24241 6.51958 9.25681 7.17838C9.25681 7.82398 8.78161 8.34598 7.99921 8.34598ZM17.7 16.7748H15.3672V12.6144C15.3672 11.646 15.0288 10.9884 14.1852 10.9884C13.5408 10.9884 13.158 11.4336 12.9888 11.862C12.9264 12.0144 12.9108 12.2304 12.9108 12.4452V16.7736H10.5768V11.6616C10.5768 10.7244 10.5468 9.94078 10.5156 9.26638H12.5424L12.6492 10.3092H12.696C13.0032 9.81958 13.7556 9.09718 15.0144 9.09718C16.5492 9.09718 17.7 10.1256 17.7 12.336V16.7748Z"
            fill="currentColor" />
        </svg>
      </a>
    </div>

    <div
      class="flex flex-col text-tertiary dark:text-secondaryLighter font-normal w-full text-center items-center animate-pulse">
      <div>scroll down</div>
      <div>
        <svg width="1" height="48" viewBox="0 0 1 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="48" x2="0.499998" y2="2.18557e-08" stroke="currentColor" />
        </svg>
      </div>
    </div>

  </div>
</template>
<script setup>
</script>