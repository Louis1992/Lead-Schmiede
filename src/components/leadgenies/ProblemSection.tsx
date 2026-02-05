import React, { useEffect, useRef, useState } from 'react';
import { translations, type Language } from '../../i18n/translations';
import { Wallet, Clock, AlertTriangle, ArrowDown } from 'lucide-react';

interface ProblemSectionProps {
  lang?: Language;
}

const iconMap: Record<string, typeof Wallet> = {
  wallet: Wallet,
  clock: Clock,
  alert: AlertTriangle
};

export default function ProblemSection({ lang = 'de' }: ProblemSectionProps) {
  const t = translations[lang].problem;
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
      { threshold: 0.2, rootMargin: '-50px 0px' }
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
      style={{
        position: 'relative',
        background: '#1a1a2e',
        padding: isMobile ? '80px 20px' : '120px 40px',
        overflow: 'hidden'
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.02) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
          pointerEvents: 'none'
        }}
      />

      {/* Subtle glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(224, 122, 95, 0.08) 0%, transparent 60%)',
          pointerEvents: 'none'
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: '900px',
          margin: '0 auto'
        }}
      >
        {/* Title */}
        <h2
          style={{
            ...fadeInUp(0),
            fontFamily: 'DM Serif Display, Georgia, serif',
            fontSize: isMobile ? '2rem' : '2.75rem',
            fontWeight: 400,
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: isMobile ? '48px' : '64px',
            letterSpacing: '-0.02em'
          }}
        >
          {t.title}
        </h2>

        {/* Pain Points */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '24px' : '32px',
            marginBottom: isMobile ? '60px' : '80px'
          }}
        >
          {t.painPoints.map((point, index) => {
            const IconComponent = iconMap[point.icon] || AlertTriangle;
            return (
              <div
                key={index}
                style={{
                  ...fadeInUp(0.1 + index * 0.1),
                  display: 'flex',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  gap: isMobile ? '16px' : '24px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: isMobile ? '20px' : '28px 32px'
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    flexShrink: 0,
                    width: isMobile ? '48px' : '56px',
                    height: isMobile ? '48px' : '56px',
                    borderRadius: '12px',
                    background: 'rgba(224, 122, 95, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <IconComponent
                    size={isMobile ? 24 : 28}
                    style={{ color: '#e07a5f' }}
                  />
                </div>

                {/* Text */}
                <p
                  style={{
                    fontFamily: 'Source Sans 3, sans-serif',
                    fontSize: isMobile ? '1rem' : '1.125rem',
                    fontWeight: 400,
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  {point.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Transition Arrow */}
        <div
          style={{
            ...fadeInUp(0.5),
            display: 'flex',
            justifyContent: 'center',
            marginBottom: isMobile ? '40px' : '48px'
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #e07a5f 0%, #f4a261 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 30px rgba(224, 122, 95, 0.4)'
            }}
          >
            <ArrowDown size={24} color="#ffffff" />
          </div>
        </div>

        {/* Solution Text */}
        <div style={{ textAlign: 'center' }}>
          <h3
            style={{
              ...fadeInUp(0.6),
              fontFamily: 'DM Serif Display, Georgia, serif',
              fontSize: isMobile ? '1.5rem' : '2rem',
              fontWeight: 400,
              color: '#81b29a',
              marginBottom: '16px'
            }}
          >
            {t.solution}
          </h3>
          <p
            style={{
              ...fadeInUp(0.7),
              fontFamily: 'Source Sans 3, sans-serif',
              fontSize: isMobile ? '1rem' : '1.125rem',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            {t.solutionSubtext}
          </p>
        </div>
      </div>
    </section>
  );
}
