import React, { useState, useEffect, useRef } from 'react';
import { Check, X, ArrowRight, AlertTriangle, Shield, Clock, Users, Euro } from 'lucide-react';
import { type Language } from '../../i18n/translations';

interface CompetitorData {
  name: string;
  logo?: string;
  pricePerLead: string;
  timeInvestment: string;
  verification: string;
  icpConsulting: boolean;
  gdprCompliance: string;
  dataQuality: string;
  support: string;
  pros: string[];
  cons: string[];
}

interface ComparisonTableProps {
  competitor: 'apollo' | 'cognism' | 'linkedin' | 'lusha';
  lang?: Language;
}

export default function ComparisonTable({ competitor, lang = 'de' }: ComparisonTableProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const competitors: Record<string, CompetitorData> = {
    apollo: {
      name: 'Apollo.io',
      pricePerLead: '~€0.30-0.50',
      timeInvestment: '10-20h/Monat',
      verification: lang === 'de' ? 'Automatisch (KI)' : 'Automatic (AI)',
      icpConsulting: false,
      gdprCompliance: lang === 'de' ? 'US-Server, DSGVO-kritisch' : 'US servers, GDPR concerns',
      dataQuality: '70-80%',
      support: lang === 'de' ? 'Self-Service / Chat' : 'Self-Service / Chat',
      pros: lang === 'de'
        ? ['Günstig bei hohem Volumen', 'Große Datenbank (275M+ Kontakte)', 'Viele Filteroptionen', 'Email-Sequenzen integriert']
        : ['Cheap at high volume', 'Large database (275M+ contacts)', 'Many filter options', 'Email sequences integrated'],
      cons: lang === 'de'
        ? ['Viel Eigenarbeit erforderlich', 'DSGVO-Bedenken (US-Server)', 'Keine persönliche Beratung', 'Verifizierung oft veraltet', 'Lernkurve bei komplexen Filtern']
        : ['Significant self-service effort', 'GDPR concerns (US servers)', 'No personal consulting', 'Verification often outdated', 'Learning curve for complex filters']
    },
    cognism: {
      name: 'Cognism',
      pricePerLead: '~€2-5',
      timeInvestment: '5-15h/Monat',
      verification: lang === 'de' ? 'Telefon-verifiziert (teilweise)' : 'Phone-verified (partial)',
      icpConsulting: false,
      gdprCompliance: lang === 'de' ? 'EU-Server, DSGVO-konform' : 'EU servers, GDPR compliant',
      dataQuality: '85-90%',
      support: lang === 'de' ? 'Account Manager' : 'Account Manager',
      pros: lang === 'de'
        ? ['Telefon-verifizierte Daten', 'DSGVO-konform', 'Intent-Daten verfügbar', 'Gute EU-Abdeckung']
        : ['Phone-verified data', 'GDPR compliant', 'Intent data available', 'Good EU coverage'],
      cons: lang === 'de'
        ? ['Teuer (Enterprise-Preise)', 'Mindestvertragslaufzeit', 'Eigene Recherche nötig', 'Nicht alle Daten verifiziert', 'Komplexe Preisstruktur']
        : ['Expensive (Enterprise pricing)', 'Minimum contract term', 'Own research required', 'Not all data verified', 'Complex pricing structure']
    },
    linkedin: {
      name: 'LinkedIn Sales Navigator',
      pricePerLead: '~€1-3',
      timeInvestment: '15-25h/Monat',
      verification: lang === 'de' ? 'Profilbasiert (keine E-Mail)' : 'Profile-based (no email)',
      icpConsulting: false,
      gdprCompliance: lang === 'de' ? 'US-Server, eingeschränkt' : 'US servers, limited',
      dataQuality: '90%+',
      support: 'Self-Service',
      pros: lang === 'de'
        ? ['Aktuellste Profildaten', 'Direkte LinkedIn-Nachrichten', 'Gute Filter (Jobtitel, Branche)', 'Trust durch LinkedIn-Marke']
        : ['Most current profile data', 'Direct LinkedIn messages', 'Good filters (job title, industry)', 'Trust from LinkedIn brand'],
      cons: lang === 'de'
        ? ['Keine E-Mail-Adressen direkt', 'Hoher Zeitaufwand', 'InMail-Limits', 'Kein Export erlaubt', 'Preise steigen stetig']
        : ['No email addresses directly', 'High time investment', 'InMail limits', 'Export not allowed', 'Prices constantly increasing']
    },
    lusha: {
      name: 'Lusha',
      pricePerLead: '~€0.50-1.50',
      timeInvestment: '8-15h/Monat',
      verification: lang === 'de' ? 'Community-verifiziert' : 'Community-verified',
      icpConsulting: false,
      gdprCompliance: lang === 'de' ? 'DSGVO-konform (EU-Option)' : 'GDPR compliant (EU option)',
      dataQuality: '75-85%',
      support: lang === 'de' ? 'Chat / E-Mail' : 'Chat / Email',
      pros: lang === 'de'
        ? ['Browser-Extension praktisch', 'Günstige Einstiegspläne', 'Schnell Kontaktdaten finden', 'DSGVO-Option verfügbar']
        : ['Browser extension practical', 'Cheap entry plans', 'Quick contact data finding', 'GDPR option available'],
      cons: lang === 'de'
        ? ['Begrenzte Credits', 'Datenqualität schwankt', 'Community-Daten nicht immer aktuell', 'Keine ICP-Beratung', 'Nur Basisdaten ohne Kontext']
        : ['Limited credits', 'Data quality varies', 'Community data not always current', 'No ICP consulting', 'Only basic data without context']
    }
  };

  const leadSchmiede = {
    name: 'Lead-Schmiede',
    pricePerLead: '€1.29-1.49',
    timeInvestment: '0h',
    verification: lang === 'de' ? 'Manuell + KI (100%)' : 'Manual + AI (100%)',
    icpConsulting: true,
    gdprCompliance: lang === 'de' ? 'Deutschland, 100% DSGVO' : 'Germany, 100% GDPR',
    dataQuality: '95%+',
    support: lang === 'de' ? 'Persönlicher Ansprechpartner' : 'Personal contact'
  };

  const comp = competitors[competitor];

  const t = lang === 'de' ? {
    title: `Lead-Schmiede vs ${comp.name}`,
    subtitle: 'Ehrlicher Vergleich für Ihre Entscheidung',
    comparisonTitle: 'Feature-Vergleich',
    pricePerLead: 'Preis pro Lead',
    timeInvestment: 'Ihr Zeitaufwand',
    verification: 'Verifizierung',
    icpConsulting: 'ICP-Beratung',
    gdprCompliance: 'DSGVO',
    dataQuality: 'Datenqualität',
    support: 'Support',
    prosTitle: `Wann ${comp.name} besser passt`,
    consTitle: `Wann Lead-Schmiede besser passt`,
    leadSchmiedePros: [
      'Sie haben keine Zeit für eigene Recherche',
      'Sie brauchen 100% verifizierte Kontakte',
      'DSGVO-Konformität ist entscheidend',
      'Sie wollen persönliche ICP-Beratung',
      'Sie bevorzugen Done-for-you statt DIY'
    ],
    ctaTitle: 'Bereit für qualifizierte Leads ohne Aufwand?',
    ctaButton: 'Kostenloses Erstgespräch',
    ctaSubtext: 'Unverbindlich • 15 Min • Sofort Klarheit'
  } : {
    title: `Lead-Schmiede vs ${comp.name}`,
    subtitle: 'Honest comparison for your decision',
    comparisonTitle: 'Feature Comparison',
    pricePerLead: 'Price per Lead',
    timeInvestment: 'Your Time Investment',
    verification: 'Verification',
    icpConsulting: 'ICP Consulting',
    gdprCompliance: 'GDPR',
    dataQuality: 'Data Quality',
    support: 'Support',
    prosTitle: `When ${comp.name} fits better`,
    consTitle: `When Lead-Schmiede fits better`,
    leadSchmiedePros: [
      'You have no time for research',
      'You need 100% verified contacts',
      'GDPR compliance is crucial',
      'You want personal ICP consulting',
      'You prefer done-for-you over DIY'
    ],
    ctaTitle: 'Ready for qualified leads without effort?',
    ctaButton: 'Free Consultation',
    ctaSubtext: 'No commitment • 15 min • Instant clarity'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
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

  const fadeInUp = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
  });

  const handleCTAClick = () => {
    window.open('https://calendly.com/louis-mickley-leadgenies/kurze-vorstellung-klon', '_blank');
  };

  const comparisonRows = [
    { label: t.pricePerLead, leadSchmiede: leadSchmiede.pricePerLead, competitor: comp.pricePerLead, icon: Euro },
    { label: t.timeInvestment, leadSchmiede: leadSchmiede.timeInvestment, competitor: comp.timeInvestment, icon: Clock, highlight: true },
    { label: t.verification, leadSchmiede: leadSchmiede.verification, competitor: comp.verification, icon: Shield },
    { label: t.icpConsulting, leadSchmiede: leadSchmiede.icpConsulting, competitor: comp.icpConsulting, icon: Users, isBoolean: true },
    { label: t.gdprCompliance, leadSchmiede: leadSchmiede.gdprCompliance, competitor: comp.gdprCompliance, icon: Shield },
    { label: t.dataQuality, leadSchmiede: leadSchmiede.dataQuality, competitor: comp.dataQuality, icon: Check },
    { label: t.support, leadSchmiede: leadSchmiede.support, competitor: comp.support, icon: Users }
  ];

  return (
    <div ref={sectionRef}>
      {/* Comparison Table */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(26, 26, 46, 0.08)',
          border: '1px solid rgba(74, 78, 105, 0.1)',
          marginBottom: '48px',
          ...fadeInUp(0.1)
        }}
      >
        {/* Table Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr 1fr',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)',
            padding: '24px 32px'
          }}
        >
          <div style={{ color: '#ffffff', fontFamily: '"Source Sans 3", sans-serif', fontWeight: 600 }}>
            {t.comparisonTitle}
          </div>
          {!isMobile && (
            <>
              <div
                style={{
                  color: '#ffffff',
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontWeight: 600,
                  textAlign: 'center',
                  background: 'rgba(224, 122, 95, 0.2)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  margin: '-8px 0'
                }}
              >
                Lead-Schmiede
              </div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontFamily: '"Source Sans 3", sans-serif', textAlign: 'center' }}>
                {comp.name}
              </div>
            </>
          )}
        </div>

        {/* Table Rows */}
        {comparisonRows.map((row, index) => (
          <div
            key={index}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr 1fr',
              padding: isMobile ? '16px 24px' : '20px 32px',
              borderBottom: index < comparisonRows.length - 1 ? '1px solid rgba(74, 78, 105, 0.1)' : 'none',
              background: row.highlight ? 'rgba(129, 178, 154, 0.05)' : 'transparent',
              alignItems: 'center',
              gap: isMobile ? '12px' : '0'
            }}
          >
            {/* Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <row.icon size={18} color="#4a4e69" />
              <span style={{ fontFamily: '"Source Sans 3", sans-serif', fontWeight: 500, color: '#1a1a2e' }}>
                {row.label}
              </span>
            </div>

            {/* Lead-Schmiede Value */}
            <div
              style={{
                textAlign: isMobile ? 'left' : 'center',
                padding: isMobile ? '8px 12px' : '0',
                background: isMobile ? 'rgba(129, 178, 154, 0.1)' : 'transparent',
                borderRadius: '8px'
              }}
            >
              {isMobile && (
                <span style={{ fontFamily: '"Source Sans 3", sans-serif', fontSize: '0.75rem', color: '#9a8c98', display: 'block', marginBottom: '4px' }}>
                  Lead-Schmiede
                </span>
              )}
              {row.isBoolean ? (
                row.leadSchmiede ? (
                  <Check size={20} color="#2d6a4f" />
                ) : (
                  <X size={20} color="#dc2626" />
                )
              ) : (
                <span style={{ fontFamily: '"Source Sans 3", sans-serif', fontWeight: 600, color: '#2d6a4f' }}>
                  {row.leadSchmiede}
                </span>
              )}
            </div>

            {/* Competitor Value */}
            <div
              style={{
                textAlign: isMobile ? 'left' : 'center',
                padding: isMobile ? '8px 12px' : '0',
                background: isMobile ? 'rgba(74, 78, 105, 0.05)' : 'transparent',
                borderRadius: '8px'
              }}
            >
              {isMobile && (
                <span style={{ fontFamily: '"Source Sans 3", sans-serif', fontSize: '0.75rem', color: '#9a8c98', display: 'block', marginBottom: '4px' }}>
                  {comp.name}
                </span>
              )}
              {row.isBoolean ? (
                row.competitor ? (
                  <Check size={20} color="#2d6a4f" />
                ) : (
                  <X size={20} color="#dc2626" />
                )
              ) : (
                <span style={{ fontFamily: '"Source Sans 3", sans-serif', color: '#4a4e69' }}>
                  {row.competitor}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pros/Cons Section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '24px',
          marginBottom: '48px',
          ...fadeInUp(0.2)
        }}
      >
        {/* When Competitor is better */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(74, 78, 105, 0.1)'
          }}
        >
          <h3
            style={{
              fontFamily: '"Source Sans 3", sans-serif',
              fontSize: '1.125rem',
              fontWeight: 600,
              color: '#1a1a2e',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <AlertTriangle size={18} color="#f4a261" />
            {t.prosTitle}
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {comp.pros.map((pro, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  marginBottom: '12px',
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontSize: '0.9375rem',
                  color: '#4a4e69'
                }}
              >
                <Check size={16} color="#81b29a" style={{ marginTop: '2px', flexShrink: 0 }} />
                {pro}
              </li>
            ))}
          </ul>
        </div>

        {/* When Lead-Schmiede is better */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(129, 178, 154, 0.05) 0%, rgba(129, 178, 154, 0.1) 100%)',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(129, 178, 154, 0.2)'
          }}
        >
          <h3
            style={{
              fontFamily: '"Source Sans 3", sans-serif',
              fontSize: '1.125rem',
              fontWeight: 600,
              color: '#1a1a2e',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Check size={18} color="#2d6a4f" />
            {t.consTitle}
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {t.leadSchmiedePros.map((pro, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  marginBottom: '12px',
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontSize: '0.9375rem',
                  color: '#2d6a4f',
                  fontWeight: 500
                }}
              >
                <Check size={16} color="#2d6a4f" style={{ marginTop: '2px', flexShrink: 0 }} />
                {pro}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #5c4d7d 100%)',
          borderRadius: '24px',
          padding: isMobile ? '32px 24px' : '48px',
          textAlign: 'center',
          ...fadeInUp(0.3)
        }}
      >
        <h3
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: isMobile ? '1.5rem' : '2rem',
            fontWeight: 400,
            color: '#ffffff',
            marginBottom: '24px'
          }}
        >
          {t.ctaTitle}
        </h3>
        <button
          onClick={handleCTAClick}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'linear-gradient(135deg, #e07a5f 0%, #f4a261 100%)',
            color: '#ffffff',
            fontFamily: '"Source Sans 3", sans-serif',
            fontSize: '1.125rem',
            fontWeight: 600,
            padding: '18px 36px',
            borderRadius: '100px',
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
          {t.ctaButton}
          <ArrowRight size={20} />
        </button>
        <p
          style={{
            fontFamily: '"Source Sans 3", sans-serif',
            fontSize: '0.875rem',
            color: 'rgba(255, 255, 255, 0.6)',
            marginTop: '16px'
          }}
        >
          {t.ctaSubtext}
        </p>
      </div>
    </div>
  );
}
