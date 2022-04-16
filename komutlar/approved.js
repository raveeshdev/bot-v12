const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
exports.run = async (client, message, args) => {
  
    if(!message.member.hasPermission("BAN_MEMBERS")) return

    let sahip = args[0];
    let bot = args[1];
    if (!sahip) return message.channel.send("Owner ID?")
    if (!bot) return message.channel.send("Bot ID?")
  message.channel.send(`Bot Approved.`)
   client.channels.get(`961478034123259954`).send(`:green_circle: <@${sahip}> approved <@${bot}>`)
   db.delete('sira', -1)

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["a"],
  permLevel: 0
};

exports.help = {
  name: 'approved'
};
