module.exports = {
    name: 'upi',
    description: '💳 Pay Here (UPI) ID along with an image in a styled message with emojis.',
    /**
     * Executes the upi command.
     * 
     * @param {Channel} channel The channel where the command was executed.
     * @param {Message} message The message object for the command.
     * @param {Client} client The client or bot instance.
     * @param {String[]} args The arguments passed with the command.
     */
    async execute(channel, message, client, args) {
        // Replace 'YOUR_UPI_ID' with your actual UPI ID
        const upiID = 'shreyanshgupta2@fam';

        try {
            // Send the UPI ID as a message
            await message.channel.send(`💳 **Your UPI (Unified Payments Interface) ID:**\n\n||${upiID}||`);
            
            // Send the image as a separate message
            await message.channel.send({
                files: [{
                    attachment: 'https://cdn.discordapp.com/attachments/1255083680569753674/1255084354716303400/UPI-Collect.png?ex=667bd7e4&is=667a8664&hm=50e1099dfb96e896af0d5dc2522f80fa95f04303f2fffbbc48f87e4113d3a270&', // Example: './images/upi_qr_code.png'
                    name: 'https://cdn.discordapp.com/attachments/1255083680569753674/1255084354716303400/UPI-Collect.png?ex=667bd7e4&is=667a8664&hm=50e1099dfb96e896af0d5dc2522f80fa95f04303f2fffbbc48f87e4113d3a270&'
                }]
            });
        } catch (error) {
            console.error('Error sending UPI message:', error);
            message.channel.send('Error sending UPI message. Please try again later.');
        }
    }
};
