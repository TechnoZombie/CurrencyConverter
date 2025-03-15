function setFlagIcon(elementId, currency) {
    $(`#${elementId}`).empty();
    const flag = new Image();

    // CountryFlag API does not have EU flag available, so it needs to be local.
    if (currency === "EUR") {
        const countryName = convertCountryCodeToCountryNameMap.get("EU");
        flag.src = 'resources/EU.png';
        flag.alt = flag.title = countryName;

    } else {
        const countryCode = convertCurrencyCodeToCountryCodeMap.get(currency);
        const countryName = convertCountryCodeToCountryNameMap.get(countryCode);
        flag.src = `https://flagsapi.com/${countryCode}/shiny/32.png`;
        flag.alt = flag.title = countryName;
    }

    flag.onload = function () {
        $(`#${elementId}`).append($(flag).addClass("loaded"));
    };

    flag.onerror = function () {
        console.error(`Failed to load flag for ${currency}`);
        flag.src = 'resources/NoFlag.png'
        flag.alt = "Flag unavailable"
        flag.title = "Flag unavailable for this currency"
        $(`#${elementId}`).empty().append($(flag).addClass("loaded"));
    };
}
