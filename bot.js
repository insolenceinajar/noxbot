var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready', () => {console.log('Bereit!');} );

bot.on('message', message => {
    if ( (message.content == '!würfel')||(message.content == '!Würfel')||
       	 (message.content == '!wuerfel')||(message.content == '!Wuerfel') ) {
        
        var wurf = new Array(3);
	var inDv = wurf.length;
        for(var i=0; i<inDv; i++){
	        var radum = Math.floor(Math.random()*6)+1;
    	    wurf[i]=radum;
        }
        message.reply(wurf);
    }
    if ( (message.content == '!scream')||(message.content == '!Scream')||
       	 (message.content == '!schrei')||(message.content == '!Schrei') ) {
	
	//var noise = new Array['AAAAAAAAAH!','AAAHAHAAAAAHAAA!!','AAAHAAAAAAAAHAHAHAHAAAAAAAAAAA!!'];
	var diff = Math.floor(Math.random()*3);
	message.reply(diff);
    }
});

// Token
bot.login(process.env.BOT_TOKEN);
