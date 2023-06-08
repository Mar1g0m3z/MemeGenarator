const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot is online and logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
  // Handle incoming messages here
});

client.on('error', (error) => {
    console.error('An error occurred:', error);
  });

client.login(process.env.TOKEN);
