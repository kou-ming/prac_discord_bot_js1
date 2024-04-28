import {SlashCommandBuilder} from 'discord.js';

//實例化command，這個指令是用來傳圖片
export const command = new SlashCommandBuilder()
  .setName('img_uni')
  .setDescription('傳送圖片')
  .addStringOption(option => option.setName('img').setDescription('圖片名稱').setRequired(true));

//接收參數ctx(可以自己換名字)，並執行指令
export const action = async (ctx) => {

}