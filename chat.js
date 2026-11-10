/* CortexiQ site assistant.
 *
 * Answers questions from the knowledge base below, entirely in the visitor's
 * browser. There is no server and no AI model behind it: if a question is not
 * covered here, the assistant says so and offers the contact options.
 *
 * To teach it something new, add an entry to KB:
 *   id: short name, k: words or phrases that signal the topic, a: the answer.
 * Keep every answer in line with what the website publishes.
 */
(function () {
  var PHONE = '(205) 201-1844';
  var TEL = 'tel:+12052011844';
  var SMS = 'sms:+12052011844';
  var EMAIL = 'support@cortexiq.agency';
  var MAILTO = 'mailto:' + EMAIL + '?subject=Question%20from%20the%20website';

  var GUARANTEE = 'If Missed Call Text Back or your AI Voice Agent does not recover at least one lead in your first 30 days after going live, we refund your first month.';

  var KB = [
    { id: 'services', k: ['service', 'offer', 'what do you do', 'what does cortexiq do', 'what do you sell', 'help with', 'about cortexiq', 'what is cortexiq', 'who are you', 'products'],
      a: 'CortexiQ sets up Missed Call Text Back and 24/7 AI voice agents for local service businesses. We also offer AI chatbots, reputation management, local SEO, Google and Facebook ads management, social media management, websites, database reactivation, community platforms, AI influencers, and custom apps. Ask me about any of them, or ask for pricing.' },

    { id: 'pricing', k: ['price', 'pricing', 'cost', 'how much', 'rates', 'fee', 'charge', 'expensive', 'cheap', 'budget', 'quote'],
      a: 'Most businesses start with Missed Call Text Back at $297 a month or AI Voice Agents at $597 a month.\n\nOther monthly services: AI Chatbot Automation $297, Reputation Management $297, Social Media Management $297, Google Local Service Ads $497 plus ad spend, Facebook Ads Management $497 plus ad spend, Local SEO $597.\n\nOne-time services: Database Reactivation $697, On-Page SEO $797, Website Design $997.\n\nCommunity & Training Platform is $1,497 setup, then $297 a month. AI Influencers start at $2,500 setup, then from $1,500 a month. Custom apps start at $7,500 per app.',
      link: ['See the full price list', '/#pricing'] },

    { id: 'mctb', k: ['missed call', 'text back', 'missed call text back', 'miss a call', 'voicemail', 'cant answer', 'unanswered', 'mctb'],
      a: 'Missed Call Text Back is $297 a month. When you can\'t answer, the caller gets a text from your business right away, so they don\'t move on to the next company.\n\nIt includes automated text replies to missed calls, personalized branded messages, appointment scheduling integration, lead capture and CRM sync, customizable timing and responses, and real-time alerts and reporting.\n\n' + GUARANTEE },

    { id: 'voice', k: ['voice agent', 'ai voice', 'voice', 'answer calls', 'answer the phone', 'answer my phone', 'answer my calls', 'around the clock', 'after hours', 'ai answer', 'receptionist', 'phone agent', 'ai agent', 'answering service', 'call routing'],
      a: 'AI Voice Agents are $597 a month. An AI voice agent answers your sales and support calls around the clock.\n\nIt includes custom agent setup, sales or support call scripting, 24/7 availability, call management and routing, CRM and booking integration, and performance analytics.\n\n' + GUARANTEE },

    { id: 'guarantee', k: ['guarantee', 'refund', 'money back', 'risk', 'what if it doesnt work', 'not work', 'results'],
      a: 'Our 30 Day Recovered Lead Guarantee: ' + GUARANTEE },

    { id: 'contract', k: ['contract', 'cancel', 'cancellation', 'commitment', 'lock in', 'locked', 'month to month', 'terms', 'notice', 'minimum term'],
      a: 'There is no long contract. Every monthly service runs month to month, and you can cancel anytime. Your service stays active through the month you have paid for.' },

    { id: 'billing', k: ['billing', 'bill', 'invoice', 'pay', 'payment', 'upfront', 'setup fee', 'discount', 'bundle', 'package', 'deal'],
      a: 'One-time services are billed upfront, and monthly services are billed month to month. We offer discounts when you bundle multiple services together. The only setup fees are the ones shown in the price list, on the Community & Training Platform and AI Influencers.' },

    { id: 'location', k: ['where', 'located', 'location', 'office', 'address', 'visit', 'in person', 'birmingham', 'alabama', 'oxford', 'near me', 'local', 'remote', 'area', 'directions', 'based'],
      a: 'CortexiQ is a fully remote Alabama company. We serve businesses in Birmingham and across Alabama by phone, text, and video call, so there is no office to visit.',
      link: ['See our Birmingham page', '/birmingham-al/'] },

    { id: 'outside', k: ['outside alabama', 'other state', 'out of state', 'nationwide', 'georgia', 'tennessee', 'florida', 'mississippi', 'another state', 'usa'],
      a: 'We are fully remote and our focus is Alabama. If your business is somewhere else, contact us and we will tell you plainly whether we can help.', contact: true },

    { id: 'hours', k: ['hours', 'open', 'available', 'when can i', 'weekend', 'business hours', 'closed', 'time'],
      a: 'We are available Monday through Friday, from 9am to 6pm CST. You can email or text us anytime and we will reply on the next business day.', contact: true },

    { id: 'contact', k: ['contact', 'phone', 'number', 'call you', 'email', 'reach', 'talk to', 'speak', 'human', 'person', 'someone', 'representative', 'text you'],
      a: 'You can call or text ' + PHONE + ', or email ' + EMAIL + '. We reply within one business day.', contact: true },

    { id: 'start', k: ['get started', 'start', 'sign up', 'signup', 'book', 'consultation', 'schedule', 'appointment', 'demo', 'next step', 'begin', 'onboard', 'onboarding', 'how does it work', 'process', 'hire'],
      a: 'Getting started takes four steps. First, you book a free consultation by email, call, or text. Second, you answer a short set of questions about your phone setup and hours. Third, we build your setup and send you the exact wording for approval. Fourth, we go live, and your 30 day guarantee starts that day.', contact: true },

    { id: 'timeline', k: ['how long', 'how fast', 'how soon', 'how quickly', 'timeline', 'turnaround', 'go live', 'setup time', 'days'],
      a: 'Timing depends on your phone system and which service you choose, so we give you a date on the first call instead of a blanket promise. Nothing goes live until you have approved the wording.', contact: true },

    { id: 'phone-change', k: ['change my number', 'keep my number', 'new number', 'phone provider', 'my phone', 'phone system', 'carrier', 'existing number', 'port'],
      a: 'We go over your current phone setup on the first call and tell you exactly what would change before anything goes live.', contact: true },

    { id: 'who', k: ['who do you work with', 'industry', 'industries', 'hvac', 'plumber', 'plumbing', 'electrician', 'roofer', 'roofing', 'landscaping', 'landscaper', 'med spa', 'dental', 'dentist', 'contractor', 'small business', 'my business', 'right for me', 'clients', 'customers'],
      a: 'We work with local service businesses that depend on the phone, such as HVAC companies, plumbers, electricians, roofers, landscapers, med spas, and dental offices. If missed calls cost you jobs, this is built for you.' },

    { id: 'chatbot', k: ['chatbot', 'chat bot', 'live chat', 'website chat', 'chat automation'],
      a: 'AI Chatbot Automation is $297 a month. It includes chatbot setup and customization, lead capture automation, multi-platform integration, CRM synchronization, performance analytics, and ongoing optimization.' },

    { id: 'reputation', k: ['reputation', 'review', 'reviews', 'google reviews', 'rating', 'ratings'],
      a: 'Reputation Management is $297 a month. It includes review monitoring and alerts, automated review requests, professional response management, competitor monitoring, and monthly reputation reports.' },

    { id: 'social', k: ['social media', 'instagram', 'facebook page', 'posts', 'posting', 'content calendar', 'tiktok'],
      a: 'Social Media Management is $297 a month. It includes eight custom posts a month, hashtag research, engagement and comment responses, analytics and strategy sessions, and content calendar planning.' },

    { id: 'lsa', k: ['google ads', 'local service ads', 'lsa', 'google guaranteed', 'google leads'],
      a: 'Google Local Service Ads management is $497 a month plus your ad spend. It includes profile setup and optimization, lead generation and call tracking, ad performance optimization, review management, and monthly reports.' },

    { id: 'fbads', k: ['facebook ads', 'meta ads', 'fb ads', 'paid ads', 'advertising', 'ads'],
      a: 'Facebook Ads Management is $497 a month plus your ad spend. It includes campaign setup and creative design, copywriting and audience targeting, lead generation optimization, A/B testing, and monthly performance reports. We also manage Google Local Service Ads at the same price.' },

    { id: 'localseo', k: ['local seo', 'seo', 'rank', 'ranking', 'google business profile', 'google my business', 'search engine', 'google maps', 'show up on google'],
      a: 'Local SEO Optimization is $597 a month. It includes on-page optimization, Google Business Profile setup, keyword research, local backlink building, a name, address and phone consistency check, and monthly reporting.\n\nIf you only need a one-time fix, On-Page SEO Optimization is $797 and covers a full audit with keyword, speed, and mobile fixes.' },

    { id: 'website', k: ['website', 'web design', 'web site', 'landing page', 'site built', 'new site', 'redesign'],
      a: 'Website Design is $997 one time. You get a custom, mobile-responsive website with lead capture forms, basic SEO setup, social media integration, analytics, one round of revisions, and two weeks of support.' },

    { id: 'reactivation', k: ['database reactivation', 'reactivation', 'past customers', 'old customers', 'old leads', 'past clients', 'win back', 'customer list'],
      a: 'Database Reactivation is $697 one time. We run automated email and text sequences to bring past customers back, with follow-up reminders, a custom landing page, and campaign tracking.' },

    { id: 'community', k: ['community', 'course', 'training platform', 'membership', 'online course'],
      a: 'The Community & Training Platform is $1,497 one-time setup, then $297 a month. It covers community and course setup, custom branding, email automation, payment and progress tracking, member management tools, and ongoing support.' },

    { id: 'influencer', k: ['ai influencer', 'influencer', 'influencers', 'persona', 'virtual influencer', 'affiliate', 'ai model'],
      a: 'AI Influencers start at $2,500 for setup, then from $1,500 a month. We build a photoreal AI persona around one niche and run it as a content engine. It posts, promotes, and drives affiliate revenue, and the persona keeps the same face and voice in every frame.',
      link: ['See the AI Influencers section', '/#influencers'] },

    { id: 'apps', k: ['app', 'apps', 'mobile app', 'app development', 'app store', 'apple', 'ios', 'iphone', 'amazon appstore', 'android', 'fire tablet'],
      a: 'Custom apps start at $7,500 per app. We design, build, and submit each app to the Apple App Store or the Amazon Appstore, with your CRM and automations connected. We also handle listings, review notes, and updates after launch.',
      link: ['See the App Development section', '/#apps'] },

    { id: 'crm', k: ['crm', 'pipeline', 'customer relationship', 'lead tracking', 'gohighlevel', 'high level', 'hubspot', 'integrate', 'integration'],
      a: 'Our services connect to a CRM so every lead is captured and followed up. We also build custom CRM systems. A custom CRM is quoted per project, so contact us with what you need and we will give you a price.', contact: true },

    { id: 'leadgen', k: ['lead generation', 'more leads', 'get leads', 'leads', 'new customers', 'more customers', 'grow'],
      a: 'The fastest win for most local businesses is to stop losing the leads you already get. Missed Call Text Back ($297 a month) texts every caller you miss, and an AI Voice Agent ($597 a month) answers around the clock. For new lead volume we manage Google Local Service Ads and Facebook Ads at $497 a month each plus ad spend.' },

    { id: 'bot', k: ['are you a bot', 'are you ai', 'are you real', 'are you human', 'who am i talking to', 'chatgpt', 'robot'],
      a: 'I am an automated assistant. I answer from the information CortexiQ publishes about its services, pricing, and terms. For anything I can\'t answer, a person at CortexiQ will.', contact: true },

    { id: 'proof', k: ['testimonial', 'testimonials', 'case study', 'case studies', 'references', 'examples', 'portfolio', 'past work', 'who have you worked with', 'experience'],
      a: 'We don\'t publish client results on the site yet, and I won\'t make any up. What we do put in writing is the guarantee: ' + GUARANTEE + ' Contact us if you would like to talk through how it would work for your business.', contact: true },

    { id: 'socials', k: ['facebook', 'instagram account', 'follow you', 'social accounts', 'linkedin'],
      a: 'You can find CortexiQ on Facebook at facebook.com/CortexiQ and on Instagram at instagram.com/cortexiqagency.' }
  ];

  var SMALL_TALK = [
    { re: /^(hi|hello|hey|yo|good (morning|afternoon|evening)|howdy|sup)\b/, a: 'Hi! I can answer questions about CortexiQ\'s services, pricing, guarantee, and how to get started. What would you like to know?' },
    { re: /^(thanks|thank you|thx|ty|appreciate)/, a: 'You\'re welcome. Is there anything else I can help with?' },
    { re: /^(bye|goodbye|see ya|later)\b/, a: 'Thanks for stopping by. You can reach us anytime at ' + PHONE + '.' }
  ];

  var FALLBACK = 'I don\'t have an answer to that yet, and I would rather not guess. A person at CortexiQ can answer it. You can call or text ' + PHONE + ', or email ' + EMAIL + '.';

  function norm(s) {
    return (' ' + String(s).toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9$ ]+/g, ' ').replace(/\s+/g, ' ').trim() + ' ')
      .replace(/(\w{4,})s /g, '$1 ');
  }

  var PRICE_RE = / (price|pricing|cost|how much|rate|fee|charge|expensive|cheap|quote) /;

  function answer(q) {
    var raw = String(q || '').trim().toLowerCase();
    for (var i = 0; i < SMALL_TALK.length; i++) {
      if (SMALL_TALK[i].re.test(raw) && raw.split(/\s+/).length <= 4) return { id: 'smalltalk', a: SMALL_TALK[i].a };
    }
    var n = norm(q);
    var best = null, bestScore = 0, second = 0;
    KB.forEach(function (e) {
      var score = 0;
      e.k.forEach(function (kw) {
        var k = norm(kw);
        if (n.indexOf(k) !== -1) score += 1 + 2 * (k.trim().split(' ').length - 1) + (k.trim().length > 6 ? 1 : 0);
      });
      // A price question about a named service should get that service's answer,
      // which already contains its price, instead of the whole price list.
      if (e.id === 'pricing' && score) score = Math.min(score, 2) - 0.5;
      if (score > bestScore) { second = bestScore; bestScore = score; best = e; }
      else if (score > second) second = score;
    });
    if (!best || bestScore < 1) return { id: 'none', a: FALLBACK, contact: true };
    if (PRICE_RE.test(n) && bestScore <= 2 && best.id !== 'pricing') {
      // weak topic match plus a price word: the price list is the safer answer
      var p = KB.filter(function (e) { return e.id === 'pricing'; })[0];
      if (second === 0 || best.id === 'billing') best = p;
    }
    return best;
  }

  if (typeof module !== 'undefined' && module.exports) { module.exports = { answer: answer, KB: KB }; }
  if (typeof document === 'undefined') return;

  // ------------------------------------------------------------------ widget
  var CSS = '' +
    '.cq-launch{position:fixed;right:20px;bottom:20px;z-index:70;display:inline-flex;align-items:center;gap:8px;padding:14px 20px;border:0;border-radius:999px;background:linear-gradient(to right,#2563eb,#9333ea);color:#fff;font:600 16px Inter,system-ui,sans-serif;cursor:pointer;box-shadow:0 12px 24px -6px rgba(15,23,42,.45)}' +
    '.cq-launch svg{width:20px;height:20px}' +
    '.cq-panel{position:fixed;right:20px;bottom:20px;z-index:71;width:380px;max-width:calc(100vw - 24px);height:560px;max-height:calc(100vh - 24px);max-height:calc(100dvh - 24px);display:none;flex-direction:column;background:#fff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;box-shadow:0 25px 50px -12px rgba(15,23,42,.45);font:400 15px/1.55 Inter,system-ui,sans-serif;color:#0f172a}' +
    '.cq-panel.cq-open{display:flex}' +
    '@media (max-width:480px){.cq-panel{right:12px;bottom:12px}}' +
    '.cq-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px;background:linear-gradient(to right,#2563eb,#9333ea);color:#fff}' +
    '.cq-head strong{display:block;font-size:16px}.cq-head span{font-size:12px;opacity:.9}' +
    '.cq-close{border:0;background:rgba(255,255,255,.18);color:#fff;width:32px;height:32px;border-radius:999px;font-size:20px;line-height:1;cursor:pointer}' +
    '.cq-log{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:#f8fafc}' +
    '.cq-msg{max-width:88%;padding:10px 14px;border-radius:14px;white-space:pre-line;word-wrap:break-word}' +
    '.cq-bot{align-self:flex-start;background:#fff;border:1px solid #e2e8f0;border-bottom-left-radius:4px}' +
    '.cq-user{align-self:flex-end;background:#2563eb;color:#fff;border-bottom-right-radius:4px}' +
    '.cq-acts{align-self:flex-start;display:flex;flex-wrap:wrap;gap:8px;max-width:100%}' +
    '.cq-acts a,.cq-chip{display:inline-block;padding:7px 12px;border-radius:999px;border:1px solid #c4b5fd;background:#faf5ff;color:#6d28d9;font:500 13px Inter,system-ui,sans-serif;text-decoration:none;cursor:pointer}' +
    '.cq-form{display:flex;gap:8px;padding:12px;border-top:1px solid #e2e8f0;background:#fff}' +
    '.cq-form input{flex:1;min-width:0;padding:11px 14px;border:1px solid #cbd5e1;border-radius:999px;font:400 16px Inter,system-ui,sans-serif;color:#0f172a;outline:none}' +
    '.cq-form input:focus{border-color:#9333ea}' +
    '.cq-form button{border:0;border-radius:999px;padding:0 18px;background:#9333ea;color:#fff;font:600 14px Inter,system-ui,sans-serif;cursor:pointer}' +
    '.cq-note{padding:0 12px 10px;background:#fff;font-size:11px;color:#94a3b8;text-align:center}';

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function track(name, params) { if (typeof window.gtag === 'function') window.gtag('event', name, params || {}); }

  function mount() {
    var style = el('style'); style.textContent = CSS; document.head.appendChild(style);

    var launch = el('button', 'cq-launch');
    launch.type = 'button';
    launch.setAttribute('aria-label', 'Open chat with CortexiQ');
    launch.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg><span>Ask a question</span>';

    var panel = el('div', 'cq-panel');
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'CortexiQ assistant');

    var head = el('div', 'cq-head');
    var title = el('div');
    title.appendChild(el('strong', null, 'CortexiQ Assistant'));
    title.appendChild(el('span', null, 'Automated answers about our services'));
    var close = el('button', 'cq-close', '×');
    close.type = 'button'; close.setAttribute('aria-label', 'Close chat');
    head.appendChild(title); head.appendChild(close);

    var log = el('div', 'cq-log'); log.setAttribute('aria-live', 'polite');

    var form = el('form', 'cq-form');
    var input = el('input');
    input.type = 'text'; input.placeholder = 'Type your question'; input.maxLength = 300;
    input.setAttribute('aria-label', 'Your question');
    var send = el('button', null, 'Send'); send.type = 'submit';
    form.appendChild(input); form.appendChild(send);

    var note = el('div', 'cq-note', 'Automated assistant. Your questions stay in your browser.');

    panel.appendChild(head); panel.appendChild(log); panel.appendChild(form); panel.appendChild(note);
    document.body.appendChild(launch); document.body.appendChild(panel);

    function scroll() { log.scrollTop = log.scrollHeight; }
    function say(text, who) { log.appendChild(el('div', 'cq-msg ' + (who === 'user' ? 'cq-user' : 'cq-bot'), text)); scroll(); }
    function actions(list) {
      var row = el('div', 'cq-acts');
      list.forEach(function (it) {
        var a = el('a', null, it[0]); a.href = it[1];
        if (it[1].charAt(0) === '/') a.addEventListener('click', function () { toggle(false); });
        row.appendChild(a);
      });
      log.appendChild(row); scroll();
    }
    function chips(list) {
      var row = el('div', 'cq-acts');
      list.forEach(function (q) {
        var c = el('button', 'cq-chip', q); c.type = 'button';
        c.addEventListener('click', function () { ask(q); });
        row.appendChild(c);
      });
      log.appendChild(row); scroll();
    }
    function ask(q) {
      q = String(q).trim();
      if (!q) return;
      say(q, 'user');
      var r = answer(q);
      track('chat_question', { topic: r.id });
      setTimeout(function () {
        say(r.a, 'bot');
        var acts = [];
        if (r.link) acts.push(r.link);
        if (r.contact) acts.push(['Call ' + PHONE, TEL], ['Text us', SMS], ['Email us', MAILTO]);
        if (acts.length) actions(acts);
      }, 250);
    }
    var greeted = false;
    function toggle(open) {
      panel.classList.toggle('cq-open', open);
      launch.style.display = open ? 'none' : '';
      if (open) {
        if (!greeted) {
          greeted = true;
          say('Hi! I can answer questions about CortexiQ\'s services, pricing, guarantee, and how to get started. What would you like to know?', 'bot');
          chips(['What do you offer?', 'How much does it cost?', 'What is the guarantee?', 'How do I get started?']);
          track('chat_open');
        }
        input.focus();
      }
    }
    launch.addEventListener('click', function () { toggle(true); });
    close.addEventListener('click', function () { toggle(false); launch.focus(); });
    panel.addEventListener('keydown', function (e) { if (e.key === 'Escape') { toggle(false); launch.focus(); } });
    form.addEventListener('submit', function (e) { e.preventDefault(); var v = input.value; input.value = ''; ask(v); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
