import React, { useEffect, useRef, useState } from 'react';
import { translations, type Language } from '../../i18n/translations';
import { Target, BadgeCheck, Shield } from 'lucide-react';

interface BenefitsSectionProps {
  lang?: Language;
}

const iconMap: Record<string, typeof Target> = {
  target: Target,
  verified: BadgeCheck,
  shield: Shield
};

export default function BenefitsSection({ lang = 'de' }: BenefitsSectionProps) {
  const t = translations[lang].benefits;
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
      { threshold: 0.15, rootMargin: '-50px 0px' }
    );

    observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const fadeInUp = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
  });

  return (
    <section
      ref={sectionRef}
      id="benefits"
      style={{
        position: 'relative',
        background: '#ffffff',
        padding: isMobile ? '80px 20px' : '120px 40px',
        overflow: 'hidden'
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
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(26, 26, 46, 0.02) 2px, transparent 0)`,
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
        {/* Section Title */}
        <h2
          style={{
            ...fadeInUp(0),
            fontFamily: 'DM Serif Display, Georgia, serif',
            fontSize: isMobile ? '2rem' : '2.75rem',
            fontWeight: 400,
            color: '#1a1a2e',
            textAlign: 'center',
            marginBottom: isMobile ? '48px' : '72px',
            letterSpacing: '-0.02em'
          }}
        >
          {t.title}
        </h2>

        {/* Benefits Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '24px' : '32px'
          }}
        >
          {t.items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Target;
            const colors = [
              { bg: 'rgba(224, 122, 95, 0.1)', icon: '#e07a5f', border: 'rgba(224, 122, 95, 0.2)' },
              { bg: 'rgba(129, 178, 154, 0.1)', icon: '#81b29a', border: 'rgba(129, 178, 154, 0.2)' },
              { bg: 'rgba(92, 77, 125, 0.1)', icon: '#5c4d7d', border: 'rgba(92, 77, 125, 0.2)' }
            ];
            const color = colors[index % colors.length];

            return (
              <div
                key={index}
                style={{
                  ...fadeInUp(0.1 + index * 0.15),
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: isMobile ? '32px 24px' : '40px 32px',
                  border: '1px solid rgba(26, 26, 46, 0.08)',
                  boxShadow: '0 4px 24px rgba(26, 26, 46, 0.04)',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(26, 26, 46, 0.1)';
                    e.currentTarget.style.borderColor = color.border;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(26, 26, 46, 0.04)';
                    e.currentTarget.style.borderColor = 'rgba(26, 26, 46, 0.08)';
                  }
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: color.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px'
                  }}
                >
                  <IconComponent size={32} style={{ color: color.icon }} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'DM Serif Display, Georgia, serif',
                    fontSize: isMobile ? '1.25rem' : '1.5rem',
                    fontWeight: 400,
                    color: '#1a1a2e',
                    marginBottom: '12px',
                    lineHeight: 1.3
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'Source Sans 3, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: '#4a4e69',
                    lineHeight: 1.7,
                    margin: 0
                  }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
