var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready', () => {console.log('Bereit!');} );

bot.on('message', message => {
    if (message.content === '!scream') {
        
        var schrei = new Array(3);
        /*for(var i=0; i<=20; i++){
	        var radum = Math.floor(Math.random()*10)+0;
    	    schrei[i]=radum;
        }*/
        message.reply(schrei.length);
    }
});

// Token
bot.login(process.env.BOT_TOKEN);
