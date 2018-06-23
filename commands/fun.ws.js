// Use \n if you need another line!

// For details: https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/using-embeds-in-messages.html

// Add ; at the end of ) for .addField only when its the last.

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let botembed = new Discord.RichEmbed()

  .setAuthor("ReiX - Whoopity-scoop", "https://s1rythmic.s-ul.eu/ABM66XfW")

  .setDescription('Poopy-di scoop\nScoop-diddy-whoop\nWhoop-di-scoop-di-poop\nPoop-di-scoopty\nScoopty-whoop\nWhoopity-scoop, whoop-poop\nPoop-diddy, whoop-scoop\nPoop, poop\nScoop-diddy-whoop\nWhoop-diddy-scoop\nWhoop-diddy-scoop, poop')

  // Put in any value here. (#XXXXXX)

  .setColor('#00ffcc')

  .setTimestamp()

  message.channel.send(botembed);

}

module.exports.help = {

  name: "ws"

}
