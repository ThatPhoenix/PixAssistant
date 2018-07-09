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
//////

/////////
               

/////////////////
///////////////	

/////////////////
client.login(process.env.TOKEN)
