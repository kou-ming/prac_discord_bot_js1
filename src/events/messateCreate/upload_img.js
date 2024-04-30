export const uploadImg = (message, repliedMessage) => {
    if ( !message.content.startsWith('$') ) return false;
    if(repliedMessage.attachments.first() != null){
        const img_name = message.content.slice(1);
        const img_url = repliedMessage.attachments.first().url;
        if (repliedMessage) {
            message.reply(`上傳圖片名稱<${img_name}>, ${img_url}`);
        }
    }
    else{
        message.reply('不符合上傳圖片的格式');
    }
    return true;
}