Import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import axios from 'axios';

const searchRepo = async (m, Matrix) => {
  const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  const validCommands = ['menu', 'help', 'list'];

  if (validCommands.includes(cmd)) {
    const repoUrl = `https://api.github.com/repos/Popkiddevs/POPKID-MD`;

    await handleRepoCommand(m, Matrix, repoUrl);
  }
};

const handleRepoCommand = async (m, Matrix, repoUrl) => {
  try {
    const response = await axios.get(repoUrl);
    const repoData = response.data;

    const {
      full_name,
      name,
      forks_count,
      stargazers_count,
      created_at,
      updated_at,
      owner,
    } = repoData;

    const messageText = `╭─────═━┈┈━═──━┈⊷
        ┇ _ʙᴏᴛ ɴᴀᴍᴇ_ : *_𝗣𝗢𝗣𝗞𝗜𝗗-𝗠𝗗_*
        ┇ _ᴠᴇʀꜱɪᴏɴ_ : *_7.1.0_*
        ┇ _ᴘʟᴀᴛғᴏʀᴍ_ : *_ʟɪɴᴜx_*
        ┇ _ᴅᴇᴠ_ : *_𝗠𝗥 𝗣𝗢𝗣𝗞𝗜𝗗_*
        ┇ _ʀᴀᴍ_ : *_20GB.14GB_*
        ┇ _ᴅᴀɪʟʏ ᴜsᴇʀs_ : *${forks_count}*
        ┇ _ᴄʀᴇᴀᴛᴇᴅ ᴏɴ_ : *${new Date(created_at).toLocaleDateString()}*
        ╰─────═━┈┈━═──━┈⊷
            `;

    const repoMessage = generateWAMessageFromContent(m.from, {
      viewOnceMessage: {
        message: {
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: messageText,
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: '💫𝗕𝗘𝗦𝗧 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧💫\n\n𝗠𝗔𝗗𝗘 𝗕𝗬 𝗜𝗔𝗡 𝗧𝗔𝗥𝗔𝗖𝗛𝗔',
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              ...(await prepareWAMessageMedia({
                image: {
                  url: 'https://i.ibb.co/Kwm5YLV/IMG-20241004-WA0011.jpg',
                },
              }, { upload: Matrix.waUploadToServer })),
              title: '',
              gifPlayback: true,
              subtitle: '',
              hasMediaAttachment: false,
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                    display_text: "📜 COMMAND LIST",
                    id: ".command",
                  }),
                },
                 {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                    display_text: "⏳ PING",
                    id: ".ping",
                  }),
                },
                {
                  name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: "📂 REPO",
                    url: 'https://github.com/Popkiddevs/POPKID-MD',
                  }),
                },
                {
                 name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: "📽 BOTS IMAGE",
                    url: 'https://i.ibb.co/Kwm5YLV/IMG-20241004-WA0011.jpgl',
                  }),
                },
                {
                  name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: "🛰 WHATSAPP CHANNEL",
                    url: 'https://whatsapp.com/channel/0029VadQrNI8KMqo79BiHr3l',
                  }),
                },
              ],
            }),
            // contextInfo: { // Removed this block
            //   mentionedJid: [m.sender],
            //   forwardingScore: 9999,
            //   isForwarded: true,
            // },
          }),
        },
      },
    }, {});

    await Matrix.relayMessage(repoMessage.key.remoteJid, repoMessage.message, {
      messageId: repoMessage.key.id,
    });
    await m.React('🚨');
  } catch (error) {
    console.error('Error processing your request:', error);
    m.reply('Error processing your request.');
    await m.React('🚨');
  }
};

export default searchRepo;
