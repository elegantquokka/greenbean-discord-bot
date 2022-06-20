const { MessageEmbed } = require('discord.js');

const errorEmbed = new MessageEmbed()
    .setColor('#ff0000')
    .setTitle('Tragically, GreenBean is unsatisfied with your input ~~or possibly dead~~.');

const helpEmbed = new MessageEmbed()
.setColor('#ff7f50')
.setTitle('Help')
.setDescription('Hi, I’m GreenBean :seedling: we hope you enjoy be(an)ing sustainable!')
.addFields(
  { name: '/carboncalc', value: '> calculates the carbon emissions produced by an activity.' },
)
.setFooter({ text: 'Feel free to DM ELeegance#2207 with questions or feedback :)' });

module.exports = {
    errorEmbed,
    helpEmbed,
};