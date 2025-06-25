import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Dune() {
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
          src="/bookimgs/sololeveling11.jpg"
          alt="Dune"
          width={200}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <p style={styles.description}>
        *"After saving Jinho from the vengeful Dongsoo Hwang, Jinwoo makes a public declaration that he will protect his family and friends no matter what. But when a close ally is killed in a sudden attack by the otherworldly Monarchs, Jinwoo is forced to reexamine who it is he wants to protect―and just how far he’ll go to do so."*
      </p>

      <p style={{ color: '#bbb' }}>Tax included</p>
      <p style={{ color: '#bbb' }}>Free shipping</p>
      <p style={{ color: '#bbb' }}>Paperback Novel</p>

      <Link href="https://www.paypal.com/ncp/payment/5JCP655W3HE74" passHref>
        <Button style={styles.button}>Buy</Button>
      </Link>
    </div>
  );
}
