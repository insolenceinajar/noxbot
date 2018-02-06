var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready', () => {console.log('Bereit!');} );

bot.on('message', message => {
    if (message.content === '!scream') {
    	//var schrei = new Array(
        
        var FCK = new Array(20);
        for(var i; i<=20; i++){
	        var radum = Math.floor(Math.random()*10)+0;
    	    FCK[i]=radum;
        }
        message.reply(FCK);
  	}
});

// Token
bot.login(process.env.BOT_TOKEN);
