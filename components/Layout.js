import { Fragment } from "react";
import Image from 'next/image';
import Head from 'next/head';

import Navbar from "./Navbar";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    footer: {
        backgroundColor: 'black',
        color: 'white',
        height: 200,
        textAlign: 'center',
    },
    logo: {
        backgroundColor: 'white',
    },
    footerContent: {
        padding: 50,
    }
});

function Layout(props) {
    const styles = useStyles();
    
    return (
        <Fragment>

            <Head>
                <title>Energy of Jade</title>
                <meta name="description" content="Wellness spa website." />
                <link rel="icon" href="/logo_tweak.png" />
            </Head>

            <Navbar />

            <main>
                {props.children}
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                    </a>
                </div>
            </footer>

        </Fragment>
    );
}

export default Layout;