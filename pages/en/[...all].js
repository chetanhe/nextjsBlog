import { deviceId, apiUrl, clientId, clientSecret, deviceType } from 'config';
import { useRouter } from 'next/router';

export default function All() {
  const router = useRouter();

  return <div>{JSON.stringify(router.query)}</div>;
}

import { sendRequest } from '../../util';

export async function getStaticPaths() {
  //fetch some of static pages

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

  const initData = await sendRequest(url, reqData);

  return {
    paths: [
      { params: { all: ['erectile-dysfunction'] } }, // See the "paths" section below
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  //fetch category pages
  const catReqUrl = `${apiUrl}/init/checkrewriteurl`;

  //console.log(params.all.join('/'));

  let reqData = {
    brand_id: 7,
    device_type: 1,
    device_id: deviceId,
    domain_id: 57,
    path: params.all.join('/'),
    gender: '',
  };

  const pageData = await sendRequest(catReqUrl, reqData);

  if (!pageData.success) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageData: pageData.data.response,
    },
  };
}
