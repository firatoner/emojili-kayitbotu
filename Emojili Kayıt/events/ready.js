const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
module.exports = async client => {
  client.user.setPresence({ activity: { type: "WATCHING", name: `Developed By FIRAT#9999`}, status: 'online' })
};


// Status
// online - Çevrimiçi
// idle - Boşta
// dnd - Rahatsız Etmeyin

// Type
// WATCHING - İZLİYOR
// PLAYING - OYNUYOR
// LISTENING - DİNLİYOR
