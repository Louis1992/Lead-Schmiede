import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { translations, type Language } from '../../i18n/translations';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface MenuItem {
  label: string;
  href: string;
}

interface HeaderLeadGeniesProps {
  lang?: Language;
  menuItems?: MenuItem[];
  ctaText?: string;
  ctaHref?: string;
}

export default function HeaderLeadGenies({
  lang = 'de',
  menuItems,
  ctaText,
  ctaHref = 'https://calendly.com/louis-mickley-leadgenies/30min'
}: HeaderLeadGeniesProps) {

  const t = translations[lang].header;
  const rawMenuItems = menuItems || t.menuItems;

  // Transform menu items to have absolute paths so they work from subpages
  const finalMenuItems = rawMenuItems.map(item => {
    if (item.href.startsWith('#')) {
      const basePath = lang === 'en' ? '/en' : '/';
      const prefix = basePath === '/' ? '' : basePath;
      return { ...item, href: `${prefix}/${item.href}`.replace('//', '/') };
    }
    return item;
  });

  const finalCtaText = ctaText || t.ctaText;

  const headerMaxWidth = lang === 'de' ? '1130px' : '1040px';
  const headerShrunkWidth = lang === 'de' ? '325px' : '290px';
  const headerShrunkOvershoot = lang === 'de' ? '320px' : '285px';
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const langSwitcherRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initial fade-in animation on page load
  useEffect(() => {
    if (!isMounted || !headerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.3
        }
      );
    });

    return () => ctx.revert();
  }, [isMounted, isMobile]);

  // Scroll detection and header shrink/expand animation (desktop only)
  useEffect(() => {
    if (!isMounted || !headerRef.current || !navItemsRef.current || !logoRef.current) return;

    const handleScroll = () => {
      const isDesktop = window.innerWidth >= 768;
      if (!isDesktop) return;

      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current && currentScrollY > 100;

      if (scrollingDown !== isScrollingDown) {
        setIsScrollingDown(scrollingDown);
        setIsCompact(scrollingDown);

        if (scrollingDown) {
          gsap.to([navItemsRef.current, langSwitcherRef.current], {
            opacity: 0,
            duration: 0.15,
            ease: 'power2.out',
            onComplete: () => {
              gsap.to([navItemsRef.current, langSwitcherRef.current], {
                width: 0,
                marginLeft: 0,
                marginRight: 0,
                duration: 0.15,
                ease: 'power2.inOut',
                onComplete: () => {
                  gsap.to(headerRef.current, {
                    maxWidth: headerShrunkOvershoot,
                    duration: 0.25,
                    ease: 'power2.out',
                    onComplete: () => {
                      gsap.to(headerRef.current, {
                        maxWidth: headerShrunkWidth,
                        duration: 0.15,
                        ease: 'power2.inOut'
                      });
                    }
                  });
                }
              });
            }
          });
        } else {
          const expandOvershoot = lang === 'de' ? '1135px' : '1045px';
          const expandTarget = lang === 'de' ? '1130px' : '1040px';

          gsap.to(headerRef.current, {
            maxWidth: expandOvershoot,
            duration: 0.25,
            ease: 'power2.out',
            onComplete: () => {
              gsap.to(headerRef.current, {
                maxWidth: expandTarget,
                duration: 0.15,
                ease: 'power2.inOut'
              });
            }
          });

          gsap.to([navItemsRef.current, langSwitcherRef.current], {
            opacity: 1,
            width: 'auto',
            duration: 0.25,
            ease: 'power2.inOut',
            delay: 0.15
          });
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMounted, isScrollingDown, lang]);

  // Mobile menu toggle animation
  useEffect(() => {
    if (!isMounted || !mobileMenuRef.current || !headerRef.current) return;

    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });

      gsap.to(headerRef.current, {
        backgroundColor: 'rgba(26, 26, 46, 0.95)',
        duration: 0.3,
        ease: 'power2.out'
      });

      const menuItemElements = mobileMenuRef.current.querySelectorAll('.mobile-menu-item');
      gsap.fromTo(
        menuItemElements,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          delay: 0.1,
          ease: 'power2.out'
        }
      );

      const ctaButton = mobileMenuRef.current.querySelector('.mobile-cta-button');
      if (ctaButton) {
        gsap.fromTo(
          ctaButton,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay: 0.1 + menuItemElements.length * 0.1,
            ease: 'power2.out'
          }
        );
      }

      document.body.style.overflow = 'hidden';
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      });

      gsap.to(headerRef.current, {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        duration: 0.3,
        ease: 'power2.out'
      });

      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen, isMounted]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetPath = lang === 'en' ? '/en' : '/';
    const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
    const targetPathClean = targetPath.replace(/\/$/, "") || "/";

    if (currentPath === targetPathClean) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!isMounted) return null;

  return (
    <>
      {/* Desktop & Mobile Header */}
      <header
        ref={headerRef}
        className="fixed top-[25px] left-1/2 -translate-x-1/2 z-50 px-6 py-3 backdrop-blur-lg bg-white/60 rounded-[99px] shadow-lg opacity-0"
        style={{
          width: 'calc(100% - 50px)',
          maxWidth: headerMaxWidth
        }}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href={lang === 'en' ? '/en' : '/'}
            onClick={handleLogoClick}
            className="flex-shrink-0 transition-transform hover:scale-105"
          >
            <img
              ref={logoRef as React.RefObject<HTMLImageElement>}
              src="/logo-lead-schmiede.png"
              alt="Lead-Schmiede"
              style={{
                height: isCompact ? '32px' : '48px',
                width: 'auto',
                transition: 'all 0.3s ease',
                filter: isMobileMenuOpen ? 'brightness(0) invert(1)' : 'none'
              }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            ref={navItemsRef}
            className="hidden md:flex items-center gap-6 overflow-hidden"
          >
            {finalMenuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-medium hover:opacity-70 transition-opacity whitespace-nowrap"
                style={{
                  fontFamily: 'Source Sans 3, sans-serif',
                  color: '#1a1a2e'
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Language Switcher */}
          <div
            ref={langSwitcherRef}
            className="hidden md:flex items-center gap-1 overflow-hidden"
          >
            <a
              href="/"
              onClick={() => {
                document.cookie = 'preferred_lang=de; path=/; max-age=31536000';
              }}
              className="text-sm transition-all duration-200 px-2 py-1 rounded"
              style={{
                fontFamily: 'Source Sans 3, sans-serif',
                fontWeight: lang === 'de' ? 600 : 400,
                color: lang === 'de' ? '#1a1a2e' : 'rgba(26, 26, 46, 0.5)',
                backgroundColor: lang === 'de' ? 'rgba(224, 122, 95, 0.15)' : 'transparent'
              }}
            >
              DE
            </a>
            <span style={{ color: 'rgba(26, 26, 46, 0.3)' }}>|</span>
            <a
              href="/en"
              onClick={() => {
                document.cookie = 'preferred_lang=en; path=/; max-age=31536000';
              }}
              className="text-sm transition-all duration-200 px-2 py-1 rounded"
              style={{
                fontFamily: 'Source Sans 3, sans-serif',
                fontWeight: lang === 'en' ? 600 : 400,
                color: lang === 'en' ? '#1a1a2e' : 'rgba(26, 26, 46, 0.5)',
                backgroundColor: lang === 'en' ? 'rgba(224, 122, 95, 0.15)' : 'transparent'
              }}
            >
              EN
            </a>
          </div>

          {/* Desktop CTA Button */}
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center px-5 py-2.5 text-white text-sm rounded-full font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0"
            style={{
              fontFamily: 'Source Sans 3, sans-serif',
              background: 'linear-gradient(135deg, #e07a5f 0%, #f4a261 100%)',
              boxShadow: '0 4px 15px rgba(224, 122, 95, 0.3)'
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
            {finalCtaText}
          </a>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 transition-transform hover:scale-105"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen
                ? 'bg-white rotate-45 translate-y-2'
                : 'bg-[#1a1a2e]'
                }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen
                ? 'bg-white opacity-0'
                : 'bg-[#1a1a2e]'
                }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen
                ? 'bg-white -rotate-45 -translate-y-2'
                : 'bg-[#1a1a2e]'
                }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 backdrop-blur-lg z-40 flex flex-col items-center justify-center opacity-0"
          style={{
            fontFamily: 'Source Sans 3, sans-serif',
            background: 'rgba(26, 26, 46, 0.95)'
          }}
        >
          {/* Mobile Menu Items */}
          <nav className="flex flex-col items-center gap-8 mb-12">
            {finalMenuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="mobile-menu-item text-white text-2xl font-medium hover:opacity-70 transition-opacity"
                onClick={handleMobileMenuItemClick}
                style={{ opacity: 0 }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile CTA Button */}
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-cta-button px-8 py-4 text-white rounded-full text-lg font-medium transition-all duration-300"
            onClick={handleMobileMenuItemClick}
            style={{
              opacity: 0,
              background: 'linear-gradient(135deg, #e07a5f 0%, #f4a261 100%)',
              boxShadow: '0 4px 20px rgba(224, 122, 95, 0.4)'
            }}
          >
            {finalCtaText}
          </a>

          {/* Mobile Language Switcher */}
          <div
            className="mobile-menu-item flex items-center gap-2 mt-8"
            style={{ opacity: 0 }}
          >
            <a
              href="/"
              onClick={() => {
                document.cookie = 'preferred_lang=de; path=/; max-age=31536000';
                handleMobileMenuItemClick();
              }}
              className="text-base transition-all duration-200 px-3 py-1.5 rounded"
              style={{
                fontWeight: lang === 'de' ? 600 : 400,
                color: lang === 'de' ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                backgroundColor: lang === 'de' ? 'rgba(224, 122, 95, 0.3)' : 'transparent'
              }}
            >
              DE
            </a>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
            <a
              href="/en"
              onClick={() => {
                document.cookie = 'preferred_lang=en; path=/; max-age=31536000';
                handleMobileMenuItemClick();
              }}
              className="text-base transition-all duration-200 px-3 py-1.5 rounded"
              style={{
                fontWeight: lang === 'en' ? 600 : 400,
                color: lang === 'en' ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                backgroundColor: lang === 'en' ? 'rgba(224, 122, 95, 0.3)' : 'transparent'
              }}
            >
              EN
            </a>
          </div>
        </div>
      )}
    </>
  );
}
