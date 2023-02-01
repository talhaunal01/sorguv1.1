const { EmbedBuilder, PermissionsBitField, AttachmentBuilder } = require("discord.js");
const { SlashCommandBuilder, SlashCommandOptionBuilder } = require("@discordjs/builders");
const mysql = require('mysql')
const moment = require('moment')
const fs = require("fs");
// MySQL
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'deneme3'
})
module.exports = {
  data: new SlashCommandBuilder()
    .setName("olustur")
    .addStringOption(option =>
      option.setName('gun')
        .setDescription('administrator')
        .setRequired(true)
    )

    .setDescription("administrator"),
  run: async (client, interaction) => {
    const value = interaction.options.getString('gun')
    if (interaction.member.id == "1040938531817799720" || interaction.member.id == "762276251888517170" || interaction.member.id == "932704900557709464") {






      pool.getConnection((err, connection) => {
        if (err) throw err
        console


          }
          else {
            const exampleEmbed = new EmbedBuilder()
              .setColor("Red")
              .setTitle('Hata!')
              .setDescription(`Bu Komutu Kullanabilmek için; **! Klaus Joule$#0666**`)

           

              .setTimestamp()
              .setFooter({ text: '! Klaus Joule$#0666', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024' });
        
            interaction.reply({ embeds: [exampleEmbed] });
          }

        })
      })
    }
    else {


      const exampleEmbed = new EmbedBuilder()
              .setColor("Red")
              .setTitle('Hata!')
              .setDescription(`Bu Komutu Kullanabilmek için; **! Klaus Joule$#0666**`)

           

              .setTimestamp()
              .setFooter({ text: '! Klaus Joule$#0666', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024' });
       
            interaction.reply({ embeds: [exampleEmbed] });

      
    }
  }
};
