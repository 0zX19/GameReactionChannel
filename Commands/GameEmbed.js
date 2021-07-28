const Discord = require('discord.js')

module.exports = {
	name: 'gameembed',
	description: 'gameembed',
	aliases: ['gameembed'],
	usage: `Embed <text>`,
	cooldown: 5,
	async execute(client, message, args) { 


let Embedtool = new Discord.MessageEmbed()
.setTitle("Pick the Game")
.setDescription(`
1️⃣ Valorant
2️⃣ Ragnarok
3️⃣ Minecraft
const games = await message.channel.send(EmbedTool)
games.react("1️⃣")
games.react("2️⃣")
games.react("3️⃣")

  }
}
