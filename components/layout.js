import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from 'next/link';
import Head from "next/head";

const name = "xyz";
export const siteTitle = "Next.js sample website";

export default function Layout({children, home, menuItems}){
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Learn how to build a personal website usning Next.js" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image priority src="/images/profile.jpg" className={utilStyles.borderCircle} height={144} width={108} />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image priority src="/images/profile.jpg" className={utilStyles.borderCircle} height={108} width={108} alt={name} />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}></a>
                            </Link>
                        </h2>
                    </>
                )}
                {
                    menuItems.map((item)=>{
                        return (
                            <a key={item.id}>{item.title}</a>
                        )
                    })
                }
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/"><a>Back to home</a></Link>
                </div>
            )}
        </div>
    );
}

