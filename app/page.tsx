import Link from 'next/link';

export default function Home() {
  const backgroundImages = [
    '/bookimgs/BACKgroundcitymix.jpg',
    '/bookimgs/BACKgroundnyc3.jpg',
    '/bookimgs/BACKgroundtown.jpg',
  ];

  const productImageStyle = {
    width: '240px',
    height: '240px',
    borderRadius: '8px',
    objectFit: 'cover' as const,
    display: 'block',
    margin: '0 auto',
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Background section */}
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

        {/* Gradient text box */}
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

      {/* Product section with black background */}
      <section style={{ padding: '2rem', backgroundColor: '#000', color: '#fff' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Products</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
            justifyItems: 'center',
          }}
        >
          {/* Product cards */}
          {[
            { href: './circe', src: '/electronics/15.6laptop.jpeg', label: '15.6" Windows Laptop' },
            { href: './thelordoftherings', src: '/electronics/coolingpad.jpg', label: 'Cooling Pad For 15.6 Laptop' },
            { href: './aworldalone', src: '/electronics/gamingHeadphones.png', label: 'Gaming Headphones' },
            { href: './lovestory', src: '/electronics/jblearbudsBlack.png', label: 'JBL Earphones Black' },
            { href: './thebookofdoors', src: '/electronics/jblEarbudsBlue.png', label: 'JBL Earphones Blue' },
            { href: './funnystory', src: '/electronics/jblEarbudsWhite.png', label: 'JBL Earphones White' },
            { href: './thehauntedcar', src: '/electronics/RGBgamingHeadset.png', label: 'RGB Gaming Headset' },
            { href: '', src: '/electronics/sonyEarbuds.png', label: 'Sony Earphones' },
            { href: './themummystomb', src: '/electronics/sonyHeadphones.png', label: 'Sony Headphones' },
            { href: '', src: '/electronics/sonyHeadphones3.png', label: 'Sony Headphones' },
            { href: './sololeveling12', src: '/electronics/sonyHeadphones4.png', label: 'Sony Headphones' },
            { href: './sololeveling11', src: '/electronics/digitalCamera.png', label: 'Digital Camera' },
            { href: './mars', src: '/electronics/digitalCamera2.png', label: 'Digital Camera' },
            { href: './agameofThrones', src: '/electronics/digitalminiZoomCamera.png', label: 'Digital Camera' },
            { href: '', src: '/electronics/digitalminiCameraZoom2.png', label: 'Digital Camera' },
            { href: '', src: '/electronics/digitalModernCamled.png', label: 'Digital Camera' }
          ].map(({ href, src, label }, idx) => (
            <Link href={href} key={idx}>
              <div style={{ textAlign: 'center', cursor: 'pointer' }}>
                <img src={src} alt={label} style={productImageStyle} />
                <p>{label}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
