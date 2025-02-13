let signalingUrl = 'wss://signaling.itokoki.hongo.wide.ad.jp';
let roomId = 'tomato';
let clientId = null;
let videoCodec = null;
let audioCodec = null;
let signalingKey = null;
let autoRecoding = false;

// function onChangeVideoCodec() {
//   videoCodec = document.getElementById("video-codec").value;
//   if (videoCodec == 'none') {
//     videoCodec = null;
//   }
// }
// query string から roomId, clientId を取得するヘルパー
function parseQueryString() {
  const qs = window.Qs;
  if (window.location.search.length > 0) {
    var params = qs.parse(window.location.search.substr(1));
    if (params.roomId) {
      roomId = params.roomId;
    }
    if (params.clientId) {
      clientId = params.clientId;
    }
    if (params.signalingUrl) {
      signalingUrl = params.signalingUrl;
    }
    if (params.signalingKey) {
      signalingKey = params.signalingKey;
    }
    if (params.autoRecoding == "1") {
      autoRecoding = true
    }
  }
}


parseQueryString();

const roomIdInput = document.getElementById("roomIdInput");
roomIdInput.addEventListener('change', (event) => {
  console.log(event);
  roomId = event.target.value;
});

const signalingURLnput = document.getElementById("signalingURLnput");
signalingURLnput.addEventListener('change', (event) => {
  console.log(event);
  signalingUrl = event.target.value;
});

const autoRecodingInput = document.getElementById("autoRecoding");
autoRecodingInput.checked = autoRecoding
autoRecodingInput.addEventListener('change', (event) => {
  console.log(event);
  autoRecoding = autoRecodingInput.checked;
});
