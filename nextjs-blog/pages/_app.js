// Import global CSS styles applied to every page in the application
import '../styles/global.css';

// Custom App component to initialize pages, maintaining global layout and state across navigation
export default function App({Component, pageProps}) {
    return <Component {...pageProps} />;
}