const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: "premium",
    aliases: ["premium-help"],
    usage: '',
    description: "",
    category: "premium",
    cooldown: 0,
    userPermissions: "",
    botPermissions: "",
    ownerOnly: false,   
    toggleOff: false,
    premium: false,

    /**
     * @param {Client} client 
     * @param {Message} message
     * @param {String[]} args
     */

    async execute(client, message, args, ee, prefix) {
        try {

            message.reply({
                embeds: [new MessageEmbed()
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                    .setColor(ee.color)
                    .setAuthor(`Premium Features!`, client.user.displayAvatarURL())
                    .setDescription(`<a:question:995190379144028220> Get a Premium For ${client.user} in Your Server!
<:DiscordBotMaker:995155682670170212> Get Access to Advanced Features of ${client.user} with Premium!
<:nezuko:995237112486051890> Join Our Server **[Nezuko](${config.env.SUPPORT})** to Get Premium For Cheap Prize!`)]
            })

        } catch (e) {
            console.log(e)
        }
    },
};