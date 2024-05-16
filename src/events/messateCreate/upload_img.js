import { updateImg } from '@/models/ImgUpdate.js'
import { check_state } from '@/core/connect_state';

export const uploadImg = async(message, repliedMessage) => {
    if ( !message.content.startsWith('$') ) return false;
    if(repliedMessage.attachments.first() != null){
        const img_name = message.content.slice(1);
        const img_url = repliedMessage.attachments.first().url;
        if (repliedMessage) {

            try{
                // message.reply(`上傳圖片名稱<${img_name}>, ${img_url}`);
                message.reply(`上傳圖片名稱<${img_name}>`);
                check_state();
                const newImg = new updateImg({
                    userId: message.author.id,
                    guildId: message.guild.id,
                    Imgname: img_name,
                    url: img_url,
                });
                await newImg.save().catch((err) => {
                    console.log(`Error saving updated: ${err}`);
                    return;
                })

            } catch(err){
                console.log(`Error update image: ${err}`);
            }

        }
    }
    else{
        message.reply('不符合上傳圖片的格式');
    }
    return true;
}