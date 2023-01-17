import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react';
import Container from '../components/container';
import Navigation from '../components/navigation';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { getCookie, setCookie } from 'cookies-next';

export default function App({ Component, pageProps }: AppProps, res:any) {
    const queryClient = new QueryClient();
    React.useEffect(()=>{
        setCookie('theme', 'next-theme');
        const cookie = getCookie('theme');
        console.log(cookie);
    },[]);
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