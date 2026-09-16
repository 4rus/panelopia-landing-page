'use client'

import { AnchorHTMLAttributes, MouseEvent } from 'react'
import { trackPhoneClick, trackEmailClick, trackQuoteCtaClick } from '@/lib/analytics'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: 'phone_click' | 'email_click' | 'quote_cta_click'
  location: string
}

// Small client island so page.tsx (and its real content) can stay a server
// component — only these link wrappers ship interactivity to the browser.
export default function AnalyticsLink({ event, location, onClick, ...rest }: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (event === 'phone_click') trackPhoneClick(location)
    else if (event === 'email_click') trackEmailClick(location)
    else trackQuoteCtaClick(location)
    onClick?.(e)
  }

  return <a {...rest} onClick={handleClick} />
}
