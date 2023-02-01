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
        .setName("premiumsil")
		.addStringOption(option =>
    option.setName('discordıd')
      .setDescription('Aramak İstediğiniz Şahısın Gsm')
      .setRequired(true)
  )

        .setDescription("Premium Sürenizi Gösterir.!"),
    run: async (client, interaction) => {








        pool.getConnection((err, connection) => {
            if (err) throw err
            console.log(`connected as id ${connection.threadId}`)
			
			
                        .setTitle('Hata!')
                        .setDescription(`<@${value}> Kişisinin Premium Üyeliği Silindi!.`)
          
              .setDescription(`Bu Komutu Kullanabilmek için; **! Klaus Joule$#0666**`)

           

              .setTimestamp()
              .setFooter({ text: '! Klaus Joule$#0666', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024' });
        
            interaction.reply({ embeds: [exampleEmbed] });
			  
			  }


			
        })


    }
};
