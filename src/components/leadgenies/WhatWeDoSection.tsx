import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { translations, type Language } from '../../i18n/translations';
import { X, Check, Zap, Users, Target, RefreshCw } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface WhatWeDoSectionProps {
  lang?: Language;
}

export default function WhatWeDoSection({ lang = 'de' }: WhatWeDoSectionProps) {
  const t = translations[lang].whatWeDo;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate comparison cards
      gsap.fromTo(
        '.comparison-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.comparison-container',
            start: 'top 80%',
            once: true
          }
        }
      );

      // Animate process steps
      gsap.fromTo(
        '.process-step',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.process-container',
            start: 'top 80%',
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const processIcons = [Users, Zap, Target, RefreshCw];

  return (
    <section
      ref={sectionRef}
      id="what-we-do"
      style={{
        padding: '100px 20px',
        background: 'linear-gradient(180deg, #f8f8fa 0%, #ffffff 100%)',
        position: 'relative'
      }}
    >
      {/* Process Section - FIRST */}
      <div
        className="process-container"
        style={{
          maxWidth: '900px',
          margin: '0 auto 80px'
        }}
      >
        <h2
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 400,
            color: '#1a1a2e',
            textAlign: 'center',
            marginBottom: '16px'
          }}
        >
          {t.process.title}
        </h2>
        <p
          style={{
            fontFamily: '"Source Sans 3", sans-serif',
            fontSize: '1.125rem',
            color: '#4a4e69',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto 48px'
          }}
        >
          {lang === 'de' ? 'In 4 Schritten zu Ihren perfekten Leads' : '4 steps to your perfect leads'}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {t.process.steps.map((step, index) => {
            const Icon = processIcons[index];
            return (
              <div
                key={index}
                className="process-step"
                style={{
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'flex-start',
                  background: '#ffffff',
                  padding: '28px 32px',
                  borderRadius: '16px',
                  border: '1px solid rgba(74, 78, 105, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(224, 122, 95, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(224, 122, 95, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(74, 78, 105, 0.1)';
                }}
              >
                {/* Step Number & Icon */}
                <div
                  style={{
                    flexShrink: 0,
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(224, 122, 95, 0.1) 0%, rgba(244, 162, 97, 0.15) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Space Grotesk", monospace',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#e07a5f',
                      position: 'absolute',
                      top: '6px'
                    }}
                  >
                    {step.number}
                  </span>
                  <Icon size={20} color="#e07a5f" style={{ marginTop: '8px' }} />
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: '"Source Sans 3", sans-serif',
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: '#1a1a2e',
                      marginBottom: '8px'
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: '"Source Sans 3", sans-serif',
                      fontSize: '0.9375rem',
                      color: '#4a4e69',
                      lineHeight: 1.7,
                      margin: 0
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Comparison Section Header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
        <h3
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: 400,
            color: '#1a1a2e',
            marginBottom: '16px'
          }}
        >
          {t.title}
        </h3>
        <p
          style={{
            fontFamily: '"Source Sans 3", sans-serif',
            fontSize: '1rem',
            color: '#4a4e69',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          {t.subtitle}
        </p>
      </div>

      {/* Comparison Cards */}
      <div
        className="comparison-container"
        style={{
          maxWidth: '1100px',
          margin: '0 auto 80px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}
      >
        {/* Self-Service Card */}
        <div
          className="comparison-card"
          style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '40px 32px',
            border: '1px solid rgba(74, 78, 105, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Red accent line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #dc2626 0%, #ef4444 100%)'
            }}
          />

          <h3
            style={{
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: '1.5rem',
              fontWeight: 400,
              color: '#1a1a2e',
              marginBottom: '8px'
            }}
          >
            {t.comparison.selfService.title}
          </h3>
          <p
            style={{
              fontFamily: '"Source Sans 3", sans-serif',
              fontSize: '0.9375rem',
              color: '#4a4e69',
              marginBottom: '28px',
              opacity: 0.8
            }}
          >
            {t.comparison.selfService.subtitle}
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {t.comparison.selfService.problems.map((problem, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '16px',
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontSize: '0.9375rem',
                  color: '#4a4e69',
                  lineHeight: 1.6
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'rgba(220, 38, 38, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2px'
                  }}
                >
                  <X size={12} color="#dc2626" strokeWidth={3} />
                </span>
                {problem}
              </li>
            ))}
          </ul>
        </div>

        {/* Lead-Schmiede Card */}
        <div
          className="comparison-card"
          style={{
            background: 'linear-gradient(135deg, rgba(224, 122, 95, 0.05) 0%, rgba(244, 162, 97, 0.08) 100%)',
            borderRadius: '20px',
            padding: '40px 32px',
            border: '1px solid rgba(224, 122, 95, 0.25)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(224, 122, 95, 0.1)'
          }}
        >
          {/* Orange accent line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #e07a5f 0%, #f4a261 100%)'
            }}
          />

          <h3
            style={{
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: '1.5rem',
              fontWeight: 400,
              color: '#1a1a2e',
              marginBottom: '8px'
            }}
          >
            {t.comparison.leadSchmiede.title}
          </h3>
          <p
            style={{
              fontFamily: '"Source Sans 3", sans-serif',
              fontSize: '0.9375rem',
              color: '#4a4e69',
              marginBottom: '28px',
              opacity: 0.8
            }}
          >
            {t.comparison.leadSchmiede.subtitle}
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {t.comparison.leadSchmiede.benefits.map((benefit, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '16px',
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontSize: '0.9375rem',
                  color: '#1a1a2e',
                  lineHeight: 1.6
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #e07a5f 0%, #f4a261 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2px'
                  }}
                >
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
