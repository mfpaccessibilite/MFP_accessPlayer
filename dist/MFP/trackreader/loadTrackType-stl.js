!function(e){var t={};function a(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(r,s,function(t){return e[t]}.bind(null,s));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=18)}({0:function(e,t){var a={utf8:{stringToBytes:function(e){return a.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(a.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],a=0;a<e.length;a++)t.push(255&e.charCodeAt(a));return t},bytesToString:function(e){for(var t=[],a=0;a<e.length;a++)t.push(String.fromCharCode(e[a]));return t.join("")}}};e.exports=a},1:function(e,t,a){var r,s,c,h,i;r=a(3),s=a(0).utf8,c=a(4),h=a(0).bin,(i=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?h.stringToBytes(e):s.stringToBytes(e):c(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var a=r.bytesToWords(e),n=8*e.length,o=1732584193,g=-271733879,b=-1732584194,u=271733878,k=0;k<a.length;k++)a[k]=16711935&(a[k]<<8|a[k]>>>24)|4278255360&(a[k]<<24|a[k]>>>8);a[n>>>5]|=128<<n%32,a[14+(n+64>>>9<<4)]=n;var _=i._ff,l=i._gg,f=i._hh,y=i._ii;for(k=0;k<a.length;k+=16){var d=o,p=g,T=b,A=u;o=_(o,g,b,u,a[k+0],7,-680876936),u=_(u,o,g,b,a[k+1],12,-389564586),b=_(b,u,o,g,a[k+2],17,606105819),g=_(g,b,u,o,a[k+3],22,-1044525330),o=_(o,g,b,u,a[k+4],7,-176418897),u=_(u,o,g,b,a[k+5],12,1200080426),b=_(b,u,o,g,a[k+6],17,-1473231341),g=_(g,b,u,o,a[k+7],22,-45705983),o=_(o,g,b,u,a[k+8],7,1770035416),u=_(u,o,g,b,a[k+9],12,-1958414417),b=_(b,u,o,g,a[k+10],17,-42063),g=_(g,b,u,o,a[k+11],22,-1990404162),o=_(o,g,b,u,a[k+12],7,1804603682),u=_(u,o,g,b,a[k+13],12,-40341101),b=_(b,u,o,g,a[k+14],17,-1502002290),o=l(o,g=_(g,b,u,o,a[k+15],22,1236535329),b,u,a[k+1],5,-165796510),u=l(u,o,g,b,a[k+6],9,-1069501632),b=l(b,u,o,g,a[k+11],14,643717713),g=l(g,b,u,o,a[k+0],20,-373897302),o=l(o,g,b,u,a[k+5],5,-701558691),u=l(u,o,g,b,a[k+10],9,38016083),b=l(b,u,o,g,a[k+15],14,-660478335),g=l(g,b,u,o,a[k+4],20,-405537848),o=l(o,g,b,u,a[k+9],5,568446438),u=l(u,o,g,b,a[k+14],9,-1019803690),b=l(b,u,o,g,a[k+3],14,-187363961),g=l(g,b,u,o,a[k+8],20,1163531501),o=l(o,g,b,u,a[k+13],5,-1444681467),u=l(u,o,g,b,a[k+2],9,-51403784),b=l(b,u,o,g,a[k+7],14,1735328473),o=f(o,g=l(g,b,u,o,a[k+12],20,-1926607734),b,u,a[k+5],4,-378558),u=f(u,o,g,b,a[k+8],11,-2022574463),b=f(b,u,o,g,a[k+11],16,1839030562),g=f(g,b,u,o,a[k+14],23,-35309556),o=f(o,g,b,u,a[k+1],4,-1530992060),u=f(u,o,g,b,a[k+4],11,1272893353),b=f(b,u,o,g,a[k+7],16,-155497632),g=f(g,b,u,o,a[k+10],23,-1094730640),o=f(o,g,b,u,a[k+13],4,681279174),u=f(u,o,g,b,a[k+0],11,-358537222),b=f(b,u,o,g,a[k+3],16,-722521979),g=f(g,b,u,o,a[k+6],23,76029189),o=f(o,g,b,u,a[k+9],4,-640364487),u=f(u,o,g,b,a[k+12],11,-421815835),b=f(b,u,o,g,a[k+15],16,530742520),o=y(o,g=f(g,b,u,o,a[k+2],23,-995338651),b,u,a[k+0],6,-198630844),u=y(u,o,g,b,a[k+7],10,1126891415),b=y(b,u,o,g,a[k+14],15,-1416354905),g=y(g,b,u,o,a[k+5],21,-57434055),o=y(o,g,b,u,a[k+12],6,1700485571),u=y(u,o,g,b,a[k+3],10,-1894986606),b=y(b,u,o,g,a[k+10],15,-1051523),g=y(g,b,u,o,a[k+1],21,-2054922799),o=y(o,g,b,u,a[k+8],6,1873313359),u=y(u,o,g,b,a[k+15],10,-30611744),b=y(b,u,o,g,a[k+6],15,-1560198380),g=y(g,b,u,o,a[k+13],21,1309151649),o=y(o,g,b,u,a[k+4],6,-145523070),u=y(u,o,g,b,a[k+11],10,-1120210379),b=y(b,u,o,g,a[k+2],15,718787259),g=y(g,b,u,o,a[k+9],21,-343485551),o=o+d>>>0,g=g+p>>>0,b=b+T>>>0,u=u+A>>>0}return r.endian([o,g,b,u])})._ff=function(e,t,a,r,s,c,h){var i=e+(t&a|~t&r)+(s>>>0)+h;return(i<<c|i>>>32-c)+t},i._gg=function(e,t,a,r,s,c,h){var i=e+(t&r|a&~r)+(s>>>0)+h;return(i<<c|i>>>32-c)+t},i._hh=function(e,t,a,r,s,c,h){var i=e+(t^a^r)+(s>>>0)+h;return(i<<c|i>>>32-c)+t},i._ii=function(e,t,a,r,s,c,h){var i=e+(a^(t|~r))+(s>>>0)+h;return(i<<c|i>>>32-c)+t},i._blocksize=16,i._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var a=r.wordsToBytes(i(e,t));return t&&t.asBytes?a:t&&t.asString?h.bytesToString(a):r.bytesToHex(a)}},18:function(e,t,a){"use strict";a.r(t);var r=a(2);$("head").append('<link rel="stylesheet" href="'+mfpPath+'trackreader/stl.css" type="text/css" />'),MFP.prototype.loadTrackTypeSTL=function(e,t,a){Number.prototype.padLeft=function(e,t){return Array(e-String(this).length+1).join(t||"0")+this};var s={player:null,track:null,render:function(e){var t=this,a=new XMLHttpRequest;a.open("GET",e,!0),a.responseType="arraybuffer",a.onload=function(e){if(200!=a.status)t.track.mode=disabled,t.player.subtitles.splice($(t.track).data("pos"),1),t.player.initSubtitlesMenu();else{t.track.mode="hidden";var s=a.response,c=new Uint8Array(s),h=c.subarray(0,1024),i=t.UInt8ArrayToString(h.subarray(3,11)),n=(t.UInt8ArrayToString(h.subarray(0,3)),t.UInt8ArrayToString(h.subarray(12,14)));t.UInt8ArrayToString(h.subarray(14,16)),t.UInt8ArrayToString(h.subarray(253,255)),t.UInt8ArrayToString(h.subarray(256,264));if("STL25.01"==i)var o=25;else o=30;for(let e=1024;e<c.length;e+=128){var g=c.subarray(e,e+128),b=(g.subarray(0,1),g.subarray(1,3)),u=(g.subarray(3,4),g.subarray(4,5),g.subarray(5,9)),k=g.subarray(9,13),_=g.subarray(13,14),l=g.subarray(14,15),f=(g.subarray(15,16),g.subarray(16,128)),y=60*t.byteArrayToLong(u.subarray(0,1))*60+60*t.byteArrayToLong(u.subarray(1,2))+t.byteArrayToLong(u.subarray(2,3))+parseInt(parseInt(t.byteArrayToLong(u.subarray(3,4)))/o*1e3)/1e3,d=60*t.byteArrayToLong(k.subarray(0,1))*60+60*t.byteArrayToLong(k.subarray(1,2))+t.byteArrayToLong(k.subarray(2,3))+parseInt(parseInt(t.byteArrayToLong(k.subarray(3,4)))/o*1e3)/1e3,p=t.n19totext.render(f,n),T=Math.floor(t.byteArrayToLong(_));T>=20&&(T=-1),l=t.byteArrayToLong(l);var A=new r.a(y,d,p);1==l?A.align="start":3==l&&(A.align="end"),A.line=T,A.id=t.byteArrayToLong(b),t.track.addCue(A)}t.player.loadedTrack(t.track)}},a.send(null)},padLeft:function(e,t,a){return Array(t-String(e).length+1).join(a||"0")+e},UInt8ArrayToString:function(e){for(var t="",a=0;a<e.byteLength;a++)t+=String.fromCharCode(e[a]);return t},byteArrayToLong:function(e){for(var t=0,a=e.length-1;a>=0;a--)t=256*t+e[a];return t},UInt8ArrayToInt:function(e){for(var t="",a=0;a<e.byteLength;a++)t+=String.fromCharCode(e[a]);return t},stringToBytes:function(e){for(var t,a,r=[],s=0;s<e.length;s++){t=e.charCodeAt(s),a=[];do{a.push(255&t),t>>=8}while(t);r=r.concat(a.reverse())}return r},n19totext:{modifier:"",last:"",doubleline:!1,color:"",bgcolor:"",countOpen:0,get_char:function(e){if(this.last=e,""!=this.modifier){var t="&"+e+this.modifier+";",a=document.createElement("p");a.innerHTML=t;var r=a.textContent||a.innerText;return a=null,this.modifier="",r}return e},add_br:function(){return this.doubleline?"<br />"==this.last?(this.last="","\n"):(this.last="<br />",""):"\n"},closeAllTags:function(){var e="";this.italic&&(this.italic=!1,e+="</i>"),this.strong&&(this.strong=!1,e+="</strong>"),this.under&&(this.under=!1,e+="</u>");for(var t=0;t<this.countOpen>0;t++)e+="</c>";return this.countOpen=0,e},closeTags:function(){var e="";return this.countOpen>0&&(this.italic&&(e+="</i>"),this.strong&&(e+="</strong>"),this.under&&(e+="</u>"),e+="</c>",this.countOpen--),e},openTag:function(){var e="";return""==this.color&&""==this.bgcolor&&""==this.doubleline||(e="<c",""!=this.color&&(e+=".mfp-ac-"+this.color),""!=this.bgcolor&&(e+=".mfp-bgc-"+this.color),""!=this.doubleline&&(e+=".mfp-lh"),e+=">",this.countOpen++),(this.italic||this.strong||this.under)&&(this.italic&&(e+="<i>"),this.strong&&(e+="<strong>"),this.under&&(e+="<u>")),e},render:function(e,t){this.last="",this.doubleline=!1,this.italic=!1,this.strong=!1,this.under=!1;var a="",r="";a=this.openTag();for(var s="",c=0;c<e.length;c++){var h=e[c].toString(16).toUpperCase();1==h.length&&(h="0"+h);let i=h;if(" "+h,"00"==t)switch(h){case"00":a+=this.closeTags(),this.color="black",a+=this.openTag();break;case"01":a+=this.closeTags(),this.color="red",a+=this.openTag();break;case"02":a+=this.closeTags(),this.color="green",a+=this.openTag();break;case"03":a+=this.closeTags(),this.color="yellow",a+=this.openTag();break;case"04":a+=this.closeTags(),this.color="blue",a+=this.openTag();break;case"05":a+=this.closeTags(),this.color="magenta",a+=this.openTag();break;case"06":a+=this.closeTags(),this.color="cyan",a+=this.openTag();break;case"07":a+=this.closeTags(),this.color="white",a+=this.openTag();break;case"0A":"0A"==i&&(a+=this.closeTags());break;case"0B":"0B"==i&&""!=r&&("0B"==s?(a+=this.closeAllTags(),a+="\n",a+=this.openTag(),r="",s=""):s="0B");break;case"0D":a+=this.closeTags(),this.doubleline=!0,a+=this.openTag();break;case"0C":a+=this.closeTags(),this.doubleline=!1,a+=this.openTag();break;case"20":a+=this.get_char(" ");break;case"21":a+=this.get_char("!"),r+=" ";break;case"22":a+=this.get_char('"'),r+=" ";break;case"23":a+=this.get_char("#"),r+=" ";break;case"24":a+=this.get_char("¤"),r+=" ";break;case"25":a+=this.get_char("%"),r+=" ";break;case"26":a+=this.get_char("&"),r+=" ";break;case"27":a+=this.get_char("'"),r+=" ";break;case"28":a+=this.get_char("("),r+=" ";break;case"29":a+=this.get_char(")"),r+=" ";break;case"2A":a+=this.get_char("*"),r+=" ";break;case"2B":a+=this.get_char("+"),r+=" ";break;case"2C":a+=this.get_char(","),r+=" ";break;case"2D":a+=this.get_char("-"),r+=" ";break;case"2E":a+=this.get_char("."),r+=" ";break;case"2F":a+=this.get_char("/"),r+=" ";break;case"30":a+=this.get_char("0"),r+=" ";break;case"31":a+=this.get_char("1"),r+=" ";break;case"32":a+=this.get_char("2"),r+=" ";break;case"33":a+=this.get_char("3"),r+=" ";break;case"34":a+=this.get_char("4"),r+=" ";break;case"35":a+=this.get_char("5"),r+=" ";break;case"36":a+=this.get_char("6"),r+=" ";break;case"37":a+=this.get_char("7"),r+=" ";break;case"38":a+=this.get_char("8"),r+=" ";break;case"39":a+=this.get_char("9"),r+=" ";break;case"3A":a+=this.get_char(":"),r+=" ";break;case"3B":a+=this.get_char(";"),r+=" ";break;case"3C":a+=this.get_char("<"),r+=" ";break;case"3D":a+=this.get_char("="),r+=" ";break;case"3E":a+=this.get_char(">"),r+=" ";break;case"3F":a+=this.get_char("?"),r+=" ";break;case"40":a+=this.get_char("@"),r+=" ";break;case"41":a+=this.get_char("A"),r+=" ";break;case"42":a+=this.get_char("B"),r+=" ";break;case"43":a+=this.get_char("C"),r+=" ";break;case"44":a+=this.get_char("D"),r+=" ";break;case"45":a+=this.get_char("E"),r+=" ";break;case"46":a+=this.get_char("F"),r+=" ";break;case"47":a+=this.get_char("G"),r+=" ";break;case"48":a+=this.get_char("H"),r+=" ";break;case"49":a+=this.get_char("I"),r+=" ";break;case"4A":a+=this.get_char("J"),r+=" ";break;case"4B":a+=this.get_char("K"),r+=" ";break;case"4C":a+=this.get_char("L"),r+=" ";break;case"4D":a+=this.get_char("M"),r+=" ";break;case"4E":a+=this.get_char("N"),r+=" ";break;case"4F":a+=this.get_char("O"),r+=" ";break;case"50":a+=this.get_char("P"),r+=" ";break;case"51":a+=this.get_char("Q"),r+=" ";break;case"52":a+=this.get_char("R"),r+=" ";break;case"53":a+=this.get_char("S"),r+=" ";break;case"54":a+=this.get_char("T"),r+=" ";break;case"55":a+=this.get_char("U"),r+=" ";break;case"56":a+=this.get_char("V"),r+=" ";break;case"57":a+=this.get_char("W"),r+=" ";break;case"58":a+=this.get_char("X"),r+=" ";break;case"59":a+=this.get_char("Y"),r+=" ";break;case"5A":a+=this.get_char("Z"),r+=" ";break;case"5B":a+=this.get_char("["),r+=" ";break;case"5C":a+=this.get_char("\\"),r+=" ";break;case"5D":a+=this.get_char("]"),r+=" ";break;case"5E":a+=this.get_char("^"),r+=" ";break;case"5F":a+=this.get_char("_"),r+=" ";break;case"60":a+=this.get_char("`"),r+=" ";break;case"61":a+=this.get_char("a"),r+=" ";break;case"62":a+=this.get_char("b"),r+=" ";break;case"63":a+=this.get_char("c"),r+=" ";break;case"64":a+=this.get_char("d"),r+=" ";break;case"65":a+=this.get_char("e"),r+=" ";break;case"66":a+=this.get_char("f"),r+=" ";break;case"67":a+=this.get_char("g"),r+=" ";break;case"68":a+=this.get_char("h"),r+=" ";break;case"69":a+=this.get_char("i"),r+=" ";break;case"6A":a+=this.get_char("j"),r+=" ";break;case"6B":a+=this.get_char("k"),r+=" ";break;case"6C":a+=this.get_char("l"),r+=" ";break;case"6D":a+=this.get_char("m"),r+=" ";break;case"6E":a+=this.get_char("n"),r+=" ";break;case"6F":a+=this.get_char("o"),r+=" ";break;case"70":a+=this.get_char("p"),r+=" ";break;case"71":a+=this.get_char("q"),r+=" ";break;case"72":a+=this.get_char("r"),r+=" ";break;case"73":a+=this.get_char("s"),r+=" ";break;case"74":a+=this.get_char("t"),r+=" ";break;case"75":a+=this.get_char("u"),r+=" ";break;case"76":a+=this.get_char("v"),r+=" ";break;case"77":a+=this.get_char("w"),r+=" ";break;case"78":a+=this.get_char("x"),r+=" ";break;case"79":a+=this.get_char("y"),r+=" ";break;case"7A":a+=this.get_char("z"),r+=" ";break;case"7B":a+=this.get_char("{"),r+=" ";break;case"7C":a+=this.get_char("|"),r+=" ";break;case"7D":a+=this.get_char("}"),r+=" ";break;case"7E":a+=this.get_char("~"),r+=" ";break;case"80":a+="<i>",this.italic=!0;break;case"81":a+="</i>",this.italic=!1;break;case"82":a+="<u>",this.under=!0;break;case"83":a+="</u>",this.under=!1;break;case"84":a+="<strong>",this.strong=!0;break;case"85":a+="</strong>",this.strong=!1;break;case"8A":a+=this.add_br(),r+=" ";break;case"A0":a+=this.get_char("&nbsp;"),r+=" ";break;case"A1":a+=this.get_char("¡"),r+=" ";break;case"A2":a+=this.get_char("¢"),r+=" ";break;case"A3":a+=this.get_char("£"),r+=" ";break;case"A4":a+=this.get_char("$"),r+=" ";break;case"A5":a+=this.get_char("¥"),r+=" ";break;case"A6":a+=this.get_char(""),r+=" ";break;case"A7":a+=this.get_char("§"),r+=" ";break;case"A8":a+=this.get_char(""),r+=" ";break;case"A9":a+=this.get_char("`"),r+=" ";break;case"AA":a+=this.get_char("“"),r+=" ";break;case"AB":a+=this.get_char("«"),r+=" ";break;case"AC":a+=this.get_char("←"),r+=" ";break;case"AD":a+=this.get_char("↑"),r+=" ";break;case"AE":a+=this.get_char("→"),r+=" ";break;case"AF":a+=this.get_char("↓"),r+=" ";break;case"B0":a+=this.get_char("°"),r+=" ";break;case"B1":a+=this.get_char("±"),r+=" ";break;case"B2":a+=this.get_char("²"),r+=" ";break;case"B3":a+=this.get_char("³"),r+=" ";break;case"B4":a+=this.get_char("×"),r+=" ";break;case"B5":a+=this.get_char("µ"),r+=" ";break;case"B6":a+=this.get_char("¶"),r+=" ";break;case"B7":a+=this.get_char("•"),r+=" ";break;case"B8":a+=this.get_char("÷"),r+=" ";break;case"B9":a+=this.get_char("´"),r+=" ";break;case"BA":a+=this.get_char("”"),r+=" ";break;case"BB":a+=this.get_char("»"),r+=" ";break;case"BC":a+=this.get_char("¼"),r+=" ";break;case"BD":a+=this.get_char("½"),r+=" ";break;case"BE":a+=this.get_char("¾"),r+=" ";break;case"BF":a+=this.get_char("¿"),r+=" ";break;case"C0":a+=this.get_char(""),r+=" ";break;case"C1":this.modifier="grave";break;case"C2":this.modifier="acute";break;case"C3":this.modifier="circ";break;case"C4":this.modifier="tilde";break;case"C5":a+=this.get_char("¯"),r+=" ";break;case"C6":a+=this.get_char("˘"),r+=" ";break;case"C7":a+=this.get_char("˙"),r+=" ";break;case"C8":this.modifier="uml";break;case"C9":a+=this.get_char(""),r+=" ";break;case"CA":a+=this.get_char("˚"),r+=" ";break;case"CB":this.modifier="cedil";break;case"CC":a+=this.get_char("‑"),r+=" ";break;case"CD":a+=this.get_char("″"),r+=" ";break;case"CE":this.modifier="cedil";break;case"CF":a+=this.get_char("ˇ"),r+=" ";break;case"D0":a+=this.get_char("—"),r+=" ";break;case"D1":a+=this.get_char("¹"),r+=" ";break;case"D2":a+=this.get_char("®"),r+=" ";break;case"D3":a+=this.get_char("©"),r+=" ";break;case"D4":a+=this.get_char("™"),r+=" ";break;case"D5":a+=this.get_char("♪"),r+=" ";break;case"D6":a+=this.get_char("⁊"),r+=" ";break;case"D7":a+=this.get_char("¦"),r+=" ";break;case"D8":case"D9":case"DA":case"DB":a+=this.get_char(""),r+=" ";break;case"DC":a+=this.get_char("⅛"),r+=" ";break;case"DD":a+=this.get_char("⅜"),r+=" ";break;case"DE":a+=this.get_char("⅝"),r+=" ";break;case"DF":a+=this.get_char("⅞"),r+=" ";break;case"E0":a+=this.get_char("Ω"),r+=" ";break;case"E1":a+=this.get_char("Æ"),r+=" ";break;case"E2":a+=this.get_char("Ð"),r+=" ";break;case"E3":a+=this.get_char("ạ"),r+=" ";break;case"E4":a+=this.get_char("Ħ"),r+=" ";break;case"E5":a+=this.get_char(""),r+=" ";break;case"E6":a+=this.get_char("Ĳ"),r+=" ";break;case"E7":a+=this.get_char("Ŀ"),r+=" ";break;case"E8":a+=this.get_char("Ł"),r+=" ";break;case"E9":a+=this.get_char("Ø"),r+=" ";break;case"EA":a+=this.get_char("Œ"),r+=" ";break;case"EB":a+=this.get_char("ọ"),r+=" ";break;case"EC":a+=this.get_char("Þ"),r+=" ";break;case"ED":a+=this.get_char("Ŧ"),r+=" ";break;case"EE":a+=this.get_char("Ŋ"),r+=" ";break;case"EF":a+=this.get_char("ŉ"),r+=" ";break;case"F0":a+=this.get_char("ĸ"),r+=" ";break;case"F1":a+=this.get_char("æ"),r+=" ";break;case"F2":a+=this.get_char("đ"),r+=" ";break;case"F3":a+=this.get_char("#"),r+=" ";break;case"F4":a+=this.get_char("ħ"),r+=" ";break;case"F5":a+=this.get_char("%"),r+=" ";break;case"F6":a+=this.get_char("ĳ"),r+=" ";break;case"F7":a+=this.get_char("ŀ"),r+=" ";break;case"F8":a+=this.get_char("ł"),r+=" ";break;case"F9":a+=this.get_char("ø"),r+=" ";break;case"FA":a+=this.get_char("œ"),r+=" ";break;case"FB":a+=this.get_char("ß"),r+=" ";break;case"FC":a+=this.get_char("þ"),r+=" ";break;case"FD":a+=this.get_char("ŧ"),r+=" ";break;case"FE":a+=this.get_char("ŋ"),r+=" ";break;case"FF":a+=this.get_char("­"),r+=" "}}return a+=this.closeTags(),a+=this.closeTags()}}};s.player=e,s.track=a,s.render(t),console.log("Trying to load "+t+" with FileTrack Loader .src")},console.log("STL reader added")},2:function(e,t,a){"use strict";a.d(t,"a",function(){return s});const r=a(1);class s{constructor(e,t,a){let s=Date.now()+"-"+Math.random()+"-"+Math.random();this.id=r(s),this.track=null,this.eventListeners=[],this.startTime=e,this.endTime=t,this.text=a,this.showing=!1,this.cue=new VTTCue(e,t,a),this.align=this.cue.align,this.line=this.cue.line,this.size=this.cue.size}setTrack(e){this.track=e}on(e,t){let a=Date.now()+"-"+Math.random()+"-"+Math.random(),s=r(a);this.eventListeners.push({eventName:e,callback:t,id:s})}getCueAsHTML(){return this.cue.getCueAsHTML()}off(e){let t=[];for(let a in this.eventListeners)a.id!==e&&t.push(a);return this.eventListeners=t,!0}dispatchEvent(e,t){for(let a of this.eventListeners)a.eventName===e&&a.callback(t)}check(e){e<this.startTime||e>this.endTime?this.showing&&(this.dispatchEvent("exit",this),this.showing=!1):this.showing||(this.dispatchEvent("enter",this),this.showing=!0)}}},3:function(e,t){var a,r;a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=r.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],a=0,r=0;a<e.length;a++,r+=8)t[r>>>5]|=e[a]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],a=0;a<32*e.length;a+=8)t.push(e[a>>>5]>>>24-a%32&255);return t},bytesToHex:function(e){for(var t=[],a=0;a<e.length;a++)t.push((e[a]>>>4).toString(16)),t.push((15&e[a]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],a=0;a<e.length;a+=2)t.push(parseInt(e.substr(a,2),16));return t},bytesToBase64:function(e){for(var t=[],r=0;r<e.length;r+=3)for(var s=e[r]<<16|e[r+1]<<8|e[r+2],c=0;c<4;c++)8*r+6*c<=8*e.length?t.push(a.charAt(s>>>6*(3-c)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],r=0,s=0;r<e.length;s=++r%4)0!=s&&t.push((a.indexOf(e.charAt(r-1))&Math.pow(2,-2*s+8)-1)<<2*s|a.indexOf(e.charAt(r))>>>6-2*s);return t}},e.exports=r},4:function(e,t){function a(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(a(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&a(e.slice(0,0))}(e)||!!e._isBuffer)}}});