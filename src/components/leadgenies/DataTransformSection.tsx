import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Check, X } from 'lucide-react';
import { translations, type Language } from '../../i18n/translations';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface DataTransformSectionProps {
  lang?: Language;
}

export default function DataTransformSection({ lang = 'de' }: DataTransformSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const t = lang === 'de' ? {
    title: 'Von Daten-Chaos zu Sales-Ready',
    subtitle: 'Wir verwandeln riesige Rohdaten-Exporte in perfekt aufbereitete Lead-Listen',
    before: 'Rohdaten-Export',
    after: 'Ihre Lead-Liste',
    beforeItems: ['Tausende Zeilen', 'Unstrukturiert', 'Duplikate', 'Veraltete Daten', 'Fehlende Felder'],
    afterItems: ['Nur relevante Kontakte', 'Strukturiert & formatiert', 'Dedupliziert', '100% verifiziert', 'Vollständige Profile']
  } : {
    title: 'From Data Chaos to Sales-Ready',
    subtitle: 'We transform massive raw data exports into perfectly prepared lead lists',
    before: 'Raw Data Export',
    after: 'Your Lead List',
    beforeItems: ['Thousands of rows', 'Unstructured', 'Duplicates', 'Outdated data', 'Missing fields'],
    afterItems: ['Only relevant contacts', 'Structured & formatted', 'Deduplicated', '100% verified', 'Complete profiles']
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
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Sample chaotic data for the "before" visualization
  const chaoticData = [
    ['ID', 'fname', 'lname', 'email_1', 'email_2', 'company', 'title', 'phone', 'linkedin', 'country', 'city', 'emp_count', 'revenue', 'industry', 'founded', 'tech_stack'],
    ['38291', 'Max', 'M.', 'max@...', '', 'Tech...', 'Sales', '+49...', 'linkedin...', 'DE', 'Berlin', '50', '€5M', 'SaaS', '2019', 'React...'],
    ['38292', '', 'Schmidt', 'invalid', 'alt@...', '', 'CEO', '', '', 'DE', '', '200', '', 'IT', '', ''],
    ['38293', 'Anna', 'Weber', 'anna@old...', '', 'GmbH', '', '+49...', '', '', 'München', '', '€10M', '', '2015', 'AWS...'],
    ['38294', 'DUPE', 'DUPE', 'max@...', '', 'Tech...', 'Sales', '', '', 'DE', '', '', '', '', '', ''],
    ['38295', 'Test', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ];

  // Clean data for the "after" visualization
  const cleanData = [
    { name: 'Max Mustermann', title: 'Head of Sales', company: 'TechCorp GmbH', email: '✓', phone: '✓', signal: 'Neuer Job' },
    { name: 'Anna Weber', title: 'CEO', company: 'Digital Solutions', email: '✓', phone: '✓', signal: 'Funding' },
    { name: 'Thomas Schmidt', title: 'VP Sales', company: 'SaaS Startup', email: '✓', phone: '✓', signal: 'Expansion' },
  ];

  const fadeInUp = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
  });

  return (
    <section
      ref={sectionRef}
      id="data-transform"
      style={{
        padding: isMobile ? '60px 20px' : '100px 40px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
          <h2
            style={{
              ...fadeInUp(0),
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: isMobile ? '1.75rem' : '2.5rem',
              fontWeight: 400,
              color: '#1a1a2e',
              marginBottom: '16px'
            }}
          >
            {t.title}
          </h2>
          <p
            style={{
              ...fadeInUp(0.1),
              fontFamily: '"Source Sans 3", sans-serif',
              fontSize: isMobile ? '1rem' : '1.125rem',
              color: '#4a4e69',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Transformation Visual */}
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            gap: isMobile ? '30px' : '40px',
            justifyContent: 'center'
          }}
        >
          {/* Before - Chaotic Excel */}
          <div
            style={{
              ...fadeInUp(0.2),
              flex: isMobile ? 'none' : '1',
              maxWidth: isMobile ? '100%' : '480px',
              width: '100%'
            }}
          >
            <div
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(220, 38, 38, 0.1)',
                border: '2px solid rgba(220, 38, 38, 0.2)'
              }}
            >
              {/* Excel-like header */}
              <div
                style={{
                  background: 'linear-gradient(180deg, #f3f4f6 0%, #e5e7eb 100%)',
                  padding: '12px 16px',
                  borderBottom: '1px solid #d1d5db',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                </div>
                <span
                  style={{
                    fontFamily: '"Source Sans 3", sans-serif',
                    fontSize: '0.75rem',
                    color: '#6b7280',
                    marginLeft: '8px'
                  }}
                >
                  raw_export_2024.csv
                </span>
              </div>

              {/* Chaotic data grid */}
              <div
                style={{
                  padding: '8px',
                  overflowX: 'auto',
                  background: '#fafafa'
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${Math.min(chaoticData[0].length, 8)}, minmax(60px, 1fr))`,
                    gap: '1px',
                    fontSize: '0.625rem',
                    fontFamily: 'monospace',
                    minWidth: '400px'
                  }}
                >
                  {chaoticData.slice(0, 6).map((row, rowIndex) =>
                    row.slice(0, 8).map((cell, colIndex) => (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        style={{
                          padding: '4px 6px',
                          background: rowIndex === 0 ? '#e5e7eb' : (rowIndex % 2 === 0 ? '#ffffff' : '#f9fafb'),
                          border: '1px solid #e5e7eb',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          color: cell === '' || cell === 'invalid' || cell.includes('DUPE') ? '#ef4444' : '#374151',
                          fontWeight: rowIndex === 0 ? 600 : 400,
                          opacity: cell === '' ? 0.3 : 1
                        }}
                      >
                        {cell || '—'}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Problem indicators */}
              <div
                style={{
                  padding: '12px 16px',
                  background: 'rgba(220, 38, 38, 0.05)',
                  borderTop: '1px solid rgba(220, 38, 38, 0.1)'
                }}
              >
                <p
                  style={{
                    fontFamily: '"Source Sans 3", sans-serif',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    color: '#dc2626',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '8px',
                    margin: '0 0 8px 0'
                  }}
                >
                  {t.before}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {t.beforeItems.map((item, index) => (
                    <span
                      key={index}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        background: 'rgba(220, 38, 38, 0.1)',
                        color: '#dc2626',
                        fontFamily: '"Source Sans 3", sans-serif',
                        fontSize: '0.6875rem',
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      <X size={10} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div
            style={{
              ...fadeInUp(0.3),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <div
              style={{
                width: isMobile ? '50px' : '60px',
                height: isMobile ? '50px' : '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #e07a5f 0%, #f4a261 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(224, 122, 95, 0.3)',
                transform: isMobile ? 'rotate(90deg)' : 'none'
              }}
            >
              <ArrowRight size={isMobile ? 24 : 28} color="#ffffff" />
            </div>
            <span
              style={{
                fontFamily: '"Source Sans 3", sans-serif',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#e07a5f',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              Lead-Schmiede
            </span>
          </div>

          {/* After - Clean List */}
          <div
            style={{
              ...fadeInUp(0.4),
              flex: isMobile ? 'none' : '1',
              maxWidth: isMobile ? '100%' : '480px',
              width: '100%'
            }}
          >
            <div
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(129, 178, 154, 0.15)',
                border: '2px solid rgba(129, 178, 154, 0.3)'
              }}
            >
              {/* Clean header */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #5c4d7d 100%)',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span
                  style={{
                    fontFamily: '"Source Sans 3", sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#ffffff'
                  }}
                >
                  leads_ready.xlsx
                </span>
                <span
                  style={{
                    background: '#81b29a',
                    color: '#ffffff',
                    fontFamily: '"Source Sans 3", sans-serif',
                    fontSize: '0.625rem',
                    fontWeight: 600,
                    padding: '4px 8px',
                    borderRadius: '100px'
                  }}
                >
                  ✓ Verifiziert
                </span>
              </div>

              {/* Clean data list */}
              <div style={{ padding: '16px' }}>
                {cleanData.map((lead, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px',
                      background: index % 2 === 0 ? '#f8f9fa' : '#ffffff',
                      borderRadius: '8px',
                      marginBottom: index < cleanData.length - 1 ? '8px' : 0
                    }}
                  >
                    {/* Avatar placeholder */}
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, #e07a5f 0%, #f4a261 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontFamily: '"Source Sans 3", sans-serif',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        flexShrink: 0
                      }}
                    >
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          fontFamily: '"Source Sans 3", sans-serif',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: '#1a1a2e',
                          margin: 0,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {lead.name}
                      </p>
                      <p
                        style={{
                          fontFamily: '"Source Sans 3", sans-serif',
                          fontSize: '0.75rem',
                          color: '#4a4e69',
                          margin: 0
                        }}
                      >
                        {lead.title} • {lead.company}
                      </p>
                    </div>

                    {/* Verification badges */}
                    <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
                      <span
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '4px',
                          background: 'rgba(129, 178, 154, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        title="Email verified"
                      >
                        <Check size={12} color="#81b29a" />
                      </span>
                      <span
                        style={{
                          background: 'rgba(224, 122, 95, 0.1)',
                          color: '#e07a5f',
                          fontFamily: '"Source Sans 3", sans-serif',
                          fontSize: '0.5625rem',
                          fontWeight: 600,
                          padding: '4px 6px',
                          borderRadius: '4px'
                        }}
                      >
                        {lead.signal}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Success indicators */}
              <div
                style={{
                  padding: '12px 16px',
                  background: 'rgba(129, 178, 154, 0.08)',
                  borderTop: '1px solid rgba(129, 178, 154, 0.15)'
                }}
              >
                <p
                  style={{
                    fontFamily: '"Source Sans 3", sans-serif',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    color: '#81b29a',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '8px',
                    margin: '0 0 8px 0'
                  }}
                >
                  {t.after}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {t.afterItems.map((item, index) => (
                    <span
                      key={index}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        background: 'rgba(129, 178, 154, 0.15)',
                        color: '#059669',
                        fontFamily: '"Source Sans 3", sans-serif',
                        fontSize: '0.6875rem',
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      <Check size={10} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
