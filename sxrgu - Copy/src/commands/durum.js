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
        .setName("durum")

        .setDescription("Premium Sürenizi Gösterir.!"),
    run: async (client, interaction) => {








        pool.getConnection((err, connection) => {
            if (err) throw err
            console.log(`connected as id ${connection.threadId}`)

			console.log(interaction.member.id)
            let query = `SELECT * FROM discordpremiummember WHERE discordId='${interaction.member.id}'`



            connection.query(query, async (err, rows) => {
                await connection.release() // return the connection to pool
                if (!err) {

                    if (rows != undefined && rows.length != 0) {
                        
                    



                    var baslangic = new Date(rows[0].KullanılanGun),
                        bitis = new Date(),
                        fark = new Date(bitis - baslangic),
                        gun = Math.floor(fark / 1000 / 60 / 60 / 24);

                    let gunsayi = rows[0].PreGun
                 


                    const exampleEmbed = new EmbedBuilder()
                        .setColor(0x0099FF)
                        .setTitle('Premium Durumun!')
                        .setAuthor({ name: 'Key Generator', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024', url: 'https://discord.gg/2CTzyhzmRf' })
                        .setDescription(`Aldığında Premiun Süren ${gunsayi} **Gündü** Ve ${gun} **Gün** Geçti!`)

                        .addFields(
                            { name: 'Premium Süren', value: `${Number(gunsayi) - Number(gun)} **Gün** Kaldı!` }


                        )


                        .setTimestamp()
                        .setFooter({ text: '! Klaus Joule$#0666', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024' });
              
                    interaction.reply({ embeds: [exampleEmbed], ephemeral: true });

                    }

                    else {
                        const exampleEmbed = new EmbedBuilder()
                        .setColor("Red")
                        .setTitle('Hata!')
                        .setDescription(`Premium Üyesi Değilsin veya bitmiş.!`)
          
                     
          
                        .setTimestamp()
                        .setFooter({ text: '! Klaus Joule$#0666', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024' });

                      interaction.reply({ embeds: [exampleEmbed], ephemeral: true });
                    }




                }
                else {
                    console.log(err)
                }

            })
        })


    }
};
