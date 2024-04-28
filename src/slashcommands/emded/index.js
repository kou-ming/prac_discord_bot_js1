import {SlashCommandBuilder, EmbedBuilder} from 'discord.js';

//實例化command，這個指令是用來輸出資訊框
export const command = new SlashCommandBuilder()
  .setName('embed_uni')
  .setDescription('輸出資訊框')

//接收參數ctx(可以自己換名字)，並執行指令
export const action = async (ctx) => {
    const embed = new EmbedBuilder()
       .setTitle('資訊框')
       .setDescription('這是一個資訊框')
       .setColor('Random')
       .setImage('https://cdn.discordapp.com/attachments/1233704797715300355/1234060386219724921/KSP.png?ex=662f5bcb&is=662e0a4b&hm=b872a075991de81d69a85c94e8874f67ffc32be3da3dbaeba2d6fca994bc8fb5&')
       .setFields({
            name: '第一個欄位',
            value: '第一個欄位的內容',
            inline: true
        }, {
            name: '第二個欄位',
            value: '第二個欄位的內容',
            inline: true
        });
    
    ctx.reply({embeds: [embed]});
}