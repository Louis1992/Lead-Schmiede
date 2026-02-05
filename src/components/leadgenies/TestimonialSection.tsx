import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';
import { type Language } from '../../i18n/translations';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  result?: string;
}

interface TestimonialSectionProps {
  lang?: Language;
}

export default function TestimonialSection({ lang = 'de' }: TestimonialSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = lang === 'de' ? [
    {
      quote: "Die Lead-Listen von Lead-Schmiede haben unsere Vertriebspipeline transformiert. Endlich qualifizierte Kontakte, die wirklich zu unserem ICP passen.",
      name: "Thomas Reppa",
      role: "CEO",
      company: "CoffeeCup.app",
      image: "https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Aerion_-Coffee-Cup.png",
      result: "3x mehr qualifizierte Meetings"
    },
    {
      quote: "Lead-Schmiede hat uns geholfen, unseren Outbound-Vertrieb schneller zu skalieren als wir es intern je gekonnt hätten. Die Lead-Qualität ist herausragend.",
      name: "Sascha Schwarz",
      role: "Vertriebsleiter",
      company: "HappyFutter GmbH",
      result: "40% höhere Antwortrate"
    },
    {
      quote: "Die manuelle Verifizierung macht den Unterschied. Keine Bounces mehr, jeder Kontakt ist aktuell und relevant für unsere Zielgruppe.",
      name: "Vivien Poswiat",
      role: "Gründer",
      company: "Tech-Experts GmbH",
      result: "0% E-Mail Bounce Rate"
    },
    {
      quote: "Lead-Schmiede hat unserem B2B-Outreach einen enormen Schub gegeben. Die ICP-Beratung war Gold wert für unsere Targeting-Strategie.",
      name: "Mirco Meyer",
      role: "CEO",
      company: "YourHomie",
      result: "47 Termine aus 100 Leads"
    },
    {
      quote: "Die Leads sind so gut recherchiert, dass unsere Verkäufer sofort ins Gespräch kommen. Komplexe technische Produkte brauchen genau solche Kontakte.",
      name: "Sebastian Rott",
      role: "Vertriebsleiter",
      company: "Intech Automation",
      result: "25% kürzerer Sales Cycle"
    }
  ] : [
    {
      quote: "Lead-Schmiede's lead lists transformed our sales pipeline. Finally qualified contacts that truly match our ICP.",
      name: "Thomas Reppa",
      role: "CEO",
      company: "CoffeeCup.app",
      image: "https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Aerion_-Coffee-Cup.png",
      result: "3x more qualified meetings"
    },
    {
      quote: "Lead-Schmiede helped us scale outbound sales faster than we ever could internally. The lead quality is outstanding.",
      name: "Sascha Schwarz",
      role: "Sales Director",
      company: "HappyFutter GmbH",
      result: "40% higher response rate"
    },
    {
      quote: "Manual verification makes the difference. No more bounces, every contact is current and relevant to our target audience.",
      name: "Vivien Poswiat",
      role: "Founder",
      company: "Tech-Experts GmbH",
      result: "0% email bounce rate"
    },
    {
      quote: "Lead-Schmiede gave our B2B outreach a huge boost. The ICP consulting was worth its weight in gold for our targeting strategy.",
      name: "Mirco Meyer",
      role: "CEO",
      company: "YourHomie",
      result: "47 meetings from 100 leads"
    },
    {
      quote: "The leads are so well researched that our salespeople can jump right into conversations. Complex technical products need exactly these contacts.",
      name: "Sebastian Rott",
      role: "Sales Director",
      company: "Intech Automation",
      result: "25% shorter sales cycle"
    }
  ];

  const t = lang === 'de' ? {
    badge: 'Kundenstimmen',
    title: 'Was unsere Kunden sagen',
    subtitle: 'Über 120 B2B-Unternehmen vertrauen Lead-Schmiede'
  } : {
    badge: 'Testimonials',
    title: 'What our customers say',
    subtitle: 'Over 120 B2B companies trust Lead-Schmiede'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const fadeInUp = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
  });

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      style={{
        padding: isMobile ? '60px 20px' : '100px 20px',
        background: 'linear-gradient(180deg, #1a1a2e 0%, #2d2d44 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(224, 122, 95, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px', ...fadeInUp(0) }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(224, 122, 95, 0.15)',
              color: '#e07a5f',
              fontFamily: '"Source Sans 3", sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 600,
              padding: '8px 16px',
              borderRadius: '100px',
              marginBottom: '20px'
            }}
          >
            <Star size={14} fill="#e07a5f" />
            {t.badge}
          </span>
          <h2
            style={{
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 400,
              color: '#ffffff',
              marginBottom: '12px'
            }}
          >
            {t.title}
          </h2>
          <p
            style={{
              fontFamily: '"Source Sans 3", sans-serif',
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '500px',
              margin: '0 auto'
            }}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            padding: isMobile ? '32px 24px' : '48px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            ...fadeInUp(0.1)
          }}
        >
          {/* Quote icon */}
          <Quote
            size={48}
            style={{
              position: 'absolute',
              top: isMobile ? '16px' : '24px',
              right: isMobile ? '16px' : '32px',
              color: 'rgba(224, 122, 95, 0.2)'
            }}
          />

          {/* Testimonial content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Result badge */}
            {testimonials[activeIndex].result && (
              <span
                style={{
                  display: 'inline-flex',
                  alignSelf: 'flex-start',
                  background: 'linear-gradient(135deg, rgba(129, 178, 154, 0.2) 0%, rgba(129, 178, 154, 0.3) 100%)',
                  color: '#81b29a',
                  fontFamily: '"Space Grotesk", monospace',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  padding: '8px 16px',
                  borderRadius: '8px'
                }}
              >
                {testimonials[activeIndex].result}
              </span>
            )}

            {/* Quote */}
            <p
              style={{
                fontFamily: '"Source Sans 3", sans-serif',
                fontSize: isMobile ? '1.125rem' : '1.375rem',
                lineHeight: 1.7,
                color: '#ffffff',
                margin: 0,
                fontStyle: 'italic'
              }}
            >
              "{testimonials[activeIndex].quote}"
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {testimonials[activeIndex].image ? (
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid rgba(224, 122, 95, 0.3)'
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #e07a5f 0%, #f4a261 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"Source Sans 3", sans-serif',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#ffffff'
                  }}
                >
                  {testimonials[activeIndex].name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
              <div>
                <p
                  style={{
                    fontFamily: '"Source Sans 3", sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    margin: '0 0 4px 0'
                  }}
                >
                  {testimonials[activeIndex].name}
                </p>
                <p
                  style={{
                    fontFamily: '"Source Sans 3", sans-serif',
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    margin: 0
                  }}
                >
                  {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '24px',
            ...fadeInUp(0.2)
          }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                width: index === activeIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: index === activeIndex ? '#e07a5f' : 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust counter */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: isMobile ? '24px' : '48px',
            marginTop: '48px',
            flexWrap: 'wrap',
            ...fadeInUp(0.3)
          }}
        >
          {[
            { value: '120+', label: lang === 'de' ? 'Zufriedene Kunden' : 'Happy Customers' },
            { value: '15.000+', label: lang === 'de' ? 'Leads ausgeliefert' : 'Leads Delivered' },
            { value: '95%', label: lang === 'de' ? 'Verifizierungsrate' : 'Verification Rate' }
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: '"Space Grotesk", monospace',
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  fontWeight: 600,
                  color: '#e07a5f',
                  margin: '0 0 4px 0'
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                  margin: 0
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
