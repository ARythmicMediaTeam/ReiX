// Use \n if you need another line!

// For details: https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/using-embeds-in-messages.html

// Add ; at the end of ) for .addField only when its the last.

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  if(!kUser) return message.channel.send("[ERROR] Incorrect usage! or No user exists!");

  let kReason = args.join(" ").slice(22);

  // If the person trying to kick but isnt a Moderator, he can't use this command.

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("[ERROR] You do not have sufficient Permissions!");

  // If the person has KICK_MEMBERS, he can't be kicked.

  if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("[ERROR] That person is a Moderator!");

  let kickEmbed = new Discord.RichEmbed()

  .setColor("#00ffcc")

  .setAuthor("ReiX - Report Portal", "https://s1rythmic.s-ul.eu/ABM66XfW")

  .addField("Kicked User", `${kUser} with ID ${kUser.id}`)

  .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`,)

  .addField("Kicked In", message.channel, true)

  .addField("Kicked On", message.createdAt, true)

  .addField("Reason being", kReason, true);

  let kickChannel = message.guild.channels.find(`name`, "incidents");

  if(!kickChannel) return message.channel.send("[ERROR] #incidents channel not found.");

  message.delete().catch(O_o=>{});

  message.guild.member(kUser).kick(kReason);

  kickChannel.send(kickEmbed);

}

module.exports.help = {

  name: "kick"

}
