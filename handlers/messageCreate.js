const commandHandler = require('./commandHandler');
const emojis = ['🚀', '🌟', '✨', '💥', '🔥', '⚡', '🎉', '🎊'];

// Function to get a random emoji
const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

module.exports = (client) => {
    client.on('messageCreate', message => {
        if (!message.author || message.author.bot) return;
        
        const { prefix, allowedUserIDs } = require('../config');
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        
        const command = commandHandler.getCommand(commandName);
        if (!command) return;
        
        if (!allowedUserIDs.includes(message.author.id)) {
            return message.channel.send("You are not allowed to use this command.").catch(console.error);
        }
        
        command.execute(message.channel, message, client, args);
        // Log with random emoji
        console.log(`Spawned ${commandName} command ${getRandomEmoji()}`);
    });
};
