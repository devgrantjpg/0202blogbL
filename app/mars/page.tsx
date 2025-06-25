import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Mars() {
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
          src="/bookimgs/mars.jpg"
          alt="A world alone"
          width={200}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <p style={styles.description}>
        *"For centuries, the barren, desolate landscape of the red planet has beckoned to humankind. Now a group of one hundred colonists begins a mission whose ultimate goal is to transform Mars into a more Earthlike planet. They will place giant satellite mirrors in Martian orbit to reflect light onto its surface. Black dust sprinkled on the polar caps will capture warmth and melt the ice. And massive tunnels drilled into the mantle will create stupendous vents of hot gases. But despite these ambitious goals, there are some who would fight to the death to prevent Mars from ever being changed."*
      </p>

      <p style={{ color: '#bbb' }}>Tax included</p>
      <p style={{ color: '#bbb' }}>Free shipping</p>
      <p style={{ color: '#bbb' }}>Paperback Novel</p>

      <Link href="https://www.paypal.com/ncp/payment/PA7Q4URFXC8G8" passHref>
        <Button style={styles.button}>Buy</Button>
      </Link>
    </div>
  );
}
