import {Events} from 'discord.js';
import { useAppStore } from '@/store/app';
import {loadCommands} from '@/core/loader';

export const event = {
    name: Events.ClientReady,
    once: true
}

export const action = (c) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
}