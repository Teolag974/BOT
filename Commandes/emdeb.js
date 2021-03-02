const { Client, Message } = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports.execute = (client, message, args) => {
    let emdeb = new MessageEmbed()
        .setTitle("Titre  de l'embed")
        .setURL("https://www.instagram.com/accounts/onetap/?next=%2F&hl=fr")
        .setColor("#17dfe6")
        .setDescription("**Markdown**\nNouvelle ligne\n\ntest")
        .addField("Abonnez-vous =)", ">**Merci =)**")
        .addField("Inline 1" , "hgfg", true)
        .addField("Inline 2" , "hgfg", true)
        .addField("Inline 3" , "hgfg", true)
        .addField("Inline 4" , "hgfg", true)
     
        message.channel.send(emdeb);
}