const Discord = require('discord.js');
const token = 'NjgxNDQwNjkyOTU4MTM0MzU3.XlQFIQ.s3WaWMXnFWTHFLZdErHPiZLTa7c';

const client = new Discord.Client();

client.on('message',(msg) => {
  if (msg.content === '!staff') {
    msg.channel.send(`Hallo ${msg.author}. Ons staffteam zie je aan de zijkant!`);
  }
})

client.on('ready', () => {
  console.log('Bot is now connected');

  //  client.channels.find(x => x.name === 'test').send('Hello! i\'m now connected!');
});

btoa.login(process.env.token);
