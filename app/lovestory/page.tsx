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
      {/* 📖 Book Cover Image using Next.js Image */}
      <div style={styles.imageWrapper}>
        <Image
          src="/bookimgs/lovestorybook.jpg"
          alt="Love Story Book Cover"
          width={200}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <p style={styles.description}>
        *"She’s a small-town schoolteacher, he’s a hotshot creative director. Together, it’s hate at first sight.

        Sophie Taylor has a secret and Joe Walsh is the last person she'd tell. He’s devilishly handsome, incredibly hot – and far too sure of himself.

        But Sophie desperately needs his help.

        Because she's not just hiding something small. She is Este Cox, the mysterious romance author the world is desperate to unmask.

        When a trip to the countryside means sharing a cottage with only one bed, it’s a short step to sharing a whole lot more besides… Can Sophie trust Joe with the truth – and be herself?"*
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
