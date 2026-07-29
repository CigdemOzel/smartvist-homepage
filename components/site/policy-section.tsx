'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { useT, type Localized } from '@/lib/i18n'

type PolicyItem = {
  id: string
  title: Localized
  content: Localized<string[]>
}

const policyItems: PolicyItem[] = [
  {
    id: 'scope',
    title: { tr: 'Kapsam ve Amaç', en: 'Scope and Purpose' },
    content: {
      tr: [
        'Bilgi varlıklarımızın korunmasına ve yönetimine büyük önem veriyoruz.',
        'Bilgilerimizin korunmasına yönetim, yönetime büyük kontroller geliştirmek ve uygulamak',
        'Bilgi güvenliğine yönelik kontroller geliştirmek ve uygulamak',
      ],
      en: [
        'We place great importance on the protection and management of our information assets.',
        'Develop and implement management controls for the protection of our information.',
        'Develop and implement controls for information security management.',
      ],
    },
  },
  {
    id: 'principles',
    title: { tr: 'Temel İlkeler', en: 'Core Principles' },
    content: {
      tr: [
        'Bilgi varlıklarını yönetmek, varlıkların güvenlik değerlerini, ihtiyaçlarını ve risklerini belirlemek',
        'Bilgi varlıklarını, değerleri, orijinallik kontrolleri geliştirmek ve uygulamak',
        'Tehditlerin varlıklar üzerindeki gizlilik, bütünlülük ve erişilebilirlik değerlerini belirlemek',
      ],
      en: [
        'Identify the information assets we own and determine their security values, needs and risks.',
        'Develop and implement controls for information asset protection and authenticity verification.',
        'Identify threats to the confidentiality, integrity and accessibility of assets.',
      ],
    },
  },
  {
    id: 'responsibilities',
    title: { tr: 'Sorumluluklar', en: 'Responsibilities' },
    content: {
      tr: [
        'Riskler işlenmesi için işlişma esaslarını ortaya koymak',
        'Teknolojik beklentileri gözden geçirerek riskler süreklı takip etmek',
        'Uyumluluğu sağlamak ve uyumluluk için gerekli yöntemleri tanımlamak',
      ],
      en: [
        'Establish principles for the processing and handling of risks.',
        'Continuously monitor risks by reviewing technological expectations.',
        'Ensure compliance and define necessary methods for compliance.',
      ],
    },
  },
  {
    id: 'data-protection',
    title: { tr: 'Veri Koruma', en: 'Data Protection' },
    content: {
      tr: [
        'Firmanın itibrarını geliştirmek ve bilgi güvenliği temelli olumsuz etkilerden korunmak',
        'Yasal mevzuat ve düzenlemelerden yasal ve ilgili mevzuatlarından kaynaklanması için uygulamalar yapılmak',
        'İş sürekliliğine yönelik bilgi güvenliği tedbirlerini etkin kılmak',
      ],
      en: [
        'Build company reputation and protect against negative impacts from information security breaches.',
        'Comply with legal regulations and implement necessary requirements.',
        'Enable information security measures for business continuity.',
      ],
    },
  },
  {
    id: 'incident-management',
    title: { tr: 'Olay Yönetimi', en: 'Incident Management' },
    content: {
      tr: [
        'Belki etkin bir kontrol altyapısı ile bilgi güvenliği seviyesini zaman içinde korumak',
        'Karşılıklı sözleşme, protokol ve benzeri anlaşmalarının içerdiği yükümülülüklere uyum temin etmek',
        'Gerçekleşebilecek bilgi güvenliği olaylarına hızlı müdahale etmek',
      ],
      en: [
        'Maintain information security levels over time with effective control infrastructure.',
        'Ensure compliance with mutual agreements, protocols and similar obligations.',
        'Respond quickly to potential information security incidents.',
      ],
    },
  },
]

export function PolicySection() {
  const [mainExpanded, setMainExpanded] = useState<boolean>(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const t = useT()

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            {t({
              tr: 'Bilgi Güvenliği Politikası',
              en: 'Security Policy',
            })}
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            {t({
              tr: 'Bilgilerimizin korunmasına ve yönetimine büyük önem veriyoruz.',
              en: 'We protect and manage your information with the highest standards.',
            })}
          </p>
        </div>

        {/* Level 1 Accordion - Main Policy */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: '-50px' }}
          className="overflow-hidden rounded-lg border border-border transition-all duration-300"
        >
          <button
            onClick={() => setMainExpanded(!mainExpanded)}
            className="group relative w-full"
          >
            {/* Background layers for hover effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-brand/3 via-transparent to-transparent"
              animate={{ opacity: mainExpanded ? 1 : 0 }}
              transition={{ duration: 0.25 }}
              pointer-events="none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand/2 via-accent/2 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Content */}
            <div className="relative flex items-center justify-between bg-card px-5 py-4 sm:px-6 sm:py-4 transition-colors duration-200 group-hover:bg-card/80">
              <h3 className="text-left font-display text-base font-semibold text-foreground sm:text-lg">
                {t({
                  tr: 'Bilgi Güvenliği Politikası',
                  en: 'Information Security Policy',
                })}
              </h3>
              <motion.div
                animate={{ rotate: mainExpanded ? 180 : 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="ml-3 shrink-0"
              >
                <ChevronDown className="h-5 w-5 text-muted-foreground transition-colors duration-200 group-hover:text-brand" />
              </motion.div>
            </div>
          </button>

          {/* Level 2 Accordions - Policy Sections */}
          <AnimatePresence>
            {mainExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="overflow-hidden border-t border-border bg-background/50"
              >
                <div className="space-y-2 px-5 py-4 sm:px-6 sm:py-5">
                  {policyItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.25 }}
                      className="overflow-hidden rounded-lg border border-border/50 transition-all duration-300"
                    >
                      <button
                        onClick={() => setExpandedSection(expandedSection === item.id ? null : item.id)}
                        className="group relative w-full"
                      >
                        {/* Background layers for hover effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-brand/2 via-transparent to-transparent"
                          animate={{ opacity: expandedSection === item.id ? 1 : 0 }}
                          transition={{ duration: 0.25 }}
                          pointer-events="none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-brand/1.5 via-accent/1.5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        {/* Content */}
                        <div className="relative flex items-center justify-between bg-card/50 px-4 py-3 sm:px-5 sm:py-3 transition-colors duration-200 group-hover:bg-card/70">
                          <h4 className="text-left font-display text-sm font-medium text-foreground sm:text-base">
                            {t(item.title)}
                          </h4>
                          <motion.div
                            animate={{ rotate: expandedSection === item.id ? 180 : 0 }}
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                            className="ml-3 shrink-0"
                          >
                            <ChevronDown className="h-4 w-4 text-muted-foreground/70 transition-colors duration-200 group-hover:text-brand" />
                          </motion.div>
                        </div>
                      </button>

                      {/* Level 3 Content - Section Details */}
                      <AnimatePresence>
                        {expandedSection === item.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="overflow-hidden border-t border-border/30 bg-background/30"
                          >
                            <div className="px-4 py-3 sm:px-5 sm:py-4">
                              <ul className="space-y-2">
                                {t(item.content).map((line: string, idx: number) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -6 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05, duration: 0.2 }}
                                    className="flex gap-2.5 text-xs leading-relaxed text-foreground/80 sm:text-sm sm:leading-relaxed"
                                  >
                                    <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                                    <span>{line}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Download card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mt-8 rounded-lg border border-brand/15 bg-brand-soft/30 p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:border-brand/25 hover:bg-brand-soft/40 hover:shadow-sm"
        >
          <p className="flex items-center gap-2 text-sm text-foreground/85 sm:text-base">
            <span className="text-lg">📋</span>
            {t({
              tr: 'Tam politika belgesi',
              en: 'Complete policy document',
            })}{' '}
            <a href="#" className="font-semibold text-brand hover:text-brand/80 transition-colors duration-200 underline decoration-brand/30 hover:decoration-brand/60">
              {t({ tr: 'burada indirebilirsiniz', en: 'available for download' })}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
