import Link from 'next/link';

export default function Home() {
  const backgroundImages = [
    '/bookimgs/BACKgroundcitymix.jpg',
    '/bookimgs/BACKgroundnyc3.jpg',
    '/bookimgs/BACKgroundtown.jpg',
  ];

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
              Welcome to SMVM. Latest Books and Products
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Manually written product blocks with <Link> */}
          <Link href="./circe">
            <div style={{ textAlign: 'center', cursor: 'pointer' }}>
              <img src="/bookimgs/circe.jpg" alt="Circe" style={{ maxWidth: '200px', borderRadius: '8px' }} />
              <p>Circe</p>
            </div>
          </Link>

          <Link href="./thelordoftherings">
            <div style={{ textAlign: 'center', cursor: 'pointer' }}>
              <img src="/bookimgs/thelordoftheRings.jpg" alt="The Lord of the Rings" style={{ maxWidth: '200px', borderRadius: '8px' }} />
              <p>The Lord of the Rings</p>
            </div>
          </Link>

          <Link href="./aworldalone">
            <div style={{ textAlign: 'center', cursor: 'pointer' }}>
              <img src="/bookimgs/aworldalonebook.jpg" alt="A World Alone" style={{ maxWidth: '200px', borderRadius: '8px' }} />
              <p>A World Alone</p>
            </div>
          </Link>

          <Link href="./lovestory">
            <div style={{ textAlign: 'center', cursor: 'pointer' }}>
              <img src="/bookimgs/lovestorybook.jpg" alt="Love Story" style={{ maxWidth: '200px', borderRadius: '8px' }} />
              <p>Love Story</p>
            </div>
          </Link>

          <Link href="./thebookofdoors">
            <div style={{ textAlign: 'center', cursor: 'pointer' }}>
              <img src="/bookimgs/thebookofdoorsbook.jpg" alt="The Book of Doors" style={{ maxWidth: '200px', borderRadius: '8px' }} />
              <p>The Book of Doors</p>
            </div>
          </Link>

          <Link href="./funnystory">
            <div style={{ textAlign: 'center', cursor: 'pointer' }}>
              <img src="/bookimgs/funnystorybook.jpg" alt="Funny Story" style={{ maxWidth: '200px', borderRadius: '8px' }} />
              <p>Funny Story</p>
            </div>
          </Link>

          <Link href="./thehauntedcar">
            <div style={{ textAlign: 'center', cursor: 'pointer' }}>
              <img src="/bookimgs/thehauntedcar.jpg" alt="The Haunted Car" style={{ maxWidth: '200px', borderRadius: '8px' }} />
              <p>The Haunted Car</p>
            </div>
          </Link>

          <Link href="">
            <div style={{ textAlign: 'center', cursor: 'pointer' }}>
              <img src="/bookimgs/goosebumpsHorrorland.jpg" alt="Goosebumps Horror Land" style={{ maxWidth: '200px', borderRadius: '8px' }} />
              <p>Goosebumps Horror Land</p>
            </div>
          </Link>

          <Link href="./themummystomb">
            <div style={{ textAlign: 'center', cursor: 'pointer' }}>
              <img src="/bookimgs/goosebumpsMummy.jpg" alt="Goosebumps Mummy" style={{ maxWidth: '200px', borderRadius: '8px' }} />
              <p>Goosebumps Mummy</p>
            </div>
          </Link>

          <Link href="">
            <div style={{ textAlign: 'center', cursor: 'pointer' }}>
              <img src="/bookimgs/goosebumpstalesofHorror.jpg" alt="Goosebumps Tales of Horror" style={{ maxWidth: '200px', borderRadius: '8px' }} />
              <p>Goosebumps Tales of Horror</p>
            </div>
          </Link>

           <Link href="./sololeveling12">
            <div style={{ textAlign: 'center', cursor: 'pointer' }}>
              <img src="/bookimgs/sololeveling12.jpg" alt="Solo Leveling" style={{ maxWidth: '200px', borderRadius: '8px' }} />
              <p>Solo Leveling vol. 12</p>
            </div>
          </Link>

          <Link href="./sololeveling11">
            <div style={{ textAlign: 'center', cursor: 'pointer' }}>
              <img src="/bookimgs/sololeveling11.jpg" alt="Solo Leveling Vol.11" style={{ maxWidth: '200px', borderRadius: '8px' }} />
              <p>Solo Leveling Vol. 11</p>
            </div>
          </Link>

          <Link href="./mars">
            <div style={{ textAlign: 'center', cursor: 'pointer' }}>
              <img src="/bookimgs/mars.jpg" alt="Mars" style={{ maxWidth: '200px', borderRadius: '8px' }} />
              <p>Mars</p>
            </div>
          </Link>

          <Link href="./agameofThrones">
            <div style={{ textAlign: 'center', cursor: 'pointer' }}>
              <img src="/bookimgs/agameofThrones.jpg" alt="A game of Thrones" style={{ maxWidth: '200px', borderRadius: '8px' }} />
              <p>A Game of Thrones</p>
            </div>
          </Link>

          <Link href="">
            <div style={{ textAlign: 'center', cursor: 'pointer' }}>
              <img src="/bookimgs/dune.jpg" alt="Two Twisted Crowns" style={{ maxWidth: '200px', borderRadius: '8px' }} />
              <p>Dune</p>
            </div>
          </Link>

        </div>
      </section>
    </div>
  );
}
