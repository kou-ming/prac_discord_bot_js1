import {Events} from 'discord.js';
import { useAppStore } from '@/store/app';

export const event = {
    name: Events.ClientReady,
    once: true
}

export const action = (c) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
    const appStore = useAppStore();
    appStore.guild_ids = console.log(c.guilds.cache.firstKey(100));
}