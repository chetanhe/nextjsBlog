export function replaceAll(search, replace, str) {
  //console.log('replace all');
  search = '{{' + search + '}}';
  return str.replace(search, replace);
}

export function hasIOSApp({ domain_details }) {
  return (
    typeof domain_details.domain_extra_options.ios_app_download_url !==
      'undefined' &&
    domain_details.domain_extra_options.ios_app_download_url != '' &&
    domain_details.domain_extra_options.ios_app_download_url_status !==
      'undefined' &&
    domain_details.domain_extra_options.ios_app_download_url_status == 'Y'
  );
}

export function hasAndroidApp({ domain_details }) {
  return (
    typeof domain_details.domain_extra_options.android_app_download_url !==
      'undefined' &&
    domain_details.domain_extra_options.android_app_download_url != '' &&
    domain_details.domain_extra_options.android_app_download_url_status !==
      'undefined' &&
    domain_details.domain_extra_options.android_app_download_url_status == 'Y'
  );
}

export function hasMobileApp({ domain_details }) {
  return hasIOSApp({ domain_details }) || hasAndroidApp({ domain_details });
}

export function getIosUrl({ domain_details }) {
  return domain_details.domain_extra_options.ios_app_download_url;
}

export function getAndroidAppUrl({ domain_details }) {
  return domain_details.domain_extra_options.android_app_download_url;
}

export function hasLanguageDropdown({ domain_details }) {
  let domain = domain_details;
  if (
    typeof domain.domain_extra_options != 'undefined' &&
    typeof domain.domain_extra_options.domain_language_dropdown !=
      'undefined' &&
    domain.domain_extra_options.domain_language_dropdown == 'N'
  ) {
    return false;
  }
  return true;
}

export function getSafetyLogo({ initData }) {
  let html = [];
  let logos = (
    <span className="footer-title">{initData.TXT_OUR_SAFETY_NEW}</span>
  );

  html.push(logos);

  if (initData.domain_details.domain_extra_options) {
    let data = initData.domain_details.domain_extra_options;
    if (
      typeof data.kitemark_seal_code_status !== 'undefined' &&
      data.kitemark_seal_code_status == 'Y'
    ) {
      html.push(
        <span
          dangerouslySetInnerHTML={{ __html: data.kitemark_seal_code }}
        ></span>
      );
    }

    if (
      typeof data.qualitycommission_code_status !== 'undefined' &&
      data.qualitycommission_code_status == 'Y'
    ) {
      html.push(
        <span
          dangerouslySetInnerHTML={{ __html: data.qualitycommission_code }}
        ></span>
      );
    }

    if (
      typeof data.gpc_seal_code_status !== 'undefined' &&
      data.gpc_seal_code_status == 'Y'
    ) {
      html.push(
        <span dangerouslySetInnerHTML={{ __html: data.gpc_seal_code }}></span>
      );
    }

    if (
      typeof data.co2_neutral_status !== 'undefined' &&
      data.co2_neutral_status == 'Y'
    ) {
      html.push(
        <span dangerouslySetInnerHTML={{ __html: data.co2_neutral }}></span>
      );
    }

    if (
      typeof data.sectigo_seal_code_status !== 'undefined' &&
      data.sectigo_seal_code_status == 'Y'
    ) {
      html.push(
        <span
          dangerouslySetInnerHTML={{ __html: data.sectigo_seal_code }}
        ></span>
      );
    }
  }

  return html;
}

export async function sendRequest(url, reqData) {
  const request = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqData),
  });

  return await request.json();
}
