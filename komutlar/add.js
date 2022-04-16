const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
exports.run = async (client, message, args) => {

    let id = args[0];
    if (!id) return message.channel.send("Enter the Bot ID.")
    if(isNaN(args[0])) return message.channel.send('Enter the Bot ID.')
  message.channel.send(`:thumbsup: Added bot (<#961478034123259954>)\n:warning: **Sunucudan Çıkarsanız, Botunuz banlanır ve bir daha bot ekleyemezsiniz!**`)
  
  
     const embed = new Discord.RichEmbed()
       .setColor('#7289DA')
  .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .addField(`Developer`, `
${message.author} (${message.author.username}#${message.author.discriminator}) (${message.author.id})`)
     .addField(`Bot`, `<@${id}> (${id}) [Add (0)](https://discord.com/oauth2/authorize?client_id=${id}&permissions=0&scope=bot&guild_id=940234766115012658)`)
     .addField(`Actions`, `**Approve**\n-a ${message.author.id} ${id}\n**Decline**\n-d ${message.author.id} ${id}`)
   client.channels.get(`961479009030516736`).send(embed)
   db.add('sira', 1)
   client.channels.get(`961478034123259954`).send(`:yellow_circle: <@${message.author.id}> added <@${id}> (<@&949382887508152412>) **Current Rank: ${db.fetch("sira") || '0'}**`)


}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'add'
};
