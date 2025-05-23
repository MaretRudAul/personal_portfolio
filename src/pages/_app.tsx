// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import StructuredData from '../components/StructuredData';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Reset scroll position on page change
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <StructuredData />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;