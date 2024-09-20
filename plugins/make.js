import fs from "fs";
import path from "path";

let limit1 = 100;
let limit2 = 400;

const handler = async (m, { conn, command }) => {
  const videoDirectory = './src/video/edit';
  const files = fs.readdirSync(videoDirectory); // قراءة الملفات الموجودة في مجلد الفيديو
  const videoFiles = files.filter(file => file.endsWith('.mp4')); // تصفية الملفات لتكون فيديوهات فقط

  if (videoFiles.length === 0) {
    return m.reply('> *[❗] Error: No videos found in the directory.*');
  }

  // اختيار فيديو عشوائي من الملفات
  const randomVideo = videoFiles[Math.floor(Math.random() * videoFiles.length)];
  const videoPath = path.join(videoDirectory, randomVideo);

  // قراءة الفيديو من المسار وإرساله
  try {
    const videoBuffer = fs.readFileSync(videoPath);
    const fileSizeInBytes = videoBuffer.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const size = fileSizeInMB.toFixed(2);

    if (size >= limit2) {
      return m.reply('> *[❗] Error: Video file is too large to send.*');
    }

    // إرسال الفيديو
    await conn.sendMessage(m.chat, {
      video: videoBuffer,
      mimetype: 'video/mp4',
      fileName: randomVideo,
      caption: `Here's a random video: ${randomVideo}`
    }, { quoted: m });
  } catch (error) {
    console.error(error);
    m.reply('> *[❗] Error: Failed to send the video.*');
  }
};

handler.command = /^edit$/i; // الأمر الجديد هو .edit
export default handler;