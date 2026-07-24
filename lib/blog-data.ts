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
import type { Locale, Localized } from './i18n'

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
  label: Localized
}

export const categories: Category[] = [
  { id: 'ai', label: { tr: 'Yapay Zeka', en: 'AI' } },
  { id: 'identity-verification', label: { tr: 'Kimlik Doğrulama', en: 'Identity Verification' } },
  { id: 'ocr', label: { tr: 'OCR', en: 'OCR' } },
  { id: 'nfc', label: { tr: 'NFC', en: 'NFC' } },
  { id: 'biometrics', label: { tr: 'Biyometri', en: 'Biometrics' } },
  { id: 'kyc', label: { tr: 'KYC', en: 'KYC' } },
  { id: 'aml', label: { tr: 'AML', en: 'AML' } },
  { id: 'company-news', label: { tr: 'Şirket Haberleri', en: 'Company News' } },
]

export function categoryLabel(id: CategoryId): Localized {
  return categories.find((c) => c.id === id)?.label ?? { tr: id, en: id }
}

export type Author = {
  name: string
  role: Localized
  initials: string
}

const authors: Record<string, Author> = {
  elifDemir: { name: 'Elif Demir', role: { tr: 'Ürün Direktörü', en: 'Head of Product' }, initials: 'ED' },
  kaanYilmaz: { name: 'Kaan Yılmaz', role: { tr: 'Baş Mühendis', en: 'Principal Engineer' }, initials: 'KY' },
  seldaArslan: { name: 'Selda Arslan', role: { tr: 'Biyometri Lideri', en: 'Biometrics Lead' }, initials: 'SA' },
  mertOzkan: { name: 'Mert Özkan', role: { tr: 'Uyum ve Risk', en: 'Compliance & Risk' }, initials: 'MÖ' },
  smartvist: { name: 'Smartvist Team', role: { tr: 'Şirket', en: 'Company' }, initials: 'SV' },
}

/* ---------- Rich content blocks ---------- */

export type ContentBlock =
  | { type: 'lead'; text: Localized }
  | { type: 'heading'; text: Localized }
  | { type: 'paragraph'; text: Localized }
  | { type: 'list'; items: Localized<string[]> }
  | { type: 'callout'; title: Localized; text: Localized; icon: IconId }
  | { type: 'quote'; text: Localized; cite: Localized }
  | { type: 'stats'; items: { value: string; label: Localized }[] }
  | { type: 'steps'; title?: Localized; items: { title: Localized; text: Localized }[] }

export type Article = {
  slug: string
  title: Localized
  excerpt: Localized
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
    title: {
      tr: 'Fiziksel Kimlikten Dijital Güvene: Küresel Standartlar ve Smartvist',
      en: 'From Physical ID to Digital Trust: Global Standards and Smartvist',
    },
    excerpt: {
      tr: 'Bir kimlik belgesinin güvenilirliği artık yüzeyindeki fotoğraf ve isimle ölçülmüyor. Modern kimlikler ve pasaportlar küresel standartlara göre tasarlanıyor — makine tarafından okunabilir bölgeler, çip verisi ve katmanlı görsel güvenlik.',
      en: 'The reliability of an identity document is no longer measured by the photo and name on its surface. Modern IDs and passports are engineered against global standards — machine-readable zones, chip data and layered visual security.',
    },
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
        text: {
          tr: 'Bir kimlik belgesinin güvenilirliği artık yüzeyine basılı fotoğraf, isim ya da numarayla ölçülmüyor. Modern kimlik kartları ve pasaportlar uluslararası standartlara göre tasarlanıyor — makine tarafından okunabilir bölgeler, kriptografik çip verisi ve katmanlı görsel güvenlik unsurlarıyla.',
          en: 'The reliability of an identity document is no longer measured by the photo, name or number printed on its surface. Modern ID cards and passports are designed against international standards — with machine-readable zones, cryptographic chip data and layered visual security features.',
        },
      },
      {
        type: 'paragraph',
        text: {
          tr: 'Onlarca yıl boyunca bir kimlik belgesine duyulan güven, bir insanın görebildiklerine dayanıyordu: ışıkta parlayan bir hologram, tanıdık bir düzen, karşınızdaki kişiye benzeyen bir fotoğraf. Bu model, müşteri kazanımının her yerden, telefonda ve saniyeler içinde gerçekleştiği bir dünyaya ölçeklenmiyor. Dijital güven, makine tarafından doğrulanabilir kanıtlar üzerine kurulmalı.',
          en: 'For decades, trust in an identity document rested on what a human could see: a hologram catching the light, a familiar layout, a photo that resembled the person in front of you. That model does not scale to a world where onboarding happens in seconds, on a phone, from anywhere. Digital trust has to be built on machine-verifiable evidence.',
        },
      },
      {
        type: 'heading',
        text: { tr: 'Bir belgeyi gerçekte güvenilir kılan nedir', en: 'What actually makes a document trustworthy' },
      },
      {
        type: 'paragraph',
        text: {
          tr: 'Gerçek bir seyahat ya da kimlik belgesi, birkaç bağımsız sinyali katman katman bir araya getirir. Her biri tek başına taklit edilmesi zordur; birlikte ise otomatik sistemlerin nesnel olarak doğrulayabileceği bir kanıt zinciri oluştururlar.',
          en: 'A genuine travel or identity document layers several independent signals. Each one is difficult to forge on its own; together they form a chain of evidence that automated systems can validate objectively.',
        },
      },
      {
        type: 'list',
        items: {
          tr: [
            'Makine tarafından okunabilir bölge (MRZ), dünya genelinde pasaportlarda kullanılan ICAO 9303 spesifikasyonuna göre temel alanları kontrol basamaklarıyla kodlar.',
            'Gömülü çip, pasif ve aktif kimlik doğrulama ile korunan, sahibinin verilerinin imzalı bir kopyasını saklar.',
            'Görsel güvenlik unsurları — hologramlar, mikro baskı, UV özellikler — basit kurcalama ve kopyalamaya direnir.',
            'Belgedeki yüz, kimliği belirli ve yaşayan bir kişiye bağlar.',
          ],
          en: [
            'The Machine-Readable Zone (MRZ) encodes core fields with check digits, following the ICAO 9303 specification used by passports worldwide.',
            'The embedded chip stores a signed copy of the holder’s data, protected by passive and active authentication.',
            'Visual security elements — holograms, microprint, UV features — resist casual tampering and copying.',
            'The face on the document links the credential to a specific, living person.',
          ],
        },
      },
      {
        type: 'callout',
        title: { tr: 'Standartlar neden önemli', en: 'Why standards matter' },
        text: {
          tr: 'ICAO 9303, makine tarafından okunabilir seyahat belgelerinin nasıl yapılandırıldığını ve okunduğunu tanımlar. Doğrulamayı yayımlanmış standartların üzerine inşa etmek, İstanbul’da yapılan bir kontrolün Londra’dakiyle aynı şekilde davranmasını sağlayan şeydir.',
          en: 'ICAO 9303 defines how machine-readable travel documents are structured and read. Building verification on top of published standards is what lets a check performed in Istanbul behave identically to one in London.',
        },
        icon: 'file-check',
      },
      {
        type: 'heading',
        text: { tr: 'İncelemeden doğrulamaya', en: 'From inspection to verification' },
      },
      {
        type: 'paragraph',
        text: {
          tr: 'Smartvist bir belgeyi bakılacak bir görüntü olarak değil, doğrulanacak bir dizi iddia olarak ele alır. OCR, basılı ve makine tarafından okunabilir veriyi okur ve karşılaştırır; NFC çipi okur ve kriptografik olarak doğrular; biyometrik eşleştirme ise belgeyi onu sunan kişiye bağlar. Bu katmanlar arasındaki her tutarsızlık, incelenmeye değer bir sinyaldir.',
          en: 'Smartvist treats a document not as an image to look at, but as a set of claims to verify. OCR reads and cross-checks the printed and machine-readable data, NFC reads and cryptographically validates the chip, and biometric matching binds the credential to the person presenting it. Any inconsistency between these layers is a signal worth investigating.',
        },
      },
      {
        type: 'stats',
        items: [
          { value: '9303', label: { tr: 'Uygulanan ICAO standardı', en: 'ICAO standard applied' } },
          { value: '3 katman', label: { tr: 'Baskı, çip ve biyometri', en: 'Print, chip & biometric' } },
          { value: '<5sn', label: { tr: 'Tipik doğrulama süresi', en: 'Typical verification time' } },
        ],
      },
      {
        type: 'quote',
        text: {
          tr: 'Güven artık bir karta bastığınız bir şey değil. Gerçek zamanlı olarak, bir makinenin kontrol edebileceği kanıtlarla ispatladığınız bir şey.',
          en: 'Trust is no longer something you print on a card. It is something you prove, in real time, with evidence a machine can check.',
        },
        cite: { tr: 'Smartvist ürün ilkeleri', en: 'Smartvist product principles' },
      },
      {
        type: 'paragraph',
        text: {
          tr: 'Sonuç, manuel incelemeden hem daha hızlı hem de daha titiz bir müşteri kazanımıdır — müşteri için zahmetsiz hissettiren, kuruma ise bir kararın neden verildiğine dair tümüyle denetlenebilir bir kayıt sunan bir deneyim.',
          en: 'The result is onboarding that is both faster and more rigorous than manual review — an experience that feels effortless to the customer while giving the institution a fully auditable record of why a decision was made.',
        },
      },
    ],
  },
  {
    slug: 'on-device-on-premises-ai-architecture',
    title: {
      tr: 'Kimlik Doğrulamanın Geleceği: Cihaz Üzerinde ve Şirket İçi AI',
      en: 'The Future of Identity Verification: On-Device and On-Premises AI',
    },
    excerpt: {
      tr: 'Kimlik doğrulama yalnızca dijitalleşmiyor — yapay zeka odaklı, gizlilik öncelikli ve daha akıllı hâle geliyor. Cihaz üzerinde ve şirket içi mimariler bu yeni çağın temelidir.',
      en: 'Identity verification is not just going digital — it is becoming AI-driven, privacy-first and smarter. On-device and on-premises architectures are the foundation of this next era.',
    },
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
        text: {
          tr: 'Kimlik doğrulama yalnızca dijitalleşmiyor. Yapay zeka destekli, gizlilik odaklı ve daha akıllı sistemler yeni bir çağın temelini atıyor — ve zekânın nerede çalıştığı, ne kadar iyi olduğu kadar önemli.',
          en: 'Identity verification is not merely going digital. AI-powered, privacy-focused and smarter systems are laying the foundation for a new era — and where the intelligence runs matters as much as how good it is.',
        },
      },
      {
        type: 'paragraph',
        text: {
          tr: 'Bulut çağının içgüdüsü her şeyi bir sunucuya göndermekti: belge fotoğrafı, selfie, biyometrik şablon. Bu işe yarar, ama bir kurumun tutabileceği en hassas veriyi tek bir yerde toplar ve her adıma gecikme ekler. Farklı bir mimari ortaya çıkıyor.',
          en: 'The instinct of the cloud era was to send everything to a server: the document photo, the selfie, the biometric template. That works, but it concentrates the most sensitive data an institution can hold in one place and adds latency to every step. A different architecture is emerging.',
        },
      },
      {
        type: 'heading',
        text: { tr: 'Modeli verinin yanına getirmek', en: 'Bringing the model to the data' },
      },
      {
        type: 'paragraph',
        text: {
          tr: 'Cihaz üzerinde AI, doğrulama modellerini doğrudan müşterinin telefonunda çalıştırır. OCR, canlılık ve yüz analizi yerel olarak gerçekleşir, böylece ham biyometrik veri cihazdan hiç ayrılmak zorunda kalmaz. Şirket içi kurulum ise düzenlemeye tabi kurumlara aynı avantajı kurumsal düzeyde sağlar: modeller kendi altyapıları ve veri sınırları içinde çalışır.',
          en: 'On-device AI runs verification models directly on the customer’s phone. OCR, liveness and face analysis happen locally, so raw biometric data never has to leave the handset. On-premises deployment gives regulated institutions the same benefit at the organisational level: the models run inside their own infrastructure and data boundary.',
        },
      },
      {
        type: 'steps',
        title: { tr: 'Zekânın yaşadığı yer', en: 'Where the intelligence lives' },
        items: [
          {
            title: { tr: 'Cihaz üzerinde', en: 'On device' },
            text: {
              tr: 'Yakalama, OCR ve canlılık telefonda çalışır. Hassas görüntüler yerel kalır ve sonuçlar neredeyse anlıktır.',
              en: 'Capture, OCR and liveness run on the phone. Sensitive imagery stays local and results are near-instant.',
            },
          },
          {
            title: { tr: 'Şirket içi', en: 'On premises' },
            text: {
              tr: 'Modeller kurumun veri merkezinde çalışır ve veriyi kontrollü bir düzenleyici sınır içinde tutar.',
              en: 'Models run inside the institution’s data centre, keeping data within a controlled regulatory boundary.',
            },
          },
          {
            title: { tr: 'Hibrit', en: 'Hybrid' },
            text: {
              tr: 'Yerel hızı, anlamlı olduğu yerlerde merkezi orkestrasyon ve denetimle birleştirin.',
              en: 'Combine local speed with centralised orchestration and audit where it makes sense.',
            },
          },
        ],
      },
      {
        type: 'callout',
        title: { tr: 'Mimariyle gelen gizlilik', en: 'Privacy by architecture' },
        text: {
          tr: 'Biyometrik işleme cihaz üzerinde gerçekleştiğinde gizlilik, sonradan eklenen bir politika değildir — hesaplamanın nerede çalıştığına dair bir özelliktir.',
          en: 'When biometric processing happens on-device, privacy is not a policy bolted on afterwards — it is a property of where the computation runs.',
        },
        icon: 'shield',
      },
      {
        type: 'list',
        items: {
          tr: [
            'Daha düşük gecikme: her kare için buluta gidiş-dönüş yok.',
            'Veri minimizasyonu: hassas görüntüler yerel olarak işlenip silinebilir.',
            'Dayanıklılık: doğrulama kötü bağlantıda da çalışmaya devam eder.',
            'Egemenlik: kurumlar veriyi kendi sınırları içinde tutar.',
          ],
          en: [
            'Lower latency: no round-trip to the cloud for every frame.',
            'Data minimisation: sensitive images can be processed and discarded locally.',
            'Resilience: verification keeps working under poor connectivity.',
            'Sovereignty: institutions keep data inside their own boundary.',
          ],
        },
      },
      {
        type: 'quote',
        text: {
          tr: 'Bir doğrulama modelini çalıştırmak için en akıllıca yer, çoğu zaman doğrulanan kişiye en yakın yerdir.',
          en: 'The smartest place to run a verification model is often the closest place to the person being verified.',
        },
        cite: { tr: 'Kaan Yılmaz, Baş Mühendis', en: 'Kaan Yılmaz, Principal Engineer' },
      },
    ],
  },
  {
    slug: 'smartid-sdk-mobile-verification',
    title: {
      tr: 'Mobil Doğrulamada Hız, Güven ve Deneyim: SmartID SDK',
      en: 'Speed, Trust and Experience in Mobile Verification: SmartID SDK',
    },
    excerpt: {
      tr: 'SmartID SDK; OCR, NFC, canlılık, yüz doğrulama ve görüntülü aramayı Android, iOS, Flutter ve React Native genelinde tek bir uçtan uca müşteri kazanım deneyiminde birleştirir.',
      en: 'SmartID SDK unifies OCR, NFC, liveness, face verification and video calling into a single end-to-end onboarding experience across Android, iOS, Flutter and React Native.',
    },
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
        text: {
          tr: 'SmartID SDK; mobil kimlik doğrulamayı, OCR, NFC, canlılık tespiti, yüz doğrulama ve görüntülü aramayı tek bir kesintisiz dijital müşteri kazanım deneyiminde bir araya getirir — Android, iOS, Flutter ve React Native için yerel destekle.',
          en: 'SmartID SDK brings mobile identity verification, OCR, NFC, liveness detection, face verification and video calling together into one seamless digital onboarding experience — with native support for Android, iOS, Flutter and React Native.',
        },
      },
      {
        type: 'paragraph',
        text: {
          tr: 'Bir müşteri kazanım akışındaki her ek dokunuş dönüşüme mal olur. SDK, doğrulamanın zorlu kısımlarının müşteri için tek ve yönlendirilmiş bir an gibi hissettirmesi için tasarlandı; geliştiricilere ise temiz bir entegrasyon yüzeyi sunar.',
          en: 'Every extra tap in an onboarding flow costs conversions. The SDK is designed so that the demanding parts of verification feel like a single, guided moment for the customer, while giving developers a clean integration surface.',
        },
      },
      {
        type: 'heading',
        text: { tr: 'Tek akış, her adım', en: 'One flow, every step' },
      },
      {
        type: 'list',
        items: {
          tr: [
            'Gerçek zamanlı parlama ve çerçeveleme geri bildirimiyle yönlendirilmiş belge yakalama.',
            'Veriyi anında okuyup doğrulayan ICAO 9303 uyumlu OCR.',
            'Desteklenen yerlerde kriptografik kimlik doğrulamalı NFC çip okuma.',
            'Aktif ve pasif canlılık ile birlikte 1:1 yüz eşleştirme.',
            'Uç durumları akıştan çıkmadan yükseltmek için isteğe bağlı canlı görüntülü arama.',
          ],
          en: [
            'Guided document capture with real-time glare and framing feedback.',
            'ICAO 9303-compliant OCR that reads and validates the data instantly.',
            'NFC chip reading with cryptographic authentication where supported.',
            'Active and passive liveness plus 1:1 face matching.',
            'Optional live video call to escalate edge cases without leaving the flow.',
          ],
        },
      },
      {
        type: 'callout',
        title: { tr: 'Varsayılan olarak cihaz üzerinde', en: 'On-device by default' },
        text: {
          tr: 'Ağır iş telefonda çalışır; böylece doğrulama hızlı, hassas veri ise yerel kalır — aynı anda hem daha iyi bir deneyim hem de daha güçlü bir gizlilik duruşu.',
          en: 'The heavy lifting runs on the phone, so verification stays fast and sensitive data stays local — a better experience and a stronger privacy posture at once.',
        },
        icon: 'brain',
      },
      {
        type: 'stats',
        items: [
          { value: '4', label: { tr: 'Mobil platform', en: 'Mobile platforms' } },
          { value: '6', label: { tr: 'Birleştirilmiş doğrulama adımı', en: 'Verification steps unified' } },
          { value: '1 SDK', label: { tr: 'Uçtan uca müşteri kazanımı', en: 'End-to-end onboarding' } },
        ],
      },
      {
        type: 'paragraph',
        text: {
          tr: 'Her adım tek bir SDK içinde yaşadığından ekipler daha hızlı yayına alır ve daha az bakım yapar. Adımlar bir görüntülü arama sırasında canlı olarak yeniden tetiklenebildiğinden, bir temsilci bulanık bir yakalamayı ya da başarısız bir canlılık kontrolünü o anda çözebilir — yeniden başlatma yok, kaybedilen müşteri yok.',
          en: 'Because every step lives inside one SDK, teams ship faster and maintain less. And because steps can be re-triggered live during a video call, an agent can resolve a blurry capture or a failed liveness check in the moment — no restart, no lost customer.',
        },
      },
    ],
  },
  {
    slug: 'smartid-studio-kyc-management',
    title: {
      tr: 'SmartID Studio ile Daha Kontrollü, Daha Ölçeklenebilir KYC',
      en: 'More Controlled, More Scalable KYC with SmartID Studio',
    },
    excerpt: {
      tr: 'Dijital müşteri kazanımında başarı artık yalnızca doğrulama teknolojisine bağlı değil — sürecin ne kadar iyi yönetildiğine, denetlendiğine ve ölçeklendiğine bağlı. SmartID Studio tam da bu ihtiyacın merkezinde yer alır.',
      en: 'Success in digital customer acquisition no longer depends on verification technology alone — it depends on how well the process is managed, audited and scaled. SmartID Studio sits at the centre of that need.',
    },
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
        text: {
          tr: 'Dijital müşteri kazanımında başarı artık yalnızca doğrulama teknolojisiyle tanımlanmıyor; sürecin ne kadar iyi yönetildiği, denetlendiği ve ölçeklendiğiyle tanımlanıyor. SmartID Studio tam da bunun için geliştirildi.',
          en: 'Success in digital customer acquisition is no longer defined by verification technology alone; it is defined by how well the process is managed, audited and scaled. SmartID Studio is built precisely for that.',
        },
      },
      {
        type: 'paragraph',
        text: {
          tr: 'Bir doğrulama motoru, tek bir kontrolün geçip geçmediğini söyler. Bir operasyon platformu ise binlerce kontrolün nasıl performans gösterdiğini, nerede takıldığını ve kimin müdahale etmesi gerektiğini söyler. Studio, doğrulamayı yönetilen bir sürece dönüştüren komuta merkezidir.',
          en: 'A verification engine tells you whether a single check passed. An operations platform tells you how thousands of checks are performing, where they stall, and who needs to intervene. Studio is the command centre that turns verification into a managed process.',
        },
      },
      {
        type: 'heading',
        text: { tr: 'Kara kutudan kontrol odasına', en: 'From black box to control room' },
      },
      {
        type: 'list',
        items: {
          tr: [
            'Her doğrulama oturumunun gerçekleştiği anda gerçek zamanlı izlenmesi.',
            'Yolculuğu yeniden başlatmadan, canlı görüntülü arama sırasında tek tek adımları yeniden başlatma.',
            'Otomatik olarak onaylamak, yükseltmek veya reddetmek için yapılandırılabilir karar kuralları.',
            'Her oturum ve karar için eksiksiz, dışa aktarılabilir bir denetim izi.',
          ],
          en: [
            'Real-time monitoring of every verification session as it happens.',
            'Restart individual steps during a live video call without restarting the journey.',
            'Configurable decision rules to approve, escalate or decline automatically.',
            'A complete, exportable audit trail for every session and decision.',
          ],
        },
      },
      {
        type: 'callout',
        title: { tr: 'Ölçek ve denetim için tasarlandı', en: 'Built for scale and audit' },
        text: {
          tr: 'Bir düzenleyici bir müşterinin neden onaylandığını sorduğunda, cevap tek tık uzakta olmalı. Studio her kararın arkasındaki kanıtı kaydeder.',
          en: 'When a regulator asks why a customer was approved, the answer should be one click away. Studio records the evidence behind every decision.',
        },
        icon: 'file-check',
      },
      {
        type: 'quote',
        text: {
          tr: 'Doğrulama bir andır. KYC bir sistemdir. Studio, sistemi işlettiğiniz yerdir.',
          en: 'Verification is a moment. KYC is a system. Studio is how you run the system.',
        },
        cite: { tr: 'Smartvist ürün ilkeleri', en: 'Smartvist product principles' },
      },
    ],
  },
  {
    slug: 'smartid-agent-remote-identification',
    title: {
      tr: 'Uzaktan Kimlik Tespitinde Yeni Bir Çağ: SmartID Agent',
      en: 'A New Era in Remote Identification: SmartID Agent',
    },
    excerpt: {
      tr: 'Finans kurumları için uzaktan kimlik tespiti yalnızca dijitalleşmekle ilgili değil — süreci aynı anda daha verimli, izlenebilir ve sürdürülebilir kılmakla ilgili. SmartID Agent tam olarak buna yanıt verir.',
      en: 'For financial institutions, remote identity proofing is not only about going digital — it is about making the process more efficient, traceable and sustainable at the same time. SmartID Agent answers exactly that.',
    },
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
        text: {
          tr: 'Finans kurumları için uzaktan kimlik tespitindeki asıl zorluk basitçe dijitalleşmek değil — süreci aynı anda daha verimli, daha izlenebilir ve daha sürdürülebilir kılmaktır. SmartID Agent bizim yanıtımız.',
          en: 'For financial institutions, the real challenge in remote identity proofing is not simply going digital — it is making the process more efficient, more traceable and more sustainable all at once. SmartID Agent is our answer.',
        },
      },
      {
        type: 'paragraph',
        text: {
          tr: 'İnsan liderliğindeki görüntülü kimlik tespiti kapsamlıdır ama pahalıdır ve ölçeklenmesi zordur — kuyruklar oluşur, temsilciler tükenir ve mesai saatleri dışında kapsama daralır. SmartID Agent, müşterilere sesli ve görüntülü rehberlik ederek doğrulamayı özerk ve günün her saati yürüten bir AI avatar sunar.',
          en: 'Human-led video identification is thorough but expensive and hard to scale — queues form, agents burn out, and coverage shrinks outside business hours. SmartID Agent introduces an AI avatar that guides customers through verification with voice and video, autonomously and around the clock.',
        },
      },
      {
        type: 'heading',
        text: { tr: 'Rehberlik eden bir avatar, ispatlayan bir kayıt', en: 'An avatar that guides, a record that proves' },
      },
      {
        type: 'list',
        items: {
          tr: [
            'Sesli ve görüntülü rehberlik müşteri kazanımını insan temsilci olmadan tamamlar.',
            'Her oturum tümüyle izlenebilir bir deneyim için uçtan uca kaydedilir.',
            'Uç durumlar gerektiğinde yine de bir insan temsilciye devredilebilir.',
            'Kapasite, gece gündüz talebe göre anında ölçeklenir.',
          ],
          en: [
            'Voice and video guidance completes onboarding without a human representative.',
            'Every session is recorded end-to-end for a fully traceable experience.',
            'Edge cases can still hand off to a human agent when needed.',
            'Capacity scales instantly with demand, day or night.',
          ],
        },
      },
      {
        type: 'callout',
        title: { tr: 'Titizlikten ödün vermeden verimlilik', en: 'Efficiency without losing rigour' },
        text: {
          tr: 'Otomasyon kuyruğu kaldırır, kanıtı değil. Her Agent oturumu, insan liderliğindeki bir oturum kadar denetlenebilirdir.',
          en: 'Automation removes the queue, not the evidence. Each Agent session is as auditable as a human-led one.',
        },
        icon: 'shield',
      },
      {
        type: 'stats',
        items: [
          { value: '7/24', label: { tr: 'Erişilebilirlik', en: 'Availability' } },
          { value: '100%', label: { tr: 'Kaydedilen oturum', en: 'Sessions recorded' } },
          { value: '0', label: { tr: 'Gerekli insan temsilci', en: 'Human agents required' } },
        ],
      },
    ],
  },
  {
    slug: 'ocr-icao-9303-document-authenticity',
    title: {
      tr: 'Güveni Okumak: OCR, ICAO 9303 ve Belge Orijinalliği',
      en: 'Reading Trust: OCR, ICAO 9303 and Document Authenticity',
    },
    excerpt: {
      tr: 'İyi bir OCR metni yazıya dökmekten fazlasını yapar. Kontrol basamaklarını doğrular, alanları karşılaştırır ve kurcalamayı işaretler — bir belge fotoğrafını doğrulanabilir kanıta dönüştürür.',
      en: 'Great OCR does more than transcribe text. It validates check digits, cross-references fields and flags tampering — turning a photo of a document into verifiable evidence.',
    },
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
        text: {
          tr: 'İyi bir OCR, bir görüntüdeki metni yazıya dökmekten çok daha fazlasını yapar. Kontrol basamaklarını doğrular, alanları birbiriyle karşılaştırır ve kurcalama belirtilerini işaretler — basit bir fotoğrafı doğrulanabilir kanıta dönüştürür.',
          en: 'Great OCR does far more than transcribe text from an image. It validates check digits, cross-references fields against each other and flags signs of tampering — turning a simple photo into verifiable evidence.',
        },
      },
      {
        type: 'paragraph',
        text: {
          tr: 'Bir pasaportun altındaki makine tarafından okunabilir bölge, iki gizemli karakter satırı gibi görünür. Aslında ICAO 9303 tarafından tanımlanan, dikkatle yapılandırılmış ve kendini denetleyen bir veri formatıdır; bir okuyucunun yanlış okumayı ya da bir değişikliği anında tespit etmesini sağlayan kontrol basamakları içerir.',
          en: 'The Machine-Readable Zone at the bottom of a passport looks like two cryptic lines of characters. In fact it is a carefully structured, self-checking data format defined by ICAO 9303, with check digits that let a reader detect a misread or an alteration immediately.',
        },
      },
      {
        type: 'steps',
        title: { tr: 'Smartvist bir belgeyi nasıl okur', en: 'How Smartvist reads a document' },
        items: [
          {
            title: { tr: 'Yakala ve normalize et', en: 'Capture & normalise' },
            text: {
              tr: 'Belgeyi tespit et, temiz bir okuma için perspektifi ve aydınlatmayı düzelt.',
              en: 'Detect the document, correct perspective and lighting for a clean read.',
            },
          },
          {
            title: { tr: 'Alanları çıkar', en: 'Extract fields' },
            text: {
              tr: 'Hem görsel bölgeyi hem de MRZ’yi oku, ardından bunları yapılandırılmış veriye eşle.',
              en: 'Read both the visual zone and the MRZ, then map them to structured data.',
            },
          },
          {
            title: { tr: 'Doğrula', en: 'Validate' },
            text: {
              tr: 'MRZ kontrol basamaklarını doğrula ve görsel ile makine tarafından okunabilir verinin uyuştuğunu teyit et.',
              en: 'Verify MRZ check digits and confirm the visual and machine-readable data agree.',
            },
          },
          {
            title: { tr: 'Anormallikleri işaretle', en: 'Flag anomalies' },
            text: {
              tr: 'Kurcalamaya işaret eden uyuşmazlıkları, yazı tipi düzensizliklerini ya da düzenlemeleri ortaya çıkar.',
              en: 'Surface mismatches, font irregularities or edits that suggest tampering.',
            },
          },
        ],
      },
      {
        type: 'callout',
        title: { tr: 'Karşılaştırma, okumayı geride bırakır', en: 'Cross-checking beats reading' },
        text: {
          tr: 'Bir sahtekâr bir ismi kopyalayabilir. Basılı veriyi, MRZ kontrol basamaklarını ve çipi hep birden uyumlu hâle getirmek çok daha zordur. Asıl sinyal tutarlılıktır.',
          en: 'A forger can copy a name. It is far harder to make the printed data, the MRZ check digits and the chip all agree. Consistency is the real signal.',
        },
        icon: 'file-check',
      },
      {
        type: 'paragraph',
        text: {
          tr: 'Çıkarma ve doğrulamayı tek bir süreç olarak ele alan Smartvist, sıradan bir belge fotoğrafını ya birbirini tutan ya da tutmayan bir dizi iddiaya dönüştürür — nesnel olarak ve bir saniyenin altında.',
          en: 'By treating extraction and validation as one process, Smartvist converts an ordinary document photo into a set of claims that either hold together or do not — objectively, and in under a second.',
        },
      },
    ],
  },
  {
    slug: 'nfc-chip-verification-explained',
    title: {
      tr: 'Çipin İçinde: NFC Doğrulaması Dolandırıcılığı Nasıl Durdurur',
      en: 'Inside the Chip: How NFC Verification Stops Fraud',
    },
    excerpt: {
      tr: 'Modern bir pasaport veya kimliğin içindeki çip, sahibinin verilerinin kriptografik olarak imzalanmış bir kopyasını taşır. Bunu NFC üzerinden okumak, uzaktan müşteri kazanımındaki en güçlü kontrollerden biridir.',
      en: 'The chip inside a modern passport or ID carries a cryptographically signed copy of the holder’s data. Reading it over NFC is one of the strongest checks available in remote onboarding.',
    },
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
        text: {
          tr: 'Modern bir pasaport ya da kimlik kartına gömülü çip, sahibinin verilerinin kriptografik olarak imzalanmış bir kopyasını taşır. Bunu NFC üzerinden okumak, uzaktan müşteri kazanımında mevcut olan en güçlü ve taklit edilmesi en zor kontrollerden biridir.',
          en: 'The chip embedded in a modern passport or ID card carries a cryptographically signed copy of the holder’s data. Reading it over NFC is one of the strongest, hardest-to-forge checks available in remote onboarding.',
        },
      },
      {
        type: 'paragraph',
        text: {
          tr: 'OCR basılı olanı okurken, NFC düzenleyen makamın imzaladığını okur. Bu fark önemlidir: çipin içeriği, tespit edilmeden sahtecilik yapmayı son derece zorlaştıran kriptografik mekanizmalarla korunur.',
          en: 'Where OCR reads what is printed, NFC reads what the issuing authority signed. That difference matters: the chip’s contents are protected by cryptographic mechanisms that make undetected forgery extremely difficult.',
        },
      },
      {
        type: 'list',
        items: {
          tr: [
            'Pasif kimlik doğrulama, çip verisinin meşru bir düzenleyici tarafından imzalandığını ve değiştirilmediğini doğrular.',
            'Aktif kimlik doğrulama, çipin kendisinin gerçek olduğunu ve bir klon olmadığını kanıtlar.',
            'Çipin fotoğrafı, kişiye ekstra bir bağ için canlı bir selfie ile eşleştirilebilir.',
          ],
          en: [
            'Passive authentication verifies that the chip data was signed by a legitimate issuer and has not been altered.',
            'Active authentication proves the chip itself is genuine and not a clone.',
            'The chip’s photo can be matched against a live selfie for an extra binding to the person.',
          ],
        },
      },
      {
        type: 'callout',
        title: { tr: 'NFC neden bu kadar güçlü', en: 'Why NFC is so powerful' },
        text: {
          tr: 'Basılı bir sahtecilik yalnızca bir kamerayı kandırmak zorundadır. Çip sahteciliği ise ulusal bir makam tarafından imzalanmış kriptografiyi aşmak zorundadır — temelde çok daha zor bir problem.',
          en: 'A printed forgery has to fool a camera. A chip forgery has to defeat cryptography signed by a national authority — a fundamentally harder problem.',
        },
        icon: 'shield',
      },
      {
        type: 'quote',
        text: {
          tr: 'Çip, bir belgeyi yalnızca nasıl göründüğüne göre değil, onu düzenleyen makama karşı doğrulamamızı sağlar.',
          en: 'The chip lets us verify a document against the authority that issued it, not just against how it looks.',
        },
        cite: { tr: 'Smartvist mühendisliği', en: 'Smartvist engineering' },
      },
      {
        type: 'paragraph',
        text: {
          tr: 'Smartvist çipi doğrudan cihaz üzerinde NFC ile okur, imzalarını doğrular ve OCR ile biyometrik veriyle karşılaştırır — basılı olan, imzalanan ve mevcut olan kişi arasındaki döngüyü kapatır.',
          en: 'Smartvist reads the chip directly on-device over NFC, validates its signatures and cross-checks it against the OCR and biometric data — closing the loop between what is printed, what is signed and who is present.',
        },
      },
    ],
  },
  {
    slug: 'aml-risk-screening-onboarding',
    title: {
      tr: 'KYC’nin Ötesinde: Dijital Müşteri Kazanımında AML Taraması',
      en: 'Beyond KYC: AML Screening in Digital Onboarding',
    },
    excerpt: {
      tr: 'Birinin kim olduğunu doğrulamak sorunun yalnızca yarısını yanıtlar. AML taraması, o kişiyi kazanmanın risk taşıyıp taşımadığını sorar — yaptırımları, izleme listelerini ve davranışsal sinyalleri gerçek zamanlı kontrol eder.',
      en: 'Verifying who someone is answers only half the question. AML screening asks whether onboarding them carries risk — checking sanctions, watchlists and behavioural signals in real time.',
    },
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
        text: {
          tr: 'Birinin kim olduğunu doğrulamak sorunun yalnızca yarısını yanıtlar. Kara para aklamayı önleme taraması ikinci bir soru sorar: bu kişiyi kazanmak risk taşıyor mu? En güçlü programlar her ikisini de aynı akış içinde yanıtlar.',
          en: 'Verifying who someone is answers only half the question. Anti-money-laundering screening asks a second one: does onboarding this person carry risk? The strongest programmes answer both in the same flow.',
        },
      },
      {
        type: 'paragraph',
        text: {
          tr: 'Kusursuz derecede gerçek bir kimlik yine de yaptırım uygulanan bir kişiye ya da yüksek riskli bir profile ait olabilir. Kimlik doğrulama ile AML taramasının birlikte gitmesinin nedeni budur — doğrulanmış bir kimlik, taramayı anlamlı kılan şeyin ta kendisidir.',
          en: 'A perfectly genuine identity can still belong to a sanctioned individual or a high-risk profile. That is why identity verification and AML screening belong together — a confirmed identity is exactly what makes screening meaningful.',
        },
      },
      {
        type: 'heading',
        text: { tr: 'Risk sinyali katmanları', en: 'Layers of risk signal' },
      },
      {
        type: 'list',
        items: {
          tr: [
            'Doğrulanmış bir kimliğe karşı yaptırım ve izleme listesi taraması.',
            'Gerektiğinde PEP (siyasi nüfuz sahibi kişi) kontrolleri.',
            'Müşteri kazanımı sırasında toplanan davranışsal ve süreç düzeyindeki risk sinyalleri.',
            'Risk iştahına göre onaylamak, yükseltmek veya reddetmek için yapılandırılabilir kurallar.',
          ],
          en: [
            'Sanctions and watchlist screening against a verified identity.',
            'PEP (politically exposed person) checks where required.',
            'Behavioural and process-level risk signals gathered during onboarding.',
            'Configurable rules to approve, escalate or decline based on risk appetite.',
          ],
        },
      },
      {
        type: 'callout',
        title: { tr: 'Önce kimlik, sonra risk', en: 'Identity first, risk second' },
        text: {
          tr: 'Tarama, yalnızca bağlı olduğu kimlik kadar iyidir. Önce kişiyi doğrulamak, bir AML eşleşmesini — ya da net bir geçişi — güvenilir kılan şeydir.',
          en: 'Screening is only as good as the identity it is attached to. Verifying the person first is what makes an AML hit — or a clear pass — trustworthy.',
        },
        icon: 'shield',
      },
      {
        type: 'steps',
        title: { tr: 'Akış içinde tarama', en: 'Screening in the flow' },
        items: [
          {
            title: { tr: 'Kimliği doğrula', en: 'Verify identity' },
            text: {
              tr: 'Kişinin kim olduğunu belge, çip ve biyometrik kontrollerle belirle.',
              en: 'Establish who the person is with document, chip and biometric checks.',
            },
          },
          {
            title: { tr: 'Riske karşı tara', en: 'Screen against risk' },
            text: {
              tr: 'Doğrulanmış kimliği yaptırımlara, izleme listelerine ve PEP verisine karşı kontrol et.',
              en: 'Check the confirmed identity against sanctions, watchlists and PEP data.',
            },
          },
          {
            title: { tr: 'Kurallarla karar ver', en: 'Decide with rules' },
            text: {
              tr: 'Onaylamak, yükseltmek veya reddetmek için kurumun kendi eşiklerini uygula.',
              en: 'Apply the institution’s own thresholds to approve, escalate or decline.',
            },
          },
        ],
      },
      {
        type: 'quote',
        text: {
          tr: 'KYC size kapıdan kimin girdiğini söyler. AML ise onu içeri almanız gerekip gerekmediğini söyler.',
          en: 'KYC tells you who walked through the door. AML tells you whether you should have let them in.',
        },
        cite: { tr: 'Mert Özkan, Uyum ve Risk', en: 'Mert Özkan, Compliance & Risk' },
      },
    ],
  },
  {
    slug: 'liveness-deepfake-defense',
    title: {
      tr: 'Deepfake’leri Yenmek: 2026’da Canlılık Tespiti',
      en: 'Defeating Deepfakes: Liveness Detection in 2026',
    },
    excerpt: {
      tr: 'Üretken modeller sahte yüzleri üretmeyi önemsiz hâle getirdikçe, canlılık tespiti biyometrik güvenliğin ön saflarına geçti. İşte modern canlılığın gerçek bir kişiyi inandırıcı bir sahteciden nasıl ayırdığı.',
      en: 'As generative models make fake faces trivial to produce, liveness detection has become the front line of biometric security. Here is how modern liveness tells a real person from a convincing fake.',
    },
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
        text: {
          tr: 'Üretken modeller inandırıcı sahte yüzleri üretmeyi önemsiz hâle getirdikçe, canlılık tespiti biyometrik güvenliğin ön saflarına geçti. Soru artık yalnızca “bu yüz eşleşiyor mu?” değil, “bu gerçekten canlı ve mevcut bir insan mı?”',
          en: 'As generative models make convincing fake faces trivial to produce, liveness detection has become the front line of biometric security. The question is no longer only “does this face match?” but “is this a real, present human at all?”',
        },
      },
      {
        type: 'paragraph',
        text: {
          tr: 'Sunum saldırıları eskiden basılı bir fotoğraf ya da kameraya tutulan bir maske anlamına gelirdi. Bugün ise yüksek kaliteli deepfake videoyu ve enjekte edilmiş kamera akışlarını içeriyor. Bunlara karşı savunma tek bir hileden fazlasını gerektirir.',
          en: 'Presentation attacks used to mean a printed photo or a mask held up to a camera. Today they include high-quality deepfake video and injected camera feeds. Defending against them requires more than a single trick.',
        },
      },
      {
        type: 'heading',
        text: { tr: 'Aktif ve pasif, birlikte çalışarak', en: 'Active and passive, working together' },
      },
      {
        type: 'list',
        items: {
          tr: [
            'Pasif canlılık, tek bir yakalamadan derinliği, dokuyu ve mikro sinyalleri analiz eder; kullanıcı çabası gerektirmez.',
            'Aktif canlılık, yanıt veren ve mevcut bir kişiyi teyit etmek için küçük eylemler ister.',
            'Sunum saldırısı tespiti maskeleri, ekranları, çıktıları ve tekrarları hedefler.',
            'Enjeksiyon ve deepfake savunmaları yakalama hattının kendisini korur.',
          ],
          en: [
            'Passive liveness analyses depth, texture and micro-signals from a single capture, with no user effort.',
            'Active liveness prompts small actions to confirm a responsive, present person.',
            'Presentation-attack detection targets masks, screens, printouts and replays.',
            'Injection and deepfake defences guard the capture pipeline itself.',
          ],
        },
      },
      {
        type: 'callout',
        title: { tr: 'Derinlemesine savunma', en: 'Defence in depth' },
        text: {
          tr: 'Hiçbir tek kontrol yenilmez değildir. Bağımsız sinyalleri katmanlamak, birini kandıran bir saldırının diğerlerine karşı başarısız olmasını sağlayan şeydir.',
          en: 'No single check is unbeatable. Layering independent signals is what makes an attack that fools one of them fail against the rest.',
        },
        icon: 'radar',
      },
      {
        type: 'stats',
        items: [
          { value: 'NIST', label: { tr: 'Düzeyinde biyometri', en: 'Grade biometrics' } },
          { value: '2', label: { tr: 'Canlılık modu', en: 'Liveness modes' } },
          { value: 'Gerçek zamanlı', label: { tr: 'Saldırı tespiti', en: 'Attack detection' } },
        ],
      },
      {
        type: 'quote',
        text: {
          tr: 'Canlılığın amacı söylemesi kolay, başarması zordur: kameranın diğer tarafında gerçek ve mevcut bir insan olduğunu kanıtlamak.',
          en: 'The goal of liveness is simple to state and hard to achieve: prove there is a real, present human on the other side of the camera.',
        },
        cite: { tr: 'Selda Arslan, Biyometri Lideri', en: 'Selda Arslan, Biometrics Lead' },
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

export function formatDate(iso: string, locale: Locale = 'en'): string {
  return new Date(iso).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
