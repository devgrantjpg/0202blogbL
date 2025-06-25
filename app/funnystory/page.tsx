import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Funnystory() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: '#000',
    },
    imageWrapper: {
      width: '200px',
      height: '300px',
      marginTop: '1rem',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
    },
    description: {
      marginTop: '1rem',
      maxWidth: '300px',
      color: '#ddd',
      textAlign: 'center' as const,
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1rem',
    },
    button: {
      marginTop: '1.5rem',
      background: 'linear-gradient(to right, #4facfe, #00f2fe)',
      color: '#000',
      border: 'none',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      fontWeight: 'bold' as const,
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'transform 0.2s ease-in-out',
    }
  };

  return (
    <div style={styles.container}>
      {/* 📚 Book Cover Image under title */}
      <div style={styles.imageWrapper}>
        <Image
          src="/bookimgs/funnystorybook.jpg"
          alt="Funny Story"
          width={200}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <p style={styles.description}>
        *"Author Evelyn Hugo and Daisy Jones an epic new novel set against the backdrop of the 1980s Space Shuttle program about the extraordinary lengths we go to live and love beyond our limits.

        Joan Goodwin has been obsessed with the stars for as long as she can remember. Thoughtful and reserved, Joan is content with her life as a professor of physics and astronomy at Rice University and as aunt to her precocious niece, Frances. That is, until she comes across an advertisement seeking the first women scientists to join NASA’s Space Shuttle program. Suddenly, Joan burns to be one of the few people to go to space."*
      </p>

      <p style={{ color: '#bbb' }}>Tax included</p>
      <p style={{ color: '#bbb' }}>Free shipping</p>
      <p style={{ color: '#bbb' }}>Paperback Novel</p>

      <Link href="https://www.paypal.com/ncp/payment/8NYAURF7FEMBJ" passHref>
        <Button style={styles.button}>Buy</Button>
      </Link>
    </div>
  );
}
