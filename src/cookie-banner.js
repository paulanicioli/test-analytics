/*
* Javascript to show and hide cookie banner using localstorage
*/

/**
 * @description Shows the cookie banner
 */
function showCookieBanner(){
    console.log("called function showCookieBanner");
    let cookieBanner = document.getElementById("cb-cookie-banner");
    cookieBanner.style.display = "block";
}

function showSettingsBanner(){
    console.log("called function showSettingsBanner");
    hideCookieBanner("yes");
    let cookieSettingsBanner = document.getElementById("cb-manage-cookie-settings");
    cookieSettingsBanner.style.display = "block";
}

/**
 * @description Hides the Cookie banner and saves the value to localstorage
 */
function acceptAllCookies(){
    document.cookie = "analytics_storage=granted";
    document.cookie = "ads_storage=granted";
    document.cookie = "ad_user_data=granted";
    document.cookie = "ad_personalization=granted";
    dataLayer.push({'event':'consent_update'});
    hideCookieBanner("yes");
}

function rejectAllCookies(){
    document.cookie = "analytics_storage=denied";
    document.cookie = "ads_storage=denied";
    document.cookie = "ad_user_data=denied";
    document.cookie = "ad_personalization=denied";
    dataLayer.push({'event':'consent_update'});
    hideCookieBanner("no");
}

function manageCookieSettings() {
    console.log("called function manageCookieSettings");
    let consentStatus = "no";
    for (i in ['ad_storage', 'analytics_storage', 'ad_user_data','ad_personalization']) {
        if (document.getElementById(i).value =="on"){
            document.cookie = i+"=granted";
            consentStatus = "yes";
        }
        else {
            document.cookie = i+"=denied";
        }
    }
    dataLayer.push({'event':'consent_update'});
    hideSettingsBanner(consentStatus);    

}

function hideCookieBanner(y){
    localStorage.setItem("cb_isCookieAccepted", y);
    let cookieBanner = document.getElementById("cb-cookie-banner");
    cookieBanner.style.display = "none";
}

function hideSettingsBanner(y){
    hideCookieBanner(y);
    let cookieSettingsBanner = document.getElementById("cb-manage-cookie-settings");
    cookieSettingsBanner.style.display = "none";
}

/**
 * @description Checks the localstorage and shows Cookie banner based on it.
 */
function initializeCookieBanner(){
    let isCookieAccepted = localStorage.getItem("cb_isCookieAccepted");
    if(isCookieAccepted === null)
    {
        showCookieBanner();
    }
}

// Assigning values to window object
window.onload = initializeCookieBanner();
window.cb_showSettingsBanner = showSettingsBanner;
window.cb_acceptAllCookies = acceptAllCookies;
window.cb_rejectAllCookies = rejectAllCookies;
window.cb_manageCookieSettings = manageCookieSettings;
