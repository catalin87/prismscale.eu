const copy = {
 en: {
  nav: ['AI Firewall','Compliance','Architecture','Sandbox','Trust Center','Quickstart'],
  demo: 'Book a technical demo', try: 'Explore the sandbox', eyebrow: 'AI security & governance for enterprise Java',
  hero: ['Govern AI.','Protect its interactions.'],
  intro: 'PrismScale brings AI governance and in-process protection to your Java applications. Inspect what goes to the model and keep access decisions in your application.',
  facts: ['In-process Java SDK','EU AI Act workflows','Hosted & self-hosted Control Plane'],
  products: 'Two capabilities. One AI system.', prodIntro: 'Document the system and its decisions. Protect the interactions it handles at runtime.',
  proof: 'From request to business outcome', proofIntro: 'Follow a document request through a fictional service desk. See what the model could receive, what it proposed, and whether the application actually shared anything.',
  closer: 'Bring a real use case to the demo.', closerBody:'See how PrismScale fits your architecture, security requirements and deployment environment.',
  explore: 'Explore', local: 'Design concept · Sandbox uses synthetic data',
  pages: {
   firewall: ['AI Firewall','Inspect data where it originates.','The Java SDK evaluates configured policies in-process and protects model-bound content. The application keeps authority over roles, resources and tool execution.',[['Minimize model-bound data','Reference or withhold sensitive values when policy calls for it.'],['Inspect the tool lifecycle','Apply supported controls to tool arguments and results across the conversation.'],['Keep transactions in the host','Use authenticated context and explicit approval for sensitive actions.']]],
   governance: ['Governance & Compliance','Bring each AI system into review.','Inventory AI systems, record the risk assessment, and carry the reviewer’s decision into the technical file.',[['AI system inventory','Document purpose, ownership and deployment context.'],['Assessment and CAB review','Record classification inputs and decisions with actor attribution.'],['Technical documentation','Generate the technical file and review the information before publication.']]],
   architecture: ['Architecture','See where every decision happens.','The SDK runs inside the Java application. Your configured provider receives policy-allowed content. The Control Plane receives permitted telemetry and metadata.',[['Java application','Authenticates the user, applies resource authorization, and owns business state.'],['Configured model','Receives protected content and can propose a bounded tool call.'],['Control Plane','Manages governance and runtime policy. Prompt and response payloads stay outside this plane.']]],
   trust: ['Trust Center','Evaluate the boundaries.','Review where data flows, what the application must enforce, and what the local prototype demonstrates.',[['Data handling','PrismScale’s in-process design separates model traffic from the Control Plane. The future public sandbox will run on isolated synthetic data.'],['Verification scope','Evaluate the intended artifact, provider, deployment and application boundary together. This preview uses a local simulation.'],['Security review','Bring deployment, logging, incident and assurance requirements to the technical evaluation.']]],
   quickstart: ['Quickstart','Evaluate the Java integration.','Follow the maintained SDK documentation for supported versions, examples and operating guidance.',[['Choose the integration','Start with the maintained Spring Boot / LangChain4j material for the release you intend to evaluate.'],['Wire the application boundary','Keep authenticated identity and authorization in the host. Register the tools and policies appropriate for your application.'],['Verify with synthetic data','Check a policy-allowed request, a denied action and the resulting state.']]],
   demo: ['Technical demo','Evaluate PrismScale with your own use case.','Proposed agenda for a technical conversation with your engineering and governance teams.',[['Map the data flow','Identify the applications, model providers, data and tool boundaries.'],['Walk through a real decision','Compare what reaches the model with what the host application allows.'],['Plan the integration','Review rollout requirements, operational ownership and deployment options.']]]
  },
  lab: {
   title:'See what the application allowed.', intro:'You’re a service desk analyst at Northline, a fictional company. Help resolve ticket SD-214 using a public setup guide and a restricted document.', badge:'Local simulation · no model request', assistant:'I can help with SD-214. Which document or action should I look at?', label:'Your message', send:'Send', reset:'Reset session', approve:'Approve sharing locally', outbox:'Synthetic outbox', empty:'No items', guide:'VPN setup guide', restricted:'Restricted document', share:'Share with requester',
   prompts:['Show me the VPN setup guide.','Show me the restricted document.','Share the VPN setup guide with the requester.'],
   replies:['The VPN setup guide is available. No document was shared.','This document is restricted for this role. Nothing changed.','Sharing waits for approval. The outbox is unchanged.','Approved. The setup guide is in the synthetic outbox.','The guide is already in the outbox. No duplicate was created.','This prototype handles the three service desk examples above. Try one to see its trace.'],
   trace:['What you wrote','Illustrative model-bound view','Example tool proposal','Application decision','Resulting state'], idle:'Send a message to inspect the trace.', none:'No model request was sent.', unchanged:'No outbox change.', held:'Approval required', denied:'Denied', allowed:'Allowed', unsupported:'Example unavailable', simulated:'Simulated events', approval:'Local approval for SD-214: share the setup guide with the ticket requester.'
  }
 },
 ro: {
  nav: ['AI Firewall','Conformitate','Arhitectură','Sandbox','Trust Center','Ghid rapid'],
  demo:'Programează un demo', try:'Explorează sandbox-ul', eyebrow:'Securitate și guvernanță AI pentru aplicații Java',
  hero:['Guvernează AI.','Protejează interacțiunile.'],
  intro:'PrismScale aduce guvernanță AI și protecție în procesul aplicațiilor tale Java. Verifică ce ajunge la model și păstrează deciziile de acces în aplicație.',
  facts:['SDK Java în proces','Fluxuri pentru EU AI Act','Control Plane găzduit sau self-hosted'],
  products:'Două capabilități. Același sistem AI.',prodIntro:'Documentează sistemul și deciziile sale. Protejează interacțiunile pe care le procesează.',
  proof:'De la cerere la efectul în aplicație',proofIntro:'Urmărește o solicitare într-un service desk fictiv. Vezi ce ar ajunge la model, ce a propus și dacă aplicația a partajat efectiv un document.',
  closer:'Vino la demo cu un caz real.',closerBody:'Vezi cum se integrează PrismScale în arhitectura ta și cum răspunde cerințelor de securitate și instalare.',
  explore:'Descoperă',local:'Concept de design · Sandbox cu date sintetice',
  pages:{
   firewall:['AI Firewall','Verifică datele la sursă.','SDK-ul Java evaluează politicile în proces și protejează conținutul trimis modelului. Aplicația controlează rolurile, resursele și operațiunile.',[['Minimizarea datelor','Înlocuiește sau reține valorile sensibile în funcție de politică.'],['Verificarea operațiunilor','Aplică regulile disponibile asupra argumentelor și rezultatelor pe parcursul conversației.'],['Tranzacții în aplicație','Folosește identitatea autentificată și aprobarea explicită pentru acțiuni sensibile.']]],
   governance:['Guvernanță și conformitate','Fiecare sistem AI are un dosar.','Inventariază sistemele AI, documentează evaluarea și păstrează decizia reviewerului în dosarul tehnic.',[['Inventar AI','Documentează scopul, responsabilul și contextul de utilizare.'],['Evaluare și review CAB','Înregistrează răspunsurile și deciziile, cu atribuirea autorului.'],['Documentație tehnică','Generează dosarul tehnic și verifică informațiile înainte de publicare.']]],
   architecture:['Arhitectură','Vezi unde se ia fiecare decizie.','SDK-ul rulează în aplicația Java. Furnizorul configurat primește conținutul permis de politică. Control Plane primește telemetria și metadatele permise.',[['Aplicația Java','Autentifică utilizatorul, autorizează accesul la resurse și gestionează starea.'],['Modelul configurat','Primește conținut protejat și poate propune o operațiune.'],['Control Plane','Gestionează guvernanța și politicile. Prompturile și răspunsurile nu sunt trimise aici.']]],
   trust:['Trust Center','Verifică limitele produsului.','Urmărește traseul datelor și află ce trebuie să aplice gazda și ce poți verifica în demo.',[['Date','Modelul și Control Plane primesc categorii diferite de date. Sandbox-ul va folosi un mediu sintetic izolat.'],['Verificare','Evaluează împreună artefactul, furnizorul și aplicația gazdă. Preview-ul folosește o simulare locală.'],['Evaluare de securitate','Putem discuta cerințele de instalare, audit, incidente și asigurare.']]],
   quickstart:['Ghid rapid','Evaluează integrarea Java.','Documentația SDK descrie versiunile, exemplele și ghidurile de operare aplicabile.',[['Alege integrarea','Pornește de la ghidul Spring Boot / LangChain4j pentru versiunea evaluată.'],['Definește limitele aplicației','Păstrează autentificarea și autorizarea în gazdă. Înregistrează operațiunile și politicile potrivite.'],['Verifică pe date sintetice','Testează o cerere permisă, una respinsă și efectul fiecăreia.']]],
   demo:['Demo tehnic','Evaluează PrismScale pe cazul tău.','Agendă pentru o discuție cu echipele de inginerie și guvernanță.',[['Harta datelor','Identificăm aplicațiile, modelele și limitele operațiunilor.'],['O decizie concretă','Vedem ce ajunge la model și ce permite gazda.'],['Planificarea integrării','Discutăm cerințele de instalare, responsabilitățile operaționale și opțiunile de lansare.']]]
  },
  lab:{
   title:'Vezi ce a permis aplicația.',intro:'Ești analist la Northline, o companie fictivă. Rezolvă tichetul SD-214 folosind un ghid public și un document restricționat.',badge:'Simulare locală · fără apel la model',assistant:'Te ajut cu SD-214. Ce document sau acțiune vrei să verific?',label:'Mesajul tău',send:'Trimite',reset:'Resetează sesiunea',approve:'Aprobă partajarea local',outbox:'Outbox sintetic',empty:'Niciun element',guide:'Ghid de instalare VPN',restricted:'Document restricționat',share:'Partajează cu solicitantul',
   prompts:['Arată-mi ghidul de instalare VPN.','Arată-mi documentul restricționat.','Partajează ghidul VPN cu solicitantul.'],
   replies:['Ghidul VPN este disponibil. Niciun document nu a fost partajat.','Documentul este restricționat pentru acest rol. Starea a rămas la fel.','Partajarea așteaptă aprobare. Outbox-ul nu s-a schimbat.','Aprobat. Ghidul a intrat în outbox-ul sintetic.','Ghidul este deja în outbox. Nu s-a creat un duplicat.','Prototipul simulează cele trei exemple de service desk de mai sus. Încearcă unul pentru a vedea traseul.'],
   trace:['Ce ai scris','Exemplu de conținut pentru model','Exemplu de operațiune propusă','Decizia aplicației','Efectul în aplicație'],idle:'Trimite un mesaj pentru a inspecta traseul.',none:'Nu s-a trimis nicio cerere către model.',unchanged:'Outbox-ul nu s-a schimbat.',held:'Necesită aprobare',denied:'Respins',allowed:'Permis',unsupported:'Exemplu indisponibil',simulated:'Evenimente simulate',approval:'Aprobare locală pentru SD-214: partajează ghidul cu solicitantul.'
  }
 }
};

const routes = ['firewall','governance','architecture','sandbox','trust','quickstart'];
const main = document.querySelector('main');
const navigation = document.querySelector('#navlinks');
const menu = document.querySelector('.menu');
let locale = 'en';
let messages = [];
let trace = null;
let pending = false;
let shared = false;

function closeMenu() {
 navigation.classList.remove('open');
 menu.setAttribute('aria-expanded','false');
}
menu.addEventListener('click', () => {
 menu.setAttribute('aria-expanded', String(navigation.classList.toggle('open')));
});
document.addEventListener('keydown', event => {
 if (event.key === 'Escape' && navigation.classList.contains('open')) {
  closeMenu();
  menu.focus();
 }
});

function actions(t) {
 return `<div class="actions"><a class="button primary" href="#/demo">${t.demo}</a><a class="button" href="#/sandbox">${t.try} ↗</a></div>`;
}
function proofStrip(t) {
 const steps = t === copy.ro
  ? [['Cerere','Partajează ghidul VPN.'],['Propunere','Partajare pentru SD-214'],['Decizie','Aprobare necesară'],['Efect','0 documente partajate']]
  : [['Request','Share the VPN guide.'],['Proposal','Share document for SD-214'],['Decision','Approval required'],['Effect','0 documents shared']];
 return `<ol class="proof-strip">${steps.map(([label, value]) => `<li><span class="station" aria-hidden="true"></span><small>${label}</small><strong>${value}</strong></li>`).join('')}</ol>`;
}
function homepage(t) {
 const content = homepageEvidence[locale];
 const products = Object.entries(content.products).map(([key, product]) => {
  const name = t.pages[key][0];
  const rows = product.rows.map(([label,value]) => `<div><dt>${label}</dt><dd>${value.replace('[EMAIL_REFERENCE]','<mark>[EMAIL_REFERENCE]</mark>')}</dd></div>`).join('');
  return `<article class="card home-product"><div><span class="kicker">${name}</span><h3>${product.heading}</h3><p>${product.intro}</p></div><div class="home-proof"><small>${product.label}</small><dl>${rows}</dl></div><a href="#/${key}">${t.explore} ${name} →</a></article>`;
 }).join('');
 return `<section class="hero"><div class="shell"><span class="kicker">${t.eyebrow}</span><h1>${t.hero[0]}<span>${t.hero[1]}</span></h1><p>${t.intro}</p>${actions(t)}<div class="facts">${t.facts.map(fact => `<span>${fact}</span>`).join('')}</div></div></section>
 <section class="section light"><div class="shell"><h2>${t.products}</h2><p class="lead">${t.prodIntro}</p><div class="cards">${products}</div></div></section>
 <section class="section alt"><div class="shell"><div class="banner"><div><h2>${t.proof}</h2><p class="lead">${t.proofIntro}</p></div><a class="button primary" href="#/sandbox">${t.try} →</a></div>${proofStrip(t)}</div></section>
 <section class="section light home-architecture">${architectureDiagram(t)}<div class="shell"><a class="text-link" href="#/architecture">${t.nav[2]} →</a></div></section>
 <section class="section light home-evaluation"><div class="shell"><h2>${content.next}</h2><div class="cards"><article class="card"><h3>${t.nav[4]}</h3><p>${content.trust}</p><a href="#/trust">${t.nav[4]} →</a></article><article class="card"><h3>${t.nav[5]}</h3><p>${content.quickstart}</p><a href="#/quickstart">${t.nav[5]} →</a></article></div></div></section>
 <section class="section alt"><div class="shell banner"><div><h2>${t.closer}</h2><p>${t.closerBody}</p></div>${actions(t)}</div></section>`;
}
function architectureDiagram(t) {
 const ro = t === copy.ro;
 const labels = ro ? {
  title:'Unde circulă datele', host:'Aplicația Java', runtime:'PrismScale SDK în proces',
  check:'Verifică și protejează cererea', authorize:'Aplicația autorizează acțiunea',
  provider:'Furnizorul modelului', input:'Conținut permis', output:'Răspuns sau propunere',
  plane:'Control Plane', metadata:'Metadate permise', policies:'Politici configurate',
 } : {
  title:'Where data flows', host:'Java application', runtime:'In-process PrismScale SDK',
  check:'Inspect and protect the request', authorize:'The application authorizes the action',
  provider:'Model provider', input:'Policy-allowed content', output:'Response or proposal',
  plane:'Control Plane', metadata:'Permitted metadata', policies:'Configured policies',
 };
 return `<div class="shell architecture-visual">
 <h2>${labels.title}</h2>
 <div class="data-map">
 <div class="data-host"><h3>${labels.host}</h3><div class="data-runtime"><strong>${labels.runtime}</strong><span>${labels.check}</span></div><span class="data-auth">${labels.authorize}</span></div>
 <div class="data-lanes">
 <div class="data-lane"><div class="data-arrows"><span>${labels.input} <i aria-hidden="true">→</i></span><span>${labels.output} <i aria-hidden="true">←</i></span></div><h3>${labels.provider}</h3></div>
 <div class="data-lane metadata"><div class="data-arrows"><span>${labels.metadata} <i aria-hidden="true">→</i></span><span>${labels.policies} <i aria-hidden="true">←</i></span></div><h3>${labels.plane}</h3></div>
 </div></div></div>`;
}
function firewallExample(t) {
 const ro = t === copy.ro;
 const c = ro ? {
  label:'Exemplu sintetic · service desk', heading:'Mai puține date către model. Control asupra acțiunii.',
  intro:'Un analist cere ghidul VPN pentru solicitantul tichetului SD-214. Aplicația are nevoie de solicitant pentru partajare, dar politica din exemplu protejează adresa înainte de apelul la model.',
  before:'Cererea inițială', after:'Conținut ilustrativ pentru model',
  input:'Partajează ghidul VPN cu dana@example.test pentru tichetul SD-214.',
  output:'Partajează ghidul VPN cu [EMAIL_REFERENCE] pentru tichetul SD-214.',
  proposed:'Ce propune modelul', proposedBody:'Partajarea ghidului VPN pentru SD-214.',
  decision:'Ce decide aplicația', decisionBody:'Verifică solicitantul și cere aprobare.',
  state:'Ce se schimbă', stateBody:'Zero documente partajate până la aprobare.',
  sandbox:'Urmărește traseul în sandbox'
 } : {
  label:'Synthetic example · service desk', heading:'Limit what the model sees. Control what it can do.',
  intro:'A service desk analyst asks to share the VPN guide with the requester on ticket SD-214. The application needs the recipient to complete the action. The example policy protects the address before the model call.',
  before:'Original request', after:'Illustrative model-bound content',
  input:'Share the VPN guide with dana@example.test for ticket SD-214.',
  output:'Share the VPN guide with [EMAIL_REFERENCE] for ticket SD-214.',
  proposed:'Model proposal', proposedBody:'Share the VPN guide for SD-214.',
  decision:'Application decision', decisionBody:'Check the requester and require approval.',
  state:'Application state', stateBody:'Zero documents shared until approval.',
  sandbox:'Follow the trace in the sandbox'
 };
 return `<section class="shell firewall-visual" aria-labelledby="firewall-example-heading">
 <div class="firewall-example"><div class="example-intro"><span class="kicker">${c.label}</span><h2 id="firewall-example-heading">${c.heading}</h2><p>${c.intro}</p></div>
 <div class="request-compare"><div><h3>${c.before}</h3><p>${c.input}</p></div><div><h3>${c.after}</h3><p>${c.output.replace('[EMAIL_REFERENCE]','<mark>[EMAIL_REFERENCE]</mark>')}</p></div></div>
 <ol class="decision-path"><li><strong>${c.proposed}</strong><span>${c.proposedBody}</span></li><li><strong>${c.decision}</strong><span>${c.decisionBody}</span></li><li><strong>${c.state}</strong><span>${c.stateBody}</span></li></ol>
 <a class="button primary" href="#/sandbox">${c.sandbox} ↗</a></div></section>`;
}

function firewallPage(t) {
 const c = firewallDepth[locale];
 const cards = c.outcomes.map(([name, body]) => `<article class="card"><h2>${name}</h2><p>${body}</p></article>`).join('');
 const rows = c.responsibility.map(([name, body]) => `<div><dt>${name}</dt><dd>${body}</dd></div>`).join('');
 const steps = c.developerSteps.map(([name, body]) => `<li><h3>${name}</h3><p>${body}</p></li>`).join('');
 return `<div class="detail-page firewall-page">
 <section class="shell inner-title"><span class="kicker">AI Firewall</span><h1>${c.heading}</h1><p>${c.intro}</p>${actions(t)}
 <div class="flow firewall-outcomes">${cards}</div></section>
 <section class="firewall-architecture"><div class="shell"><h2>${c.architecture[0]}</h2><p>${c.architecture[1]}</p><a class="text-link" href="#/architecture">${c.architectureLink} →</a></div></section>
 ${firewallExample(t)}
 <section class="shell firewall-depth"><h2>${c.security}</h2><dl class="explainer">${rows}</dl><a class="text-link" href="#/trust">Trust Center →</a></section>
 <section class="shell firewall-depth firewall-dev"><h2>${c.developer}</h2><ol>${steps}</ol><a class="button primary" href="#/quickstart">${c.quickstart} →</a></section>
 </div>`;
}

function complianceWalkthrough() {
 const c = complianceExplorer[locale];
 const controls = c.steps.map(([name], index) => `<button type="button" class="button" data-compliance-step="${index}" aria-controls="compliance-stage" aria-pressed="${index === 0}"><span class="walkthrough-number" aria-hidden="true">0${index + 1}</span>${name}</button>`).join('');
 const panels = c.steps.map(([,title,body],index) => {
  const [view,system,status,fields] = c.mockSteps[index];
  const rows = fields.map(([label,value])=>`<div><dt>${label}</dt><dd>${value}</dd></div>`).join('');
  return `<div class="walkthrough-panel" data-compliance-panel="${index}"${index ? ' hidden' : ''}>
   <div><h3>${title}</h3><p>${body}</p></div>
   <section class="compliance-mock" aria-label="${view}">
    <div class="mock-bar"><span class="mock-dots" aria-hidden="true"></span><small>${c.mockLabel}</small></div>
    <div class="mock-body">
     <div class="mock-context"><span class="mock-step" aria-hidden="true">0${index + 1} / 03</span><strong class="mock-status">${status}</strong></div>
     <h4>${view}</h4><p class="mock-system">${system}</p><dl>${rows}</dl>
    </div>
   </section>
  </div>`;
 }).join('');
 return `<section class="shell compliance-walkthrough" aria-labelledby="walkthrough-title"><span class="kicker">${c.label}</span><h2 id="walkthrough-title">${c.title}</h2><p>${c.intro}</p><div class="walkthrough-controls">${controls}</div><div id="compliance-stage" aria-live="polite">${panels}</div></section>`;
}
function bindCompliance() {
 const buttons = main.querySelectorAll('[data-compliance-step]');
 const panels = main.querySelectorAll('[data-compliance-panel]');
 for (const button of buttons) button.addEventListener('click', () => {
  for (const item of buttons) item.setAttribute('aria-pressed', String(item === button));
  for (const panel of panels) panel.hidden = panel.dataset.compliancePanel !== button.dataset.complianceStep;
 });
}

function compliancePage(t) {
 const c = complianceDepth[locale];
 const outcomes = c.outcomes.map(([name, body]) => `<article class="card"><h2>${name}</h2><p>${body}</p></article>`).join('');
 const [,,journey] = evaluation[locale].governance[0];
 const explain = items => `<dl class="explainer">${items.map(([name,body]) => `<div><dt>${name}</dt><dd>${body}</dd></div>`).join('')}</dl>`;
 return `<div class="detail-page firewall-page compliance-page">
 <section class="shell inner-title"><span class="kicker">${t.pages.governance[0]}</span><h1>${c.heading}</h1><p>${c.intro}</p><div class="actions"><a class="button primary" href="#/demo">${t.demo}</a></div><div class="flow firewall-outcomes">${outcomes}</div></section>
 <section class="firewall-architecture"><div class="shell"><h2>${c.journey}</h2><ol class="compliance-journey">${journey.map(([name,body])=>`<li><strong>${name}</strong><span>${body}</span></li>`).join('')}</ol></div></section>
 ${complianceWalkthrough()}
 <section class="shell firewall-depth"><h2>${c.evidence}</h2>${explain(c.evidenceRows)}</section>
 <section class="shell firewall-depth firewall-dev"><h2>${c.technical}</h2>${explain(c.fileRows)}<a class="text-link" href="#/trust">${c.trust} →</a></section>
 <section class="shell firewall-depth compliance-detail"><h2>${complianceExplorer[locale].detail}</h2>${complianceExplorer[locale].faq.map(([title,body])=>`<details><summary>${title}</summary><p>${body}</p></details>`).join('')}<a class="text-link" href="https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-4">${locale === 'ro' ? 'Anexa IV · Comisia Europeană' : 'Annex IV · European Commission'} ↗</a></section>
 </div>`;
}

function architecturePage(t) {
 const c = architectureDepth[locale];
 const [[heading,columns,rows],[deploymentHeading,deploymentRows]] = evaluation[locale].architecture;
 const buttons = c.nodes.map(([name], index)=>`<button type="button" class="button" data-arch-step="${index}" aria-controls="arch-stage" aria-pressed="${index === 0}">${name}</button>`).join('');
 const panels = c.nodes.map(([name,title,body], index)=>`<div class="arch-component" data-arch-panel="${index}"${index ? ' hidden' : ''}><span class="kicker">${name}</span><h3>${title}</h3><p>${body}</p></div>`).join('');
 return `<div class="detail-page architecture-page">
 <section class="shell inner-title"><span class="kicker">${t.nav[2]}</span><h1>${c.heading}</h1><p>${c.intro}</p>${actions(t)}</section>
 ${architectureDiagram(t)}
 <section class="shell firewall-depth arch-explorer"><h2>${c.readers}</h2><div class="walkthrough-controls">${buttons}</div><div id="arch-stage" aria-live="polite">${panels}</div></section>
 <section class="shell reading arch-evidence"><div class="reading-main"><section class="reading-block"><h2>${heading}</h2><table><thead><tr>${columns.map(label=>`<th scope="col">${label}</th>`).join('')}</tr></thead><tbody>${rows.map(([label,body])=>`<tr><th scope="row">${label}</th><td>${body}</td></tr>`).join('')}</tbody></table></section></div></section>
 <section class="shell firewall-depth"><h2>${deploymentHeading}</h2><dl class="explainer">${deploymentRows.map(([title,body])=>`<div><dt>${title}</dt><dd>${body}</dd></div>`).join('')}</dl></section>
 <section class="shell firewall-depth firewall-dev"><h2>${c.build}</h2><ol>${c.buildRows.map(([title,body])=>`<li><h3>${title}</h3><p>${body}</p></li>`).join('')}</ol><a class="button primary" href="#/quickstart">${c.quickstart} →</a></section>
 </div>`;
}

function bindArchitecture() {
 const buttons = main.querySelectorAll('[data-arch-step]');
 const panels = main.querySelectorAll('[data-arch-panel]');
 for (const button of buttons) button.addEventListener('click', () => {
  for (const item of buttons) item.setAttribute('aria-pressed', String(item === button));
  for (const panel of panels) panel.hidden = panel.dataset.archPanel !== button.dataset.archStep;
 });
}

function trustPage(t) {
 const c = trustDepth[locale];
 const cards = c.outcomes.map(([title,body]) => `<article class="card"><h2>${title}</h2><p>${body}</p></article>`).join('');
 const answers = c.answers.map(([title,body]) => `<details><summary>${title}</summary><p>${body}</p></details>`).join('');
 const rows = c.rows.map(([label, scope, verify]) => `<tr><th scope="row">${label}</th><td>${scope}</td><td>${verify}</td></tr>`).join('');
 return `<div class="detail-page trust-page"><section class="shell inner-title"><span class="kicker">Trust Center</span><h1>${c.heading}</h1><p>${c.intro}</p><div class="flow firewall-outcomes">${cards}</div></section>
 <div class="shell trust-reference"><a class="text-link" href="#/architecture">${c.architectureLink} →</a></div>
 <section class="shell firewall-depth compliance-detail"><h2>${c.security}</h2>${answers}</section>
 <section class="shell reading trust-evidence"><div class="reading-main"><h2>${c.evidence}</h2><table><thead><tr>${c.cols.map(label=>`<th scope="col">${label}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table><div class="reading-actions"><a class="button primary" href="#/demo">${c.demo} →</a></div></div></section></div>`;
}

function quickstartPage(t) {
 const c = quickstartDepth[locale];
 const command = (title, hint, code) => `<section class="quick-command"><h3>${title}</h3><p>${hint}</p><div class="command-frame"><button type="button" class="button" data-copy-command>${c.copy}</button><pre tabindex="0"><code>${code}</code></pre></div><span class="copy-feedback" role="status"></span></section>`;
 const cards = c.outcomes.map(([title,body])=>`<article class="card"><h2>${title}</h2><p>${body}</p></article>`).join('');
 const result = c.result.map(([title,body])=>`<div><dt>${title}</dt><dd>${body}</dd></div>`).join('');
 const steps = c.productionSteps.map(([title,body])=>`<li><h3>${title}</h3><p>${body}</p></li>`).join('');
 return `<div class="detail-page quickstart-page">
 <section class="shell inner-title"><span class="kicker">${t.nav[5]}</span><h1>${c.heading}</h1><p>${c.intro}</p><div class="flow firewall-outcomes">${cards}</div></section>
 <section class="shell firewall-depth quickstart-run"><span class="kicker">${c.scope}</span><h2>${c.prepare}</h2><p>${c.requirements}</p>
 ${command(c.install,c.installHint,'(cd agent &amp;&amp; ./mvnw -B -DskipTests install)\n(cd agent/spring-prism-pro &amp;&amp; ./mvnw -B -DskipTests install)')}
 ${command(c.verify,c.verifyHint,'(cd examples/boot-protected-conversation &amp;&amp; ./mvnw -B verify)')}
 <section class="quick-command"><h3>${c.expected}</h3><p>${c.outcomesTitle}</p><dl class="explainer">${result}</dl></section></section>
 <section class="shell firewall-depth firewall-dev"><h2>${c.production}</h2><ol>${steps}</ol><a class="text-link" href="#/trust">${c.trust} →</a></section></div>`;
}

function bindQuickstart() {
 const c = quickstartDepth[locale];
 for (const button of main.querySelectorAll('[data-copy-command]')) button.addEventListener('click',async () => {
  const section = button.closest('section');
  const code = section.querySelector('code');
  const feedback = section.querySelector('[role="status"]');
  try {
   await navigator.clipboard.writeText(code.textContent);
   feedback.textContent = c.copied;
  } catch {
   feedback.textContent = c.unavailable;
   section.querySelector('pre').focus();
  }
 });
}

function detail(page, t) {
 if (page === 'firewall') return firewallPage(t);
 if (page === 'governance') return compliancePage(t);
 if (page === 'architecture') return architecturePage(t);
 if (page === 'trust') return trustPage(t);
 if (page === 'quickstart') return quickstartPage(t);
 const [name,title,intro,items] = t.pages[page];
 const blocks = evaluation[locale][page].map(([heading, columns, rows]) => {
  if (!rows) return `<section class="reading-block"><h2>${heading}</h2><dl class="explainer">${columns.map(([question, answer]) => `<div><dt>${question}</dt><dd>${answer}</dd></div>`).join('')}</dl></section>`;
  return `<section class="reading-block"><h2>${heading}</h2><table><thead><tr>${columns.map(label => `<th scope="col">${label}</th>`).join('')}</tr></thead><tbody>${rows.map(([label, body]) => `<tr><th scope="row">${label}</th><td>${body}</td></tr>`).join('')}</tbody></table></section>`;
 }).join('');
 const next = page === 'demo' ? `<a class="button primary" href="#/sandbox">${t.try}</a>` : actions(t);
 return `<div class="detail-page"><section class="shell inner-title"><span class="kicker">${name}</span><h1>${title}</h1><p>${intro}</p></section><div class="shell reading"><div class="reading-main">${blocks}<div class="reading-actions">${next}</div></div><aside class="summary-panel" aria-label="${name}">${items.map(([heading, body])=>`<div><h3>${heading}</h3><p>${body}</p></div>`).join('')}</aside></div></div>`;
}
function sandbox(t) {
 const l = t.lab;
 const c = sandboxDepth[locale];
 return `<section class="shell inner-title"><span class="kicker">${l.badge}</span><h1>${l.title}</h1><p class="lab-intro">${l.intro}</p>
 <div class="lab-case"><h2>${c.caseTitle}</h2><p>${c.caseBody}</p></div></section>
 <section class="section shell lab"><div class="card chat"><h2>Northline Service Desk</h2><div class="chatlog" role="log"></div>
 <p class="lab-suggested">${c.suggested}</p><div class="chips">${[l.guide,l.restricted,l.share].map((label,i)=>`<button type="button" class="button" data-example="${i}">${label}</button>`).join('')}</div>
 <form><label for="prompt">${l.label}</label><textarea id="prompt" name="prompt" rows="2" maxlength="1000" required aria-describedby="lab-privacy"></textarea><p id="lab-privacy">${c.privacy}</p><div class="form-actions"><button class="button primary">${l.send}</button><button class="button" type="button" data-reset>${l.reset}</button></div></form>
 <button type="button" class="button trace-jump" data-trace-jump hidden>${c.inspect} ↓</button></div>
 <div class="card lab-result"><span class="kicker">${l.simulated}</span><h2 id="lab-decision" tabindex="-1">${c.decision}</h2><div class="lab-verdict" role="status"></div>
 <div class="state"><span>${l.outbox}</span><strong id="outbox"></strong></div><p id="outbox-item"></p><button class="button primary" type="button" data-approve hidden>${l.approve}</button><div class="trace"></div></div></section>
 <section class="shell firewall-depth lab-explainer"><h2>${c.verify}</h2><dl class="explainer">${c.detail.map(([title,body])=>`<div><dt>${title}</dt><dd>${body}</dd></div>`).join('')}</dl><a class="text-link" href="#/architecture">${c.architecture} →</a></section>`;
}
function updateLab() {
 const l = copy[locale].lab;
 const c = sandboxDepth[locale];
 const log = document.querySelector('.chatlog');
 log.replaceChildren();
 const add = (value, isUser = false) => {
  const node = document.createElement('p');
  node.className = isUser ? 'bubble user' : 'bubble';
  node.textContent = value;
  log.append(node);
 };
 add(l.assistant);
 for (const message of messages) {
  if (message.text) add(message.text, true);
  add(l.replies[message.reply]);
 }
 log.scrollTop = log.scrollHeight;
 const traceNode = document.querySelector('.trace');
 traceNode.replaceChildren();
 traceNode.classList.toggle('has-result', Boolean(trace));
 const decision = trace ? [l.allowed,l.denied,l.held,l.allowed,l.allowed,l.unsupported][trace.reply] : c.idle;
 const verdict = document.querySelector('.lab-verdict');
 verdict.textContent = decision;
 verdict.dataset.reply = trace?.reply ?? '';
 document.querySelector('[data-trace-jump]').hidden = !trace;
 if (!trace) traceNode.textContent = l.idle;
 else {
  const values = [trace.text, trace.model || l.none, trace.tool || '—',c.reasons[trace.reply],trace.reply === 3 ? c.after : l.unchanged];
  values.forEach((value,index) => {
   const details = document.createElement('details');
   const label = document.createElement('summary');
   const body = document.createElement('p');
   label.textContent = `0${index+1}  ${l.trace[index]}`;
   body.textContent = value;
   if (index === 3) body.className = 'outcome';
   details.open = index === 3 || index === 4;
   details.append(label,body);
   traceNode.append(details);
  });
 }
 document.querySelector('#outbox').textContent = shared ? '01' : '00';
 document.querySelector('#outbox-item').textContent = shared ? l.guide + ' · SD-214' : l.empty;
 document.querySelector('[data-approve]').hidden = !pending;
}
function processMessage(text) {
 const normalizeExample = value => value.normalize('NFD').replace(/\p{M}/gu,'').toLowerCase().trim().replace(/[.!?]+$/u,'');
 const normalized = normalizeExample(text);
 if (!normalized) return;
 const protectedText = text.replace(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/gi, '[EMAIL_REFERENCE]');
 const allowedShare = Object.values(copy).some(({lab}) => normalizeExample(lab.prompts[2]) === normalized);
 const type = /restricted|restrictionat/.test(normalized) ? 1
  : allowedShare ? 2
  : !/share|partajeaz/.test(normalized) && /vpn|guide|ghid/.test(normalized) ? 0 : 5;
 const reply = type === 2 && shared ? 4 : type;
 pending = reply === 2;
 trace = {text,reply, model: type === 5 ? '' : protectedText, tool: type === 2 ? 'share_document · SD-214' : type !== 5 ? 'read_document · SD-214' : ''};
 messages.push({text,reply});
 updateLab();
}
function bindLab(t) {
 const field = document.querySelector('#prompt');
 document.querySelector('[data-trace-jump]').addEventListener('click', () => document.querySelector('#lab-decision').focus());
 document.querySelector('.lab form').addEventListener('submit',event=>{
  event.preventDefault();
  processMessage(field.value);
  field.value = '';
  field.focus();
 });
 document.querySelectorAll('[data-example]').forEach(button => button.addEventListener('click',()=>processMessage(t.lab.prompts[Number(button.dataset.example)])));
 document.querySelector('[data-reset]').addEventListener('click',()=>{
  messages = []; trace = null; pending = false; shared = false; field.value = ''; updateLab(); field.focus();
 });
 document.querySelector('[data-approve]').addEventListener('click',()=>{
  if (!pending || shared) return;
  pending = false;
  shared = true;
  messages.push({reply:3});
  trace = {text:t.lab.approval,reply:3,model:'',tool:'share_document · SD-214'};
  updateLab();
  field.focus();
 });
 updateLab();
}

locale = document.documentElement.lang;
const t = copy[locale];
const page = document.body.dataset.page;
if (page === 'governance') bindCompliance();
if (page === 'architecture') bindArchitecture();
if (page === 'quickstart') bindQuickstart();
