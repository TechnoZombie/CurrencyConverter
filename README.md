# CurrencyConverter
This project is a simple currency converter built using HTML, CSS, Bootstrap, jQuery, ExchangeRate-API and CoinAPI. It allows users to convert an entered amount from one currency to another.

**Features**
- Dynamically loads currency options from currencyOptions.js.
- Supports conversion between various currencies via ExchangeRate-API.
- Supports conversion between various Crypto currencias via CoinAPI.
- Displays the conversion rate and converted amount in real-time.
- Includes reset functionality to clear entered values and reset the converter.
- Shows historical results.
- Quickly switch "from" and "to" currencies;

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

- index.html: The main HTML file containing the structure of the currency converter.
- currencyConverter.css: The CSS file for styling the currency converter.
- currencyConverter.js: The JavaScript file handling user input, API calls, and data processing.
- currencyOptions.js: The JavaScript file for dynamically loading currency options.
- cryptoExchangeCall.js: A JavaScript file that handles logic for the crypto API calls.

**Technologies Used**
- JavaScript
- HTML
- CSS
- Bootstrap (v4.3.1)
- jQuery (v3.6.4)
- ExchangeRate-API
- CoinAPI

**License:**

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
