import {SlashCommandBuilder} from 'discord.js';

//實例化command，這個指令是用來做加法，有兩個輸入框可以輸入數字
export const command = new SlashCommandBuilder()
  .setName('add')
  .setDescription('計算a + b')
  .addNumberOption(option => option.setName('a').setDescription('第一個數字').setRequired(true))
  .addNumberOption(option => option.setName('b').setDescription('第二個數字').setRequired(true));

//接收參數ctx(可以自己換名字)，並執行指令
export const action = async (ctx) => {
    const num1 = ctx.options.get('a').value;
    const num2 = ctx.options.get('b').value;
    // console.log(num1, num2);
    const result = num1 + num2;
    ctx.reply(`結果為${result}`);
}