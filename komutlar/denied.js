const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
    if(!message.member.hasPermission("BAN_MEMBERS")) return

    let sahip = args[0];
    let bot = args[1];
    let sebep = args[2];
    if (!sahip) return message.channel.send("Owner ID?")
    if (!bot) return message.channel.send("Bot ID?")
    if (!sebep) return message.channel.send("Denied Reason?")
  message.channel.send(`Bot Denied.`)
   client.channels.get(`961478034123259954`).send(`:red_circle: <@${sahip}> denied <@${bot}> (Reason: Rule ยง${sebep})`)
   db.delete('sira', -1)

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["d"],
  permLevel: 0
};

exports.help = {
  name: 'denied'
};
