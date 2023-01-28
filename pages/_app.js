import NavBar from '../components/NavBar';
import { NavProvider } from '../context/NavStateProvider';
import '../styles/globals.scss'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
    return (
        <>
            <NavProvider>
                <NavBar>
                    <Component {...pageProps} />
                </NavBar>
            </NavProvider>
            <Analytics />
        </>
    )
}
