function generateOptions(selectElements, optionsArray) {
    selectElements.forEach(selectElement => {
        selectElement.innerHTML = "";

        // Setting the default option
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Select";
        selectElement.appendChild(defaultOption);

        // Loop to generate the options
        optionsArray.forEach(optionValue => {
            const option = document.createElement("option");
            option.value = optionValue;
            option.textContent = optionValue;
            selectElement.appendChild(option);
        });
    });
}

function generateCurrencyOptions() {
    const selectElements = document.querySelectorAll(".dynamic-select");
    const currencyOptions = document.getElementById("currencySwitch").checked ? cryptoCurrencies : fiatCurrencies;
    const fiatDisplay = document.getElementById("countriesSwitch").checked ? countryNames : fiatCurrencies;

    if (fiatDisplay === countryNames) {
        generateOptions(selectElements, fiatDisplay);
    } else {
        generateOptions(selectElements, currencyOptions);
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
    "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW"
];

const cryptoCurrencies = [
    "EUR", "USD", "BTC", "ETH", "1INCH", "AAVE", "AKITA", "AKRO", "ALGO", "ALPHA", "AMP", "ANKR", "ANT", "APE", "APT", "ARB", "ARPA",
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
    "Euro Union", "USA", "Utd Kingdom",
    "Afghanistan", "Albania", "Algeria", "Angola", "Argentina", "Armenia", "Aruba", "Australia", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belize", "Bermuda", "Bhutan", "Bolivia", "Bos Herzegov", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burundi",
    "C.African Rep.", "Cabo Verde", "Cambodia", "Canada", "Cayman Isl", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Czech Rep",
    "Djibouti", "Denmark", "Dom Republic",
    "Egypt", "Eritrea", "Eswatini", "Ethiopia",
    "Falkland Isl", "Faroe Isl", "Fiji", "French Poly",
    "Gambia", "Georgia", "Ghana", "Gibraltar", "Guatemala", "Guernsey", "Guinea", "Guyana",
    "Haiti", "Honduras", "Hong Kong", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Isl of Man", "Israel",
    "Jamaica", "Japan", "Jersey", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Lebanon", "Lesotho", "Liberia", "Libya",
    "Madagascar", "Macao", "Malawi", "Malaysia", "Maldives", "Mauritania", "Mauritius", "Mexico", "Moldova", "Mongolia", "Morocco", "Mozambique", "Myanmar",
    "N.Macedonia", "Namibia", "Nepal", "New Zealand", "Nicaragua", "Nigeria", "Norway",
    "Oman",
    "Pakistan", "Panama", "Papua N Guinea", "Paraguay", "Peru", "Philippines", "Poland",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "S.Tome Principe", "Saint Helena", "Saudi Arabia", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Solomon Isl.", "Somalia", "South Africa", "South Korea", "South Sudan", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Tajikistan", "Tanzania", "Thailand", "Tonga", "Trin Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "Uruguay", "Uzbekistan",
    "Vanuatu", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia"
];


