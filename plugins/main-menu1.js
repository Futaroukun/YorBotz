let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
let moment = require('moment-timezone')
let time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")

conn.sendButtonDoc(m.chat, 'Hai,Aku adalah bot yang diberi nama HU TAO BOT-MD,Aku di kembangkan oleh seseorang yang bernama A7 RAFLI [RE]🎭,Dia masih pemula dan masih belajar banyak hal,dan tujuan dia adalah membanggakan kedua orang tua, jadi mohon maaf jika masih banyak fitur yang eror,untuk melihat fitur bot,silahkan klik button di bawah\n\nNOTE: Jangan dispam dan gunakan sebaik dan sewajarnya,jika melanggar owner akan membanned user oke', data.namabot, 'Hu Tao Bot-MD', '.m', fake, { contextInfo: {
externalAdReply :{
    showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    sourceUrl: data.sc,
    title: 'Jangan Dispam Ya Kak',
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
}}})
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i

module.exports = handler


