const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = client => {
 // client.user.setStatus("dnd");
 // client.user.setActivity(`How's it going?`, { type: "WATCHING"});
  console.log(`Giriş yaptı`);
  //client.user.setStatus("Custom")
  //client.user.setActivity("yummy 😋", {type: "WATCHING"})

  //  client.user.setActivity("Bot", { type: "Competing"});
 // client.user.setActivity(":robot: 900+ bots added")
  //client.channels.get("767356667733082142").join();
  
  /*client.channels.get("804684766485545001").send(`\`\`\`
{
  "prefix": "prefix",
  "token": "token",
  "sahip": "id",
  // "GOOGLE_API_KEY": "AIzaSyAQU6yVeiVFaapfQA9KM982TyLoUvnaEOs"
}
\`\`\`
ayarlar.json`)*/
};
