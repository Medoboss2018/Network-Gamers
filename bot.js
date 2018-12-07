const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const moment = require("moment")
client.on("guildMemberAdd", m => {
    if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 8) {
        m.ban();
    };
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
   
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    };
});

const adminprefix = "&";
const devs = ['439393453332234243','439393453332234243'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'بلاي')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'نيم')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'افتار')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'ستريم')) {
  client.user.setGame(argresult, "https://www.twitch.tv/medo149");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});

client.on('message', message => {
            if (message.content.startsWith("$rules")) {
     let embed = new Discord.RichEmbed()
.addField('     اولا ' ,' ممنوع السب ')
.addField('     ثانيا ' ,' لا تسوي سبام  ')
.addField('     ثالثا ' ,' لا تزعج الاخرين ')
.addField('    رابعا' ,' ممنوع الاعلانات ')
.addField('    خامسا' ,' احترم الاخرين ')
.addField('    سادسا' ,' لا تنشر في الشات او بل خاص ')
.addField('    سابعا' ,' لا تنشر روابط! ')
.addField('    ثامنا' ,' لا تسوي سبام ايموجي ')
.addField('    تاسعا' ,' لا تطلب رتبه الاداره ! ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

client.on('guildMemberAdd', msg => { 
    var embed = new Discord.RichEmbed()
    .setAuthor(msg.user.username, msg.user.avatarURL)
    .setThumbnail(msg.user.avatarURL)
    .setImage('https://cdn.discordapp.com/attachments/518580986204651531/520184929435516928/unknown.png')     
    .setTitle('New Member!')
    .setDescription('Welcome To server')
    .addField('**ID Member:',"" +  msg.user.id, true)
    .addField('**Tag Member**', msg.user.discriminator, true)
    .addField('**Member Created At', msg.user.createdAt, true)
    .addField(' 👤   You Number',`**[ ${msg.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter(msg.guild.name, msg.guild.iconURL, true)
    var channel = msg.guild.channels.find('name', 'welcome')         
    if (!channel) return;
    channel.send({embed : embed});
    });

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '520726035768016901').setName("N");
client.channels.find('id', '520726035768016901').setName("Ne");
client.channels.find('id', '520726035768016901').setName("Net");
client.channels.find('id', '520726035768016901').setName("Netw");
client.channels.find('id', '520726035768016901').setName("Netwo");
client.channels.find('id', '520726035768016901').setName("Networ");
client.channels.find('id', '520726035768016901').setName("Network");
client.channels.find('id', '520726035768016901').setName("Network ");
client.channels.find('id', '520726035768016901').setName("Network G");
client.channels.find('id', '520726035768016901').setName("Network Ga");
client.channels.find('id', '520726035768016901').setName("Network Gam");
client.channels.find('id', '520726035768016901').setName("Network Game");
client.channels.find('id', '520726035768016901').setName("Network Gamer");
client.channels.find('id', '520726035768016901').setName("Network Gamers");

  }, 3000);
});

client.login(process.env.BOT_TOKEN);
