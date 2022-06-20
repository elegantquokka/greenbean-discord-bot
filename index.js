const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
const { errorEmbed } = require('./embeds.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log(`GreenBean ready! Logged in as ${client.user.tag}`);
});

client.commands = new Collection();
const commandFiles = ['./commands/help.js', './commands/cat_test.js'];
for (const file of commandFiles) {
  const command = require(`./${file}`);
  client.commands.set(command.data.name, command);
}
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  }
  catch (error) {
    console.error(error);
    await interaction.reply({ embeds: [errorEmbed] });
  }

});

client.login(token);