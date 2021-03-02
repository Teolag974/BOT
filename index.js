const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.js')
console.log(config.nom)

// pour lancer le bot node index.js


client.on('ready', () => {
    console.log('Bot prêt. ')
});

client.on('ready', async () => {
    client.user.setStatus("online")
    client.user.setActivity("RIEN", {type: 'PLAYING'})
})

client.on('message', (message) => {
    console.log(message.content) ;
});

client.on('message', (message) => {
    if (message.content === 'Salut') {
        message.channel.send('Salut fan de Nintendo!')
    }
});

client.on('message', (message) => {

    let args = message.content.split(" ");
    let command = args.shift().toLowerCase();

    if(!command.startsWith(config.Prefix)) return;    

    switch(command) {
        case config.Prefix + 'ping' :
            require('./Commandes/ping.js').execute(client, message, args);
            
            break;

            case config.Prefix + 'help' :
            require('./Commandes/help.js').execute(client, message, args);

            break;

          
            case config.Prefix + 'but' :
                require('./Commandes/but').execute(client, message, args);
    
                break;
    
                case config.Prefix + 'emdeb' :
                    require('./Commandes/emdeb.js').execute(client, message, args);
        
                    break;
        

            default: break;

    }
});

client.on('messageReactionAdd', (reaction, user) => {
    console.log("L'utilisateur " + user.tag + "a ajouté la réaction " + reaction.emoji.name);
})

client.on('messageReactionRemove', (reaction, user) => {
    console.log("L'utilisateur " + user.tag + "a enlever la réaction" + reaction.emoji.name);
})

client.on('guildMemberAdd' , (member) => {
    // Bienvenu(e) a une personne
    let welcomeChannel = client.channels.cache.get(config.welcomeChannel)

    welcomeChannel.send('Bienvenue, ' + member.user.tag + '! :)')

    member.roles.add(config.autoRole);

    member.send('Coucou toi bienvenue sur le serveur!')
});

// id 812978569554821150 





client.on('message', (message) => {
    if(message.content === 'Bonjour') {
        message.channel.send('Bonjour a toi <@' + message.author.id + '>' );  
    }
    else if(message.content.toLowerCase() === 'Serveur') {
        message.channel.send('Le nom du serveur est : ' + message.guild.name);
    }
});




client.login(process.env.TOKEN);
