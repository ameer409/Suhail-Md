const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918281308889";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""SUHAIL_05_21_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgODIsXG4gICAgICAgIDMzLFxuICAgICAgICA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3LFxuICAgICAgICA1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA2MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDgyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc3LFxuICAgICAgICAzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDkwLFxuICAgICAgICA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDU0LFxuICAgICAgICA0MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1LFxuICAgICAgICA1NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY2LFxuICAgICAgICA4MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcyLFxuICAgICAgICA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3OSxcbiAgICAgICAgNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInVJV1RsbzNEdTBwQTE4WGI3WEdYT3dUVjlqd3hRL1lpUTVCSTJOWmlzamc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBBeG5yN3JlUVNPelBrWENxeERTVndcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTQyZWEzNGEtOWRkNS00MTMxLWIzNTMtZmFlNmQyYzQyYmNiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOCxcbiAgICAgIDI0NSxcbiAgICAgIDEyOSxcbiAgICAgIDIxNSxcbiAgICAgIDIyLFxuICAgICAgNTEsXG4gICAgICAyNixcbiAgICAgIDUsXG4gICAgICAxNDQsXG4gICAgICAxNyxcbiAgICAgIDM1LFxuICAgICAgNjIsXG4gICAgICAxNDgsXG4gICAgICA0NCxcbiAgICAgIDEzMCxcbiAgICAgIDc3LFxuICAgICAgMTc1LFxuICAgICAgMTg5LFxuICAgICAgMTU1LFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNCxcbiAgICAgIDQ4LFxuICAgICAgMjMyLFxuICAgICAgMjA3LFxuICAgICAgMTI0LFxuICAgICAgMTQ2LFxuICAgICAgOTMsXG4gICAgICAxNjAsXG4gICAgICAxNixcbiAgICAgIDcsXG4gICAgICAyMDMsXG4gICAgICAxOTcsXG4gICAgICAxMjQsXG4gICAgICA5MSxcbiAgICAgIDQyLFxuICAgICAgMTMsXG4gICAgICAyMTgsXG4gICAgICAxNTEsXG4gICAgICAxNjAsXG4gICAgICAyMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRTU3WTExQlNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODI4MTMwODg4OTo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODQyNDU3ODM1NDgxMDA6NDNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3lRbnNzREVPR3FsN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1SlVHbGJLeFVYNW91a2FCb1U5SytubGM4M2RoNWpXUlZiVkRLMnBYeDNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtNUDdNWkU2N0QxUmFwaHQ4dk1qb0FkZVFzUGpPc1ZUYjZIY1djcTZFUVdGVjZqQ29PZ2NldUFMUE4vNkFBb0JPRnlCc1ZBbXJGSDVqVUhTd0xkWEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitmYjAzQ0pCWGR1ZHFUU2oxdWVweGlvdEdDYkc1SkxGZURYLzUrU2dmOC80eS9DQUxjTHlQMEpGN0JoaEZRc3kwSnh0WCt6OTlYdkt4UmFPQVhDQUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODI4MTMwODg4OTo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTQ0MTAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUDM1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQMzUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDN1FWdkNEZ1ZVcDE2Wi9UN0pIbW03MGVydFk0V0ZxVWV5bXVHN0NpdlJFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk2MzA4NjQ0MyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMDk2MTkzNTQ5XCJ9Igp9  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
