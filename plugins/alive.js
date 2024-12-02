const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let des = `*HELLO ${pushname}*
*╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」*
*│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 -* 123.81MB / 63276MB
*│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 -* 40 minutes, 6 seconds
*╰──────────●●►*
║✧ *ᴏᴡɴᴇʀ :* ᴅɪɴɪꜱᴜʀᴜ
ᴋɪɴɢ ᴀꜱʜ
ᴄʜᴜᴛᴛᴀ

╚════════════════◊

*💥👨‍💻 arrow ape  Wada Thama Ithin 👨‍💻💥*
◊
◊
╔════════════════◊
║ _*WHATSAPP GROUP*_
║ https://chat.whatsapp.com/E1jrDVskd8k2NqJvfQ0Iqt
╚════════════════◊
   𝙮𝙤𝙪𝙩𝙪𝙗𝙚 𝙘𝙝𝙖𝙣𝙣𝙚𝙡

https://youtube.com/@thedarkarrowteam?si=5b1YJl62ysuVcL5C
╔════════════════◊
║ _*WHATSAPP CHANNEL*_
║ https://whatsapp.com/channel/0029Vay0BqOCXC3EwTtXuF2F
╚════════════════◊

> *©ᴄʀᴇᴀᴛᴇᴅ  ʙʏ ᴀʀʀᴏᴡ  ᴛᴇᴀᴍ*
`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/zJz66YK/5e07fdfeeaa9dfdf.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
