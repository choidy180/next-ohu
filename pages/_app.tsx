import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react';
import Container from '../components/container';
import Navigation from '../components/navigation';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export default function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Container>
                <Navigation/>
                <Component {...pageProps} />
            </Container>
            <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
        </QueryClientProvider>
    )
}
