// REI Client (ReiX)

// Made by Mark Joshwel "Rythmic"

// Log in and etc.

const Discord = require('discord.js');

const bot = new Discord.Client();

const config = require('./config.json')

const fs = require("fs");

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")

  if(jsfile.length <= 0){

    console.log("[ERROR] No commands avaible.");

    return;

  }

  jsfile.forEach((f, i) =>{

    let props = require(`./commands/${f}`);

    console.log(`[COMMAND.AVAIBILITY.CHECK] ${f} is loaded into cache.`);

    bot.commands.set(props.help.name, props);

  });

});

// Bot Token.

bot.login(config.token);

bot.on('ready', async () => {

  console.log(`${bot.user.username} is now online on ${bot.guilds.size} server(s).`)

  bot.user.setActivity("out for commands", {type: "WATCHING"});

  // bot.user.setGame("type xhelp!");

});

bot.on('message', async message => {

  if(message.author.bot) return;

  // Doesn't allow commands to activate if sent via DM.

  if(message.channel.type === 'dm') return;

  // Sets the prefix

  let prefix = config.prefix;

  let messageArray = message.content.split(" ");

  let cmd = messageArray[0];

  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));

  if(commandfile) commandfile.run(bot,message,args);

  // Non-externally-handled commands.

  // xhelp - A VERY important command.

  if (cmd === `${prefix}help`){

    let botembed = new Discord.RichEmbed()

    .setAuthor("ReiX - Command List", "https://s1rythmic.s-ul.eu/ABM66XfW")

    .setTitle("Categories")

    .setTimestamp()

    .setDescription('`Fun`\n`Anime`\n`Utilities`\n`Mods`\n`Invites`\n\nType: xhelp:[category]')

    // Put in any value here. (#XXXXXX)

    .setColor('#00ffcc')

    return message.channel.send(botembed);
  }

  // xhelp - Fun

  if (cmd === `${prefix}help:Fun` || cmd === `${prefix}help:fun`){

    let botembed = new Discord.RichEmbed()

    .setAuthor("ReiX - Fun Commands", "https://s1rythmic.s-ul.eu/ABM66XfW")

    .setDescription('`xws` - Whoopity Scoop.\nMore to come!')

    .setTimestamp()

    // Put in any value here. (#XXXXXX)

    .setColor('#00ffcc')

    return message.channel.send(botembed);

  }

  // xhelp - Anime

  if (cmd === `${prefix}help:Anime` || cmd === `${prefix}help:anime`){

    let botembed = new Discord.RichEmbed()

    .setAuthor("ReiX - Anime Commands", "https://s1rythmic.s-ul.eu/ABM66XfW")

    .setDescription('Coming Soon!')

    // Put in any value here. (#XXXXXX)

    .setColor('#00ffcc')

    .setTimestamp()

    return message.channel.send(botembed);
  }

  // xhelp - Utilities

  if (cmd === `${prefix}help:Utilities` || cmd === `${prefix}help:utilities`){

    let botembed = new Discord.RichEmbed()

    .setAuthor("ReiX - Utility Commands", "https://s1rythmic.s-ul.eu/ABM66XfW")

    .setDescription('`xbotinfo` - Self explanatory.\n`xgdinfo` - Current Guild/Server information.\n`xreport` - Self explanatory.\n`xgithub` - Gives a link to the official GitHub page.\nMore to come!')

    .setTimestamp()

    // Put in any value here. (#XXXXXX)

    .setColor('#00ffcc')

    return message.channel.send(botembed);
  }

  // xhelp - Mods

  if (cmd === `${prefix}help:Mods` || cmd === `${prefix}help:mods`){

    let botembed = new Discord.RichEmbed()

    .setAuthor("ReiX - Moderator Commands", "https://s1rythmic.s-ul.eu/ABM66XfW")

    .addField("`xreport` - Reports a person.", "Usage: xreport @someone [REASON]\nCan also be used if not a Moderator.")

    .addField("`xkick` - Kicks a person.", "Usage: xkick @someone [REASON]")

    .addField("`xban` - Bans a person.", "Usage: xkick @someone [REASON]")

    .setTimestamp()

    // Put in any value here. (#XXXXXX)

    .setColor('#00ffcc')

    return message.channel.send(botembed);
  }

  // xhelp - Invites

  if (cmd === `${prefix}help:Invites` || cmd === `${prefix}help:invites`){

    let botembed = new Discord.RichEmbed()

    .setAuthor("ReiX - Invitation-based Commands", "https://s1rythmic.s-ul.eu/ABM66XfW")

    .setDescription('`xinvite` - Gives an Invitation link for the server.\n`xinviterei` - Gives a Invitation Link to invite ReiX to any server.')

    .setTimestamp()

    // Put in any value here. (#XXXXXX)

    .setColor('#00ffcc')

    return message.channel.send(botembed);
  }

});
