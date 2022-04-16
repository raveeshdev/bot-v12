const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
require('./util/eventLoader')(client);
const db = require('quick.db');
const express = require('express');
const app = express();
const http = require('http');
const port = 3000;
app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(port);

const log = message => {
  console.log(`BOT: ${message}`);
};


/*setInterval(() => {
  var nms = [
     "Eleven",
     "Upsidedown",
     "Tost",
     "G",
     "Tost",
     "v13 beta moruQ",
     "Disflix",
     "Eko",
     "Opped",
     "404",
     "Cake",
     "Timurca",
     "Chukyfan31",
     "Lewix"
	]
	
  var nms = nms[Math.floor(Math.random() * nms.length)];

  client.guilds.get("683005629836951799").setName(`Eleven's Base ${nms || "Banana"}`)
}, 7200000);*/



/*client.on('guildMemberAdd', member => {
  let server = client.guilds.get(`683005629836951799`)
  let channel = client.channels.get(`767356667733082142`)
  let mc = client.guilds.get(`683005629836951799`).memberCount
  
  channel.setName(`📊 Members: ${mc}`)
})

client.on('guildMemberRemove', member => {
  let server = client.guilds.get(`683005629836951799`)
  let channel = client.channels.get(`767356667733082142`)
  let mc = client.guilds.get(`683005629836951799`).memberCount
  
  channel.setName(`📊 Members: ${mc}`)*/
  
  /*
  client.guilds.get("683005629836951799").ban(member.user.id, "Left the Server.")
  client.channels.get("803194383511978004").send(`**[AUTO - ${member.user.bot ? `BOT` : `USER`} BANNED]** \`${member.user.bot ? `Bot` : `User`}: ${member.user.id}\`, \`Reason: Left the Server.\``)
 */
/*})*/

/*client.on('ready', member => {
  let server = client.guilds.get(`683005629836951799`)
  let channel = client.channels.get(`767356667733082142`)
  let mc = client.guilds.get(`683005629836951799`).memberCount
  
  channel.setName(`📊 Members: ${mc}`)
})*/



client.on('guildMemberAdd', member => {
  
    client.channels.get("940239643390120006").send(`:inbox_tray: **[${member.user.bot ? `BOT` : `MEMBER`} JOINED]** \`${member.user.bot ? `Bot` : `User`}: ${member.user.tag} - ${member.user.id}\` (${client.guilds.get("940234766115012658").memberCount})`)

})
client.on('guildMemberRemove', member => {
  
    client.channels.get("940239643390120006").send(`:outbox_tray: **[${member.user.bot ? `BOT` : `MEMBER`} LEFT]** \`${member.user.bot ? `Bot` : `User`}: ${member.user.tag} - ${member.user.id}\` (${client.guilds.get("940234766115012658").memberCount})`)

})

client.on('message', async message => {
    if (message.content === '+fakehg') {
    if (message.author.id !== '788425548384174160' && message.author.id !== '788425548384174160') return;

  client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});

client.on('message', async message => {
    if (message.content === '+fakebb') {
    if (message.author.id !== '788425548384174160' && message.author.id !== '788425548384174160') return;
        client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));
    }
});


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

////////////////////////

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  return permlvl;
};

client.login(process.env.token);

