import '../styles/globals.css';

export default function App({ Component, pageProps }: { Component: any, pageProps: any }): JSX.Element {
    return <Component {...pageProps} />;
}
