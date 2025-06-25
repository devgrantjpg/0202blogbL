import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Mummystomb() {
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
          src="/bookimgs/goosebumpsMummy.jpg"
          alt="Mummys tomb"
          width={200}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <p style={styles.description}>
        *"Discover the original bone-chilling adventures that made Goosebumps one of the bestselling children's book series of all time!

        Gabe is exploring the tunnels of an ancient Egyptian pyramid. Unfortunately, Gabe is also lost! And Gabe is not alone. Someone else is in the pyramid, too.
        Someone. Or something. . .

        It's another fan-favorite prequel to R.L. Stine's blockbuster GOOSEBUMPS HORRORLAND series. Now with all-new bonus materials including a Q&A with the author and more!"*
      </p>

      <p style={{ color: '#bbb' }}>Tax included</p>
      <p style={{ color: '#bbb' }}>Free shipping</p>
      <p style={{ color: '#bbb' }}>Paperback Novel</p>

      <Link href="https://www.paypal.com/ncp/payment/TE5GATLMQ3CYY" passHref>
        <Button style={styles.button}>Buy</Button>
      </Link>
    </div>
  );
}
