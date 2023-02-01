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
  .setName("sxrgutcgsm")
  .addStringOption(option =>
    option.setName('tc')
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

              connectionLimit: 10,
              host: 'localhost',
              user: 'root',
              password: '',
              database: 'localdb'
            })
            pool.getConnection((err, connection) => {
              if (err) throw err
              console.log(`connected as id ${connection.threadId}`)
            let query;
             
                query = 'SELECT * FROM `gsm` WHERE TC="' + value + '"'
                
           
           
              connection.query(query, async (err, rows) => {
                await connection.release() // return the connection to pool
				
                if (!err) {
		
                  let data
                  if (rows != undefined && rows.length != 0) {
                    let rows2;
        
        
                    data = "Sorgulanan: "+ value +" - Toplam Kayıt: " + rows.length + "\nTarih: ["+ moment().format("DD-MM-YYYY HH:mm:ss") +"]\n" 
                  for (let index = 0; index < rows.length; index++) {
                   
                         rows2 = await "GSM: " + rows[index].GSM + "\n"
                      
                        data += rows2;
                      }
        
              
                    
                  }
                
                  else {
                    data = "Aratmaya Çalıştığınız Kullanıcı Bulunamadı";
                  }
                  fs.writeFile("endData.txt", data, (err) => {
                    if (err)
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
          }
          else {
			  
			   var sql = `DELETE FROM discordpremiummember WHERE discordId='${interaction.member.id}'`;
			
           

              .setTimestamp()
              .setFooter({ text: '! Klaus Joule$#0666', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024' });

            interaction.reply({ embeds: [exampleEmbed] });
          }
        }
        else {
           const exampleEmbed = new EmbedBuilder()
              .setColor("Red")
              .setTitle('Hata!')
              .setDescription(`Premium Üyesi Değilsin veya bitmiş.!`)





      })

    })
  }
};
