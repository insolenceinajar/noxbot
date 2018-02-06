const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bereit!');
});

client.on('message', message => {
    if (message.content === '!scream') {
    	var schrei = Math.floor(Math.random()*3)+1;
        message.reply(schrei);
  	}
});

// Token
client.login(process.env.BOT_TOKEN);
