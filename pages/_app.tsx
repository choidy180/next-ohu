import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react';
import Container from '../components/container';
import Navigation from '../components/navigation';
import { SessionProvider } from 'next-auth/react';
import LoginSensor from '../components/loginSensor';
export default function App({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider>
            <Container>
                <Navigation/>
                <Component {...pageProps} />
                <LoginSensor/>
            </Container>
        </SessionProvider>
    )
}
