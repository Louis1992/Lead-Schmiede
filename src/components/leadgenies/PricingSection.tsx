import React, { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight, Star, Zap, Crown, Building2 } from 'lucide-react';
import { translations, type Language } from '../../i18n/translations';

interface PricingSectionProps {
  lang?: Language;
}

export default function PricingSection({ lang = 'de' }: PricingSectionProps) {
  const t = translations[lang].pricing;
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'oneTime' | 'monthly'>('oneTime');
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
    window.open('https://calendly.com/louis-mickley-leadgenies/kurze-vorstellung-klon', '_blank');
  };

  const fadeInUp = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
  });

  const packages = billingCycle === 'oneTime' ? t.packages : t.monthlyPackages;
  const icons = [Zap, Star, Crown];

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
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '32px' : '48px' }}>
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
              maxWidth: '600px',
              margin: '0 auto 32px'
            }}
          >
            {t.subtitle}
          </p>

          {/* Billing Toggle */}
          <div
            style={{
              ...fadeInUp(0.15),
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: '#ffffff',
              padding: '6px',
              borderRadius: '100px',
              border: '1px solid rgba(26, 26, 46, 0.1)',
              boxShadow: '0 2px 8px rgba(26, 26, 46, 0.06)'
            }}
          >
            <button
              onClick={() => setBillingCycle('oneTime')}
              style={{
                padding: '10px 20px',
                borderRadius: '100px',
                border: 'none',
                fontFamily: 'Source Sans 3, sans-serif',
                fontSize: '0.9375rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: billingCycle === 'oneTime'
                  ? 'linear-gradient(135deg, #1a1a2e 0%, #5c4d7d 100%)'
                  : 'transparent',
                color: billingCycle === 'oneTime' ? '#ffffff' : '#4a4e69'
              }}
            >
              {t.oneTimeLabel}
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '10px 20px',
                borderRadius: '100px',
                border: 'none',
                fontFamily: 'Source Sans 3, sans-serif',
                fontSize: '0.9375rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: billingCycle === 'monthly'
                  ? 'linear-gradient(135deg, #1a1a2e 0%, #5c4d7d 100%)'
                  : 'transparent',
                color: billingCycle === 'monthly' ? '#ffffff' : '#4a4e69',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              {t.monthlyLabel}
              <span
                style={{
                  background: '#81b29a',
                  color: '#ffffff',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '100px'
                }}
              >
                {t.monthlySavingsBadge}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards - Always 3 columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '24px' : '24px',
            alignItems: 'stretch'
          }}
        >
          {packages.map((pkg, index) => {
            const isHighlighted = pkg.highlighted;
            const cardDelay = 0.25 + index * 0.1;
            const Icon = icons[index] || Star;

            return (
              <div
                key={index}
                style={{
                  ...fadeInUp(cardDelay),
                  position: 'relative',
                  background: isHighlighted
                    ? 'linear-gradient(135deg, #1a1a2e 0%, #5c4d7d 100%)'
                    : '#ffffff',
                  borderRadius: '20px',
                  padding: isMobile ? '28px 20px' : '32px 24px',
                  border: isHighlighted
                    ? 'none'
                    : '1px solid rgba(26, 26, 46, 0.08)',
                  boxShadow: isHighlighted
                    ? '0 20px 60px rgba(26, 26, 46, 0.25)'
                    : '0 4px 24px rgba(26, 26, 46, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transform: isHighlighted && !isMobile ? 'scale(1.03)' : 'none',
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
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '6px 16px',
                      borderRadius: '100px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 12px rgba(224, 122, 95, 0.4)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    <Star size={12} fill="#ffffff" />
                    {t.popularBadge}
                  </div>
                )}

                {/* Savings Badge */}
                {pkg.savings && !isHighlighted && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      right: '16px',
                      background: '#81b29a',
                      color: '#ffffff',
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      padding: '5px 10px',
                      borderRadius: '100px',
                      letterSpacing: '0.3px'
                    }}
                  >
                    {pkg.savings}
                  </div>
                )}

                {/* Savings Badge for highlighted card */}
                {pkg.savings && isHighlighted && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      right: '16px',
                      background: '#81b29a',
                      color: '#ffffff',
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      padding: '5px 10px',
                      borderRadius: '100px',
                      letterSpacing: '0.3px'
                    }}
                  >
                    {pkg.savings}
                  </div>
                )}

                {/* Icon + Package Name */}
                <div style={{ marginBottom: '20px', marginTop: isHighlighted ? '8px' : 0 }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: isHighlighted
                        ? 'rgba(255, 255, 255, 0.15)'
                        : 'rgba(26, 26, 46, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '12px'
                    }}
                  >
                    <Icon
                      size={20}
                      color={isHighlighted ? '#ffffff' : '#5c4d7d'}
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: isHighlighted ? '#ffffff' : '#1a1a2e',
                      marginBottom: '2px'
                    }}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '0.875rem',
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
                    marginBottom: '20px',
                    paddingBottom: '20px',
                    borderBottom: isHighlighted
                      ? '1px solid rgba(255, 255, 255, 0.15)'
                      : '1px solid rgba(26, 26, 46, 0.08)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span
                      style={{
                        fontFamily: 'Space Grotesk, monospace',
                        fontSize: isMobile ? '2.25rem' : '2.5rem',
                        fontWeight: 600,
                        color: isHighlighted ? '#ffffff' : '#1a1a2e',
                        lineHeight: 1
                      }}
                    >
                      {pkg.price}
                    </span>
                    {billingCycle === 'monthly' && (
                      <span
                        style={{
                          fontFamily: 'Source Sans 3, sans-serif',
                          fontSize: '1rem',
                          color: isHighlighted ? 'rgba(255, 255, 255, 0.7)' : '#9a8c98'
                        }}
                      >
                        /{t.perMonthLabel}
                      </span>
                    )}
                  </div>
                  {pkg.pricePerLead && (
                    <p
                      style={{
                        fontFamily: 'Source Sans 3, sans-serif',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#e07a5f',
                        marginTop: '6px',
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
                    gap: '12px',
                    marginBottom: '24px'
                  }}
                >
                  {pkg.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px'
                      }}
                    >
                      <div
                        style={{
                          flexShrink: 0,
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: isHighlighted ? '#81b29a' : 'rgba(129, 178, 154, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '2px'
                        }}
                      >
                        <Check
                          size={12}
                          color={isHighlighted ? '#ffffff' : '#81b29a'}
                          strokeWidth={3}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: 'Source Sans 3, sans-serif',
                          fontSize: '0.875rem',
                          color: isHighlighted ? 'rgba(255, 255, 255, 0.9)' : '#4a4e69',
                          lineHeight: 1.4
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Best For */}
                {pkg.bestFor && (
                  <div
                    style={{
                      background: isHighlighted
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(26, 26, 46, 0.04)',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      marginBottom: '20px'
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'Source Sans 3, sans-serif',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: isHighlighted ? 'rgba(255, 255, 255, 0.8)' : '#9a8c98',
                        textAlign: 'center',
                        margin: 0
                      }}
                    >
                      {t.bestForLabel} {pkg.bestFor}
                    </p>
                  </div>
                )}

                {/* CTA Button */}
                <button
                  onClick={handleCTAClick}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '14px 20px',
                    borderRadius: '10px',
                    border: 'none',
                    fontFamily: 'Source Sans 3, sans-serif',
                    fontSize: '0.9375rem',
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
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Enterprise CTA Section */}
        {billingCycle === 'oneTime' && t.enterprise && (
          <div
            style={{
              ...fadeInUp(0.6),
              marginTop: '40px',
              background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
              border: '2px dashed #e07a5f',
              borderRadius: '16px',
              padding: isMobile ? '24px 20px' : '28px 40px',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(224, 122, 95, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Building2 size={24} color="#e07a5f" />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'Source Sans 3, sans-serif',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#1a1a2e',
                    margin: '0 0 4px 0'
                  }}
                >
                  {t.enterprise.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Source Sans 3, sans-serif',
                    fontSize: '0.9375rem',
                    color: '#4a4e69',
                    margin: 0
                  }}
                >
                  {t.enterprise.description}
                </p>
              </div>
            </div>
            <button
              onClick={handleCTAClick}
              style={{
                padding: '14px 28px',
                borderRadius: '10px',
                border: 'none',
                background: '#e07a5f',
                color: '#ffffff',
                fontFamily: 'Source Sans 3, sans-serif',
                fontSize: '0.9375rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 16px rgba(224, 122, 95, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(224, 122, 95, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(224, 122, 95, 0.3)';
              }}
            >
              {t.enterprise.cta}
              <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* Guarantee + Payment Note */}
        <div
          style={{
            ...fadeInUp(0.8),
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile ? '16px' : '32px',
            marginTop: '48px',
            padding: '24px',
            background: 'rgba(129, 178, 154, 0.08)',
            borderRadius: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#81b29a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Check size={18} color="#ffffff" strokeWidth={3} />
            </div>
            <span
              style={{
                fontFamily: 'Source Sans 3, sans-serif',
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: '#1a1a2e'
              }}
            >
              {t.guaranteeText}
            </span>
          </div>
          <div
            style={{
              height: isMobile ? '1px' : '24px',
              width: isMobile ? '100%' : '1px',
              background: 'rgba(26, 26, 46, 0.1)'
            }}
          />
          <p
            style={{
              fontFamily: 'Source Sans 3, sans-serif',
              fontSize: '0.875rem',
              color: '#9a8c98',
              margin: 0,
              textAlign: 'center'
            }}
          >
            {t.paymentNote}
          </p>
        </div>
      </div>
    </section>
  );
}
