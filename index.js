const Discord = require('discord.js');
const client = new Discord.Client();
const randomInt = require('random-int');

client.on('ready', () => {
    client.user.setActivity('A Todos!!!', {type: 'WATCHING'});
    console.log('Listo!');
});


let prefix = process.env.DISCORD_PREFIX;

client.on('message', message => {
    if (!message.content.startsWith(prefix) || !message.guild) return;
    if (message.author.bot) return;
    
    
    const cont = message.content.split(' ').slice(1);
    const args = cont.join(' ');

    if (message.content.startsWith(prefix+'bigdick')){
        rand_num = randomInt(0, 100);
        // message.channel.send('LEAN TODOS!!! ' + message.author.username + ' es '+ rand_num + '% Big Dick.'); 
        message.reply('LEAN TODOS!!! @' + message.author.username + ' es '+ rand_num + '% Big Dick.')
          .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
          .catch(console.error);
    }
});

client.login(process.env.DISCORD_TOKEN);