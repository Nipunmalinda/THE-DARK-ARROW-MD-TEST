const {cmd , commands} = require('../command')

cmd({
    pattern: "5",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dec = `*🇦🇱 HELLO ${pushname} THIS IS MY MAIN MENU 🔰*

*──────────[ COMMAND PANNEL ]─────────────────*
*│◈ʙᴏᴛ ɴᴀᴍᴇ - ᴛʜᴇ ᴅᴀʀᴋ ᴀʀʀᴏᴡ ᴍᴅ*
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ -* 124.29MB / 63276MB
*│◈ ʀᴜɴᴛɪᴍᴇ -* 4 hours, 30 minutes, 24 seconds
*│◈ ᴍᴀᴅᴇ ʙʏ ᴛʜᴇ ᴍᴀɪɴ ᴅᴀʀᴋ ᴀʀʀᴏᴡ ᴛᴇᴀᴍ*
*│◈ ᴏᴡɴᴇʀꜱ - ᴏʟᴅ ᴋɪɴɢ ᴀꜱʜ / ᴄʀᴀᴢʏ ᴄʜᴜᴛᴛᴀ / ᴅɪɴᴀ / ᴅʀᴋ ᴠᴀʟᴀ*
*──────────────────────────────────────────*

*🔢 Reply the Number you want to select for menu*

*LIST MENU*
─────────────────────
 _1_   *OWNER*
─────────────────────
 _2_   *CONVERT*
─────────────────────
 _3_   *AI*
─────────────────────
 _4_   *DOWNLOAD*
─────────────────────
 _5_   *MAIN*
─────────────────────
 _6_   *GROUP* 
─────────────────────
 _7_   *ANIME* 
─────────────────────

© MADE BY THE MAIN DARK ARROW TEAM 🇦🇱`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/zJz66YK/5e07fdfeeaa9dfdf.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})