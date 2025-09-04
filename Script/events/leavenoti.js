module.exports.config = {
  name: "leave",
  eventType: ["log:unsubscribe"],
  version: "1.0.0",
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "Thông báo bot hoặc người rời khỏi nhóm",
  dependencies: {
    "fs-extra": "",
    "path": ""
  }
};

module.exports.run = async function({ api, event, Users, Threads }) {
  if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;

  const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { join } = global.nodemodule["path"];
  const { threadID } = event;

  const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
  const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);

  const type = (event.author == event.logMessageData.leftParticipantFbId)
    ? "__-তোর সাহস কম না গ্রুপের এডমিনের পারমিশন ছাড়া তুই লিভ নিস-!!😾🔪 \n𝐌𝐀𝐒𝐇𝐈𝐊 ☢️_𖣘 -𝐌𝐀𝐇𝐈𝐑 ⚠️"
    : "__-তোর এই গ্রুপে থাকার কোনো যোগ্যাতা নেই পাগল ছাগল-!!😡\nতাই তোকে লাথি মেরে গ্রুপ থেকে বের করে দেওয়া হলো-!!🤣🤪 WELLCOME REMOVE🤧\n𝐌𝐀𝐒𝐇𝐈𝐊 ☢️_𖣘 -𝐌𝐀𝐇𝐈𝐑 ⚠️";

  const path = join(__dirname, "Shahadat", "leaveGif");
  const gifPath = join(path, `leave1.gif`);

  if (!existsSync(path)) mkdirSync(path, { recursive: true });

  let msg = (typeof data.customLeave == "undefined")
    ? "ইস {name} {type} "
    : data.customLeave;

  msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

  const formPush = existsSync(gifPath)
    ? { body: msg, attachment: createReadStream(gifPath) }
    : { body: msg };

  return api.sendMessage(formPush, threadID);
};
