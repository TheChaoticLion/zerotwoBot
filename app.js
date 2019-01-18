const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.BOT_TOKEN
const PREFIX = '!';
bot.on('ready', () => {
    console.log('Ready')

bot.user.setStatus('Online')

bot.user.setGame('with My Darling~<3 ')

bot.user.setGame('with My Darling~ <3 | ?help', 'https://www.twitch.tv/darkestdino');

});

bot.on('message', function(message) {

    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "info":
            message.channel.sendMessage('Best Darling In The Franxx bot by TheChaoticLion');
            break;
        case "ping":
            message.channel.sendMessage("Pong!")
            break;
        //to be determined on what to do with this
        // https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=image
        case "embed":
            var embed = new Discord.RichEmbed()
                .setDescription(" ")
            message.channel.sendEmbed(embed);
            break;
        case "play":
            message.channel.sendMessage('Darling I got chu');
            break;
        case "Zero Two":
            message.channel.sendMessage("Darling!")
            break;
        case "rundown":
            message.channel.sendMessage("you know what it means bro? you know what it means?")
            break;
        case "summon":
            message.channel.sendMessage("comming!")
            break;
         case "help":
            message.channel.sendMessage("here!")
            break;
        case "queue":
        message.channel.sendMessage("Here you go Darling!")
            break;
        case "np":
            message.channel.sendMessage("Tada Darling!")
            break;
        case "skip":
            message.channel.sendMessage("Gatcha Darling!")
            break;
        case "skip f":
            message.channel.sendMessage("I Got Chu Darling!")
            break;
        case "search":
            message.channel.sendMessage("hmmmm")
            break;
        case "Shuffle":
            message.channel.sendMessage("Here Darling!")
            break;
        case "clear":
            message.channel.sendMessage("Cleaning!")
            break;
        case "pause":
            message.channel.sendMessage("On it Darling!")
            break;
        case "resume":
            message.channel.sendMessage("Workin on it Darling?")
            break;
        case "volume":
            message.channel.sendMessage("higher!")
            break;
        case "clean":
            message.channel.sendMessage("All clean Darling!")
            break;
        case "karaoke":
            message.channel.sendMessage("Lets Sing!")
            break;
        case "disconnect":
            message.channel.sendMessage("Bye Darling!")
            break;
        case "remove":
            message.channel.sendMessage("okay!")
            break;
    }
});


bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == 'Zero Two') {
        message.channel.sendMessage('Darling!');
    }
});
bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == 'lemmie give you the rundown of finna nut') {
        message.channel.sendMessage('you know what it means bro? you know what it means?');
    }
});


bot.login(token);
