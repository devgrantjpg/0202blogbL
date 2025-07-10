'use client';

import Link from 'next/link';
import { useRef } from 'react';

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 400;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const productImageStyle = {
    width: '240px',
    height: '240px',
    borderRadius: '8px',
    objectFit: 'cover' as const,
    display: 'block',
    margin: '0 auto',
  };

  const backgroundImages = [
    '/bookimgs/BACKgroundnyc.png',
    '/bookimgs/BACKgroundnyc3.jpg',
    '/bookimgs/BACKgroundtown.jpg',
  ];

  const backgroundLinks = [
    { src: '/industrial/CNCmachine.png', href: '/' },
    { src: '/industrial/IndustrialMachines.png', href: '/' },
    { src: '/industrial/IndustrialMachines.png', href: '/' },
    { src: '/industrial/CNCmachine.png', href: '/' },
    { src: '/industrial/IndustrialMachines.png', href: '/' },
    { src: '/industrial/IndustrialMachines.png', href: '/' },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <div style={{ display: 'flex', width: '100%', height: '100%' }}>
          {backgroundImages.map((src, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.6))',
              padding: '2rem 3rem',
              borderRadius: '12px',
              color: 'white',
              maxWidth: '800px',
              textAlign: 'center',
            }}
          >
            <h1 style={{ fontSize: '2.5rem', margin: 0 }}>
              Welcome to SMVM. Bringing You Latest Products
            </h1>
          </div>
        </div>
      </section>

      <section style={{ padding: '2rem', backgroundColor: '#000', color: '#fff' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Electronics</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
            justifyItems: 'center',
          }}
        >
          {[
            { href: 'laptop', src: '/electronics/lapTop.png', label: '15.6" Windows Laptop' },
            { href: 'coolingpad', src: '/electronics/coolingpad.png', label: 'Cooling Pad For 15.6 Laptop' },
            { href: 'gamingHeadphones', src: '/electronics/gamingHeadphones.png', label: 'Gaming Headphones' },
            { href: 'jblEarbudsBlack', src: '/electronics/jblearbudsBlack.png', label: 'JBL Earphones Black' },
            { href: 'jblEarbudsBlue', src: '/electronics/jblEarbudsBlue.png', label: 'JBL Earphones Blue' },
            { href: 'jblEarbudsWhite', src: '/electronics/jblEarbudsWhite.png', label: 'JBL Earphones White' },
            { href: 'RGBgamingHeadset', src: '/electronics/RGBgamingHeadset.png', label: 'RGB Gaming Headset' },
            { href: 'sonyEarbuds', src: '/electronics/sonyEarbuds.png', label: 'Sony Earphones' },
            { href: '', src: '/electronics/sonyHeadphones.png', label: 'Sony Headphones' },
            { href: '', src: '/electronics/sonyHeadphones3.png', label: 'Sony Headphones' },
            { href: '', src: '/electronics/sonyHeadphones4.png', label: 'Sony Headphones' },
            { href: '', src: '/electronics/digitalCamera.png', label: 'Digital Camera' },
            { href: '', src: '/electronics/digitalCamera2.png', label: 'Digital Camera' },
            { href: '', src: '/electronics/digitalminiZoomCamera.png', label: 'Digital Camera' },
            { href: '', src: '/electronics/digitalminiCameraZoom2.png', label: 'Digital Camera' },
            { href: '', src: '/electronics/digitalModernCamled.png', label: 'Digital Camera' },
          ].map(({ href, src, label }, idx) => (
            <Link href={href || '#'} key={idx}>
              <div style={{ textAlign: 'center', cursor: 'pointer' }}>
                <img src={src} alt={label} style={productImageStyle} />
                <p>{label}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* Manual Scroll Horizontal Section with Scroll Buttons */}
      <section style={{ position: 'relative', width: '100%', background: '#111', paddingBottom: '2rem' }}>
        <div style={{ padding: '1rem 2rem' }}>
          <h3 style={{ color: '#fff', textAlign: 'center' }}>Featured Industrial Products</h3>
        </div>

        {/* Left Scroll Button */}
        <button
          onClick={() => scroll('left')}
          style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: 'rgba(0,0,0,0.6)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            color: '#fff',
            fontSize: '24px',
            cursor: 'pointer',
            marginLeft: '10px',
          }}
          aria-label="Scroll Left"
        >
          ‹
        </button>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll('right')}
          style={{
            position: 'absolute',
            top: '50%',
            right: '0',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: 'rgba(0,0,0,0.6)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            color: '#fff',
            fontSize: '24px',
            cursor: 'pointer',
            marginRight: '10px',
          }}
          aria-label="Scroll Right"
        >
          ›
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          style={{
            overflowX: 'auto',
            display: 'flex',
            gap: '1rem',
            padding: '1rem 2rem',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
          }}
        >
          {backgroundLinks.map(({ src, href }, index) => (
            <Link
              href={href}
              key={index}
              style={{
                flex: '0 0 auto',
                width: '100%',
                maxWidth: '400px',
                scrollSnapAlign: 'start',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '300px',
                  backgroundImage: `url(${src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
