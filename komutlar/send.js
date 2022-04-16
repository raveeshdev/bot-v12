const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {

      if(!message.member.hasPermission("BAN_MEMBERS")) return

  if(!args[0]) return
  let yazı = args.slice(0).join(' ');
  if(yazı.includes('token') || yazı.includes('@everyone') || yazı.includes('@here')) return
  message.channel.send(yazı)



}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'send'
};