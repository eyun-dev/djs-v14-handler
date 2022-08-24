const { Client, Message, EmbedBuilder } = require('discord.js');

/**
 * @type {{
 * name: string,
 * description: string,
 * aliases: string[],
 * isOwner?: boolean,
 * isAdmin?: boolean,
 * run: (client: Client, message: Message, args: string[]) => void
 * }}
 */


module.exports = {
    name: "command",
    description: "My command description!",
    aliases: ["c"],
    isOwner: false, // optional
    isAdmin: true, // optional
    async run(client, message, args) {

        message.reply({ content: "Command is working fine!" });

    }
}
