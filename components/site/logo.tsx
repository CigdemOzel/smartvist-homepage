type LogoProps = {
  className?: string
  showWordmark?: boolean
  tone?: 'default' | 'inverted'
}

export function Logo({ className, showWordmark = true, tone = 'default' }: LogoProps) {
  const wordColor = tone === 'inverted' ? 'text-white' : 'text-foreground'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ''}`}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center" aria-hidden="true">
        <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.5" y="1.5" width="37" height="37" rx="11" className="fill-brand" />
          <path
            d="M13 15.5c0-2 1.9-3.4 4.6-3.4 2.2 0 3.9.8 4.9 2.2"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M27 24.5c0 2-1.9 3.4-4.6 3.4-2.2 0-3.9-.8-4.9-2.2"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M13 15.5c0 4.2 14 2.2 14 6.6"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
            opacity="0.55"
          />
          <circle cx="28.4" cy="12.2" r="3.1" className="fill-accent" />
        </svg>
      </span>
      {showWordmark && (
        <span className={`font-display text-lg font-extrabold tracking-tight ${wordColor}`}>
          Smart<span className="text-brand">vist</span>
        </span>
      )}
    </span>
  )
}
