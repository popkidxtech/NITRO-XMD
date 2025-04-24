import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

const alive = async (m, Matrix) => {
  const uptimeSeconds = process.uptime();
  const days = Math.floor(uptimeSeconds / (24 * 3600));
  const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);
  
  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';
    if (['alive', 'hansuptime', 'uptime'].includes(cmd)) {

  const uptimeMessage = `*ℂ𝔸ℙ𝕋𝔸𝕀ℕ-𝕄𝔻-𝕆ℕ𝕃𝕀ℕ𝔼-𝔸ℕ𝕐-𝕋𝕀𝕄𝔼-𝕌ℕ𝔸𝕊ℍ𝔸ℕ𝔾𝔸𝔸 𝔸𝕌 😎*

╔══════════ஜ۩۞۩ஜ══════════╗
┇ℂ𝔸ℙ𝕋𝔸𝕀ℕ-𝕄𝔻-𝕀𝕊-𝕆ℕ𝕃𝕀ℕ𝔼-𝕁𝕌𝕊𝕋-𝕋𝕐ℙ-.𝕄𝔼ℕ𝕌 😎
┇ *${days} Day*
┇ *${hours} Hour*
┇ *${minutes} Minute*
┇ *${seconds} Second*
┇𝕂𝔸𝕄𝔸 𝕂𝔸𝕎𝔸 𝕄𝔹𝕆ℕ𝔾𝕆 𝔸ℕ𝔸 𝔼𝕃𝔼𝕎𝔸 😹
╚═════════ஜ۩۞۩ஜ═══════════╝
`;

  const buttons = [
      {
        "name": "quick_reply",
        "buttonParamsJson": JSON.stringify({
          display_text: "Ping🚀",
          id: `${prefix}ping`
        })
      }
    ];

  const msg = generateWAMessageFromContent(m.from, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: uptimeMessage
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "© captain"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            gifPlayback: true,
            subtitle: "",
            hasMediaAttachment: false 
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '255618076073',
                  newsletterName: "ℂ𝔸ℙ𝕋𝔸𝕀ℕ-𝕄𝔻",
                  serverMessageId: 143
                }
              }
        }),
      },
    },
  }, {});

  await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
    }
};

export default alive;
