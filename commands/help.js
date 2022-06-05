const { SlashCommandBuilder } = require('@discordjs/builders');
const { helpEmbed } = require('../embeds.js');

module.exports = {

    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('learn about bot commands and how to use them!'),
  async execute(interaction) {
      await interaction.reply({ embeds: [helpEmbed] })
      .then(() => console.log('Reply sent.'))
      .catch(console.error);
    },
};