const fs = require('fs');

const commands = [];
const emojis = ['🚀', '🌟', '✨', '💥', '🔥', '⚡', '🎉', '🎊'];

// Function to get a random emoji
const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

module.exports = {
    loadCommands: () => {
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            commands.push(command);
            // Log the loaded command with a random emoji
            console.log(`Loaded command: ${command.name} ${getRandomEmoji()}`);
        }
    },
    getCommand: (commandName) => {
        return commands.find(cmd => cmd.name === commandName);
    }
};
