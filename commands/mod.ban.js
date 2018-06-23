// Use \n if you need another line!

// For details: https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/using-embeds-in-messages.html

// Add ; at the end of ) for .addField only when its the last.

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  if(!bUser) return message.channel.send("[ERROR] Incorrect usage! or No user exists!");

  let bReason = args.join(" ").slice(22);

  // If the person trying to ban but isnt a Moderator, he can't use this command.

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("[ERROR] You do not have sufficient Permissions!");

  // If the person has KICK_MEMBERS, he can't be banned.

  if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("[ERROR] That person is a Moderator!");

  let banEmbed = new Discord.RichEmbed()

  .setColor("#00ffcc")

  .setAuthor("ReiX - Report Portal", "https://s1rythmic.s-ul.eu/ABM66XfW")

  .addField("Banned User", `${bUser} with ID ${bUser.id}`)

  .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`,)

  .addField("Banned In", message.channel, true)

  .addField("Banned On", message.createdAt, true)

  .addField("Reason being", bReason, true);

  let banChannel = message.guild.channels.find(`name`, "incidents");

  if(!banChannel) return message.channel.send("[ERROR] #incidents channel not found.");

  message.delete().catch(O_o=>{});

  message.guild.member(bUser).ban(bReason);

  banChannel.send(banEmbed);

}

module.exports.help = {

  name: "ban"

}
