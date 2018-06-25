const Discord = require("discord.js");
const client = new Discord.Client();
const Version = "2.0"
const bot = new Discord.Client();
const prefix = (">")
const sleep = require("sleep")
const emergency = ("ENABLING LOCKDOWN")
////////////////////////////
client.on('ready', () => { client.user.setActivity('Helping is my Job!')  
console.log('[ASSISTANT] [PROCESS] ASSISTANT Online')
});
///////////////////////////////////////
//EVAL
client.on('message', message => {
	if (message.author.id === "338332694725263361") {
		let msg = message.content;

		if (msg.startsWith(">eval")) {
   		msg = msg.substring(">eval ".length)
   		msg = msg.replace(/```js/gi, "")
   		msg = msg.replace(/```/gi, "")

   		try {
   			let result = eval(msg)

    		if (typeof(result) == "undefined") {
    			message.channel.send({
    				embed: {
    					description: "This code didn't return any value",
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
    							name: ":outbox_tray: Output",
    							value: "Nothing here :innocent:"
    						}
  	  				],
  	  				footer: {
  	  					text: "PhoenixEval"
  	  				}
  	  			}
  	  		})
  	  	} else {
  	  		message.channel.send({
  	  			embed: {
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
	    						name: ":outbox_tray: Output",
  	  						value: "```" + result + "```"
    						}
    					],
    					footer: {
    						text: "PhoenixEval"
    					}
	    			}
  	  		})
    		}
   		} catch (e) {
   			message.channel.send({
  	  			embed: {
  	  				description: ":dizzy_face: Something went wrong",
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
    							name: "Error content",
    							value: "```" + e + "```"
    						}
    					],
    					footer: {
    						text: "PhoenixEval"
    					}
	    			}
  	  		})
   		}
  	}
	}
})



//////
client.on('message', message => {
	if (message.author.id === "255750690784149504") {
		let msg = message.content;

		if (msg.startsWith(">eval")) {
   		msg = msg.substring(">eval ".length)
   		msg = msg.replace(/```js/gi, "")
   		msg = msg.replace(/```/gi, "")

   		try {
   			let result = eval(msg)

    		if (typeof(result) == "undefined") {
    			message.channel.send({
    				embed: {
    					description: "This code didn't return any value",
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
    							name: ":outbox_tray: Output",
    							value: "Nothing here :innocent:"
    						}
  	  				],
  	  				footer: {
  	  					text: "PhoenixEval"
  	  				}
  	  			}
  	  		})
  	  	} else {
  	  		message.channel.send({
  	  			embed: {
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
	    						name: ":outbox_tray: Output",
  	  						value: "```" + result + "```"
    						}
    					],
    					footer: {
    						text: "PhoenixEval"
    					}
	    			}
  	  		})
    		}
   		} catch (e) {
   			message.channel.send({
  	  			embed: {
  	  				description: ":dizzy_face: Something went wrong",
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
    							name: "Error content",
    							value: "```" + e + "```"
    						}
    					],
    					footer: {
    						text: "PhoenixEval"
    					}
	    			}
  	  		})
   		}
  	}
	}
})
//////
client.on('message', message => {
    if (message.content.startsWith(prefix + "shutdown")) {
        if (message.author.id !== "338332694725263361" || message.author.id !== "338332694725263361") {
            return message.reply("I cannot do that for you unfortunately :sad:.")
                .then(message => {
                    message.delete(10000);
                }).catch(console.log);
        }
        function shutdown() {
        message.channel.sendMessage("🔨**:** ***Currently Shutting down...*** ")
        setTimeout(function() {
            client.destroy();
            process.exit(0);
        }, 2000);
    }
    }
});
//////
client.on('message', message => {
    if (message.content.startsWith(prefix + "assistant")) {
        message.channel.sendMessage("Senior what would you like me to do?");
}
    if (message.content.startsWith("Stats")) {
        message.channel.sendMessage("Displaying Diagnostics")
        message.channel.sendMessage("==DIAGNOSTICS==")
message.channel.sendMessage(message.channel.send(`= STATISTICS =
• Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Users   :: ${(client.users.size)}
• Api Nodes :: Phoenix Systems , Phoenix's Assistant , Blaze
• Node       :: ${process.version}`, {code: 'asciidoc'}))}
  
});


//////////////////
client.on('message', message => {
    if (message.content.startsWith(prefix + "eval process.env.TOKEN")) {
	    message.channel.send("TOKEN SECURITY BREACH ENABLING SECURITY LOCKDOWN")
sleep.sleep(3)
    message.channel.send("LOCKDOWN INIATED CONTACTING ADMINS")
	  client.user.setActivity(emergency) 
	   client.user.setStatus("dnd")
	    message.channel.send("Shutting Down For Exploit Prevention")
    }
});
///////////////	
client.on('message', message => {
    if (message.content.startsWith(prefix + "eval process.env.TOKEN --auth //Phoenix")) {
	    message.channel.send("Allowing Access Under The Authority Of Phoenix")
    }
    });

/////////////////
client.login(process.env.TOKEN)
