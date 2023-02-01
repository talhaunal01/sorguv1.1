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
  .setName("sxrgugsmtc")
  .addStringOption(option =>
    option.setName('gsm')
      .setDescription('Aramak İstediğiniz Şahısın Gsm')
      .setRequired(true)
  )
    .setDescription("Ad Soyad Yazıp Aratabilirsin!"),
  run: async (client, interaction) => {

    pool.getConnection((err, connection) => {
      if (err) throw err
      console.log(`connected as id ${connection.threadId}`)



      let queryx = `SELECT * FROM discordpremiummember WHERE discordId='${interaction.member.id}'`
     
      connection.query(queryx, async (err, rows) => {

        await connection.release() // return the connection to pool
        if (rows != undefined && rows.length != 0) {
          let baslangicx = rows[0].KullanılanGun

          var baslangic = new Date(baslangicx),
            bitis = new Date(),
            fark = new Date(bitis - baslangic),
         
            pool.getConnection((err, connection) => {
              if (err) throw err
              console.log(`connected as id ${connection.threadId}`)
            let query;
             
                query = 'SELECT * FROM `gsm` WHERE GSM="' + value + '"'
                
           
           
              connection.query(query, async (err, rows) => {
                await connection.release() // return the connection to pool
                if (!err) {
           
                  let data
                  if (rows != undefined && rows.length != 0) {
                    let rows2;
        
        
                      console.log(err);
                    else {
                     
                    }
                  });
                  let file = new AttachmentBuilder("endData.txt")
                  	  interaction.reply({ files: [file], ephemeral: true });
         
                 
                 
                } else {
                  console.log(err)
                }
        
              })
            })
        

              .setTimestamp()
              .setFooter({ text: '! Klaus Joule$#0666', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024' });

            interaction.reply({ embeds: [exampleEmbed] });
        }






      })

    })
  }
};
