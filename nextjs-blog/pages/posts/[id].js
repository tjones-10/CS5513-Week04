// Import the shared Layout component for page structure
import Layout from '../../components/layout';
// Import helper functions to fetch post IDs for dynamic routing and post data for rendering
import { getAllPostIds, getPostData } from '../../lib/posts';
// Import the Head component from Next.js to modify document metadata
import Head from 'next/head';
// Import Date component to format and display publication date
import Date from '../../components/date';
// Import modular CSS utility styles
import utilStyles from '../../styles/utils.module.css';

// Fetch specific post data at build time based on the route parameter id
export async function getStaticProps({ params }) {
    // Fetch post data for the given id parameter
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

// Return a list of possible dynamic route paths to pre-render
export async function getStaticPaths() {
    // Get all post IDs to generate static paths
    const paths = getAllPostIds();
    return {
        paths,
        // Any paths not returned by getStaticPaths will result in a 404 page
        fallback: false,
    };
}

// Post page component to render the blog post title, date, and markdown content
export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div className={utilStyles.listLeft}  dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}