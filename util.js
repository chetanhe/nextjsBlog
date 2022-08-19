export function replaceAll(search, replace, str){
    search = "{{" + search + "}}"
    return str.replace(search, replace);
}

export function hasIOSApp({domain_details}){
    return (
        typeof domain_details.domain_extra_options.ios_app_download_url !== 'undefined' &&
        domain_details.domain_extra_options.ios_app_download_url != '' &&
        domain_details.domain_extra_options.ios_app_download_url_status !== "undefined" &&
        domain_details.domain_extra_options.ios_app_download_url_status == "Y"
    )
}

export function hasAndroidApp({domain_details}){
    return (
        typeof domain_details.domain_extra_options.android_app_download_url !== 'undefined' &&
        domain_details.domain_extra_options.android_app_download_url != '' &&
        domain_details.domain_extra_options.android_app_download_url_status !== "undefined" &&
        domain_details.domain_extra_options.android_app_download_url_status == "Y"
    )
}

export function hasMobileApp({domain_details}){
    return hasIOSApp({domain_details}) || hasAndroidApp({domain_details});
}

export function getIosUrl({domain_details}){
    return domain_details.domain_extra_options.ios_app_download_url;
}

export function getAndroidAppUrl({domain_details}){
    return domain_details.domain_extra_options.android_app_download_url;
}

export function hasLanguageDropdown({domain_details}) {
    let domain = domain_details
    if (typeof domain.domain_extra_options != "undefined" && typeof domain.domain_extra_options.domain_language_dropdown != "undefined" && domain.domain_extra_options.domain_language_dropdown == "N") {
      return false
    }
    return true
}