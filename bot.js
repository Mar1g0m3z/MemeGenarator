const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.on('ready', () => {
  console.log(`Bot is online and logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  // Handle incoming messages here
});

client.login(process.env.TOKEN);
