import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { useDispatch, useSelector } from 'react-redux';
//import Layout from "../../components/layout";
import MainFrame from '@/components/mainFrame';
import ReviewCarousel from '@/components/reviewCarousel';
import DoctorCarousel from '@/components/doctorCarousel';
import { selectAuthState, setAuthState } from '../../slices/authSlice';
import utilStyles from '../../styles/utils.module.css';
import { replaceAll } from 'util';
import { setJsLibraryState } from 'slices/mainSlice';

function HomePromises({ homePageData, initData }) {
  const reviewLogo = () =>
    `${initData.review_platform.toLowerCase()}-with-stars.png`;

  const reviewDescription = () => {
    let description = homePageData.data.response.variables.TXT_REVIEW_DESC;
    let totalCust =
      homePageData.data.response.page_data.response.serviceReview.total_count ||
      0;
    let ratting =
      homePageData.data.response.page_data.response.serviceReview
        .average_rating_value || 0;
    //description = replaceAll('$TOTAL_CUST', totalCust, description);
    //description = replaceAll('$RATTING', totalCust, description);
    return description;
  };

  const cqcLogo = () => {
    if (
      typeof initData.domain_details !== 'undefined' &&
      initData.domain_details
    ) {
      let data = initData.domain_details.domain_extra_options;
      if (
        typeof data.qualitycommission_code_status !== 'undefined' &&
        data.qualitycommission_code_status === 'Y'
      ) {
        return data.qualitycommission_code;
      }
    }
    return '';
  };

  const sectigoLogo = () => {
    if (
      typeof initData.domain_details !== 'undefined' &&
      initData.domain_details
    ) {
      let data = initData.domain_details.domain_extra_options;
      if (
        typeof data.ssl_code_status !== 'undefined' &&
        data.ssl_code_status === 'Y'
      ) {
        return data.ssl_code;
      }
    }
    return '';
  };

  return (
    <section className="safety-box">
      <div className="container container-lg">
        <h2
          dangerouslySetInnerHTML={{
            __html:
              homePageData.data.response.variables.TXT_OUR_PROMISES_HEADING,
          }}
        />
        <div className="safety-list owl-carousel">
          <div className="safety-item">
            <span
              className="safety-txt"
              dangerouslySetInnerHTML={{
                __html:
                  homePageData.data.response.variables
                    .TXT_OUR_PROMISES_SECTION1_HEADER,
              }}
            />
            <div className="safety-box-inner">
              <span
                dangerouslySetInnerHTML={{
                  __html: homePageData.data.response.variables.OUR_PROOF,
                }}
              />
              <div className="safety-img">
                <Image
                  src={`${initData.COMMON_IMG_URL}/${reviewLogo()}`}
                  width="113"
                  height="52"
                  alt={reviewLogo()}
                />
              </div>
              <ul dangerouslySetInnerHTML={{ __html: reviewDescription() }} />
            </div>
          </div>
          <div className="safety-item">
            <span
              className="safety-txt"
              dangerouslySetInnerHTML={{
                __html:
                  homePageData.data.response.variables
                    .TXT_OUR_PROMISES_SECTION2_HEADER,
              }}
            />
            <div className="safety-box-inner">
              <span
                dangerouslySetInnerHTML={{
                  __html: homePageData.data.response.variables.OUR_PROOF,
                }}
              />
              <div
                className="safety-img"
                dangerouslySetInnerHTML={{ __html: cqcLogo() }}
              />
            </div>
          </div>
          <div className="safety-item">
            <span
              className="safety-txt"
              dangerouslySetInnerHTML={{
                __html:
                  homePageData.data.response.variables
                    .TXT_OUR_PROMISES_SECTION3_HEADER,
              }}
            ></span>
            <div className="safety-box-inner">
              <span
                dangerouslySetInnerHTML={{
                  __html: homePageData.data.response.variables.OUR_PROOF,
                }}
              />
              <div
                className="safety-img"
                dangerouslySetInnerHTML={{ __html: sectigoLogo() }}
              />
              <ul
                dangerouslySetInnerHTML={{
                  __html: homePageData.data.response.variables.TXT_SSL_DESC_NEW,
                }}
              ></ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function En({ homePageData, initData }) {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  function handleClick() {
    if (authState) {
      dispatch(setAuthState(false));
    } else {
      dispatch(setAuthState(true));
    }
  }
  return (
    <>
      <Head>
        <link
          href="https://121cdn.dev-projects.com/new121doc/css/bootstrap.min.css"
          rel="stylesheet"
          as="style"
        />
      </Head>
      <MainFrame initData={initData.data.response}>
        <div className={utilStyles.pageInner}>
          <div className={utilStyles.container}>
            <div>
              <section className="confirm-section">
                <div className="container">
                  <div className="row"></div>
                </div>
              </section>
              <div>
                <section className="h-banner">
                  <div className="container container-lg">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="home-banner">
                          <Image
                            src="https://121cdn.dev-projects.com/new121doc/images/en/theme/home-banner.jpg"
                            alt="home banner"
                            width={670}
                            height={596}
                            priority
                          />
                        </div>
                      </div>
                      <div className="col-md-6 align-self-center mob-bg">
                        <div className="banner-caption">
                          <h1>Get your prescription and treatment for</h1>
                          <h2 className="type-effect">
                            <span className="typed-text"></span>
                            <span className="TypeCursor">&nbsp;</span>
                          </h2>
                          <div className="banner-search">
                            <input
                              type="text"
                              name="bannersearch"
                              aria-label="Search here..."
                              placeholder="Search for treatment or condition"
                            />
                            <span className="icon icon-search"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="how-does-it-work" className="how-does-it-work">
                  <div className="container">
                    <h2>
                      {
                        homePageData.data.response.variables
                          .TXT_HOW_WE_WORK_TITLE
                      }
                    </h2>
                    <div className="row">
                      <div className="col-lg-12">
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              homePageData.data.response.variables
                                .TXT_HOW_WE_WORK_DESC_NEW,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="select-treatment">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-5">
                        <h2
                          dangerouslySetInnerHTML={{
                            __html:
                              initData.data.response.TXT_SELECT_YOUR_CONDITION,
                          }}
                        ></h2>
                      </div>
                      <div className="col-lg-6 col-md-7">
                        <div className="top-categories">
                          <ul className="ls-none">
                            {homePageData.data.response.page_data.response.categories.map(
                              (category) => {
                                let styles = {};
                                if (category.categorym_color_code) {
                                  styles.background =
                                    category.categorym_color_code;
                                }
                                return (
                                  <li key={category.cat_categorym_id}>
                                    <Link
                                      href={category.cat_url}
                                      style={styles}
                                    >
                                      {category.cat_name}
                                    </Link>
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="home-about-us">
                  <div className="container">
                    <h2>
                      {homePageData.data.response.variables.TXT_WHAT_OTHER_SAY}
                    </h2>
                    <ReviewCarousel
                      reviewData={
                        homePageData.data.response.page_data.response.reviewData
                      }
                    />
                  </div>
                </section>

                <section className="doctor-section">
                  <div className="container">
                    <div className="sec-title col-lg-8">
                      <h2
                        dangerouslySetInnerHTML={{
                          __html:
                            homePageData.data.response.variables
                              .TXT_OUR_QUALIFIED_TEAM,
                        }}
                      />
                      <span
                        dangerouslySetInnerHTML={{
                          __html:
                            homePageData.data.response.variables
                              .TXT_OUR_QUALIFIED_TEAM_DESC,
                        }}
                      ></span>
                    </div>
                    <DoctorCarousel
                      doctorsData={
                        homePageData.data.response.page_data.response
                          .doctorsData
                      }
                      initData={initData.data.response}
                    />
                  </div>
                </section>

                <HomePromises
                  homePageData={homePageData}
                  initData={initData.data.response}
                />
              </div>
            </div>
          </div>
        </div>
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="afterInteractive"
          onLoad={() =>
            dispatch(setJsLibraryState({ name: 'jqueryLoaded', state: true }))
          }
        />
        <Script
          src="https://121cdn.dev-projects.com/new121doc/js/owl.carousel.min.js?v=1.1"
          strategy="lazyOnload"
          onLoad={() =>
            dispatch(
              setJsLibraryState({ name: 'owlCarouselLoaded', state: true })
            )
          }
        />
      </MainFrame>
    </>
  );
}

export async function getStaticProps() {
  const url = 'https://api.dev-projects.com/v4/init';
  let reqData = {
    client_id: '121doc',
    client_secret: 'fxX5T46KUPxqGpt8uli0fOUi48snl93_',
    grant_type: 'client_credentials',
    brand_id: 7,
    device_id: '12345',
    device_type: 1,
    language: 'en',
  };
  const initReq = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqData),
  });
  const initData = await initReq.json();

  reqData = {
    brand_id: 7,
    device_id: '12345',
    domain_id: 57,
    page_id: 3,
    path: 'en/',
    gender: '',
    device_type: 1,
  };
  const homeUrl = 'https://api.dev-projects.com/v4/init/checkrewriteurl';
  const homereq = await fetch(homeUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: initData.data.response.token,
    },
    body: JSON.stringify(reqData),
  });
  const homePageData = await homereq.json();

  const menuItems = [
    { id: 1, title: 'Erectile dysfunction', href: '/erectile-dysfunction' },
    { id: 2, title: 'weight loss', href: '/weight-loss' },
  ];

  return {
    props: {
      menuItems,
      homePageData,
      initData,
    },
  };
}
