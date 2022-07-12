const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const ee = require(`${process.cwd()}/structures/botconfig/embed.json`);
const {
    Client,
    CommandInteraction,
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: "help",
    usage: '[command]',
    description: "Sends a menu with options!",
    category: "info",
    cooldown: 5,
    userPermissions: "",
    botPermissions: "",
    ownerOnly: false,
    toggleOff: false,

    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    async execute(client, interaction, args, ee) {

        try {
            return interaction.reply({
                embeds: [new MessageEmbed()
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                    .setAuthor(`${client.user.username} Help Menu`, client.user.displayAvatarURL())
                    .setColor(`#FFD700`)
                    .addFields({
                        name: `<:Info:995154442582249574>┃Information`,
                        value: `${client.slashCommands.filter((cmd) => cmd.category === "info").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                        name: `<:music:995155224023015485>┃Music`,
                        value: `${client.slashCommands.filter((cmd) => cmd.category === "music").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                        name: `<:setup:995155405904822413>┃Setup`,
                        value: `${client.slashCommands.filter((cmd) => cmd.category === "setup").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                        name: `<:moderation:995155555687596073>┃Moderation`,
                        value: `${client.slashCommands.filter((cmd) => cmd.category === "moderation").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                        name: `<a:tada:995156179980398664>┃Giveaway`,
                        value: `${client.slashCommands.filter((cmd) => cmd.category === "giveaway").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                        name: `<:Ticket:995156336805429319>┃Ticket`,
                        value: `${client.slashCommands.filter((cmd) => cmd.category === "ticket").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                        name: `<:utility:995156504518856775>┃Utility`,
                        value: `${client.slashCommands.filter((cmd) => cmd.category === "utility").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, )
                ],
                ephemeral: true
            })

        } catch (e) {
            console.log(String(e.stack).bgRed)
        }
    }
}