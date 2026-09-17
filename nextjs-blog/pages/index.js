// Import the Head component from Next.js to modify document metadata (e.g., page title and tags)
import Head from 'next/head';
// Import the Link component to enable client-side, preloaded navigation between pages
import Link from 'next/link';
// Import the shared Layout component and siteTitle constant to maintain consistent page structure
import Layout, {siteTitle} from '../components/layout';
// Import modular CSS styles scoped to this utility styling module
import utilStyles from '../styles/utils.module.css';
// Import the getSortedPostsData function from the posts module
import {getSortedPostsData} from '../lib/posts';
// Import the Date component to display formatted dates
import Date from '../components/date';

// Export the getStaticProps function to fetch data at build time
export async function getStaticProps() {
    // Fetch sorted post data from the file system
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

// Default export function defining the Home page component rendered at the root route ('/')
// Wrap the page content in the common Layout component, passing the 'home' boolean prop to render home-specific header styling
export default function Home({allPostsData}) {
    return (<Layout home>
            {/* Inject the page title into the HTML <head> element */}
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Hello! I am a student for SRJC's Full Stack Web Development program.
                    I have a background in electrical engineering and environmental science.
                    I hope to earn this degree to expand my job prospects and get better at programming.
                </p>
                <p>
                    This website was created while trying to learn{' '}
                    <a href="https://nextjs.org/learn">Next.js</a>!
                </p>
            </section>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lighterText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}