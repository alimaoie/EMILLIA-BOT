import fs from "fs/promises";
import path from "path";

let limit1 = 100; // Unused currently
let limit2 = 400; // Limit in MB

const handler = async (m, { conn, command }) => {
  const videoDirectory = './src/video/spac'; // Changed the directory path

  try {
    const files = await fs.readdir(videoDirectory); // Asynchronously read files in the directory
    const videoFiles = files.filter(file => file.endsWith('.mp4')); // Filter only mp4 files

    if (videoFiles.length === 0) {
      return m.reply('> *[❗] Error: No videos found in the directory.*');
    }

    // Pick a random video from the files
    const randomVideo = videoFiles[Math.floor(Math.random() * videoFiles.length)];
    const videoPath = path.join(videoDirectory, randomVideo);

    const videoBuffer = await fs.readFile(videoPath); // Read the video file asynchronously
    const fileSizeInBytes = videoBuffer.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const size = fileSizeInMB.toFixed(2);

    if (size >= limit2) {
      return m.reply('> *[❗] Error: Video file is too large to send.*');
    }

    // Send the video
    await conn.sendMessage(m.chat, {
      video: videoBuffer,
      mimetype: 'video/mp4',
      fileName: randomVideo,
      caption: `Here's a random video: ${randomVideo} (${size} MB)`
    }, { quoted: m });

  } catch (error) {
    console.error(error);
    m.reply('> *[❗] Error: Failed to send the video.*');
  }
};

// Command trigger is now "ايميليا" without any dot or preceding symbols
handler.command = /^ايميليا$/i; 
export default handler;