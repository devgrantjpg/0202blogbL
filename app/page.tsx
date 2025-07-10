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
    '/bookimgs/BACKgroundnyc.jpg',
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

      {/* Electronics Section */}
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

    

      {/* Featured Product Background Section */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '400px',
          backgroundImage: 'url(/industrial/lasermachine.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: '2rem',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2rem',
          }}
        >
          <div style={{ color: 'white' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Featured Industrial Products</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
              Innovation and Quality in one package.
            </p>
            <Link href="/featured-product">
              <button
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#ff6600',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                }}
              >
                Products
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
