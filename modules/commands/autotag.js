module.exports.config = {
    name: "autotag",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "VanHung & Dựa trên demo của NTKhang",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "autotag @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
    let name = await Users.getNameUser(mention);
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu tag!");
setTimeout(() => {a({body: "Alo con lợn" + " " + name, mentions: arraytag})} , 3000);
setTimeout(() => {a({body: "Có người cần gặp nè" + " " + name, mentions: arraytag})} , 4000);
setTimeout(() => {a({body: "Ra đây mau" + " " + name, mentions: arraytag})} , 5000);
setTimeout(() => {a({body: "Hiện hồn mau" + " " + name, mentions: arraytag})} , 6000);
setTimeout(() => {a({body: "Mày đâu rồi" + " " + name, mentions: arraytag})} , 6500);
setTimeout(() => {a({body: "Alo alo 1234" + " " + name, mentions: arraytag})} , 7000);
setTimeout(() => {a({body: "Vào nhóm có người kiếm kìa" + " " + name, mentions: arraytag})} , 7500);
setTimeout(() => {a({body: "Dỗi" + " " + name, mentions: arraytag})} , 8000);
 }