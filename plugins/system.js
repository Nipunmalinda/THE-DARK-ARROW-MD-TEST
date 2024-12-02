const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "system",
    desc: "Check bot online or no.",
    category: "main",
    react: "📟",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    let status = `
*────────────────────────────────────────*
_*❇️ DARK ARROW MD SYSTEM INFO ❇️*_
*────────────────────────────────────────*

*────────────────────────────────────────*
❖ *ᴜᴘᴛɪᴍᴇ :* _11 minutes, 44 seconds_
❖ *ʀᴀᴍ ᴜꜱᴀɢᴇ :*  _40.68MB / 63784MB_
❖ *ʜᴏꜱᴛ ɴᴀᴍᴇ :* _38d60a67-747e-4b49-acd5-90755b10d78d_
❖ *ᴏᴡɴᴇʀ :* _ᴏʟᴅ ᴋɪɴɢ ᴀꜱʜ / ᴄʀᴀᴢʏ ᴄʜᴜᴛᴛᴀ / ᴅɪɴᴀ / ᴅʀᴋ ᴠᴀʟᴀ_
*────────────────────────────────────────*

> ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ ᴀʀʀᴏᴡ ᴛᴇᴀᴍ ❗    
`

    return reply(`${status}`)



}catch(e){
    console.log(e)
    reply(`${e}`)
    }
    })


//__________ping______

cmd({
    pattern: "ping",
    desc: "Check bot online or no.",
    category: "main",
    react: "🚀",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*pong...*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `_*📍DARK-ARROW Speed : ${ping}ms*_` }, { quoted: mek })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})


