import { Fragment } from "react";
import Image from 'next/image';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';

import Navbar from "./Navbar";

const Footer = styled('footer')({
    backgroundColor: 'black',
    color: 'white',
    height: 200,
    textAlign: 'center',
});

const Logo = styled('span')({
    backgroundColor: 'white'
});

const FooterContent = styled('div')({
    padding: 50,
});

function Layout(props) {   
    return (
        <Fragment>
            <CssBaseline />
            <Head>
                <title>Energy of Jade</title>
                <meta name="description" content="Wellness spa website." />
                <link rel="icon" href="/logo_tweak.png" />
            </Head>

            <Navbar />

            <main>
                {props.children}
            </main>

            <Footer>
                <FooterContent>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Powered by{' '}
                    <Logo>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </Logo>
                    </a>
                </FooterContent>
            </Footer>
        </Fragment>
    );
}

export default Layout;