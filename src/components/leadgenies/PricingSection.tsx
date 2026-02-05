import React, { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import { translations, type Language } from '../../i18n/translations';

interface PricingSectionProps {
  lang?: Language;
}

export default function PricingSection({ lang = 'de' }: PricingSectionProps) {
  const t = translations[lang].pricing;
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleCTAClick = () => {
    window.open('https://calendly.com/louis-mickley-leadgenies/30min', '_blank');
  };

  const fadeInUp = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
  });

  return (
    <section
      ref={sectionRef}
      id="pricing"
      style={{
        position: 'relative',
        background: '#f8f9fa',
        padding: isMobile ? '80px 20px' : '120px 40px',
        overflow: 'hidden'
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(26, 26, 46, 0.015) 2px, transparent 0)`,
          backgroundSize: '50px 50px',
          pointerEvents: 'none'
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '64px' }}>
          <h2
            style={{
              ...fadeInUp(0),
              fontFamily: 'DM Serif Display, Georgia, serif',
              fontSize: isMobile ? '2rem' : '2.75rem',
              fontWeight: 400,
              color: '#1a1a2e',
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}
          >
            {t.title}
          </h2>
          <p
            style={{
              ...fadeInUp(0.1),
              fontFamily: 'Source Sans 3, sans-serif',
              fontSize: isMobile ? '1rem' : '1.125rem',
              color: '#4a4e69',
              maxWidth: '500px',
              margin: '0 auto'
            }}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '24px' : '24px',
            alignItems: 'stretch'
          }}
        >
          {t.packages.map((pkg, index) => {
            const isHighlighted = pkg.highlighted;
            const cardDelay = 0.2 + index * 0.15;

            return (
              <div
                key={index}
                style={{
                  ...fadeInUp(cardDelay),
                  position: 'relative',
                  background: isHighlighted
                    ? 'linear-gradient(135deg, #1a1a2e 0%, #5c4d7d 100%)'
                    : '#ffffff',
                  borderRadius: '24px',
                  padding: isMobile ? '32px 24px' : '40px 32px',
                  border: isHighlighted
                    ? 'none'
                    : '1px solid rgba(26, 26, 46, 0.08)',
                  boxShadow: isHighlighted
                    ? '0 20px 60px rgba(26, 26, 46, 0.25)'
                    : '0 4px 24px rgba(26, 26, 46, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transform: isHighlighted && !isMobile ? 'scale(1.02)' : 'none',
                  zIndex: isHighlighted ? 2 : 1
                }}
              >
                {/* Popular Badge */}
                {isHighlighted && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#e07a5f',
                      color: '#ffffff',
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      padding: '8px 20px',
                      borderRadius: '100px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 12px rgba(224, 122, 95, 0.4)'
                    }}
                  >
                    <Star size={14} fill="#ffffff" />
                    Beliebteste Wahl
                  </div>
                )}

                {/* Savings Badge */}
                {pkg.savings && (
                  <div
                    style={{
                      position: 'absolute',
                      top: isHighlighted ? '24px' : '-14px',
                      right: '20px',
                      background: '#81b29a',
                      color: '#ffffff',
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '6px 12px',
                      borderRadius: '100px'
                    }}
                  >
                    {pkg.savings}
                  </div>
                )}

                {/* Package Name */}
                <div style={{ marginBottom: '24px', marginTop: isHighlighted ? '12px' : 0 }}>
                  <h3
                    style={{
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: isMobile ? '1.25rem' : '1.375rem',
                      fontWeight: 700,
                      color: isHighlighted ? '#ffffff' : '#1a1a2e',
                      marginBottom: '4px'
                    }}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '0.9375rem',
                      color: isHighlighted ? 'rgba(255, 255, 255, 0.7)' : '#9a8c98',
                      margin: 0
                    }}
                  >
                    {pkg.duration}
                  </p>
                </div>

                {/* Price */}
                <div
                  style={{
                    marginBottom: '24px',
                    paddingBottom: '24px',
                    borderBottom: isHighlighted
                      ? '1px solid rgba(255, 255, 255, 0.15)'
                      : '1px solid rgba(26, 26, 46, 0.08)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span
                      style={{
                        fontFamily: 'Space Grotesk, monospace',
                        fontSize: isMobile ? '2.5rem' : '3rem',
                        fontWeight: 600,
                        color: isHighlighted ? '#ffffff' : '#1a1a2e',
                        lineHeight: 1
                      }}
                    >
                      {pkg.price}
                    </span>
                  </div>
                  {pkg.pricePerLead && (
                    <p
                      style={{
                        fontFamily: 'Source Sans 3, sans-serif',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#e07a5f',
                        marginTop: '8px',
                        marginBottom: 0
                      }}
                    >
                      {pkg.pricePerLead}
                    </p>
                  )}
                </div>

                {/* Features */}
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    marginBottom: '32px'
                  }}
                >
                  {pkg.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px'
                      }}
                    >
                      <div
                        style={{
                          flexShrink: 0,
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: '#81b29a',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '2px'
                        }}
                      >
                        <Check size={14} color="#ffffff" strokeWidth={3} />
                      </div>
                      <span
                        style={{
                          fontFamily: 'Source Sans 3, sans-serif',
                          fontSize: '0.9375rem',
                          color: isHighlighted ? 'rgba(255, 255, 255, 0.9)' : '#4a4e69',
                          lineHeight: 1.5
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Best For */}
                <div
                  style={{
                    background: isHighlighted
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(26, 26, 46, 0.04)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    marginBottom: '24px'
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: isHighlighted ? 'rgba(255, 255, 255, 0.8)' : '#9a8c98',
                      textAlign: 'center',
                      margin: 0
                    }}
                  >
                    {t.bestForLabel} {pkg.bestFor}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleCTAClick}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '16px 24px',
                    borderRadius: '12px',
                    border: 'none',
                    fontFamily: 'Source Sans 3, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    background: isHighlighted
                      ? 'linear-gradient(135deg, #e07a5f 0%, #f4a261 100%)'
                      : '#1a1a2e',
                    color: '#ffffff',
                    boxShadow: isHighlighted
                      ? '0 8px 24px rgba(224, 122, 95, 0.4)'
                      : '0 4px 12px rgba(26, 26, 46, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = isHighlighted
                      ? '0 12px 32px rgba(224, 122, 95, 0.5)'
                      : '0 8px 20px rgba(26, 26, 46, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = isHighlighted
                      ? '0 8px 24px rgba(224, 122, 95, 0.4)'
                      : '0 4px 12px rgba(26, 26, 46, 0.2)';
                  }}
                >
                  {pkg.cta}
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Payment Note */}
        <p
          style={{
            ...fadeInUp(0.8),
            fontFamily: 'Source Sans 3, sans-serif',
            fontSize: '0.9375rem',
            color: '#9a8c98',
            textAlign: 'center',
            marginTop: '40px'
          }}
        >
          {t.paymentNote}
        </p>
      </div>
    </section>
  );
}
