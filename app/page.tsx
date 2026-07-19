'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);
  const [showAllEpisodes, setShowAllEpisodes] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -12; // max 12 deg
    const rotateYValue = ((x - centerX) / centerX) * 12;
    
    setTiltX(rotateXValue);
    setTiltY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };

  return (
    <div id="top" className="min-h-screen overflow-hidden" style={{ fontFamily: 'var(--ff-sans)' }}>
      {/* Navigation */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isScrolled ? (isMobile ? '12px 16px' : '16px 40px') : (isMobile ? '16px 16px' : '24px 60px'),
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          background: isScrolled ? 'rgba(253, 253, 253, 0.97)' : 'rgba(253, 253, 253, 0.9)',
          borderBottom: '1px solid rgba(229, 150, 172, 0.2)',
          boxShadow: isScrolled ? '0 4px 24px rgba(44, 44, 44, 0.06)' : 'none',
          transition: 'padding 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s, box-shadow 0.3s',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '12px' : '0',
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: 'var(--ff-serif)',
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: 600,
            color: '#3A1E2C',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          Mumma Approved
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '36px', flexWrap: isMobile ? 'wrap' : 'nowrap', justifyContent: isMobile ? 'center' : 'flex-end', width: isMobile ? '100%' : 'auto' }}>
          {['About', 'Episodes', 'Topics', 'The Silent Room', 'Listen'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                fontSize: isMobile ? '11px' : '13px',
                fontWeight: 500,
                letterSpacing: '0.05em',
                color: '#2C2C2C',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#E596AC')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#2C2C2C')}
            >
              {link}
            </a>
          ))}
          {!isMobile && (
            <a
              href="https://www.youtube.com/@MummaApproved"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#E596AC',
                color: '#FDFDFD',
                padding: '10px 22px',
                borderRadius: '100px',
                fontSize: '12px',
                letterSpacing: '0.08em',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = '#86B4DA';
                (e.target as HTMLElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = '#E596AC';
                (e.target as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              Listen Now
            </a>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: isMobile ? '120px 24px 60px' : isTablet ? '120px 60px 60px' : '140px 100px 80px',
          overflow: 'hidden',
        }}
      >
        {/* Full-Screen Background Image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/banner-image.png"
            alt="Mumma Approved Banner"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: isMobile ? '75% center' : 'center',
              transform: isMobile ? 'scale(2.2)' : 'none',
            }}
          />
          {/* Gradient Overlay for Readability */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(253, 253, 253, 0.92) 0%, rgba(253, 253, 253, 0.7) 40%, rgba(253, 253, 253, 0.1) 70%)',
            }}
          />
        </div>

        {/* Hero Content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px' }}>
          {/* Tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(253, 253, 253, 0.8)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(229, 150, 172, 0.4)',
              borderRadius: '100px',
              padding: '6px 16px 6px 10px',
              marginBottom: isMobile ? '24px' : '36px',
              animation: 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#E596AC',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }}
            />
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E596AC' }}>
              Now Playing
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--ff-serif)',
              fontSize: isMobile ? '42px' : isTablet ? '64px' : '88px',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              color: '#2C2C2C',
              marginBottom: isMobile ? '20px' : '28px',
              animation: 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.25s both',
            }}
          >
            The questions you&apos;ve been <em style={{ fontStyle: 'italic', color: '#E596AC' }}>googling at midnight</em>
          </h1>

          <p
            style={{
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 500,
              lineHeight: 1.75,
              color: '#3A1E2C',
              maxWidth: '450px',
              marginBottom: isMobile ? '32px' : '44px',
              animation: 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both',
            }}
          >
            The conversations you wish you could have with someone who actually knows. Real answers from real experts, without the fluff.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              animation: 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.55s both',
              flexWrap: isMobile ? 'wrap' : 'nowrap',
            }}
          >
            <a
              href="https://www.youtube.com/@MummaApproved"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#E596AC',
                color: '#FDFDFD',
                fontFamily: 'var(--ff-sans)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.06em',
                padding: '14px 28px',
                borderRadius: '100px',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.22s, transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.22s',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = '#86B4DA';
                (e.target as HTMLElement).style.transform = 'translateY(-2px)';
                (e.target as HTMLElement).style.boxShadow = '0 12px 32px rgba(229, 150, 172, 0.2)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = '#E596AC';
                (e.target as HTMLElement).style.transform = 'translateY(0)';
                (e.target as HTMLElement).style.boxShadow = 'none';
              }}
            >
              Listen now
              <span>→</span>
            </a>
            <a
              href="https://www.youtube.com/@MummaApproved"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(253, 253, 253, 0.6)',
                backdropFilter: 'blur(4px)',
                color: '#2C2C2C',
                fontFamily: 'var(--ff-sans)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.05em',
                padding: '14px 20px',
                borderRadius: '100px',
                textDecoration: 'none',
                border: '1.5px solid rgba(58, 30, 44, 0.35)',
                cursor: 'pointer',
                transition: 'border-color 0.22s, color 0.22s, background 0.22s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#A85848';
                (e.currentTarget as HTMLElement).style.color = '#A85848';
                (e.currentTarget as HTMLElement).style.background = 'rgba(168, 88, 72, 0.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(58, 30, 44, 0.35)';
                (e.currentTarget as HTMLElement).style.color = '#3A1E2C';
                (e.currentTarget as HTMLElement).style.background = 'rgba(253, 253, 253, 0.6)';
              }}
            >
              View Episodes
            </a>
          </div>
        </div>

        {/* Floating Player Card - Repositioned to bottom right */}
        {!isMobile && (
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '60px',
              background: 'rgba(253, 253, 253, 0.9)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(229, 150, 172, 0.4)',
              borderRadius: '20px',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              boxShadow: '0 12px 40px rgba(74, 46, 58, 0.12)',
              zIndex: 2,
              animation: 'fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) 0.7s both',
              width: 'max-content',
            }}
          >
            {/* Play Button */}
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#E596AC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '18px',
                paddingLeft: '4px',
                boxShadow: '0 8px 24px rgba(229, 150, 172, 0.4)'
              }}
            >
              ▶
            </div>
            
            {/* Track Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#E596AC', fontWeight: 600 }}>
                Latest Episode
              </div>
              <div style={{ fontFamily: 'var(--ff-serif)', fontSize: '15px', fontWeight: 500, color: '#3A1E2C' }}>
                Navigating Motherhood
              </div>
            </div>

            {/* Mini Waveform */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginLeft: '12px' }}>
              {[10, 16, 12, 18, 14].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: '2px',
                    height: `${h}px`,
                    background: '#86B4DA',
                    borderRadius: '2px',
                    animation: `wave-dance 1.4s ease-in-out infinite`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Scroll Cue */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: isMobile ? '24px' : '100px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '10px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#3A1E2C',
            fontWeight: 600,
            animation: 'fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) 1s both',
            zIndex: 10,
          }}
        >
          <span>Scroll to explore</span>
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(to bottom, #7A4858, transparent)',
              animation: 'scroll-pulse 2s ease-in-out infinite',
            }}
          />
        </div>
      </section>

      {/* Trust Strip */}
      <section style={{ background: '#3A1E2C', padding: '20px 0', overflow: 'hidden', position: 'relative' }}>
        <div
          style={{
            display: 'flex',
            gap: 0,
            animation: 'marquee 28s linear infinite',
            whiteSpace: 'nowrap',
          }}
        >
          {['Featured in The Hindu', 'Trusted by 50K+ Listeners', 'Award-Winning Conversations', 'Expert Insights'].map((item, i) => (
            <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', padding: '0 40px', fontFamily: 'var(--ff-serif)', fontSize: '15px', fontWeight: 300, fontStyle: 'italic', color: '#F0E3D8', flexShrink: 0 }}>
              {item}
              {i < 3 && <span style={{             color: '#E596AC', fontSize: '10px' }}>•</span>}
            </div>
          ))}
          {['Featured in The Hindu', 'Trusted by 50K+ Listeners', 'Award-Winning Conversations', 'Expert Insights'].map((item, i) => (
            <div key={`dup-${i}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', padding: '0 40px', fontFamily: 'var(--ff-serif)', fontSize: '15px', fontWeight: 300, fontStyle: 'italic', color: '#F0E3D8', flexShrink: 0 }}>
              {item}
              {i < 3 && <span style={{             color: '#E596AC', fontSize: '10px' }}>•</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: isMobile ? '60px 16px' : isTablet ? '80px 40px' : '100px 60px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '0' : '1px', background: 'rgba(229, 150, 172, 0.08)', borderTop: '1px solid rgba(229, 150, 172, 0.2)', borderBottom: '1px solid rgba(229, 150, 172, 0.2)' }}>
        {[
          { number: '60+', label: 'Episodes', desc: 'Thoughtful conversations' },
          { number: '50K+', label: 'Listeners', desc: 'Growing community' },
          { number: '5K+', label: 'Downloads', desc: 'Global reach' },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              background: '#FDFDFD',
              padding: isMobile ? '40px 24px' : isTablet ? '50px 36px' : '60px 48px',
              textAlign: 'center',
              transition: 'background 0.3s',
              cursor: 'pointer',
              borderTop: isMobile && i > 0 ? '1px solid rgba(196, 134, 122, 0.15)' : 'none',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#F5EFE6')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.                  background = '#FDFDFD')}
          >
            <div
              style={{
                fontFamily: 'var(--ff-serif)',
                fontSize: isMobile ? '42px' : isTablet ? '56px' : '72px',
                fontWeight: 300,
                color: '#2C2C2C',
                lineHeight: 1,
                marginBottom: '8px',
              }}
            >
              {stat.number}
            </div>
            <div style={{ fontSize: isMobile ? '10px' : '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A4858', fontWeight: 600 }}>
              {stat.label}
            </div>
            <div style={{ marginTop: '12px', fontSize: isMobile ? '12px' : '14px', color: '#5C3347', fontWeight: 400, lineHeight: 1.6 }}>
              {stat.desc}
            </div>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section id="about" style={{ scrollMarginTop: '100px', padding: isMobile ? '60px 16px' : isTablet ? '80px 40px' : '100px 60px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? '40px' : isTablet ? '60px' : '80px', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(229, 150, 172, 0.12), transparent)',
            pointerEvents: 'none',
          }}
        />

        {/* About Visual */}
        <div style={{ position: 'relative', height: isMobile ? '360px' : isTablet ? '460px' : '600px', order: isMobile ? 2 : 1 }}>
          <div
            style={{
              position: 'absolute',
              width: isMobile ? '300px' : isTablet ? '420px' : '520px',
              height: isMobile ? '360px' : isTablet ? '460px' : '580px',
              top: 0,
              left: 0,
              borderRadius: '24px',
              overflow: 'hidden',
              border: '2px solid #7CB342',
              boxShadow: '0 20px 60px rgba(44, 44, 44, 0.12)',
            }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-09%20at%205.22.31%20PM-XmYglt8qed7EyHxBTVmDYeRfsOPmBT.jpeg"
              alt="Sneha Jhaveri"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '240px',
              background: '#FDFDFD',
              border: '1px solid rgba(196, 134, 122, 0.25)',
              borderRadius: '20px',
              padding: '24px',
              boxShadow: '0 16px 48px rgba(74, 46, 58, 0.1)',
            }}
          >
            <blockquote style={{ fontFamily: 'var(--ff-serif)', fontSize: '16px', fontStyle: 'italic', color: '#3A1E2C', lineHeight: 1.6 }}>
              Every mother has a story worth telling.
            </blockquote>
            <cite style={{ display: 'block', marginTop: '12px', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A4858', fontStyle: 'normal' }}>
              — Our Mission
            </cite>
          </div>
        </div>

        {/* About Content */}
        <div style={{ position: 'relative', zIndex: 2, order: isMobile ? 1 : 2 }}>
          <div className="section-label">Our Story</div>
          <h2
            style={{
              fontFamily: 'var(--ff-serif)',
              fontSize: isMobile ? '32px' : isTablet ? '42px' : '56px',
              fontWeight: 300,
              lineHeight: 1.15,
              color: '#2C2C2C',
              margin: '20px 0 28px',
            }}
          >
            Started out of <em style={{ fontStyle: 'italic', color: '#E596AC' }}>need</em>
          </h2>
          <p style={{ fontSize: isMobile ? '14px' : '15px', fontWeight: 400, lineHeight: 1.85, color: '#6E6E73', marginBottom: '20px' }}>
            Mumma Approved started the way most honest things do — out of need. Sneha Jhaveri, mum and founder, had the same questions every mother has. About her kids, their health, their food, their schools, their wellbeing. And like most of us she was googling at midnight, asking friends, getting half answers and still feeling like she did not quite have the full picture.
          </p>
          <p style={{ fontSize: isMobile ? '14px' : '15px', fontWeight: 400, lineHeight: 1.85, color: '#6E6E73', marginBottom: '20px' }}>
            So she did something about it. She started Mumma Approved to get those answers properly. From the best people in the business. Doctors, nutritionists, educators, wellness experts — the people you wish you had on speed dial as a mum.
          </p>
          <p style={{ fontSize: isMobile ? '14px' : '15px', fontWeight: 400, lineHeight: 1.85, color: '#6E6E73', marginBottom: '20px' }}>
            Now almost a year in, Mumma Approved has become the podcast every mum did not know she needed. Real conversations. Real experts. Real answers. No fluff.
          </p>
          <p style={{ fontSize: isMobile ? '14px' : '15px', fontWeight: 400, lineHeight: 1.85, color: '#5C3347', marginBottom: '20px' }}>
            Whether you&apos;re juggling a career, starting a business, or redefining what motherhood means to you, you&apos;ll find clarity in these conversations.
          </p>
          <div style={{ width: '60px', height: '1px',                 background: '#E596AC', margin: '36px 0' }} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '32px' }}>
            {['Empowering', 'Authentic', 'Insightful'].map((tag) => (
              <button
                key={tag}
                style={{
                  padding: '6px 16px',
                  border: '1.5px solid rgba(92, 51, 71, 0.3)',
                  borderRadius: '100px',
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  color: '#5C3347',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, background 0.2s',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#A85848';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(168, 88, 72, 0.08)';
                  (e.currentTarget as HTMLElement).style.color = '#A85848';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(92, 51, 71, 0.3)';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = '#5C3347';
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section id="episodes" style={{ scrollMarginTop: '100px', padding: isMobile ? '80px 16px' : isTablet ? '100px 40px' : '140px 60px', background: '#FFF8FA', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 50% 80% at 10% 50%, rgba(134, 180, 218, 0.06), transparent), radial-gradient(ellipse 40% 60% at 90% 20%, rgba(229, 150, 172, 0.08), transparent)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: isMobile ? '48px' : '72px', position: 'relative', zIndex: 2, flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '20px' : '0', alignItems: isMobile ? 'flex-start' : 'flex-end' }}>
          <div>
            <div className="section-label">Episodes</div>
            <h2 style={{ fontFamily: 'var(--ff-serif)', fontSize: isMobile ? '32px' : isTablet ? '42px' : '54px', fontWeight: 300, lineHeight: 1.15, color: '#3A1E2C', marginTop: '16px' }}>
              Latest <em style={{ fontStyle: 'italic',             color: '#E596AC' }}>conversations</em>
            </h2>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '20px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Featured Episode */}
          <a
            href="https://youtu.be/9wO4jl55OuU"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#FDFDFD',
              border: '1px solid rgba(229, 150, 172, 0.15)',
              borderRadius: '20px',
              padding: isMobile ? '24px' : isTablet ? '28px' : '36px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(229, 150, 172, 0.45)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(74, 46, 58, 0.1), 0 0 0 1px rgba(196, 134, 122, 0.2)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(229, 150, 172, 0.15)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6E6E73', fontWeight: 600, marginBottom: '16px' }}>
              Latest Episode
            </div>
            <h3 style={{ fontFamily: 'var(--ff-serif)', fontWeight: 400, lineHeight: 1.25, color: '#2C2C2C', marginBottom: '10px', fontSize: isMobile ? '20px' : '30px' }}>
              Watch on YouTube
            </h3>
            <div style={{ fontSize: '12px', color: '#E596AC', letterSpacing: '0.06em', marginBottom: '16px', fontWeight: 600 }}>
              All 27 Episodes
            </div>
            <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#6E6E73', lineHeight: 1.65, fontWeight: 400, marginBottom: 'auto', paddingBottom: '28px' }}>
              Explore authentic conversations with experts, parents, and community members. New episodes released regularly on YouTube.
            </p>
            <div
              style={{
                width: '100%',
                height: isMobile ? '120px' : isTablet ? '140px' : '180px',
                background: 'linear-gradient(135deg, #ECCAD4 0%, #86B4DA 50%, #C2DAEB 100%)',
                borderRadius: '12px',
                marginBottom: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '2.5px' }}>
                {[12, 22, 16, 28, 18, 24, 14, 20].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      width: '2.5px',
                      height: `${h * 0.6}px`,
                      background: '#FDFDFD',
                      borderRadius: '2px',
                      animation: `wave-dance 1.6s ease-in-out infinite`,
                      animationDelay: `${i * 0.12}s`,
                      opacity: 0.6,
                    }}
                  />
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '12px', color: '#6E6E73', letterSpacing: '0.08em', fontWeight: 500 }}>
                YouTube
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#2C2C2C',
                  fontWeight: 600,
                  transition: 'color 0.2s, gap 0.2s',
                }}
              >
                Watch
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#2C2C2C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s, transform 0.2s',
                    fontSize: '12px',
                    color: '#FDFDFD',
                  }}
                >
                  ▶
                </div>
              </div>
            </div>
          </a>

          {/* Episodes Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
              gap: '16px',
            }}
          >

          {/* All Episodes Grid */}
          {[
            { num: '2', link: 'https://youtu.be/EiMqf4BXgp8' },
            { num: '3', link: 'https://youtu.be/gYYNTHkLWjQ' },
            { num: '4', link: 'https://youtu.be/bMC4A-cWjAM' },
            { num: '5', link: 'https://youtu.be/VLxsTB_Jg8g' },
            { num: '6', link: 'https://youtu.be/om9qFm1d410' },
            { num: '7', link: 'https://youtu.be/hCDds3mVWu0' },
            { num: '8', link: 'https://youtu.be/KBSlBQK4Egs' },
            { num: '9', link: 'https://youtu.be/MdTQnd2o2zE' },
            { num: '10', link: 'https://youtu.be/zFmm3P3hvdk' },
            { num: '11', link: 'https://youtu.be/6ptTKWeTGDI' },
            { num: '12', link: 'https://youtu.be/ncXbBroqeQk' },
            { num: '13', link: 'https://youtu.be/lhAsBiQn-ek' },
            { num: '14', link: 'https://youtu.be/PTO8lwprQkk' },
            { num: '15', link: 'https://youtu.be/RUhVs206_-Y' },
            { num: '16', link: 'https://youtu.be/J9R0V6IK4BQ' },
            { num: '17', link: 'https://youtu.be/SdKb8mTY32A' },
            { num: '18', link: 'https://youtu.be/QhtDHyBZrE4' },
            { num: '19', link: 'https://youtu.be/nUcHHkCetb8' },
            { num: '20', link: 'https://youtu.be/QQeXqUlTyXM' },
            { num: '21', link: 'https://youtu.be/xqLVDvpP_Tg' },
            { num: '22', link: 'https://youtu.be/dTuy60o6fpA' },
            { num: '23', link: 'https://youtu.be/q6iirRK6u8s' },
            { num: '24', link: 'https://youtu.be/rbxVBCAcpQw' },
            { num: '25', link: 'https://youtu.be/Hm1SLSQk3Qs' },
            { num: '26', link: 'https://youtu.be/EBKbZClJ79w' },
            { num: '27', link: 'https://youtu.be/cDkkROJ24sA' },
          ]
          .slice(0, showAllEpisodes ? undefined : 8)
          .map((ep, i) => (
            <a
              key={i}
              href={ep.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#FDFDFD',
                border: '1px solid rgba(229, 150, 172, 0.15)',
                borderRadius: '20px',
                padding: '24px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(229, 150, 172, 0.45)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(74, 46, 58, 0.1), 0 0 0 1px rgba(196, 134, 122, 0.2)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(229, 150, 172, 0.15)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px', background: '#F0E3D8', position: 'relative' }}>
                <img
                  src={`https://img.youtube.com/vi/${ep.link.split('/').pop()}/hqdefault.jpg`}
                  alt={`Episode ${ep.num}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6E6E73', fontWeight: 600 }}>
                  YouTube
                </div>
              </div>
              <h3 style={{ fontFamily: 'var(--ff-serif)', fontWeight: 400, lineHeight: 1.25, color: '#2C2C2C', marginBottom: 'auto', fontSize: '18px' }}>
                Episode {ep.num}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '16px' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: '#2C2C2C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s, transform 0.2s',
                    fontSize: '10px',
                    color: '#FDFDFD',
                  }}
                >
                  ▶
                </div>
              </div>
            </a>
          ))}
          </div>

          {/* View All Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', position: 'relative', zIndex: 2 }}>
            <button
              onClick={() => setShowAllEpisodes(!showAllEpisodes)}
              style={{
                background: 'transparent',
                border: '1.5px solid rgba(58, 30, 44, 0.35)',
                color: '#3A1E2C',
                padding: '14px 28px',
                borderRadius: '100px',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#A85848';
                (e.currentTarget as HTMLElement).style.color = '#A85848';
                (e.currentTarget as HTMLElement).style.background = 'rgba(168, 88, 72, 0.05)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(58, 30, 44, 0.35)';
                (e.currentTarget as HTMLElement).style.color = '#3A1E2C';
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              {showAllEpisodes ? 'View Less' : 'View All Episodes'}
              <span style={{ transform: showAllEpisodes ? 'rotate(-90deg)' : 'rotate(90deg)', transition: 'transform 0.3s', display: 'inline-block' }}>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" style={{ scrollMarginTop: '100px', padding: isMobile ? '80px 16px' : isTablet ? '100px 40px' : '140px 60px', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 70% 60% at 50% 80%, rgba(229, 150, 172, 0.1), transparent)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label">What We Do</div>
          <h2 style={{ fontFamily: 'var(--ff-serif)', fontSize: isMobile ? '32px' : isTablet ? '42px' : '54px', fontWeight: 300, lineHeight: 1.15, color: '#2C2C2C', marginTop: '16px', marginBottom: isMobile ? '48px' : '64px' }}>
            Real answers, <em style={{ fontStyle: 'italic', color: '#E596AC' }}>no fluff</em>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: '16px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {[
            { name: 'The Podcast', desc: 'Weekly episodes with doctors, nutritionists, educators & wellness experts. Real conversations, real answers.' },
            { name: 'Our Community', desc: 'A space where mums feel less alone, more informed and completely seen. From Instagram to confidential peer circles.' },
            { name: 'Brand Approvals', desc: 'Every brand we recommend has been tried, tested and genuinely approved by our community.' },
          ].map((topic, i) => (
            <div
              key={i}
              style={{
              background: '#FFF8FA',
              border: '1px solid rgba(229, 150, 172, 0.12)',
                borderRadius: '20px',
                padding: '36px 28px',
                cursor: 'default',
                transition: 'background 0.3s, border-color 0.3s, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#ECCAD4';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(229, 150, 172, 0.3)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#FFF8FA';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(229, 150, 172, 0.12)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <h3 style={{ fontFamily: 'var(--ff-serif)', fontSize: isMobile ? '16px' : '18px', fontWeight: 500, color: '#2C2C2C', marginBottom: '8px', lineHeight: 1.3 }}>
                {topic.name}
              </h3>
              <p style={{ fontSize: isMobile ? '12px' : '13px', color: '#6E6E73', lineHeight: 1.65, fontWeight: 400 }}>
                {topic.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Host Section */}
      <section style={{ padding: isMobile ? '80px 16px' : isTablet ? '100px 40px' : '140px 60px', background: '#3A2520', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? '40px' : isTablet ? '60px' : '80px', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 60% 70% at 70% 50%, rgba(229, 150, 172, 0.08), transparent), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(134, 180, 218, 0.06), transparent)',
            pointerEvents: 'none',
          }}
        />

        {/* Host Visual */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', zIndex: 2, order: isMobile ? 2 : 1 }}>
          <div
            style={{
              width: isMobile ? '220px' : isTablet ? '260px' : '320px',
              height: isMobile ? '280px' : isTablet ? '340px' : '400px',
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              border: '2px solid #7CB342',
            }}
          >
            <img
              src="/meet-sneha.jpeg"
              alt="Sneha Jhaveri"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: 'scale(1.27)',
              }}
            />
            
            <div
              style={{
                position: 'absolute',
                bottom: '28px',
                left: '28px',
                background: 'rgba(250, 247, 242, 0.12)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(250, 247, 242, 0.2)',
                borderRadius: '12px',
                padding: '12px 18px',
                color: '#FAF7F2',
              }}
            >
              <div style={{ fontFamily: 'var(--ff-serif)', fontSize: '18px', fontStyle: 'italic', fontWeight: 300 }}>
                Sneha Jhaveri
              </div>
              <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7CB342', marginTop: '2px' }}>
                Founder
              </div>
            </div>
          </div>
        </div>

        {/* Host Content */}
        <div style={{ position: 'relative', zIndex: 2, order: isMobile ? 1 : 2 }}>
          <div className="section-label" style={{ color: '#7CB342', letterSpacing: '0.1em', fontWeight: 700 }}>
            Founder & Host
          </div>
          <h2
            style={{
              fontFamily: 'var(--ff-serif)',
              fontSize: isMobile ? '28px' : isTablet ? '38px' : '52px',
              fontWeight: 300,
              lineHeight: 1.15,
              color: '#FDFDFD',
              margin: '20px 0 28px',
            }}
          >
            Meet <em style={{ fontStyle: 'italic', color: '#E596AC' }}>Sneha</em>
          </h2>
          <p style={{ fontSize: isMobile ? '13px' : '15px', fontWeight: 400, lineHeight: 1.85, color: 'rgba(240, 227, 216, 0.92)', marginBottom: '20px' }}>
            I wanted a space where mothers could find real clarity in the chaos of parenting. So I created Mumma Approved to bring expert voices directly to you.
          </p>
          <p style={{ fontSize: isMobile ? '13px' : '15px', fontWeight: 400, lineHeight: 1.85, color: 'rgba(240, 227, 216, 0.92)', marginBottom: '20px' }}>
            As a mother and an entrepreneur, I believe every mum deserves good information, deeply researched and simply explained. Through Mumma Approved, I hope to celebrate the complexity of modern motherhood and create space for meaningful conversations.
          </p>
          <div style={{ width: '60px', height: '2px', background: '#7CB342', margin: '36px 0', opacity: 0.6 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Podcast creator', 'Mother of two'].map((trait, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'rgba(240, 227, 216, 0.88)', letterSpacing: '0.02em', fontWeight: 400 }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7CB342', flexShrink: 0 }} />
                {trait}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Silent Room Section */}
      <section
        id="the-silent-room"
        style={{
          padding: isMobile ? '80px 16px' : isTablet ? '100px 40px' : '120px 60px',
          background: '#FDFDFD',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative gradients */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(124, 179, 66, 0.06), transparent), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(124, 179, 66, 0.04), transparent)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : isTablet ? '40px' : '60px', alignItems: 'center' }}>
          <div style={{ maxWidth: '600px' }}>
          <div
            style={{
              fontSize: isMobile ? '14px' : '15px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#6E6E73',
              marginBottom: '24px',
            }}
          >
            An Invitation
          </div>

          <h2
            style={{
              fontFamily: 'var(--ff-serif)',
              fontSize: isMobile ? '32px' : isTablet ? '42px' : '56px',
              fontWeight: 300,
              lineHeight: 1.15,
              color: '#2C2C2C',
              marginBottom: '24px',
            }}
          >
            The Silent Room
          </h2>

          <p
            style={{
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 400,
              lineHeight: 1.85,
              color: '#6E6E73',
              marginBottom: '16px',
            }}
          >
            A private, invitation-only circle for mothers. Small confidential groups, professionally moderated, completely confidential. Your space to finally say the thing.
          </p>

          <p
            style={{
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 400,
              lineHeight: 1.85,
              color: '#6E6E73',
              marginBottom: '16px',
            }}
          >
            The Silent Room is designed for mothers who want deeper connection and meaningful conversation. In safe, intimate circles of 8-12 women, led by trained facilitators, you'll explore real challenges, celebrate wins, and find your tribe. Every conversation stays in the room. Every voice matters.
          </p>

          <p
            style={{
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 400,
              lineHeight: 1.85,
              color: '#6E6E73',
              marginBottom: '32px',
            }}
          >
            We are currently accepting founding members and would love to see if this is the right fit for you.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScm6vKsk_X_mOtqRwfDNY3mrILMn02PokUx46bAK9qwAqJKjw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: '#7CB342',
              color: '#FDFDFD',
              fontFamily: 'var(--ff-sans)',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              padding: '16px 32px',
              borderRadius: '100px',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
              boxShadow: '0 12px 32px rgba(124, 179, 66, 0.25)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 48px rgba(124, 179, 66, 0.35)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(124, 179, 66, 0.25)';
            }}
          >
            Apply as a Founding Member
            <span>→</span>
          </a>

          <p
            style={{
              fontSize: isMobile ? '12px' : '13px',
              fontWeight: 400,
              lineHeight: 1.7,
              color: '#6E6E73',
              marginTop: '20px',
            }}
          >
            Sent with warmth,<br />
            Sneha
          </p>
          </div>

          {/* Community Photo */}
          <div
            style={{
              position: 'relative',
              height: '100%',
              minHeight: isMobile ? '300px' : isTablet ? '400px' : '500px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
              display: isMobile ? 'none' : 'block',
            }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-09%20at%205.25.43%20PM-0BYjDHRLYaMTdzpRhoepXuFoJE31NF.jpeg"
              alt="The Silent Room community gathering"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(100%)',
              }}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: isMobile ? '80px 16px' : isTablet ? '100px 40px' : '140px 60px', background: '#FFF8FA', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 50% 60% at 80% 30%, rgba(229, 150, 172, 0.1), transparent)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label">Testimonials</div>
          <h2 style={{ fontFamily: 'var(--ff-serif)', fontSize: isMobile ? '32px' : isTablet ? '42px' : '54px', fontWeight: 300, lineHeight: 1.15, color: '#3A1E2C', marginTop: '16px', marginBottom: isMobile ? '48px' : '72px' }}>
            What listeners <em style={{ fontStyle: 'italic',             color: '#E596AC' }}>are saying</em>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: '20px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {[
            { quote: 'This podcast made me feel less alone in my journey.', name: 'Deepa M.', handle: '@deepa_mum' },
            { quote: 'Sneha asks the questions I\'ve always wanted to ask.', name: 'Priya K.', handle: '@priya_khanna' },
            { quote: 'Every episode is like a therapy session with a friend.', name: 'Meera R.', handle: '@meera_roy' },
          ].map((testi, i) => (
            <div
              key={i}
              style={{
                background: '#FDFDFD',
                border: '1px solid rgba(229, 150, 172, 0.15)',
                borderRadius: '20px',
                padding: '36px',
                position: 'relative',
                transition: 'box-shadow 0.3s, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                marginTop: i === 1 ? '32px' : i === 2 ? '-16px' : '0',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(74, 46, 58, 0.08)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontFamily: 'var(--ff-serif)', fontSize: '72px', fontWeight: 300,             color: '#E596AC', lineHeight: 0.7, marginBottom: '16px', opacity: 0.5 }}>
                "
              </div>
              <p style={{ fontFamily: 'var(--ff-serif)', fontSize: isMobile ? '15px' : '17px', fontWeight: 400, fontStyle: 'italic', color: '#3A1E2C', lineHeight: 1.7, marginBottom: '24px' }}>
                {testi.quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #E596AC, #86B4DA)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    flexShrink: 0,
                    color: '#FAF7F2',
                    fontWeight: 600,
                  }}
                >
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#5C3347' }}>
                    {testi.name}
                  </div>
                  <div style={{ fontSize: '12px', color: '#7A4858', letterSpacing: '0.04em', fontWeight: 500 }}>
                    {testi.handle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms Section */}
      <section id="listen" style={{ scrollMarginTop: '100px', padding: isMobile ? '80px 16px' : isTablet ? '100px 40px' : '140px 60px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(229, 150, 172, 0.15), transparent), radial-gradient(ellipse 40% 40% at 30% 10%, rgba(134, 180, 218, 0.08), transparent)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Listen Now
          </div>
          <h2
            style={{
              fontFamily: 'var(--ff-serif)',
              fontSize: isMobile ? '36px' : isTablet ? '52px' : '68px',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#3A1E2C',
              margin: '20px 0 16px',
            }}
          >
            Available on <em style={{ fontStyle: 'italic',             color: '#E596AC' }}>all platforms</em>
          </h2>
          <p style={{ fontSize: isMobile ? '13px' : '15px', fontWeight: 400, color: '#5C3347', maxWidth: '420px', margin: '0 auto 56px', lineHeight: 1.7 }}>
            Wherever you listen to podcasts, Mumma Approved is there with you.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '60px' }}>
            {[
              { name: 'Spotify', url: 'https://open.spotify.com/show/mummaapproved' },
              { name: 'Amazon Music', url: 'https://music.amazon.com/podcasts/46788741-bca0-4f74-9853-946dc2b3bbdc/mumma-approved' },
              { name: 'Apple Music', url: 'https://podcasts.apple.com/th/podcast/mumma-approved/id1827663192' },
              { name: 'YouTube Music', url: 'https://music.youtube.com/playlist?list=PLRRHCbP-xx8M1aRXfxYf07Bk3p8PUJcxc&si=umCeSQTs4prNbudg' },
              { name: 'YouTube', url: 'https://www.youtube.com/@MummaApproved' }
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target={platform.url !== '#' ? '_blank' : '_self'}
                rel={platform.url !== '#' ? 'noopener noreferrer' : ''}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: isMobile ? '10px 16px' : '14px 24px',
                  border: '1.5px solid rgba(58, 30, 44, 0.25)',
                  borderRadius: '100px',
                  fontSize: isMobile ? '11px' : '13px',
                  fontWeight: 500,
                  color: '#2C2C2C',
                  textDecoration: 'none',
                  transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                  background: '#FDFDFD',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.                  background = '#E596AC';
                  (e.currentTarget as HTMLElement).style.                  color = '#FDFDFD';
                  (e.currentTarget as HTMLElement).style.                  borderColor = 'rgba(58, 30, 44, 0.25)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 28px rgba(58, 30, 44, 0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.                  background = '#FDFDFD';
                  (e.currentTarget as HTMLElement).style.color = '#3A1E2C';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(58, 30, 44, 0.25)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {platform.name}
              </a>
            ))}
          </div>

          <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, transparent, rgba(122, 80, 96, 0.2), transparent)', margin: '0 auto 60px' }} />

        </div>
      </section>


      {/* Footer */}
      <footer style={{ padding: isMobile ? '40px 16px' : isTablet ? '50px 40px' : '60px',             background: '#3A2520', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : '2fr 1fr', gap: isMobile ? '40px' : isTablet ? '40px' : '60px', color: 'rgba(240, 227, 216, 0.7)', fontSize: isMobile ? '13px' : '14px', lineHeight: 1.8 }}>
        <div style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
          <h3 style={{ fontFamily: 'var(--ff-serif)', fontSize: isMobile ? '16px' : '18px', color: '#FAF7F2', marginBottom: '16px', fontWeight: 300 }}>
            Mumma Approved
          </h3>
          <p style={{ fontSize: isMobile ? '13px' : '14px', color: 'rgba(240, 227, 216, 0.7)', lineHeight: 1.8, maxWidth: '400px' }}>
            A podcast celebrating modern motherhood through authentic conversations and real stories.
          </p>
        </div>

        <div style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
          <h4 style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 600, color: '#FAF7F2', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
            Connect
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/mummaapproved/' },
              { label: 'Spotify', href: 'https://open.spotify.com/show/mummaapproved' }
            ].map((link) => (
              <li key={link.label}>
                <a href={link.href} target={link.href.startsWith('http') ? '_blank' : '_self'} rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''} style={{ color: 'rgba(240, 227, 216, 0.7)', textDecoration: 'none', transition: 'color 0.2s', fontSize: isMobile ? '12px' : '14px' }} onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#E596AC')} onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(240, 227, 216, 0.7)')}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ gridColumn: '1 / -1', borderTop: '1px solid rgba(160, 120, 40, 0.2)', paddingTop: isMobile ? '30px' : '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p style={{ fontSize: isMobile ? '11px' : '13px', color: 'rgba(240, 227, 216, 0.5)' }}>
            © {new Date().getFullYear()} Mumma Approved. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

