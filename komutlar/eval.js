const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')

exports.run = (client, message, args) => {
  if (message.author.id !== '788425548384174160') return;
    if (args[0] === "client.token")
    return message.channel.send(':question:')
  if (args[0] === "message.channel.send(client.token)")
    return message.channel.send(':question:')
if (args[0] === "message.channel.sendMessage(client.token)")
    return message.channel.send(':question:')
  
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));
    } catch (err) {
      message.channel.sendMessage(`\`\`\`xl\n${clean(err)}\n\`\`\``);
    }
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [kod]'
};
