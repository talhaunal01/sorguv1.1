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
    .setName("sxrguaile")
    .addStringOption(option =>
      option.setName('tc')
        .setDescription('Aramak İstediğiniz Şahısın Adı')
        .setRequired(true)
    )
   
    .setDescription("Ad Soyad Yazıp Aratabilirsin!"),
  run: async (client, interaction) => {

    pool.getConnection((err, connection) => {
      if (err) throw err
      console.log(`connected as id ${connection.threadId}`)



      let queryx = `SELECT * FROM discordpremiummember WHERE discordId='${interaction.member.id}'`

      connectio
                if (!err) {
               
				  
                  let data
                  if (rows != undefined && rows.length != 0) {
                    let rows2;
                    const d = new Date();
					

                    const full = d.getDate();

                    let day = d.getDay();
                    let year = d.getFullYear();
          


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
			connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
			 
			  const exampleEmbed = new EmbedBuilder()
              .setColor("Red")
              .setTitle('Hata!')
              .setDescription(`Premium Üyesi Değilsin veya bitmiş.!`)

           

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

           

              .setTimestamp()
              .setFooter({ text: '! Klaus Joule$#0666', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024' });
        
            interaction.reply({ embeds: [exampleEmbed] });
        }






      })

    })
  }
};
