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
                    attachment: 'https://cdn.discordapp.com/attachments/1250496035814379573/1255145776561258567/IMG-20240625-WA0017.jpg?ex=667c1118&is=667abf98&hm=a2655c2eee595503f2383a1a3b8d39a72cdbead3c36e4c36552e9d227893a602&', // Example: './images/upi_qr_code.png'
                    name: 'https://cdn.discordapp.com/attachments/1250496035814379573/1255145776561258567/IMG-20240625-WA0017.jpg?ex=667c1118&is=667abf98&hm=a2655c2eee595503f2383a1a3b8d39a72cdbead3c36e4c36552e9d227893a602&'
                }]
            });
        } catch (error) {
            console.error('Error sending UPI message:', error);
            message.channel.send('Error sending UPI message. Please try again later.');
        }
    }
};
