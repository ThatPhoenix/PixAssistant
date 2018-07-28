////COPYRIGHT NOTICE
// NO ONE IS ALLOWED TO CLONE/EDIT/FORK THIS PROJECT
// OR ELSE YOU WILL BE REPORTED TO THE POLICE OR DISCORD TRUST & SAFTEY


const Discord = require("discord.js");
const client = new Discord.Client();
const Version = "2.0"
const bot = new Discord.Client();
const prefix = (">")
const sleep = require("sleep")
const emergency = ("ENABLING LOCKDOWN")
const DataAPI = require("./Database.json")
////////////////////////////
client.on('ready', () => { client.user.setActivity('Helping is My Job!')  
console.log('[ASSISTANT] [PROCESS] ASSISTANT Online')
});
///////////////////////////////////////
//EVAL
client.on('message', message => {
	if (message.author.id === "338332694725263361") {
		let msg = message.content;

		if (msg.startsWith(">eval")) {
   		msg = msg.substring("eval ".length)
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
    						text: "PheonixEval"
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
        message.channel.sendMessage("**Shutting Down Asssistant Systems**")
        setTimeout(function() {
            client.destroy();
            process.exit(0);
        }, 2000);
    }
    }
});
//////
client.on('message', message => {
    if (message.content.startsWith(prefix + "Assistant")) {
        message.channel.sendMessage("Bonjour Senior How Can i Assistant You Today?");
}
    if (message.content.startsWith("Stats")) {
        message.channel.sendMessage("Displaying Diagnostics")
        message.channel.sendMessage("==DIAGNOSTICS==")
message.channel.sendMessage(message.channel.send(`= STATISTICS =
• Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Users   :: ${(client.users.size)}
• Api Nodes :: Phoenix Systems , Anthony Phoenix , Assistant
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
	    process.exit();
    }
});
///////////////	
client.on('message', message => {
    if (message.content.startsWith(prefix + "Interview Question Emergency")) {
message.channel.send("**Section 1**:: Emergency Test The emergency test consists of emergency situation.")
message.channel.send("1] What would you do if someone would get Anthony's token? (List five things)")
message.channel.send("2] What would you do if someone would spam on the Anthony Bot Server? (List three things)")
    }
});
	
	client.on('message', message => {
    if (message.content.startsWith(prefix + "Interview Question Theory")) {
message.channel.send("**Section 2**:: Theory/Knowledge test:")
message.channel.send("1] Who are the two owners of Anthony?")
message.channel.send("2] Is Anthony on BETA or ALPHA?")
message.channel.send("3] What is Anthony, give us the breif description.")
message.channel.send("4] Which language does Anthony use?")
}
	});

client.on("message", async message => {
if (message.content.startsWith(prefix + "AdminLogin")) {
  let botembed = new Discord.RichEmbed()
  .setDescription("Admin Login")
  .setColor("#15f153")
  .addField("Username & Password")
  .addField("eg JohnDOE#TestPassword"); 
  message.channel.send(botembed);
} 
if (message.content.startsWith(prefix + "PhoenixAdmin#PhoenixistheBest")) {
message.channel.send("Verification Complete Welcome Phoenix!!!")
message.channel.send(":warning: | Cmds Are Work In Progress")
}
if (message.content.startsWith(prefix + "HasanAdmin#GalaxyForever")) {
  message.channel.send("Verification Complete Welcome Hasan!!!")
  message.channel.send(":warning: | Cmds Are Work In Progress")
}
});

client.on("message", async message => {
if (message.content.startsWith(prefix + "System --Lockdown")) {
  let botembed = new Discord.RichEmbed()
  .setDescription("Access Granted")
  .setColor("##FF0000")
  .addField("LOCKDOWN PROTOCOL INATED")
  .addField("Initating Bot Lockdown"); 
  message.channel.send(botembed);
	client.user.setActivity("System is Shutting Down in 10 Seconds --Administrator Lockdown")
	sleep.sleep(10)
	 message.guilds.channels.find('name', 'system-logs').send("**[PROCESS]** **[ADMINISTRATOR]** The Process Phoenix's Assistant Will Now Be Terminated Due to PROCESS_ADMINISTRATOR_LOCKDOWN")
	client.destroy();
	console.error("[Process] [Security] Process has Shutdown Assistant Due to Administator Lockdown");
}
}); 
	
/////////////////
client.login(process.env.TOKEN)
