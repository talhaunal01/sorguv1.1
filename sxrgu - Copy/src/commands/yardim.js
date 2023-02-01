const { EmbedBuilder, PermissionsBitField, AttachmentBuilder } = require("discord.js");
const { SlashCommandBuilder, SlashCommandOptionBuilder } = require("@discordjs/builders");
const mysql = require('mysql')
const moment = require('moment')
const fs = require("fs");
// MySQL

module.exports = {
  data: new SlashCommandBuilder()
    .setName("yardım")
    .setDescription("Bot İle İlgili Yardımı Buradan Öğrenebilirsiniz."),
  run: async (client, interaction) => {

    const exampleEmbed = new EmbedBuilder()
              .setColor(0x0099FF)
              .setTitle('Yardım')
              .setAuthor({ name: 'Yardım Menüsü', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024', url: 'https://discord.gg/2CTzyhzmRf' })
              .setDescription(`Bot İle İlgili Yardımı Buradan Alabilirsiniz..`)

              .addFields(
			  
                { name: 'Admin Komutları', value: `/olustur **Gün**  [Yazdığın Gün Miktarı Kadar Premium Oluşturur]\n/premiumsil **discordıd** [Yazdığın Discord İDli Üyenin Premium Üyeliğini Siler]` },
                { name: 'Üye Komutları', value: `/premium **Key** [Üyelik Aktif Etme Komutu] \n /durum [Üyeliğin Hakkında Bilgi Alma Komutu]\n/premiumolanlar [Premium Üyeliğine Sahip Üyeleri Görürsünüz.]` },
                { name: 'Sxrgu Komutları', value: `/sxrgu **adı Soyadı** [Sxrguladığın Kişinin K1şisel B1lgilerini Verir.] \n/sxrgugsmtc **GSM** [Telefon Numarasını Girdiğin Kişinin TC B1lgisini Verir.]\n/sxrgutcgsm **TC** [TC Numarasını Girdiğin Kişinin Telefon B1lgisini Verir.]\n/sxrguaile **TC** [TC B1lgisini Girdiğin Kişinin B1lgilerini Verir.]` }
                
              )


              .setTimestamp()
              .setFooter({ text: '! Klaus Joule$#0666', iconURL: 'https://cdn.discordapp.com/avatars/836130819033792512/50c0c1b225b018e46dd240be2135dc4a.png?size=1024' });
         
            interaction.reply({ embeds: [exampleEmbed],ephemeral: true  });

    
  }
};
