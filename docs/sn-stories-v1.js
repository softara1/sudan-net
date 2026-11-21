/* Sudan Net lightweight stories v1.1.0. Team Sudan Net.
   Manual, public editorial items only. Optional admin images and native topic replies. No feeds, member uploads, tracking or auto-advance.
   Edit only SN_STORY_ITEMS below. Dates are ISO timestamps with a timezone.
   The script runs on this forum's homepage only. Loading it twice is harmless.
*/
(function () {
  'use strict';
  var SN_STORY_ITEMS = [
  {
    "id": "t545-20261121",
    "title": "كيف تسأل سؤالاً تقنياً وتحصل على مساعدة أوضح؟",
    "text": "دليل عملي لكتابة سؤال تقني واضح: وصف الهدف والخطوات والنتيجة والمحاولات، مع مثال جاهز ونصائح للصور وحماية المعلومات الخاصة.",
    "url": "https://almoatn.yoo7.com/t545-%D9%85%D9%82%D8%A7%D9%84-%D9%83%D9%8A%D9%81-%D8%AA%D8%B3%D8%A3%D9%84-%D8%B3%D8%A4%D8%A7%D9%84%D8%A7-%D8%AA%D9%82%D9%86%D9%8A%D8%A7-%D9%88%D8%AA%D8%AD%D8%B5%D9%84-%D8%B9%D9%84%D9%89-%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9-%D8%A3%D9%88%D8%B6%D8%AD",
    "color": "#183e75",
    "expires": "2026-12-05T23:59:59+04:00",
    "image": "https://i.servimg.com/u/f83/15/40/41/93/2-cove10.png",
    "imageAlt": "كيف تسأل سؤالاً تقنياً وتحصل على مساعدة أوضح؟"
  },
  {
    "id": "t548-20261121",
    "title": "صور العائلة تستحق ترتيباً: من أين تبدأ؟",
    "text": "طريقة بسيطة لترتيب صور العائلة: ابدأ بمناسبة واحدة، واستخدم أسماء واضحة، واحتفظ بنسخة منفصلة، ووثّق الذكريات من دون المساس بخصوصيتها.",
    "url": "https://almoatn.yoo7.com/t548-%D9%85%D9%82%D8%A7%D9%84-%D8%B5%D9%88%D8%B1-%D8%A7%D9%84%D8%B9%D8%A7%D8%A6%D9%84%D8%A9-%D8%AA%D8%B3%D8%AA%D8%AD%D9%82-%D8%AA%D8%B1%D8%AA%D9%8A%D8%A8%D8%A7-%D9%85%D9%86-%D8%A3%D9%8A%D9%86-%D8%AA%D8%A8%D8%AF%D8%A3",
    "color": "#254c82",
    "expires": "2026-12-05T23:59:59+04:00",
    "image": "https://i.servimg.com/u/f83/15/40/41/93/1-cove11.png",
    "imageAlt": "صور العائلة تستحق ترتيباً: من أين تبدأ؟"
  },
  {
    "id": "t552-20261121",
    "title": "زر إظهار وإخفاء التوقيع: توقيع مطوي أسفل المشاركات في AwesomeBB",
    "text": "شرح زر يطوي توقيع العضو أسفل المشاركة ويفتحه عند الطلب، مع أكواد CSS وJavaScript كاملة وصورة توضح النتيجة وحدود التوافق مع AwesomeBB.",
    "url": "https://almoatn.yoo7.com/t552-%D9%83%D9%88%D8%AF-javascript-%D8%B2%D8%B1-%D8%A5%D8%B8%D9%87%D8%A7%D8%B1-%D9%88%D8%A5%D8%AE%D9%81%D8%A7%D8%A1-%D8%A7%D9%84%D8%AA%D9%88%D9%82%D9%8A%D8%B9-%D8%AA%D9%88%D9%82%D9%8A%D8%B9-%D9%85%D8%B7%D9%88%D9%8A-%D8%A3%D8%B3%D9%81%D9%84-%D8%A7%D9%84%D9%85%D8%B4%D8%A7%D8%B1%D9%83%D8%A7%D8%AA-%D9%81%D9%8A-awesomebb",
    "color": "#294568",
    "expires": "2026-12-05T23:59:59+04:00",
    "image": "https://i.servimg.com/u/f69/20/28/67/19/1-sign10.png",
    "imageAlt": "زر إظهار وإخفاء التوقيع: توقيع مطوي أسفل المشاركات في AwesomeBB"
  }
];
  var ROOT = 'sn-stories-v1', STORAGE = 'sn_stories_seen_v1';
  if (location.hostname !== 'almoatn.yoo7.com' || !/^\/(?:forum\/?)?$/.test(location.pathname)) return;
  function element(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }
  function topicUrl(value) {
    try {
      var url = new URL(value, location.origin);
      if (url.origin !== location.origin || !/^\/t\d+(?:-|$)/.test(url.pathname)) return null;
      url.hash = ''; url.search = '';
      return url.href;
    } catch (error) { return null; }
  }
  function imageUrl(value) {
    if (!value) return null;
    try {
      var url = new URL(value);
      return url.protocol === 'https:' && !url.username && !url.password ? url.href : null;
    } catch (error) { return null; }
  }
  function replyUrl(value) {
    var match = new URL(value).pathname.match(/^\/t(\d+)(?:-|$)/);
    return match ? '/post?t=' + match[1] + '&mode=reply' : null;
  }
  function start() {
    if (document.getElementById(ROOT)) return;
    var anchor = document.querySelector('#index #snr');
    if (!anchor || typeof HTMLDialogElement === 'undefined' || !HTMLDialogElement.prototype.showModal) return;
    var now = Date.now(), items = [], seen = {};
    SN_STORY_ITEMS.forEach(function (item) {
      var url = topicUrl(item.url), ends = Date.parse(item.expires);
      if (items.length >= 8 || !url || !Number.isFinite(ends) || ends <= now || !item.title || !item.text || !/^#[0-9a-f]{6}$/i.test(item.color)) return;
      items.push({title:String(item.title).slice(0,180), text:String(item.text).slice(0,700), url:url, color:item.color, image:imageUrl(item.image), imageAlt:String(item.imageAlt || item.title).slice(0,180), key:String(item.id).slice(0,80)});
    });
    if (!items.length) return;
    try { seen = JSON.parse(localStorage.getItem(STORAGE) || '{}') || {}; } catch (error) { seen = {}; }
    if (typeof seen !== 'object' || Array.isArray(seen)) seen = {};
    var host = element('section'); host.id = ROOT; host.dir = 'rtl'; host.setAttribute('aria-label','مختارات سودان نت');
    var heading = element('div','sns-heading');
    heading.append(element('h2','','مختارات سودان نت'),element('span','','اضغط على بطاقة للقراءة'));
    var strip = element('div','sns-strip'); strip.setAttribute('aria-label','بطاقات المواضيع المختارة');
    var modal = element('dialog'); modal.id = ROOT + '-dialog'; modal.dir = 'rtl';
    modal.setAttribute('aria-labelledby',ROOT+'-title'); modal.setAttribute('aria-describedby',ROOT+'-text');
    var sheet = element('div','sns-sheet'), bars = element('div','sns-bars'); bars.setAttribute('aria-hidden','true');
    var close = element('button','sns-close','×'); close.type='button'; close.setAttribute('aria-label','إغلاق الستوري');
    var count = element('p','sns-count'), title = element('h2'); title.id=ROOT+'-title';
    var text = element('p','sns-text'); text.id=ROOT+'-text';
    var go = element('a','sns-go','افتح الموضوع');
    var media = element('div','sns-media'); media.hidden = true;
    var comment = element('a','sns-comment','علّق على الموضوع');
    var commentNote = element('p','sns-comment-note','التعليق يُنشر رداً في الموضوع، وليس تعليقاً مستقلاً للستوري.');
    var nav = element('div','sns-navigation'), previous = element('button','','السابق'), next = element('button','','التالي');
    previous.type='button'; next.type='button'; nav.append(previous,next);
    sheet.append(bars,close,count,title,media,text,go,comment,commentNote,nav); modal.append(sheet); host.append(heading,strip);
    var current = -1, lastTrigger = null, oldOverflow = '', cards = [];
    function markSeen(index) {
      seen[items[index].key]=1;
      cards[index].classList.add('sns-seen'); cards[index].setAttribute('aria-label',items[index].title+'، تمت مشاهدته');
      var limited={}; items.forEach(function(item){if(seen[item.key]) limited[item.key]=1;});
      try { localStorage.setItem(STORAGE,JSON.stringify(limited)); } catch (error) { /* Browsing still works without storage. */ }
    }
    function render(index) {
      current=index; var item=items[index]; sheet.style.backgroundColor=item.color;
      bars.textContent=''; items.forEach(function(_,n){bars.append(element('i',n===index?'sns-current':n<index?'sns-past':''));});
      count.textContent=(index+1)+' / '+items.length; title.textContent=item.title; text.textContent=item.text; go.href=item.url;
      comment.href=replyUrl(item.url);
      media.textContent=''; media.hidden=true;
      if(item.image){
        var image=element('img','sns-image'); image.alt=item.imageAlt; image.decoding='async'; image.referrerPolicy='no-referrer';
        image.addEventListener('error',function(){if(media.firstChild===image){media.textContent='';media.hidden=true;}});
        media.append(image);media.hidden=false;image.src=item.image;
      }
      previous.disabled=index===0; next.textContent=index===items.length-1?'إنهاء':'التالي'; markSeen(index);
    }
    function shut() { if(modal.open) modal.close(); }
    function open(index,button) {
      if (!modal.open) {lastTrigger=button; oldOverflow=document.body.style.overflow;}
      render(index);
      if (!modal.open) {modal.showModal();document.body.style.overflow='hidden';}
      close.focus({preventScroll:true});
    }
    close.addEventListener('click',shut);
    previous.addEventListener('click',function(){if(current>0)render(current-1);});
    next.addEventListener('click',function(){if(current<items.length-1)render(current+1);else shut();});
    modal.addEventListener('close',function(){document.body.style.overflow=oldOverflow;if(lastTrigger&&lastTrigger.isConnected)lastTrigger.focus({preventScroll:true});});
    modal.addEventListener('click',function(event){if(event.target===modal){var b=sheet.getBoundingClientRect();if(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom)shut();}});
    items.forEach(function(item,index){
      var button=element('button','sns-card');button.type='button';
      var ring=element('span','sns-ring',String(index+1)); ring.style.backgroundColor=item.color;ring.setAttribute('aria-hidden','true');
      button.append(ring,element('span','sns-label',item.title));button.setAttribute('aria-haspopup','dialog');button.setAttribute('aria-controls',modal.id);
      if(seen[item.key]){button.classList.add('sns-seen');button.setAttribute('aria-label',item.title+'، تمت مشاهدته');}
      button.addEventListener('click',function(){open(index,button);});cards.push(button);strip.append(button);
    });
    var style=element('style');style.id=ROOT+'-style';style.textContent="#sn-stories-v1{box-sizing:border-box;direction:rtl;grid-column:1/-1;width:100%;max-width:100%;min-width:0;margin:0 0 12px;padding:12px 14px;border:1px solid var(--fx-border,#d6deea);border-radius:16px;background:var(--fx-card,#fff);color:var(--fx-text,#172745);font-family:Cairo,Tahoma,Arial,sans-serif}#sn-stories-v1 *{box-sizing:border-box}#sn-stories-v1 .sns-heading{display:flex;align-items:baseline;justify-content:space-between;gap:10px;flex-wrap:wrap;margin:0 0 10px}#sn-stories-v1 .sns-heading h2{font:800 15px/1.8 Cairo,Tahoma,Arial,sans-serif;margin:0;color:inherit}#sn-stories-v1 .sns-heading>span{font-size:11px;line-height:1.6;color:var(--fx-text-sub,#526278)}#sn-stories-v1 .sns-strip{display:flex;gap:12px;overflow-x:auto;overscroll-behavior-x:contain;padding:5px 3px 10px;max-width:100%;scrollbar-width:thin}#sn-stories-v1 .sns-card{flex:0 0 88px;min-width:0;display:block;appearance:none;border:0;border-radius:8px;padding:3px;background:transparent;box-shadow:none;cursor:pointer;text-align:center;color:inherit;font:600 11px/1.65 Cairo,Tahoma,Arial,sans-serif;white-space:normal;text-transform:none;letter-spacing:normal}#sn-stories-v1 .sns-ring{box-sizing:border-box;display:grid;place-items:center;width:58px;height:58px;margin:0 auto 9px;border:3px solid var(--fx-card,#fff);outline:2px solid #284f91;border-radius:50%;color:#fff;font:800 23px/1 Cairo,Tahoma,Arial,sans-serif}#sn-stories-v1 .sns-seen .sns-ring{outline-color:#94a3b8}#sn-stories-v1 .sns-label{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere;max-height:3.3em}#sn-stories-v1 button:focus-visible,#sn-stories-v1-dialog :focus-visible{outline:3px solid #86b9f7;outline-offset:4px}#sn-stories-v1-dialog{box-sizing:border-box;width:min(94vw,500px);max-width:94vw;max-height:92vh;max-height:92dvh;padding:0;margin:auto;overflow:auto;background:#173c70;color:#fff;border:1px solid #a9bdd9;border-radius:20px;box-shadow:0 16px 80px #0007;direction:rtl;font-family:Cairo,Tahoma,Arial,sans-serif}#sn-stories-v1-dialog:not([open]){display:none}#sn-stories-v1-dialog::backdrop{background:#07142bd9}#sn-stories-v1-dialog *{box-sizing:border-box}#sn-stories-v1-dialog .sns-sheet{position:relative;min-height:440px;padding:76px 24px 22px;text-align:center;color:#fff}#sn-stories-v1-dialog .sns-bars{position:absolute;top:15px;left:16px;right:16px;display:flex;gap:5px}#sn-stories-v1-dialog .sns-bars i{display:block;flex:1;height:3px;border-radius:2px;background:#ffffff52}#sn-stories-v1-dialog .sns-bars .sns-current{background:#fff}#sn-stories-v1-dialog .sns-bars .sns-past{background:#ffffffb3}#sn-stories-v1-dialog .sns-close{appearance:none;position:absolute;top:25px;left:13px;display:grid;place-items:center;min-width:44px;min-height:44px;padding:0;border:1px solid #ffffff8c;border-radius:50%;background:#ffffff1a;box-shadow:none;color:#fff;font:28px/1 Arial,sans-serif;cursor:pointer}#sn-stories-v1-dialog .sns-count{direction:ltr;unicode-bidi:isolate;margin:0 0 14px;font:600 12px/1.8 Cairo,Tahoma,Arial,sans-serif;color:#e4ebf7}#sn-stories-v1-dialog h2{margin:0 0 14px;color:#fff;font:800 clamp(20px,5vw,27px)/1.8 Cairo,Tahoma,Arial,sans-serif;overflow-wrap:anywhere}#sn-stories-v1-dialog .sns-text{margin:0;color:#fff;font:400 15px/2 Cairo,Tahoma,Arial,sans-serif;overflow-wrap:anywhere;white-space:pre-wrap}#sn-stories-v1-dialog .sns-go{display:flex;justify-content:center;align-items:center;min-height:48px;margin:24px auto 20px;padding:9px 20px;border:1px solid #fff;border-radius:12px;background:#fff;box-shadow:none;color:#14305b;font:800 14px/1.8 Cairo,Tahoma,Arial,sans-serif;text-decoration:none}#sn-stories-v1-dialog .sns-navigation{display:flex;justify-content:space-between;gap:12px}#sn-stories-v1-dialog .sns-navigation button{appearance:none;flex:1;min-height:44px;border:1px solid #ffffff8c;border-radius:10px;background:#ffffff14;box-shadow:none;color:#fff;font:600 13px/1.8 Cairo,Tahoma,Arial,sans-serif;cursor:pointer;padding:7px 10px}#sn-stories-v1-dialog .sns-navigation button:disabled{opacity:.4;cursor:default}@media(max-width:360px){#sn-stories-v1{padding:10px}#sn-stories-v1 .sns-strip{gap:9px}#sn-stories-v1 .sns-card{flex-basis:80px}#sn-stories-v1-dialog .sns-sheet{padding:76px 17px 20px}#sn-stories-v1-dialog .sns-text{font-size:14px}}\n#sn-stories-v1-dialog .sns-media{margin:0 0 16px;width:100%;border-radius:10px;overflow:hidden;background:#ffffff12}#sn-stories-v1-dialog .sns-media[hidden]{display:none}#sn-stories-v1-dialog .sns-image{display:block;width:100%;height:auto;max-height:220px;max-height:min(220px,30dvh);object-fit:contain;margin:0;border:0;border-radius:10px}#sn-stories-v1-dialog .sns-comment{display:flex;align-items:center;justify-content:center;min-height:46px;margin:0 auto 8px;padding:9px 15px;border:1px solid #ffffffaa;border-radius:12px;background:#ffffff14;box-shadow:none;color:#fff;font:700 14px/1.8 Cairo,Tahoma,Arial,sans-serif;text-decoration:none}#sn-stories-v1-dialog .sns-comment-note{margin:0 0 18px;color:#e2e9f5;font:400 11px/1.8 Cairo,Tahoma,Arial,sans-serif}#sn-stories-v1-dialog .sns-go{margin-bottom:10px}";
    document.head.append(style); anchor.parentNode.insertBefore(host,anchor);document.body.append(modal);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
}());
