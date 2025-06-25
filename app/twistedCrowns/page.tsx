import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Twistedcrowns() {
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
          src="/bookimgs/twistedCrowns.jpg"
          alt="A world alone"
          width={200}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <p style={styles.description}>
        *"Gripped by a tyrant king and in the thrall of dark magic, the kingdom is in peril. Elspeth and Ravyn have gathered most of the twelve Providence Cards, but the last—and most important—one remains to be found: the Twin Alders. If they’re going to find the card before Solstice and set free the kingdom, they will need to journey through the dangerous mist-cloaked forest. The only one who can lead them through is the monster that shares Elspeth’s head: the Nightmare.
        And he’s not eager to share any longer."*
      </p>

      <p style={{ color: '#bbb' }}>Tax included</p>
      <p style={{ color: '#bbb' }}>Free shipping</p>
      <p style={{ color: '#bbb' }}>Paperback Novel</p>

      <Link href="https://www.paypal.com/ncp/payment/Z36PCYQ39J8MG" passHref>
        <Button style={styles.button}>Buy</Button>
      </Link>
    </div>
  );
}





