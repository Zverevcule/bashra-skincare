/* Lightweight, offline bilingual UI for English and Arabic. */
(() => {
  const dictionary = {
    "Nature meets science":"الطبيعة تلتقي بالعلم",
    "Nature's care for your skin":"عناية الطبيعة ببشرتك",
    "Skincare Rituals":"طقوس العناية بالبشرة",
    "Enter the world of BASHRA":"اكتشفي عالم بشرة",
    "Skip intro ›":"تخطي المقدمة ›",
    "Shop":"تسوقي",
    "Rituals":"الطقوس",
    "Ingredients":"المكونات",
    "Our Story":"قصتنا",
    "Contact":"تواصلي معنا",
    "Home":"الرئيسية",
    "Shop All":"تسوقي الكل",
    "Skincare Rituals":"طقوس العناية بالبشرة",
    "Botanical Ingredients":"مكونات نباتية",
    "Contact Us":"تواصلي معنا",
    "Your Bag":"حقيبتك",
    "Menu":"القائمة",
    "Open menu":"افتحي القائمة",
    "Close menu":"أغلقي القائمة",
    "Open bag":"افتحي الحقيبة",
    "Close bag":"أغلقي الحقيبة",
    "The BASHRA Circle":"عالم بشرة",
    "Rituals, launches &":"طقوسنا وإصداراتنا و",
    "quiet":"أخبارنا الهادئة",
    "news.":".",
    "Your email address":"بريدك الإلكتروني",
    "Email":"البريد الإلكتروني",
    "Join →":"انضمي →",
    "All Products":"كل المنتجات",
    "Cleanser":"غسول الوجه",
    "Toner":"التونر",
    "Serum":"السيروم",
    "Cream":"الكريم",
    "Discover":"اكتشفي",
    "Help":"المساعدة",
    "Watch the film":"شاهدي الفيلم",
    "Prototype preview — checkout, payments & forms are not connected yet.":"نسخة تجريبية — الدفع والنماذج غير مفعّلة بعد.",
    "Checkout is coming soon":"إتمام الطلب قريبًا",
    "This preview has a working bag, but no real checkout yet. The live website will connect secure payment, delivery and order management — these need a real e-commerce platform and payment provider.":"تعمل حقيبة التسوق في هذه النسخة، لكن إتمام الطلب غير متاح بعد. سيتيح الموقع النهائي الدفع الآمن والتوصيل وإدارة الطلبات عبر منصة تجارة إلكترونية.",
    "Continue browsing":"تابعي التصفح",
    "Nature's care":"عناية الطبيعة",
    "for your":"من أجل",
    "skin.":"بشرتك.",
    "A four-step skincare ritual from Egypt — calm, considered and made to be part of your everyday.":"طقس عناية من أربع خطوات من مصر، هادئ ومدروس ليناسب يومك.",
    "Shop now":"تسوقي الآن",
    "Discover the ritual":"اكتشفي الطقس",
    "▶ Watch the film":"▶ شاهدي الفيلم",
    "Our philosophy":"فلسفتنا",
    "Nature":"الطبيعة",
    "meets":"تلتقي بـ",
    "Science":"العلم",
    "Our inspiration — the calm of botanicals and the warmth of Egyptian earth, reflected in every colour, texture and detail of BASHRA.":"مصدر إلهامنا هو هدوء النباتات ودفء الأرض المصرية، وينعكس ذلك في ألوان بشرة وملمسها وتفاصيلها.",
    "Our method — a considered, step-by-step approach to care. Four essentials, each with its own place in your daily ritual.":"منهجنا عناية مدروسة خطوة بخطوة. أربعة مستحضرات أساسية، لكل منها مكان في طقسك اليومي.",
    "BASHRA Skincare Rituals":"طقوس العناية من بشرة",
    "Nature's care,":"عناية الطبيعة،",
    "beautifully kept.":"بلمسة من الجمال.",
    "Gentle Face Cleanser, Radiant Skin Toner, Revitalizing Face Serum and Nourishing Face Cream — four essentials, created to live together as one daily ritual.":"غسول لطيف، وتونر لإشراقة البشرة، وسيروم منشط، وكريم مغذٍ — أربعة أساسيات لطقس يومي متكامل.",
    "The":"مجموعة",
    "Collection":"المستحضرات",
    "View all products":"شاهدي كل المنتجات",
    "Add to bag":"أضيفي إلى الحقيبة",
    "Step one of the BASHRA ritual — begin with a fresh, clean canvas.":"الخطوة الأولى في طقس بشرة — ابدئي ببشرة نظيفة ومنتعشة.",
    "Step two of the ritual — the bridge between cleansing and treatment.":"الخطوة الثانية — حلقة الوصل بين التنظيف والعناية المركزة.",
    "Step three — a concentrated moment of care before your cream.":"الخطوة الثالثة — عناية مركزة قبل وضع الكريم.",
    "Step four — complete your ritual with comfort and calm.":"الخطوة الرابعة — أكملي طقسك بلمسة من الراحة والهدوء.",
    "Cleanse":"تنظيف",
    "Tone":"توازن",
    "Treat":"عناية مركزة",
    "Nourish":"تغذية",
    "Step":"الخطوة",
    "The daily ritual":"الطقس اليومي",
    "Four steps.":"أربع خطوات.",
    "One ritual.":"طقس واحد.",
    "Explore rituals":"اكتشفي الطقوس",
    "Our belief":"ما نؤمن به",
    "Luxury should feel":"يجب أن يكون الترف",
    "calm":"هادئًا",
    "warm, and always within reach.":"ودافئًا وفي متناولك دائمًا.",
    "Shop all · 4 essentials":"تسوقي الكل · ٤ مستحضرات أساسية",
    "All":"الكل",
    "Prices shown are sample prices for this prototype.":"الأسعار المعروضة تجريبية.",
    "Where":"حيث",
    "nature":"الطبيعة",
    "meets science.":"تلتقي بالعلم.",
    "BASHRA is an Egyptian skincare brand built on a simple belief: everyday care can be elegant, natural and calm — without ever feeling complicated.":"بشرة علامة عناية مصرية تنطلق من إيمان بسيط: يمكن للعناية اليومية أن تكون أنيقة وطبيعية وهادئة، بلا تعقيد.",
    "Philosophy":"الفلسفة",
    "We draw our inspiration from nature — its colours, its calm, its rhythm — and pair it with a clear, structured way of caring for skin.":"نستلهم من الطبيعة — ألوانها وهدوئها وإيقاعها — ونجمع ذلك مع نهج واضح ومنظم للعناية بالبشرة.",
    "The result is a ritual of four essentials, each designed to take its own place in your day.":"والنتيجة طقس من أربعة مستحضرات أساسية، لكل منها مكانها في يومك.",
    "Our promise":"وعدنا",
    "Luxury, made accessible":"ترف في متناولك",
    "We believe premium care should feel warm and welcoming — never intimidating. Considered design, honest presentation and a ritual that is easy to follow.":"نؤمن بأن العناية الفاخرة يجب أن تكون دافئة ومرحبة. تصميم مدروس ومعلومات واضحة وطقس يسهل اتباعه.",
    "Our roots":"جذورنا",
    "Made in Egypt, for you":"صُنع في مصر لأجلك",
    "BASHRA is proudly Egyptian — created to stand among international skincare brands while staying true to its own identity.":"بشرة علامة مصرية نفخر بها، وُلدت لتكون بين علامات العناية العالمية مع الحفاظ على هويتها.",
    "Botanical Library.":"مكتبة النباتات.",
    "A considered look at what goes into every BASHRA formula — where it comes from and why it has a place in your ritual.":"نظرة مدروسة إلى مكونات تركيبات بشرة ومصادرها وسبب اختيارها لطقسك.",
    "Ingredient name":"اسم المكوّن",
    "Your daily":"طقسك",
    "ritual.":"اليومي.",
    "Four essentials, one simple order. Each step prepares your skin for the next.":"أربعة مستحضرات بترتيب بسيط. كل خطوة تهيئ بشرتك للخطوة التالية.",
    "View product":"شاهدي المنتج",
    "Follow the pack":"اتبعي الإرشادات",
    "Always follow the directions printed on each BASHRA product for amount and frequency.":"اتبعي دائمًا تعليمات الاستخدام والكمية والتكرار المطبوعة على كل منتج من بشرة.",
    "Try it first":"اختبريه أولًا",
    "When introducing any new skincare product, a patch test on a small area of skin is a good habit.":"عند تجربة منتج جديد، من الأفضل اختباره على مساحة صغيرة من البشرة أولًا.",
    "Add the full ritual to bag":"أضيفي الطقس كاملًا إلى الحقيبة",
    "Let's":"لنتحدث",
    "talk.":".",
    "Questions about a product, an order or your ritual? We'd love to hear from you.":"لديك سؤال عن منتج أو طلب أو طقسك؟ يسعدنا أن نسمع منك.",
    "Name":"الاسم",
    "Message":"الرسالة",
    "Send message":"أرسلي الرسالة",
    "Based in":"الموقع",
    "Egypt":"مصر",
    "Shopping bag":"حقيبة التسوق",
    "Your":"حقيبتك",
    "Bag":"",
    "Your bag is empty":"حقيبتك فارغة",
    "Begin your ritual with our four essentials.":"ابدئي طقسك بمستحضراتنا الأربعة الأساسية.",
    "Shop the collection":"تسوقي المجموعة",
    "Summary":"الملخص",
    "Items":"المنتجات",
    "Subtotal":"المجموع الفرعي",
    "Delivery":"التوصيل",
    "At checkout":"يُحسب عند إتمام الطلب",
    "Total":"الإجمالي",
    "Checkout":"إتمام الطلب",
    "Sample prices · delivery calculated at checkout.":"أسعار تجريبية · يُحسب التوصيل عند إتمام الطلب.",
    "Sample prices":"أسعار تجريبية",
    "Prototype":"نسخة تجريبية",
    "Prototype: sample prices. Payment & delivery require future integration.":"نسخة تجريبية: الأسعار تجريبية. يلزم ربط الدفع والتوصيل.",
    "Prototype: stock and delivery options will be connected in the live store.":"نسخة تجريبية: ستُضاف خيارات المخزون والتوصيل إلى المتجر النهائي.",
    "Description":"الوصف",
    "How to use":"طريقة الاستخدام",
    "Ingredients":"المكونات",
    "Full product description —":"الوصف الكامل للمنتج —",
    "Directions for use —":"إرشادات الاستخدام —",
    "Full ingredient list (INCI) —":"قائمة المكونات الكاملة (INCI) —",
    "Complete":"أكملي",
    "your ritual":"طقسك",
    "Previous image":"الصورة السابقة",
    "Next image":"الصورة التالية",
    "Studio renders and photography based on BASHRA packaging designs.":"صور وتصميمات استوديو مستوحاة من عبوات بشرة.",
    "Add to bag —":"أضيفي إلى الحقيبة —",
    "Remove":"إزالة",
    "Decrease":"تقليل",
    "Increase":"زيادة",
    "Please add your name, a valid email and a message.":"يرجى إدخال الاسم وبريد إلكتروني صحيح ورسالة.",
    "Thank you! (Prototype — sign-ups will be connected to an email service in the live site.)":"شكرًا لكِ! (نسخة تجريبية — ستُربط الاشتراكات بخدمة بريد إلكتروني في الموقع النهائي.)",
    "Thank you. This is a prototype — the form is not connected yet, so your message was not sent. In the live website it will be delivered to the BASHRA team.":"شكرًا لكِ. هذه نسخة تجريبية والنموذج غير متصل، لذلك لم تُرسل رسالتك. سيصل النموذج إلى فريق بشرة عند تشغيل الموقع.",
    "Nature's Care For Your Skin":"عناية الطبيعة ببشرتك",
    "Nature's care for your skin":"عناية الطبيعة ببشرتك",
    "Gentle Face Cleanser":"غسول وجه لطيف",
    "Radiant Skin Toner":"تونر لإشراقة البشرة",
    "Revitalizing Face Serum":"سيروم منشط للوجه",
    "Nourishing Face Cream":"كريم مغذٍ للوجه",
    "Botanical":"النباتات",
    "Library.":"المكتبة.",
    "Botanical studies":"دراسات نباتية",
    "Content in progress":"المحتوى قيد الإعداد",
    "Ingredient names, origins and roles will be added only from BASHRA's verified formulas. The layout below is ready for them.":"ستُضاف أسماء المكونات ومصادرها ووظائفها بعد التحقق من تركيبات بشرة. والتصميم أدناه جاهز لها.",
    "Origin, role in the formula, and which BASHRA products feature it.":"المصدر ودور المكوّن والمنتجات التي تحتوي عليه.",
    "Founder's story, brand origin and the meaning behind the name BASHRA — to be written with you.":"قصة التأسيس وأصل العلامة ومعنى اسم بشرة — تُكتب بالتعاون معك.",
    "Your name":"اسمك",
    "Email address":"البريد الإلكتروني",
    "Phone (optional)":"رقم الهاتف (اختياري)",
    "Your message":"رسالتك",
    "Add BASHRA email":"أضيفي بريد بشرة الإلكتروني",
    "Add WhatsApp number":"أضيفي رقم واتساب",
    "Add @handle":"أضيفي اسم الحساب",
    "Contact us":"تواصلي معنا",
    "Nature meets science":"الطبيعة تلتقي بالعلم",
    "Shop All":"تسوقي الكل",
    "Our Story":"قصتنا",
    "Botanical Ingredients":"مكونات نباتية",
    "Contact Us":"تواصلي معنا",
    "Your Bag":"حقيبتك",
    "BASHRA — Gentle Face Cleanser":"بشرة — غسول وجه لطيف",
    "BASHRA — Radiant Skin Toner":"بشرة — تونر لإشراقة البشرة",
    "BASHRA — Revitalizing Face Serum":"بشرة — سيروم منشط للوجه",
    "BASHRA — Nourishing Face Cream":"بشرة — كريم مغذٍ للوجه"
  };

  const arabicToEnglish = Object.fromEntries(Object.entries(dictionary).map(([en, ar]) => [ar, en]));
  const phrases = Object.entries(dictionary).sort((a, b) => b[0].length - a[0].length);
  const translationCache = new Map();
  let language = 'en';

  function translate(value) {
    const cacheKey = `${language}\u0000${value}`;
    if (translationCache.has(cacheKey)) return translationCache.get(cacheKey);
    const source = language === 'ar' ? dictionary : arabicToEnglish;
    const exact = source[value.trim()];
    if (exact !== undefined) {
      const translated = value.replace(value.trim(), exact);
      translationCache.set(cacheKey, translated);
      return translated;
    }
    let next = value;
    for (const [from, to] of phrases) {
      const a = language === 'ar' ? from : to;
      const b = language === 'ar' ? to : from;
      if (a) next = next.split(a).join(b);
    }
    translationCache.set(cacheKey, next);
    return next;
  }

  function updateNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const translated = translate(node.nodeValue);
      if (translated !== node.nodeValue) node.nodeValue = translated;
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    for (const attr of ['placeholder', 'aria-label', 'title']) {
      if (node.hasAttribute(attr)) {
        const translated = translate(node.getAttribute(attr));
        if (translated !== node.getAttribute(attr)) node.setAttribute(attr, translated);
      }
    }
    node.childNodes.forEach(updateNode);
  }

  function setLanguage(next) {
    const shouldTranslate = document.documentElement.lang !== next;
    language = next;
    document.documentElement.lang = next;
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
    // Walk the document tree once. Querying every descendant and then recursively
    // walking each one repeats the same work many times, especially inside SVG art.
    if (shouldTranslate) Array.from(document.body.childNodes).forEach(updateNode);
    document.title = translate(document.title);
    const toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.textContent = next === 'ar' ? 'English' : 'العربية';
      toggle.setAttribute('aria-label', next === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    }
    try { localStorage.setItem('bashra-language', next); } catch (_) {}
  }

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('langToggle');
    if (toggle) toggle.addEventListener('click', () => setLanguage(language === 'en' ? 'ar' : 'en'));
    try { language = localStorage.getItem('bashra-language') === 'ar' ? 'ar' : 'en'; } catch (_) {}
    const observer = new MutationObserver(records => {
      for (const record of records) {
        if (record.type === 'characterData') updateNode(record.target);
        else record.addedNodes.forEach(updateNode);
      }
    });
    observer.observe(document.head, {subtree: true, childList: true, characterData: true});
    observer.observe(document.body, {subtree: true, childList: true, characterData: true});
    setLanguage(language);
  });
})();
