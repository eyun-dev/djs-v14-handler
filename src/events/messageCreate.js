const { Client, Message } = require('discord.js');
const { prefix } = require('../../config');

/**
 * @param {Client} client 
 * @param {Message} message 
 */
module.exports = async (client, message) => {

    if (!message.guild || message.author.bot) return;

    let args;

    if (message.content.startsWith(prefix)) args = message.content.slice(prefix.length).split(/ +/);

    else if (message.content.startsWith(`<@!${client.user.id}>`)) args = message.content.slice(`<@!${client.user.id}>`.length).split(/ +/)

    else if (message.content.startsWith(`<@${client.user.id}>`)) args = message.content.slice(`<@${client.user.id}>`.length).split(/ +/)

    else return;

    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(c => c.aliases && c.aliases[0] && c.aliases.includes(command));

    if (!cmd) return;

    if (cmd.isOwner && message.author.id !== message.guild.ownerId) return message.reply(`❌ - Only \`Owners\` can user this command`);
    if (cmd.isAdmin && !message.member.permissions.has("Administrator")) return message.reply(`❌ - \`Only Administrators\` can user this command`);

    cmd.run(client, message, args);

}