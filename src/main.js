// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from 'discord.js';
import vueInit from '@/core/vue';
import dotenv from 'dotenv';
import { useAppStore } from '@/store/app';
import {loadCommands, loadEvents} from '@/core/loader';


vueInit();
dotenv.config();

const appStore = useAppStore();

// 新增客戶端的實體
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
    ] 
});

appStore.client = client;

// 載入事件，在ready事件載入指令
loadEvents();


client.login(process.env.TOKEN);