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
        .setName("premium")
        .addStringOption(option =>
            option.setName('key')
                .setDescription('Kullanmak İstediğiniz Keyi Giriniz.!')
                .setRequired(true)
        )

        .setDescription("Premium Kullanma.!"),
    run: async (client, interaction) => {
        const value = interaction.options.getString('key')




        pool.getConnection((err, connection) => {
            if (err) throw err
            console.log(`connected as id ${connection.threadId}`)
		
			 var baslangic = new Date("2022-12-11"),
        bitis   = new Date(),
        fark  = new Date(bitis - baslangic),
        gun  = Math.floor(fark/1000/60/60/24);
            


            let queryx = `SELECT * FROM discordpremiummember WHERE discordId='${interaction.member.id}'`
            connection.query(queryx, async (err, rows) => {
		
                await connection.release() // return the connection to pool
                if (rows == undefined || rows.length == 0) {
                    
             

          

            let query = `SELECT * FROM keysx WHERE keyx='${value}'`



            connection.query(query, async (err, rows) => {
             
            
                if (!err) {
                    if (rows != undefined && rows.length != 0) {

                        let kullananUye = interaction.member.id
                        let preGunx = rows[0].day
                        let query = `INSERT INTO discordpremiummember (discordId, KullanılanGun, PreGun) VALUES ('${kullananUye}', '${bitis}', '${preGunx}');`
                        connection.query(query, async (err, rows) => {



                            if (!err) {




                                let query = `DELETE FROM keysx WHERE keyx='${value}'`
                                connection.query(query, async (err, rows) => {
        
        
        
                                    if (!err) {
        
        
        
										  const exampleEmbed = new EmbedBuilder()
              .setColor(0x0099FF)
              .setTitle('Key Kullanıldı!')
              .setAuthor({ name: 'Key Generator', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024', url: 'https://discord.gg/2CTzyhzmRf' })
              .setDescription(`${value}`)

              .addFields(
                { name: 'Premium Süresi', value: `${preGunx} **Gün**` }


              )


              .setTimestamp()
              .setFooter({ text: '! Klaus Joule$#0666', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024' });
   
            interaction.reply({ embeds: [exampleEmbed] });
        
        
        
        
    
        
        
        
        
        
        
        
        
                                    }
                                    else {
                                         const exampleEmbed = new EmbedBuilder()
              .setColor("Red")
              .setTitle('Hata!')
              .setDescription(`Girilen Key Kullanılmış Yada Hatalı !`)

           

              .setTimestamp()
              .setFooter({ text: '! Klaus Joule$#0666', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024' });
         
            interaction.reply({ embeds: [exampleEmbed], ephemeral: true });
                                    }
        
                                })




                             








                            }
                            else {
                                 const exampleEmbed = new EmbedBuilder()
              .setColor("Red")
              .setTitle('Hata!')
              .setDescription(`Girilen Key Kullanılmış Yada Hatalı !`)

           

              .setTimestamp()
              .setFooter({ text: '! Klaus Joule$#0666', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024' });

            interaction.reply({ embeds: [exampleEmbed], ephemeral: true});
                            }

                        })









                    }


                    else {
                          const exampleEmbed = new EmbedBuilder()
              .setColor("Red")
              .setTitle('Hata!')
              .setDescription(`Girilen Key Kullanılmış Yada Hatalı !`)

           

              .setTimestamp()
              .setFooter({ text: '! Klaus Joule$#0666', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024' });

            interaction.reply({ embeds: [exampleEmbed],ephemeral: true });
                    }


                }
                else {
                   c
                }

            })
                 }
                 else {
					  const exampleEmbed = new EmbedBuilder()
              .setColor("Red")
              .setTitle('Hata!')
              .setDescription(`Zaten Premium Üyesin!.`)

           

              .setTimestamp()
              .setFooter({ text: '! Klaus Joule$#0666', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024' });

            interaction.reply({ embeds: [exampleEmbed],ephemeral: true });
                    
                 }

        })
        })
    }
};
