import React, { useEffect, useRef, useState } from 'react';
import { translations, type Language } from '../../i18n/translations';
import { CheckCircle, ArrowRight, Shield, Users, Zap } from 'lucide-react';

interface HeroSectionProps {
  lang?: Language;
}

export default function HeroSection({ lang = 'de' }: HeroSectionProps) {
  const t = translations[lang].hero;
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  const handleCTAClick = () => {
    window.open('https://calendly.com/louis-mickley-leadgenies/30min', '_blank');
  };

  // Animation styles
  const fadeInUp = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
  });

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: isMobile ? 'auto' : '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
        overflow: 'hidden',
        paddingTop: isMobile ? '120px' : '140px',
        paddingBottom: isMobile ? '60px' : '80px'
      }}
    >
      {/* Subtle background pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(26, 26, 46, 0.03) 2px, transparent 0)`,
          backgroundSize: '50px 50px',
          pointerEvents: 'none'
        }}
      />

      {/* Decorative diagonal line */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: isMobile ? '-30%' : '10%',
          width: '600px',
          height: '600px',
          background: 'linear-gradient(135deg, rgba(224, 122, 95, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(60px)'
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 20px' : '0 40px',
          width: '100%'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '40px' : '80px',
            alignItems: 'center'
          }}
        >
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div
              style={{
                ...fadeInUp(0),
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(224, 122, 95, 0.1)',
                padding: '8px 16px',
                borderRadius: '100px',
                marginBottom: '24px'
              }}
            >
              <Zap size={16} style={{ color: '#e07a5f' }} />
              <span
                style={{
                  fontFamily: 'Source Sans 3, sans-serif',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#e07a5f',
                  letterSpacing: '0.5px'
                }}
              >
                B2B Lead-Listen Service
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                ...fadeInUp(0.1),
                fontFamily: 'DM Serif Display, Georgia, serif',
                fontSize: isMobile ? '2.5rem' : '3.5rem',
                fontWeight: 400,
                color: '#1a1a2e',
                lineHeight: 1.1,
                marginBottom: '24px',
                letterSpacing: '-0.02em'
              }}
            >
              {t.title}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                ...fadeInUp(0.2),
                fontFamily: 'Source Sans 3, sans-serif',
                fontSize: isMobile ? '1.125rem' : '1.25rem',
                fontWeight: 400,
                color: '#4a4e69',
                lineHeight: 1.6,
                marginBottom: '32px',
                maxWidth: '540px'
              }}
            >
              {t.subtitle}
            </p>

            {/* CTA Button */}
            <div style={fadeInUp(0.3)}>
              <button
                onClick={handleCTAClick}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'linear-gradient(135deg, #e07a5f 0%, #f4a261 100%)',
                  color: '#ffffff',
                  fontFamily: 'Source Sans 3, sans-serif',
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  fontWeight: 600,
                  padding: isMobile ? '16px 28px' : '18px 36px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 30px rgba(224, 122, 95, 0.35)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(224, 122, 95, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(224, 122, 95, 0.35)';
                }}
              >
                {t.cta}
                <ArrowRight size={20} />
              </button>

              {/* CTA Subtext */}
              {t.ctaSubtext && (
                <p
                  style={{
                    fontFamily: 'Source Sans 3, sans-serif',
                    fontSize: '0.875rem',
                    color: '#9a8c98',
                    marginTop: '12px'
                  }}
                >
                  {t.ctaSubtext}
                </p>
              )}
            </div>

            {/* Trust Badges */}
            {t.trustBadges && (
              <div
                style={{
                  ...fadeInUp(0.4),
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '16px',
                  marginTop: '40px'
                }}
              >
                {t.trustBadges.map((badge, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <CheckCircle size={18} style={{ color: '#81b29a' }} />
                    <span
                      style={{
                        fontFamily: 'Source Sans 3, sans-serif',
                        fontSize: '0.9375rem',
                        fontWeight: 500,
                        color: '#1a1a2e'
                      }}
                    >
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Visual Card */}
          <div
            style={{
              ...fadeInUp(0.3),
              position: 'relative'
            }}
          >
            {/* Main Card */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: isMobile ? '32px' : '48px',
                boxShadow: '0 20px 60px rgba(26, 26, 46, 0.1)',
                border: '1px solid rgba(26, 26, 46, 0.06)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '32px'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #5c4d7d 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Users size={24} color="#ffffff" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'DM Serif Display, Georgia, serif',
                      fontSize: '1.5rem',
                      fontWeight: 400,
                      color: '#1a1a2e',
                      margin: 0
                    }}
                  >
                    Lead-Schmiede
                  </p>
                  <p
                    style={{
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '0.875rem',
                      color: '#9a8c98',
                      margin: 0
                    }}
                  >
                    Ihre B2B-Kontakte
                  </p>
                </div>
              </div>

              {/* Stats Preview */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  marginBottom: '32px'
                }}
              >
                <div
                  style={{
                    background: '#f8f9fa',
                    borderRadius: '12px',
                    padding: '20px',
                    textAlign: 'center'
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Space Grotesk, monospace',
                      fontSize: isMobile ? '2rem' : '2.5rem',
                      fontWeight: 600,
                      color: '#e07a5f',
                      margin: 0,
                      lineHeight: 1
                    }}
                  >
                    100+
                  </p>
                  <p
                    style={{
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '0.8125rem',
                      color: '#4a4e69',
                      marginTop: '8px',
                      marginBottom: 0
                    }}
                  >
                    Verifizierte Leads
                  </p>
                </div>
                <div
                  style={{
                    background: '#f8f9fa',
                    borderRadius: '12px',
                    padding: '20px',
                    textAlign: 'center'
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Space Grotesk, monospace',
                      fontSize: isMobile ? '2rem' : '2.5rem',
                      fontWeight: 600,
                      color: '#81b29a',
                      margin: 0,
                      lineHeight: 1
                    }}
                  >
                    48h
                  </p>
                  <p
                    style={{
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '0.8125rem',
                      color: '#4a4e69',
                      marginTop: '8px',
                      marginBottom: 0
                    }}
                  >
                    Lieferzeit
                  </p>
                </div>
              </div>

              {/* Sample Contact Preview */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #5c4d7d 100%)',
                  borderRadius: '16px',
                  padding: '24px',
                  color: '#ffffff'
                }}
              >
                <p
                  style={{
                    fontFamily: 'Source Sans 3, sans-serif',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    opacity: 0.7,
                    marginBottom: '12px',
                    margin: 0
                  }}
                >
                  Beispiel-Lead
                </p>
                <div style={{ marginTop: '16px' }}>
                  <p
                    style={{
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 600,
                      margin: '0 0 4px 0'
                    }}
                  >
                    Max Mustermann
                  </p>
                  <p
                    style={{
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '0.875rem',
                      opacity: 0.9,
                      margin: '0 0 4px 0'
                    }}
                  >
                    Head of Sales • TechCorp GmbH
                  </p>
                  <p
                    style={{
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '0.8125rem',
                      opacity: 0.7,
                      margin: '0 0 4px 0'
                    }}
                  >
                    max.mustermann@techcorp.de
                  </p>
                  <p
                    style={{
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '0.8125rem',
                      opacity: 0.7,
                      margin: 0
                    }}
                  >
                    +49 170 1234567
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginTop: '16px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <Shield size={14} style={{ opacity: 0.7 }} />
                  <span
                    style={{
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '0.75rem',
                      opacity: 0.7
                    }}
                  >
                    DSGVO-konform verifiziert
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: isMobile ? '20px' : '-20px',
                background: '#81b29a',
                color: '#ffffff',
                fontFamily: 'Source Sans 3, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 600,
                padding: '12px 20px',
                borderRadius: '100px',
                boxShadow: '0 8px 24px rgba(129, 178, 154, 0.4)',
                transform: isVisible ? 'rotate(-6deg)' : 'rotate(-6deg) scale(0.8)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
              }}
            >
              Ab €1,49/Lead
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
