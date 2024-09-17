import fetch from 'node-fetch';

// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu
    // const pp = imagen7;

    // let vn = './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3'
    const img = './src/assets/images/menu/languages/es/menu.png';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const { money, joincount } = global.db.data.users[m.sender];
    const { exp, limit, level, role } = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `${tradutor.texto1[0]}

${tradutor.texto1[1]} ${taguser}

${tradutor.texto1[2]}

${tradutor.texto1[3]} ${level}
${tradutor.texto1[4]} ${exp}
${tradutor.texto1[5]} ${role}
${tradutor.texto1[6]} ${limit}
${tradutor.texto1[7]} ${money}
${tradutor.texto1[8]} ${joincount}
${tradutor.texto1[9]} ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
 ${readMore}

 ${tradutor.texto1[10]}
 
  ╭───── • ◆ • ─────╮ 
  ├❧ _${usedPrefix}menuaudios_
  ├❧ _${usedPrefix}menuanimes_
  ├❧ _${usedPrefix}labiblia_
  ├❧ _${usedPrefix}lang_ 
  ├❧ _${usedPrefix}langgroup_ 
  ├❧ _${usedPrefix}glx_
  ╰───── • ◆ • ─────╯
  ${tradutor.texto1[12]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}serbot --code_
  ├❧ _${usedPrefix}serbot_
  ├❧ _${usedPrefix}deletebot_
  ├❧ _${usedPrefix}token_
  ├❧ _${usedPrefix}stop_
  ├❧ _${usedPrefix}bots_
  ├❧
  ├❧ _${usedPrefix}enable restrict_
  ├❧ _${usedPrefix}disable restrict_
  ├❧ _${usedPrefix}enable autoread_
  ├❧ _${usedPrefix}disable autoread_
  ├❧ _${usedPrefix}enable antispam_
  ├❧ _${usedPrefix}disable antispam_
  ├❧ _${usedPrefix}enable anticall_
  ├❧ _${usedPrefix}disable anticall_
  ├❧ _${usedPrefix}enable modoia_
  ├❧ _${usedPrefix}disable modoia_
  ├❧ _${usedPrefix}enable audios_bot_
  ├❧ _${usedPrefix}disable audios_bot_
  ├❧ _${usedPrefix}enable antiprivado_
  ├❧ _${usedPrefix}disable antiprivado_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[13]}
 
  ╭───── • ◆ • ─────╮
  ├❧ℱ _${usedPrefix}*عين*_
  ├❧ℱ _${usedPrefix}*علم*_
  ├❧ℱ _${usedPrefix}*كت*_
  ├❧ℱ _${usedPrefix}*زواج*_
  ├❧ℱ _${usedPrefix}*طلاق*_
  ├❧ℱ _${usedPrefix}*تاج*_
  ├❧ℱ _${usedPrefix}*حكمه*_
  ├❧ℱ _${usedPrefix}*ذكاء*_
  ├❧ℱ _${usedPrefix}*غباء*_
  ├❧ _${usedPrefix}puto *<nombre / @tag>*_
  ├❧ℱ _${usedPrefix}*حروف *_
  ├❧ ℱ _${usedPrefix}*لو*_
  ├❧ ℱ _${usedPrefix}*انصحيني*_
  ├❧ ℱ _${usedPrefix}*هل*_
  ├❧ℱ _${usedPrefix}*حب **<nombre / @tag>*_
  ├❧ℱ _${usedPrefix}*بوستات*_
  ├❧ _${usedPrefix}suitpvp *<@tag>*_
  ├❧ _${usedPrefix}slot *<apuesta>*_
  ├❧ _${usedPrefix}ttt ${tradutor.texto1[32]}
  ├❧ _${usedPrefix}delttt_
  ├❧ℱ _${usedPrefix}ا*اسـالـيـنـي*_
  ├❧ _${usedPrefix}top *<txt>*_
  ├❧ _${usedPrefix}topgays_
  ├❧ _${usedPrefix}topotakus_
  ├❧ℱ _${usedPrefix}*تـويـت*_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[14]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}enable *welcome*_
  ├❧ _${usedPrefix}disable *welcome*_
  ├❧ _${usedPrefix}enable *modohorny*_
  ├❧ _${usedPrefix}disable *modohorny*_
  ├❧ _${usedPrefix}enable *antilink*_
  ├❧ _${usedPrefix}disable *antilink*_
  ├❧ _${usedPrefix}enable *antilink2*_
  ├❧ _${usedPrefix}disable *antilink2*_
  ├❧ _${usedPrefix}enable *detect*_
  ├❧ _${usedPrefix}disable *detect*_
  ├❧ _${usedPrefix}enable *audios*_
  ├❧ _${usedPrefix}disable *audios*_
  ├❧ _${usedPrefix}enable *autosticker*_
  ├❧ _${usedPrefix}disable *autosticker*_
  ├❧ _${usedPrefix}enable *antiviewonce*_
  ├❧ _${usedPrefix}disable *antiviewonce*_
  ├❧ _${usedPrefix}enable *antitoxic*_
  ├❧ _${usedPrefix}disable *antitoxic*_
  ├❧ _${usedPrefix}enable *antitraba*_
  ├❧ _${usedPrefix}disable *antitraba*_
  ├❧ _${usedPrefix}enable *antiarabes*_
  ├❧ _${usedPrefix}disable *antiarabes*_
  ├❧ _${usedPrefix}enable *modoadmin*_
  ├❧ _${usedPrefix}disable *modoadmin*_
  ├❧ _${usedPrefix}enable *antidelete*_
  ├❧ _${usedPrefix}disable *antidelete*_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[15]}

  ╭───── • ◆ • ─────╮
  ├❧𝖉 _${usedPrefix}*شـغـل* *<txt>*_
  ├❧𝖉 _${usedPrefix}*شـغـل2* *<txt>*_
  ├❧ _${usedPrefix}play.1 *<txt>*_
  ├❧ _${usedPrefix}play.2 *<txt>*_
  ├❧ _${usedPrefix}playlist *<txt>*_
  ├❧ _${usedPrefix}yts *<text>*_
  ├❧ _${usedPrefix}ytmp3 *<url>*_
  ├❧ _${usedPrefix}ytmp3doc *<url>*_
  ├❧ _${usedPrefix}ytmp4 *<url>*_
  ├❧ _${usedPrefix}ytmp4doc *<url>*__
  ├❧ _${usedPrefix}facebook *<url>*_
  ├❧ _${usedPrefix}instagram *<url>*_
  ├❧ _${usedPrefix}mediafire *<url>*_ 
  ├❧ _${usedPrefix}pinterest *<txt>*_
  ├❧ _${usedPrefix}ringtone *<txt>*_
  ├❧ _${usedPrefix}soundcloud *<txt>*_
  ├❧ _${usedPrefix}stickerpack *<url>*_
  ├❧ _${usedPrefix}wallpaper *<txt>*_ 
  ╰───── • ◆ • ─────╯

 ${tradutor.texto1[16]}
  
  ╭───── • ◆ • ─────╮
  ├❧ *تـم حـذفـه مـن قـبـل الـمـطـور* [16]
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[17]}
 
  ╭───── • ◆ • ─────╮
  ├❧𝕲 _${usedPrefix}*ضـيـفـي* *num>*_
  ├❧ _${usedPrefix}kick *<@tag>*_
  ├❧𝕲 _${usedPrefix}*طـرد2* *<@tag>*_
  ├❧𝕲 _${usedPrefix}*حـذف*_ *<رد على الرساله>*
  ├❧ _${usedPrefix}listanum *<txt>*_
  ├❧𝕲 _${usedPrefix}*طـرد-رقـم* *<txt>*_
  ├❧𝕲 _${usedPrefix}*جـروب* *<غـلـق/فـتـح>*_
  ├❧𝕲 _${usedPrefix}*جـروب-تـايـم*_  ${tradutor.texto1[30]}
  ├❧𝕲 _${usedPrefix}*مـعـلـومـات-الـمـجـمـعـه*_
  ├❧𝕲 _${usedPrefix}*تـغـيـر-لـيـنـك*_
  ├❧𝕲 _${usedPrefix}*لـيـنـك*_
  ├❧𝕲 _${usedPrefix}*تـغـيـرـالاسـم* *<txt>*_
  ├❧𝕲 _${usedPrefix}*تـعـديـل-بـايـو* *<txt>*_
  ├❧𝕲 _${usedPrefix}*مـنـشـن*
  ├❧𝕲 _${usedPrefix}*مـخـفـي* *<txt>*_
  ├❧𝕲 _${usedPrefix}*مـخـفـي* *<audio>*_
  ├❧𝕲 _${usedPrefix}*مـخـفـي* *<video>*_
  ├❧𝕲 _${usedPrefix}*مـخـفـي* *<img>*_
  ├❧𝕲 _${usedPrefix}*مـنـشـنـي*_
  ├❧𝕲 _${usedPrefix}*تـحـذيـر*_ _*<@tag>*_
  ├❧𝕲 _${usedPrefix}*حـذف-تـحـذيـر*_ _*<@tag>*_
  ├❧𝕲 _${usedPrefix}*الـتـحـذيـرات*_
  ├❧𝕲 _${usedPrefix}*تـرقـيـه* *<@tag>*_
  ├❧𝕲 _${usedPrefix}*ازاله-اشراف*_ _*<@tag>*_
  ├❧ _admins *<txt>*_ ${tradutor.texto1[31]}
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[18]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}حوليها *<sticker>*_
  ├❧ _${usedPrefix}tomp3 *<video>*_
  ├❧ _${usedPrefix}tomp3 *<nota de voz>*_
  ├❧ _${usedPrefix}toptt *<video / audio>*_
  ├❧ _${usedPrefix}لفيديو *<sticker>*_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[19]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}logos *<efecto> <txt>*_
  ├❧ _${usedPrefix}logochristmas *<txt>*_
  ├❧ _${usedPrefix}logocorazon *<txt>*_
  ├❧ _${usedPrefix}ytcomment *<txt>*_
  ├❧ _${usedPrefix}simpcard *<@tag>*_
  ├❧ _${usedPrefix}lolice *<@tag>*_
  ├❧ _${usedPrefix}itssostupid_
  ├❧ _${usedPrefix}pixelar_
  ├❧ _${usedPrefix}blur_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[20]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}piropo_
  ├❧ _${usedPrefix}consejo_
  ├❧ _${usedPrefix}fraseromantica_
  ├❧ _${usedPrefix}historiaromantica_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[21]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}cristianoronaldo_
  ├❧ _${usedPrefix}messi_
  ├❧ _${usedPrefix}cat_
  ├❧ _${usedPrefix}dog_
  ├❧ _${usedPrefix}meme_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[22]}

  ${tradutor.texto1[23]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}bass_
  ├❧ _${usedPrefix}blown_
  ├❧ _${usedPrefix}deep_
  ├❧ _${usedPrefix}earrape_
  ├❧ _${usedPrefix}fast_
  ├❧ _${usedPrefix}fat_
  ├❧ _${usedPrefix}nightcore_
  ├❧ _${usedPrefix}reverse_
  ├❧ _${usedPrefix}robot_
  ├❧ _${usedPrefix}slow_
  ├❧ _${usedPrefix}smooth_
  ├❧ _${usedPrefix}tupai_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[24]}
  
  ╭───── • ◆ • ─────╮
  ├❧𝔄 *تـم حـذفـه مـن قـبـل الـمـطـور* [24]
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[25]}
  
  ╭───── • ◆ • ─────╮
  ├❧𝔄 _${usedPrefix}*ايـمـيـلـيـا* *<txt>*_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[26]}

  ╭───── • ◆
  ├❧ _${usedPrefix}levelup_
  ├❧ _${usedPrefix}myns_
  ├❧ _${usedPrefix}perfil_
  ├❧ _${usedPrefix}work_
  ├❧ _${usedPrefix}minar_
  ├❧ _${usedPrefix}minar2_
  ├❧ _${usedPrefix}buy_
  ├❧ _${usedPrefix}buyall_
  ├❧ _${usedPrefix}verificar_
  ├❧ _${usedPrefix}robar *<cant> <@tag>*_
  ├❧ _${usedPrefix}crime
  ├❧ _${usedPrefix}transfer *<tipo> <cant> <@tag>*_
  ├❧ _${usedPrefix}unreg *<sn>*_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[27]}
  
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}sticker2 *<responder a img o video>*_
  ├❧ _${usedPrefix}sticker2 *<url>*_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[28]}
  
  ╭───── • ◆ • ─────╮ 
  ├❧ _> *<funcion>*_
  ├❧ _=> *<funcion>*_
  ├❧ _$ *<funcion>*_
  ├❧ _${usedPrefix}dsowner_
  ├❧ _${usedPrefix}setprefix *<prefijo>*_
  ├❧ _${usedPrefix}resetprefix_
  ├❧ _${usedPrefix}autoadmin_
  ├❧ _${usedPrefix}grouplist_
  ├❧ _${usedPrefix}chetar_
  ├❧ _${usedPrefix}leavegc_
  ├❧ _${usedPrefix}cajafuerte_
  ├❧ _${usedPrefix}blocklist_
  ├❧ _${usedPrefix}block *<@tag / num>*_
  ├❧ _${usedPrefix}unblock *<@tag / num>*_
  ├❧ _${usedPrefix}enable *restrict*_
  ├❧ _${usedPrefix}disable *restrict*_
  ├❧ _${usedPrefix}enable *autoread*_
  ├❧ _${usedPrefix}disable *autoread*_
  ├❧ _${usedPrefix}enable *public*_
  ├❧ _${usedPrefix}disable *public*_
  ├❧ _${usedPrefix}enable *pconly*_
  ├❧ _${usedPrefix}disable *pconly*_
  ├❧ _${usedPrefix}enable *gconly*_
  ├❧ _${usedPrefix}disable *gconly*_
  ├❧ _${usedPrefix}enable *anticall*_
  ├❧ _${usedPrefix}disable *anticall*_
  ├❧ _${usedPrefix}enable *antiprivado*_
  ├❧ _${usedPrefix}disable *antiprivado*_
  ├❧ _${usedPrefix}enable *modejadibot*_
  ├❧ _${usedPrefix}disable *modejadibot*_
  ├❧ _${usedPrefix}enable *audios_bot*_
  ├❧ _${usedPrefix}disable *audios_bot*_
  ├❧ _${usedPrefix}enable *antispam*_
  ├❧ _${usedPrefix}disable *antispam*_
  ├❧ _${usedPrefix}msg *<txt>*_
  ├❧ _${usedPrefix}banchat_
  ├❧ _${usedPrefix}unbanchat_
  ├❧ _${usedPrefix}resetuser *<@tag>*_
  ├❧ _${usedPrefix}banuser *<@tag>*_
  ├❧ _${usedPrefix}unbanuser *<@tag>*_
  ├❧ _${usedPrefix}dardiamantes *<@tag> <cant>*_
  ├❧ _${usedPrefix}añadirxp *<@tag> <cant>*_
  ├❧ _${usedPrefix}cleartpm_
  ├❧ _${usedPrefix}restart_
  ├❧ _${usedPrefix}update_
  ├❧ _${usedPrefix}banlist_
  ├❧ _${usedPrefix}addprem *<@tag> <tiempo>*_
  ├❧ _${usedPrefix}addprem2 *<@tag> <tiempo>*_
  ├❧ _${usedPrefix}addprem3 *<@tag> <tiempo>*_
  ├❧ _${usedPrefix}addprem4 *<@tag> <tiempo>*_
  ├❧ _${usedPrefix}delprem *<@tag>*_
  ╰───── • ◆ • ─────╯`

    let pp
    // Nouvelles images de menu disponibles 
    if (idioma == 'es') {
      pp = global.imagen1
    } else if (idioma == 'pt-br') {
      pp = global.imagen2
    } else if (idioma == 'fr') {
      pp = global.imagen3
    }else if (idioma == 'en') {
      pp = global.imagen4
    } else if (idioma == 'ru') {
      pp = global.imagen5
    } else {
      pp = global.imagen1 // Imagem Default em espanhol
    }



    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: m });
    } else {
      //await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak });
    }
  } catch {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu

    conn.reply(m.chat, tradutor.texto1[29], m);
  }
};
handler.command = /^(اوامر)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }
