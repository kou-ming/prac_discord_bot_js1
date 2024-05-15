import { userLevel } from '@/models/Level.js'
import { calculateLevelXp } from '@/func/calculateLevelXp.js';
import { check_state } from '@/core/connect_state';

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
        check_state();


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


