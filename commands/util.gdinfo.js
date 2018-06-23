// Use \n if you need another line!

// For details: https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/using-embeds-in-messages.html

// Add ; at the end of ) for .addField only when its the last.

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let sicon = message.guild.displayiconURL;

  // The command is using some stuff from the server. So, we'll use serverembed instead of botembed.

  let serverembed = new Discord.RichEmbed()

  .setAuthor("ReiX - Current Guild Information", "https://s1rythmic.s-ul.eu/ABM66XfW")

  .setColor(0x00FFCC)

  .setThumbnail(message.guild.displayiconURL)

  .addField("Server Name", message.guild.name)

  .addField("Created on", message.guild.createdAt)

  .addField("When you joined", message.member.joinedAt)

  .addField("Total number of members", message.guild.memberCount);

  message.channel.send(serverembed);

}

module.exports.help = {

  name: "gdinfo"

}
