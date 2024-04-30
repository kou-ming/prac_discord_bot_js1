// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from 'discord.js';
import vueInit from '@/core/vue';
import dotenv from 'dotenv';
import { useAppStore } from '@/store/app';
import {loadCommands, loadEvents} from '@/core/loader';
// import { Mongoose } from 'mongoose';
const mongoose = require('mongoose');

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


// 連接至資料庫
// const mongoose = new Mongoose();
(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI,{});
        console.log('MongoDB連接成功')

        // 載入事件，在ready事件載入指令
        loadEvents();
    
    }catch(err) {
        console.log(`Error: ${err}`)
    }

})();


client.login(process.env.TOKEN);