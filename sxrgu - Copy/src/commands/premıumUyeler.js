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
        .setName("premiumolanlar")

        .setDescription("Premium Olan Üyeleri Gösterir.!"),
    run: async (client, interaction) => {








        pool.getConnection((err, connection) => {
            if (err) throw err
            console.log(`connected as id ${connection.threadId}`)

			console.log(interaction.member.id)
            let query = "SELECT * FROM `discordpremiummember`;"



            connection.query(query, async (err, rows) => {
                await connection.release() // return the connection to pool
                if (!err) {

                    if (rows != undefined && rows.length != 0) {
						
						
                        
                    
	let yx;	
	
	for (let index = 0; index < rows.length; index++) {
    const element = rows[index];
	
	  var baslangic = new Date(element.KullanılanGun),
                        bitis = new Date(),
                        fark = new Date(bitis - baslangic),
                        gun = Math.floor(fark / 1000 / 60 / 60 / 24);

                    let gunsayi = element.PreGun
	
	if(index ==0 ) {
		yx = await `<@${element.discordId}> =  ${Number(gunsayi) - Number(gun)} **Gün** Kaldı!\n`
	}
	else {
		yx += await `<@${element.discordId}> = ${Number(gunsayi) - Number(gun)} **Gün** Kaldı!  \n`
	}
    
}

	

                    const exampleEmbed = new EmbedBuilder()
                        .setColor(0x0099FF)
                     
                        .setAuthor({ name: 'Sxrgu Botu', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024', url: 'https://discord.gg/2CTzyhzmRf' })
                     
						
                        .addFields(
                            { name: 'Premium Olanlar', value: `${yx}` }


                        )


                        .setTimestamp()
                        .setFooter({ text: '! Klaus Joule$#0666', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024' });
              
                    interaction.reply({ embeds: [exampleEmbed] });

                    }

                    else {
                        const exampleEmbed = new EmbedBuilder()
                        .setColor("Red")
                        .setTitle('Hata!')
                        .setDescription(`Premium Üyeler Yok!`)
          
                     
          
                        .setTimestamp()
                        .setFooter({ text: '! Klaus Joule$#0666', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024' });

                      interaction.reply({ embeds: [exampleEmbed] });
                    }




                }
                else {
                      const exampleEmbed = new EmbedBuilder()
                        .setColor("Red")
                        .setTitle('Hata!')
                        .setDescription(`${err}`)
          
                     
          
                        .setTimestamp()
                        .setFooter({ text: '! Klaus Joule$#0666', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024' });

                      interaction.reply({ embeds: [exampleEmbed] });
                }

            })
        })


    }
};
