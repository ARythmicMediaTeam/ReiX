// Use \n if you need another line!

// For details: https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/using-embeds-in-messages.html

// Add ; at the end of ) for .addField only when its the last.

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let botembed = new Discord.RichEmbed()

  .setTitle("Name")

  .setAuthor("ReiX - Bot Information", "https://s1rythmic.s-ul.eu/ABM66XfW")

  // The color code is the same as HTML. Just add a 0x at the front.

  .setColor(0x00FFCC)

  .setDescription("ReiX - Rei stands for Rythmic Extensible Interaction")

  .setTimestamp()

  .addField("Bot Version",
    "2.F")

  // The true at the end (look below) means that it will be placed side by side. Just type xbotinfo and look at Bot Version and the rest. Its placed side by side.

  .addField("Codename", "Horizonal", true)

  .addField("Build", "74", true)

  .addField("Creator", "Rythmic#7732", true)

  .addField("Created on", bot.user.createdAt);

  message.channel.send(botembed);

}

module.exports.help = {

  name: "botinfo"

}
