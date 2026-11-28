const evaluation = {
 en: {
  governance: [
   ['From inventory to evidence', ['Step','Result'], [
    ['Register','Record purpose, responsible team and deployment context for an AI system.'],
    ['Assess','Complete the applicable questionnaire and review the rationale for the recorded classification.'],
    ['Review','Where CAB review applies, an authorized reviewer records a decision against the submitted assessment.'],
    ['Document','Generate the technical file from available records. Review its content and sign-off before using it as evidence.']]],
   ['Questions your reviewers can answer', [
    ['Who approved this version?','Use the recorded decision and actor in the dossier. Current configuration can differ from the policy that existed at decision time.'],
    ['What does an export establish?','It presents recorded information and available documentation. The organization determines applicability and validates the completed evidence.'],
    ['How does this connect to runtime?','Use the same system inventory to orient governance and security work. Review observed runtime data separately from approved configuration.']]],
  ],
  architecture: [
   ['Follow each data boundary', ['Destination','What crosses the boundary'], [
    ['Inside the Java process','Application messages, local policy evaluation and the host authorization context.'],
    ['Configured model provider','The request permitted by local policy. The provider can return text or propose a tool action.'],
    ['Host tools','Only supported actions under the host’s resource, identity and approval checks.'],
    ['Control Plane','Permitted policy and operational metadata. Model conversation payloads stay outside this plane.']]],
   ['Plan the deployment', [
    ['Hosting','Evaluate hosted and self-hosted Control Plane options separately from the deployment of the Java workload.'],
    ['Responsibility','The host owns identity, access checks, business transactions, retries and the effect of tool calls.'],
    ['Availability','Validate outage and restart behavior using the exact SDK version and the configuration you intend to deploy.']]],
  ],
  trust: [
   ['Questions for security review', ['Area','Evidence to request'], [
    ['Data flows','A deployment-specific map of the JVM, model provider and Control Plane, including what may leave each boundary.'],
    ['Authorization','Evidence for resource ownership, tool allowlists, required approval and denied state changes.'],
    ['Configuration and audit','Role boundaries, decision attribution, policy changes and recovery behavior for the chosen installation.'],
    ['Compatibility','The artifact, Java and framework versions, provider path and workloads actually tested.']]],
   ['Scope of the design preview', [
    ['Synthetic sandbox','The visible trace illustrates the planned interface. Its examples provide design evidence only.'],
    ['Provider handling','Retention, region and data-processing terms depend on the selected provider and deployment. Review these for your own evaluation.']]],
  ],
  quickstart: [
   ['Java source evaluation', ['Step','What to run or verify'], [
    ['Prepare','Use the toolchain documented for the Java example branch you are evaluating. Run these commands from the repository root.'],
    ['Build','Install the local SDK modules, then verify the runnable example using its Maven wrapper.'],
    ['Inspect','Read the sample’s test results and map the host identity, tool and destination checks to your application.']]],
   ['Production integration checklist', [
    ['Pin the integration','Record the SDK, framework and provider versions, and repeat the verification on the artifact you plan to use.'],
    ['Add application-specific checks','Confirm authorization, explicit approval and no mutation on refusal for your own resources.']]],
  ],
  demo: [
   ['What to bring', [
    ['One workflow','Choose an AI interaction with an owner, a model provider and a concrete tool action.'],
    ['One decision to verify','Choose a type of sensitive data, a restricted resource or an approval boundary.'],
    ['One deployment question','Tell us where Java runs, where the model is hosted and who must approve the integration.']]],
  ],
 },
 ro: {
  governance: [
   ['De la inventar la dovezi', ['Pas','Rezultat'], [
    ['Înregistrare','Documentează scopul, echipa responsabilă și contextul de utilizare.'],
    ['Evaluare','Completează chestionarul aplicabil și verifică justificarea clasificării înregistrate.'],
    ['Review','Când se aplică procesul CAB, un reviewer autorizat consemnează decizia pentru evaluarea trimisă.'],
    ['Documentare','Generează dosarul tehnic din datele disponibile. Verifică documentația și semnarea înainte de a o folosi ca dovadă.']]],
   ['Întrebări pentru echipa de conformitate', [
    ['Cine a aprobat această versiune?','Consultă decizia și autorul din dosar. Configurația curentă poate diferi de politica de la momentul deciziei.'],
    ['Ce dovedește un export?','Prezintă datele înregistrate și documentația disponibilă. Organizația stabilește aplicabilitatea și validează dovezile.'],
    ['Cum se leagă de securitatea la rulare?','Folosește inventarul comun pentru a identifica sistemul. Compară observațiile de la rulare cu configurația aprobată.']]],
  ],
  architecture: [
   ['Ce trece prin fiecare zonă', ['Destinație','Date'], [
    ['În procesul Java','Mesajele aplicației, evaluarea locală a politicii și contextul de autorizare al gazdei.'],
    ['Furnizorul modelului','Cererea permisă de politica locală. Furnizorul poate răspunde sau propune o operațiune.'],
    ['Operațiunile aplicației','Acțiuni acceptate de gazdă în funcție de identitate, resursă și aprobare.'],
    ['Control Plane','Metadatele operaționale și de politică permise. Conținutul conversației rămâne în afara acestei zone.']]],
   ['Planificarea instalării', [
    ['Găzduire','Evaluează Control Plane găzduit sau self-hosted separat de mediul aplicației Java.'],
    ['Responsabilitate','Gazda gestionează identitatea, autorizarea, tranzacțiile, retry-urile și efectele acțiunilor.'],
    ['Disponibilitate','Verifică întreruperile și restartul pe versiunea SDK și configurația pe care o vei instala.']]],
  ],
  trust: [
   ['Întrebări pentru evaluarea de securitate', ['Zonă','Dovezi de verificat'], [
    ['Traseul datelor','O hartă pentru instalația concretă. Identifică aplicația Java, furnizorul modelului și datele care pot ieși din fiecare zonă.'],
    ['Autorizare','Dovezi pentru accesul la resurse, operațiunile permise, aprobarea obligatorie și starea păstrată după un refuz.'],
    ['Configurare și audit','Roluri, atribuirea deciziilor, modificări ale politicilor și recuperare.'],
    ['Compatibilitate','Artefactul, versiunile Java și framework, integrarea furnizorului și scenariile efectiv verificate.']]],
   ['Limitele prototipului', [
    ['Sandbox sintetic','Traseul vizibil ilustrează interfața propusă. Exemplele sunt dovezi despre design.'],
    ['Furnizorul modelului','Retenția, regiunea și termenii de procesare depind de furnizor și instalare. Verifică-le pentru evaluarea ta.']]],
  ],
  quickstart: [
   ['Evaluarea Java din surse', ['Pas','Ce rulezi sau verifici'], [
    ['Pregătește','Folosește versiunea Java documentată pentru exemplul evaluat. Pornește comenzile de mai jos din rădăcina proiectului.'],
    ['Construiește','Instalează modulele SDK locale și verifică exemplul cu Maven Wrapper.'],
    ['Inspectează','Citește rezultatele și mapează verificările de identitate, operațiuni și destinații pe propria aplicație.']]],
   ['Checklist pentru integrarea în producție', [
    ['Fixează versiunile','Notează versiunile SDK, framework și furnizor. Repetă verificarea pe artefactul pe care vrei să îl folosești.'],
    ['Verifică regulile aplicației','Testează accesul, aprobarea explicită și starea păstrată după refuz.']]],
  ],
  demo: [
   ['Ce să aduci în discuție', [
    ['Un flux','Alege o interacțiune AI cu un responsabil, un furnizor și o operațiune concretă.'],
    ['O decizie de verificat','Alege o categorie de date sensibile, o resursă restricționată sau o acțiune care necesită aprobare.'],
    ['O întrebare despre instalare','Notează unde rulează Java și modelul și cine aprobă integrarea.']]],
  ],
 },
};

const firewallDepth = {
 en: {
  heading:'Keep sensitive data and AI actions under control.',
  intro:'PrismScale helps your Java applications protect sensitive information before it reaches an AI model. When the model proposes an action, your application still decides who can do what.',
  outcomes:[
   ['Reduce data exposure','A routine conversation can contain customer details or secrets. Apply local policies before sending data to your model provider.'],
   ['Prevent unauthorized actions','An assistant may propose sharing a document or changing a record. Your application checks access and requires approval where needed.'],
   ['Keep control inside your application','The SDK runs in your Java service. Your teams can manage policies and governance separately from the conversation.']
  ],
  architecture:['How it fits into your application','The PrismScale SDK runs inside the Java service. It inspects supported model and tool flows locally. The configured model provider receives policy-allowed content. The Control Plane receives permitted metadata without receiving the conversation.'],
  architectureLink:'See the data-flow diagram',
  security:'Security controls and boundaries',
  responsibility:[
   ['PrismScale SDK','Inspect the configured model and tool flow, apply local policies, and protect supported outputs.'],
   ['Your application','Supply authenticated identity, authorize resource access, obtain explicit approvals, and own transactions and retries.'],
   ['Model provider','Process the request permitted by policy. Provider retention and processing terms depend on your deployment.'],
  ],
  developer:'Integrate with your Java service',
  developerSteps:[
   ['Wire the supported provider','Select the provider profile and keep its configuration fixed for the protected client. Follow the documented SDK and framework compatibility.'],
   ['Bind host identity and tools','Build HostContext from authenticated application state. Register bounded tool calls and use ToolAuthorizer to enforce resource ownership and permissions.'],
   ['Handle approvals and uncertain outcomes','Handle TurnResult explicitly. Use the host’s confirmation UI, stable business idempotency and reconciliation for actions with side effects.'],
   ['Deliver protected output','Use OutputGuard for the authenticated recipient and destination. Keep raw replies, history and pending operation data out of application logs.']
  ],
  quickstart:'Open Java Quickstart',
 },
 ro: {
  heading:'Păstrează controlul asupra datelor sensibile și a acțiunilor AI.',
  intro:'PrismScale ajută aplicațiile tale Java să protejeze informațiile sensibile înainte să ajungă la model. Dacă modelul propune o acțiune, aplicația ta decide în continuare cine o poate executa.',
  outcomes:[
   ['Redu expunerea datelor','O conversație obișnuită poate conține date de clienți sau secrete. Aplică politicile locale înainte să trimiți datele furnizorului.'],
   ['Preîntâmpină acțiunile neautorizate','Asistentul poate propune partajarea unui document sau modificarea unei înregistrări. Aplicația verifică accesul și cere aprobare unde este necesar.'],
   ['Păstrează controlul în aplicația ta','SDK-ul rulează în serviciul Java. Echipele gestionează politicile și guvernanța separat de conversație.']
  ],
  architecture:['Cum se integrează în aplicația ta','SDK-ul PrismScale rulează în serviciul Java și inspectează local fluxurile de model și unelte pe care le suportă. Furnizorul primește conținutul permis de politică. Control Plane primește metadatele permise, fără conținutul conversației.'],
  architectureLink:'Vezi diagrama fluxului de date',
  security:'Controale și responsabilități de securitate',
  responsibility:[
   ['SDK-ul PrismScale','Inspectează fluxul configurat, aplică politicile locale și protejează ieșirile suportate.'],
   ['Aplicația ta','Furnizează identitatea autentificată, autorizează resursele, obține aprobări explicite și gestionează tranzacțiile și retry-urile.'],
   ['Furnizorul modelului','Procesează solicitarea permisă de politică. Retenția și termenii de procesare depind de furnizor și de instalare.'],
  ],
  developer:'Integrează în serviciul Java',
  developerSteps:[
   ['Configurează furnizorul suportat','Alege profilul furnizorului și păstrează configurația fixă pentru clientul protejat. Consultă compatibilitatea documentată a SDK-ului și a frameworkului.'],
   ['Leagă identitatea de operațiuni','Construiește HostContext din starea autentificată a aplicației. Înregistrează operațiuni cu limite explicite și folosește ToolAuthorizer pentru acces și ownership.'],
   ['Gestionează aprobările și rezultatele incerte','Tratează explicit TurnResult. Folosește confirmarea din interfața aplicației, idempotency la nivel de business și reconciliere pentru acțiunile cu efecte.'],
   ['Livrează răspunsul protejat','Folosește OutputGuard pentru destinatarul autentificat și destinația autorizată. Ține răspunsurile brute, istoricul și operațiunile în așteptare în afara logurilor.']
  ],
  quickstart:'Deschide ghidul Java',
 },
};

const complianceDepth = {
 en:{
  heading:'Assess AI risk. Generate the EU AI Act technical file.',
  intro:'PrismScale guides your team through an EU AI Act assessment, records the rationale and any applicable internal review, and generates a technical file your team can review and export.',
  outcomes:[
   ['See the portfolio','AI applications can enter use across multiple teams. A common inventory makes purpose, ownership and status easier to find.'],
   ['Make risk visible before approval','Structured assessments give the review team a consistent set of questions and recorded answers.'],
   ['Bring the evidence together','Generate a technical file from the recorded information so teams spend less time assembling disconnected records.']
  ],
  journey:'From system inventory to technical file',
  evidence:'What reviewers can verify',
  evidenceRows:[
   ['Recorded assessment','Read the submitted answers, associated outcome and available assessment history in the system dossier.'],
   ['Human decision','Where CAB review applies, the decision is attributed to the authenticated reviewer. If the assessment changed before the decision, the console can require a refresh.'],
   ['Current configuration','Current CAB policy can be consulted alongside the review. It is presented as current configuration because there is no per-decision policy snapshot.']
  ],
  technical:'What the technical file contains',
  fileRows:[
   ['Source','The file is generated from the system and the assessment and runtime configuration available at generation time. Regenerating it can reflect newer information.'],
   ['Formats','Review the HTML view, download Markdown or export a PDF. The recorded decision actor and configured document signatories have different roles.'],
   ['Review and access','Authorized readers can inspect the material. Responsible reviewers check applicability, completeness and sign-off before relying on it.']
  ],
  trust:'Review data handling and assurance',
 },
 ro:{
  heading:'Evaluează riscul AI. Generează dosarul tehnic pentru EU AI Act.',
  intro:'PrismScale ghidează echipa prin evaluarea EU AI Act, păstrează justificarea și decizia internă, unde se aplică, și generează un dosar tehnic pe care îl poți verifica și exporta.',
  outcomes:[
   ['Vezi portofoliul AI','Aplicațiile AI pot apărea în mai multe echipe. Inventarul comun face vizibile scopul, responsabilul și starea fiecărui sistem.'],
   ['Fă riscul vizibil înainte de aprobare','Evaluarea structurată oferă echipei de review întrebări consecvente și răspunsuri înregistrate.'],
   ['Reunește dovezile','Generează dosarul tehnic din informațiile înregistrate și redu timpul petrecut adunând documente din locuri diferite.']
  ],
  journey:'De la inventarul sistemelor la dosarul tehnic',
  evidence:'Ce poate verifica echipa de review',
  evidenceRows:[
   ['Evaluarea înregistrată','Consultă răspunsurile trimise, rezultatul și istoricul disponibil în dosarul sistemului.'],
   ['Decizia umană','Unde se aplică review-ul CAB, decizia este atribuită reviewerului autentificat. Dacă evaluarea s-a schimbat înainte de decizie, consola poate cere reîncărcarea.'],
   ['Configurația curentă','Politica CAB poate fi consultată din review și este afișată drept configurația curentă. Nu există o copie a politicii pentru fiecare decizie.']
  ],
  technical:'Ce conține dosarul tehnic',
  fileRows:[
   ['Sursa informației','Dosarul se generează din datele sistemului, evaluarea și configurația runtime disponibile la acel moment. Regenerarea poate reflecta date mai noi.'],
   ['Formate','Consultă versiunea HTML, descarcă Markdown sau exportă PDF. Autorul deciziei și semnatarii configurați pentru document au roluri distincte.'],
   ['Verificare și acces','Utilizatorii autorizați pot consulta documentul. Echipa responsabilă verifică aplicabilitatea, completitudinea și semnarea înainte de a-l folosi ca dovadă.']
  ],
  trust:'Vezi cum sunt tratate datele și dovezile',
 },
};

const complianceExplorer = {
 en:{
  label:'Product walkthrough · synthetic data',
  title:'See the assessment, decision and technical file.',
  intro:'Select a step to explore a compact illustration of the PrismScale workflow.',
  steps:[
   ['Assess','Guided EU AI Act assessment','The questionnaire presents criteria with their references. It covers prohibited practices, high-risk criteria and transparency. Follow-up questions depend on answers already given.'],
   ['Review','Recorded classification and human review','The reviewer can inspect submitted answers and the classification rationale. Where CAB review applies, the signed-in reviewer records the decision against the assessment under review.'],
   ['Generate the file','Technical documentation structured around Annex IV','Open the technical file to review recorded information and report sections. View it in HTML or export Markdown or PDF.']
  ],
  mockLabel:'Illustrative console · synthetic data',
  mockSteps:[
   ['EU AI Act assessment','Workforce screening assistant','Assessment submitted', [['Intended purpose','Ranks applications for human review.'],['Annex III · Employment','Candidate evaluation selected.'],['Classification','High risk · review required']]],
   ['CAB decision','Workforce screening assistant','Decision recorded', [['Assessment','Recorded answers and classification rationale.'],['Reviewer','Synthetic CAB reviewer'],['Decision','Approved for this example.']]],
   ['Annex IV technical file','Workforce screening assistant','Generated document', [['System description','Intended purpose, provider and deployment context.'],['Assessment and review','Risk classification, rationale and recorded decision.'],['Available formats','HTML view · Markdown · PDF']]]
  ],
  detail:'What is recorded and what your team verifies',
  faq:[
   ['What can I inspect after submitting an assessment?','The dossier presents recorded answers, the classification, the applicable criteria reported by the evaluator and its rationale. For a high-risk result routed to CAB, the assessment and the human decision are separate records.'],
   ['What can the technical file populate?','The generator pulls fields already available in PrismScale, including the system name and intended purpose, risk classification and rationale, configured runtime rules and recorded approval data when available.'],
   ['Which parts need review before export?','Review generated sections and template text against the actual system. Add or verify supporting material such as testing, monitoring and human oversight evidence where applicable. The organization owns the final documentation.']
  ]
 },
 ro:{
  label:'Tur de produs · date sintetice',
  title:'Vezi evaluarea, decizia și dosarul tehnic.',
  intro:'Selectează un pas pentru a explora fluxul PrismScale într-o interfață ilustrativă.',
  steps:[
   ['Evaluare','Evaluare ghidată EU AI Act','Chestionarul afișează criteriile și referințele lor. Acoperă practici interzise, criterii de risc ridicat și transparență. Întrebările suplimentare depind de răspunsurile deja date.'],
   ['Review','Clasificarea înregistrată și decizia umană','Reviewerul vede răspunsurile trimise și justificarea clasificării. Când evaluarea ajunge la CAB, reviewerul autentificat consemnează decizia pentru evaluarea deschisă.'],
   ['Generare dosar','Documentație tehnică structurată în jurul Anexei IV','Deschide dosarul pentru a verifica datele consemnate și secțiunile raportului. Îl poți consulta în HTML sau exporta în Markdown ori PDF.']
  ],
  mockLabel:'Consolă ilustrativă · date sintetice',
  mockSteps:[
   ['Evaluare EU AI Act','Asistent pentru selecția candidaților','Evaluare trimisă', [['Scop declarat','Ordonează candidaturile pentru verificare umană.'],['Anexa III · Ocuparea forței de muncă','Evaluare a candidaților selectată.'],['Clasificare','Risc ridicat · necesită review']]],
   ['Decizie CAB','Asistent pentru selecția candidaților','Decizie înregistrată', [['Evaluare','Răspunsurile înregistrate și justificarea clasificării.'],['Reviewer','Reviewer CAB sintetic'],['Decizie','Aprobat în acest exemplu.']]],
   ['Dosar tehnic · Anexa IV','Asistent pentru selecția candidaților','Document generat', [['Descrierea sistemului','Scop, furnizor și contextul implementării.'],['Evaluare și review','Clasificare, justificare și decizia înregistrată.'],['Formate disponibile','Vizualizare HTML · Markdown · PDF']]]
  ],
  detail:'Ce înregistrează produsul și ce verifică echipa',
  faq:[
   ['Ce pot verifica după trimiterea evaluării?','Dosarul sistemului afișează răspunsurile înregistrate, clasificarea, criteriile semnalate și justificarea. Când un rezultat de risc ridicat este trimis la CAB, evaluarea și decizia umană rămân distincte.'],
   ['Ce date preia generatorul dosarului?','Generatorul folosește date deja disponibile în PrismScale, cum ar fi denumirea și scopul sistemului, clasificarea și justificarea, regulile runtime configurate și datele de aprobare, dacă sunt disponibile.'],
   ['Ce verific înainte să folosesc exportul?','Compară secțiunile generate și textul de șablon cu situația reală. Adaugă sau verifică dovezile de testare, monitorizare și supraveghere umană, unde se aplică. Organizația răspunde pentru documentația finală.']
  ]
 }
};

const architectureDepth = {
 en:{
  heading:'Keep AI protection inside your application.',
  intro:'PrismScale checks what can go to the model from inside your Java service. Your application still decides who can access a record, share a file or approve a change.',
  readers:'Explore the three components',
  nodes:[
   ['Java application','Where protection and authorization happen','The SDK inspects supported requests and tool flows in the same Java process. The host supplies the signed-in identity and checks access to the actual resource. It owns the transaction and its outcome.'],
   ['Model provider','What the model can see and propose','Your configured provider receives content allowed by local policy. A model response can propose a tool call. The host evaluates the proposal before any action changes an application record.'],
   ['Control Plane','Where teams manage policy and governance','The Control Plane manages policies and governance records and can receive permitted operational metadata. Prompts and model responses use a separate application-to-provider path.']
  ],
  build:'Integration and operational checks',
  buildRows:[
   ['Wire the model boundary','Select a supported Java provider profile and configure the request path through the protected client. Verify the final provider-bound shape against synthetic fixtures.'],
   ['Bind actions to the host','Pass authenticated host context, authorize the resource, and implement confirmation and idempotency in the application.'],
   ['Verify the runtime behavior','Inspect model-bound data, permitted telemetry, and the actual effect of allowed and denied requests. Exercise provider failures and restart behavior in your deployment.']
  ],
  quickstart:'Open Java Quickstart'
 },
 ro:{
  heading:'Protecția AI rulează în aplicația ta.',
  intro:'PrismScale verifică din serviciul Java ce poate ajunge la model. Aplicația decide în continuare cine poate consulta o înregistrare, partaja un fișier sau aproba o modificare.',
  readers:'Explorează cele trei componente',
  nodes:[
   ['Aplicația Java','Unde se fac verificările și autorizarea','SDK-ul inspectează solicitările și operațiunile suportate în același proces Java. Aplicația furnizează identitatea autentificată și verifică accesul la resursă. Tot ea gestionează tranzacția și rezultatul.'],
   ['Furnizorul modelului','Ce vede și ce poate propune modelul','Furnizorul configurat primește conținutul permis de politica locală. Modelul poate propune o operațiune. Aplicația verifică propunerea înainte să modifice vreo înregistrare.'],
   ['Control Plane','Unde echipa gestionează politicile și guvernanța','Control Plane gestionează politicile și înregistrările de guvernanță și poate primi metadatele operaționale permise. Prompturile și răspunsurile circulă separat, între aplicație și furnizor.']
  ],
  build:'Integrare și verificări operaționale',
  buildRows:[
   ['Configurează traseul către model','Alege un profil Java suportat și configurează traseul prin clientul protejat. Verifică forma finală a solicitării către furnizor pe date sintetice.'],
   ['Leagă acțiunile de aplicație','Transmite contextul autentificat, autorizează accesul la resursă și implementează confirmarea și idempotency în aplicație.'],
   ['Verifică comportamentul la rulare','Inspectează datele trimise modelului, telemetria permisă și efectele cererilor aprobate sau refuzate. Verifică erorile furnizorului și restartul în mediul de instalare.']
  ],
  quickstart:'Deschide ghidul Java'
 }
};

const homepageEvidence = {
 en:{
  products:{
   firewall:{
    heading:'Protect the data your AI application sends and the actions it takes.',
    intro:'Apply security policies inside your Java service. Your application decides who can access a resource or approve a change.',
    label:'Service desk · synthetic example',
    rows:[['Original request','Share the VPN guide with dana@example.test.'],['Model-bound content','Share the VPN guide with [EMAIL_REFERENCE].'],['Application decision','Approval required · no document shared']]
   },
   governance:{
    heading:'Assess AI risk and generate the technical file.',
    intro:'Guide teams through the EU AI Act assessment, record the rationale and internal review, then generate a file they can review and export.',
    label:'Workforce screening assistant · synthetic example',
    rows:[['Assessment','High risk · rationale recorded'],['Internal review','CAB decision recorded'],['Technical file','Annex IV structure · HTML, Markdown and PDF']]
   }
  },
  next:'Evaluate PrismScale in your environment',
  trust:'Review data boundaries, responsibilities and the evidence to request.',
  quickstart:'See the Java integration path and the checks to run before production.'
 },
 ro:{
  products:{
   firewall:{
    heading:'Protejează datele trimise de aplicația AI și acțiunile pe care le poate executa.',
    intro:'Aplică politicile de securitate în serviciul Java. Aplicația decide cine poate accesa o resursă sau aproba o modificare.',
    label:'Service desk · exemplu sintetic',
    rows:[['Cerere inițială','Partajează ghidul VPN cu dana@example.test.'],['Conținut pentru model','Partajează ghidul VPN cu [EMAIL_REFERENCE].'],['Decizia aplicației','Necesită aprobare · niciun document partajat']]
   },
   governance:{
    heading:'Evaluează riscul AI și generează dosarul tehnic.',
    intro:'Ghidează echipele prin evaluarea EU AI Act, consemnează justificarea și decizia internă, apoi generează dosarul pentru verificare și export.',
    label:'Asistent pentru selecția candidaților · exemplu sintetic',
    rows:[['Evaluare','Risc ridicat · justificare înregistrată'],['Review intern','Decizie CAB înregistrată'],['Dosar tehnic','Structura Anexei IV · HTML, Markdown și PDF']]
   }
  },
  next:'Evaluează PrismScale în mediul tău',
  trust:'Vezi traseul datelor, responsabilitățile și dovezile pe care le poți verifica.',
  quickstart:'Vezi cum se integrează SDK-ul Java și ce trebuie verificat înainte de producție.'
 }
};

const trustDepth = {
 en:{
  heading:'Review the evidence behind PrismScale.',
  intro:'Use this page to prepare your security and supplier review. See what has been verified, what each check covers and what to confirm for your deployment.',
  outcomes:[
   ['Java 17 and 21 tested','The Java SDK was verified locally on Temurin 17 and 21. The provider tests used synthetic requests and local fixtures.'],
   ['Decisions trace back to a reviewer','A CAB decision records the signed-in reviewer. The technical file shows recorded decision information separately from configured document signatories.'],
   ['Confirm evidence for your installation','Local tests cover SDK and console workflows. Backup, retention and operational access depend on the selected installation.']
  ],
  architectureLink:'See the data-flow diagram on Architecture',
  security:'Questions for your security review',
  answers:[
   ['What happens when a check cannot complete?','Inspection and authorization failures must keep protected content from falling back to a raw request. A Control Plane outage is a separate case. Verify the enforced local or last-known-good policy on your selected configuration.'],
   ['What should we review for privileged access?','The server checks permissions for each operation. CAB signing requires CAB_DECISION_SIGN or Product Owner. Technical-file access requires TECHNICAL_DOSSIER_EXPORT, ASSET_VIEW or Product Owner, and the server checks that the system belongs to the current tenant. Audit read and export are checked separately.'],
   ['What should we log?','Use scoped operational metadata and authorized audit records. Keep raw prompts, replies, pending operations, secrets and vault mappings out of telemetry and general application logs. Review retention separately for your application and configured provider.'],
   ['What changes for self-hosted deployment?','The Control Plane location and operational responsibility change. The SDK still runs inside the Java process. Confirm the endpoint, policy distribution, identity, backup and recovery configuration for your installation.']
  ],
  evidence:'Evidence available for evaluation',
  cols:['Area','What the evidence covers','What to confirm in your environment'],
  rows:[
   ['Java SDK and provider paths','Local verification on Temurin 17 and 21. Reference consumers exercised Spring Boot 3.3.3 and 3.5.16. Covered provider shapes include OpenAI, Anthropic, Azure OpenAI v1, Bedrock Converse and OpenRouter-shaped requests.','Match the intended release and host versions. Spring Boot 4 and Java 25 are outside this evidence. Provider fixtures do not establish hosted-service behavior.'],
   ['Tool lifecycle','The local test suites exercise denied actions, required approval, and outcomes where no business effect is recorded. Browser examples expose the resulting synthetic state.','The actual host resource checks, transaction and resulting application state.'],
   ['Governance workflow','Recorded assessments, attributed internal decisions and technical-file export.','Applicability, supporting evidence and review of generated documentation.'],
   ['Public sandbox','The current preview uses synthetic data and simulated traces.','The live model path, trace privacy and isolation before public use.']
  ],
  demo:'Discuss security and deployment requirements'
 },
 ro:{
  heading:'Verifică dovezile din spatele PrismScale.',
  intro:'Folosește această pagină pentru evaluarea de securitate și de furnizor. Vezi ce a fost verificat, ce acoperă fiecare dovadă și ce trebuie confirmat pentru instalarea ta.',
  outcomes:[
   ['Java 17 și 21 testate','SDK-ul Java a fost verificat local pe Temurin 17 și 21. Testele de furnizor au folosit cereri sintetice și simulatoare locale.'],
   ['Decizii atribuite reviewerului','Decizia CAB consemnează reviewerul autentificat. Dosarul tehnic prezintă separat decizia înregistrată și semnatarii configurați.'],
   ['Dovezi separate pentru fiecare instalare','Testele locale acoperă SDK-ul și fluxurile consolei. Backupul, retenția și accesul operațional se confirmă pentru instalarea aleasă.']
  ],
  architectureLink:'Vezi diagrama fluxului de date pe Architecture',
  security:'Întrebări pentru evaluarea de securitate',
  answers:[
   ['Ce se întâmplă dacă o verificare nu se poate termina?','O eroare de inspecție sau autorizare trebuie să împiedice retrimiterea cererii cu date brute. Indisponibilitatea Control Plane este un caz separat. Verifică ce politică locală sau validată anterior rămâne aplicată în configurația ta.'],
   ['Ce verificăm pentru accesul privilegiat?','Serverul verifică permisiunile fiecărei operațiuni. Decizia CAB cere CAB_DECISION_SIGN sau rolul Product Owner. Dosarul tehnic cere TECHNICAL_DOSSIER_EXPORT, ASSET_VIEW sau rolul Product Owner, iar serverul verifică apartenența sistemului la organizația curentă. Citirea și exportul auditului au verificări separate.'],
   ['Ce putem păstra în loguri?','Folosește metadate operaționale limitate și înregistrări de audit autorizate. Păstrează prompturile brute, răspunsurile, operațiunile în așteptare, secretele și valorile din seiful de tokenizare în afara telemetriei și a logurilor generale. Verifică separat retenția în aplicație și la furnizorul configurat.'],
   ['Ce se schimbă în instalarea self-hosted?','Se schimbă locul unde rulează Control Plane și cine îl operează. SDK-ul rulează în continuare în procesul Java. Confirmă endpointul, distribuția politicilor, autentificarea, backupul și recuperarea pentru instalarea ta.']
  ],
  evidence:'Dovezi disponibile pentru evaluare',
  cols:['Zonă','Ce acoperă dovezile','Ce confirmi în mediul tău'],
  rows:[
   ['SDK Java și furnizori','Verificări locale pe Temurin 17 și 21. Aplicațiile de referință au rulat cu Spring Boot 3.3.3 și 3.5.16. Testele acoperă formate de cereri OpenAI, Anthropic, Azure OpenAI v1, Bedrock Converse și OpenRouter.','Compară versiunea de produs și mediul țintă. Spring Boot 4 și Java 25 nu intră în aceste dovezi. Comportamentul serviciilor găzduite necesită verificare separată.'],
   ['Fluxul operațiunilor','Suitele locale verifică acțiuni respinse, aprobări obligatorii și rezultate fără modificarea stării de business. Exemplele din browser arată starea sintetică rezultată.','Accesul la resursele reale, tranzacția și efectul asupra datelor aplicației.'],
   ['Guvernanță','Evaluări înregistrate, decizii interne atribuite și exportul dosarului tehnic.','Aplicabilitatea, dovezile care susțin evaluarea și revizuirea documentației generate.'],
   ['Sandbox public','Preview-ul actual folosește date sintetice și trasee simulate.','Integrarea cu modelul real, confidențialitatea traseului și izolarea sesiunilor înainte de publicare.']
  ],
  demo:'Discută cerințele de securitate și instalare'
 }
};

const quickstartDepth = {
 en:{
  heading:'Run a protected AI conversation in Java.',
  intro:'Use the Spring Boot reference application to see a protected model request, a tool proposal and the decision your application makes before an action can take effect.',
  scope:'Source-based walkthrough · local provider fixture',
  outcomes:[
   ['Start with a working flow','Run the reference tests using synthetic data. The fixture does not require a live model key.'],
   ['See the boundaries you own','Your application supplies identity and owns authorization, approvals and business transactions.'],
   ['Verify before connecting a live model','Check the exact SDK, Java version, framework and provider profile you plan to install.']
  ],
  prepare:'Prepare the local environment',
  requirements:'You need the PrismScale source tree, Java 17 or 21 and the repository Maven wrappers. Run the commands from the root of that source tree. Maven needs access to dependencies on the first build.',
  install:'1. Install the local SDK modules',
  installHint:'This puts the SDK artifacts in your local Maven repository so the reference application can resolve them.',
  verify:'2. Verify the Spring Boot example',
  verifyHint:'The reference suite uses local fixtures for model responses and synthetic business data.',
  expected:'3. Inspect the results',
  outcomesTitle:'What a successful run demonstrates',
  result:[
   ['Protected request','Only the representation permitted by the configured policy reaches the model fixture.'],
   ['Tool proposal and approval','The host checks the resource. A pending approval produces no business effect until the authorized user confirms.'],
   ['Uncertain execution','The application reconciles state before repeating an action that may already have taken effect.']
  ],
  production:'Connect the reference flow to your application',
  productionSteps:[
   ['Configure a supported provider profile','Confirm the compatibility evidence for the exact version you are integrating. Keep provider credentials on the application side.'],
   ['Supply authenticated HostContext','Use tenant, principal and conversation from your application session. Register tools with bounded arguments and explicit resource authorization.'],
   ['Verify effects and output','Check request minimization, rejection and approval against your application state. Protect output for the authorized recipient and keep raw payloads out of logs.']
  ],
  copy:'Copy command', copied:'Copied', unavailable:'Select the command and copy it manually.', trust:'Review compatibility evidence'
 },
 ro:{
  heading:'Rulează o conversație AI protejată în Java.',
  intro:'Exemplul Spring Boot îți arată cererea protejată, operațiunea propusă de model și decizia pe care o ia aplicația înainte de a permite o modificare.',
  scope:'Verificare din surse · simulator local de furnizor',
  outcomes:[
   ['Pornește de la un flux funcțional','Rulează testele de referință cu date sintetice. Simulatorul local nu cere o cheie de model.'],
   ['Vezi ce rămâne în aplicația ta','Aplicația furnizează identitatea și controlează accesul, aprobările și tranzacțiile.'],
   ['Verifică înainte de apeluri live','Confirmă versiunea SDK, Java, frameworkul și profilul de furnizor pe care le vei instala.']
  ],
  prepare:'Pregătește mediul local',
  requirements:'Ai nevoie de sursele PrismScale, Java 17 sau 21 și Maven Wrapper din proiect. Rulează comenzile din rădăcina surselor. La primul build Maven are nevoie de acces la dependențe.',
  install:'1. Instalează modulele SDK local',
  installHint:'Comenzile instalează artefactele în repository-ul Maven local, de unde le va rezolva aplicația de referință.',
  verify:'2. Verifică exemplul Spring Boot',
  verifyHint:'Suita de referință simulează răspunsurile modelului și folosește date de business sintetice.',
  expected:'3. Inspectează rezultatele',
  outcomesTitle:'Ce arată o verificare reușită',
  result:[
   ['Cerere protejată','Simulatorul de model primește reprezentarea permisă de politica configurată.'],
   ['Propunere și aprobare','Gazda verifică accesul la resursă. Cererea în așteptare nu produce efecte până când utilizatorul autorizat confirmă.'],
   ['Execuție incertă','Aplicația reconciliază starea înainte să repete o operațiune care ar fi putut avea deja efect.']
  ],
  production:'Integrează fluxul în aplicația ta',
  productionSteps:[
   ['Configurează un profil de furnizor suportat','Confirmă compatibilitatea versiunii pe care o integrezi. Păstrează datele de autentificare ale furnizorului în aplicație.'],
   ['Furnizează HostContext autentificat','Preia tenantul, utilizatorul și conversația din sesiunea aplicației. Înregistrează operațiuni cu argumente limitate și autorizare explicită a resurselor.'],
   ['Verifică efectul și răspunsul','Testează minimizarea datelor, refuzul și aprobarea pe starea aplicației tale. Protejează răspunsul pentru destinatarul autorizat și păstrează datele brute în afara logurilor.']
  ],
  copy:'Copiază comanda', copied:'Copiat', unavailable:'Selectează comanda și copiaz-o manual.', trust:'Vezi dovezile de compatibilitate'
 }
};

const sandboxDepth = {
 en:{
  caseTitle:'One ticket. Two documents. One approval.',
  caseBody:'The VPN guide is available to the service desk. An internal document is restricted. Sharing the guide with the ticket requester requires a separate approval.',
  privacy:'Use fictional information only. This preview stays in your browser and uses scripted responses.',
  suggested:'Try a service desk request',
  inspect:'View decision and trace',
  decision:'Decision on the latest request',
  after:'Document shared in the synthetic outbox.',
  idle:'Waiting for a request',
  reasons:[
   'The analyst can read the public guide. Reading does not add anything to the outbox.',
   'The analyst cannot read the restricted document. The outbox is unchanged.',
   'The requester is the permitted recipient for this example. A separate approval is still required.',
   'The simulated approval applied to this pending share. The guide was added once.',
   'The guide is already in the outbox. The simulation did not create a second item.',
   'The local simulation could not match a supported example. No model request or action was made.'
  ],
  verify:'What to look for in the trace',
  detail:[
   ['Compare input with the model-bound view','Expand both stages to see the original text and the illustrative request. An email in a supported example is replaced with a sample reference.'],
   ['Separate the proposal from the action','A proposed tool call has no business effect by itself. Compare the reason shown under the application decision with the outbox.'],
   ['Check the recorded effect','A read or refusal leaves the outbox unchanged. Approval adds one synthetic item. Reset clears the example state.']
  ],
  architecture:'See where the controls run'
 },
 ro:{
  caseTitle:'Un tichet. Două documente. O aprobare.',
  caseBody:'Ghidul VPN este disponibil echipei de suport. Un document intern are acces restricționat. Partajarea ghidului cu solicitantul tichetului necesită o aprobare separată.',
  privacy:'Folosește doar informații fictive. Preview-ul rulează în browser și folosește răspunsuri prestabilite.',
  suggested:'Încearcă o cerere de service desk',
  inspect:'Vezi decizia și traseul',
  decision:'Decizia pentru ultima cerere',
  after:'Document partajat în outbox-ul sintetic.',
  idle:'În așteptarea unei cereri',
  reasons:[
   'Analistul poate citi ghidul public. Citirea nu adaugă nimic în outbox.',
   'Analistul nu poate citi documentul restricționat. Outbox-ul rămâne neschimbat.',
   'Solicitantul este destinatarul permis în acest exemplu. Partajarea necesită în continuare o aprobare separată.',
   'Aprobarea simulată se aplică partajării în așteptare. Ghidul a fost adăugat o singură dată.',
   'Ghidul există deja în outbox. Simularea nu a creat un al doilea element.',
   'Simularea locală nu a identificat un exemplu disponibil. Nu a trimis o cerere către model și nu a executat o acțiune.'
  ],
  verify:'Ce poți verifica în traseu',
  detail:[
   ['Compară textul tău cu ce ar primi modelul','Deschide ambele etape pentru a compara textul inițial cu cererea ilustrativă. În exemplele disponibile, adresa este înlocuită cu o referință de test.'],
   ['Urmărește decizia aplicației','Operațiunea propusă nu are efect de una singură. Compară motivul afișat de aplicație cu starea outbox-ului.'],
   ['Verifică efectul înregistrat','Citirea sau refuzul păstrează outbox-ul neschimbat. Aprobarea adaugă un element sintetic. Resetarea șterge starea exemplului.']
  ],
  architecture:'Vezi unde rulează verificările'
 }
};
