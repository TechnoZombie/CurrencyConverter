function generateCurrencyOptions() {

    const selectElements = document.querySelectorAll(".dynamic-select");
    const currencyOptions = document.getElementById("currencySwitch").checked ? cryptoCurrencies : fiatCurrencies;
    const fiatDisplay = document.getElementById("countriesSwitch").checked ? countryNames : fiatCurrencies;


    if (fiatDisplay === countryNames) {
        console.log("display country names")
    } else if (fiatDisplay === fiatCurrencies) {
        console.log("display currency codes")
    }
    if (fiatDisplay === countryNames) {
        selectElements.forEach(selectElement => {
            selectElement.innerHTML = "";

            // Setting the default option
            const defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.textContent = "Select";
            selectElement.appendChild(defaultOption);

            // Loop to generate the options
            for (let i = 0; i < fiatDisplay.length; i++) {
                const option = document.createElement("option");
                option.value = fiatDisplay[i];
                option.textContent = fiatDisplay[i];
                selectElement.appendChild(option);
            }
        });
    } else {
        // Loop through all select elements with the class "dynamic-select"
        selectElements.forEach(selectElement => {
            selectElement.innerHTML = "";

            // Setting the default option
            const defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.textContent = "Select";
            selectElement.appendChild(defaultOption);

            // Loop to generate the options
            for (let i = 0; i < currencyOptions.length; i++) {
                const option = document.createElement("option");
                option.value = currencyOptions[i];
                option.textContent = currencyOptions[i];
                selectElement.appendChild(option);
            }
        });
    }
}

// Event listener for switch change
document.getElementById("currencySwitch").addEventListener("change", generateCurrencyOptions);
document.getElementById("countriesSwitch").addEventListener("change", generateCurrencyOptions);

// Initial load
document.addEventListener("DOMContentLoaded", generateCurrencyOptions);

const fiatCurrencies = [
    "EUR", "USD", "GBP", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN",
    "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP",
    "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "FJD", "FKP", "FOK", "GEL", "GGP", "GHS",
    "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK",
    "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD",
    "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD",
    "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB",
    "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB",
    "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "UYU", "UZS", "VES", "VND", "VUV", "WST",
    "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW"
];

const cryptoCurrencies = [
    "EUR","USD","BTC", "ETH", "1INCH", "AAVE", "AKITA", "AKRO", "ALGO", "ALPHA", "AMP", "ANKR", "ANT", "APE", "APT", "ARB", "ARPA",
    "ATOM", "AUDIUS", "AVAX", "BABYDOGE", "BADGER", "BAL", "BAND", "BAT", "BCH", "BEL", "BLOX", "BNB", "BNX", "BNT", "BOND", "BUSD",
    "BTS", "COTI", "CHR", "COVER", "CREAM", "CVC", "DAI", "DAO", "DENT", "DEGO", "DFI", "DIA", "DODO", "DOGE", "DOCK",
    "DOT", "DYDX", "ELON", "ENJ", "ERD", "ETC", "FIL", "FLOW", "FOR", "FRONT", "FUN", "GALA", "GHST", "GNO", "GRT",
    "HBAR", "HOGE", "ICP", "IMX", "INJ", "JUV", "KAI", "KAVA", "KEEP", "KISHU", "KNC", "KP3R", "KSM", "LEO", "LDO",
    "LINA", "LINK", "LIT", "LOOM", "LRC", "LTC", "MANA", "MATH", "MFT", "MIR", "MLN", "MOVR", "MTL", "MKR", "MATIC",
    "NKN", "NFTX", "NMR", "NULS", "OCEAN", "OGN", "OMG", "OM", "ORN", "OXT", "PAX", "PERP", "PHA", "POLS", "POOLZ",
    "PNT", "QNT", "QUICK", "RARI", "RAY", "REEF", "REN", "RENBTC", "REP", "RIF", "RLC", "RSR", "RUNE", "SFP", "SNX",
    "SOL", "SPELL", "SRM", "STAKE", "STORJ", "STX", "SUSHI", "SXP", "TCT", "THETA", "TON", "TRB", "TRX", "TROY",
    "UMA", "UNI", "UOS", "USDC", "USDT", "UTK", "VET", "VIDT", "WAVES", "WBTC", "WNXM", "XLM", "XOR", "XPRT", "XRP",
    "XTZ", "YAM", "YAX", "YFI", "ZIL", "ZRX"
];

const countryNames = [
    "European Union", "United States", "United Kingdom", "UA Emirates", "Afghanistan", "Albania", "Armenia",
    "Curaçao", "Angola", "Argentina", "Australia", "Aruba", "Azerbaijan", "Bos Herzegov", "Barbados", "Bangladesh",
    "Bulgaria", "Bahrain", "Burundi", "Bermuda", "Brunei Darussalam", "Bolivia", "Brazil", "Bahamas", "Bhutan", "Botswana",
    "Belarus", "Belize", "Canada", "Congo", "Switzerland", "Chile", "China", "Colombia", "Costa Rica", "Cuba", "Cabo Verde",
    "Czech Republic", "Djibouti", "Denmark", "Dominican Republic", "Algeria", "Egypt", "Eritrea", "Ethiopia", "Fiji",
    "Falkland Islands", "Faroe Islands", "Georgia", "Guernsey", "Ghana", "Gibraltar", "Gambia", "Guinea", "Guatemala", "Guyana",
    "Hong Kong", "Honduras", "Croatia", "Haiti", "Hungary", "Indonesia", "Israel", "Isle of Man", "India", "Iraq", "Iran", "Iceland",
    "Jersey", "Jamaica", "Jordan", "Japan", "Kenya", "Kyrgyzstan", "Cambodia", "Kiribati", "Comoros", "South Korea", "Kuwait",
    "Cayman Isl", "Kazakhstan", "Laos", "Lebanon", "Sri Lanka", "Liberia", "Lesotho", "Libya", "Morocco", "Moldova",
    "Madagascar", "North Macedonia", "Myanmar", "Mongolia", "Macao", "Mauritania", "Mauritius", "Maldives", "Malawi", "Mexico",
    "Malaysia", "Mozambique", "Namibia", "Nigeria", "Nicaragua", "Norway", "Nepal", "New Zealand", "Oman", "Panama", "Peru",
    "Papua New Guinea", "Philippines", "Pakistan", "Poland", "Paraguay", "Qatar", "Romania", "Serbia", "Russia", "Rwanda",
    "Saudi Arabia", "Solomon Islands", "Seychelles", "Sudan", "Sweden", "Singapore", "Saint Helena", "Sierra Leone", "Somalia",
    "Suriname", "South Sudan", "S. Tome Principe", "Syria", "Eswatini", "Thailand", "Tajikistan", "Turkmenistan", "Tunisia",
    "Tonga", "Turkey", "Trin Tobago", "Tuvalu", "Taiwan", "Tanzania", "Ukraine", "Uganda", "Uruguay", "Uzbekistan",
    "Venezuela", "Vietnam", "Vanuatu", "Samoa", "C. African Rep.", "French Polynesia", "Yemen", "South Africa", "Zambia"
];
