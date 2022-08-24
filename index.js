// Important Modules
const Discord = require('discord.js');
const config = require('./config.js');
const handler = require('./src/handler');
const client = new Discord.Client({
    intents: new Discord.IntentsBitField(3276799),
    allowedMentions: {
        parse: [],
        repliedUser: false
    },
    presence: {
        activities: [{ ...config.activity }]
    }
});

// Call the handler
handler(client);

// Client options
client.commands = new Discord.Collection();

// Register the Discord bot
client.login(config.token);