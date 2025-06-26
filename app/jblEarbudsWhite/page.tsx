import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Lovestory() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: '#000',
      width: '100vw',
      boxSizing: 'border-box' as 'border-box',
    },
    imageRow: {
      display: 'flex',
      gap: '1rem',
      marginTop: '2rem',
      justifyContent: 'flex-start',
      overflowX: 'auto' as const,
      maxWidth: '100%',
      paddingBottom: '1rem',
    },
    imageWrapper: {
      flex: '0 0 auto',
      width: '300px',
      height: '300px',         // square container
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
    },
    image: {
      width: '100%',           // cover full container
      height: '100%',
      objectFit: 'cover' as const,
    },
    description: {
      marginTop: '0.5rem',
      maxWidth: '800px',
      color: '#ddd',
      textAlign: 'center' as const,
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1.1rem',
      lineHeight: '1.6',
    },
    button: {
      marginTop: '2rem',
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
      {/* 🖼 Smaller image row with horizontal scroll */}
      <div style={styles.imageRow}>
        {["jblearbuds", "JBLearbudsWhite"].map((img, i) => (
          <div style={styles.imageWrapper} key={i}>
            <Image
              src={`/electronics/${img}.png`}
              alt={`Image ${i + 1}`}
              width={300}
              height={300}
              style={styles.image}
            />
          </div>
        ))}
      </div>

      {/* 📝 Description */}
      <p style={styles.description}>
      Original JBL TUNE 220 TWS True Wireless Bluetooth Earphones T220TWS Stereo Earbuds Bass Sound Headphones JBL
      </p>

      <p style={styles.description}>
      Earbuds — $39.99 CAD<br />
        Wireless<br />
        JBL<br />
      </p>

      <p style={{ color: '#bbb' }}>Tax included</p>
      <p style={{ color: '#bbb' }}>Free shipping</p>

      <Link href="" passHref>
        <Button style={styles.button}>Buy</Button>
      </Link>
    </div>
  );
}
