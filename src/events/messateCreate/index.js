import {Events} from 'discord.js';
import { useAppStore } from '@/store/app';

export const event = {
    name: Events.MessageCreate,
    once: false
}

export const action = async(message) => {
    if (message.author.bot) return; // 避免機器人自己觸發自己

    if (message.reference) {
        const repliedMessage = await message.channel.messages.fetch(message.reference.messageId);
        const img_name = message.content;
        const img_url = repliedMessage.attachments.first().url;
        if (repliedMessage) {
            // message.reply(`上傳圖片名稱<${message.content}>, ${repliedMessage.attachments.first().url}`);
            message.reply(`上傳圖片名稱<${img_name}>, ${img_url}`);
        }
    }
}