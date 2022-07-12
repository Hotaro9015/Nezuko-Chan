const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const ee = require(`${process.cwd()}/structures/botconfig/embed.json`);
const {
    MessageEmbed,
    MessageButton,
    MessageActionRow
} = require("discord.js");

module.exports = async (client) => {
    const description = {
        name: "Bot Invited Msg",
    }
    client.logger(`〢 Module: Loaded ${description.name}`.bold.green);

    client.on("guildCreate", async (guild) => {
        const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'));

    let msgembed = new MessageEmbed()
        .setTitle(`Thanks For Adding Me!`)
        .setDescription(`> Hey, Thanks For Adding Me To **${guild.name}**\n> My Prefix Is \`${config.env.PREFIX}\`\n\n> To Get Started Type \`${config.env.PREFIX}help\` or \`/help\``)
        .setColor(ee.color)
        .setFooter('Thanks For Inviting Me!')
        .setImage(ee.gif)
        .setTimestamp()

    let supportbutton = new MessageButton()
            .setStyle("LINK")
            .setLabel("Join Support!")
            // .setEmoji('❤️')
            .setURL(config.env.SUPPORT)  

    let invitebutton = new MessageButton()
            .setStyle("LINK")
            .setLabel("Invite Me!")
            // .setEmoji('✅')
            .setURL(config.env.INVITE)

/*    let websitebutton = new MessageButton()
            .setStyle("LINK")
            .setLabel("Check Website!")
            // .setEmoji('🌐')
            .setURL("discord.gg/decoders")*/

    const row = new MessageActionRow()
        .addComponents(supportbutton, invitebutton);

    if (!channel) return;
    await channel.send({
        embeds: [msgembed],
        components: [row]
    }).catch(err => console.log('I was unable to send guildCreate message.'));
    });
    
};