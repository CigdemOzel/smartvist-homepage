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
  const [expanded, setExpanded] = useState<string | null>(null)
  const t = useT()

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            {t({
              tr: 'Bilgi Güvenliği Yönetim Sistemi Politikası',
              en: 'Information Security Management System Policy',
            })}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t({
              tr: 'Bilgilerimizin korunmasına ve yönetimine büyük önem veriyoruz. Aşağıda detaylı politikamızı görebilirsiniz.',
              en: 'We place great importance on protecting and managing our information. Explore our detailed policy below.',
            })}
          </p>
        </div>

        <div className="space-y-3">
          {policyItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <button
                onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                className="group w-full"
              >
                <div className="relative overflow-hidden rounded-xl border border-border bg-background/50 p-5 transition-all duration-300 hover:border-brand/30 hover:bg-background/80 hover:shadow-lg">
                  {/* Animated background gradient on hover */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand/5 via-accent/5 to-transparent opacity-0 transition-opacity"
                    animate={{ opacity: expanded === item.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative flex items-center justify-between">
                    <h3 className="text-left font-display text-base font-semibold text-foreground sm:text-lg">
                      {t(item.title)}
                    </h3>
                    <motion.div
                      animate={{ rotate: expanded === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-brand" />
                    </motion.div>
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {expanded === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="border border-t-0 border-border bg-brand-soft/10 p-5 text-foreground sm:p-6">
                      <ul className="space-y-3">
                        {t(item.content).map((line: string, idx: number) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05, duration: 0.3 }}
                            className="flex gap-3 text-sm leading-relaxed"
                          >
                            <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-brand" />
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-10 rounded-xl border border-brand/20 bg-brand-soft/20 p-5 backdrop-blur-sm sm:p-6"
        >
          <p className="text-sm text-muted-foreground">
            {t({
              tr: '📋 Tam politika belgesi',
              en: '📋 Complete policy document',
            })}{' '}
            <a href="#" className="font-semibold text-brand hover:text-brand/80 transition-colors">
              {t({ tr: 'burada indirebilirsiniz', en: 'can be downloaded here' })}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
