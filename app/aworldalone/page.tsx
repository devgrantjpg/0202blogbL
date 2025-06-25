import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Aworldalone() {
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
          src="/bookimgs/aworldalonebook.jpg"
          alt="A world alone"
          width={200}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <p style={styles.description}>
        *"In a world where the dead don’t stay dead, survival is a brutal game of chance.

Seventeen-year-old Stella knows better than to rely on anyone but herself. When a routine scavenging trip turns into a fight for her life, she barely escapes—only to be saved by a gruff, middle-aged loner named Logan, who wants nothing to do with her. But fate has other plans. Thrown together with Joey, a reckless addict with a death wish, they seek refuge in a school-turned-compound run by the ruthless Aaron.

Logan doesn’t trust the compound’s false sense of security. Stella doesn’t care—she just needs a ride north. But as tensions rise, secrets unravel, and Joey’s addiction threatens to destroy them all, the infected breach the walls, turning their safe haven into a bloodbath."*
      </p>

      <p style={{ color: '#bbb' }}>Tax included</p>
      <p style={{ color: '#bbb' }}>Free shipping</p>
      <p style={{ color: '#bbb' }}>Paperback Novel</p>

      <Link href="https://www.paypal.com/ncp/payment/HTAMK99QC7FKE" passHref>
        <Button style={styles.button}>Buy</Button>
      </Link>
    </div>
  );
}
