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
//////
client.on('message', message => {
	if (message.author.id === "338332694725263361") {
		let msg = message.content;

		if (msg.startsWith("$eval")) {
   		msg = msg.substring("$eval ".length)
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
  	  					text: "PRIDeEval"
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
    						text: "PRIDeEval"
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
    						text: "PRIDeEval"
    					}
	    			}
  	  		})
   		}
  	}
	}
})
//////////////////////////////////
client.on('message', message => {
	if (message.author.id === "344785231879995393") {
		let msg = message.content;

		if (msg.startsWith(";eval")) {
   		msg = msg.substring(";eval ".length)
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
  	  					text: "PRIDeEval"
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
    						text: "PRIDeEval"
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
    						text: "PRIDeEval"
    					}
	    			}
  	  		})
   		}
  	}
	}
})
/////////
               

/////////////////
///////////////	

/////////////////
client.login(process.env.TOKEN)
