import {Events} from 'discord.js';
import { useAppStore } from '@/store/app';
import { loadCommands } from '@/core/loader';

export const event = {
    name: Events.GuildAvailable,
    once: false,
}

export const action = async(c) => {
    const appStore = useAppStore();
    appStore.guild_ids.push(c.id);
	loadCommands(c.id);
    console.log(`連接至伺服器${c.id}`);
}