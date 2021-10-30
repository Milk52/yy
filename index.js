const {Client, Intents} = require('discord.js');
const dotenv = require('dotenv')

dotenv.config();

const client = new Client(
    {
        intents:[
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
        ]
    }
);

client.on('ready', ()=>{
    console.log('your bot is ready')
})

client.on('messageCreate', msg=>{
    if (msg.content == 'boom'){
        msg.reply('Anti Message Please Delete Message!')
    }
})

client.on('messageCreate', msg=>{
    if (msg.content == 'หิวโว้ยย'){
        msg.reply('what da dog doing')
    }
})

client.on('messageCreate', msg=>{
    if (msg.content == 'หิว'){
        msg.reply('เรียกกูหาพ่องมึงอ่ะควยยย!!!!!!')
    }
})

client.on('messageCreate', msg=>{
    if (msg.content == 'เเล้วเป็นควยไรอะ'){
        msg.reply('พ่องมึงอ่ะไอสัส')
    }
})

client.on('messageCreate', msg=>{
    if (msg.content == 'namo'){
        msg.reply('What')
        msg.reply('want help?')
        msg.reply('ok')
        msg.reply('Soon')
    }
})

client.on('messageCreate', msg=>{
    if (msg.content == 'เเล้วเป็นเหี้ยไรอะ'){
        msg.reply('จายเยงๆค่อยๆควยกานน')
    }
})

client.on('messageCreate', msg=>{
    if (msg.content == 'namo na tood'){
        msg.reply('natood พ่องมึงอ่ะ')
    }
})

client.on('messageCreate', msg=>{
    if (msg.content == 'หี'){
        msg.reply('อยากดูหีของเธอ...')
    }
})

client.on('messageCreate', msg=>{
    if (msg.content == '!ตารางสอน'){
        msg.reply('https://cdn.discordapp.com/attachments/876996544883220572/882451259867689020/1630463153864.jpg')
        msg.reply('Have A Good Day!')
        msg.reply('Bye!')
    }
})

client.on('messageCreate', msg=>{
    if (msg.content == 'hello'){
        msg.reply('hi sir!')
    }
})

client.login(process.env.TOKEN)