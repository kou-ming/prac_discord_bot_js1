import {Events} from 'discord.js';
import {uploadImg} from './upload_img.js'
import { useAppStore } from '@/store/app';

export const event = {
    name: Events.MessageCreate,
    once: false
}

export const action = async(message) => {
    if (!message.inGuild() || message.author.bot) return; // 避免機器人自己觸發自己

    if (message.reference) {
        const repliedMessage = await message.channel.messages.fetch(message.reference.messageId);
        // 判斷是不是真的上傳指令(有沒有$)
        if (uploadImg(message, repliedMessage)){
            return;
        }
    }
    console.log('輸入...');
}