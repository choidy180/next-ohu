import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react';
import Container from '../components/container';
import Navigation from '../components/navigation';
export default function App({ Component, pageProps }: AppProps) {
    return (
          <Container>
              <Navigation/>
              <Component {...pageProps} />
          </Container>
    )
}
