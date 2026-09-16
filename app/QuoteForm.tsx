'use client'

import { useRef, useState } from 'react'
import { insertLead } from '@/lib/supabase'
import { trackGenerateLead } from '@/lib/analytics'
import AnalyticsLink from './AnalyticsLink'
import styles from './page.module.css'

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  city: 'Calgary' | 'Edmonton' | ''
  productInterest: string[]
  projectType: string
  message: string
}

const initialForm: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  productInterest: [],
  projectType: '',
  message: '',
}

const productOptions = [
  'WPC Wall Panels',
  'UV Marble Sheets',
  'Acoustic Panels',
  'Designer Wallpaper',
  'Decorative Panels',
  'Not sure yet',
]

const projectOptions = ['Residential', 'Commercial', 'Office', 'Other']

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  // Guards generate_lead against firing twice for one submission — a ref
  // updates synchronously (unlike state), so it closes the race a fast
  // double-click leaves open before the disabled-button state re-renders.
  // Reset on "Submit another request," since that's a deliberate new lead.
  const submitLockRef = useRef(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const toggleProduct = (option: string) => {
    setForm((prev) => ({
      ...prev,
      productInterest: prev.productInterest.includes(option)
        ? prev.productInterest.filter((p) => p !== option)
        : [...prev.productInterest, option],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.city || submitLockRef.current) return
    submitLockRef.current = true
    setStatus('loading')

    try {
      await insertLead({
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        phone: form.phone || null,
        city: form.city,
        product_interest: form.productInterest.length ? form.productInterest.join(', ') : null,
        project_type: form.projectType || null,
        budget: null,
        message: form.message || null,
      })
      // The backend write above succeeding is what makes this a real lead —
      // fire the conversion event only now, never earlier.
      setStatus('success')
      trackGenerateLead({ city: form.city, project_type: form.projectType || undefined })
    } catch {
      setStatus('error')
      submitLockRef.current = false
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.formSuccess}>
        <span className={styles.formSuccessMark}>✓</span>
        <h3 className={styles.formSuccessTitle}>Request received</h3>
        <p className={styles.formSuccessBody}>
          Thanks, {form.firstName || 'there'}. We&apos;ll review your project and get back to
          you within one business day.
        </p>
        <button
          type="button"
          className={styles.formSuccessReset}
          onClick={() => {
            setForm(initialForm)
            setStatus('idle')
            submitLockRef.current = false
          }}
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form className={styles.quoteForm} onSubmit={handleSubmit} noValidate>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label className={styles.formLabel} htmlFor="firstName">First name *</label>
          <input
            id="firstName"
            className={styles.formInput}
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
            placeholder="Jane"
            autoComplete="given-name"
          />
        </div>
        <div className={styles.formField}>
          <label className={styles.formLabel} htmlFor="lastName">Last name *</label>
          <input
            id="lastName"
            className={styles.formInput}
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
            placeholder="Smith"
            autoComplete="family-name"
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label className={styles.formLabel} htmlFor="phone">Phone *</label>
          <input
            id="phone"
            className={styles.formInput}
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="(403) 000-0000"
            autoComplete="tel"
          />
        </div>
        <div className={styles.formField}>
          <label className={styles.formLabel} htmlFor="email">Email *</label>
          <input
            id="email"
            className={styles.formInput}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="jane@example.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label className={styles.formLabel} htmlFor="city">Nearest city *</label>
          <select
            id="city"
            className={styles.formSelect}
            name="city"
            value={form.city}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select city</option>
            <option value="Calgary">Calgary</option>
            <option value="Edmonton">Edmonton</option>
          </select>
        </div>
        <div className={styles.formField}>
          <label className={styles.formLabel} htmlFor="projectType">Project type</label>
          <select
            id="projectType"
            className={styles.formSelect}
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
          >
            <option value="" disabled>Select type</option>
            {projectOptions.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.formField}>
        <span className={styles.formLabel}>What are you looking for? (select all that apply)</span>
        <div className={styles.chipGroup} role="group" aria-label="What are you looking for?">
          {productOptions.map((p) => {
            const selected = form.productInterest.includes(p)
            return (
              <button
                key={p}
                type="button"
                className={`${styles.chip} ${selected ? styles.chipSelected : ''}`}
                aria-pressed={selected}
                onClick={() => toggleProduct(p)}
              >
                {p}
              </button>
            )
          })}
        </div>
      </div>

      <div className={styles.formField}>
        <label className={styles.formLabel} htmlFor="message">Tell us about the space</label>
        <textarea
          id="message"
          className={styles.formTextarea}
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Room size, wall type, timeline, whatever helps us quote accurately."
        />
      </div>

      {status === 'error' && (
        <p className={styles.formError}>
          Something went wrong sending that. Please try again, or call us at{' '}
          <AnalyticsLink href="tel:+15874335187" event="phone_click" location="quote_form_error">
            587-433-5187
          </AnalyticsLink>
          .
        </p>
      )}

      <button type="submit" className={styles.formSubmit} disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Get My Free Quote'}
      </button>

      <p className={styles.formNote}>We respond within one business day. Your details stay private.</p>
    </form>
  )
}
