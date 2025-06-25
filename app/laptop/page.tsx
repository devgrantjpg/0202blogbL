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
          src="/bookimgs/byonelaptop.jpg"
          alt="Love Story Book Cover"
          width={400}
          height={500}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <p style={styles.description}>Update: Our laptop supplies will take around 5 business days longer than usual until end of June! thanks. Pls note that shipping is free!
      Next you'll need a laptop! We've selected and a featured Laptop package for our Customers. Searching for a modern laptop from a trusted supplier are essential, especially for the price $339.99, this includes our shipping and delivery fees. We can also offer express shipping. (For this Featured Product) Standard free shipping has an already fair shipping time at around 10 business days. Other products with standard shipping can take up to 14 business days. This product uses the most modern hardware you'll find with any brand. </p>
      <p style={styles.description}>
      256gb 8gb RAM Laptop
      $339.99 CAD
      14.1 " screen
      8gb RAM 256gb SSD
      Byone Intel Celeron</p>

      <p style={{ color: '#bbb' }}>Tax included</p>
      <p style={{ color: '#bbb' }}>Free shipping</p>

      <Link href="https://www.paypal.com/ncp/payment/KEH54ARN2PC3J" passHref>
        <Button style={styles.button}>Buy</Button>
      </Link>
    </div>
  );
}


