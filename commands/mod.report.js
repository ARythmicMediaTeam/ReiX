// Use \n if you need another line!

// For details: https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/using-embeds-in-messages.html

// Add ; at the end of ) for .addField only when its the last.

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  if(!rUser) return message.channel.send("[ERROR] Incorrect usage! or No user exists!");

  let reason = args.join(" ").slice(22);

  // reportEmbed just to de-confuse myself.

  let reportEmbed = new Discord.RichEmbed()

  .setColor('#00ffcc')

  .setAuthor("ReiX - Report Portal", "https://s1rythmic.s-ul.eu/ABM66XfW")

  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)

  .addField("Reporter", `<@${message.author.id}> with ID: ${message.author.id}`)

  .addField("Reported at", message.channel, true)

  .addField("Time Reported", message.createdAt, true)

  .addField("Reason being", reason, true);

  let reportschannel = message.guild.channels.find(`name`, "reports");

  if(!reportschannel) return message.channel.send("[ERROR] #reports channel not found.");

  message.delete().catch(O_o=>{});

  reportschannel.send(reportEmbed);

}

module.exports.help = {

  name: "report"

}
