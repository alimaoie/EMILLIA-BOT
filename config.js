import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import moment from 'moment-timezone';

global.botnumber = "48459430499"
global.confirmCode = ""
global.authFile = `MysticSession`;

// Cambiar a true si el Bot responde a sus comandos con otros comandos.
// Cambiar a false para usar el Bot desde el mismo numero del Bot.
// Error de m.isBaileys marcado como false fix temporal
global.isBaileysFail = false

global.owner = [
  ['212760517793', '👑 Mystic - Creador 👑', true],
  ['212760517793', '💫 Mystic - Collaborator 2 💫', true],
  ['212760517793', '💫 Mystic - Collaborator 3 💫', true],
  ['212760517793', '💫 Mystic - Collaborator 4 💫', true],
  ['212760517793', '💫 Mystic - Collaborator 5 💫', true],
  ['212760517793', '💫 Mystic - Collaborator 6 💫', true],
  ['212760517793', '💫 Mystic - Rey Endymion 💫', false],
  ['212760517793', '💫 Mystic - Collaborator 8 💫', true],
  ['212760517793', '💫 Mystic - OfcDiego', true],
  ['212760517793', '💫 Mystic - By Alba070503 💫', true],
  ['212760517793', '💫 Mystic - Gabriel Ofc', true], 
  ['212760517793', '💫 Mystic - Tester Fabri115💫', true],
  ['212781160203', '💫 Mystic - Saad 💫', true], 
  ['5217778573223', '💫 Mystic - Sarethh 💫', true],
  ['212760517793'],
  ['212760517793'],
  ['212760517793'],
  ['212760517793'],
  ['212760517793'], 
  ['212760517793'],  
  ['212760517793'],
  ['212760517793'],
  ['212760517793'],
  ['212760517793'], 
  ['212760517793'], 
  ['212760517793'],
  ['212760517793'],
  ['212760517793'],
  ['212760517793'],
  ['212760517793'], 
  ['212760517793'],
  ['212760517793'],
  ['212760517793'],
  ['212760517793'],
  ['212760517793']
];

global.suittag = ['212760517793'];
global.prems = ['212760517793'];

global.packname = 'Sticker';
global.author = 'ᎬmᎥᏞᏞᎥᎪ - ᏰᎧᏖ';
global.wm = 'light ka ͒..';
global.titulowm = 'ᎬmᎥᏞᏞᎥᎪ - ᏰᎧᏖ';
global.titulowm2 = `ᎬmᎥᏞᏞᎥᎪ - ᏰᎧᏖ`
global.igfg = 'ᎬmᎥᏞᏞᎥᎪ - ᏰᎧᏖ';
global.wait = '*_[ ⏳ ] Cargando..._*';

global.imagen1 = fs.readFileSync('./src/assets/images/menu/languages/es/menu.png');
global.imagen2 = fs.readFileSync('./src/assets/images/menu/languages/pt/menu.png');
global.imagen3 = fs.readFileSync('./src/assets/images/menu/languages/fr/menu.png')
global.imagen4 = fs.readFileSync('./src/assets/images/menu/languages/en/menu.png')
global.imagen5 = fs.readFileSync('./src/assets/images/menu/languages/ru/menu.png')

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nThe Mystic - Bot`;
global.gt = 'ᎬmᎥᏞᏞᎥᎪ - ᏰᎧᏖ';
global.mysticbot = 'ᎬmᎥᏞᏞᎥᎪ - ᏰᎧᏖ';
global.channel = 'https://whatsapp.com/channel/0029ValqtZALtOj5BbMDRV0u';
global.md = 'https://github.com/ali-test1';
global.mysticbot = 'https://github.com/ali-test1';
global.waitt = '*_[ ⏳ ] Cargando..._*';
global.waittt = '*_[ ⏳ ] Cargando..._*';
global.waitttt = '*_[ ⏳ ] Cargando..._*';
global.nomorown = '212760517793';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./src/assets/images/menu/languages/es/menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
