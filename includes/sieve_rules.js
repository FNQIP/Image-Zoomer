/* 自动生成自 sieve.jsn —— 请勿手工修改；重新生成: node tools/build-sieve-rules.js */
/* eslint-disable */
var IZ_RULE_FN = {
    "to\u0000:\nvar u=decodeURIComponent($[2].replace(/\\+/g,' ')),n\nthis.node.IMGS_fallback_zoom=u\nn=this.find({href: u, IMGS_TRG: this.node})\nreturn n&&typeof n!='number'||n===null? (Array.isArray(n) ? n.join('\\n') : n) : ($[1]?'':u)": function(){var $ = arguments; 
var u=decodeURIComponent($[2].replace(/\+/g,' ')),n
this.node.IMGS_fallback_zoom=u
n=this.find({href: u, IMGS_TRG: this.node})
return n&&typeof n!='number'||n===null? (Array.isArray(n) ? n.join('\n') : n) : ($[1]?'':u)
},
    "url\u0000: $[1] ? '' : $[0]": function(){var $ = arguments; return  $[1] ? '' : $[0]
},
    "res\u0000var i=!$[1]&&$._.match(RegExp(':\"'+$[2]+':?\",\"(?:[^\"]+\":[^,]+,\")+?ou\":(\"[^\"]+\")')),d=decodeURIComponent\n$ = $[1] && d(d($[1])) || i && JSON.parse(i[1])\nreturn $ ? (!$.lastIndexOf('http',0) ? $ : 'http://' + $) : !1": function($){var i=!$[1]&&$._.match(RegExp(':"'+$[2]+':?","(?:[^"]+":[^,]+,")+?ou":("[^"]+")')),d=decodeURIComponent
$ = $[1] && d(d($[1])) || i && JSON.parse(i[1])
return $ ? (!$.lastIndexOf('http',0) ? $ : 'http://' + $) : !1
},
    "to\u0000:\nreturn $[2] ? ($[1]||'http://') + $[2] : $[1].replace(/\\.cf\\.\\w{3,4}$/, '')": function(){var $ = arguments; 
return $[2] ? ($[1]||'http://') + $[2] : $[1].replace(/\.cf\.\w{3,4}$/, '')
},
    "to\u0000:\nvar u = (!$[1].lastIndexOf('http',0) ? '' : 'http://') + $[1];\nif(!$[2]) try {\nvar p,o=JSON.parse(document.evaluate(\"string(ancestor::div[@data-bem][1]/@data-bem)\", this.node, null, 2, null).stringValue);\nfor (p in o){u = o[p].dups.slice(0,2).map(function(el) {return (el.url||el.img_href)+'\\n';}) + u; break}\n} catch(ex){}\nreturn $[2] ? '#' + u + $[2] + 'orig\\n' + u + $[2] + 'X#XXL L#' : u": function(){var $ = arguments; 
var u = (!$[1].lastIndexOf('http',0) ? '' : 'http://') + $[1];
if(!$[2]) try {
var p,o=JSON.parse(document.evaluate("string(ancestor::div[@data-bem][1]/@data-bem)", this.node, null, 2, null).stringValue);
for (p in o){u = o[p].dups.slice(0,2).map(function(el) {return (el.url||el.img_href)+'\n';}) + u; break}
} catch(ex){}
return $[2] ? '#' + u + $[2] + 'orig\n' + u + $[2] + 'X#XXL L#' : u
},
    "to\u0000:\nvar m = document.evaluate('./ancestor-or-self::a[contains(@m, \"imgurl\") or contains(@m, \"murl\")]/@m', this.node ,null,2,null).stringValue\nm = m && JSON.parse(m);\nm = m && (m.imgurl||m.murl)\nreturn (m ? m + '\\n' : '') + $[1]": function(){var $ = arguments; 
var m = document.evaluate('./ancestor-or-self::a[contains(@m, "imgurl") or contains(@m, "murl")]/@m', this.node ,null,2,null).stringValue
m = m && JSON.parse(m);
m = m && (m.imgurl||m.murl)
return (m ? m + '\n' : '') + $[1]
},
    "url\u0000: $[0].indexOf('mediaurl=h')>0 ? '' : $[1] + 'view=detailV2&id=' + $[2]": function(){var $ = arguments; return  $[0].indexOf('mediaurl=h')>0 ? '' : $[1] + 'view=detailV2&id=' + $[2]
},
    "res\u0000var m = $[0].match(/mediaurl=(http[^&]+)/);\nif(m)return decodeURIComponent(m[1])\nm = $._.match(/class=\"mainImage\"[^>]+?src2=\"([^\"]+)/)\nif(m)return m[1]\nm = document.evaluate('./ancestor-or-self::a[contains(@m, \"imgurl\") or contains(@m, \"murl\")]/@m',this.node,null,2,null).stringValue\nreturn m && JSON.parse(m).imgurl || null": function($){var m = $[0].match(/mediaurl=(http[^&]+)/);
if(m)return decodeURIComponent(m[1])
m = $._.match(/class="mainImage"[^>]+?src2="([^"]+)/)
if(m)return m[1]
m = document.evaluate('./ancestor-or-self::a[contains(@m, "imgurl") or contains(@m, "murl")]/@m',this.node,null,2,null).stringValue
return m && JSON.parse(m).imgurl || null
},
    "to\u0000:\nif($[2]||$[3])return $[2]||$[3]\nvar m=$[1].match(/(https?)(?::\\/\\/?|%3A(?:%2F){1,2})(?!.+https?:\\/)(.+)/)\nreturn m ? m[1]+'://'+m[2] : $[1]": function(){var $ = arguments; 
if($[2]||$[3])return $[2]||$[3]
var m=$[1].match(/(https?)(?::\/\/?|%3A(?:%2F){1,2})(?!.+https?:\/)(.+)/)
return m ? m[1]+'://'+m[2] : $[1]
},
    "to\u0000:\nvar i=this.node.closest('li');\ni=i&&i.querySelector('img[data-image-result-overlay-image]');\nreturn i && i.dataset.src || decodeURIComponent($[1])": function(){var $ = arguments; 
var i=this.node.closest('li');
i=i&&i.querySelector('img[data-image-result-overlay-image]');
return i && i.dataset.src || decodeURIComponent($[1])
},
    "to\u0000:\nvar c=$[3]&&$[3].match(/-?(?:Ic\\d\\d|mo)/); c=c&&('-'+c[0])||'';\nreturn '#' + $[1] + ($[5] ? $[5] + '=' : $[2]) + (c?'s1600'+c:'s0') + ($[4]||($[5]?'':'/')) + '\\n' +\n $[1] + ($[5] ? $[5] + '=' : $[2]) + 's1024' + c + ($[4]||($[5]?'':'/'))": function(){var $ = arguments; 
var c=$[3]&&$[3].match(/-?(?:Ic\d\d|mo)/); c=c&&('-'+c[0])||'';
return '#' + $[1] + ($[5] ? $[5] + '=' : $[2]) + (c?'s1600'+c:'s0') + ($[4]||($[5]?'':'/')) + '\n' +
 $[1] + ($[5] ? $[5] + '=' : $[2]) + 's1024' + c + ($[4]||($[5]?'':'/'))
},
    "to\u0000:\nif($[7])return $[1] + 'thumb/' + $[4] + '/' + $[7] + '2048px-' + $[5] + '.jpg';\nreturn '#' + $[1] + ($[3] ? $[3] + '/' : '') + $[4] + (!$[8] && !$[1].lastIndexOf('upload.wikimedia.org',0) && !/^gif/i.test($[6]) ? '\\n'+ $[1] + 'thumb/' + $[4] + '/1024px-' + $[5] + (/^svg/i.test($[6]) ? '.png' : '') : ($[8] ? $[8] + 'latest' : ''))": function(){var $ = arguments; 
if($[7])return $[1] + 'thumb/' + $[4] + '/' + $[7] + '2048px-' + $[5] + '.jpg';
return '#' + $[1] + ($[3] ? $[3] + '/' : '') + $[4] + (!$[8] && !$[1].lastIndexOf('upload.wikimedia.org',0) && !/^gif/i.test($[6]) ? '\n'+ $[1] + 'thumb/' + $[4] + '/1024px-' + $[5] + (/^svg/i.test($[6]) ? '.png' : '') : ($[8] ? $[8] + 'latest' : ''))
},
    "to\u0000:\nif($[0].indexOf('.mp4?')>0)return''\nvar p=this.node\nif(window.location.hostname.slice(-13)=='.facebook.com' && (document.evaluate('./ancestor::div[contains(@class, \"stageWrapper\")]', p, null, 9, null).singleNodeValue || p.matches('.UFICommentContent>div[data-testid], a>abbr>span.timestampContent, #fbProfileCover>a:first-child')))return''\np=p.pathname||(p=p.parentNode)&&p.pathname||(p=p.parentNode)&&p.pathname\np=p&&p.match(/^\\/([\\w.-]+)\\/?$/)\nreturn 'https://facebook.com/' + (p?p[1].replace(/^\\w+-(\\d{8,})$/, '$1')+'/photos/' : 'photo.php?fbid=') + $[1]": function(){var $ = arguments; 
if($[0].indexOf('.mp4?')>0)return''
var p=this.node
if(window.location.hostname.slice(-13)=='.facebook.com' && (document.evaluate('./ancestor::div[contains(@class, "stageWrapper")]', p, null, 9, null).singleNodeValue || p.matches('.UFICommentContent>div[data-testid], a>abbr>span.timestampContent, #fbProfileCover>a:first-child')))return''
p=p.pathname||(p=p.parentNode)&&p.pathname||(p=p.parentNode)&&p.pathname
p=p&&p.match(/^\/([\w.-]+)\/?$/)
return 'https://facebook.com/' + (p?p[1].replace(/^\w+-(\d{8,})$/, '$1')+'/photos/' : 'photo.php?fbid=') + $[1]
},
    "url\u0000: this.node.dataset && this.node.dataset.ploi ? '' : 'https://www.facebook.com/' + ($[1] ? $[1] + $[2] : 'photo.php?fbid=' + $[2])": function(){var $ = arguments; return  this.node.dataset && this.node.dataset.ploi ? '' : 'https://www.facebook.com/' + ($[1] ? $[1] + $[2] : 'photo.php?fbid=' + $[2])
},
    "res\u0000if($._===void 0)return this.node.dataset.ploi\nu=$._.match(RegExp('='+($[2]||$[1])+'(?:[^\">]+\"\\\\s+)+?data-ploi=\"([^\"]+)')) || $._.match(/=\"og:image\" content=\"([^\"]+)/)\nreturn u && u[1]": function($){if($._===void 0)return this.node.dataset.ploi
u=$._.match(RegExp('='+($[2]||$[1])+'(?:[^">]+"\\s+)+?data-ploi="([^"]+)')) || $._.match(/="og:image" content="([^"]+)/)
return u && u[1]
},
    "to\u0000:\nvar x = this.node,p=x&&x.parentNode; $=$[0]\nif (x.dataset.src_big) $ = x.dataset.src_big.split('|')[0]\nelse if (x) {\n if (p && p.href && x.classList.contains('page_doc_photo')) $ = p.href + '&wnd=1';\n else if ((x=x.getAttribute('onclick')||p.getAttribute('onclick')) && (x=x.match(/\\{\"?base\"?:[^\\}]+\\}/))) {\n  x = JSON.parse(x[0].replace(/\"?\\b(base|[wxyz])_?\"?:/g, '\"$1\":').replace(/(\\[|(,[\\d,]+)?\\])/g, ''));\n  $ = (x.w ? '#' + x.base + x.w + '.jpg\\n' : '') + x.base + (x.z || x.y || x.x) + '.jpg';\n }\n}\nreturn $": function(){var $ = arguments; 
var x = this.node,p=x&&x.parentNode; $=$[0]
if (x.dataset.src_big) $ = x.dataset.src_big.split('|')[0]
else if (x) {
 if (p && p.href && x.classList.contains('page_doc_photo')) $ = p.href + '&wnd=1';
 else if ((x=x.getAttribute('onclick')||p.getAttribute('onclick')) && (x=x.match(/\{"?base"?:[^\}]+\}/))) {
  x = JSON.parse(x[0].replace(/"?\b(base|[wxyz])_?"?:/g, '"$1":').replace(/(\[|(,[\d,]+)?\])/g, ''));
  $ = (x.w ? '#' + x.base + x.w + '.jpg\n' : '') + x.base + (x.z || x.y || x.x) + '.jpg';
 }
}
return $
},
    "url\u0000: 'vk.com/al_photos.php :list=' + ($[3] ? $[2]+$[3]:((this.node.parentNode.getAttribute('onclick')+'').match(/wall-[\\d_]+/)||'')+'')+'&act=show&al=1&photo='+$[1]": function(){var $ = arguments; return  'vk.com/al_photos.php :list=' + ($[3] ? $[2]+$[3]:((this.node.parentNode.getAttribute('onclick')+'').match(/wall-[\d_]+/)||'')+'')+'&act=show&al=1&photo='+$[1]
},
    "res\u0000var m = /[\\-\\d_]+/, img, ret = null, cache = {'_arr': []}, i, pid = $.url[1].substr($.url[1].lastIndexOf('=') + 1), x = JSON.parse($._.substring($._.indexOf('['), $._.lastIndexOf(']<!><!json>') + 1));\nfor (i in x) {\n ret = x[i].w_src ? ['#' + x[i].w_src] : [];\n ret.push(x[i].z_src || x[i].y_src || x[i].x_src);\n if (x[i].id == pid) { img = [[ret]] }\n else { cache[x[i].id] = ret; cache._arr.push('a[href^=\"/photo'+x[i].id+'\"]') }\n}\ncache._arr.length && [].forEach.call(document.body.querySelectorAll(cache._arr.join(',')), function(node) {\nvar x = cache[node.pathname.match(m)[0]];\nif (!node.IMGS_c) {\n node.IMGS_c_resolved = x;\n node.firstElementChild && (node.firstElementChild.IMGS_c_resolved = x);\n}\n});\nreturn img;": function($){var m = /[\-\d_]+/, img, ret = null, cache = {'_arr': []}, i, pid = $.url[1].substr($.url[1].lastIndexOf('=') + 1), x = JSON.parse($._.substring($._.indexOf('['), $._.lastIndexOf(']<!><!json>') + 1));
for (i in x) {
 ret = x[i].w_src ? ['#' + x[i].w_src] : [];
 ret.push(x[i].z_src || x[i].y_src || x[i].x_src);
 if (x[i].id == pid) { img = [[ret]] }
 else { cache[x[i].id] = ret; cache._arr.push('a[href^="/photo'+x[i].id+'"]') }
}
cache._arr.length && [].forEach.call(document.body.querySelectorAll(cache._arr.join(',')), function(node) {
var x = cache[node.pathname.match(m)[0]];
if (!node.IMGS_c) {
 node.IMGS_c_resolved = x;
 node.firstElementChild && (node.firstElementChild.IMGS_c_resolved = x);
}
});
return img;
},
    "res\u0000var u=JSON.parse($._).sizes.size.pop().source\nreturn u + (u.indexOf('/play/')>0 ? '#mp4' : '')": function($){var u=JSON.parse($._).sizes.size.pop().source
return u + (u.indexOf('/play/')>0 ? '#mp4' : '')
},
    "to\u0000:\nreturn document.evaluate('./ancestor-or-self::*[@data-super-full-img]/@data-super-full-img',this.node,null,2,null).stringValue || ($[5] ? ('//'+ ($[4] ? $[4]+$[2]+$[5] : 'fc'+$[1]+$[2]+$[3]+'/'+$[5])) : $[0])": function(){var $ = arguments; 
return document.evaluate('./ancestor-or-self::*[@data-super-full-img]/@data-super-full-img',this.node,null,2,null).stringValue || ($[5] ? ('//'+ ($[4] ? $[4]+$[2]+$[5] : 'fc'+$[1]+$[2]+$[3]+'/'+$[5])) : $[0])
},
    "to\u0000:\nif ($[4]=='mp4'||$[4]=='webm') $[4]='gif'\nvar l = ($[2][0]=='i' ? '//' : '')+'i.'+($[1]||'')+$[2]+'/'+$[3], x = '.'+($[4] || 'jpg')\nreturn $[4][0]=='g' ? l + '.#mp4 gif#' : ('#' + l + ($[4] ? x : '.jpg') + ($[2][0] === 'f' ? '' : '\\n' + l + 'h' + x))": function(){var $ = arguments; 
if ($[4]=='mp4'||$[4]=='webm') $[4]='gif'
var l = ($[2][0]=='i' ? '//' : '')+'i.'+($[1]||'')+$[2]+'/'+$[3], x = '.'+($[4] || 'jpg')
return $[4][0]=='g' ? l + '.#mp4 gif#' : ('#' + l + ($[4] ? x : '.jpg') + ($[2][0] === 'f' ? '' : '\n' + l + 'h' + x))
},
    "url\u0000: $[1] ? 'https://imgur.com/' + ($[1] == 'a' ? 'a/' + $[2] + '/embed' : $[1] + '/' + $[2] + '/hit.json') : $[0]": function(){var $ = arguments; return  $[1] ? 'https://imgur.com/' + ($[1] == 'a' ? 'a/' + $[2] + '/embed' : $[1] + '/' + $[2] + '/hit.json') : $[0]
},
    "res\u0000var ret = [], im, g, c, x, i, t, u, l = '//i.imgur.com/', p404='404 page</title>';\n\ntry {\n if (typeof $._ == 'string' && $._[0]!='{') {\n   if($._.lastIndexOf(p404, 300) > -1) throw true;\n   x = $._.match(/(?:album|image)\\s*[:=] +([^\\n\\r]+),/);\n   x = JSON.parse(x[1])\n   t = this.t; delete this.t;\n   if (!t&&'title' in x)t = x;\n   x.album_images&&(x=x.album_images);\n   x.images&&(x=x.images)||x.items&&(x=x.items);\n } else {\n  $._=JSON.parse($._);\n  if($._.album){\n   x=$._.album\n   t={title:x.title, description: x.description}\n   x=x.images\n  } else {\n   x=$._.data.image\n   if (x.is_album) {\n    t={title:x.title, description: x.description}\n    if (x.album_images.count != x.album_images.images.length) {\n     this.t=t\n     return {loop: l+'a/'+$[2]}\n    }\n    x=x.album_images.images\n   }\n  }\n  delete this.t;\n }\n\n if (!x)throw $._.lastIndexOf(p404, 300) > -1;\n\n t = t && [t.title, t.description].filter(Boolean).join(' - ') || !1\n x = Array.isArray(x)?x:[x]\n for (i = 0; i < x.length; ++i) {\n  im = x[i].image||x[i];\n  c = [im.title, im.caption, im.description].filter(Boolean).join(' - ');\n  if (!i && t && t!=c) c='['+t+'] ' + c;\n  im.ext = im.ext || x[i].links.original.match(/\\.[^.]+$/)[0];\n  g = (''+im.animated)=='true'\n  u = l + im.hash;\n  ret.push([!g && im.width <= 1200 && im.height <= 1200 ? u + im.ext : (g ? [u + '.mp4', u + '.gif'] : ['#' + u + im.ext, u + 'h' + im.ext]), c]);\n }\n} catch (ex) {}\nreturn ret.length ? ret : null": function($){var ret = [], im, g, c, x, i, t, u, l = '//i.imgur.com/', p404='404 page</title>';

try {
 if (typeof $._ == 'string' && $._[0]!='{') {
   if($._.lastIndexOf(p404, 300) > -1) throw true;
   x = $._.match(/(?:album|image)\s*[:=] +([^\n\r]+),/);
   x = JSON.parse(x[1])
   t = this.t; delete this.t;
   if (!t&&'title' in x)t = x;
   x.album_images&&(x=x.album_images);
   x.images&&(x=x.images)||x.items&&(x=x.items);
 } else {
  $._=JSON.parse($._);
  if($._.album){
   x=$._.album
   t={title:x.title, description: x.description}
   x=x.images
  } else {
   x=$._.data.image
   if (x.is_album) {
    t={title:x.title, description: x.description}
    if (x.album_images.count != x.album_images.images.length) {
     this.t=t
     return {loop: l+'a/'+$[2]}
    }
    x=x.album_images.images
   }
  }
  delete this.t;
 }

 if (!x)throw $._.lastIndexOf(p404, 300) > -1;

 t = t && [t.title, t.description].filter(Boolean).join(' - ') || !1
 x = Array.isArray(x)?x:[x]
 for (i = 0; i < x.length; ++i) {
  im = x[i].image||x[i];
  c = [im.title, im.caption, im.description].filter(Boolean).join(' - ');
  if (!i && t && t!=c) c='['+t+'] ' + c;
  im.ext = im.ext || x[i].links.original.match(/\.[^.]+$/)[0];
  g = (''+im.animated)=='true'
  u = l + im.hash;
  ret.push([!g && im.width <= 1200 && im.height <= 1200 ? u + im.ext : (g ? [u + '.mp4', u + '.gif'] : ['#' + u + im.ext, u + 'h' + im.ext]), c]);
 }
} catch (ex) {}
return ret.length ? ret : null
},
    "to\u0000:\nreturn $[1]+($[2] ? $[2]+($[3]?'-600x600':($[4]?'-0x0':''))+$[5] : $[6]+($[7][0]=='b'?3:5))": function(){var $ = arguments; 
return $[1]+($[2] ? $[2]+($[3]?'-600x600':($[4]?'-0x0':''))+$[5] : $[6]+($[7][0]=='b'?3:5))
},
    "to\u0000:\nif($[1]) return $[1] + ($[2] ? $[2] : ($[3] ? $[3].replace(/(\\d+)_\\d+$/, '$1') + '_600' : '#originals 736x 564x#/'))\nvar n=this.node, p=document.evaluate('./ancestor::a[starts-with(@href,\"/pin/\")]//img[contains(@src,\"pinimg.com\")]',n,null,9,null).singleNodeValue\np=p?this.find({src: p.src, IMGS_TRG: n}):''\nreturn (Array.isArray(p) ? p.join('\\n') : (p === null ? 'null' : p)) || ''": function(){var $ = arguments; 
if($[1]) return $[1] + ($[2] ? $[2] : ($[3] ? $[3].replace(/(\d+)_\d+$/, '$1') + '_600' : '#originals 736x 564x#/'))
var n=this.node, p=document.evaluate('./ancestor::a[starts-with(@href,"/pin/")]//img[contains(@src,"pinimg.com")]',n,null,9,null).singleNodeValue
p=p?this.find({src: p.src, IMGS_TRG: n}):''
return (Array.isArray(p) ? p.join('\n') : (p === null ? 'null' : p)) || ''
},
    "res\u0000var ret=[],x=(new window.DOMParser()).parseFromString($._,'text/xml').querySelectorAll('file>server,file>name,file>bucket');\nfor(var i=0,l=x.length;i<l;i+=3)\n  ret.push(['http://img'+x[i].textContent+'.imageshack.us/img'+x[i].textContent+'/'+x[i+2].textContent+'/'+x[i+1].textContent, null]);\nreturn ret": function($){var ret=[],x=(new window.DOMParser()).parseFromString($._,'text/xml').querySelectorAll('file>server,file>name,file>bucket');
for(var i=0,l=x.length;i<l;i+=3)
  ret.push(['http://img'+x[i].textContent+'.imageshack.us/img'+x[i].textContent+'/'+x[i+2].textContent+'/'+x[i+1].textContent, null]);
return ret
},
    "to\u0000:\nvar v = $[1]&&$[1].replace(/(video)_thumb(\\/[^.]+).+/, '$1$2.mp4'), f = $[0].match(/(?:format=|\\.)([a-z]{3,4})(?:[:&?]|$)/), p = '?format='+(f&&f[1]||'jpg')+'&name='\nif($[1] && v.length!=$[1].length) return v\nreturn !$[3]||$[3]=='card_img' ? '#//' + ($[1] || $[2]) + p + 'orig\\n' + '//' + $[1] + p + 'large' : $[2] + $[4]": function(){var $ = arguments; 
var v = $[1]&&$[1].replace(/(video)_thumb(\/[^.]+).+/, '$1$2.mp4'), f = $[0].match(/(?:format=|\.)([a-z]{3,4})(?:[:&?]|$)/), p = '?format='+(f&&f[1]||'jpg')+'&name='
if($[1] && v.length!=$[1].length) return v
return !$[3]||$[3]=='card_img' ? '#//' + ($[1] || $[2]) + p + 'orig\n' + '//' + $[1] + p + 'large' : $[2] + $[4]
},
    "url\u0000: 'https://' + (!$[0].lastIndexOf('pic',0) ? $[0] : 'twitter.com/i/' + ($[2]=='photo' ? 'tweet/html?id=' : 'cards/tfw/v1/') + $[1])": function(){var $ = arguments; return  'https://' + (!$[0].lastIndexOf('pic',0) ? $[0] : 'twitter.com/i/' + ($[2]=='photo' ? 'tweet/html?id=' : 'cards/tfw/v1/') + $[1])
},
    "res\u0000var x\nif (x = $._.slice && $._.slice(40,200).match(/=\"0;URL=([^\"]+)/)) return{loop: x[1]};\ntry{$._ = JSON.parse($._)}catch(ex){}\nif (x = $._.tweet_html && $._.tweet_html.match(/data-image-url=\"([^\"]+)/g)) x=x.map(function(i){i=i.slice(16).replace(/:[^:\\/]+$/,''); return [['#'+i+':orig', i+':large']]});\nelse if (x=($._.tweet_html||$._).match(/(?:video|pbs)\\.twimg\\.com(\\\\)?\\/\\w+_video(?:_thumb)?(\\\\)?\\/[^&\"]+/)) x='https://'+x[0].replace(/\\\\/g, '').replace(/(_video)_thumb(\\/[^.]+).*/, '$1$2.mp4')\nif(x) {\n var t=($._.tweet_html||$._).match(/<p[^>]+>(.+?)<\\/p>/),n=($._.tweet_html||$._).match(/data-screen-name=\"([^\"]+)/);\n t = (n?('@'+n[1]):'')+(t?(n?' - ':'')+t[1]:'')\n if(x.pop)x[0] = [x[0], t]; else x=[x,t]\n}\nreturn x": function($){var x
if (x = $._.slice && $._.slice(40,200).match(/="0;URL=([^"]+)/)) return{loop: x[1]};
try{$._ = JSON.parse($._)}catch(ex){}
if (x = $._.tweet_html && $._.tweet_html.match(/data-image-url="([^"]+)/g)) x=x.map(function(i){i=i.slice(16).replace(/:[^:\/]+$/,''); return [['#'+i+':orig', i+':large']]});
else if (x=($._.tweet_html||$._).match(/(?:video|pbs)\.twimg\.com(\\)?\/\w+_video(?:_thumb)?(\\)?\/[^&"]+/)) x='https://'+x[0].replace(/\\/g, '').replace(/(_video)_thumb(\/[^.]+).*/, '$1$2.mp4')
if(x) {
 var t=($._.tweet_html||$._).match(/<p[^>]+>(.+?)<\/p>/),n=($._.tweet_html||$._).match(/data-screen-name="([^"]+)/);
 t = (n?('@'+n[1]):'')+(t?(n?' - ':'')+t[1]:'')
 if(x.pop)x[0] = [x[0], t]; else x=[x,t]
}
return x
},
    "to\u0000:\nreturn decodeURIComponent(window.atob($[1].replace(/_/g, '/')).replace(/^[^h]*(https?:\\/\\/[^\\/]+\\/([\\w\\-.~:/?#\\[\\]@!$&'()*+,;=]|%\\d\\d)+).*/, '$1'))": function(){var $ = arguments; 
return decodeURIComponent(window.atob($[1].replace(/_/g, '/')).replace(/^[^h]*(https?:\/\/[^\/]+\/([\w\-.~:/?#\[\]@!$&'()*+,;=]|%\d\d)+).*/, '$1'))
},
    "to\u0000:\nvar n = this.node, i = n.dataset, t = n.textContent.trim();\nt=/^[^\\s\\/]{4,70}\\/[^\\s]/.test(t)?t.replace(/^(?!https?:)(\\/\\/)?/, 'http://'):'';\ni = i.expandedUrl || i.imageUrl || i.url || i.fullUrl || (i = n.parentNode) && i.dataset.expandedUrl || (t && !/^(https?:\\/\\/)?t\\.co/.test(t) && t) || n.style.backgroundImage.replace(/^(?:url\\(['\"]?([^'\")]+))?.+/, '$1');\ni = i && this.find({href: i, IMGS_TRG: n});\nreturn (Array.isArray(i) ? i.join('\\n') : (i === null ? 'null' : i)) || ''": function(){var $ = arguments; 
var n = this.node, i = n.dataset, t = n.textContent.trim();
t=/^[^\s\/]{4,70}\/[^\s]/.test(t)?t.replace(/^(?!https?:)(\/\/)?/, 'http://'):'';
i = i.expandedUrl || i.imageUrl || i.url || i.fullUrl || (i = n.parentNode) && i.dataset.expandedUrl || (t && !/^(https?:\/\/)?t\.co/.test(t) && t) || n.style.backgroundImage.replace(/^(?:url\(['"]?([^'")]+))?.+/, '$1');
i = i && this.find({href: i, IMGS_TRG: n});
return (Array.isArray(i) ? i.join('\n') : (i === null ? 'null' : i)) || ''
},
    "to\u0000:\nvar m = this.node.closest('a[href],div[aria-labelledby]')\nif(m&&m.localName!='a')m=m.querySelector('#'+m.getAttribute('aria-labelledby').split(/\\s+/)[0] + ' a')\nif(!m)m=this.node.matches('main[role=main] header div[role=button]>canvas+span>img, main[role=main] header button>img')&&window.location\nm=m&&m.href.match(/\\/\\/www\\.instagr(?:\\.am|am\\.com)\\/([^\\/]+)\\/?[^\\/]*/)\nreturn m ? 'https://www.instagram.com/'+m[1]+'/#!ppic' : $[0]": function(){var $ = arguments; 
var m = this.node.closest('a[href],div[aria-labelledby]')
if(m&&m.localName!='a')m=m.querySelector('#'+m.getAttribute('aria-labelledby').split(/\s+/)[0] + ' a')
if(!m)m=this.node.matches('main[role=main] header div[role=button]>canvas+span>img, main[role=main] header button>img')&&window.location
m=m&&m.href.match(/\/\/www\.instagr(?:\.am|am\.com)\/([^\/]+)\/?[^\/]*/)
return m ? 'https://www.instagram.com/'+m[1]+'/#!ppic' : $[0]
},
    "url\u0000: $[2] || $[3] ? $[0] : 'https://www.instagram.com/p/' + $[1] + '/?__a=1'": function(){var $ = arguments; return  $[2] || $[3] ? $[0] : 'https://www.instagram.com/p/' + $[1] + '/?__a=1'
},
    "res\u0000var i,c,u\nif($._[0]!='{') {\n i=$._.match(/:\"profilePage_(\\d+)\"/)\n return i && {loop: 'https://i.instagram.com/api/v1/users/' + i[1] + '/info/'} || null\n}\n$._=JSON.parse($._)\nif($[3]) return [$._.user.hd_profile_pic_url_info.url, [$._.user.full_name, '('+'@' + $._.user.username+') | ', $._.user.biography].join(' ')]\n$=$._.graphql.shortcode_media\ni=$.edge_sidecar_to_children\ni=i&&i.edges\nc=$.edge_media_to_caption.edges,c=c.length&&c[0].node.text,f=$.owner.full_name\nc='@'+$.owner.username+(f?' ('+f+')':'') + ' | ' + new Date($.taken_at_timestamp*1e3).toLocaleString()+' '+(c?' | '+c:'')\nif(i&&i.length) $=i.map(function(el,i){return [el.node.video_url || el.node.display_url, !i&&c]})\nelse $=[$.video_url || $.display_url, c]\nreturn $": function($){var i,c,u
if($._[0]!='{') {
 i=$._.match(/:"profilePage_(\d+)"/)
 return i && {loop: 'https://i.instagram.com/api/v1/users/' + i[1] + '/info/'} || null
}
$._=JSON.parse($._)
if($[3]) return [$._.user.hd_profile_pic_url_info.url, [$._.user.full_name, '('+'@' + $._.user.username+') | ', $._.user.biography].join(' ')]
$=$._.graphql.shortcode_media
i=$.edge_sidecar_to_children
i=i&&i.edges
c=$.edge_media_to_caption.edges,c=c.length&&c[0].node.text,f=$.owner.full_name
c='@'+$.owner.username+(f?' ('+f+')':'') + ' | ' + new Date($.taken_at_timestamp*1e3).toLocaleString()+' '+(c?' | '+c:'')
if(i&&i.length) $=i.map(function(el,i){return [el.node.video_url || el.node.display_url, !i&&c]})
else $=[$.video_url || $.display_url, c]
return $
},
    "res\u0000if($._[0]!='{')return null\n$._=JSON.parse($._)\nreturn [$._.videoUrl, $._.description+' by '+$._.username]": function($){if($._[0]!='{')return null
$._=JSON.parse($._)
return [$._.videoUrl, $._.description+' by '+$._.username]
},
    "res\u0000$._ = $._.match(/var videoObject = (\\{[^\\n]+\\})/)\nif(!$._) return null\n$._=JSON.parse($._[1])\nvar t;\nif($._.group) {t=$._.name;$._=$._.group.videos} else {$._=[$._]}\nreturn $._.map(function(x,i) {\n var f=x.files, u=[];\n ['mp4', 'webm', 'mp4-mobile', 'webm-mobile'].forEach(function(t,ii){\n  f[t]&&u.push((ii<2?'#':'')+f[t].url)\n })\n return [u, (!i&&t ? '['+t+'] ':'') + ($._.title || '')]\n})": function($){$._ = $._.match(/var videoObject = (\{[^\n]+\})/)
if(!$._) return null
$._=JSON.parse($._[1])
var t;
if($._.group) {t=$._.name;$._=$._.group.videos} else {$._=[$._]}
return $._.map(function(x,i) {
 var f=x.files, u=[];
 ['mp4', 'webm', 'mp4-mobile', 'webm-mobile'].forEach(function(t,ii){
  f[t]&&u.push((ii<2?'#':'')+f[t].url)
 })
 return [u, (!i&&t ? '['+t+'] ':'') + ($._.title || '')]
})
},
    "res\u0000var x = $._.match(RegExp(\"src='/[\\\\da-zA-Z]+(_[^.]*)?\\\\.[^']+\", 'g')), t = $._.match(/<h2[^>]*>([^<]+)/), l = 'http://' + $[1];\nreturn x ? x.map(function(i, n) {return ['#' + l + i.replace(/_[^.]+/, ''), !n && t && t[1]]}) : x": function($){var x = $._.match(RegExp("src='/[\\da-zA-Z]+(_[^.]*)?\\.[^']+", 'g')), t = $._.match(/<h2[^>]*>([^<]+)/), l = 'http://' + $[1];
return x ? x.map(function(i, n) {return ['#' + l + i.replace(/_[^.]+/, ''), !n && t && t[1]]}) : x
},
    "res\u0000var m=JSON.parse($._),b=m.preview_image;b=b&&b.replace(/-preview\\.jpg.*/, ''), c=b&&b.replace(/\\.tv\\//,'$&AT-cm|')\nreturn b?[[['#'+b+'.mp4', c+'-480.mp4', c+'-360.mp4'], '['+m.game+'] ' + [m.title, m.broadcaster_display_name, (new Date(m.created_at)).toLocaleString(), m.vod_url].filter(Boolean).join(' | ')]]:null": function($){var m=JSON.parse($._),b=m.preview_image;b=b&&b.replace(/-preview\.jpg.*/, ''), c=b&&b.replace(/\.tv\//,'$&AT-cm|')
return b?[[['#'+b+'.mp4', c+'-480.mp4', c+'-360.mp4'], '['+m.game+'] ' + [m.title, m.broadcaster_display_name, (new Date(m.created_at)).toLocaleString(), m.vod_url].filter(Boolean).join(' | ')]]:null
},
    "url\u0000: '//' + $[1] + ($[2][0]=='e'?'video':$[2]) + $[3]": function(){var $ = arguments; return  '//' + $[1] + ($[2][0]=='e'?'video':$[2]) + $[3]
},
    "url\u0000: $[3] ? 'https://global.apis.'+$[1]+'rmcnmv/rmcnmv/vod_play_videoInfo.json?key='+$[4]+'&videoId='+$[3] : $[0]": function(){var $ = arguments; return  $[3] ? 'https://global.apis.'+$[1]+'rmcnmv/rmcnmv/vod_play_videoInfo.json?key='+$[4]+'&videoId='+$[3] : $[0]
},
    "res\u0000if($[2]) {\n var x=typeof $._=='string'&&$._.match(/\\?vid=([\\dA-F]+)&outKey=(\\w+)/)\n return x&&{loop:'http://tv.'+$[1]+'v/'+x[1]+'/'+x[2]}\n}\n$._=JSON.parse($._)\nreturn [$._.videos.list.pop().source, $._.meta.subject+' by '+ $._.meta.user.id]": function($){if($[2]) {
 var x=typeof $._=='string'&&$._.match(/\?vid=([\dA-F]+)&outKey=(\w+)/)
 return x&&{loop:'http://tv.'+$[1]+'v/'+x[1]+'/'+x[2]}
}
$._=JSON.parse($._)
return [$._.videos.list.pop().source, $._.meta.subject+' by '+ $._.meta.user.id]
},
    "to\u0000:\nreturn $[0].indexOf('format=mp4')>0 ? $[0]+'#mp4' : 'i'+$[1]": function(){var $ = arguments; 
return $[0].indexOf('format=mp4')>0 ? $[0]+'#mp4' : 'i'+$[1]
},
    "res\u0000var v=0,u,m=$._.match(/width=\"\\d+\">\\s*<BaseURL>([^<]+)/g)\nif(!m)return m\nm.forEach(function(m){\n m=m.match(/\"(\\d+)\">[^>]+>(.+)/)\n if(m[1] > v) {v=m[1]|0; u=m[2]}\n})\nreturn '//'+$[1]+'/'+u+'#mp4'": function($){var v=0,u,m=$._.match(/width="\d+">\s*<BaseURL>([^<]+)/g)
if(!m)return m
m.forEach(function(m){
 m=m.match(/"(\d+)">[^>]+>(.+)/)
 if(m[1] > v) {v=m[1]|0; u=m[2]}
})
return '//'+$[1]+'/'+u+'#mp4'
},
    "to\u0000:\nif($[2]!==0)return $[2]=='#mp4'?$[0]:$[1]+'#mp4'\nvar u,p,c,n=window.location.hostname.slice(-10)=='reddit.com'&&this.node\nif(!n)return''\nif(n.matches('div.link a.thumbnail,div.link a.thumbnail>img, div.link a.title, div.link a.thumbnail.image')) {\n p=n;while((p=p.parentNode)&&!p.matches('div.link'));\n u=p.dataset, u=u.url||u.hrefUrl\n if(u&&/v\\.redd\\.it\\//.test(u))return u\n c=p&&p.querySelector('div.expando[data-cachedhtml]')\n c=c&&c.getAttribute('data-cachedhtml')\n u=c&&c.match(/(?:<a href|(?:class=\"preview\"|<source) src)=\"([^\"]+)/g)\n if(u) {\n  u=u.map(function(i){\n   var u=i.slice(i.lastIndexOf('\"')+1).replace(/&amp;/g,'&');\n   return u+(i[1]=='s'?'#mp4':'')\n  });\n  u=c.indexOf('<source')!=-1?u.reverse():u\n  return u.length?u.join('\\n'):''\n }\n u=p.dataset, u=u.url||u.hrefUrl\n}else if(n.matches('a.Post__titleLink')) {\n u = n.closest('.Post__top').querySelector('a.PostThumbnail').href\n}else if(n.matches('a[data-click-id=body]>div>h3,.Post div>div[role=img]')){\n p=n.closest('div[id^=t3_]');\n if(p&&p.querySelector('p,i.icon-text'))return ''\n p=p.querySelector('a>.icon-outboundLink')\n p=p ? p.parentNode : {href: '//gateway.reddit.com/desktopapi/v1/postcomments/t3_'+$[1]+'?truncate=1'}\n p=this.find({href: p.href, IMGS_TRG: n})\n n.title = n.getAttribute('aria-label') || n.title\n return (Array.isArray(p) ? p.join('\\n') : (p === null ? 'null' : p)) || ''\n}\nreturn u&&/^(https?:)?\\/\\/i\\.redd\\.?it/.test(u)?u:''": function(){var $ = arguments; 
if($[2]!==0)return $[2]=='#mp4'?$[0]:$[1]+'#mp4'
var u,p,c,n=window.location.hostname.slice(-10)=='reddit.com'&&this.node
if(!n)return''
if(n.matches('div.link a.thumbnail,div.link a.thumbnail>img, div.link a.title, div.link a.thumbnail.image')) {
 p=n;while((p=p.parentNode)&&!p.matches('div.link'));
 u=p.dataset, u=u.url||u.hrefUrl
 if(u&&/v\.redd\.it\//.test(u))return u
 c=p&&p.querySelector('div.expando[data-cachedhtml]')
 c=c&&c.getAttribute('data-cachedhtml')
 u=c&&c.match(/(?:<a href|(?:class="preview"|<source) src)="([^"]+)/g)
 if(u) {
  u=u.map(function(i){
   var u=i.slice(i.lastIndexOf('"')+1).replace(/&amp;/g,'&');
   return u+(i[1]=='s'?'#mp4':'')
  });
  u=c.indexOf('<source')!=-1?u.reverse():u
  return u.length?u.join('\n'):''
 }
 u=p.dataset, u=u.url||u.hrefUrl
}else if(n.matches('a.Post__titleLink')) {
 u = n.closest('.Post__top').querySelector('a.PostThumbnail').href
}else if(n.matches('a[data-click-id=body]>div>h3,.Post div>div[role=img]')){
 p=n.closest('div[id^=t3_]');
 if(p&&p.querySelector('p,i.icon-text'))return ''
 p=p.querySelector('a>.icon-outboundLink')
 p=p ? p.parentNode : {href: '//gateway.reddit.com/desktopapi/v1/postcomments/t3_'+$[1]+'?truncate=1'}
 p=this.find({href: p.href, IMGS_TRG: n})
 n.title = n.getAttribute('aria-label') || n.title
 return (Array.isArray(p) ? p.join('\n') : (p === null ? 'null' : p)) || ''
}
return u&&/^(https?:)?\/\/i\.redd\.?it/.test(u)?u:''
},
    "res\u0000$._ = JSON.parse($._)\n$._=$._.posts\nvar t = $._[$[1]].title\nfor (var i in $._) if($._[i].media){$=$._[i].media;break}\nreturn $ && $.dashUrl ? {loop:$.dashUrl} : !0": function($){$._ = JSON.parse($._)
$._=$._.posts
var t = $._[$[1]].title
for (var i in $._) if($._[i].media){$=$._[i].media;break}
return $ && $.dashUrl ? {loop:$.dashUrl} : !0
},
    "to\u0000:\nvar u,n=!$[1]&&this.node,x=n&&n.matches('.Post div>div[role=img]');\nn && (n.title = n.getAttribute('aria-label') || n.title);\nreturn x&&(x=n.closest('.Post')) && (x=x.querySelector('div>a[data-click-id=body][href]'))\n? x.href\n: n&&n.matches('div.link>a.thumbnail>img, .PostThumbnail>img, a>div[role=img]')&&n.parentNode.href ? '//rt/?'+n.parentNode.href : $[0]": function(){var $ = arguments; 
var u,n=!$[1]&&this.node,x=n&&n.matches('.Post div>div[role=img]');
n && (n.title = n.getAttribute('aria-label') || n.title);
return x&&(x=n.closest('.Post')) && (x=x.querySelector('div>a[data-click-id=body][href]'))
? x.href
: n&&n.matches('div.link>a.thumbnail>img, .PostThumbnail>img, a>div[role=img]')&&n.parentNode.href ? '//rt/?'+n.parentNode.href : $[0]
},
    "res\u0000var t, r=['<meta[^>]+?property=[\\'\"]?og:','[\\'\"]?\\\\s[^>]*?content=[\\'\"]([^\\'\">]+)'], m = $._.match(RegExp(r[0]+'image(?::url)?'+r[1]))\nreturn m ? [m[1], (t = $._.match(RegExp(r[0]+'title'+r[1])))&&t[1]] : !1": function($){var t, r=['<meta[^>]+?property=[\'"]?og:','[\'"]?\\s[^>]*?content=[\'"]([^\'">]+)'], m = $._.match(RegExp(r[0]+'image(?::url)?'+r[1]))
return m ? [m[1], (t = $._.match(RegExp(r[0]+'title'+r[1])))&&t[1]] : !1
},
    "url\u0000: 'https://api.'+$[1]+'/v1/' + ($[3] ? 'users/'+$[3]+'/album_links/'+$[4] : 'gfycats/'+$[2])": function(){var $ = arguments; return  'https://api.'+$[1]+'/v1/' + ($[3] ? 'users/'+$[3]+'/album_links/'+$[4] : 'gfycats/'+$[2])
},
    "res\u0000var u,g,i=0,r=[], o=JSON.parse($._);\no=o.publishedGfys||[o.gfyItem]\nwhile(g=o[i++]) {\n u=['#'+g.webmUrl, '#'+g.mp4Url]\n g.mobileUrl&&u.push(g.mobileUrl)\n r.push([u, (g.title||'') + (g.tags&&g.tags.length ? ' ['+g.tags.join(', ')+']':'')])\n}\nreturn r.length ? r : null": function($){var u,g,i=0,r=[], o=JSON.parse($._);
o=o.publishedGfys||[o.gfyItem]
while(g=o[i++]) {
 u=['#'+g.webmUrl, '#'+g.mp4Url]
 g.mobileUrl&&u.push(g.mobileUrl)
 r.push([u, (g.title||'') + (g.tags&&g.tags.length ? ' ['+g.tags.join(', ')+']':'')])
}
return r.length ? r : null
},
    "res\u0000var d=$._.match(/krowd\\.qwip\\s*=\\s*(\\{[^;]+\\});\\s*<\\/script>/)\nd=d&&JSON.parse(d[1])\nreturn !d?null:[d.media[0].raw.url, d.usertext + (d.extra.link ? ' | ' + d.extra.link : '')]": function($){var d=$._.match(/krowd\.qwip\s*=\s*(\{[^;]+\});\s*<\/script>/)
d=d&&JSON.parse(d[1])
return !d?null:[d.media[0].raw.url, d.usertext + (d.extra.link ? ' | ' + d.extra.link : '')]
},
    "res\u0000$._=JSON.parse($._)\nreturn [$._.files[0].fileUrl, $._.name]": function($){$._=JSON.parse($._)
return [$._.files[0].fileUrl, $._.name]
},
    "to\u0000:\nreturn $[1].replace(/-\\d+w$/,'') + ($[2] || '-') + '2500w'": function(){var $ = arguments; 
return $[1].replace(/-\d+w$/,'') + ($[2] || '-') + '2500w'
},
    "to\u0000:\nreturn $[1] + ($[2] ? $[2] + 'original' : $[3] + '/');": function(){var $ = arguments; 
return $[1] + ($[2] ? $[2] + 'original' : $[3] + '/');
},
    "to\u0000:\nvar x = /[&?](d(?:efault)?=[^&]+)/.exec($[0]), y = /[&?](r(?:ating)?=[^&]+)/.exec($[0]);\nreturn $[1]+($[2]||$[3])+'/'+$[4]+'?s='+($[3]?1e3:512)+(x?'&'+x[1]:'')+(y?'&'+y[1]:'')": function(){var $ = arguments; 
var x = /[&?](d(?:efault)?=[^&]+)/.exec($[0]), y = /[&?](r(?:ating)?=[^&]+)/.exec($[0]);
return $[1]+($[2]||$[3])+'/'+$[4]+'?s='+($[3]?1e3:512)+(x?'&'+x[1]:'')+(y?'&'+y[1]:'')
},
    "to\u0000:\nvar v=$[2]?'':$[0].slice($[1].length); v=v&&v.match(/[?&](v=\\d+)/)||'';\nreturn $[1] + ($[2]?'raw'+$[2]:v&&('?'+v[1]))": function(){var $ = arguments; 
var v=$[2]?'':$[0].slice($[1].length); v=v&&v.match(/[?&](v=\d+)/)||'';
return $[1] + ($[2]?'raw'+$[2]:v&&('?'+v[1]))
},
    "to\u0000:\nreturn $[1] ? $[1]+'original' : $[2]": function(){var $ = arguments; 
return $[1] ? $[1]+'original' : $[2]
},
    "to\u0000:\nreturn window.atob($[1])": function(){var $ = arguments; 
return window.atob($[1])
},
    "to\u0000:\nif ($[6]) return ''+this.find({href: 'http://tomshardware.com/gallery/,.-' + $[6] + '.html', IMGS_TRG: this.node})\nreturn $[2] ? atob($[2]) : $[1] + $[3] + 'original' + $[4] + '.#' +$[5]+ ' '+ $[5].toUpperCase() +'#'": function(){var $ = arguments; 
if ($[6]) return ''+this.find({href: 'http://tomshardware.com/gallery/,.-' + $[6] + '.html', IMGS_TRG: this.node})
return $[2] ? atob($[2]) : $[1] + $[3] + 'original' + $[4] + '.#' +$[5]+ ' '+ $[5].toUpperCase() +'#'
},
    "to\u0000:\nreturn $[3]?'st'+$[2]+'pics/'+$[3]+'/'+$[4]+'/'+$[5]+'/': $[1] + ($[6] || $[7]) + '# -1024x768m/#'": function(){var $ = arguments; 
return $[3]?'st'+$[2]+'pics/'+$[3]+'/'+$[4]+'/'+$[5]+'/': $[1] + ($[6] || $[7]) + '# -1024x768m/#'
},
    "to\u0000:\nreturn $[1] + ($[3] ? $[2] + 'l' + $[3] : $[4]) + '.';": function(){var $ = arguments; 
return $[1] + ($[3] ? $[2] + 'l' + $[3] : $[4]) + '.';
},
    "res\u0000$=JSON.parse($._)\nif (!$.user) return null;\n$.s = $.software_items.map(function(i) {return i.name}).join(', ')\n$.c = [$.title, $.description.replace(/^<p>(.*)<\\/p>$/, '$1')].filter(function(x) {return !!x.trim()}).join(' - ') + ' by ' + $.user.username;\nreturn $.assets.map(function(x, i){\n return [x.image_url, [(i ? '' : '[' + $.c + ($.s ? ' in ' + $.s : '') + ']'), (x.title||x.title_formatted||'')].join(' ')]\n})": function($){$=JSON.parse($._)
if (!$.user) return null;
$.s = $.software_items.map(function(i) {return i.name}).join(', ')
$.c = [$.title, $.description.replace(/^<p>(.*)<\/p>$/, '$1')].filter(function(x) {return !!x.trim()}).join(' - ') + ' by ' + $.user.username;
return $.assets.map(function(x, i){
 return [x.image_url, [(i ? '' : '[' + $.c + ($.s ? ' in ' + $.s : '') + ']'), (x.title||x.title_formatted||'')].join(' ')]
})
},
    "to\u0000:\nreturn $[2] ? $[1] + $[2] + 'full' : (this.node.dataset.fancyboxHref || '')": function(){var $ = arguments; 
return $[2] ? $[1] + $[2] + 'full' : (this.node.dataset.fancyboxHref || '')
},
    "to\u0000:\nreturn $[1] + ($[2] ? $[2] + '?$S1280$': ($[4] ? $[4] + '800' : $[3] + 'CompressAll1280'));": function(){var $ = arguments; 
return $[1] + ($[2] ? $[2] + '?$S1280$': ($[4] ? $[4] + '800' : $[3] + 'CompressAll1280'));
},
    "res\u0000var r=[],p,o,c,x,i,e;\ntry {\ni = JSON.parse($._).Item;\nif (!i || !i.PictureURL) throw 0;\n\n$._ = /(~~\\d*_|\\/\\$_)\\d+\\./;\nx = i.ConvertedCurrentPrice;\n$.cap = 'EBay: '+i.Title+' | Price: '+x.Value+' '+x.CurrencyID+' | Location: '+i.Location+', '+i.Country;\nif (p = i.PictureURL) {\n for (o=0;o<p.length;++o) {\n  r.push([p[o].replace($._,'$132.').replace(/^http:/, ''), !o&&$.cap]);\n }\n}\n\nif ((i = i.Variations) && (i = i.Pictures)) {\n for (o=0;o<i.length;++o) {\n  p=i[o].VariationSpecificName;\n  c=i[o].VariationSpecificPictureSet;\n  for (e=0;e<c.length;++e) {\n   for (x=0;x<c[e].PictureURL.length;++x) {\n    r.push([c[e].PictureURL[x].replace($._,'$132.').replace(/^http:/, ''), !o&&($.cap+' | '+p+': '+c[e].VariationSpecificValue)]);\n   }\n  }\n }\n}\n}catch(x){}\n\nreturn r.length ? r : null;": function($){var r=[],p,o,c,x,i,e;
try {
i = JSON.parse($._).Item;
if (!i || !i.PictureURL) throw 0;

$._ = /(~~\d*_|\/\$_)\d+\./;
x = i.ConvertedCurrentPrice;
$.cap = 'EBay: '+i.Title+' | Price: '+x.Value+' '+x.CurrencyID+' | Location: '+i.Location+', '+i.Country;
if (p = i.PictureURL) {
 for (o=0;o<p.length;++o) {
  r.push([p[o].replace($._,'$132.').replace(/^http:/, ''), !o&&$.cap]);
 }
}

if ((i = i.Variations) && (i = i.Pictures)) {
 for (o=0;o<i.length;++o) {
  p=i[o].VariationSpecificName;
  c=i[o].VariationSpecificPictureSet;
  for (e=0;e<c.length;++e) {
   for (x=0;x<c[e].PictureURL.length;++x) {
    r.push([c[e].PictureURL[x].replace($._,'$132.').replace(/^http:/, ''), !o&&($.cap+' | '+p+': '+c[e].VariationSpecificValue)]);
   }
  }
 }
}
}catch(x){}

return r.length ? r : null;
},
    "res\u0000$ = $._&&$._.match(/data-imgid=\"[^\"]+\" href=\"([^\"]+)/g)\nvar f=this.find, s = this.node.matches('img[src*=\"images.craigslist.org\"]') && this.node.src\nreturn $ && $.map(function(x){\n x=x.slice(x.lastIndexOf('\"') + 1)\n return [f({src: x})]\n}) || s && this.find({src: s}) || !1": function($){$ = $._&&$._.match(/data-imgid="[^"]+" href="([^"]+)/g)
var f=this.find, s = this.node.matches('img[src*="images.craigslist.org"]') && this.node.src
return $ && $.map(function(x){
 x=x.slice(x.lastIndexOf('"') + 1)
 return [f({src: x})]
}) || s && this.find({src: s}) || !1
},
    "res\u0000$._=JSON.parse($._)\nreturn [[['#'+$._.images.original.url, $._.images.large.url], '['+$._.postdate+'] ' + $._.caption]]": function($){$._=JSON.parse($._)
return [[['#'+$._.images.original.url, $._.images.large.url], '['+$._.postdate+'] ' + $._.caption]]
},
    "to\u0000:\nvar p = this.node.parentNode, p = p&&p.parentNode; p = p && p.querySelector('.bz_attach_extra_info,.attach-info');\nreturn p && ~p.textContent.indexOf('image/') || /\\.(jpe?g|png|gif|bmp|web[mp]|svg)$/i.test(this.node.title) ? $[0] : ''": function(){var $ = arguments; 
var p = this.node.parentNode, p = p&&p.parentNode; p = p && p.querySelector('.bz_attach_extra_info,.attach-info');
return p && ~p.textContent.indexOf('image/') || /\.(jpe?g|png|gif|bmp|web[mp]|svg)$/i.test(this.node.title) ? $[0] : ''
},
    "to\u0000:\nreturn $[1]+($[2]||$[3]+'0x0')": function(){var $ = arguments; 
return $[1]+($[2]||$[3]+'0x0')
},
    "res\u0000var i=$._.match(/<br>\\s*<a href=\"(image\\/[^\"]+)\"[^<]+<img src=\"([^\"]+)/i);\nreturn i && [[[\"#\" + $.base + i[1], $.base + i[2]], $._.match(/Explanation:?\\s*<\\/[^>]+>:?\\s*([\\s\\S]+?)<p>/)[1].trim().replace(/<[^>]+>/g, '')]] || null;": function($){var i=$._.match(/<br>\s*<a href="(image\/[^"]+)"[^<]+<img src="([^"]+)/i);
return i && [[["#" + $.base + i[1], $.base + i[2]], $._.match(/Explanation:?\s*<\/[^>]+>:?\s*([\s\S]+?)<p>/)[1].trim().replace(/<[^>]+>/g, '')]] || null;
},
    "to\u0000:\nreturn ($[2]=='mu' ? 'http://' : $[1]+'large/') + $[3]": function(){var $ = arguments; 
return ($[2]=='mu' ? 'http://' : $[1]+'large/') + $[3]
},
    "to\u0000:\nreturn $[1] + ($[2] ? $[2] + ($[3]||'photo') + '/#large photo#' : (($[4]||'') + 'l'));": function(){var $ = arguments; 
return $[1] + ($[2] ? $[2] + ($[3]||'photo') + '/#large photo#' : (($[4]||'') + 'l'));
},
    "to\u0000:\nreturn $[1]?'image'+$[1]+'.'+$[2]+'_o':'i.'+$[2]": function(){var $ = arguments; 
return $[1]?'image'+$[1]+'.'+$[2]+'_o':'i.'+$[2]
},
    "to\u0000:\nreturn $[0].replace(/&crop=[^&]*/, '').replace(/(&size=)[^&]+/, '$110000x10000')": function(){var $ = arguments; 
return $[0].replace(/&crop=[^&]*/, '').replace(/(&size=)[^&]+/, '$110000x10000')
},
    "to\u0000:\nreturn $[4] ? decodeURIComponent($[4]).replace(/\\/i(-\\d+\\.[^?]+).*/, '/h$1') : 'content.f' + $[1] + $[2].replace(/=/g, '/') + 'h' + $[3];": function(){var $ = arguments; 
return $[4] ? decodeURIComponent($[4]).replace(/\/i(-\d+\.[^?]+).*/, '/h$1') : 'content.f' + $[1] + $[2].replace(/=/g, '/') + 'h' + $[3];
},
    "to\u0000:\nreturn $[1] + ($[2] ? 'medium/': '/') + $[3];": function(){var $ = arguments; 
return $[1] + ($[2] ? 'medium/': '/') + $[3];
},
    "to\u0000:\nreturn $[2] ? $[2] + '.static.itmages.ru/' + decodeURIComponent($[3]) : $[1] + 'h_';": function(){var $ = arguments; 
return $[2] ? $[2] + '.static.itmages.ru/' + decodeURIComponent($[3]) : $[1] + 'h_';
},
    "res\u0000$=JSON.parse($._.match(/\">({\"[^\\n]+)</)[1])\nreturn [$.downloadUrl.replace(/\\?.*/, ''), [$.buildTime, $.title, $.urlIfDeleted].join(' | ')]": function($){$=JSON.parse($._.match(/">({"[^\n]+)</)[1])
return [$.downloadUrl.replace(/\?.*/, ''), [$.buildTime, $.title, $.urlIfDeleted].join(' | ')]
},
    "res\u0000try {\n $ = JSON.parse($._).objects, i = $.length, u = '//puu.sh/';\n while(i--) $[i] = [u + $[i].id + '/' + $[i].name, null, u + 't/' + $[i].id];\n return $;\n} catch (ex) {return null}": function($){try {
 $ = JSON.parse($._).objects, i = $.length, u = '//puu.sh/';
 while(i--) $[i] = [u + $[i].id + '/' + $[i].name, null, u + 't/' + $[i].id];
 return $;
} catch (ex) {return null}
},
    "res\u0000if ($._[0] != '{') $ = null;\nelse $ = JSON.parse($._), $ = [$.img, [$.year, ('0'+$.month).slice(-2), ('0'+$.day).slice(-2)].join('-') + ' | ' + $.safe_title + ' - ' + $.alt + ' ' + $.link];\nreturn $;": function($){if ($._[0] != '{') $ = null;
else $ = JSON.parse($._), $ = [$.img, [$.year, ('0'+$.month).slice(-2), ('0'+$.day).slice(-2)].join('-') + ' | ' + $.safe_title + ' - ' + $.alt + ' ' + $.link];
return $;
},
    "res\u0000var p,d='http://photos.'+($[1]||$[3])\n$ = JSON.parse($._)\nif(!$||!$.images)return null\np=$.post?[$.post.title, $.post.exerpt].filter(Boolean).join(' - '):'';\np = p ? '['+p+' by '+$.post.author.name+'] ':''\n$=$.images\nreturn $&&$.length ? $.map(function(x,i) {\n return [d + x.user_id + '/f/' + x.img_id + '.jpg', (!i&&p ? p : '')+[x.title, x.description].filter(Boolean).join(' - ')]\n}) : null": function($){var p,d='http://photos.'+($[1]||$[3])
$ = JSON.parse($._)
if(!$||!$.images)return null
p=$.post?[$.post.title, $.post.exerpt].filter(Boolean).join(' - '):'';
p = p ? '['+p+' by '+$.post.author.name+'] ':''
$=$.images
return $&&$.length ? $.map(function(x,i) {
 return [d + x.user_id + '/f/' + x.img_id + '.jpg', (!i&&p ? p : '')+[x.title, x.description].filter(Boolean).join(' - ')]
}) : null
},
    "res\u0000var x=$._.match(/window\\.PxPreloadedData\\s=\\s(\\{[^\\n]+\\})/),u={};\nif(!x)return null\nx=JSON.parse(x[1]).photo\nx.images.forEach(function(i){u[i.size]=i.url})\nreturn [[['#'+u[2048], u[34]], x.name + ' by ' + x.user.username]]": function($){var x=$._.match(/window\.PxPreloadedData\s=\s(\{[^\n]+\})/),u={};
if(!x)return null
x=JSON.parse(x[1]).photo
x.images.forEach(function(i){u[i.size]=i.url})
return [[['#'+u[2048], u[34]], x.name + ' by ' + x.user.username]]
},
    "to\u0000:\nreturn $[0].replace(/(?:(\\/)(?:T[ih]|S|M|L|X[2L]|\\d+x\\d+)(\\/)|(-)(?:T[ih]|S|M|L|X[2L]|\\d+x\\d+)([.\\/]))/g, '$1$3X3$2$4');": function(){var $ = arguments; 
return $[0].replace(/(?:(\/)(?:T[ih]|S|M|L|X[2L]|\d+x\d+)(\/)|(-)(?:T[ih]|S|M|L|X[2L]|\d+x\d+)([.\/]))/g, '$1$3X3$2$4');
},
    "res\u0000var r = $._.match(RegExp(\"\\\\('\"+ $.url[0].match(/[^\\/]\\/(\\d+)/)[1] +\"','(?:\\\\w*',')+?/(images/user/[\\\\da-f]{32}[^']+)\"));\nreturn r && $.base.slice(0,$.base.indexOf('/',13)+1) + r[1];": function($){var r = $._.match(RegExp("\\('"+ $.url[0].match(/[^\/]\/(\d+)/)[1] +"','(?:\\w*',')+?/(images/user/[\\da-f]{32}[^']+)"));
return r && $.base.slice(0,$.base.indexOf('/',13)+1) + r[1];
},
    "res\u0000var i=($._.match(/var bulb = \\{\"url\":\"([^\"]+)/) || [])[1];\nreturn !i || [i.replace(/\\\\/g, ''), $._.match(/<title>ipernity: (.+?)<\\/title>/)[1]];": function($){var i=($._.match(/var bulb = \{"url":"([^"]+)/) || [])[1];
return !i || [i.replace(/\\/g, ''), $._.match(/<title>ipernity: (.+?)<\/title>/)[1]];
},
    "res\u0000var r = [];\n($._.match(/https:\\/\\/img\\.discogs\\.com\\/[^\"]+\\.jpeg\\.jpg/g) || r).forEach(function(i) {r.push([i]);});\nreturn r;": function($){var r = [];
($._.match(/https:\/\/img\.discogs\.com\/[^"]+\.jpeg\.jpg/g) || r).forEach(function(i) {r.push([i]);});
return r;
},
    "res\u0000var t,u=$._.match(/src=\"https?:\\/\\/www\\.gifbin\\.com\\/bin\\/[^\"]+/g)\nif(!u)return 0\nt=$._.match(/=\"og:title\"\\s+content=\"([^\"]+)/);\nreturn [[u.slice(0,3).map(function(u){ return u.slice(5) }), t&&t[1]]]": function($){var t,u=$._.match(/src="https?:\/\/www\.gifbin\.com\/bin\/[^"]+/g)
if(!u)return 0
t=$._.match(/="og:title"\s+content="([^"]+)/);
return [[u.slice(0,3).map(function(u){ return u.slice(5) }), t&&t[1]]]
},
    "res\u0000$=/gif:\\s*(\\{[^\\n]+\\})/.exec($._)\n$=$&&JSON.parse($[1])\nreturn $ && [[[$.images.original.mp4, $.images.original.url], $.alt_tag]]": function($){$=/gif:\s*(\{[^\n]+\})/.exec($._)
$=$&&JSON.parse($[1])
return $ && [[[$.images.original.mp4, $.images.original.url], $.alt_tag]]
},
    "to\u0000:\nreturn ($[1]=='t'?'i':'g') + $[2]": function(){var $ = arguments; 
return ($[1]=='t'?'i':'g') + $[2]
},
    "res\u0000var t=$._.match(/=\"og:description\" content=\"([^\"]+)/),\nm=$._.match(/=\"og:image\" content=\"([^\"]+)/)\nif(!$[1]) return m ? [m[1], t&&t[1]] : null\nm=$._.match(/<img data-src=\"[^\"]+/g)\nreturn !m ? null : m.map(function(x, i) {\n return [x.slice(15), !i&&t&&t[1]]\n})": function($){var t=$._.match(/="og:description" content="([^"]+)/),
m=$._.match(/="og:image" content="([^"]+)/)
if(!$[1]) return m ? [m[1], t&&t[1]] : null
m=$._.match(/<img data-src="[^"]+/g)
return !m ? null : m.map(function(x, i) {
 return [x.slice(15), !i&&t&&t[1]]
})
},
    "to\u0000:\nreturn $[1] + $[3] + (/girl|boy/.test($[2]||'') ? '.sized' : '')": function(){var $ = arguments; 
return $[1] + $[3] + (/girl|boy/.test($[2]||'') ? '.sized' : '')
},
    "res\u0000var x=$._.match(/(?:=\"img\" data-|<source )src=\"(?:https?:)?\\/\\/s\\d+\\.erome\\.com\\/\\d+\\/[^>]+/g),r={}\nx&&x.forEach(function(s,i){\n var v = s[0]=='<', b = s.indexOf('/'), e = s.indexOf('\"', b+5), u=s.slice(b, e), id=u.match(/[^/]\\/([^/_.]+)[._]/)[1];\n u=(/label='HD'/.test(s) ?'#':'')+u\n if(!r[id])r[id]=[u]\n else if(typeof r[id][0]=='string') r[id][0] = [r[id][0], u]\n else return;\n i=!i&&$._.match(/<title>([^<]+)/)\n i&&id[1] && r[id].push(i[1])\n})\nr=Object.values(r)\nreturn r.length?r:null": function($){var x=$._.match(/(?:="img" data-|<source )src="(?:https?:)?\/\/s\d+\.erome\.com\/\d+\/[^>]+/g),r={}
x&&x.forEach(function(s,i){
 var v = s[0]=='<', b = s.indexOf('/'), e = s.indexOf('"', b+5), u=s.slice(b, e), id=u.match(/[^/]\/([^/_.]+)[._]/)[1];
 u=(/label='HD'/.test(s) ?'#':'')+u
 if(!r[id])r[id]=[u]
 else if(typeof r[id][0]=='string') r[id][0] = [r[id][0], u]
 else return;
 i=!i&&$._.match(/<title>([^<]+)/)
 i&&id[1] && r[id].push(i[1])
})
r=Object.values(r)
return r.length?r:null
},
    "res\u0000$._=JSON.parse($._)\nreturn $._.error ? {_: $._.error} : ($._.webmUrl || $._.mp4Url)": function($){$._=JSON.parse($._)
return $._.error ? {_: $._.error} : ($._.webmUrl || $._.mp4Url)
},
    "res\u0000$=$._.match(RegExp('\"id\":'+$[2]+',\"galleryId\":'+$[1]+',\"imageURL\":(\"[^\"]+\")'))\nreturn JSON.parse($[1])": function($){$=$._.match(RegExp('"id":'+$[2]+',"galleryId":'+$[1]+',"imageURL":("[^"]+")'))
return JSON.parse($[1])
},
    "res\u0000var x = JSON.parse($._);\nreturn x&&x.file_url ? [x.file_url, (x.tag_string_general + (x.tag_string_artist ? ' by ' + x.tag_string_artist : '')).replace(/_/g, \" \")] : null": function($){var x = JSON.parse($._);
return x&&x.file_url ? [x.file_url, (x.tag_string_general + (x.tag_string_artist ? ' by ' + x.tag_string_artist : '')).replace(/_/g, " ")] : null
},
    "to\u0000:\nreturn ($[1][0]=='b'?'img.':'')+$[1]+($[2]||'')+'images/'+$[3]+$[4];": function(){var $ = arguments; 
return ($[1][0]=='b'?'img.':'')+$[1]+($[2]||'')+'images/'+$[3]+$[4];
},
    "res\u0000var m=$._.match(/<(form action|source src)='\\/(_?images?\\/[^']+)/)\nreturn m ? 'http://'+$[1]+m[2]+(m[1][0]=='s'?'.webm':'') : null": function($){var m=$._.match(/<(form action|source src)='\/(_?images?\/[^']+)/)
return m ? 'http://'+$[1]+m[2]+(m[1][0]=='s'?'.webm':'') : null
},
    "res\u0000$ = JSON.parse($._)\nreturn [[\n $.original_format=='gif'||$.width<1200 && $.height<1200 || !$.representations ? $.image : ['#' + $.image, $.representations.large],\n [$.tags, $.source_url].filter(Boolean).join(' ')\n]]": function($){$ = JSON.parse($._)
return [[
 $.original_format=='gif'||$.width<1200 && $.height<1200 || !$.representations ? $.image : ['#' + $.image, $.representations.large],
 [$.tags, $.source_url].filter(Boolean).join(' ')
]]
},
    "res\u0000$=$._.match(/\\.startUp\\s=\\s*(\\{[^\\n\\r]+\\});/)\n$=JSON.parse($[1]).images;\nreturn $ ? $.map(function(i){return [i.cdnUrl, i.caption +' '+ i.sourceUrl]}) : $": function($){$=$._.match(/\.startUp\s=\s*(\{[^\n\r]+\});/)
$=JSON.parse($[1]).images;
return $ ? $.map(function(i){return [i.cdnUrl, i.caption +' '+ i.sourceUrl]}) : $
},
    "res\u0000var x=$._, t=[], m={}\nObject.keys(x.tags).forEach(function(i){ i=i.split('#'); if(i[1])m[i[1]]=i[0]; else t.push(i[0]) })\nreturn ['data/' + Object.values(x.transforms)[0], [new Date(x.createdAt).toLocaleString(), 'by ' + m.artist, m.character, m.origin, t.join(', ')].filter(Boolean).join(' | ')]": function($){var x=$._, t=[], m={}
Object.keys(x.tags).forEach(function(i){ i=i.split('#'); if(i[1])m[i[1]]=i[0]; else t.push(i[0]) })
return ['data/' + Object.values(x.transforms)[0], [new Date(x.createdAt).toLocaleString(), 'by ' + m.artist, m.character, m.origin, t.join(', ')].filter(Boolean).join(' | ')]
},
    "res\u0000$._=JSON.parse($._)\nreturn [[$._.record_type[0]=='m' ? $._.url : ['#'+$._.images.original, $._.images.large], $._.title + ' by ' + $._.character.display_name]]": function($){$._=JSON.parse($._)
return [[$._.record_type[0]=='m' ? $._.url : ['#'+$._.images.original, $._.images.large], $._.title + ' by ' + $._.character.display_name]]
},
    "to\u0000:\nvar i=$[1][0]=='i'\nreturn '//i.pximg.net/' + (i ? 'img-original' : $[1]) + $[2] + (i && $[3]=='.jpg' ? '.#jpg png gif#' : $[3])": function(){var $ = arguments; 
var i=$[1][0]=='i'
return '//i.pximg.net/' + (i ? 'img-original' : $[1]) + $[2] + (i && $[3]=='.jpg' ? '.#jpg png gif#' : $[3])
},
    "res\u0000var i,u,r=[], p=/\\/(?:c\\/[\\dx]+\\/)?img-master(\\/[^.]+_p\\d+)[^.]+\\.jpg.*/, t='/img-original$1.'\nif (/[?&]mode=manga/.test($.url[0])) {\n ($._.match(/\" data-src=\"[^\"]+/g)||[]).forEach(function(i) {\n  i=i.slice(12).replace(p,t)\n  r.push([[i+'png',i+'jpg',i+'gif']])\n });\n $=$._.match(/<title>([^<]+)/)\n if($) r[0][1]=$[1]\n} else {\n if (/[?&]mode=medium/.test($.url[0])&&/_work multiple/.test($._)) return {loop: $.url[0].replace('=medium', '=manga')}\n try{\n  p = JSON.parse($._.match(/\\}\\)\\((\\{[^\\n]+),\\}\\)/)[1].replace(/([,{])\\s*([a-zA-Z\\d]+)\\s*:/g, '$1\"$2\":').replace(/,\\s*(\\]|\\})/g, '$1') + '}')\n  i=p.preload.illust[$[1]]\n  u=p.preload.user[i.userId].name\n\n  for (p = 0; p < i.pageCount; ++p) r.push([i.urls.original.replace('_p0', '_p' + p)])\n\n  r[0][1] = '['+i.illustTitle+' by ' + u + '] ' + i.illustComment + ' | ' + new Date(i.uploadDate).toLocaleString()\n }catch(e){}\n}\n\nif(!r.length){\n i = $._.match(/<(?:div class=\"(?:works_display|img-container)\">\\s*<a href=\"([^?]+\\?mode=manga[^\"]+))/);\n if (i) return (i[1].indexOf('://') > 3 ? '' : $.base) + i[1].replace(/&amp;/g, '&')\n i = [\n  $._.match(RegExp('=\"(https?://i\\.pximg\\.net/[^.]+/' + $[1] + '_[^\\'\"]+)')),\n  $._.match(/=\"og:(?:title|description)\" content=\"[^\"]*/g)\n ];\n if (i[0]) {\n  u=i[0][1].replace(p,t);\n  r = [[[u+'png',u+'jpg',u+'gif'], i[1] && i[1].map(function(i) {\n   return i.slice(i.lastIndexOf('\"') + 1)\n  }).filter(Boolean).join(' - ')]]\n }\n}\n\nreturn r": function($){var i,u,r=[], p=/\/(?:c\/[\dx]+\/)?img-master(\/[^.]+_p\d+)[^.]+\.jpg.*/, t='/img-original$1.'
if (/[?&]mode=manga/.test($.url[0])) {
 ($._.match(/" data-src="[^"]+/g)||[]).forEach(function(i) {
  i=i.slice(12).replace(p,t)
  r.push([[i+'png',i+'jpg',i+'gif']])
 });
 $=$._.match(/<title>([^<]+)/)
 if($) r[0][1]=$[1]
} else {
 if (/[?&]mode=medium/.test($.url[0])&&/_work multiple/.test($._)) return {loop: $.url[0].replace('=medium', '=manga')}
 try{
  p = JSON.parse($._.match(/\}\)\((\{[^\n]+),\}\)/)[1].replace(/([,{])\s*([a-zA-Z\d]+)\s*:/g, '$1"$2":').replace(/,\s*(\]|\})/g, '$1') + '}')
  i=p.preload.illust[$[1]]
  u=p.preload.user[i.userId].name

  for (p = 0; p < i.pageCount; ++p) r.push([i.urls.original.replace('_p0', '_p' + p)])

  r[0][1] = '['+i.illustTitle+' by ' + u + '] ' + i.illustComment + ' | ' + new Date(i.uploadDate).toLocaleString()
 }catch(e){}
}

if(!r.length){
 i = $._.match(/<(?:div class="(?:works_display|img-container)">\s*<a href="([^?]+\?mode=manga[^"]+))/);
 if (i) return (i[1].indexOf('://') > 3 ? '' : $.base) + i[1].replace(/&amp;/g, '&')
 i = [
  $._.match(RegExp('="(https?://i\.pximg\.net/[^.]+/' + $[1] + '_[^\'"]+)')),
  $._.match(/="og:(?:title|description)" content="[^"]*/g)
 ];
 if (i[0]) {
  u=i[0][1].replace(p,t);
  r = [[[u+'png',u+'jpg',u+'gif'], i[1] && i[1].map(function(i) {
   return i.slice(i.lastIndexOf('"') + 1)
  }).filter(Boolean).join(' - ')]]
 }
}

return r
},
    "to\u0000:\nreturn $[1]+($[2] || ($[3].indexOf('/userimages')>0 ? $[3].replace(/_?thumbs?\\/?/g,'') : $[3] + '#l #'))+'.'+$[4]": function(){var $ = arguments; 
return $[1]+($[2] || ($[3].indexOf('/userimages')>0 ? $[3].replace(/_?thumbs?\/?/g,'') : $[3] + '#l #'))+'.'+$[4]
},
    "to\u0000:\nreturn $[2] ? $[1]+'gestion/telechargement.php?id_image='+$[2] : $[1]+'normal/';": function(){var $ = arguments; 
return $[2] ? $[1]+'gestion/telechargement.php?id_image='+$[2] : $[1]+'normal/';
},
    "to\u0000:\nreturn $[4][0]=='f' ? 'vt'+$[2]+'.mp4' : '//'+($[1]||'78.media')+$[2]+'#1280 500 400#.'": function(){var $ = arguments; 
return $[4][0]=='f' ? 'vt'+$[2]+'.mp4' : '//'+($[1]||'78.media')+$[2]+'#1280 500 400#.'
},
    "res\u0000$._=JSON.parse($._)\nif($._.meta.status!=200) return null\n$=$._.response.posts[0];\nvar t = $.caption||'';\nswitch($.type) {\n case 'photo':\n  return $.photos.map(function(x,i){\n   var c=x.caption||'';\n   return [x.original_size.url, (!i&&t ? (c ? '['+t+'] ' : t) :'') + c]\n  });\n  break;\n case 'video':\n  if($.video_url)return [$.video_url, t]\n  else if($.permalink_url)return{loop: $.permalink_url}\n}\nreturn !1": function($){$._=JSON.parse($._)
if($._.meta.status!=200) return null
$=$._.response.posts[0];
var t = $.caption||'';
switch($.type) {
 case 'photo':
  return $.photos.map(function(x,i){
   var c=x.caption||'';
   return [x.original_size.url, (!i&&t ? (c ? '['+t+'] ' : t) :'') + c]
  });
  break;
 case 'video':
  if($.video_url)return [$.video_url, t]
  else if($.permalink_url)return{loop: $.permalink_url}
}
return !1
},
    "to\u0000:\nif(/[&?]s=[\\da-f]{32}/.test($[0]))return $[0]\nvar x=$[8]&&$[8].match(/^(.*\\.)(jpe?g|gif|png)$/i)\nreturn $[1] + ($[2] || '') + ($[3] || '') + ($[4] || '') + ($[5] || '') + ($[6] ? $[6] + $[7] : '') + (x && x[2] ? x[1] + (x[2]!='j' ? x[2] : '#jpg jpeg png gif#') : $[8]||'')": function(){var $ = arguments; 
if(/[&?]s=[\da-f]{32}/.test($[0]))return $[0]
var x=$[8]&&$[8].match(/^(.*\.)(jpe?g|gif|png)$/i)
return $[1] + ($[2] || '') + ($[3] || '') + ($[4] || '') + ($[5] || '') + ($[6] ? $[6] + $[7] : '') + (x && x[2] ? x[1] + (x[2]!='j' ? x[2] : '#jpg jpeg png gif#') : $[8]||'')
},
    "to\u0000:\nif($[1].indexOf('%')>0)$[1] = decodeURIComponent($[1])\nreturn /^http/.test($[1]) ? $[1] : '//' + $[1]": function(){var $ = arguments; 
if($[1].indexOf('%')>0)$[1] = decodeURIComponent($[1])
return /^http/.test($[1]) ? $[1] : '//' + $[1]
},
    "to\u0000:\nvar n=this.node, r=/\\.(jpe?g|gif|png|bmp|web[mp]|mp[34])\\b/i\nconsole.log(n.title)\nreturn $[1]==1 || r.test(n.textContent) || r.test(n.title) || ~(n.src||'').indexOf($[1]) || n.classList.contains('thumbnail') ? $[0].replace(/thumb=1&?/,'') : ''": function(){var $ = arguments; 
var n=this.node, r=/\.(jpe?g|gif|png|bmp|web[mp]|mp[34])\b/i
console.log(n.title)
return $[1]==1 || r.test(n.textContent) || r.test(n.title) || ~(n.src||'').indexOf($[1]) || n.classList.contains('thumbnail') ? $[0].replace(/thumb=1&?/,'') : ''
},
    "to\u0000:\nreturn 'http://'+$[1]+($[5] ? '#image.php #?di=' + $[5] : ($[3]||'')+ 'di' +($[2]||'') + ($[4]||'') +'.jpg');": function(){var $ = arguments; 
return 'http://'+$[1]+($[5] ? '#image.php #?di=' + $[5] : ($[3]||'')+ 'di' +($[2]||'') + ($[4]||'') +'.jpg');
},
    "to\u0000:\nreturn $[4] ?\n'#' + $[1] + $[2] + $[4] + '\\n' + $[1] + 'tn/' + $[2] + '.med' + $[4] :\n'#' + $[1] + $[2] + $[3] + '\\n' + $[1] + 'tn/' + $[2] + $[3];": function(){var $ = arguments; 
return $[4] ?
'#' + $[1] + $[2] + $[4] + '\n' + $[1] + 'tn/' + $[2] + '.med' + $[4] :
'#' + $[1] + $[2] + $[3] + '\n' + $[1] + 'tn/' + $[2] + $[3];
},
    "to\u0000:\nreturn $[2].slice(-13) === 'directory.jpg' ? $[0] : $[1] + 'displaypic=' + $[2];": function(){var $ = arguments; 
return $[2].slice(-13) === 'directory.jpg' ? $[0] : $[1] + 'displaypic=' + $[2];
},
    "to\u0000:\nvar l;\nif ($[4]) {\n l = [$[1] + $[4], '.#' + $[5] + ' ' + $[5].toUpperCase() + '#'];\n l = '#' + l[0] + '_original' + l[1] + '\\n' + l.join(\"\");\n} else if (/-thumb\\.[A-Za-z]{3,4}$/.test($[0])) l = $[0].replace('-thumb.', '.');\nelse {\n l = $[1] + $[2];\n l = '#' + l + $[3] + '\\n' + l +'medium/' + $[3];\n}\nreturn l;": function(){var $ = arguments; 
var l;
if ($[4]) {
 l = [$[1] + $[4], '.#' + $[5] + ' ' + $[5].toUpperCase() + '#'];
 l = '#' + l[0] + '_original' + l[1] + '\n' + l.join("");
} else if (/-thumb\.[A-Za-z]{3,4}$/.test($[0])) l = $[0].replace('-thumb.', '.');
else {
 l = $[1] + $[2];
 l = '#' + l + $[3] + '\n' + l +'medium/' + $[3];
}
return l;
},
};
var izRuleFn = function(param, code) {
    return IZ_RULE_FN[param + "\u0000" + code] || null;
};
