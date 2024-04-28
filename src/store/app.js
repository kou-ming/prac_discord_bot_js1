import {defineStore} from 'pinia';

export const useAppStore = defineStore('app', {
    state: () => ({
        guild_ids: [],
        client: null,
        commandsActionMap: null,
    }),
    getters: {},
    actions: {}
})