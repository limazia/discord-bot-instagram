// const Discord = require("discord.js");
const { createCanvas, loadImage } = require('canvas');
const request = require('node-superfetch');
const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
 name: "instagram",
  aliases: ["ig", "insta"],
  category: "socmed",
  description: "share instagram",
  run: async (client, message, args, user) => { 
        let prefix = process.env.PREFIX
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

      if(!args[0]) return message.channel.send("**Please usage :** `h,ig <your instagram name>`\n**Example :** `h,ig andrihermawan`")
  
let DelayMsg = await message.channel.send('**Loading...**')
    setTimeout(() => {
    let embed = new MessageEmbed()
    //.setTitle('Instagram Search')
    .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
    .setDescription(`<a:instagram:801033737952690236> Instagram: @**${args}**\n** <a:instagram:801033737952690236> Link Instagram: [Click Here](https://www.instagram.com/${args}/)**`)
    .setColor("#2f3136")
    .setFooter(`Message by ${message.author.username}`)
    .setTimestamp(message.timestamp = Date.now())
    
   DelayMsg.edit(embed)
  },5000)
    
    
  }
}
