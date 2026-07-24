import {
  ScanLine,
  Nfc,
  ScanFace,
  Radar,
  Video,
  BrainCircuit,
  Landmark,
  Bitcoin,
  Signal,
  ShoppingBag,
  Plane,
  HeartPulse,
  ShieldCheck,
  UserPlus,
  FileCheck2,
  type LucideIcon,
} from 'lucide-react'
import type { Localized } from './i18n'

export type NavLink = { label: Localized; href: string }

export const navLinks: NavLink[] = [
  { label: { tr: 'Platform', en: 'Platform' }, href: '/#ecosystem' },
  { label: { tr: 'Nasıl çalışır', en: 'How it works' }, href: '/#journey' },
  { label: { tr: 'Ürünler', en: 'Products' }, href: '/#products' },
  { label: { tr: 'Teknoloji', en: 'Technology' }, href: '/#technology' },
  { label: { tr: 'Blog', en: 'Blog' }, href: '/blog' },
]

export type JourneyStep = {
  id: string
  label: Localized
  title: Localized
  description: Localized
  icon: LucideIcon
}

export const journeySteps: JourneyStep[] = [
  {
    id: 'document',
    label: { tr: 'Belge', en: 'Document' },
    title: { tr: 'Kimlik belgesini yakala', en: 'Capture the ID document' },
    description: {
      tr: 'Müşteri pasaportunu veya kimlik kartını fotoğraflar. Cihaz üzerindeki yakalama rehberi, her seferinde temiz ve parlamasız bir tarama sağlar.',
      en: 'The customer photographs a passport or ID card. On-device capture guidance ensures a clean, glare-free scan every time.',
    },
    icon: FileCheck2,
  },
  {
    id: 'ocr',
    label: { tr: 'OCR', en: 'OCR' },
    title: { tr: 'Veriyi oku ve doğrula', en: 'Read & validate the data' },
    description: {
      tr: 'ICAO 9303 uyumlu OCR her alanı çıkarır ve kurcalamayı anında işaretlemek için belge orijinallik kontrolleri yapar.',
      en: 'ICAO 9303-compliant OCR extracts every field and runs document authenticity checks to flag tampering instantly.',
    },
    icon: ScanLine,
  },
  {
    id: 'face',
    label: { tr: 'Yüz eşleştirme', en: 'Face match' },
    title: { tr: 'Yüzü kimlikle eşleştir', en: 'Match the face to the ID' },
    description: {
      tr: 'NIST düzeyinde 1:1 ve 1:N biyometrik eşleştirme, belgeyi tutan kişinin gerçek sahibi olduğunu doğrular.',
      en: 'NIST-grade 1:1 and 1:N biometric matching confirms the person holding the document is its rightful owner.',
    },
    icon: ScanFace,
  },
  {
    id: 'liveness',
    label: { tr: 'Canlılık', en: 'Liveness' },
    title: { tr: 'Canlı bir kişi olduğunu doğrula', en: 'Confirm a live person' },
    description: {
      tr: 'Aktif ve pasif canlılık tespiti; maskelere, deepfake ve sunum saldırılarına karşı gerçek zamanlı savunma sağlar.',
      en: 'Active and passive liveness detection defends against masks, deepfakes and presentation attacks in real time.',
    },
    icon: Radar,
  },
  {
    id: 'nfc',
    label: { tr: 'NFC', en: 'NFC' },
    title: { tr: 'Güvenli çipi oku', en: 'Read the secure chip' },
    description: {
      tr: 'Temassız NFC, belge çipini pasif ve aktif kimlik doğrulama ile kriptografik olarak okuyup doğrular.',
      en: 'Contactless NFC reads the document chip with passive and active authentication and cryptographic verification.',
    },
    icon: Nfc,
  },
  {
    id: 'ai',
    label: { tr: 'AI analizi', en: 'AI analysis' },
    title: { tr: 'Davranışsal riski puanla', en: 'Score behavioural risk' },
    description: {
      tr: 'Dolandırıcılık tespiti modelleri davranışsal sinyalleri ve süreç düzeyindeki riski değerlendirerek ikinci bir bakış gerektiren her şeyi ortaya çıkarır.',
      en: 'Fraud-detection models weigh behavioural signals and process-level risk to surface anything that needs a second look.',
    },
    icon: BrainCircuit,
  },
  {
    id: 'decision',
    label: { tr: 'Karar', en: 'Decision' },
    title: { tr: 'Kararı yönlendir', en: 'Route the decision' },
    description: {
      tr: 'Otomatik onayla, bir uzman görüntülü aramasına yönlendir ya da reddet — tamamı kendi yapılandırılabilir kurallarınızla.',
      en: 'Approve automatically, escalate to an expert video call, or decline — all driven by your own configurable rules.',
    },
    icon: Video,
  },
  {
    id: 'verified',
    label: { tr: 'Doğrulandı', en: 'Verified' },
    title: { tr: 'Saniyeler içinde doğrulandı', en: 'Verified in seconds' },
    description: {
      tr: 'Tamamen denetlenebilir ve uyumlu bir müşteri kazanımı tamamlandı — her adım inceleme ve raporlama için kaydedildi.',
      en: 'A fully auditable, compliant onboarding is complete — with every step recorded for review and reporting.',
    },
    icon: ShieldCheck,
  },
]

export type Product = {
  id: string
  name: string
  tagline: Localized
  description: Localized
  bullets: Localized<string[]>
  surface: 'sdk' | 'studio' | 'agent'
}

export const products: Product[] = [
  {
    id: 'sdk',
    name: 'SmartID SDK',
    tagline: { tr: 'Uçtan uca doğrulama, cihaz üzerinde', en: 'End-to-end verification, on device' },
    description: {
      tr: 'Doğrulamayı kendi mobil uygulamanıza ekleyin. OCR, NFC ve canlılık, yüksek performans ve veri gizliliği için tamamen cihaz üzerinde çalışır.',
      en: 'Drop verification into your own mobile app. OCR, NFC and liveness run entirely on-device for high performance and data privacy.',
    },
    bullets: {
      tr: [
        'Cihaz üzerinde mimari hassas verileri telefonda tutar',
        'Android (Kotlin, Java), iOS (Swift), React Native ve Flutter',
        'Görüntülü arama sırasında doğrulama adımlarını canlı olarak yeniden tetikleyin',
      ],
      en: [
        'On-device architecture keeps sensitive data on the phone',
        'Android (Kotlin, Java), iOS (Swift), React Native & Flutter',
        'Re-trigger verification steps live during a video call',
      ],
    },
    surface: 'sdk',
  },
  {
    id: 'studio',
    name: 'SmartID Studio',
    tagline: { tr: 'Her doğrulama için komuta merkezi', en: 'Command centre for every verification' },
    description: {
      tr: 'Doğrulama akışlarını gerçek zamanlı yönetin ve izleyin. Temsilciler arama sırasında adımları yeniden başlatabilir ve her oturum denetim için kaydedilir.',
      en: 'Manage and monitor verification flows in real time. Agents can restart steps mid-call and every session is logged for audit.',
    },
    bullets: {
      tr: [
        'Her doğrulama oturumunun gerçek zamanlı izlenmesi',
        'Canlı görüntülü arama sırasında tek tek adımları yeniden başlatın',
        'Analiz, denetim ve operasyonel kontrol için tek platform',
      ],
      en: [
        'Real-time monitoring of every verification session',
        'Restart individual steps during a live video call',
        'One platform for analysis, audit and operational control',
      ],
    },
    surface: 'studio',
  },
  {
    id: 'agent',
    name: 'SmartID Agent',
    tagline: { tr: 'Kullanıcıya rehberlik eden canlı bir avatar', en: 'A live avatar that guides the user' },
    description: {
      tr: 'Bir AI avatar, müşterilere sesli ve görüntülü rehberlikle doğrulama boyunca eşlik eder — insan temsilciye gerek yok, tamamen kayıt altında.',
      en: 'An AI avatar walks customers through verification with voice and video guidance — no human agent required, fully recorded.',
    },
    bullets: {
      tr: [
        'Sesli ve görüntülü rehberlik müşteri kazanımını özerk şekilde tamamlar',
        'Güvenli bir akış için müşteri temsilcisine gerek yok',
        'Tamamen izlenebilir bir deneyim için uçtan uca kayıt',
      ],
      en: [
        'Voice and video guidance completes onboarding autonomously',
        'No customer representative needed for a secure flow',
        'End-to-end recorded for a fully traceable experience',
      ],
    },
    surface: 'agent',
  },
]

export type Technology = {
  name: Localized
  icon: LucideIcon
  points: Localized<string[]>
}

export const technologies: Technology[] = [
  {
    name: { tr: 'OCR ve Belge Doğrulama', en: 'OCR & Document Verification' },
    icon: ScanLine,
    points: {
      tr: ['ICAO 9303 uyumlu okuma', 'OCR ile veri çıkarma ve doğrulama', 'Belge kurcalama kontrolleri'],
      en: ['ICAO 9303-compliant reading', 'OCR data extraction & validation', 'Document tampering checks'],
    },
  },
  {
    name: { tr: 'NFC ve Çip Doğrulama', en: 'NFC & Chip Verification' },
    icon: Nfc,
    points: {
      tr: ['Temassız çip okuma', 'Pasif ve aktif kimlik doğrulama', 'Kriptografik veri kontrolü'],
      en: ['Contactless chip reading', 'Passive & active authentication', 'Cryptographic data control'],
    },
  },
  {
    name: { tr: 'Yüz Tanıma ve Eşleştirme', en: 'Face Recognition & Match' },
    icon: ScanFace,
    points: {
      tr: ['1:1 ve 1:N yüz eşleştirme', 'NIST uyumlu biyometri', 'Gerçek zamanlı yüz analizi'],
      en: ['1:1 and 1:N face matching', 'NIST-compliant biometrics', 'Real-time face analysis'],
    },
  },
  {
    name: { tr: 'Canlılık Tespiti', en: 'Liveness Detection' },
    icon: Radar,
    points: {
      tr: ['Aktif ve pasif canlılık', 'Sunum saldırısı koruması', 'AI destekli analiz'],
      en: ['Active & passive liveness', 'Presentation-attack protection', 'AI-powered analysis'],
    },
  },
  {
    name: { tr: 'Görüntülü Arama Teknolojisi', en: 'Video Call Technology' },
    icon: Video,
    points: {
      tr: ['Gerçek zamanlı görüntülü doğrulama', 'Temsilci destekli süreç kontrolü', 'Güvenli WebRTC bağlantısı'],
      en: ['Real-time video verification', 'Agent-assisted process control', 'Secure WebRTC connection'],
    },
  },
  {
    name: { tr: 'AI ve Risk Analizi', en: 'AI & Risk Analysis' },
    icon: BrainCircuit,
    points: {
      tr: ['Davranışsal risk analizi', 'Dolandırıcılık tespiti mekanizmaları', 'Süreç düzeyinde risk sinyalleri'],
      en: ['Behavioural risk analysis', 'Fraud-detection mechanisms', 'Process-level risk signals'],
    },
  },
]

export type Industry = {
  name: Localized
  description: Localized
  icon: LucideIcon
}

export const industries: Industry[] = [
  {
    name: { tr: 'Bankacılık', en: 'Banking' },
    description: {
      tr: 'Dolandırıcılığı önlerken sıkı düzenlemelere uyan kesintisiz müşteri kazanımı.',
      en: 'Seamless onboarding that meets strict regulation while preventing fraud.',
    },
    icon: Landmark,
  },
  {
    name: { tr: 'Fintech ve Kripto', en: 'Fintech & Crypto' },
    description: {
      tr: 'Zorlu müşteri beklentilerine uygun hız, kalite ve güvenlik.',
      en: 'Speed, quality and security that match demanding customer expectations.',
    },
    icon: Bitcoin,
  },
  {
    name: { tr: 'Telekomünikasyon', en: 'Telecommunications' },
    description: {
      tr: 'Uzaktan SIM aktivasyonu, PoS otomasyonu ve self-servis başvurular.',
      en: 'Remote SIM activation, PoS automation and self-service applications.',
    },
    icon: Signal,
  },
  {
    name: { tr: 'Perakende ve E-ticaret', en: 'Retail & E-commerce' },
    description: {
      tr: 'Gelişmiş belge doğrulamayla güvenli, kişiselleştirilmiş alışveriş.',
      en: 'Secure, personalised shopping with advanced document verification.',
    },
    icon: ShoppingBag,
  },
  {
    name: { tr: 'Seyahat ve Konaklama', en: 'Travel & Hospitality' },
    description: {
      tr: 'Yolcu verilerini ve hizmeti korurken yeni güvenlik standartlarını karşılayın.',
      en: 'Meet new safety standards while protecting passenger data and service.',
    },
    icon: Plane,
  },
  {
    name: { tr: 'Sağlık ve Sigorta', en: 'Health & Insurance' },
    description: {
      tr: 'Güvenli uzaktan ve temassız hizmetler için dijitalleştirilmiş, doğrulanmış veri.',
      en: 'Digitised, verified data for secure remote and contactless services.',
    },
    icon: HeartPulse,
  },
]

export type Solution = {
  name: Localized
  description: Localized
  icon: LucideIcon
}

export const solutions: Solution[] = [
  {
    name: { tr: 'Müşteri Kazanımı', en: 'Customer Acquisition' },
    description: {
      tr: 'Dönüşümü artıran verimli, hızlı ve kullanıcı dostu dijital müşteri kazanımı.',
      en: 'Efficient, fast and friendly digital onboarding that lifts conversion.',
    },
    icon: UserPlus,
  },
  {
    name: { tr: 'KYC ve KYB Otomasyonu', en: 'KYC & KYB Automation' },
    description: {
      tr: 'Daha hızlı ve kesin kontroller için Müşterini Tanı ve İşletmeni Tanı süreçlerini otomatikleştirin.',
      en: 'Automate Know Your Customer and Know Your Business for faster, precise checks.',
    },
    icon: FileCheck2,
  },
  {
    name: { tr: 'Dolandırıcılık Önleme', en: 'Fraud Prevention' },
    description: {
      tr: 'Gelişmiş teknoloji, uyumu sağlarken dolandırıcılığı tespit eder ve önler.',
      en: 'Advanced technology detects and prevents fraud while ensuring compliance.',
    },
    icon: ShieldCheck,
  },
]

export type Stat = { value: string; label: Localized }

export const stats: Stat[] = [
  { value: '35+', label: { tr: 'Kazandırılan kurum', en: 'Institutions onboarded' } },
  { value: '6', label: { tr: 'Doğrulama teknolojisi', en: 'Verification technologies' } },
  { value: '4', label: { tr: 'Desteklenen mobil platform', en: 'Mobile platforms supported' } },
  { value: '100%', label: { tr: 'Cihaz üzerinde veri işleme', en: 'On-device data processing' } },
]
