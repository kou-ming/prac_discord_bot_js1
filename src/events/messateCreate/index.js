import {Events} from 'discord.js';
import {uploadImg} from './upload_img.js'
import { msg_get_xp } from './msg_get_xp.js';
import { useAppStore } from '@/store/app';

const cooldowns = new Set();

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
    if( !cooldowns.has(message.author.id)){
        console.log(`用戶${message.author.username}獲得經驗值`);
        msg_get_xp(message);

        cooldowns.add(message.author.id);
        setTimeout(() => {
            cooldowns.delete(message.author.id);
        }, 60000);
        
    }
}