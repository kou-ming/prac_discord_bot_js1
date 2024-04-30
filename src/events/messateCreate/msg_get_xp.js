import { userLevel } from '@/models/Level.js'
import { calculateLevelXp } from '@/func/calculateLevelXp.js';
const mongoose = require('mongoose');

function getRandomXp(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const msg_get_xp = async (message) => {
    const xpToGive = getRandomXp(5, 15);
    
    const query = {
        userId: message.author.id,
        guildId: message.guild.id,
    };

    try{
        // 確認連線狀態
        const connectionState = mongoose.connection.readyState;

        switch (connectionState) {
            case 0:
                console.log('未連接');
                break;
            case 1:
                console.log('正在連接');
                break;
            case 2:
                console.log('已連接');
                break;
            case 3:
                console.log('斷開連接');
                break;
            default:
                console.log('未知狀態');
        }


        const level = await userLevel.findOne(query);
        // console.log(level);

        if(level){
            level.xp += xpToGive;

            if(level.xp >= calculateLevelXp(level.level)){
                // console.log(`${level.xp} and ${calculateLevelXp(level.level)}`);
                level.level += 1;
                level.xp = 0;
                message.channel.send(`${message.member} you havee leveled up to **level ${level.level}**.`);
            }


            await level.save().catch((err) => {
                console.log(`Error saving updated: ${err}`);
                return;
            })
        }

        else{
            const newlevel = new userLevel({
                userId: message.author.id,
                guildId: message.guild.id,
                xp: xpToGive,
            });

            await newlevel.save();
        }

    } catch(err){
        console.log(`Error giving xp: ${err}`);
    }

}


