// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from 'discord.js';
import vueInit from '@/core/vue';
import dotenv from 'dotenv';
import { useAppStore } from '@/store/app';

import {loadCommands, loadEvents} from '@/core/loader';


vueInit();
dotenv.config();

const appStore = useAppStore();


// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once(Events.ClientReady, (c) => {
	const guild_ids = (c.guilds.cache.firstKey(100))
	for(const guild_id of guild_ids){
		loadCommands(guild_id);
	}
});

appStore.client = client;
loadEvents();


// client.once(Events.ClientReady, (c) => {
// 	console.log(`Ready! Logged in as ${c.user.tag}`);
// });


// Log in to Discord with your client's token
client.login(process.env.TOKEN);