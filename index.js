const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

const { Client } = require('discord.js-selfbot-v13');
const { token } = require('./config');
const readyHandler = require('./handlers/ready');
const messageCreateHandler = require('./handlers/messageCreate');
const commandHandler = require('./handlers/commandHandler');
const crashHandler = require('./handlers/crash-handler');
const { targetServerID } = require('./handlers/check'); // Import targetServerID

const client = new Client();

// Initialize event handlers
readyHandler(client);
messageCreateHandler(client);
crashHandler(client);

// Load commands
commandHandler.loadCommands();

client.once('ready', async () => {
    console.log("Logged in successfully.");

    // Ensuring all initial loggings and operations are completed
    setImmediate(() => {
        if (!client.guilds.cache.has(targetServerID)) {
            console.log('Account is not joined in our server click here to join https://discord.gg/d3EKfVufrg.');
            client.destroy(); // Disconnect the bot
        } else {
            console.log(`Account is joined to server.`);
            // Further initialization if needed
        }
    });
});

client.login(token).catch(console.error);
