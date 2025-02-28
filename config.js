//                    :¨·.·¨: - 🐆🥽💕
//                     `·.. ⋆-  𝐇𝐞𝐲𝐲 𝐢𝐭'𝐬 me Robin ⚡️!
//                    ╭ → ❝ Multi Device Whatsapp Bot ❞ 
//                    ┊🛍💞𝓨𝗼𝘂'𝗿𝗲 𝗽𝗲𝗿𝗳𝗲𝗰𝘁! 
//                    ✰ Give me a star ! 
//                    ✩ + _𝘀𝗺𝗶𝗹𝗲 all time
//                    ╰ → 🥽🐆🏄‍♀️⚡️🤭




//                    ˚∧＿∧  　+        —̳͟͞͞💗
//                    (  •‿• )つ  —̳͟͞͞ 💗         —̳͟͞͞💗 +
//                    (つ　 <                —̳͟͞͞💗
//                    ｜　 _つ      +  —̳͟͞͞💗         —̳͟͞͞💗 ˚
//                    `し´


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "G7YwFa7D#xA9rHOXUyBmKjlkSczEvxQ3Z3pFGIpOOgy1uLcsqGs8",
MONGODB: process.env.MONGODB || "Remove this and add your MongoDB public URL here",
OWNER_NUM: process.env.OWNER_NUM || "94704101989", // Remove this number and add your number with country code
};
