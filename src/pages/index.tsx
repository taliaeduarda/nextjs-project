import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home() {
  return (
    <>
    <Head>
    <title>Home | ig.news</title>
    </Head>

    <main className={styles.contentContainer}>
      <section className={styles.hero} > 
        <span>Hey, welcome</span>
        <h1>News about the <span>react</span> world. </h1>
        <p>
          Get access to all the publications <br />
          <span>for 9.99 month</span>
        </p>
        <SubscribeButton />
      </section>
          <Image
        alt="Next.js logo"
        src="/images/avatar.svg"
        width={970}
        height={970}
      />
    
    </main>
    </>
  )
}


// export const getStaticProps: GetStaticProps = async () => {
//   const price = await stripe.prices.retrieve('price_1JNI9yCBcOFx2qJ82rLhmP8L')
  
//   const product = {
//     priceId: price.id,
//     amount: new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//     }).format( price.unit_amount / 100),
//   }

//   return {
//     props: {
//       product,
//     },
//     revalidate: 60 * 60 * 24,
//   }
// }