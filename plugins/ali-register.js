import fs from 'fs';
import path from 'path';

// إعداد مسار الملف
const getFilePath = (fileName) => path.join(process.cwd(), `${fileName}.js`);

const handler = async (m, { text, command }) => {
  const tradutor = {
    texto1: "يرجى إدخال رقم أو @username مع اللقب.",
    saved: (identifier, nickname, fileName) => `تم حفظ "${identifier}" مع اللقب "${nickname}" في الملف "${fileName}".`,
    alreadyRegistered: (nickname, identifier) => `"${nickname}" محجوز بالفعل بـ "${identifier}".`,
    alreadyUsed: (identifier) => `"${identifier}" مرتبط بالفعل بلقب آخر.`,
    notFound: "لا يوجد أي مسجلين حتى الآن.",
    list: (list) => `المسجلون:\n${list}`,
    deleted: (identifier) => `تم حذف "${identifier}".`,
    notRegistered: (identifier) => `"${identifier}" ليس مسجلاً.`,
    noFileSpecified: "يرجى تحديد اسم الملف."
  };

  // استخراج اسم الملف من النص
  const parts = text.split(' ');
  const fileName = parts.pop(); // آخر عنصر هو اسم الملف
  const identifier = parts[0]; // أول عنصر هو @username أو الرقم
  const nickname = parts.slice(1).join(' '); // باقي العناصر هي اللقب

  const filePath = getFilePath(fileName);

  // قراءة البيانات من الملف
  const data = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8').split('\n') : [];
  const records = data.reduce((acc, line) => {
    // التحقق من أن السطر يحتوي على "،" وأنه يتبع النمط الصحيح
    if (line.includes(',')) {
      const [name, id] = line.split(',').map(item => item.trim());
      // التحقق من أن الاسم والمعرف صالحين، والمعرف يمكن أن يبدأ بـ @ أو + أو رقم
      if (name && id && /^(@|\+|\d)/.test(id)) {
        acc[id] = name;
      }
    }
    return acc;
  }, {});

  // التحقق من الأمر المستخدم
  if (/^سجل$/i.test(command)) {
    if (!identifier || !nickname) {
      m.reply(tradutor.texto1);
      return;
    }

    if (Object.values(records).includes(nickname)) {
      m.reply(tradutor.alreadyRegistered(nickname, Object.keys(records).find(key => records[key] === nickname)));
      return;
    }

    if (records[identifier]) {
      m.reply(tradutor.alreadyUsed(identifier));
      return;
    }

    try {
      fs.appendFileSync(filePath, `${nickname},${identifier}\n`);
      m.reply(tradutor.saved(identifier, nickname, fileName));
    } catch (error) {
      console.error(error);
      m.reply("حدث خطأ أثناء حفظ البيانات.");
    }
  } else if (/^المسجلين$/i.test(command)) {
    if (!fileName) {
      m.reply(tradutor.noFileSpecified);
      return;
    }

    if (Object.keys(records).length === 0) {
      m.reply(tradutor.notFound);
    } else {
      // عرض القائمة باستخدام التنسيق المطلوب
      const list = Object.entries(records)
        .map(([id, name]) => `* *~${id} "لقبه" ${name}~** ♕`)
        .join('\n');
      m.reply(tradutor.list(list));
    }
  } else if (/^احذف/i.test(command)) {
    if (!identifier || !fileName) {
      m.reply(tradutor.noFileSpecified);
      return;
    }

    const foundIdentifier = Object.keys(records).find(key => key === identifier);
    if (!foundIdentifier) {
      m.reply(tradutor.notRegistered(identifier));
      return;
    }

    // حذف السجل
    delete records[foundIdentifier];
    const updatedData = Object.entries(records)
      .map(([id, name]) => `${name},${id}`)
      .join('\n');

    fs.writeFileSync(filePath, updatedData + '\n');
    m.reply(tradutor.deleted(foundIdentifier));
  } else {
    m.reply("أمر غير معروف. استخدم 'سجل <@username أو رقم> <لقب> <اسم الملف>' لتسجيل أو 'المسجلين <اسم الملف>' لعرض القائمة أو 'احذف <@username أو رقم> <اسم الملف>' لحذف.");
  }
};

handler.help = ['سجل <@username أو رقم> <لقب> <اسم الملف>', 'المسجلين <اسم الملف>', 'احذف <@username أو رقم> <اسم الملف>'];
handler.tags = ['tools'];
handler.command = /^(سجل|المسجلين|احذف)$/i;
handler.owner = true;

export default handler; = true;

export default handler;