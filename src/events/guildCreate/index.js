//guildCreate 當機器人加入新伺服器時觸發的事件
import {Events} from 'discord.js';
import { loadCommands } from '@/core/loader';
import { useAppStore } from '@/store/app';

export const event = {
    name: Events.GuildCreate,
    once: false,
}

export const action = async(c) => {
    console.log(`加入至新的伺服器`);
    loadCommands(c.id);
}