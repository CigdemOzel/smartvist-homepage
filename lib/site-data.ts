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

export type NavLink = { label: string; href: string }

export const navLinks: NavLink[] = [
  { label: 'Platform', href: '/#ecosystem' },
  { label: 'How it works', href: '/#journey' },
  { label: 'Products', href: '/#products' },
  { label: 'Technology', href: '/#technology' },
  { label: 'Blog', href: '/blog' },
]

export type JourneyStep = {
  id: string
  label: string
  title: string
  description: string
  icon: LucideIcon
}

export const journeySteps: JourneyStep[] = [
  {
    id: 'document',
    label: 'Document',
    title: 'Capture the ID document',
    description:
      'The customer photographs a passport or ID card. On-device capture guidance ensures a clean, glare-free scan every time.',
    icon: FileCheck2,
  },
  {
    id: 'ocr',
    label: 'OCR',
    title: 'Read & validate the data',
    description:
      'ICAO 9303-compliant OCR extracts every field and runs document authenticity checks to flag tampering instantly.',
    icon: ScanLine,
  },
  {
    id: 'face',
    label: 'Face match',
    title: 'Match the face to the ID',
    description:
      'NIST-grade 1:1 and 1:N biometric matching confirms the person holding the document is its rightful owner.',
    icon: ScanFace,
  },
  {
    id: 'liveness',
    label: 'Liveness',
    title: 'Confirm a live person',
    description:
      'Active and passive liveness detection defends against masks, deepfakes and presentation attacks in real time.',
    icon: Radar,
  },
  {
    id: 'nfc',
    label: 'NFC',
    title: 'Read the secure chip',
    description:
      'Contactless NFC reads the document chip with passive and active authentication and cryptographic verification.',
    icon: Nfc,
  },
  {
    id: 'ai',
    label: 'AI analysis',
    title: 'Score behavioural risk',
    description:
      'Fraud-detection models weigh behavioural signals and process-level risk to surface anything that needs a second look.',
    icon: BrainCircuit,
  },
  {
    id: 'decision',
    label: 'Decision',
    title: 'Route the decision',
    description:
      'Approve automatically, escalate to an expert video call, or decline — all driven by your own configurable rules.',
    icon: Video,
  },
  {
    id: 'verified',
    label: 'Verified',
    title: 'Verified in seconds',
    description:
      'A fully auditable, compliant onboarding is complete — with every step recorded for review and reporting.',
    icon: ShieldCheck,
  },
]

export type Product = {
  id: string
  name: string
  tagline: string
  description: string
  bullets: string[]
  surface: 'sdk' | 'studio' | 'agent'
}

export const products: Product[] = [
  {
    id: 'sdk',
    name: 'SmartID SDK',
    tagline: 'End-to-end verification, on device',
    description:
      'Drop verification into your own mobile app. OCR, NFC and liveness run entirely on-device for high performance and data privacy.',
    bullets: [
      'On-device architecture keeps sensitive data on the phone',
      'Android (Kotlin, Java), iOS (Swift), React Native & Flutter',
      'Re-trigger verification steps live during a video call',
    ],
    surface: 'sdk',
  },
  {
    id: 'studio',
    name: 'SmartID Studio',
    tagline: 'Command centre for every verification',
    description:
      'Manage and monitor verification flows in real time. Agents can restart steps mid-call and every session is logged for audit.',
    bullets: [
      'Real-time monitoring of every verification session',
      'Restart individual steps during a live video call',
      'One platform for analysis, audit and operational control',
    ],
    surface: 'studio',
  },
  {
    id: 'agent',
    name: 'SmartID Agent',
    tagline: 'A live avatar that guides the user',
    description:
      'An AI avatar walks customers through verification with voice and video guidance — no human agent required, fully recorded.',
    bullets: [
      'Voice and video guidance completes onboarding autonomously',
      'No customer representative needed for a secure flow',
      'End-to-end recorded for a fully traceable experience',
    ],
    surface: 'agent',
  },
]

export type Technology = {
  name: string
  icon: LucideIcon
  points: string[]
}

export const technologies: Technology[] = [
  {
    name: 'OCR & Document Verification',
    icon: ScanLine,
    points: ['ICAO 9303-compliant reading', 'OCR data extraction & validation', 'Document tampering checks'],
  },
  {
    name: 'NFC & Chip Verification',
    icon: Nfc,
    points: ['Contactless chip reading', 'Passive & active authentication', 'Cryptographic data control'],
  },
  {
    name: 'Face Recognition & Match',
    icon: ScanFace,
    points: ['1:1 and 1:N face matching', 'NIST-compliant biometrics', 'Real-time face analysis'],
  },
  {
    name: 'Liveness Detection',
    icon: Radar,
    points: ['Active & passive liveness', 'Presentation-attack protection', 'AI-powered analysis'],
  },
  {
    name: 'Video Call Technology',
    icon: Video,
    points: ['Real-time video verification', 'Agent-assisted process control', 'Secure WebRTC connection'],
  },
  {
    name: 'AI & Risk Analysis',
    icon: BrainCircuit,
    points: ['Behavioural risk analysis', 'Fraud-detection mechanisms', 'Process-level risk signals'],
  },
]

export type Industry = {
  name: string
  description: string
  icon: LucideIcon
}

export const industries: Industry[] = [
  {
    name: 'Banking',
    description: 'Seamless onboarding that meets strict regulation while preventing fraud.',
    icon: Landmark,
  },
  {
    name: 'Fintech & Crypto',
    description: 'Speed, quality and security that match demanding customer expectations.',
    icon: Bitcoin,
  },
  {
    name: 'Telecommunications',
    description: 'Remote SIM activation, PoS automation and self-service applications.',
    icon: Signal,
  },
  {
    name: 'Retail & E-commerce',
    description: 'Secure, personalised shopping with advanced document verification.',
    icon: ShoppingBag,
  },
  {
    name: 'Travel & Hospitality',
    description: 'Meet new safety standards while protecting passenger data and service.',
    icon: Plane,
  },
  {
    name: 'Health & Insurance',
    description: 'Digitised, verified data for secure remote and contactless services.',
    icon: HeartPulse,
  },
]

export type Solution = {
  name: string
  description: string
  icon: LucideIcon
}

export const solutions: Solution[] = [
  {
    name: 'Customer Acquisition',
    description: 'Efficient, fast and friendly digital onboarding that lifts conversion.',
    icon: UserPlus,
  },
  {
    name: 'KYC & KYB Automation',
    description: 'Automate Know Your Customer and Know Your Business for faster, precise checks.',
    icon: FileCheck2,
  },
  {
    name: 'Fraud Prevention',
    description: 'Advanced technology detects and prevents fraud while ensuring compliance.',
    icon: ShieldCheck,
  },
]

export const stats = [
  { value: '35+', label: 'Institutions onboarded' },
  { value: '6', label: 'Verification technologies' },
  { value: '4', label: 'Mobile platforms supported' },
  { value: '100%', label: 'On-device data processing' },
]
