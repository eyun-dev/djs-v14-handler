const fs = require('fs');
const { Client } = require('discord.js');

/**
 * @param {Client} client 
 */
module.exports = async (client) => {

    // Events handler readder
    fs.readdir('./src/events', (err, files) => {

        if (err) throw err;

        files.filter((f) => f.endsWith(".js")).forEach((file) => {

            const eventName = file.split(".")[0];

            const event = require(`./events/${file}`);

            client.on(eventName, event.bind(null, client));

        });

    });

    // Command handler readder
    fs.readdir('./src/commands', (err, folders) => {

        if (err) throw err;

        folders.filter((f) => !f.includes(".")).forEach((folder) => {

            fs.readdir(`./src/commands/${folder}`, (err, files) => {

                if (err) throw err;

                files.filter((f) => f.endsWith(".js")).forEach((file) => {

                    const command = require(`./commands/${folder}/${file}`);

                    client.commands.set(command.name.toLowerCase(), command);

                    console.log(`Loading ${file} ...`);

                });

            });

        });

    });

}