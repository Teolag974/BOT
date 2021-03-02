const { Client, Message } = require("discord.js");

module.exports = {
    execute: (client, message, args) => {
        message.channel.send("Page d'aide");
    }
};