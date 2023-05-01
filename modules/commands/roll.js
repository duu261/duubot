module.exports.config = {
	name: "roll",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Random một con số bất kì trong một khoảng",
	commandCategory: "other",
	cooldowns: 5
};

module.exports.languages = {
	"vi": {
		"returnResultDefault": "%1 có lẽ là một con số may mắn 🧐",
		"invalidMax": "Khoảng giới hạn số quay không hợp lệ",
		"invalidInput": "Khoảng bắt đầu hoặc khoảng kết thúc không phải là một con số hợp lệ!",
		"returnResult": "%1 có lẽ là một con số may mắn trong khoảng từ %2 đến %3 🧐"
	},

	"en": {
		"returnResultDefault": "%1 is maybe a lucky number :thinking:",
		"invalidMax": "invalid dial limit range",
		"invalidInput": "The started range or the ended range is not an invalid!",
		"returnResult": "%1 is nay e a lucky number in range from %2 to %3 :thinking:"
	}
}

module.exports.run = function ({ event, api, args, getText }) {
    const { threadID, messageID } = event;

    if (args.length == 0) return api.sendMessage(getText("returnResultDefault", Math.floor(Math.random() * 99)), threadID, messageID);
    if (args.length != 2) return api.sendMessage(getText("invalidMax"), threadID, messageID);
    if (isNaN(args[0]) || isNaN(args[1]) || args[1] <= args[0] || args[0] < 0 || args[1] < 0) return api.sendMessage(getText("invalidInput"), threadID, messageID);
    return api.sendMessage(getText("returnResult", Math.floor(Math.random() * (args[1] - args[0] + 1) + args[0]), args[0], args[1]), threadID, messageID);
}