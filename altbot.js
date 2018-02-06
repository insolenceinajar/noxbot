const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', function(){console.log('Bereit!');} );

bot.on('message', function(user,userID,channelID,message){
    if (message.content === '!scream') {
    	var schrei = Math.floor(Math.random()*3)+1;
        message.reply(schrei);
  	}    
});

// Token
bot.login(process.env.BOT_TOKEN);
