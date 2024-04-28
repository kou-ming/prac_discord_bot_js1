import {Events} from 'discord.js';
import { useAppStore } from '@/store/app';

export const event = {
    name: Events.InteractionCreate,
    once: false,
}

export const action = async(interaction) => {
    if( !interaction.isChatInputCommand() && !interaction.isContextMenuCommand()) return;
    const appStore = useAppStore();
    const action = appStore.commandsActionMap.get(interaction.commandName);
    await action(interaction);
}