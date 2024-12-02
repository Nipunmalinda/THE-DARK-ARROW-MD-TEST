const {cmd , commands} = require('../command')

cmd({
    pattern: "4",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dec = `*🇦🇱 HELLO ${pushname}  🔰*

*──────────[ COMMAND PANNEL ]─────────────────*
*│◈ʙᴏᴛ ɴᴀᴍᴇ - ᴛʜᴇ ᴅᴀʀᴋ ᴀʀʀᴏᴡ ᴍᴅ*
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ -* 124.29MB / 63276MB
*│◈ ʀᴜɴᴛɪᴍᴇ -* 4 hours, 30 minutes, 24 seconds
*│◈ ᴍᴀᴅᴇ ʙʏ ᴛʜᴇ ᴍᴀɪɴ ᴅᴀʀᴋ ᴀʀʀᴏᴡ ᴛᴇᴀᴍ*
*│◈ ᴏᴡɴᴇʀꜱ - ᴏʟᴅ ᴋɪɴɢ ᴀꜱʜ / ᴄʀᴀᴢʏ ᴄʜᴜᴛᴛᴀ / ᴅɪɴᴀ / ᴅʀᴋ ᴠᴀʟᴀ*
*──────────────────────────────────────────*

────────────────────────────────
DOWNLOAD MENU 🎬
────────────────────────────────
│ .song
│ .play
│ .video
│ .yts
│ .fb / .facebook
│ .tt
│ .tiktok
│ .ig
│ .twdl
│ .twitter
│ .gdrive
│ .apk
│ .mediafire
────────────────────────────────
© ᴍᴀᴅᴇ ʙʏ ᴅᴀʀᴋ ᴀʀʀᴏᴡ ᴛᴇᴀᴍ`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/zJz66YK/5e07fdfeeaa9dfdf.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})