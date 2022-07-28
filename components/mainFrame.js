import Head from "next/head";
import Image from "next/image";
import logo from "../public/images/logo.png";


export default function MainFrame({children}){
    return(
        <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div id="wrap">
            <header>
                <div className="container container-lg d-flex align-items-center justify-content-between">
                    <ul className="left-nav">
                        <li key="1"><a className="megamenu" href="">All treatments</a></li>
                        <li key="2"><a href="https://121doc.dev-projects.com/en/about">About us</a></li>
                        <li key="3" className="faq-page">
                            <a href="https://121doc.dev-projects.com/en/about/faq">FAQs</a>
                        </li>
                    </ul>
                    <div className="logo">
                        <Image src={logo} alt="121doc" />
                    </div>
                    <ul className="righr-nav">
                        <li key="1" className="search">
                            <a href="" aria-label="search" id="search-section"><span className="icon icon-search"></span></a>
                        </li>
                        <li key="2" id="csr-section" className="email">
                            <a href="" aria-label="customer services"><span className="icon icon-information"></span></a>
                        </li>
                        <li key="3" className="cart">
                            <a href="" aria-label="cart"><span className="icon icon-bag"></span></a>
                        </li>
                        <li key="4" className="login">
                            <a href="" aria-label="login"><span className="icon icon-login"></span></a>
                        </li>
                    </ul>
                </div>
            </header>
            {children}
        </div>
        </>
    );
}

