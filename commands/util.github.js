// Use \n if you need another line!

// For details: https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/using-embeds-in-messages.html

// Add ; at the end of ) for .addField only when its the last.

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let botembed = new Discord.RichEmbed()

  .setTitle("GitHub Page")

  .setAuthor("ReiX - Official GitHub Page", "https://s1rythmic.s-ul.eu/ABM66XfW")

  // The color code is the same as HTML. Just add a 0x at the front.

  .setColor(0x00FFCC)

  .setURL("https://github.com/ARythmicMediaTeam/ReiX/")

  .setDescription("ReiX is open source. It definetely runs on macOS X! The same can't be said for Windows, due to Rythmic not having a Windows PC. There are plently of comments, making it easier for someone who has no experience to actually modify my code.")

  message.channel.send(botembed);

}

module.exports.help = {

  name: "github"

}
