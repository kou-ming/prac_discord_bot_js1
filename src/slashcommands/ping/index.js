import {SlashCommandBuilder} from 'discord.js';

//實例化command
export const command = new SlashCommandBuilder().setName('ping').setDescription('ping command');

//接收參數ctx(可以自己換名字)，並執行指令
export const action = async (ctx) => {
    ctx.reply('Pong!');
}