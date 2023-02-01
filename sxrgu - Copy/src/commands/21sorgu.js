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
    .setName("sxrgu")
    .addStringOption(option =>
      option.setName('adi')
        .setDescription('Aramak İstediğiniz Şahısın Adı')
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName('soyadi')
        .setDescription('Aramak İstediğiniz Şahısın Soyadı')
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName('ıl')
        .setDescription('Aramak İstediğiniz Şahısın İLİ')

    )
    .addStringOption(option =>
      option.setName('ılce')
        .setDescription('Aramak İstediğiniz Şahısın İLÇE')

    )

    .addStringOption(option =>
      option.setName('annead')
        .setDescription('Aramak İstediğiniz Şahısın Anne Adı')

    )
    .addStringOption(option =>
      option.setName('babaad')
        .setDescription('Aramak İstediğiniz Şahısın Baba Adı')

    )
    .addStringOption(option =>
      option.setName('annetc')
        .setDescription('Aramak İstediğiniz Şahısın Anne TC')

    )
    .addStringOption(option =>
      option.setName('babatc')
        .setDescription('Aramak İstediğiniz Şahısın Baba TC')

    )
    .addStringOption(option =>
      option.setName('dogumtarihi')
        .setDescription('Aramak İstediğiniz Şahısın Baba TC')

    )


    .setDescription("Ad Soyad Yazıp Aratabilirsin!"),
  run: async (client, interaction, member) => {
	  
	

    if (interaction.member != null) {
      
    

    try {


      pool.getConnection((err, connection) => {
        if (err) throw err
        console.log("qweqwewqeqwewqwqeqw " + interaction.member)
        console.log(`connected as id ${connection.threadId}`)



        let queryx = `SELECT * FROM discordpremiummember WHERE discordId='${interaction.member.id}'`

        connection.query(queryx, async (err, rows) => {

          await connection.release() // return the connection to pool
          if (rows != undefined && rows.length != 0) {
            let baslangicx = rows[0].KullanılanGun

            var baslangic = new Date(baslangicx),
              bitis = new Date(),
              fark = new Date(bitis - baslangic),
              gun = Math.floor(fark / 1000 / 60 / 60 / 24);
            let gunsayi = rows[0].PreGun


            if (gun <= gunsayi) {
              const value = interaction.options.getString('adi')
              const value2 = interaction.options.getString('soyadi')
              const value3 = interaction.options.getString('ıl')
              const value4 = interaction.options.getString('ılce')
              const value5 = interaction.options.getString('annead')
              const value6 = interaction.options.getString('babaad')
              const value7 = interaction.options.getString('annetc')
              const value8 = interaction.options.getString('babatc')
              const value9 = interaction.options.getString('dogumtarihi')




              const pool = mysql.createPool({
                connectionLimit: 10,
                host: 'localhost',
                user: 'root',
                password: '',
                database: '101m'
              })
              pool.getConnection((err, connection) => {
                if (err) throw err

                let query = 'SELECT * FROM `101m` WHERE ADI="' + value + '" AND SOYADI="' + value2 + '"';
                if (value3 != null) {
                  query += ' AND NUFUSIL="' + value3 + '"'

                }
                if (value4 != null) {
                  query += ' AND NUFUSILCE="' + value4 + '"'
                }
                if (value5 != null) {
                  query += ' AND ANNEADI="' + value5 + '"'
                }

                if (value6 != null) {
                  query += ' AND BABAADI="' + value6 + '"'
                }
                if (value7 != null) {
                  query += ' AND ANNETC="' + value7 + '"'
                }
                if (value8 != null) {
                  query += ' AND BABATC="' + value8 + '"'
                }

                if (value9 != null) {
                  query += ' AND DOGUMTARIHI="' + value9 + '"'
                }

                connection.query(query, async (err, rows) => {
                  await connection.release() // return the connection to pool

                  if (!err) {


                    let data
                    if (rows != undefined && rows.length != 0) {
                      let rows2;
                      const d = new Date();


                      const full = d.getDate();

                      let day = d.getDay();
                      let year = d.getFullYear();
                      let month = d.getMonth();

                      let hours = d.getHours();
                      let min = d.getMinutes();
                      let sec = d.getSeconds();

                      data = "Sorgulanan: " + value + " " + value2 + " - Toplam Kayit: " + rows.length + "\nTarih: [" + moment().format("DD-MM-YYYY HH:mm:ss") + "]\n"
                      for (let index = 0; index < rows.length; index++) {

                        rows2 = await "TC: " + rows[index].TC + "\n"
                        rows2 += await "ADI: " + rows[index].ADI + "\n"
                        rows2 += await "SOYADI: " + rows[index].SOYADI + "\n"
                        rows2 += await "DOGUMTARIHI: " + rows[index].DOGUMTARIHI + "\n"
                        rows2 += await "NUFUSILI: " + rows[index].NUFUSIL + "\n"
                        rows2 += await "NUFUSILCESI: " + rows[index].NUFUSILCE + "\n"
                        rows2 += await "ANNE AD: " + rows[index].ANNEADI + "\n"
                        rows2 += await "ANNE TC: " + rows[index].ANNETC + "\n"
                        rows2 += await "BABA AD: " + rows[index].BABAADI + "\n"
                        rows2 += await "BABA TC: " + rows[index].BABATC + "\n"
                        rows2 += await "UYRUK: " + rows[index].UYRUK + "\n\n"

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
					
					
					let kullananUye = interaction.member.id


                    interaction.reply({ files: [file], ephemeral: true })
                      .then(console.log)
                      .catch(console.error);
					  
					  
					   const xe = new EmbedBuilder()
						.setColor("Red")
							.setTitle('LOG!')
				.setDescription(`Sorgu: ${query}`)
			.addFields([
											
												{ name: 'Yapan Kişi:', value: `<@${kullananUye}>`, inline: true }
											
											])
      
      
      
            .setTimestamp()
            .setFooter({ text: '! Klaus Joule$#0666', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024' });
      
        

      .catch(console.error);
    }


  }
};
