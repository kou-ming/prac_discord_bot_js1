import { REST, Routes, Collection, ContextMenuCommandBuilder, ApplicationCommandType } from 'discord.js';
import fg, { async } from 'fast-glob';
import {useAppStore} from '@/store/app';



const updateMenuCommands = async(guildid) => {
    const rest = new REST({version: 10}).setToken(process.env.TOKEN);
    const result = await rest.put(
        Routes.applicationGuildCommands(
            process.env.APPLICATION_ID,
            guildid
            // guildid
        ),
        {
            body: commandsData,
        }
    )
}

const updateCommands = async(commands, guildid) => {
    const rest = new REST({version: 10}).setToken(process.env.TOKEN);
    const result = await rest.put(
        Routes.applicationGuildCommands(
            process.env.APPLICATION_ID,
            guildid
            // guildid
        ),
        {
            body: commands,
        }
    )

    // console.log(result);
}


export const loadCommands = async(guildid) => {
    const appStore = useAppStore();

    const commands = [];
    const actions = new Collection();
    const file_path_array =[
        './src/slashcommands/**/index.js',
        './src/menucommands/**/index.js'
    ]
    for (const file_path of file_path_array){
        const files = await fg(file_path);
        for (const file of files){
            const cmd = await import(file);
            commands.push(cmd.command);
            actions.set(cmd.command.name, cmd.action);
        }
    }
    // console.log(commands);
    await updateCommands(commands, guildid);
    // await updateMenuCommands(guildid);
    appStore.commandsActionMap = actions;
    // console.log(appStore.commandsActionMap);
}

export const loadEvents = async() => {
    const appStore = useAppStore();
    const client = appStore.client;
    const files = await fg('./src/events/**/index.js');
    for (const file of files){
        const eventFile = await import(file);

        if(eventFile.event.once){
            client.once(
                eventFile.event.name, 
                eventFile.action
            )
        }
        else{
            client.on(
                eventFile.event.name, 
                eventFile.action
            )
        }

    }
}