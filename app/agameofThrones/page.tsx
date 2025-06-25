import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Agameofthrones() {
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
          src="/bookimgs/agameofThrones.jpg"
          alt="A world alone"
          width={200}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <p style={styles.description}>
        *"A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin. It was first published on August 1, 1996. The novel won the 1997 Locus Award and was nominated for both the 1997 Nebula Award and the 1997 World Fantasy Award"*
      </p>

      <p style={{ color: '#bbb' }}>Tax included</p>
      <p style={{ color: '#bbb' }}>Free shipping</p>
      <p style={{ color: '#bbb' }}>Paperback Novel</p>

      <Link href="https://www.paypal.com/ncp/payment/GEVSRKT8W6MMN" passHref>
        <Button style={styles.button}>Buy</Button>
      </Link>
    </div>
  );
}


