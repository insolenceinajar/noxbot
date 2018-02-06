var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready', () => {console.log('Bereit!');} );

bot.on('message', message => {
    if (message.content === '!scream') {
    	var schrei = Math.floor(Math.random()*3)+1;
        message.reply(schrei);
  	}
});

// Token
bot.login(process.env.BOT_TOKEN);
