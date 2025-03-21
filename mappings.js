
// Use .get() to retrieve values (convertCurrencyCodeToCountryCodeMap.get("USD") → "US").
const convertCurrencyCodeToCountryCodeMap = new Map([
    ["EUR", "EU"],
    ["USD", "US"],
    ["GBP", "GB"],
    ["AED", "AE"],
    ["AFN", "AF"],
    ["ALL", "AL"],
    ["AMD", "AM"],
    ["ANG", "CW"],
    ["AOA", "AO"],
    ["ARS", "AR"],
    ["AUD", "AU"],
    ["AWG", "AW"],
    ["AZN", "AZ"],
    ["BAM", "BA"],
    ["BBD", "BB"],
    ["BDT", "BD"],
    ["BGN", "BG"],
    ["BHD", "BH"],
    ["BIF", "BI"],
    ["BMD", "BM"],
    ["BND", "BN"],
    ["BOB", "BO"],
    ["BRL", "BR"],
    ["BSD", "BS"],
    ["BTN", "BT"],
    ["BWP", "BW"],
    ["BYN", "BY"],
    ["BZD", "BZ"],
    ["CAD", "CA"],
    ["CDF", "CD"],
    ["CHF", "CH"],
    ["CLP", "CL"],
    ["CFA", "CM"],
    ["CNY", "CN"],
    ["COP", "CO"],
    ["CRC", "CR"],
    ["CUP", "CU"],
    ["CVE", "CV"],
    ["CZK", "CZ"],
    ["DJF", "DJ"],
    ["DKK", "DK"],
    ["DOP", "DO"],
    ["DZD", "DZ"],
    ["EGP", "EG"],
    ["ERN", "ER"],
    ["ETB", "ET"],
    ["FJD", "FJ"],
    ["FKP", "FK"],
    ["FOK", "FO"],
    ["GEL", "GE"],
    ["GGP", "GG"],
    ["GHS", "GH"],
    ["GIP", "GI"],
    ["GMD", "GM"],
    ["GNF", "GN"],
    ["GTQ", "GT"],
    ["GYD", "GY"],
    ["HKD", "HK"],
    ["HNL", "HN"],
    ["HRK", "HR"],
    ["HTG", "HT"],
    ["HUF", "HU"],
    ["IDR", "ID"],
    ["ILS", "IL"],
    ["IMP", "IM"],
    ["INR", "IN"],
    ["IQD", "IQ"],
    ["IRR", "IR"],
    ["ISK", "IS"],
    ["JEP", "JE"],
    ["JMD", "JM"],
    ["JOD", "JO"],
    ["JPY", "JP"],
    ["KES", "KE"],
    ["KGS", "KG"],
    ["KHR", "KH"],
    ["KID", "KI"],
    ["KMF", "KM"],
    ["KRW", "KR"],
    ["KWD", "KW"],
    ["KYD", "KY"],
    ["KZT", "KZ"],
    ["LAK", "LA"],
    ["LBP", "LB"],
    ["LKR", "LK"],
    ["LRD", "LR"],
    ["LSL", "LS"],
    ["LYD", "LY"],
    ["MAD", "MA"],
    ["MDL", "MD"],
    ["MGA", "MG"],
    ["MKD", "MK"],
    ["MMK", "MM"],
    ["MNT", "MN"],
    ["MOP", "MO"],
    ["MRU", "MR"],
    ["MUR", "MU"],
    ["MVR", "MV"],
    ["MWK", "MW"],
    ["MXN", "MX"],
    ["MYR", "MY"],
    ["MZN", "MZ"],
    ["NAD", "NA"],
    ["NGN", "NG"],
    ["NIO", "NI"],
    ["NOK", "NO"],
    ["NPR", "NP"],
    ["NZD", "NZ"],
    ["OMR", "OM"],
    ["PAB", "PA"],
    ["PEN", "PE"],
    ["PGK", "PG"],
    ["PHP", "PH"],
    ["PKR", "PK"],
    ["PLN", "PL"],
    ["PYG", "PY"],
    ["QAR", "QA"],
    ["RON", "RO"],
    ["RSD", "RS"],
    ["RUB", "RU"],
    ["RWF", "RW"],
    ["SAR", "SA"],
    ["SBD", "SB"],
    ["SCR", "SC"],
    ["SDG", "SD"],
    ["SEK", "SE"],
    ["SGD", "SG"],
    ["SHP", "SH"],
    ["SLE", "SL"],
    ["SLL", "SL"],
    ["SOS", "SO"],
    ["SRD", "SR"],
    ["SSP", "SS"],
    ["STN", "ST"],
    ["SYP", "SY"],
    ["SZL", "SZ"],
    ["THB", "TH"],
    ["TJS", "TJ"],
    ["TMT", "TM"],
    ["TND", "TN"],
    ["TOP", "TO"],
    ["TRY", "TR"],
    ["TTD", "TT"],
    ["TVD", "TV"],
    ["TWD", "TW"],
    ["TZS", "TZ"],
    ["UAH", "UA"],
    ["UGX", "UG"],
    ["UYU", "UY"],
    ["UZS", "UZ"],
    ["VES", "VE"],
    ["VND", "VN"],
    ["VUV", "VU"],
    ["WST", "WS"],
    ["XAF", "CF"],
    ["XCD", "AI"],
    ["XDR", "-"],
    ["XOF", "BJ"],
    ["XPF", "PF"],
    ["YER", "YE"],
    ["ZAR", "ZA"],
    ["ZMW", "ZM"]
]);

const convertCountryCodeToCountryNameMap = new Map([
    ["EU", "European Union"],
    ["US", "United States"],
    ["GB", "United Kingdom"],
    ["AE", "United Arab Emirates"],
    ["AF", "Afghanistan"],
    ["AL", "Albania"],
    ["AM", "Armenia"],
    ["CW", "Curaçao"],
    ["AO", "Angola"],
    ["AR", "Argentina"],
    ["AU", "Australia"],
    ["AW", "Aruba"],
    ["AZ", "Azerbaijan"],
    ["BA", "Bosnia and Herzegovina"],
    ["BB", "Barbados"],
    ["BD", "Bangladesh"],
    ["BG", "Bulgaria"],
    ["BH", "Bahrain"],
    ["BI", "Burundi"],
    ["BM", "Bermuda"],
    ["BN", "Brunei Darussalam"],
    ["BO", "Bolivia"],
    ["BR", "Brazil"],
    ["BS", "Bahamas"],
    ["BT", "Bhutan"],
    ["BW", "Botswana"],
    ["BY", "Belarus"],
    ["BZ", "Belize"],
    ["CA", "Canada"],
    ["CD", "Congo (DRC)"],
    ["CH", "Switzerland"],
    ["CL", "Chile"],
    ["CN", "China"],
    ["CO", "Colombia"],
    ["CR", "Costa Rica"],
    ["CU", "Cuba"],
    ["CV", "Cabo Verde"],
    ["CZ", "Czech Republic"],
    ["DJ", "Djibouti"],
    ["DK", "Denmark"],
    ["DO", "Dominican Republic"],
    ["DZ", "Algeria"],
    ["EG", "Egypt"],
    ["ER", "Eritrea"],
    ["ET", "Ethiopia"],
    ["FJ", "Fiji"],
    ["FK", "Falkland Islands"],
    ["FO", "Faroe Islands"],
    ["GE", "Georgia"],
    ["GG", "Guernsey"],
    ["GH", "Ghana"],
    ["GI", "Gibraltar"],
    ["GM", "Gambia"],
    ["GN", "Guinea"],
    ["GT", "Guatemala"],
    ["GY", "Guyana"],
    ["HK", "Hong Kong"],
    ["HN", "Honduras"],
    ["HR", "Croatia"],
    ["HT", "Haiti"],
    ["HU", "Hungary"],
    ["ID", "Indonesia"],
    ["IL", "Israel"],
    ["IM", "Isle of Man"],
    ["IN", "India"],
    ["IQ", "Iraq"],
    ["IR", "Iran"],
    ["IS", "Iceland"],
    ["JE", "Jersey"],
    ["JM", "Jamaica"],
    ["JO", "Jordan"],
    ["JP", "Japan"],
    ["KE", "Kenya"],
    ["KG", "Kyrgyzstan"],
    ["KH", "Cambodia"],
    ["KI", "Kiribati"],
    ["KM", "Comoros"],
    ["KR", "South Korea"],
    ["KW", "Kuwait"],
    ["KY", "Cayman Islands"],
    ["KZ", "Kazakhstan"],
    ["LA", "Laos"],
    ["LB", "Lebanon"],
    ["LK", "Sri Lanka"],
    ["LR", "Liberia"],
    ["LS", "Lesotho"],
    ["LY", "Libya"],
    ["MA", "Morocco"],
    ["MD", "Moldova"],
    ["MG", "Madagascar"],
    ["MK", "North Macedonia"],
    ["MM", "Myanmar"],
    ["MN", "Mongolia"],
    ["MO", "Macao"],
    ["MR", "Mauritania"],
    ["MU", "Mauritius"],
    ["MV", "Maldives"],
    ["MW", "Malawi"],
    ["MX", "Mexico"],
    ["MY", "Malaysia"],
    ["MZ", "Mozambique"],
    ["NA", "Namibia"],
    ["NG", "Nigeria"],
    ["NI", "Nicaragua"],
    ["NO", "Norway"],
    ["NP", "Nepal"],
    ["NZ", "New Zealand"],
    ["OM", "Oman"],
    ["PA", "Panama"],
    ["PE", "Peru"],
    ["PG", "Papua New Guinea"],
    ["PH", "Philippines"],
    ["PK", "Pakistan"],
    ["PL", "Poland"],
    ["PY", "Paraguay"],
    ["QA", "Qatar"],
    ["RO", "Romania"],
    ["RS", "Serbia"],
    ["RU", "Russia"],
    ["RW", "Rwanda"],
    ["SA", "Saudi Arabia"],
    ["SB", "Solomon Islands"],
    ["SC", "Seychelles"],
    ["SD", "Sudan"],
    ["SE", "Sweden"],
    ["SG", "Singapore"],
    ["SH", "Saint Helena"],
    ["SL", "Sierra Leone"],
    ["SO", "Somalia"],
    ["SR", "Suriname"],
    ["SS", "South Sudan"],
    ["ST", "Sao Tome and Principe"],
    ["SY", "Syria"],
    ["SZ", "Eswatini"],
    ["TH", "Thailand"],
    ["TJ", "Tajikistan"],
    ["TM", "Turkmenistan"],
    ["TN", "Tunisia"],
    ["TO", "Tonga"],
    ["TR", "Turkey"],
    ["TT", "Trinidad and Tobago"],
    ["TV", "Tuvalu"],
    ["TW", "Taiwan"],
    ["TZ", "Tanzania"],
    ["UA", "Ukraine"],
    ["UG", "Uganda"],
    ["UY", "Uruguay"],
    ["UZ", "Uzbekistan"],
    ["VE", "Venezuela"],
    ["VN", "Vietnam"],
    ["VU", "Vanuatu"],
    ["WS", "Samoa"],
    ["CF", "Central African Republic"],
    ["AI", "Anguilla"],
    ["PF", "French Polynesia"],
    ["YE", "Yemen"],
    ["ZA", "South Africa"],
    ["ZM", "Zambia"]
]);

const convertCountryNameToCurrencyCodeMap = new Map([
    ["Euro Union", "EUR"],
    ["USA", "USD"],
    ["Utd Kingdom", "GBP"],
    ["UA Emirates", "AED"],
    ["Afghanistan", "AFN"],
    ["Albania", "ALL"],
    ["Armenia", "AMD"],
    ["Curaçao", "ANG"],
    ["Angola", "AOA"],
    ["Argentina", "ARS"],
    ["Australia", "AUD"],
    ["Aruba", "AWG"],
    ["Azerbaijan", "AZN"],
    ["Bos Herzegov", "BAM"],
    ["Barbados", "BBD"],
    ["Bangladesh", "BDT"],
    ["Bulgaria", "BGN"],
    ["Bahrain", "BHD"],
    ["Burundi", "BIF"],
    ["Bermuda", "BMD"],
    ["Brunei", "BND"],
    ["Bolivia", "BOB"],
    ["Brazil", "BRL"],
    ["Bahamas", "BSD"],
    ["Bhutan", "BTN"],
    ["Botswana", "BWP"],
    ["Belarus", "BYN"],
    ["Belize", "BZD"],
    ["Canada", "CAD"],
    ["Congo", "CDF"],
    ["Switzerland", "CHF"],
    ["Chile", "CLP"],
    ["China", "CNY"],
    ["Colombia", "COP"],
    ["Costa Rica", "CRC"],
    ["Cuba", "CUP"],
    ["Cabo Verde", "CVE"],
    ["Czech Rep", "CZK"],
    ["Djibouti", "DJF"],
    ["Denmark", "DKK"],
    ["Dom Republic", "DOP"],
    ["Algeria", "DZD"],
    ["Egypt", "EGP"],
    ["Eritrea", "ERN"],
    ["Ethiopia", "ETB"],
    ["Fiji", "FJD"],
    ["Falkland Isl", "FKP"],
    ["Faroe Isl", "FOK"],
    ["Georgia", "GEL"],
    ["Guernsey", "GGP"],
    ["Ghana", "GHS"],
    ["Gibraltar", "GIP"],
    ["Gambia", "GMD"],
    ["Guinea", "GNF"],
    ["Guatemala", "GTQ"],
    ["Guyana", "GYD"],
    ["Hong Kong", "HKD"],
    ["Honduras", "HNL"],
    ["Croatia", "HRK"],
    ["Haiti", "HTG"],
    ["Hungary", "HUF"],
    ["Indonesia", "IDR"],
    ["Israel", "ILS"],
    ["Isl of Man", "IMP"],
    ["India", "INR"],
    ["Iraq", "IQD"],
    ["Iran", "IRR"],
    ["Iceland", "ISK"],
    ["Jersey", "JEP"],
    ["Jamaica", "JMD"],
    ["Jordan", "JOD"],
    ["Japan", "JPY"],
    ["Kenya", "KES"],
    ["Kyrgyzstan", "KGS"],
    ["Cambodia", "KHR"],
    ["Kiribati", "KID"],
    ["Comoros", "KMF"],
    ["South Korea", "KRW"],
    ["Kuwait", "KWD"],
    ["Cayman Isl", "KYD"],
    ["Kazakhstan", "KZT"],
    ["Laos", "LAK"],
    ["Lebanon", "LBP"],
    ["Sri Lanka", "LKR"],
    ["Liberia", "LRD"],
    ["Lesotho", "LSL"],
    ["Libya", "LYD"],
    ["Morocco", "MAD"],
    ["Moldova", "MDL"],
    ["Madagascar", "MGA"],
    ["N.Macedonia", "MKD"],
    ["Myanmar", "MMK"],
    ["Mongolia", "MNT"],
    ["Macao", "MOP"],
    ["Mauritania", "MRU"],
    ["Mauritius", "MUR"],
    ["Maldives", "MVR"],
    ["Malawi", "MWK"],
    ["Mexico", "MXN"],
    ["Malaysia", "MYR"],
    ["Mozambique", "MZN"],
    ["Namibia", "NAD"],
    ["Nigeria", "NGN"],
    ["Nicaragua", "NIO"],
    ["Norway", "NOK"],
    ["Nepal", "NPR"],
    ["New Zealand", "NZD"],
    ["Oman", "OMR"],
    ["Panama", "PAB"],
    ["Peru", "PEN"],
    ["Papua N Guinea", "PGK"],
    ["Philippines", "PHP"],
    ["Pakistan", "PKR"],
    ["Poland", "PLN"],
    ["Paraguay", "PYG"],
    ["Qatar", "QAR"],
    ["Romania", "RON"],
    ["Serbia", "RSD"],
    ["Russia", "RUB"],
    ["Rwanda", "RWF"],
    ["Saudi Arabia", "SAR"],
    ["Solomon Isl.", "SBD"],
    ["Seychelles", "SCR"],
    ["Sudan", "SDG"],
    ["Sweden", "SEK"],
    ["Singapore", "SGD"],
    ["Saint Helena", "SHP"],
    ["Sierra Leone", "SLE"],
    ["Somalia", "SOS"],
    ["Suriname", "SRD"],
    ["South Sudan", "SSP"],
    ["S.Tome Principe", "STN"],
    ["Syria", "SYP"],
    ["Eswatini", "SZL"],
    ["Thailand", "THB"],
    ["Tajikistan", "TJS"],
    ["Turkmenistan", "TMT"],
    ["Tunisia", "TND"],
    ["Tonga", "TOP"],
    ["Turkey", "TRY"],
    ["Trin Tobago", "TTD"],
    ["Tuvalu", "TVD"],
    ["Taiwan", "TWD"],
    ["Tanzania", "TZS"],
    ["Ukraine", "UAH"],
    ["Uganda", "UGX"],
    ["Uruguay", "UYU"],
    ["Uzbekistan", "UZS"],
    ["Venezuela", "VES"],
    ["Vietnam", "VND"],
    ["Vanuatu", "VUV"],
    ["Samoa", "WST"],
    ["C.African Rep.", "XAF"],
    ["Anguilla", "XCD"],
    ["Benin", "XOF"],
    ["French Poly", "XPF"],
    ["Yemen", "YER"],
    ["South Africa", "ZAR"],
    ["Zambia", "ZMW"]
]);

const convertCurrencyCodeToCountryNameMap = new Map([
    ["EUR", "Euro Union"],
    ["USD", "USA"],
    ["GBP", "Utd Kingdom"],
    ["AED", "UA Emirates"],
    ["AFN", "Afghanistan"],
    ["ALL", "Albania"],
    ["AMD", "Armenia"],
    ["ANG", "Curaçao"],
    ["AOA", "Angola"],
    ["ARS", "Argentina"],
    ["AUD", "Australia"],
    ["AWG", "Aruba"],
    ["AZN", "Azerbaijan"],
    ["BAM", "Bos Herzegov"],
    ["BBD", "Barbados"],
    ["BDT", "Bangladesh"],
    ["BGN", "Bulgaria"],
    ["BHD", "Bahrain"],
    ["BIF", "Burundi"],
    ["BMD", "Bermuda"],
    ["BND", "Brunei"],
    ["BOB", "Bolivia"],
    ["BRL", "Brazil"],
    ["BSD", "Bahamas"],
    ["BTN", "Bhutan"],
    ["BWP", "Botswana"],
    ["BYN", "Belarus"],
    ["BZD", "Belize"],
    ["CAD", "Canada"],
    ["CDF", "Congo"],
    ["CHF", "Switzerland"],
    ["CLP", "Chile"],
    ["CNY", "China"],
    ["COP", "Colombia"],
    ["CRC", "Costa Rica"],
    ["CUP", "Cuba"],
    ["CVE", "Cabo Verde"],
    ["CZK", "Czech Rep"],
    ["DJF", "Djibouti"],
    ["DKK", "Denmark"],
    ["DOP", "Dom Republic"],
    ["DZD", "Algeria"],
    ["EGP", "Egypt"],
    ["ERN", "Eritrea"],
    ["ETB", "Ethiopia"],
    ["FJD", "Fiji"],
    ["FKP", "Falkland Isl"],
    ["FOK", "Faroe Isl"],
    ["GEL", "Georgia"],
    ["GGP", "Guernsey"],
    ["GHS", "Ghana"],
    ["GIP", "Gibraltar"],
    ["GMD", "Gambia"],
    ["GNF", "Guinea"],
    ["GTQ", "Guatemala"],
    ["GYD", "Guyana"],
    ["HKD", "Hong Kong"],
    ["HNL", "Honduras"],
    ["HRK", "Croatia"],
    ["HTG", "Haiti"],
    ["HUF", "Hungary"],
    ["IDR", "Indonesia"],
    ["ILS", "Israel"],
    ["IMP", "Isl of Man"],
    ["INR", "India"],
    ["IQD", "Iraq"],
    ["IRR", "Iran"],
    ["ISK", "Iceland"],
    ["JEP", "Jersey"],
    ["JMD", "Jamaica"],
    ["JOD", "Jordan"],
    ["JPY", "Japan"],
    ["KES", "Kenya"],
    ["KGS", "Kyrgyzstan"],
    ["KHR", "Cambodia"],
    ["KID", "Kiribati"],
    ["KMF", "Comoros"],
    ["KRW", "South Korea"],
    ["KWD", "Kuwait"],
    ["KYD", "Cayman Isl"],
    ["KZT", "Kazakhstan"],
    ["LAK", "Laos"],
    ["LBP", "Lebanon"],
    ["LKR", "Sri Lanka"],
    ["LRD", "Liberia"],
    ["LSL", "Lesotho"],
    ["LYD", "Libya"],
    ["MAD", "Morocco"],
    ["MDL", "Moldova"],
    ["MGA", "Madagascar"],
    ["MKD", "N.Macedonia"],
    ["MMK", "Myanmar"],
    ["MNT", "Mongolia"],
    ["MOP", "Macao"],
    ["MRU", "Mauritania"],
    ["MUR", "Mauritius"],
    ["MVR", "Maldives"],
    ["MWK", "Malawi"],
    ["MXN", "Mexico"],
    ["MYR", "Malaysia"],
    ["MZN", "Mozambique"],
    ["NAD", "Namibia"],
    ["NGN", "Nigeria"],
    ["NIO", "Nicaragua"],
    ["NOK", "Norway"],
    ["NPR", "Nepal"],
    ["NZD", "New Zealand"],
    ["OMR", "Oman"],
    ["PAB", "Panama"],
    ["PEN", "Peru"],
    ["PGK", "Papua N Guinea"],
    ["PHP", "Philippines"],
    ["PKR", "Pakistan"],
    ["PLN", "Poland"],
    ["PYG", "Paraguay"],
    ["QAR", "Qatar"],
    ["RON", "Romania"],
    ["RSD", "Serbia"],
    ["RUB", "Russia"],
    ["RWF", "Rwanda"],
    ["SAR", "Saudi Arabia"],
    ["SBD", "Solomon Isl."],
    ["SCR", "Seychelles"],
    ["SDG", "Sudan"],
    ["SEK", "Sweden"],
    ["SGD", "Singapore"],
    ["SHP", "Saint Helena"],
    ["SLE", "Sierra Leone"],
    ["SOS", "Somalia"],
    ["SRD", "Suriname"],
    ["SSP", "South Sudan"],
    ["STN", "S.Tome Principe"],
    ["SYP", "Syria"],
    ["SZL", "Eswatini"],
    ["THB", "Thailand"],
    ["TJS", "Tajikistan"],
    ["TMT", "Turkmenistan"],
    ["TND", "Tunisia"],
    ["TOP", "Tonga"],
    ["TRY", "Turkey"],
    ["TTD", "Trin Tobago"],
    ["TVD", "Tuvalu"],
    ["TWD", "Taiwan"],
    ["TZS", "Tanzania"],
    ["UAH", "Ukraine"],
    ["UGX", "Uganda"],
    ["UYU", "Uruguay"],
    ["UZS", "Uzbekistan"],
    ["VES", "Venezuela"],
    ["VND", "Vietnam"],
    ["VUV", "Vanuatu"],
    ["WST", "Samoa"],
    ["XAF", "C.African Rep."],
    ["XCD", "Anguilla"],
    ["XOF", "Benin"],
    ["XPF", "French Poly"],
    ["YER", "Yemen"],
    ["ZAR", "South Africa"],
    ["ZMW", "Zambia"]
]);


