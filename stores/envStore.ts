export const useEnvStore = defineStore('envStore', {
  state: () => ({
    env: {
      app_name: 'Nibros',
      frontend_url: 'http://localhost:3000',
      docs_url: 'https://docs.nibros.tech',
      domain: 'nibros.tech',
    }
  }),
  actions: {
    async getValue() {
      const config = useRuntimeConfig()
      try {

        this.env.app_name = config.public.APP_NAME
        this.env.frontend_url = config.public.FRONTEND_URL
        this.env.docs_url = config.public.DOCS_URL
        this.env.domain = config.public.DOMAIN

      } catch (err) {
        console.log('Failed To Get Detail Value', err)
      }
    },

  },
  persist: [
    // {
    //   paths: [
    //     'queryModal',
    //     'queryModalStored',
    //     'formFilterIndex',
    //     'isActiveTabIndex',
    //     'tabFormIndex'
    //   ],
    //   storage: localStorage
    // }
  ]
})
