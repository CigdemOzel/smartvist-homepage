import {
  BrainCircuit,
  ScanLine,
  Nfc,
  ScanFace,
  ShieldCheck,
  Radar,
  Video,
  FileCheck2,
  Building2,
  type LucideIcon,
} from 'lucide-react'

/**
 * Icons are referenced by string id so article data stays fully serializable
 * across the React Server Component boundary (Lucide components are functions
 * and cannot be passed to Client Components).
 */
export type IconId =
  | 'brain'
  | 'scan-line'
  | 'nfc'
  | 'scan-face'
  | 'shield'
  | 'radar'
  | 'video'
  | 'file-check'
  | 'building'

export const icons: Record<IconId, LucideIcon> = {
  brain: BrainCircuit,
  'scan-line': ScanLine,
  nfc: Nfc,
  'scan-face': ScanFace,
  shield: ShieldCheck,
  radar: Radar,
  video: Video,
  'file-check': FileCheck2,
  building: Building2,
}

export type CategoryId =
  | 'ai'
  | 'identity-verification'
  | 'ocr'
  | 'nfc'
  | 'biometrics'
  | 'kyc'
  | 'aml'
  | 'company-news'

export type Category = {
  id: CategoryId
  label: string
}

export const categories: Category[] = [
  { id: 'ai', label: 'AI' },
  { id: 'identity-verification', label: 'Identity Verification' },
  { id: 'ocr', label: 'OCR' },
  { id: 'nfc', label: 'NFC' },
  { id: 'biometrics', label: 'Biometrics' },
  { id: 'kyc', label: 'KYC' },
  { id: 'aml', label: 'AML' },
  { id: 'company-news', label: 'Company News' },
]

export function categoryLabel(id: CategoryId): string {
  return categories.find((c) => c.id === id)?.label ?? id
}

export type Author = {
  name: string
  role: string
  initials: string
}

const authors: Record<string, Author> = {
  elifDemir: { name: 'Elif Demir', role: 'Head of Product', initials: 'ED' },
  kaanYilmaz: { name: 'Kaan Yılmaz', role: 'Principal Engineer', initials: 'KY' },
  seldaArslan: { name: 'Selda Arslan', role: 'Biometrics Lead', initials: 'SA' },
  mertOzkan: { name: 'Mert Özkan', role: 'Compliance & Risk', initials: 'MÖ' },
  smartvist: { name: 'Smartvist Team', role: 'Company', initials: 'SV' },
}

/* ---------- Rich content blocks ---------- */

export type ContentBlock =
  | { type: 'lead'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; title: string; text: string; icon: IconId }
  | { type: 'quote'; text: string; cite: string }
  | { type: 'stats'; items: { value: string; label: string }[] }
  | { type: 'steps'; title?: string; items: { title: string; text: string }[] }

export type Article = {
  slug: string
  title: string
  excerpt: string
  category: CategoryId
  author: Author
  date: string // ISO
  readingMinutes: number
  cover: string
  icon: IconId
  featured?: boolean
  tags: string[]
  content: ContentBlock[]
}

export const articles: Article[] = [
  {
    slug: 'physical-id-to-digital-trust',
    title: 'From Physical ID to Digital Trust: Global Standards and Smartvist',
    excerpt:
      'The reliability of an identity document is no longer measured by the photo and name on its surface. Modern IDs and passports are engineered against global standards — machine-readable zones, chip data and layered visual security.',
    category: 'identity-verification',
    author: authors.elifDemir,
    date: '2026-06-26',
    readingMinutes: 9,
    cover: '/blog/physical-id-to-digital-trust.png',
    icon: 'shield',
    featured: true,
    tags: ['ICAO 9303', 'Standards', 'Onboarding'],
    content: [
      {
        type: 'lead',
        text: 'The reliability of an identity document is no longer measured by the photo, name or number printed on its surface. Modern ID cards and passports are designed against international standards — with machine-readable zones, cryptographic chip data and layered visual security features.',
      },
      {
        type: 'paragraph',
        text: 'For decades, trust in an identity document rested on what a human could see: a hologram catching the light, a familiar layout, a photo that resembled the person in front of you. That model does not scale to a world where onboarding happens in seconds, on a phone, from anywhere. Digital trust has to be built on machine-verifiable evidence.',
      },
      {
        type: 'heading',
        text: 'What actually makes a document trustworthy',
      },
      {
        type: 'paragraph',
        text: 'A genuine travel or identity document layers several independent signals. Each one is difficult to forge on its own; together they form a chain of evidence that automated systems can validate objectively.',
      },
      {
        type: 'list',
        items: [
          'The Machine-Readable Zone (MRZ) encodes core fields with check digits, following the ICAO 9303 specification used by passports worldwide.',
          'The embedded chip stores a signed copy of the holder’s data, protected by passive and active authentication.',
          'Visual security elements — holograms, microprint, UV features — resist casual tampering and copying.',
          'The face on the document links the credential to a specific, living person.',
        ],
      },
      {
        type: 'callout',
        title: 'Why standards matter',
        text: 'ICAO 9303 defines how machine-readable travel documents are structured and read. Building verification on top of published standards is what lets a check performed in Istanbul behave identically to one in London.',
        icon: 'file-check',
      },
      {
        type: 'heading',
        text: 'From inspection to verification',
      },
      {
        type: 'paragraph',
        text: 'Smartvist treats a document not as an image to look at, but as a set of claims to verify. OCR reads and cross-checks the printed and machine-readable data, NFC reads and cryptographically validates the chip, and biometric matching binds the credential to the person presenting it. Any inconsistency between these layers is a signal worth investigating.',
      },
      {
        type: 'stats',
        items: [
          { value: '9303', label: 'ICAO standard applied' },
          { value: '3 layers', label: 'Print, chip & biometric' },
          { value: '<5s', label: 'Typical verification time' },
        ],
      },
      {
        type: 'quote',
        text: 'Trust is no longer something you print on a card. It is something you prove, in real time, with evidence a machine can check.',
        cite: 'Smartvist product principles',
      },
      {
        type: 'paragraph',
        text: 'The result is onboarding that is both faster and more rigorous than manual review — an experience that feels effortless to the customer while giving the institution a fully auditable record of why a decision was made.',
      },
    ],
  },
  {
    slug: 'on-device-on-premises-ai-architecture',
    title: 'The Future of Identity Verification: On-Device and On-Premises AI',
    excerpt:
      'Identity verification is not just going digital — it is becoming AI-driven, privacy-first and smarter. On-device and on-premises architectures are the foundation of this next era.',
    category: 'ai',
    author: authors.kaanYilmaz,
    date: '2026-06-18',
    readingMinutes: 8,
    cover: '/blog/on-device-on-premises-ai-architecture.png',
    icon: 'brain',
    tags: ['On-device AI', 'Privacy', 'Architecture'],
    content: [
      {
        type: 'lead',
        text: 'Identity verification is not merely going digital. AI-powered, privacy-focused and smarter systems are laying the foundation for a new era — and where the intelligence runs matters as much as how good it is.',
      },
      {
        type: 'paragraph',
        text: 'The instinct of the cloud era was to send everything to a server: the document photo, the selfie, the biometric template. That works, but it concentrates the most sensitive data an institution can hold in one place and adds latency to every step. A different architecture is emerging.',
      },
      {
        type: 'heading',
        text: 'Bringing the model to the data',
      },
      {
        type: 'paragraph',
        text: 'On-device AI runs verification models directly on the customer’s phone. OCR, liveness and face analysis happen locally, so raw biometric data never has to leave the handset. On-premises deployment gives regulated institutions the same benefit at the organisational level: the models run inside their own infrastructure and data boundary.',
      },
      {
        type: 'steps',
        title: 'Where the intelligence lives',
        items: [
          { title: 'On device', text: 'Capture, OCR and liveness run on the phone. Sensitive imagery stays local and results are near-instant.' },
          { title: 'On premises', text: 'Models run inside the institution’s data centre, keeping data within a controlled regulatory boundary.' },
          { title: 'Hybrid', text: 'Combine local speed with centralised orchestration and audit where it makes sense.' },
        ],
      },
      {
        type: 'callout',
        title: 'Privacy by architecture',
        text: 'When biometric processing happens on-device, privacy is not a policy bolted on afterwards — it is a property of where the computation runs.',
        icon: 'shield',
      },
      {
        type: 'list',
        items: [
          'Lower latency: no round-trip to the cloud for every frame.',
          'Data minimisation: sensitive images can be processed and discarded locally.',
          'Resilience: verification keeps working under poor connectivity.',
          'Sovereignty: institutions keep data inside their own boundary.',
        ],
      },
      {
        type: 'quote',
        text: 'The smartest place to run a verification model is often the closest place to the person being verified.',
        cite: 'Kaan Yılmaz, Principal Engineer',
      },
    ],
  },
  {
    slug: 'smartid-sdk-mobile-verification',
    title: 'Speed, Trust and Experience in Mobile Verification: SmartID SDK',
    excerpt:
      'SmartID SDK unifies OCR, NFC, liveness, face verification and video calling into a single end-to-end onboarding experience across Android, iOS, Flutter and React Native.',
    category: 'identity-verification',
    author: authors.elifDemir,
    date: '2026-05-15',
    readingMinutes: 7,
    cover: '/blog/smartid-sdk-mobile-verification.png',
    icon: 'scan-face',
    tags: ['SDK', 'Mobile', 'UX'],
    content: [
      {
        type: 'lead',
        text: 'SmartID SDK brings mobile identity verification, OCR, NFC, liveness detection, face verification and video calling together into one seamless digital onboarding experience — with native support for Android, iOS, Flutter and React Native.',
      },
      {
        type: 'paragraph',
        text: 'Every extra tap in an onboarding flow costs conversions. The SDK is designed so that the demanding parts of verification feel like a single, guided moment for the customer, while giving developers a clean integration surface.',
      },
      {
        type: 'heading',
        text: 'One flow, every step',
      },
      {
        type: 'list',
        items: [
          'Guided document capture with real-time glare and framing feedback.',
          'ICAO 9303-compliant OCR that reads and validates the data instantly.',
          'NFC chip reading with cryptographic authentication where supported.',
          'Active and passive liveness plus 1:1 face matching.',
          'Optional live video call to escalate edge cases without leaving the flow.',
        ],
      },
      {
        type: 'callout',
        title: 'On-device by default',
        text: 'The heavy lifting runs on the phone, so verification stays fast and sensitive data stays local — a better experience and a stronger privacy posture at once.',
        icon: 'brain',
      },
      {
        type: 'stats',
        items: [
          { value: '4', label: 'Mobile platforms' },
          { value: '6', label: 'Verification steps unified' },
          { value: '1 SDK', label: 'End-to-end onboarding' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Because every step lives inside one SDK, teams ship faster and maintain less. And because steps can be re-triggered live during a video call, an agent can resolve a blurry capture or a failed liveness check in the moment — no restart, no lost customer.',
      },
    ],
  },
  {
    slug: 'smartid-studio-kyc-management',
    title: 'More Controlled, More Scalable KYC with SmartID Studio',
    excerpt:
      'Success in digital customer acquisition no longer depends on verification technology alone — it depends on how well the process is managed, audited and scaled. SmartID Studio sits at the centre of that need.',
    category: 'kyc',
    author: authors.elifDemir,
    date: '2026-05-08',
    readingMinutes: 6,
    cover: '/blog/smartid-studio-kyc-management.png',
    icon: 'building',
    tags: ['KYC', 'Operations', 'Audit'],
    content: [
      {
        type: 'lead',
        text: 'Success in digital customer acquisition is no longer defined by verification technology alone; it is defined by how well the process is managed, audited and scaled. SmartID Studio is built precisely for that.',
      },
      {
        type: 'paragraph',
        text: 'A verification engine tells you whether a single check passed. An operations platform tells you how thousands of checks are performing, where they stall, and who needs to intervene. Studio is the command centre that turns verification into a managed process.',
      },
      {
        type: 'heading',
        text: 'From black box to control room',
      },
      {
        type: 'list',
        items: [
          'Real-time monitoring of every verification session as it happens.',
          'Restart individual steps during a live video call without restarting the journey.',
          'Configurable decision rules to approve, escalate or decline automatically.',
          'A complete, exportable audit trail for every session and decision.',
        ],
      },
      {
        type: 'callout',
        title: 'Built for scale and audit',
        text: 'When a regulator asks why a customer was approved, the answer should be one click away. Studio records the evidence behind every decision.',
        icon: 'file-check',
      },
      {
        type: 'quote',
        text: 'Verification is a moment. KYC is a system. Studio is how you run the system.',
        cite: 'Smartvist product principles',
      },
    ],
  },
  {
    slug: 'smartid-agent-remote-identification',
    title: 'A New Era in Remote Identification: SmartID Agent',
    excerpt:
      'For financial institutions, remote identity proofing is not only about going digital — it is about making the process more efficient, traceable and sustainable at the same time. SmartID Agent answers exactly that.',
    category: 'company-news',
    author: authors.smartvist,
    date: '2026-04-28',
    readingMinutes: 6,
    cover: '/blog/smartid-agent-remote-identification.png',
    icon: 'video',
    tags: ['Product', 'Video', 'Automation'],
    content: [
      {
        type: 'lead',
        text: 'For financial institutions, the real challenge in remote identity proofing is not simply going digital — it is making the process more efficient, more traceable and more sustainable all at once. SmartID Agent is our answer.',
      },
      {
        type: 'paragraph',
        text: 'Human-led video identification is thorough but expensive and hard to scale — queues form, agents burn out, and coverage shrinks outside business hours. SmartID Agent introduces an AI avatar that guides customers through verification with voice and video, autonomously and around the clock.',
      },
      {
        type: 'heading',
        text: 'An avatar that guides, a record that proves',
      },
      {
        type: 'list',
        items: [
          'Voice and video guidance completes onboarding without a human representative.',
          'Every session is recorded end-to-end for a fully traceable experience.',
          'Edge cases can still hand off to a human agent when needed.',
          'Capacity scales instantly with demand, day or night.',
        ],
      },
      {
        type: 'callout',
        title: 'Efficiency without losing rigour',
        text: 'Automation removes the queue, not the evidence. Each Agent session is as auditable as a human-led one.',
        icon: 'shield',
      },
      {
        type: 'stats',
        items: [
          { value: '24/7', label: 'Availability' },
          { value: '100%', label: 'Sessions recorded' },
          { value: '0', label: 'Human agents required' },
        ],
      },
    ],
  },
  {
    slug: 'ocr-icao-9303-document-authenticity',
    title: 'Reading Trust: OCR, ICAO 9303 and Document Authenticity',
    excerpt:
      'Great OCR does more than transcribe text. It validates check digits, cross-references fields and flags tampering — turning a photo of a document into verifiable evidence.',
    category: 'ocr',
    author: authors.kaanYilmaz,
    date: '2026-04-12',
    readingMinutes: 7,
    cover: '/blog/ocr-icao-9303-document-authenticity.png',
    icon: 'scan-line',
    tags: ['OCR', 'ICAO 9303', 'Documents'],
    content: [
      {
        type: 'lead',
        text: 'Great OCR does far more than transcribe text from an image. It validates check digits, cross-references fields against each other and flags signs of tampering — turning a simple photo into verifiable evidence.',
      },
      {
        type: 'paragraph',
        text: 'The Machine-Readable Zone at the bottom of a passport looks like two cryptic lines of characters. In fact it is a carefully structured, self-checking data format defined by ICAO 9303, with check digits that let a reader detect a misread or an alteration immediately.',
      },
      {
        type: 'steps',
        title: 'How Smartvist reads a document',
        items: [
          { title: 'Capture & normalise', text: 'Detect the document, correct perspective and lighting for a clean read.' },
          { title: 'Extract fields', text: 'Read both the visual zone and the MRZ, then map them to structured data.' },
          { title: 'Validate', text: 'Verify MRZ check digits and confirm the visual and machine-readable data agree.' },
          { title: 'Flag anomalies', text: 'Surface mismatches, font irregularities or edits that suggest tampering.' },
        ],
      },
      {
        type: 'callout',
        title: 'Cross-checking beats reading',
        text: 'A forger can copy a name. It is far harder to make the printed data, the MRZ check digits and the chip all agree. Consistency is the real signal.',
        icon: 'file-check',
      },
      {
        type: 'paragraph',
        text: 'By treating extraction and validation as one process, Smartvist converts an ordinary document photo into a set of claims that either hold together or do not — objectively, and in under a second.',
      },
    ],
  },
  {
    slug: 'nfc-chip-verification-explained',
    title: 'Inside the Chip: How NFC Verification Stops Fraud',
    excerpt:
      'The chip inside a modern passport or ID carries a cryptographically signed copy of the holder’s data. Reading it over NFC is one of the strongest checks available in remote onboarding.',
    category: 'nfc',
    author: authors.kaanYilmaz,
    date: '2026-03-30',
    readingMinutes: 6,
    cover: '/blog/nfc-chip-verification-explained.png',
    icon: 'nfc',
    tags: ['NFC', 'Cryptography', 'Chip'],
    content: [
      {
        type: 'lead',
        text: 'The chip embedded in a modern passport or ID card carries a cryptographically signed copy of the holder’s data. Reading it over NFC is one of the strongest, hardest-to-forge checks available in remote onboarding.',
      },
      {
        type: 'paragraph',
        text: 'Where OCR reads what is printed, NFC reads what the issuing authority signed. That difference matters: the chip’s contents are protected by cryptographic mechanisms that make undetected forgery extremely difficult.',
      },
      {
        type: 'list',
        items: [
          'Passive authentication verifies that the chip data was signed by a legitimate issuer and has not been altered.',
          'Active authentication proves the chip itself is genuine and not a clone.',
          'The chip’s photo can be matched against a live selfie for an extra binding to the person.',
        ],
      },
      {
        type: 'callout',
        title: 'Why NFC is so powerful',
        text: 'A printed forgery has to fool a camera. A chip forgery has to defeat cryptography signed by a national authority — a fundamentally harder problem.',
        icon: 'shield',
      },
      {
        type: 'quote',
        text: 'The chip lets us verify a document against the authority that issued it, not just against how it looks.',
        cite: 'Smartvist engineering',
      },
      {
        type: 'paragraph',
        text: 'Smartvist reads the chip directly on-device over NFC, validates its signatures and cross-checks it against the OCR and biometric data — closing the loop between what is printed, what is signed and who is present.',
      },
    ],
  },
  {
    slug: 'aml-risk-screening-onboarding',
    title: 'Beyond KYC: AML Screening in Digital Onboarding',
    excerpt:
      'Verifying who someone is answers only half the question. AML screening asks whether onboarding them carries risk — checking sanctions, watchlists and behavioural signals in real time.',
    category: 'aml',
    author: authors.mertOzkan,
    date: '2026-03-16',
    readingMinutes: 8,
    cover: '/blog/aml-risk-screening-onboarding.png',
    icon: 'radar',
    tags: ['AML', 'Risk', 'Compliance'],
    content: [
      {
        type: 'lead',
        text: 'Verifying who someone is answers only half the question. Anti-money-laundering screening asks a second one: does onboarding this person carry risk? The strongest programmes answer both in the same flow.',
      },
      {
        type: 'paragraph',
        text: 'A perfectly genuine identity can still belong to a sanctioned individual or a high-risk profile. That is why identity verification and AML screening belong together — a confirmed identity is exactly what makes screening meaningful.',
      },
      {
        type: 'heading',
        text: 'Layers of risk signal',
      },
      {
        type: 'list',
        items: [
          'Sanctions and watchlist screening against a verified identity.',
          'PEP (politically exposed person) checks where required.',
          'Behavioural and process-level risk signals gathered during onboarding.',
          'Configurable rules to approve, escalate or decline based on risk appetite.',
        ],
      },
      {
        type: 'callout',
        title: 'Identity first, risk second',
        text: 'Screening is only as good as the identity it is attached to. Verifying the person first is what makes an AML hit — or a clear pass — trustworthy.',
        icon: 'shield',
      },
      {
        type: 'steps',
        title: 'Screening in the flow',
        items: [
          { title: 'Verify identity', text: 'Establish who the person is with document, chip and biometric checks.' },
          { title: 'Screen against risk', text: 'Check the confirmed identity against sanctions, watchlists and PEP data.' },
          { title: 'Decide with rules', text: 'Apply the institution’s own thresholds to approve, escalate or decline.' },
        ],
      },
      {
        type: 'quote',
        text: 'KYC tells you who walked through the door. AML tells you whether you should have let them in.',
        cite: 'Mert Özkan, Compliance & Risk',
      },
    ],
  },
  {
    slug: 'liveness-deepfake-defense',
    title: 'Defeating Deepfakes: Liveness Detection in 2026',
    excerpt:
      'As generative models make fake faces trivial to produce, liveness detection has become the front line of biometric security. Here is how modern liveness tells a real person from a convincing fake.',
    category: 'biometrics',
    author: authors.seldaArslan,
    date: '2026-02-28',
    readingMinutes: 9,
    cover: '/blog/liveness-deepfake-defense.png',
    icon: 'scan-face',
    tags: ['Liveness', 'Deepfakes', 'Biometrics'],
    content: [
      {
        type: 'lead',
        text: 'As generative models make convincing fake faces trivial to produce, liveness detection has become the front line of biometric security. The question is no longer only “does this face match?” but “is this a real, present human at all?”',
      },
      {
        type: 'paragraph',
        text: 'Presentation attacks used to mean a printed photo or a mask held up to a camera. Today they include high-quality deepfake video and injected camera feeds. Defending against them requires more than a single trick.',
      },
      {
        type: 'heading',
        text: 'Active and passive, working together',
      },
      {
        type: 'list',
        items: [
          'Passive liveness analyses depth, texture and micro-signals from a single capture, with no user effort.',
          'Active liveness prompts small actions to confirm a responsive, present person.',
          'Presentation-attack detection targets masks, screens, printouts and replays.',
          'Injection and deepfake defences guard the capture pipeline itself.',
        ],
      },
      {
        type: 'callout',
        title: 'Defence in depth',
        text: 'No single check is unbeatable. Layering independent signals is what makes an attack that fools one of them fail against the rest.',
        icon: 'radar',
      },
      {
        type: 'stats',
        items: [
          { value: 'NIST', label: 'Grade biometrics' },
          { value: '2', label: 'Liveness modes' },
          { value: 'Real-time', label: 'Attack detection' },
        ],
      },
      {
        type: 'quote',
        text: 'The goal of liveness is simple to state and hard to achieve: prove there is a real, present human on the other side of the camera.',
        cite: 'Selda Arslan, Biometrics Lead',
      },
    ],
  },
]

/* ---------- Helpers ---------- */

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getFeatured(): Article {
  return articles.find((a) => a.featured) ?? articles[0]
}

export function getRelated(slug: string, limit = 3): Article[] {
  const current = getArticle(slug)
  if (!current) return articles.slice(0, limit)
  const sameCategory = articles.filter((a) => a.slug !== slug && a.category === current.category)
  const others = articles.filter((a) => a.slug !== slug && a.category !== current.category)
  return [...sameCategory, ...others].slice(0, limit)
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
