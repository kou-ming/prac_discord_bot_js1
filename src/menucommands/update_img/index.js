import {ContextMenuCommandBuilder, ApplicationCommandType} from 'discord.js';

//實例化command，這個指令是用來傳圖片
export const command = new ContextMenuCommandBuilder()
    .setName('上傳圖片')
    .setType(ApplicationCommandType.Message)
    // .addOption(option => option.setName('img').setDescription('圖片名稱').setRequired(true));

//接收參數ctx(可以自己換名字)，並執行指令
export const action = async (ctx) => {
    // const targetmsg = ctx.targetMessage
    // console.log(ctx.targetMessage)
    // console.log(ctx.targetMessage.url)
    // console.log(ctx.targetMessage)
    // console.log(ctx.targetMessage.attachments.get())   
    // console.log(ctx.targetMessage.content)
    // console.log(ctx.id)
    // console.log(ctx.member)
    if(ctx.targetMessage.attachments.first() != null){
        const img_url = ctx.targetMessage.attachments.first().url
        console.log(img_url)
        ctx.reply(`圖片url: ${img_url}`);
    }
    else{
        ctx.reply('不符合上傳圖片')
    }

}