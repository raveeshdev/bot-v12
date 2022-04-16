const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {

    let gelistirici = message.guild.roles.find("id", `961480292156178483`)
    let bot = message.guild.roles.find("id", `961480374628790272`)

    
     const embed = new Discord.RichEmbed()
       .setColor('#7289DA')
  .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
     .addField(`Total Members`, message.guild.memberCount, true)
     .addField(`Online`, message.guild.members.filter(m => m.user.presence.status === "online").size + message.guild.members.filter(m => m.user.presence.status === "dnd").size + message.guild.members.filter(m => m.user.presence.status === "idle").size, true)
     .addField(`Offline`, message.guild.members.filter(m => m.user.presence.status === "offline").size, true)
      .addField(`Total Bots`, message.guild.members.filter(m => m.user.bot).size, true)
   .addField('Added Bots', bot.members.size, true)
  .addField('Developers', gelistirici.members.size, true)
   message.channel.send(embed)


}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say'
};
