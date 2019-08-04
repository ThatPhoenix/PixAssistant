////COPYRIGHT NOTICE
// NO ONE IS ALLOWED TO CLONE/EDIT/FORK THIS PROJECT
// OR ELSE YOU WILL BE REPORTED TO THE POLICE OR DISCORD TRUST & SAFTEY


const Discord = require("discord.js");
const client = new Discord.Client();
const Version = "2.0"
const bot = new Discord.Client();
const prefix = (">")
const DataAPI = require("./Database.json")
////////////////////////////
client.on('ready', () => { client.user.setActivity('Helping is my Job!')  
console.log('The Lusterous Assistant has started up')
});
///////////////////////////////////////
//EVAL
client.on('message', message => {
	if (message.author.id === "498186211249225728") {
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
    if (message.content.startsWith(prefix + "Assistant")) {
        message.channel.sendMessage("Bonjour, I am the lustrous Phoenix's Assistant how may I assist?");
}

  if (message.content.startsWith("Creator")) {
	const embed = new Discord.RichEmbed()
  .setTitle("The lustrous Phoenix's Assistant")
  .setAuthor("By ThatPhoenix")	
  .setColor("db7093")
  .setDescription("I was created with love by ThatPhoenix")
  .setFooter("ThatPhoenix is such a luminous ")
  .setImage(`${client.user.displayAvatarURL}`)
  .setThumbnail(`${client.user.displayAvatarURL}`)



  .setTimestamp()
  .addField("Does Phoenix Plan To Do More on His Assistant?", "Obviously yes")
  


  .addField("Why was Phoenix's Assistant Created?", "The Reason was to assist The Luminous Phoenix with managing Phoenix Systems And Help Making Cupcakes Yum!", true)



  .addBlankField(true)

  message.channel.send({embed});
  }
});


//////////////////
client.on('message', message => {
    if (message.content.startsWith(prefix + "eval process.env.luminous")) {
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
    if (message.content.startsWith(prefix + "eval client.token")) {
	    message.channel.send("TOKEN SECURITY BREACH ENABLING SECURITY LOCKDOWN")
sleep.sleep(3)
    message.channel.send("LOCKDOWN INIATED CONTACTING ADMINS")
	  client.user.setActivity(emergency) 
	   client.user.setStatus("dnd")
	    message.channel.send("Shutting Down For Exploit Prevention")
	    process.exit();
    }
});///////////////	
client.on('message', message => {
    if (message.content.startsWith(prefix + "Interview Question Emergency")) {
message.channel.send("**Section 1**:: Emergency Test The emergency test consists of emergency situation.")
message.channel.send("1] What would you do if someone would get Pixelspix's token? (List five things)")
message.channel.send("2] What would you do if someone would spam on the Pixelspix Hub Server? (List three things)")
    }
});
	
	client.on('message', message => {
    if (message.content.startsWith(prefix + "Interview Question Theory")) {
message.channel.send("**Section 2**:: Theory/Knowledge test:")
message.channel.send("1] Who are the two diamonds of Pixelspix?")
message.channel.send("2] Is Pixelspix on BETA or ALPHA?")
message.channel.send("3] What is Pixelspix, give us the breif description.")
message.channel.send("4] Which programming language does Pixelspix use?")
}
	});




client.on('message', async message => {
	 if (message.content.startsWith(`${client.token}`)) {
	const embed = new Discord.RichEmbed()
  embed.setTitle("EMERGENCY")
  embed.setDescription(`My token has been been exposed! Please regenerate it ASAP to prevent my malicious use by others. Responsible User ${message.author.tag} ${message.author.id}`)
  client.channels.get("465589613931659272").send(embed);
client.channels.get("465589613931659272").send("Assistant Emergency Preservation Protocol Initated")
client.user.setStatus("dnd")
client.user.setActivity("Token Exposed Assistant Preservation Protocol Initated..")
  }
})
client.on('message', async message => {
	if (message.content.startsWith("!gaming")) {
let role = message.guild.roles.find("name", "Gaming Channels");

let member = message.member;

message.channel.send("Adding Roles `Gaming Channels`")
member.addRole(role).catch(console.error);
message.channel.send("Added `Gaming Channels` If you have not reviceved access to gaming channels please contact a Admin") 
		
	}
});

client.on('message', async message => {
	if (message.content.startsWith("!remove gaming")) {
let role = message.guild.roles.find("name", "Gaming Channels");

let member = message.member;

message.channel.send("Removing Roles `Gaming Channels`")
member.removeRole(role).catch(console.error);
message.channel.send("Removed `Gaming Channels` If you have not had your access revoked to gaming channels please contact a Admin") 
	}
});

client.on('message', async message => {
	if (message.content.startsWith(">intro")) {
		message.channel.send("All Rise for the Lustrous Purple Diamond!")
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
	 message.channel.send("Password & Username is :ok: Verifying Identity..")
message.channel.send(":warning: 2 Step Verification Required :warning:")
if (message.author.id === "498186211249225728") {
	message.channel.send("2 Step Authentication Complete.")
	message.channel.send("Welcome Phoenix, To the new Phoenix Systems 2.0 Admin Panel!")
	message.channel.send(":error: | Commands are in development")
	message.channel.send("This Data is classified information such as Phoenix Systems 2.0  Admin Account Secure Pin & Admin Account secondary Password")
	client.users.get("498186211249225728").send("Please Enter Admin Account Secure Pin:")
	if (message.content.startsWith(process.env.SecurePin1)) {
		
client.users.get("498186211249225728").send("Identity Confirmed - Welcome to Phoenix Systems 2.0 Admin Panel")
	
    }
}
if (message.content.startsWith(prefix + "HasanAdmin#GalaxyForever")) {
	 message.channel.send("Password & Username is :ok: Verifying Identity..")
	message.channel.send(":warning: 2 Step Verification Required :warning:")
 if (message.author.id === "255750690784149504") {
	message.channel.send("2 Step Authentication Complete.")
	 
	message.channel.send("Welcome Hasan, To the new Phoenix Systems 2.0 Admin Panel!")
 message.channel.send(":error: | Commands are in development")
 }
}
	
	if (message.content.startsWith(prefix + "ElcoAdmin#MLGDoritos")) {
		 message.channel.send("Password & Username is :ok: Verifying Identity..")
		message.channel.send(":warning: 2 Step Verification Required :warning:")
 if (message.author.id === "270600034540716032") {  
	message.channel.send("2 Step Authentication Complete.")
	 
	message.channel.send("Welcome Spicy Elco, To the new Phoenix Systems 2.0 Admin Panel!")
 message.channel.send(":error: | Commands are in development")
 }
}

	
	if (message.content.startsWith(prefix + "NUTAdmin#WildNUT")) {
		 message.channel.send("Password & Username is :ok: Verifying Identity..")
		message.channel.send(":warning: 2 Step Verification Required :warning:")
 if (message.author.id === "377869902578712576") {
	message.channel.send("2 Step Authentication Complete.")
	 
	message.channel.send("Welcome Wild NUT NUT, To the new Phoenix Systems 2.0 Admin Panel!")
 message.channel.send(":error: | Commands are in development")
 }
}
	
	if (message.content.startsWith(prefix + "DracoAdmin#RapperMan")) {
 message.channel.send("Password & Username is :ok: Verifying Identity..")
		message.channel.send(":warning: 2 Step Verification Required :warning:")
		if (message.author.id === "275614246098960386") {
	message.channel.send("2 Step Authentication Complete.")
	 
	message.channel.send("Welcome Draco Rapper Man, To the new Phoenix Systems 2.0 Admin Panel!")
 message.channel.send(":error: | Commands are in development")
 }
}
	
});

/////////////////
client.login(process.env.luminous)
