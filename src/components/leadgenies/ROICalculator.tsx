import React, { useState, useEffect, useRef } from 'react';
import { Calculator, Clock, Euro, TrendingDown, TrendingUp, ArrowRight } from 'lucide-react';
import { type Language } from '../../i18n/translations';

interface ROICalculatorProps {
  lang?: Language;
}

export default function ROICalculator({ lang = 'de' }: ROICalculatorProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Calculator state
  const [leadsPerMonth, setLeadsPerMonth] = useState(100);
  const [minutesPerLead, setMinutesPerLead] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(80);

  // Animated counters
  const [displayedSavings, setDisplayedSavings] = useState(0);
  const [displayedHours, setDisplayedHours] = useState(0);

  const t = lang === 'de' ? {
    badge: 'Kostenrechner',
    title: 'Wie viel sparen Sie mit Lead-Schmiede?',
    subtitle: 'Berechnen Sie Ihre potenzielle Zeit- und Kostenersparnis',
    leadsLabel: 'Leads pro Monat',
    minutesLabel: 'Minuten pro Lead (Recherche)',
    hourlyLabel: 'Ihr interner Stundensatz',
    currentTitle: 'Aktuell verbrennen Sie:',
    hoursLabel: 'Stunden/Monat',
    costsLabel: 'Opportunitätskosten',
    withUsTitle: 'Mit Lead-Schmiede:',
    priceLabel: 'für {leads} verifizierte Leads',
    savingsTitle: 'Ihre Ersparnis:',
    perMonth: '/Monat',
    cta: 'Jetzt Erstgespräch buchen',
    ctaSubtext: 'Unverbindlich • 15 Min • Sofort Klarheit'
  } : {
    badge: 'Cost Calculator',
    title: 'How much will you save with Lead-Schmiede?',
    subtitle: 'Calculate your potential time and cost savings',
    leadsLabel: 'Leads per month',
    minutesLabel: 'Minutes per lead (research)',
    hourlyLabel: 'Your internal hourly rate',
    currentTitle: 'Currently you spend:',
    hoursLabel: 'hours/month',
    costsLabel: 'Opportunity cost',
    withUsTitle: 'With Lead-Schmiede:',
    priceLabel: 'for {leads} verified leads',
    savingsTitle: 'Your savings:',
    perMonth: '/month',
    cta: 'Book Free Consultation',
    ctaSubtext: 'No commitment • 15 min • Instant clarity'
  };

  // Calculations
  const hoursCurrently = (leadsPerMonth * minutesPerLead) / 60;
  const costCurrently = hoursCurrently * hourlyRate;
  const leadSchmiedePrice = leadsPerMonth <= 100 ? 179
    : leadsPerMonth <= 500 ? Math.ceil(leadsPerMonth / 100) * 140
    : Math.ceil(leadsPerMonth / 100) * 110;
  const savings = Math.max(0, costCurrently - leadSchmiedePrice);

  // Animate numbers
  useEffect(() => {
    const duration = 500;
    const steps = 20;
    const savingsStep = savings / steps;
    const hoursStep = hoursCurrently / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setDisplayedSavings(Math.round(savingsStep * currentStep));
      setDisplayedHours(Math.round(hoursStep * currentStep * 10) / 10);

      if (currentStep >= steps) {
        setDisplayedSavings(Math.round(savings));
        setDisplayedHours(Math.round(hoursCurrently * 10) / 10);
        clearInterval(interval);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [savings, hoursCurrently]);

  // Visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  // Mobile check
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

  return (
    <section
      ref={sectionRef}
      id="calculator"
      style={{
        padding: isMobile ? '60px 20px' : '100px 20px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f8fa 100%)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px', ...fadeInUp(0) }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, rgba(224, 122, 95, 0.1) 0%, rgba(244, 162, 97, 0.15) 100%)',
              color: '#e07a5f',
              fontFamily: '"Source Sans 3", sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 600,
              padding: '8px 16px',
              borderRadius: '100px',
              marginBottom: '20px'
            }}
          >
            <Calculator size={16} />
            {t.badge}
          </span>
          <h2
            style={{
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 400,
              color: '#1a1a2e',
              marginBottom: '12px'
            }}
          >
            {t.title}
          </h2>
          <p
            style={{
              fontFamily: '"Source Sans 3", sans-serif',
              fontSize: '1.125rem',
              color: '#4a4e69',
              maxWidth: '500px',
              margin: '0 auto'
            }}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Calculator Card */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: isMobile ? '24px' : '40px',
            boxShadow: '0 8px 40px rgba(26, 26, 46, 0.08)',
            border: '1px solid rgba(74, 78, 105, 0.1)',
            ...fadeInUp(0.1)
          }}
        >
          {/* Inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '40px' }}>
            {/* Leads Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label
                  style={{
                    fontFamily: '"Source Sans 3", sans-serif',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: '#1a1a2e'
                  }}
                >
                  {t.leadsLabel}
                </label>
                <span
                  style={{
                    fontFamily: '"Space Grotesk", monospace',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#e07a5f'
                  }}
                >
                  {leadsPerMonth}
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={leadsPerMonth}
                onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '4px',
                  background: `linear-gradient(to right, #e07a5f 0%, #e07a5f ${((leadsPerMonth - 50) / 4950) * 100}%, #e5e7eb ${((leadsPerMonth - 50) / 4950) * 100}%, #e5e7eb 100%)`,
                  appearance: 'none',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                <span style={{ fontFamily: '"Source Sans 3", sans-serif', fontSize: '0.75rem', color: '#9a8c98' }}>50</span>
                <span style={{ fontFamily: '"Source Sans 3", sans-serif', fontSize: '0.75rem', color: '#9a8c98' }}>5.000</span>
              </div>
            </div>

            {/* Minutes Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label
                  style={{
                    fontFamily: '"Source Sans 3", sans-serif',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: '#1a1a2e'
                  }}
                >
                  {t.minutesLabel}
                </label>
                <span
                  style={{
                    fontFamily: '"Space Grotesk", monospace',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#e07a5f'
                  }}
                >
                  {minutesPerLead} min
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                step="1"
                value={minutesPerLead}
                onChange={(e) => setMinutesPerLead(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '4px',
                  background: `linear-gradient(to right, #e07a5f 0%, #e07a5f ${((minutesPerLead - 2) / 28) * 100}%, #e5e7eb ${((minutesPerLead - 2) / 28) * 100}%, #e5e7eb 100%)`,
                  appearance: 'none',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                <span style={{ fontFamily: '"Source Sans 3", sans-serif', fontSize: '0.75rem', color: '#9a8c98' }}>2 min</span>
                <span style={{ fontFamily: '"Source Sans 3", sans-serif', fontSize: '0.75rem', color: '#9a8c98' }}>30 min</span>
              </div>
            </div>

            {/* Hourly Rate Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label
                  style={{
                    fontFamily: '"Source Sans 3", sans-serif',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: '#1a1a2e'
                  }}
                >
                  {t.hourlyLabel}
                </label>
                <span
                  style={{
                    fontFamily: '"Space Grotesk", monospace',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#e07a5f'
                  }}
                >
                  €{hourlyRate}
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="150"
                step="10"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '4px',
                  background: `linear-gradient(to right, #e07a5f 0%, #e07a5f ${((hourlyRate - 30) / 120) * 100}%, #e5e7eb ${((hourlyRate - 30) / 120) * 100}%, #e5e7eb 100%)`,
                  appearance: 'none',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                <span style={{ fontFamily: '"Source Sans 3", sans-serif', fontSize: '0.75rem', color: '#9a8c98' }}>€30</span>
                <span style={{ fontFamily: '"Source Sans 3", sans-serif', fontSize: '0.75rem', color: '#9a8c98' }}>€150</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(74, 78, 105, 0.1)', margin: '0 -20px 32px', width: 'calc(100% + 40px)' }} />

          {/* Results */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr auto 1fr auto 1fr',
              gap: isMobile ? '24px' : '0',
              alignItems: 'center'
            }}
          >
            {/* Current Cost */}
            <div style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontSize: '0.8125rem',
                  color: '#9a8c98',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <TrendingDown size={14} color="#dc2626" />
                {t.currentTitle}
              </p>
              <p
                style={{
                  fontFamily: '"Space Grotesk", monospace',
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  fontWeight: 600,
                  color: '#dc2626',
                  margin: '0 0 4px 0'
                }}
              >
                {displayedHours}h
              </p>
              <p
                style={{
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontSize: '0.875rem',
                  color: '#4a4e69',
                  margin: 0
                }}
              >
                = €{Math.round(costCurrently).toLocaleString('de-DE')} {t.costsLabel}
              </p>
            </div>

            {/* Arrow */}
            {!isMobile && (
              <ArrowRight size={24} color="#9a8c98" style={{ margin: '0 16px' }} />
            )}

            {/* Lead-Schmiede Price */}
            <div style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontSize: '0.8125rem',
                  color: '#9a8c98',
                  marginBottom: '8px'
                }}
              >
                {t.withUsTitle}
              </p>
              <p
                style={{
                  fontFamily: '"Space Grotesk", monospace',
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  fontWeight: 600,
                  color: '#1a1a2e',
                  margin: '0 0 4px 0'
                }}
              >
                €{leadSchmiedePrice}
              </p>
              <p
                style={{
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontSize: '0.875rem',
                  color: '#4a4e69',
                  margin: 0
                }}
              >
                {t.priceLabel.replace('{leads}', leadsPerMonth.toString())}
              </p>
            </div>

            {/* Arrow */}
            {!isMobile && (
              <ArrowRight size={24} color="#9a8c98" style={{ margin: '0 16px' }} />
            )}

            {/* Savings */}
            <div
              style={{
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(129, 178, 154, 0.1) 0%, rgba(129, 178, 154, 0.2) 100%)',
                borderRadius: '16px',
                padding: '20px'
              }}
            >
              <p
                style={{
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontSize: '0.8125rem',
                  color: '#2d6a4f',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <TrendingUp size={14} color="#2d6a4f" />
                {t.savingsTitle}
              </p>
              <p
                style={{
                  fontFamily: '"Space Grotesk", monospace',
                  fontSize: isMobile ? '2rem' : '2.5rem',
                  fontWeight: 700,
                  color: '#2d6a4f',
                  margin: '0 0 4px 0'
                }}
              >
                €{displayedSavings.toLocaleString('de-DE')}
              </p>
              <p
                style={{
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontSize: '0.875rem',
                  color: '#2d6a4f',
                  margin: 0
                }}
              >
                {t.perMonth}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              onClick={handleCTAClick}
              style={{
                fontFamily: '"Source Sans 3", sans-serif',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #e07a5f 0%, #f4a261 100%)',
                border: 'none',
                borderRadius: '100px',
                padding: '16px 32px',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(224, 122, 95, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(224, 122, 95, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(224, 122, 95, 0.3)';
              }}
            >
              {t.cta}
            </button>
            <p
              style={{
                fontFamily: '"Source Sans 3", sans-serif',
                fontSize: '0.8125rem',
                color: '#9a8c98',
                marginTop: '12px'
              }}
            >
              {t.ctaSubtext}
            </p>
          </div>
        </div>
      </div>

      {/* Slider Custom Styles */}
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #e07a5f;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(224, 122, 95, 0.3);
          transition: all 0.2s ease;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(224, 122, 95, 0.4);
        }
        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #e07a5f;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(224, 122, 95, 0.3);
        }
      `}</style>
    </section>
  );
}
