javascript
import fs from 'fs'; // تأكد من استيراد مكتبة fs

let handler = async (m, { text, command }) => {
  const idioma = "ar"; // افترض أن اللغة هي العربية
  const tradutor = {
    texto1: "يرجى إدخال اسم.",
    saved: (nickname, number) => `تم حفظ الاسم "${nickname}" مع الرقم "${number}".`,
    alreadyRegistered: (nickname, number) => `هذا الاسم "${nickname}" محجوز بالفعل برقم "${number}".`,
    alreadyUsed: (number) => `هذا الرقم "${number}" مرتبط بالفعل باسم آخر.`,
    deleted: (nickname) => `تم حذف الاسم "${nickname}".`,
    notFound: (nickname) => `لا يوجد اسم "${nickname}".`
  };

  // احصل على اسم المستخدم الذي تم الإشارة إليه أو المستخدم الذي تم الرد عليه
  let taggedUser = m.mentionedJid[0] || (m.replyMessage ? m.replyMessage.sender : null);

  // إذا لم يكن هناك مستخدم تم الإشارة إليه أو تم الرد عليه، أعد رسالة
  if (!taggedUser) throw tradutor.texto1;

  // احصل على الاسم المدخل بعد الأمر
  let nickname = text.split(' ').slice(1).join(' '); // احصل على الاسم الذي يلي الأمر

  // إذا لم يكن هناك اسم في النص، تحقق من الرد
  if (!nickname) {
    if (m.replyMessage && m.replyMessage.text) {
      nickname = m.replyMessage.text; // استخدم النص من الرسالة التي تم الرد عليها كاسم
    } else {
      throw tradutor.texto1; // إذا لم يكن هناك اسم مدخل أو نص في الرد، أعد الرسالة
    }
  }

  const path = `src/editme/${nickname}.txt`; // اسم الملف يعتمد على الاسم المدخل
  const numberFilePath = `src/editme/number_${taggedUser}.txt`; // ملف لحفظ الرقم المرتبط بالمستخدم

  // تحقق مما إذا كان الاسم محجوزًا بالفعل
  if (fs.existsSync(path)) {
    // قراءة الرقم من الملف
    const number = await fs.promises.readFile(path, 'utf8');
    m.reply(tradutor.alreadyRegistered(nickname, number));
    return;
  }

  // تحقق مما إذا كان الرقم مرتبطًا بالفعل باسم آخر
  if (fs.existsSync(numberFilePath)) {
    const existingNickname = await fs.promises.readFile(numberFilePath, 'utf8');
    m.reply(tradutor.alreadyUsed(taggedUser));
    return;
  }

  if (/^سجل$/i.test(command)) {
    // استخدام معرف المستخدم كرقم
    const number = taggedUser; // رقم المستخدم أو معرفه يمكن أن يكون هنا
    try {
      await fs.promises.writeFile(path, number); // حفظ الرقم في ملف الاسم
      await fs.promises.writeFile(numberFilePath, nickname); // حفظ الاسم في ملف الرقم
      m.reply(tradutor.saved(nickname, number));
    } catch (error) {
      console.error(error);
      m.reply("حدث خطأ أثناء حفظ الاسم.");
    }
  } else if (/^(deleteusername|du)$/i.test(command)) {
    if (!fs.existsSync(path)) {
      m.reply(tradutor.notFound(nickname));
      return;
    }

    try {
      await fs.promises.unlink(path);
      await fs.promises.unlink(numberFilePath);
      m.reply(tradutor.deleted(nickname));
    } catch (error) {
      console.error(error);
      m.reply("حدث خطأ أثناء حذف الاسم.");
    }
  } else {
    m.reply("أمر غير معروف. استخدم سجل لحفظ الاسم أو deleteusername لحذفه.");
  }
};

handler.help = ['سجل @username <اسم>', 'deleteusername <اسم>'];
handler.tags = ['tools'];
handler.command = /^(سجل|deleteusername|du)$/i;
handler.owner = true;

export default handler;
