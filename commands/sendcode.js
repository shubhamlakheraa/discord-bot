const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("qrcode")
        .setDescription('Get my Github qrcode'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle("This my github qrcode")
            .setDescription('QR code for my github.')
            .setImage("http://api.qrserver.com/v1/create-qr-code/?data=https://github.com/shubhamlakheraa&size=100x100")
        await interaction.reply({
            embeds: [embed]
        })
    },
}
