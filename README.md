# CurrencyConverter
This project is a simple currency converter built using HTML, CSS, Bootstrap, jQuery, ExchangeRate-API, CoinAPI and CountryFlags API. It allows users to convert an entered amount from one currency to another.

**Features**
- Dynamically loads currency options from currencyOptions.js.
- Supports conversion between various currencies via ExchangeRate-API.
- Supports conversion between various Crypto currencias via CoinAPI.
- Displays the conversion rate and converted amount in real-time.
- Includes reset functionality to clear entered values and reset the converter.
- Shows historical results.
- Quickly switch "from" and "to" currencies;
- Icons for the currencies are retrieved from the API on currencyIcons.js. If no icon is available, currency code will be shown.
- Country flags are shown next to the currency code or country when fiat is selected. Flags provided by CountryFlags api.

**LINK:** [https://technozombie.github.io/CurrencyConverter](https://technozombie.github.io/CurrencyConverter)

**Usage**
1. Select between Fiat and Crypto currencies.
2. Enter an amount in the input box.  
3. Select the input currency from the dropdown list.
4. Select the output currency from the dropdown list.
5. Click the "Convert" button to calculate and display the converted amount.
6. To swap the "to" and "from" currencies, click on "Reverse" button.
7. To reset the amount to convert and the result, click the "Reset Amount" button.
8. To reset all fields, including History, click on "Reset All".

**Code Structure**

The project consists of the following files:

- index.html: Main HTML file containing the structure of the currency converter.
- currencyConverter.css: CSS file for styling the currency converter.
- currencyConverter.js: JavaScript file handling user input, API calls, and data processing.
- currencyOptions.js: JavaScript file for dynamically loading currency options.
- cryptoExchangeCall.js: JavaScript file that handles logic for the crypto API calls.
- countryFlags.js: JavaScript file that holds all the logic for flag selection.
- mappings.js: JavaScript file that containing mappings for country codes, county names and currency codes.
- currencyIcons.js: JavaScript file that handles preloading of currency icons.

**Technologies Used**
- JavaScript
- HTML
- CSS
- Bootstrap (v4.3.1)
- jQuery (v3.6.4)
- ExchangeRate-API
- CoinAPI
- CountryFlags API

**License:**

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
