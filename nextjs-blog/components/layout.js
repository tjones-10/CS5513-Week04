// Import the Head component from Next.js to modify document metadata
import Head from 'next/head';
// Import the Image component from Next.js for optimized image rendering
import Image from 'next/image';
// Import CSS module styles specific to the Layout component
import styles from './layout.module.css';
// Import shared utility CSS styles
import utilStyles from '../styles/utils.module.css';
// Import the Link component for client-side navigation between routes
import Link from 'next/link';

// Author name constant used in the header
const name = 'Taylor Jones';
// Default website title constant exported for use across pages
export const siteTitle = "Taylor's Test Blog";

// Layout component providing a common structure (head, header, back link) across all pages
export default function Layout({children, home}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=${encodeURIComponent(
                        'https://nextjs.org/static/nextjs-logo.svg',
                    )}`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt=""
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt=""
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    );
}