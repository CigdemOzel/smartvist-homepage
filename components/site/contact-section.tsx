'use client'

import { motion } from 'motion/react'
import { MapPin, Phone, Mail, LinkIcon } from 'lucide-react'
import { useT } from '@/lib/i18n'

export function ContactSection() {
  const t = useT()

  const contactInfo = [
    {
      icon: MapPin,
      label: t({ tr: 'Adres', en: 'Address' }),
      value: 'Dijitalpark Teknokent Kirazlıdere Mah. Eski Ankara Cad. No.4/2-11, 34788 Çekmeköy / İstanbul',
      href: 'https://maps.google.com/maps?q=Dijitalpark+Teknokent',
      external: true,
    },
    {
      icon: Phone,
      label: t({ tr: 'Telefon', en: 'Phone' }),
      value: '+90 (532) 665 40 38',
      href: 'tel:+905326654038',
      external: false,
    },
    {
      icon: Mail,
      label: t({ tr: 'E-posta', en: 'Email' }),
      value: 'info@smartvist.com',
      href: 'mailto:info@smartvist.com',
      external: false,
    },
    {
      icon: LinkIcon,
      label: 'LinkedIn',
      value: 'Smartvist',
      href: 'https://linkedin.com/company/smartvist',
      external: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            {t({ tr: 'Bize Ulaşın', en: 'Get in Touch' })}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t({
              tr: 'Sorularınız veya iş ortaklığı için bizimle iletişime geçin.',
              en: 'Have questions or partnership inquiries? Reach out to us.',
            })}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-4"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-xl border border-border bg-background/50 p-6 transition-all duration-300 hover:border-brand/40 hover:shadow-lg hover:bg-background">
                    {/* Animated background shine effect */}
                    <motion.div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand/0 via-brand/5 to-brand/0 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />

                    <div className="relative flex items-start gap-4">
                      <motion.div
                        className="rounded-lg bg-brand/10 p-3 transition-all duration-300 group-hover:bg-brand/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="h-6 w-6 text-brand transition-transform duration-300 group-hover:scale-110" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-foreground transition-colors group-hover:text-brand">
                          {item.label}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                          {item.value}
                        </p>
                      </div>
                      <motion.div
                        className="mt-1 opacity-0 transition-all group-hover:opacity-100"
                        initial={{ x: -10 }}
                        whileHover={{ x: 5 }}
                      >
                        <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7m0 0l-7 7m7-7H5"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: '-100px' }}
            className="group relative overflow-hidden rounded-xl border border-border shadow-lg"
          >
            {/* Floating card effect with gradient border */}
            <motion.div
              className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-brand/20 via-accent/20 to-brand/20 rounded-xl blur-md opacity-0 transition-opacity duration-300"
              whileHover={{ opacity: 0.5 }}
            />

            <div className="relative overflow-hidden bg-background">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.1234567890!2d29.1234567!3d41.0234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caf93e00000000%3A0x1234567890abcdef!2sDigitalpark%20Teknokent!5e0!3m2!1sen!2str!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Info overlay with gradient background */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4 pt-8"
            >
              <p className="text-xs text-muted-foreground font-medium">
                {t({ tr: 'İstanbul, Türkiye', en: 'Istanbul, Turkey' })}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 rounded-xl border border-brand/30 bg-brand-soft/20 p-6 backdrop-blur-sm sm:p-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {t({
                  tr: 'Canlı ürün demosu ister misiniz?',
                  en: 'Ready to see Smartvist in action?',
                })}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {t({
                  tr: 'Bir iş günü içinde sizinle iletişime geçeceğiz.',
                  en: "We'll get back to you within one business day.",
                })}
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-brand-foreground transition-all hover:shadow-lg hover:shadow-brand/20"
            >
              {t({ tr: 'Demo Planla', en: 'Book a Demo' })}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7m0 0l-7 7m7-7H5"
                />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
