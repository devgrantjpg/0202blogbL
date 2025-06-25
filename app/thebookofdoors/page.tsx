import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Thebookofdoors() {
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
          src="/bookimgs/thebookofdoors.jpg"
          alt="The book of doors"
          width={200}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <p style={styles.description}>
        *"Cassie Andrews works in a New York City bookshop, shelving books, making coffee for customers, and living an unassuming, ordinary life. Until the day one of her favorite customers—a lonely yet charming old man—dies right in front of her. Cassie is devastated. She always loved his stories, and now she has nothing to remember him by. Nothing but the last book he was reading.  

        But this is no ordinary book…

        It is the Book of Doors. 

        Inscribed with enigmatic words and mysterious drawings, it promises Cassie that any door is every door. You just need to know how to open them.

        Then she’s approached by a gaunt stranger in a rumpled black suit with a Scottish brogue who calls himself Drummond Fox. He’s a librarian who keeps watch over a unique set of rare volumes. The tome now in Cassie’s possession is not the only book with great power, but it is the one most coveted by those who collect them."*
      </p>

      <p style={{ color: '#bbb' }}>Tax included</p>
      <p style={{ color: '#bbb' }}>Free shipping</p>
      <p style={{ color: '#bbb' }}>Paperback Novel</p>

      <Link href="https://www.paypal.com/ncp/payment/9DBYLH7PCPY44" passHref>
        <Button style={styles.button}>Buy</Button>
      </Link>
    </div>
  );
}
