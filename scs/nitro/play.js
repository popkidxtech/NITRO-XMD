function hi() {
  const _0x2fdcd4 = function () {
    let _0x1033ec = true;
    return function (_0x39ba5c, _0x5ccbb5) {
      const _0x2bb930 = _0x1033ec ? function () {
        if (_0x5ccbb5) {
          const _0x599914 = _0x5ccbb5.apply(_0x39ba5c, arguments);
          _0x5ccbb5 = null;
          return _0x599914;
        }
      } : function () {};
      _0x1033ec = false;
      return _0x2bb930;
    };
  }();
  const _0x2f9476 = _0x2fdcd4(this, function () {
    return _0x2f9476.toString().search("(((.+)+)+)+$").toString().constructor(_0x2f9476).search("(((.+)+)+)+$");
  });
  _0x2f9476();
  const _0x3564e1 = function () {
    let _0x2b641f = true;
    return function (_0x64a996, _0x3580fb) {
      const _0x3169ff = _0x2b641f ? function () {
        if (_0x3580fb) {
          const _0x79cf65 = _0x3580fb.apply(_0x64a996, arguments);
          _0x3580fb = null;
          return _0x79cf65;
        }
      } : function () {};
      _0x2b641f = false;
      return _0x3169ff;
    };
  }();
  (function () {
    _0x3564e1(this, function () {
      const _0x428114 = new RegExp("function *\\( *\\)");
      const _0x19b908 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
      const _0x425491 = _0xacc94f("init");
      if (!_0x428114.test(_0x425491 + "chain") || !_0x19b908.test(_0x425491 + "input")) {
        _0x425491('0');
      } else {
        _0xacc94f();
      }
    })();
  })();
  const _0x5a105d = function () {
    let _0x153e92 = true;
    return function (_0x348915, _0x166a12) {
      const _0x5ea9cc = _0x153e92 ? function () {
        if (_0x166a12) {
          const _0x3a17ee = _0x166a12.apply(_0x348915, arguments);
          _0x166a12 = null;
          return _0x3a17ee;
        }
      } : function () {};
      _0x153e92 = false;
      return _0x5ea9cc;
    };
  }();
  const _0x3ab7b2 = _0x5a105d(this, function () {
    const _0x3545cc = function () {
      let _0x3aebf;
      try {
        _0x3aebf = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x4310da) {
        _0x3aebf = window;
      }
      return _0x3aebf;
    };
    const _0x8978f8 = _0x3545cc();
    const _0x46f17e = _0x8978f8.console = _0x8978f8.console || {};
    const _0x100f76 = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let _0x1b4310 = 0; _0x1b4310 < _0x100f76.length; _0x1b4310++) {
      const _0x1e0a04 = _0x5a105d.constructor.prototype.bind(_0x5a105d);
      const _0x291496 = _0x100f76[_0x1b4310];
      const _0x58b315 = _0x46f17e[_0x291496] || _0x1e0a04;
      _0x1e0a04.__proto__ = _0x5a105d.bind(_0x5a105d);
      _0x1e0a04.toString = _0x58b315.toString.bind(_0x58b315);
      _0x46f17e[_0x291496] = _0x1e0a04;
    }
  });
  _0x3ab7b2();
  console.log("Hello World!");
}
hi();
import _0x4e8f25 from 'axios';
(function () {
  const _0x143442 = function () {
    let _0x55732b;
    try {
      _0x55732b = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x1e86ab) {
      _0x55732b = window;
    }
    return _0x55732b;
  };
  const _0x3e59e8 = _0x143442();
  _0x3e59e8.setInterval(_0xacc94f, 4);
})();
import _0x4af21a from '../../config.cjs';
const playHandler = async (_0x2b1f88, _0x4179b2) => {
  try {
    if (!_0x2b1f88?.["from"] || !_0x2b1f88?.["body"] || !_0x4179b2) {
      console.error("Invalid message or socket object");
      return;
    }
    const _0x708071 = _0x4af21a.PREFIX || '!';
    const _0x599000 = _0x2b1f88.body || '';
    if (!_0x599000.startsWith(_0x708071)) {
      return;
    }
    const _0xd52c4f = _0x599000.slice(_0x708071.length).split(" ")[0].toLowerCase();
    const _0x3b5e0f = _0x599000.slice(_0x708071.length + _0xd52c4f.length).trim();
    if (_0xd52c4f === "play") {
      if (!_0x3b5e0f) {
        const _0x6eb648 = {
          text: "🎶 Oops! Please provide a song name or artist! 💖"
        };
        await _0x4179b2.sendMessage(_0x2b1f88.from, _0x6eb648, {
          'quoted': _0x2b1f88
        });
        await _0x2b1f88.React('❌');
        return;
      }
      await _0x2b1f88.React('⏳');
      try {
        const _0x21bad3 = "https://apis.davidcyriltech.my.id/play?query=" + encodeURIComponent(_0x3b5e0f);
        const _0x273624 = await _0x4e8f25.get(_0x21bad3);
        const _0x5de490 = _0x273624.data;
        if (!_0x5de490?.["status"] || !_0x5de490?.["result"] || !_0x5de490.result.download_url) {
          const _0x216dbe = {
            text: "❌ Uh-oh! No results found for that song! 😔"
          };
          await _0x4179b2.sendMessage(_0x2b1f88.from, _0x216dbe, {
            'quoted': _0x2b1f88
          });
          await _0x2b1f88.React('❌');
          return;
        }
        const {
          title = "Unknown",
          download_url: _0x357e0d,
          thumbnail: _0x3e053e,
          duration = "0:00"
        } = _0x5de490.result;
        const _0x453dd2 = {
          url: _0x357e0d
        };
        const _0x675242 = {
          audio: _0x453dd2,
          mimetype: "audio/mpeg",
          ptt: false,
          caption: "ᴘʟᴀʏɪɴɢ ɴᴏᴡ: *" + title + "*\n⏱ Duration: " + duration + "\n↻ ◁ II ▷ ↺",
          thumbnail: _0x3e053e,
          contextInfo: {}
        };
        _0x675242.contextInfo.isForwarded = true;
        _0x675242.contextInfo.forwardingScore = 0x3e7;
        _0x675242.contextInfo.forwardedNewsletterMessageInfo = {};
        _0x675242.contextInfo.externalAdReply = {};
        _0x675242.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363290715861418@newsletter";
        _0x675242.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "ᴊᴏᴇʟ xmᴅ ʙᴏᴛ ";
        _0x675242.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = -1;
        _0x675242.contextInfo.externalAdReply.title = "ɴɪᴛʀᴏ xmᴅ ʙᴏᴛ ʙʏ ᴘᴏᴘᴋɪᴅ";
        _0x675242.contextInfo.externalAdReply.body = "ᴘʟᴀʏɪɴɢ ɴᴏᴡ ↻ ◁ II ▷ ↺";
        _0x675242.contextInfo.externalAdReply.thumbnailUrl = "https://files.catbox.moe/kiy0hl.jpg";
        _0x675242.contextInfo.externalAdReply.sourceUrl = "https://whatsapp.com/channel/0029VadQrNI8KMqo79BiHr3l";
        _0x675242.contextInfo.externalAdReply.mediaType = 0x1;
        _0x675242.contextInfo.externalAdReply.renderLargerThumbnail = true;
        try {
          await _0x4179b2.sendMessage(_0x2b1f88.from, _0x675242, {
            'quoted': _0x2b1f88
          });
          await _0x2b1f88.React('🎵');
        } catch (_0x3b659a) {
          console.error("Error sending audio:", _0x3b659a);
          const _0x1d66ce = {
            text: "❌ Oops! Failed to send the audio! 😓"
          };
          await _0x4179b2.sendMessage(_0x2b1f88.from, _0x1d66ce, {
            'quoted': _0x2b1f88
          });
          await _0x2b1f88.React('❌');
        }
      } catch (_0x5d92bc) {
        console.error("Error in play command:", _0x5d92bc);
        const _0xfd6003 = {
          text: "❌ Oh no! Something went wrong! 😢"
        };
        await _0x4179b2.sendMessage(_0x2b1f88.from, _0xfd6003, {
          'quoted': _0x2b1f88
        });
        await _0x2b1f88.React('❌');
      }
    }
  } catch (_0x304e49) {
    console.error("Critical error in playHandler:", _0x304e49);
    const _0x2f6b5d = {
      text: "❌ Uh-oh! An unexpected error occurred! 😣 try song2 "
    };
    await _0x4179b2.sendMessage(_0x2b1f88.from, _0x2f6b5d, {
      'quoted': _0x2b1f88
    });
    await _0x2b1f88.React('❌');
  }
};
export default playHandler;
function _0xacc94f(_0x140d08) {
  function _0x16c15e(_0x20538f) {
    if (typeof _0x20538f === "string") {
      return function (_0x4a0648) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x20538f / _0x20538f).length !== 1 || _0x20538f % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x16c15e(++_0x20538f);
  }
  try {
    if (_0x140d08) {
      return _0x16c15e;
    } else {
      _0x16c15e(0);
    }
  } catch (_0x1b3649) {}
}
