import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { translations, type Language } from '../../i18n/translations';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

interface FAQSectionProps {
  lang?: Language;
}

export default function FAQSection({ lang = 'de' }: FAQSectionProps) {
  const t = translations[lang].faq;
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const faqData: FAQCategory[] = t.categories;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
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

  const handleQuestionClick = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

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
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: isMobile ? '80px' : '120px',
        paddingBottom: isMobile ? '80px' : '120px',
        paddingLeft: '20px',
        paddingRight: '20px'
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
            color: '#1a1a2e',
            textAlign: 'center',
            marginBottom: isMobile ? '48px' : '64px',
            letterSpacing: '-0.02em'
          }}
        >
          {t.title}
        </h2>

        {/* Category Tabs */}
        <div
          style={{
            ...fadeInUp(0.1),
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '12px' : '8px',
            marginBottom: isMobile ? '32px' : '48px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {faqData.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                setActiveQuestion(null);
              }}
              style={{
                fontFamily: 'Source Sans 3, sans-serif',
                fontSize: '0.9375rem',
                fontWeight: activeTab === index ? 600 : 500,
                color: activeTab === index ? '#ffffff' : '#4a4e69',
                background: activeTab === index
                  ? 'linear-gradient(135deg, #1a1a2e 0%, #5c4d7d 100%)'
                  : 'transparent',
                border: activeTab === index
                  ? 'none'
                  : '1px solid rgba(26, 26, 46, 0.15)',
                cursor: 'pointer',
                padding: '12px 24px',
                borderRadius: '100px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== index) {
                  e.currentTarget.style.borderColor = '#e07a5f';
                  e.currentTarget.style.color = '#e07a5f';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== index) {
                  e.currentTarget.style.borderColor = 'rgba(26, 26, 46, 0.15)';
                  e.currentTarget.style.color = '#4a4e69';
                }
              }}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* FAQ Items (Accordion) */}
        <div style={{ ...fadeInUp(0.2), display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqData[activeTab].items.map((item, index) => {
            const isOpen = activeQuestion === index;

            return (
              <div
                key={index}
                style={{
                  backgroundColor: '#f8f9fa',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: isOpen
                    ? '1px solid rgba(224, 122, 95, 0.3)'
                    : '1px solid rgba(26, 26, 46, 0.08)',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen
                    ? '0 8px 32px rgba(26, 26, 46, 0.08)'
                    : '0 2px 8px rgba(26, 26, 46, 0.02)'
                }}
              >
                {/* Question Button */}
                <button
                  onClick={() => handleQuestionClick(index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: isMobile ? '20px 24px' : '24px 32px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: isMobile ? '1rem' : '1.125rem',
                      fontWeight: 600,
                      color: '#1a1a2e',
                      flex: 1,
                      paddingRight: '16px',
                      lineHeight: 1.4
                    }}
                  >
                    {item.question}
                  </span>

                  {/* Plus/Minus Icon */}
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '12px',
                      backgroundColor: isOpen ? '#e07a5f' : 'rgba(26, 26, 46, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      flexShrink: 0
                    }}
                  >
                    {isOpen ? (
                      <Minus size={20} color="#ffffff" strokeWidth={2.5} />
                    ) : (
                      <Plus size={20} color="#4a4e69" strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                {/* Answer (Collapsible) */}
                <div
                  style={{
                    maxHeight: isOpen ? '300px' : '0',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease, opacity 0.3s ease'
                  }}
                >
                  <div
                    style={{
                      padding: isMobile ? '0 24px 24px' : '0 32px 32px',
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: isMobile ? '0.9375rem' : '1rem',
                      color: '#4a4e69',
                      lineHeight: 1.7
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
