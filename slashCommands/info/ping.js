const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  CommandInteraction,
  MessageEmbed
} = require("discord.js");

module.exports = {
  name: "ping",
  usage: '',
  description: "Gives you information on how fast the Bot can respond to you",
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
      interaction.reply({
        embeds: [new MessageEmbed()
          // .setColor("#FFD700")
          .setDescription(`<:bot:995232888880640071> **Bot Ping:** \`${(Date.now() - message.createdTimestamp)}ms\`\n\n<a:stats:995189972212666448> **Api Latency:** \`${Math.round(client.ws.ping)}ms\``, true)
        ]
      })
    } catch (err) {
      console.log(err)
    }
  }
}
