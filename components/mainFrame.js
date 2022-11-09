import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, Suspense, useEffect, useState } from 'react';
import logo from '../public/images/logo.png';
import {
  getAndroidAppUrl,
  hasAndroidApp,
  hasIOSApp,
  hasMobileApp,
  replaceAll,
  getIosUrl,
  hasLanguageDropdown,
  getSafetyLogo,
} from '../util.js';

import Menu from './menu';

const CartBag = dynamic(() => import('../components/cartBag.js'), {
  suspense: true,
});

function HowWeHelp({ initData }) {
  let html = initData.TXT_CONTACT_BLOCK;
  let contactUsUrl = initData.LANGUAGE + '/';
  let csrName = initData.TXT_OUR_CUSTOMER_SERVICE_AGENTS;
  let csrImage = initData.domain_details.csr_detail
    ? initData.domain_details.csr_detail.user_image ||
      initData.COMMON_IMG_URL + '/jane-uk.png'
    : initData.COMMON_IMG_URL + '/jane-uk.png';

  let drImage = initData.COMMON_IMG_URL + '/jane-uk.png';
  let drName = initData.TXT_DOCTOR;

  if (initData.domain_details.doctor_detail) {
    drImage = initData.DOCTOR_IMAGE_URL + '/';
    drImage +=
      initData.domain_details.doctor_detail.ud_site_profile_image || '';

    drName = initData.domain_details.doctor_detail.user_nick_name || drName;
  }

  contactUsUrl +=
    initData.domain_details.domain_extra_options.domain_contact_page_url || '';

  html = replaceAll('CSR_IMAGE', csrImage, html);
  html = replaceAll('CSR_NAME', csrName, html);
  html = replaceAll('DR_IMAGE', drImage, html);
  html = replaceAll('DR_NAME', drName, html);
  html = replaceAll('CONTACT_US_URL', contactUsUrl, html);

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}

function MobileAppICon({ initData }) {
  let html = [];
  const androidUrl = getAndroidAppUrl(initData);
  const iosurl = getIosUrl(initData);

  if (hasMobileApp(initData)) {
    html.push(
      <span className="footer-title">{initData.TXT_FOOTER_DOWN_APP}</span>
    );
    if (hasIOSApp(initData)) {
      html.push(
        <a href={iosurl}>
          <Image
            src={initData.COMMON_IMG_URL + '/app-store-white.svg'}
            alt="App store"
            width={135}
            height={40}
          />
        </a>
      );
    }
    if (hasAndroidApp(initData)) {
      html.push(
        <a href={androidUrl}>
          <Image
            src={initData.COMMON_IMG_URL + '/google-play-white.svg'}
            alt="Google play"
            width={135}
            height={40}
          />
        </a>
      );
    }
  } else {
    return null;
  }

  return (
    <div>
      {html.map((item, i) => {
        return <div key={i}>{item}</div>;
      })}
    </div>
  );
}

function SafetyLogo({ initData }) {
  const html = getSafetyLogo({ initData });

  return (
    <div className="safety-logo">
      {html.map((item, i) => {
        return <Fragment key={i}>{item}</Fragment>;
      })}
    </div>
  );
}

function LanguagesDropDown({ initData }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleLanguageDropDown(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  let html = [];
  if (hasLanguageDropdown(initData)) {
    const style = { display: isOpen ? 'block' : 'none' };
    html.push(
      <span className="footer-title">{initData.TXT_SELECT_LANGUAGE}</span>
    );
    html.push(<p>{initData.TXT_SERVICE_LANG}</p>);
    html.push(
      <div className="dropdown">
        <a
          aria-expanded="false"
          aria-haspopup="true"
          role="button"
          data-toggle="dropdown"
          className="dropdown-toggle uk"
          href="#"
          onClick={handleLanguageDropDown}
        >
          <span id="selected">English</span>
          <span className="icon icon-arrow-down"></span>
        </a>
        <ul className="dropdown-menu" style={style}>
          {initData.domain_details.languages.map((language, i) => {
            return (
              <li className="" key={language.domain_id}>
                <a href={`${language.domain_name}`}>
                  {language.domain_lang_name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }

  return (
    <>
      {html.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </>
  );
}

export default function MainFrame({ children, initData }) {
  const csrEmail = initData.domain_details.domain_csr_email;

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 75) {
        document.getElementsByTagName('header')[0].classList.add('sticky');
        document.getElementById('panel-menu').style.top = '40px';
      } else {
        document.getElementsByTagName('header')[0].classList.remove('sticky');
        document.getElementById('panel-menu').style.top = '75px';
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function openChat(e) {
    e.preventDefault();
    //window.open('https://tawk.to/chat/57aca97bb6326fb1504160ba/default','popup','width=400,height=500');
    //window.open(initData.data.response.CHAT_OPEN_URL.replace(/window.open\(|\)|;/gi, "")}`);
    window.open(initData.CHAT_URL, 'popup', 'width=400,height=500');
  }

  function toggleMegaMenu(e) {
    e.preventDefault();
    document.body.classList.toggle('menu-open');
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="wrap">
        <Menu initData={initData} />
        <header>
          <div className="container container-lg d-flex align-items-center justify-content-between">
            <ul className="left-nav">
              <li key="1">
                <a className="megamenu" onClick={toggleMegaMenu} href="">
                  All treatments
                </a>
              </li>
              <li key="2">
                <Link href="erectile-dysnfunction">About us</Link>
              </li>
              <li key="3" className="faq-page">
                <a href="https://121doc.dev-projects.com/en/about/faq">FAQs</a>
              </li>
            </ul>
            <div className="logo">
              <Image src={logo} alt="121doc" />
            </div>
            <ul className="righr-nav">
              <li key="1" className="search">
                <a href="" aria-label="search" id="search-section">
                  <span className="icon icon-search"></span>
                </a>
              </li>
              <li key="2" id="csr-section" className="email">
                <a href="" aria-label="customer services">
                  <span className="icon icon-information"></span>
                </a>
              </li>
              <li key="3" className="cart">
                <Suspense>
                  <CartBag />
                </Suspense>
              </li>
              <li key="4" className="login">
                <a href="" aria-label="login">
                  <span className="icon icon-login"></span>
                </a>
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
                  <p
                    dangerouslySetInnerHTML={{
                      __html: initData.TXT_HOW_CAN_WE_HELP_DESC,
                    }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 contact-us">
                  <span className="footer-title">
                    {initData.TXT_CONTACT_TITLE}
                  </span>
                  <div className="mob-collapse">
                    <ul className="ls-none">
                      <li key="1">
                        <a
                          href={`tel:${initData.DOMAIN_PHONE}`}
                          aria-label="phone"
                        >
                          <span className="icon icon-phone"></span>
                          {initData.DOMAIN_PHONE}
                        </a>
                      </li>
                      <li key="2">
                        <a href={`mailto:${csrEmail}`} aria-label="email">
                          <span className="icon icon-mail"></span>
                          {csrEmail}
                        </a>
                      </li>
                      <li key="3">
                        <a
                          href={initData.CHAT_URL}
                          target="popup"
                          aria-label="live chat"
                          onClick={openChat}
                        >
                          <span className="icon icon-livechat"></span>Live chat
                        </a>
                      </li>
                    </ul>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: initData.TXT_FOOTER_CONTACT_HOUR,
                      }}
                    ></p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: initData.TXT_FOOTER_CONTACT_COMPANY,
                      }}
                    ></p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 quick-links">
                  <span className="footer-title">
                    {initData.TXT_FOOTER_LINKS_HEADER}
                  </span>
                  <div className="mob-collapse">
                    <ul
                      className="ls-none"
                      dangerouslySetInnerHTML={{
                        __html: initData.TXT_HOME_FOOTER_LINKS_NEW,
                      }}
                    ></ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 safety-app">
                  <MobileAppICon initData={initData} />
                  <SafetyLogo initData={initData} />
                </div>
                <div className="col-lg-3 col-md-6 languages">
                  <LanguagesDropDown initData={initData} />
                </div>
              </div>
              <div
                className="pay-cards"
                dangerouslySetInnerHTML={{
                  __html: initData.FOOTER_PAYMENT_LOGO,
                }}
              ></div>
              <div className="copy-right">{initData.TXT_COPYRIGHT}</div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
