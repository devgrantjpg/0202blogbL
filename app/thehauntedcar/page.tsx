import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Thehouseofshivers() {
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
          src="/bookimgs/thehauntedcar.jpg"
          alt="House of shivers"
          width={200}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <p style={styles.description}>
        *"A brand new Goosebumps series is coming―prepare to be scared like never before! From the delightfully twisted mind of R.L. Stine comes a fresh new vision for the fan-favorite brand. This new series will feature an ALL NEW line-up of incredible villains, with iconic monsters as you've never seen them before, whose antics are destined to make them every bit as beloved as Slappy. This exciting new Goosebumps series will have the same humor and terrifying tone that millions of readers love, but will be bigger, bolder, funnier, and scarier! Goosebumps is soon to be a major Apple TV series The perfect spooky read for 8+ readers"*
      </p>

      <p style={{ color: '#bbb' }}>Tax included</p>
      <p style={{ color: '#bbb' }}>Free shipping</p>
      <p style={{ color: '#bbb' }}>Paperback Novel</p>

      <Link href="https://www.paypal.com/ncp/payment/4JW676R89DG8E" passHref>
        <Button style={styles.button}>Buy</Button>
      </Link>
    </div>
  );
}
