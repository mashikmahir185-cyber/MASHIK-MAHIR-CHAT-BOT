const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
 name: "owner2",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "Shahadat SAHU",
 description: "Display bot owner's information",
 commandCategory: "Info",
 usages: "",
 cooldowns: 5,
 dependencies: {
 request: "",
 "fs-extra": "",
 axios: ""
 }
};

module.exports.run = async function ({ api, event }) {
 const imageUrl = "https://i.imgur.com/p5rHVOP.jpeg";
 const path = __dirname + "/cache/owner.png";

 request(imageUrl)
 .pipe(fs.createWriteStream(path))
 .on("close", () => {
 api.sendMessage({
 body:
`🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟

👑 𝗡𝗮𝗺𝗲: 𝐌𝐀𝐒𝐇𝐈𝐊-𝐌𝐀𝐇𝐈𝐑😘
😻 𝗔𝗱𝗱𝗿𝗲𝘀𝘀: মেয়েদের মনে🙈
💼 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻: মেয়েদের মন জয় করা😍

🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: আইডি বেইচ্চা খাইয়া লাইছি😁
💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿: দিলে Future বউ ধইরা মারব😌
📺 𝗬𝗼𝘂𝗧𝘂𝗯𝗲: কবে YouTubal ছিলাম 😺
📸 𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺: গরিব বলে ফেসবুক চালাই শুধু 🥺
📱 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽: দিলে আমার আম্মু বকা দিবা 🤣
🎵 𝗧𝗶𝗸𝗧𝗼𝗸: সরি আমি প্রতিবন্ধী না🥱
👻 𝗦𝗻𝗮𝗽𝗰𝗵𝗮𝘁: তোদের মতো কালা নাকি ফিল্টার লাগামু🤭

🤖 𝗕𝗢𝗧 𝗕𝗬: ─ 𝐌𝐀𝐒𝐇𝐈𝐊 ☢️ 𝐂𝐇𝐀𝐓_𖣘 -𝐁𝐎𝐓 ⚠️
`,
 attachment: fs.createReadStream(path)
 }, event.threadID, () => fs.unlinkSync(path));
 });
};
