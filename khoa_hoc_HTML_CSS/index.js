function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"index.pug":"doctype html\r\nhtml(lang=\"en\")\r\n  head\r\n    meta(charset=\"UTF-8\")\r\n    meta(name=\"viewport\", content=\"width=device-width, initial-scale=1.0\")\r\n    title Tour Du Lịch\r\n    link(rel=\"preconnect\" href=\"https:\u002F\u002Ffonts.googleapis.com\")\r\n    link(rel=\"preconnect\" href=\"https:\u002F\u002Ffonts.gstatic.com\" crossorigin)\r\n    link(href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Inter:wght@500;600&display=swap\" rel=\"stylesheet\")\r\n    link(rel=\"stylesheet\" href=\".\u002Fmain.css\")\r\n  body \r\n    .tour-list-container"};
var pug_indent = [];
;pug_debug_line = 1;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n\u003Chtml lang=\"en\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n  \u003Chead\u003E";
;pug_debug_line = 4;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n    \u003Cmeta charset=\"UTF-8\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n    \u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n    \u003Ctitle\u003E";
;pug_debug_line = 6;pug_debug_filename = "index.pug";
pug_html = pug_html + "Tour Du Lịch\u003C\u002Ftitle\u003E";
;pug_debug_line = 7;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n    \u003Clink rel=\"preconnect\" href=\"https:\u002F\u002Ffonts.googleapis.com\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n    \u003Clink" + (" rel=\"preconnect\" href=\"https:\u002F\u002Ffonts.gstatic.com\""+pug_attr("crossorigin", true, true, true)) + "\u003E";
;pug_debug_line = 9;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n    \u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Inter:wght@500;600&amp;display=swap\" rel=\"stylesheet\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n    \u003Clink rel=\"stylesheet\" href=\".\u002Fmain.css\"\u003E\n  \u003C\u002Fhead\u003E";
;pug_debug_line = 11;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n  \u003Cbody\u003E";
;pug_debug_line = 11;pug_debug_filename = "index.pug";
pug_html = pug_html + " ";
;pug_debug_line = 12;pug_debug_filename = "index.pug";
pug_html = pug_html + "\n    \u003Cdiv class=\"tour-list-container\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}