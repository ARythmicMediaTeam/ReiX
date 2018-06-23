// Use \n if you need another line!

// For details: https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/using-embeds-in-messages.html

// Add ; at the end of ) for .addField only when its the last.

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let botembed = new Discord.RichEmbed()

  .setAuthor("ReiX - Invitation Link", "https://s1rythmic.s-ul.eu/ABM66XfW")

  .setTitle("https://discord.gg/dNKJHqR")

  .setTimestamp()

  // Put in any value here. (#XXXXXX)

  .setColor('#00ffcc')

  message.channel.send(botembed);

}

module.exports.help = {

  name: "invite"

}
