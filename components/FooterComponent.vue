<template>
  <div class="bg-secondaryDarker p-8 sm:mb-12 sticky z-20">
    <div class="flex flex-col gap-4 text-primaryDarkest">
      <div class="grid grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-16 lg:gap-8">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col font-bold">
            <div>Contact</div>
            <div class="flex flex-row gap-4">
              <div>Information</div>
              <div class="relative flex items-center py-2 w-8">
                <div class="flex-grow border-t border-primary"></div>
              </div>
            </div>
          </div>
          <div class="font-normal text-sm">Feel free to reach out to me any time. I prefer to talk over email, especially
            since we
            may be a few time zones away.</div>

          <div class="flex flex-col gap-1 !text-sm">
            <div class="flex flex-row gap-2">
              <div class="font-bold text-tertiaryDarkest">E</div>
              <CopyTextPopupComponent text-to-copy="thankyounibros@gmail.com" />
              <!-- <div class="cursor-pointer hover:underline">thankyounibros@gmail.com</div> -->
            </div>
            <div class="flex flex-row gap-2">
              <div class="font-bold text-tertiaryDarkest">P</div>
              <CopyTextPopupComponent text-to-copy="+62895329221824" />
            </div>
          </div>

        </div>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col font-bold">
            <div>Latest</div>
            <div class="flex flex-row gap-4">
              <div>Projects</div>
              <div class="relative flex items-center py-2 w-8">
                <div class="flex-grow border-t border-primary"></div>
              </div>
            </div>
          </div>
          <div class="font-normal text-sm">
            <ul>
              <li>
                <a href="https://docs.nibross.com/portfolio/getting-started/introduction.html" target="_blank"
                  class="hover:underline cursor-pointer transition-all ease-in-out">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="https://docs.nibross.com/espbu/getting-started/introduction.html" target="_blank"
                  class="hover:underline cursor-pointer transition-all ease-in-out">E-SPBU
                </a>
              </li>
              <li>
                <a href="https://docs.nibross.com/koperasi-multiasa/getting-started/introduction.html" target="_blank"
                  class="hover:underline cursor-pointer transition-all ease-in-out">
                  Koperasi
                  Multiasa</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col font-bold">
            <div>Current</div>
            <div class="flex flex-row gap-4">
              <div>Availability</div>
              <div class="relative flex items-center py-2 w-8">
                <div class="flex-grow border-t border-primary"></div>
              </div>
            </div>
          </div>
          <div class="font-normal text-sm">I usually work on several projects but I’ll be happy to discuss new
            opportunities. Let’s get in touch.</div>
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col font-bold">
            <div>Connect</div>
            <div class="flex flex-row gap-4">
              <div>with me On</div>
              <div class="relative flex items-center py-2 w-8">
                <div class="flex-grow border-t border-primary"></div>
              </div>
            </div>
          </div>
          <div class="font-normal text-sm">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/nibros" target="_blank"
                  class="hover:underline cursor-pointer transition-all ease-in-out">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/nibroos" target="_blank"
                  class="hover:underline cursor-pointer transition-all ease-in-out">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <NuxtLink to="/" class="flex flex-row font-bold py-2 tracking-tight items-center gap-2 w-max">
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center text-secondaryLighter border-2 border-secondaryLighter">
          <span class="text-xl font-bold">N</span>
        </div>
        <div class="flex flex-col text-primary font-light text-xs gap-1">
          <div>@ 2023 Nibros Ari Wibowo</div>
          <div class="whitespace-nowrap -mt-1 dark:text-primaryDarker">Based in
            Indonesia
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
</script>