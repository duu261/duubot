module.exports.config = {
	name: "pokemon",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Gei",
	description: "Games",
	commandCategory: "games",
	usages: "pokemon",
	cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Currencies }) {
            var job = ["🐉","🦖","🦄","🦍","🐅","🐆","🐊"];
            return api.sendMessage(${job[Math.floor(Math.random() * job.length)]} + ' đó là po ke xì mõm của mày nhận được '  , event.threadID, event.messageID);
        }