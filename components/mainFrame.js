import Head from "next/head";
import Image from "next/image";
import logo from "../public/images/logo.png";
import { getAndroidAppUrl, hasAndroidApp, hasIOSApp, hasMobileApp, replaceAll, getIosUrl } from "../util.js";

function HowWeHelp({initData}){
    let html = initData.TXT_CONTACT_BLOCK;
    let contactUsUrl = initData.LANGUAGE + "/";
    let csrName = initData.TXT_OUR_CUSTOMER_SERVICE_AGENTS;
    let csrImage = initData.domain_details.csr_detail ? initData.domain_details.csr_detail.user_image || initData.COMMON_IMG_URL + "/jane-uk.png" : initData.COMMON_IMG_URL + "/jane-uk.png";

    let drImage = initData.COMMON_IMG_URL + "/jane-uk.png";
    let drName = initData.TXT_DOCTOR;

    if(initData.domain_details.doctor_detail){
        drImage = initData.DOCTOR_IMAGE_URL + "/"
        drImage += initData.domain_details.doctor_detail.ud_site_profile_image || "";

        drName = initData.domain_details.doctor_detail.user_nick_name || drName;
    }

    contactUsUrl += initData.domain_details.domain_extra_options.domain_contact_page_url || "";

    html = replaceAll("CSR_IMAGE", csrImage, html);
    html = replaceAll("CSR_NAME", csrName, html);
    html = replaceAll("DR_IMAGE", drImage, html);
    html = replaceAll("DR_NAME", drName, html);
    html = replaceAll("CONTACT_US_URL", contactUsUrl, html);

    return <div dangerouslySetInnerHTML={{__html:html}}></div>;
}

function MobileAppICon({initData}){
    let html = [];
    const androidUrl = getAndroidAppUrl(initData);
    const iosurl = getIosUrl(initData);
    
    if(hasMobileApp(initData)){
        html.push(<span className="footer-title">{initData.TXT_FOOTER_DOWN_APP}</span>);
        if(hasIOSApp(initData)){
            html.push(<a href={iosurl}><Image src={initData.COMMON_IMG_URL+'/app-store-white.svg'} alt="App store" width={135} height={40} /></a>);
        }
        if(hasAndroidApp(initData)){
            html.push(<a href={androidUrl}><Image src={initData.COMMON_IMG_URL+'/google-play-white.svg'} alt="Google play" width={135} height={40} /></a>);
        }
    }
    
    return (
        <div>
            {html.map((item, i)=>{
                return <div key={i}>{item}</div>
            })}
        </div>
    );
}

export default function MainFrame({children, initData}){
    const csrEmail = initData.domain_details.domain_csr_email;

    function openChat(e){
        e.preventDefault();
        //window.open('https://tawk.to/chat/57aca97bb6326fb1504160ba/default','popup','width=400,height=500');
        //window.open(initData.data.response.CHAT_OPEN_URL.replace(/window.open\(|\)|;/gi, "")}`);
        window.open(initData.CHAT_URL, 'popup', 'width=400,height=500');
    }

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
            <div>
                <div className="customer-services main">
                    <div className="container">
                        <h2>{initData.TXT_HOW_CAN_WE_HELP}</h2>
                        <HowWeHelp initData={initData} />
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <p dangerouslySetInnerHTML={{__html: initData.TXT_HOW_CAN_WE_HELP_DESC}}></p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 contact-us">
                                <span className="footer-title">{initData.TXT_CONTACT_TITLE}</span>
                                <div className="mob-collapse">
                                    <ul className="ls-none">
                                        <li key="1">
                                            <a href={`tel:${initData.DOMAIN_PHONE}`} aria-label="phone">
                                                <span className="icon icon-phone"></span>{initData.DOMAIN_PHONE}
                                            </a>
                                        </li>
                                        <li key="2">
                                            <a href={`mailto:${csrEmail}`} aria-label="email">
                                                <span className="icon icon-mail"></span>{csrEmail}
                                            </a>
                                        </li>
                                        <li key="3">
                                            <a href={initData.CHAT_URL} 
                                                target="popup" aria-label="live chat" 
                                                onClick={openChat}>
                                                <span className="icon icon-livechat"></span>Live chat
                                            </a>
                                        </li>
                                    </ul>
                                    <p dangerouslySetInnerHTML={{__html: initData.TXT_FOOTER_CONTACT_HOUR}}></p>
                                    <p dangerouslySetInnerHTML={{__html: initData.TXT_FOOTER_CONTACT_COMPANY}}></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 quick-links">
                                <span className="footer-title">{initData.TXT_FOOTER_LINKS_HEADER}</span>
                                <div className="mob-collapse">
                                    <ul className="ls-none" dangerouslySetInnerHTML={{__html: initData.TXT_HOME_FOOTER_LINKS_NEW}}></ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 safety-app">
                                <MobileAppICon initData={initData}/>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        </>
    );
}

