!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=256)}({0:function(e,t){var r={utf8:{stringToBytes:function(e){return r.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(r.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t},bytesToString:function(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}}};e.exports=r},10:function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},256:function(e,t,r){const n=r(3);class i{constructor(e){this.length=1,this.params={},e.on("progress",e=>{this.params=e})}start(e){return 0}end(e){return this.params.duration*this.params.percent}}class o{constructor(e,t){this.video=e,this.container=t,this.domId="vimeo-player-"+n(JSON.stringify(e)+Date.now()+Math.random()),this.currentWidth=0,this.seeking=!1,this.buffered=null}init(){return new Promise((e,t)=>{$.getScript("https://player.vimeo.com/api/player.js").done((t,r)=>{this.video.fullscreen&&this.webkitEnterFullscreen();const n=`<div id="${this.domId}"></div>`,o=$(this.container).find(".video-container")[0];$(o).html(n);let s=this.video.src;null==s&&(s=this.video.id);const a=$(o).width(),u=new Vimeo.Player(this.domId,{id:s,width:a,maxwidth:"100%",maxheight:"100%",responsive:!0,playsinline:!0,byline:!1,speed:!0,controls:!1});var l=this;u.setMuted(!0).then(function(){u.play().then(function(){u.pause().then(function(){if(u.setMuted(!1),void 0!==l.video.startAt){var t=l.video.startAt;u.setCurrentTime(t)}let r=()=>{let e=$(o).find("iframe")[0];if(void 0===e)return setTimeout(r,300);$(e).attr("tabindex","-1"),$(e).css("width","100%"),l.currentWidth=$(e).width(),l.intervalId=setInterval(()=>{let e;window.innerHeight>window.innerWidth&&(e="portrait"),window.innerWidth>window.innerHeight&&(e="landscape");let t=$(o).find("iframe")[0];$(t).css("width","100%");var r=$(t).width();if(r!==l.currentWidth||l.orientation!==e){l.orientation=e,l.currentWidth=r;let n=.56*r,i=$(window).height();if(l.fullScreen||n>i){n=i-$($(l.container).find(".control-bar")[0]).height()}$(t).css("height",n+"px")}l.currentWidth=r},300)};setTimeout(r,100),l.buffered=new i(u),l.videoPlayer=u,e()})})})})})}destroy(){clearInterval(this.intervalId)}webkitExitFullscreen(){this.fullScreen=!1,$(this.container).removeClass("vimeo-fullscreen")}webkitEnterFullscreen(){$(this.container).addClass("vimeo-fullscreen"),this.fullScreen=!0}canChangeSpeedRate(){return new Promise((e,t)=>{e(!0)})}getPosibleSpeedRates(){return new Promise((e,t)=>{this.videoPlayer.getPlaybackRate().then(t=>{this.videoPlayer.setPlaybackRate(t).then(t=>{e([.5,1,1.5,2])}).catch(t=>{e([1])})}).catch(t=>{e([1])})})}on(e,t){return"canplay"===e?t():this.videoPlayer.on(e,t)}off(e,t=null){if("canplay"!==e)return $(this.videoPlayer).off(e,t)}play(){return this.videoPlayer.play()}pause(){return this.videoPlayer.pause()}getDuration(){return this.videoPlayer.getDuration()}getCurrentTime(){return new Promise((e,t)=>{e(this.videoPlayer.getCurrentTime())})}setCurrentTime(e){return new Promise((t,r)=>{this.videoPlayer.setCurrentTime(e).then(e=>{t(e)}).catch(function(e){console.log(e),t(e)})})}getBuffered(){return new Promise((e,t)=>{e(this.buffered)})}getTextTracks(){return this.videoPlayer.textTracks}getCurrentSrc(){return new Promise((e,t)=>{e(this.video.id)})}setSrc(e){this.videoPlayer.src=e}getPaused(){return this.videoPlayer.getPaused()}setControls(e){this.videoPlayer.controls=e}setTabIndex(e){this.videoPlayer.tabindex=e}setPlaybackRate(e){return this.videoPlayer.setPlaybackRate(e)}getPlaybackRate(){return this.videoPlayer.getPlaybackRate()}getVolume(){return this.videoPlayer.getVolume()}setVolume(e){this.videoPlayer.setVolume(e)}}MFP.prototype.loadVideoVimeo=function(e){return new Promise((t,r)=>{e.fullscreen=this.notSupportedStandarFullScreen;const n=new o(e,this.container);n.init().then(()=>{t(n)})})}},3:function(e,t,r){var n,i,o,s,a;n=r(9),i=r(0).utf8,o=r(10),s=r(0).bin,(a=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?s.stringToBytes(e):i.stringToBytes(e):o(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var r=n.bytesToWords(e),u=8*e.length,l=1732584193,c=-271733879,d=-1732584194,f=271733878,h=0;h<r.length;h++)r[h]=16711935&(r[h]<<8|r[h]>>>24)|4278255360&(r[h]<<24|r[h]>>>8);r[u>>>5]|=128<<u%32,r[14+(u+64>>>9<<4)]=u;var y=a._ff,p=a._gg,v=a._hh,g=a._ii;for(h=0;h<r.length;h+=16){var m=l,b=c,P=d,w=f;l=y(l,c,d,f,r[h+0],7,-680876936),f=y(f,l,c,d,r[h+1],12,-389564586),d=y(d,f,l,c,r[h+2],17,606105819),c=y(c,d,f,l,r[h+3],22,-1044525330),l=y(l,c,d,f,r[h+4],7,-176418897),f=y(f,l,c,d,r[h+5],12,1200080426),d=y(d,f,l,c,r[h+6],17,-1473231341),c=y(c,d,f,l,r[h+7],22,-45705983),l=y(l,c,d,f,r[h+8],7,1770035416),f=y(f,l,c,d,r[h+9],12,-1958414417),d=y(d,f,l,c,r[h+10],17,-42063),c=y(c,d,f,l,r[h+11],22,-1990404162),l=y(l,c,d,f,r[h+12],7,1804603682),f=y(f,l,c,d,r[h+13],12,-40341101),d=y(d,f,l,c,r[h+14],17,-1502002290),l=p(l,c=y(c,d,f,l,r[h+15],22,1236535329),d,f,r[h+1],5,-165796510),f=p(f,l,c,d,r[h+6],9,-1069501632),d=p(d,f,l,c,r[h+11],14,643717713),c=p(c,d,f,l,r[h+0],20,-373897302),l=p(l,c,d,f,r[h+5],5,-701558691),f=p(f,l,c,d,r[h+10],9,38016083),d=p(d,f,l,c,r[h+15],14,-660478335),c=p(c,d,f,l,r[h+4],20,-405537848),l=p(l,c,d,f,r[h+9],5,568446438),f=p(f,l,c,d,r[h+14],9,-1019803690),d=p(d,f,l,c,r[h+3],14,-187363961),c=p(c,d,f,l,r[h+8],20,1163531501),l=p(l,c,d,f,r[h+13],5,-1444681467),f=p(f,l,c,d,r[h+2],9,-51403784),d=p(d,f,l,c,r[h+7],14,1735328473),l=v(l,c=p(c,d,f,l,r[h+12],20,-1926607734),d,f,r[h+5],4,-378558),f=v(f,l,c,d,r[h+8],11,-2022574463),d=v(d,f,l,c,r[h+11],16,1839030562),c=v(c,d,f,l,r[h+14],23,-35309556),l=v(l,c,d,f,r[h+1],4,-1530992060),f=v(f,l,c,d,r[h+4],11,1272893353),d=v(d,f,l,c,r[h+7],16,-155497632),c=v(c,d,f,l,r[h+10],23,-1094730640),l=v(l,c,d,f,r[h+13],4,681279174),f=v(f,l,c,d,r[h+0],11,-358537222),d=v(d,f,l,c,r[h+3],16,-722521979),c=v(c,d,f,l,r[h+6],23,76029189),l=v(l,c,d,f,r[h+9],4,-640364487),f=v(f,l,c,d,r[h+12],11,-421815835),d=v(d,f,l,c,r[h+15],16,530742520),l=g(l,c=v(c,d,f,l,r[h+2],23,-995338651),d,f,r[h+0],6,-198630844),f=g(f,l,c,d,r[h+7],10,1126891415),d=g(d,f,l,c,r[h+14],15,-1416354905),c=g(c,d,f,l,r[h+5],21,-57434055),l=g(l,c,d,f,r[h+12],6,1700485571),f=g(f,l,c,d,r[h+3],10,-1894986606),d=g(d,f,l,c,r[h+10],15,-1051523),c=g(c,d,f,l,r[h+1],21,-2054922799),l=g(l,c,d,f,r[h+8],6,1873313359),f=g(f,l,c,d,r[h+15],10,-30611744),d=g(d,f,l,c,r[h+6],15,-1560198380),c=g(c,d,f,l,r[h+13],21,1309151649),l=g(l,c,d,f,r[h+4],6,-145523070),f=g(f,l,c,d,r[h+11],10,-1120210379),d=g(d,f,l,c,r[h+2],15,718787259),c=g(c,d,f,l,r[h+9],21,-343485551),l=l+m>>>0,c=c+b>>>0,d=d+P>>>0,f=f+w>>>0}return n.endian([l,c,d,f])})._ff=function(e,t,r,n,i,o,s){var a=e+(t&r|~t&n)+(i>>>0)+s;return(a<<o|a>>>32-o)+t},a._gg=function(e,t,r,n,i,o,s){var a=e+(t&n|r&~n)+(i>>>0)+s;return(a<<o|a>>>32-o)+t},a._hh=function(e,t,r,n,i,o,s){var a=e+(t^r^n)+(i>>>0)+s;return(a<<o|a>>>32-o)+t},a._ii=function(e,t,r,n,i,o,s){var a=e+(r^(t|~n))+(i>>>0)+s;return(a<<o|a>>>32-o)+t},a._blocksize=16,a._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var r=n.wordsToBytes(a(e,t));return t&&t.asBytes?r:t&&t.asString?s.bytesToString(r):n.bytesToHex(r)}},9:function(e,t){var r,n;r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],r=0,n=0;r<e.length;r++,n+=8)t[n>>>5]|=e[r]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],r=0;r<32*e.length;r+=8)t.push(e[r>>>5]>>>24-r%32&255);return t},bytesToHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push((e[r]>>>4).toString(16)),t.push((15&e[r]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var t=[],n=0;n<e.length;n+=3)for(var i=e[n]<<16|e[n+1]<<8|e[n+2],o=0;o<4;o++)8*n+6*o<=8*e.length?t.push(r.charAt(i>>>6*(3-o)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],n=0,i=0;n<e.length;i=++n%4)0!=i&&t.push((r.indexOf(e.charAt(n-1))&Math.pow(2,-2*i+8)-1)<<2*i|r.indexOf(e.charAt(n))>>>6-2*i);return t}},e.exports=n}});