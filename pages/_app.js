import { clientId, deviceType, deviceId, clientSecret, apiUrl } from 'config';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTokenGenerated } from 'slices/mainSlice';
import { sendRequest } from 'util';
import { wrapper } from '../store';
//import '../base.css';

function init() {
  const url = `${apiUrl}/init`;

  let reqData = {
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'client_credentials',
    brand_id: 7,
    device_id: deviceId,
    device_type: deviceType,
    language: 'en',
  };

  return new Promise((resolve, reject) => {
    sendRequest(url, reqData).then((response) => {
      //need to set tokenGenerated state
      return resolve(response);
    });
  });
}

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  useEffect(() => {
    var d = init();
    d.then((response) => {
      //console.log(response);
      dispatch(setTokenGenerated({ status: true }));
    });
  }, []);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default wrapper.withRedux(MyApp);
