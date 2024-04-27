import {defineStore} from 'pinia';

export const useAppStore = defineStore('app', {
    state: () => ({
        guild_ids: null,
        client: null,
        commandsActionMap: null,
    }),
    getters: {},
    actions: {}
})