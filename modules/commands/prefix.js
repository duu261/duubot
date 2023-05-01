module.exports.config = {
    name: "prefix",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "HTHB",
    description: "",
    commandCategory: "Admin",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    },
    envConfig: {
		autoUnsend: true,
		unsendMessageAfter: 20
	}
    
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "prefix.gif")) request("https://media.giphy.com/media/XGsZ3PA1uGBChCnxWW/giphy.gif").pipe(fs.createWriteStream(dirMaterial + "prefix.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `Hello con vợ ${name} dùng !help để hiển thị tất cả các lệnh của Bot nhé`,
                attachment: fs.createReadStream(__dirname + `/noprefix/Prefix.gif`)
            }
    if (event.body.toLowerCase() == "!"){
        return api.sendMessage(msg,event.threadID,event.messageID.unsendMessageAfter * 3000);}
    if (event.body.toLowerCase() == "bot"){
        return api.sendMessage(msg,event.threadID,event.messageID.unsendMessageAfter * 3000);}
    if (event.body.toLowerCase() == "Bot"){
        return api.sendMessage(msg,event.threadID,event.messageID.unsendMessageAfter * 3000);}
    if (event.body.toLowerCase() == "prefix"){
        return api.sendMessage(msg,event.threadID,event.messageID.unsendMessageAfter * 3000);}
    if (event.body.toLowerCase() == "Prefix"){
        return api.sendMessage(msg,event.threadID,event.messageID.unsendMessageAfter * 3000);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID.unsendMessageAfter * 3000)
    }