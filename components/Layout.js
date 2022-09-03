import { Fragment } from "react";

import Head from 'next/head';

import { CssBaseline } from '@mui/material';

import Navbar from "./Navbar";
import Footer from './Footer';


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

            <Footer />
                
        </Fragment>
    );
}

export default Layout;