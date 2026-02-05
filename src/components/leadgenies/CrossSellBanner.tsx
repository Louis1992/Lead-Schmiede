import React, { useState, useEffect, useRef } from 'react';
import { Phone, ArrowRight, Users, Calendar, Globe, Headphones } from 'lucide-react';
import { type Language } from '../../i18n/translations';

interface CrossSellBannerProps {
  lang?: Language;
}

export default function CrossSellBanner({ lang = 'de' }: CrossSellBannerProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const t = lang === 'de' ? {
    badge: 'Partnerangebot',
    title: 'Leads haben Sie – wer telefoniert sie ab?',
    subtitle: 'Mit LeadGenies übernehmen wir auch das Cold Calling. Professionelles B2B-Telemarketing mit deutschen Agents.',
    features: [
      { icon: Calendar, text: 'Terminvereinbarung' },
      { icon: Users, text: 'Lead-Qualifizierung' },
      { icon: Globe, text: 'Deutsch & Englisch' },
      { icon: Headphones, text: 'Dedizierte Agents' }
    ],
    cta: 'Mehr erfahren auf LeadGenies.de',
    ctaSubtext: 'Unser Schwesterunternehmen für B2B-Telemarketing'
  } : {
    badge: 'Partner Offer',
    title: 'Got your leads – who\'s calling them?',
    subtitle: 'With LeadGenies, we also handle the cold calling. Professional B2B telemarketing with native-speaking agents.',
    features: [
      { icon: Calendar, text: 'Appointment Setting' },
      { icon: Users, text: 'Lead Qualification' },
      { icon: Globe, text: 'German & English' },
      { icon: Headphones, text: 'Dedicated Agents' }
    ],
    cta: 'Learn more at LeadGenies.de',
    ctaSubtext: 'Our sister company for B2B telemarketing'
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px 0px' }
    );

    observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const fadeInUp = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
  });

  return (
    <section
      ref={sectionRef}
      style={{
        padding: isMobile ? '60px 20px' : '80px 40px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)'
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}
      >
        <div
          style={{
            ...fadeInUp(0),
            background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)',
            borderRadius: '24px',
            padding: isMobile ? '32px 24px' : '48px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative elements */}
          <div
            style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(224, 122, 95, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-30px',
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(92, 77, 125, 0.2) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Badge */}
            <div
              style={{
                ...fadeInUp(0.1),
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(224, 122, 95, 0.2)',
                padding: '6px 14px',
                borderRadius: '100px',
                marginBottom: '20px'
              }}
            >
              <Phone size={14} color="#e07a5f" />
              <span
                style={{
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: '#e07a5f',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                {t.badge}
              </span>
            </div>

            {/* Title */}
            <h2
              style={{
                ...fadeInUp(0.15),
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontSize: isMobile ? '1.75rem' : '2.25rem',
                fontWeight: 400,
                color: '#ffffff',
                marginBottom: '12px',
                lineHeight: 1.2
              }}
            >
              {t.title}
            </h2>

            {/* Subtitle */}
            <p
              style={{
                ...fadeInUp(0.2),
                fontFamily: '"Source Sans 3", sans-serif',
                fontSize: isMobile ? '1rem' : '1.125rem',
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '28px',
                maxWidth: '600px',
                lineHeight: 1.6
              }}
            >
              {t.subtitle}
            </p>

            {/* Features Grid */}
            <div
              style={{
                ...fadeInUp(0.25),
                display: 'grid',
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                gap: isMobile ? '12px' : '16px',
                marginBottom: '32px'
              }}
            >
              {t.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      padding: '12px 14px',
                      borderRadius: '10px'
                    }}
                  >
                    <Icon size={18} color="#81b29a" />
                    <span
                      style={{
                        fontFamily: '"Source Sans 3", sans-serif',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div
              style={{
                ...fadeInUp(0.3),
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'stretch' : 'center',
                gap: '16px'
              }}
            >
              <a
                href="https://www.leadgenies.de"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '16px 28px',
                  background: 'linear-gradient(135deg, #e07a5f 0%, #f4a261 100%)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 24px rgba(224, 122, 95, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(224, 122, 95, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(224, 122, 95, 0.3)';
                }}
              >
                {t.cta}
                <ArrowRight size={18} />
              </a>
              <span
                style={{
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  textAlign: isMobile ? 'center' : 'left'
                }}
              >
                {t.ctaSubtext}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
