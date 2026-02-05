import React from 'react';
import { Linkedin } from 'lucide-react';
import { translations, type Language } from '../../i18n/translations';

interface FooterSectionProps {
  lang?: Language;
}

export default function FooterSection({ lang = 'de' }: FooterSectionProps) {
  const currentYear = new Date().getFullYear();
  const t = translations[lang];

  const navLinks = t.header.menuItems;
  const legalLinks = t.footer.legal || [];

  return (
    <footer
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#1a1a2e',
        color: '#ffffff',
        paddingTop: '80px',
        paddingBottom: '40px',
        paddingLeft: '20px',
        paddingRight: '20px'
      }}
    >
      {/* Subtle top border gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(224, 122, 95, 0.3), transparent)'
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2.5rem'
        }}
      >
        {/* Logo / Brand */}
        <a
          href={lang === 'en' ? '/en' : '/'}
          style={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <img
            src="/logo-lead-schmiede.png"
            alt="Lead-Schmiede"
            style={{
              height: '48px',
              width: 'auto',
              filter: 'brightness(0) invert(1)'
            }}
          />
          <span
            style={{
              fontFamily: 'Source Sans 3, sans-serif',
              fontSize: '0.875rem',
              color: 'rgba(255, 255, 255, 0.5)'
            }}
          >
            {t.footer.tagline}
          </span>
        </a>

        {/* Navigation Links */}
        <nav
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem 2.5rem'
          }}
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              style={{
                fontFamily: 'Source Sans 3, sans-serif',
                fontSize: '0.9375rem',
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#e07a5f';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social & Contact */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <a
            href="https://www.linkedin.com/in/louis-mickley-7615bb177/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e07a5f';
              e.currentTarget.style.borderColor = '#e07a5f';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Divider */}
        <div
          style={{
            width: '100%',
            maxWidth: '400px',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.1)'
          }}
        />

        {/* Language Switcher */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <a
            href="/"
            onClick={() => {
              document.cookie = 'preferred_lang=de; path=/; max-age=31536000';
            }}
            style={{
              fontFamily: 'Source Sans 3, sans-serif',
              fontSize: '0.875rem',
              fontWeight: lang === 'de' ? 600 : 400,
              color: lang === 'de' ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
              textDecoration: 'none',
              padding: '0.5rem 0.75rem',
              borderRadius: '8px',
              backgroundColor: lang === 'de' ? 'rgba(224, 122, 95, 0.2)' : 'transparent',
              transition: 'all 0.2s ease'
            }}
          >
            DE
          </a>
          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
          <a
            href="/en"
            onClick={() => {
              document.cookie = 'preferred_lang=en; path=/; max-age=31536000';
            }}
            style={{
              fontFamily: 'Source Sans 3, sans-serif',
              fontSize: '0.875rem',
              fontWeight: lang === 'en' ? 600 : 400,
              color: lang === 'en' ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
              textDecoration: 'none',
              padding: '0.5rem 0.75rem',
              borderRadius: '8px',
              backgroundColor: lang === 'en' ? 'rgba(224, 122, 95, 0.2)' : 'transparent',
              transition: 'all 0.2s ease'
            }}
          >
            EN
          </a>
        </div>

        {/* Copyright & Legal */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <p
            style={{
              fontFamily: 'Source Sans 3, sans-serif',
              fontSize: '0.875rem',
              color: 'rgba(255, 255, 255, 0.4)',
              margin: 0,
              textAlign: 'center'
            }}
          >
            {t.footer.copyright.replace('{year}', currentYear.toString())}
          </p>

          {/* Legal Links */}
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {legalLinks.map((link: { label: string; href: string }, index: number) => (
              <a
                key={index}
                href={link.href}
                style={{
                  fontFamily: 'Source Sans 3, sans-serif',
                  fontSize: '0.8125rem',
                  color: 'rgba(255, 255, 255, 0.35)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.35)';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
