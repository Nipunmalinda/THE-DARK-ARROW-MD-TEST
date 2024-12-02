const {cmd , commands} = require('../command')

cmd({

    pattern: "3",

    desc: "menu the bot",

    category: "menu",

    react: "📜",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{

le dec = `*🫶👀 HELLO BOZA*

*╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」*

*│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 -* 123.81MB / 63276MB

*│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 -* 40 minutes, 6 seconds

*╰──────────●●►*

*DARK ARROW MD IS HERE*🤖

╔════════════◊

🙊 *📑ALL COMMANDS📑*╚════════════◊

╔════════════◊

🙊 *🔓DOWNLOAD COMMANDS🔓*

║

║ 🙊 _.song_

║ 🙊 _.play_

║ 🙊 _.yta_

║ 🙊 _.video_

║ 🙊 _.fb_

║ 🙊 _.facebook_

║ 🙊 _.tt_

║ 🙊 _.tiktok_

║ 🙊 _.ig_

║ 🙊 _.twdl_

║ 🙊 _.twitter_

║ 🙊 _.gdrive_

║ 🙊 _.apk_

║ 🙊 _.mediafire_

╚════════════◊

╔════════════◊

❖ *🔎SEARCH COMMANDS🔍*

║

║ 🙊 _.yts_

║ 🙊 _.img_

║ 🙊 _.pinterest_

╚════════════◊

╔════════════◊

🙊 *🦹ANIME  COMMANDS🦹*

║

║ 🙊 _.loli_

║ 🙊 _.waifu_

║ 🙊 _.neko_

║ 🙊 _.megumin_

║ 🙊 _.maid_

║ 🙊 _.awoo_

╚════════════◊

╔════════════◊

🙊 *💥CONVERTED COMMANDS💥*

║

║ 🙊 _.sticker_

║ 🙊 _.tts_

╚════════════◊

╔════════════◊

🙊 *🧸AI COMMANDS🧸*

║

║ 🙊 _.ai_

║ 🙊 _.cgpt_

╚════════════◊

╔════════════◊

🙊 *⛺MAIN COMMANDS⛺*

║

║ 🙊 _.restart_

║ 🙊 _.owner_

║ 🙊 _.ping_

║ 🙊 _.system_

║ 🙊 _.src_

╚════════════◊

╔════════════◊

🙊 *👨‍💻NEW & TESTING COMMANDS👨‍💻*

║

║ 🙊 _.githubstalk_

║ 🙊 _.gpass_

║ 🙊 _.hack_

║ 🙊 _.dog_

║ 🙊 _.joke_

║ 🙊 _.fact_

║ 🙊 _.animegirl_

║ 🙊 _.define_

║ 🙊 _.sh_

╚════════════◊

╔════════════◊

🙊 *🫂GROUP COMMANDS🫂*

║

║ 🙊 _.promote_

║ 🙊 _.demote_

║ 🙊 _.remove_

║ 🙊 _.kick_

║ 🙊 _.setwelcome_

║ 🙊 _.setgoodbye_

║ 🙊 _.getpic_

╚════════════◊

╔════════════◊

🙊 *👤OWNER COMMANDS👤️*

║

║ 🙊 _.block_

║ 🙊 _.unblock_

║ 🙊 _.jid_

║ 🙊 _.gjid_

║ 🙊 _.clearchats_

║ 🙊 _.restart_

╚════════════◊

*MY WHATSAPP CHANNEL 👇*

🌟.https://whatsapp.com/channel/0029Vay0BqOCXC3EwTtXuF2F

*MY YOUTUBE CHANNEL SUBSCRIBE 👇*

🌟.https://youtube.com/@thedarkarrowteam?si=5b1YJl62ysuVcL5C

> *©ᴄʀᴇᴀᴛᴇᴅ  ʙʏ ᴅᴀʀᴋ ᴀʀʀᴏᴡ ᴛᴇᴀᴍ*`

await conn.sendMessage(from,{image:{url: `https://i.ibb.co/zJz66YK/5e07fdfeeaa9dfdf.jpg`},caption:dec},{quoted:mek});

}catch(e){

console.log(e)

reply(`${e}`)

}

})