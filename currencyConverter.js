/**
 * Currency Converter Application
 * This application allows users to convert between different currencies using real-time exchange rates.
 * Features include support for fiat currencies, country name display options, and conversion history.
 */

// Global variables for application state
let URL = 'https://open.er-api.com/v6/latest/';   // Base URL for exchange rate API
let inputSelectedCurrency;                              // Selected input currency code
let outputSelectedCurrency;                             // Selected output currency code
let cryptoRate;                                         // Exchange rate for crypto conversions
let API_URL;                                            // Complete API URL with selected currency
let isCrypto = false;                           // Flag to indicate if crypto mode is active

// UI control elements
const convertButton = $('#buttonConvert');
const resetAmountButton = $('#buttonResetAmount');
const resetAllButton = $('#buttonResetAll');
const reverseButton = $('#reverseButton');

$(document).ready(function () {

    preloadCurrencyIcons();     // Preload currency icons
    addFlagsOnlyOnFiat();       // Add divs for flags

    /**
     * Convert button click handler - initiates currency conversion
     * Handles both fiat and crypto conversions
     */
    convertButton.click(async function () {
        if (!isCrypto) {
            // For fiat currencies, use standard API
            convertAmount(calculateFiat);
        } else {
            // For crypto, get special rates and calculate
            await setCryptoRate(inputSelectedCurrency, outputSelectedCurrency);
            let amountToConvert = $('#amount').val();
            standaloneCalculator(amountToConvert, cryptoRate);
        }
    });

    /**
     * Reset amount fields only
     */
    resetAmountButton.click(function () {
        resetFields('val', ['#amount', '#result'])
    });

    /**
     * Reset all fields and settings to default
     */
    resetAllButton.click(function () {
        // Reset switches
        $('#currencySwitch').prop('checked', false);
        $('#countriesSwitch').prop('checked', false);

        // Reset global variables
        inputSelectedCurrency = null;
        outputSelectedCurrency = null;
        API_URL = null;
        isCrypto = false;

        // Regenerate currency options
        generateCurrencyOptions();

        // Reset all input fields and displays
        resetFields("val", ['#amount', '#result', '#rate', '#inputCurrency', '#outputCurrency'])
        resetFields("text", ['#rateCurrency', '#history', '#countryFlagIn', '#countryFlagOut'])

        // Restore flag divs
        addFlagsOnlyOnFiat();

    });

    /**
     * Reverse button handler - swaps input and output currencies
     * Updates all UI elements to reflect the swap
     */
    reverseButton.click(function () {
        // Swap currencies using destructuring assignment
        [inputSelectedCurrency, outputSelectedCurrency] = [outputSelectedCurrency, inputSelectedCurrency];

        if (isDisplayCountries()) {
            // Update country names in UI
            $('#inputCurrency').val(convertCurrencyCodeToCountryNameMap.get(inputSelectedCurrency));
            $('#outputCurrency').val(convertCurrencyCodeToCountryNameMap.get(outputSelectedCurrency));
        } else {
            // Update the currency codes in UI
            $('#inputCurrency').val(inputSelectedCurrency);
            $('#outputCurrency').val(outputSelectedCurrency);
        }

        // Update UI elements
        setCurrencyIcon();
        setFlagIcon("countryFlagIn", inputSelectedCurrency);
        setFlagIcon("countryFlagOut", outputSelectedCurrency);

        // Build the API URL with new input currency
        API_URL = `${URL}${inputSelectedCurrency}`;
    });


    /**
     * Toggle between crypto and fiat currency modes
     */
    $('#currencySwitch').change(function () {
        isCrypto = $(this).is(':checked');

        if (isCrypto) {
            $('#countriesSwitch').prop('checked', false);   // Moves code/country switch to code to prevent url build errors
            generateCurrencyOptions();
            removeFlagsSpan();
        } else {
            addFlagsOnlyOnFiat();
        }
    });

    /**
     * Event handler for currency codes/country names switch
     */
    $('#countriesSwitch').change(function () {
        $('#currencySwitch').prop('checked', false)
        isCrypto = null;
        addFlagsOnlyOnFiat()
    })

    /**
     * Input currency dropdown change handler
     * Updates currency code and UI elements based on selection
     */
    $("#inputCurrency").change(function () {
        if (isDisplayCountries()) {
            // Get the selected country name and convert to currency code
            const inputSelectedCountry = $(this).val();

            inputSelectedCurrency = convertCountryNameToCurrencyCodeMap.get(inputSelectedCountry);


            // Build the API URL after ensuring currency code is set
            if (inputSelectedCurrency) {
                API_URL = URL + inputSelectedCurrency;
            } else {
                console.error("inputSelectedCurrency is undefined after setting currency code.");
            }
        } else {
            // Directly set currency code from dropdown value
            inputSelectedCurrency = $(this).val();
            API_URL = URL + inputSelectedCurrency;
        }

        // Update the flag icon
        setFlagIcon("countryFlagIn", inputSelectedCurrency);
    });

    /**
     * Output currency dropdown change handler
     * Updates currency code and UI elements based on selection
     */
    $("#outputCurrency").change(function () {
        if (isDisplayCountries()) {
            // Get the selected country name and convert to currency code
            const outputSelectedCountry = $(this).val(); // utd kingdom

            outputSelectedCurrency = convertCountryNameToCurrencyCodeMap.get(outputSelectedCountry);

        } else {
            // Directly set currency code from dropdown value
            outputSelectedCurrency = $(this).val();
        }

        // Update UI elements
        setFlagIcon("countryFlagOut", outputSelectedCurrency);
        setCurrencyIcon();
    });


    /**
     * Sets the crypto exchange rate
     * @param {string} fromCurrency - Source currency code
     * @param {string} toCurrency - Target currency code
     */
    async function setCryptoRate(fromCurrency, toCurrency) {
        cryptoRate = await callCryptoRates(fromCurrency, toCurrency);
    }

    /**
     * Initiates the conversion process with error handling
     * @param {Function} callBackFunction - Function to call with API result
     */
    async function convertAmount(callBackFunction) {
        try {
            let result = await fetchData();
            callBackFunction(result);
        } catch (error) {
            $('#rate').val('ERROR!');
        }
    }

    /**
     * Calculates and displays fiat currency conversion
     * @param {Object} result - API response with exchange rates
     */
    function calculateFiat(result) {
        let rate = result?.rates?.[outputSelectedCurrency] ?? null;

        // Process conversion if rate is available
        if (rate) {
            let amountToConvert = parseFloat($('#amount').val());
            if (isNaN(amountToConvert)) {
                console.error('Input value is not a number.');
                $('#result').val('Enter a valid number');
                return;
            }
            standaloneCalculator(amountToConvert, rate);
        } else {
            console.error('Invalid data structure in API response.');
            $('#rate').val('ERROR!');
        }
    }

    /**
     * Core calculator function used by both fiat and crypto conversions
     * @param {number} amountToConvert - Amount to convert
     * @param {number} rate - Exchange rate
     */
    function standaloneCalculator(amountToConvert, rate) {
        let convertedCurrency = amountToConvert * rate;

        // Display results with fixed decimal precision
        $('#result').val(convertedCurrency.toFixed(2));
        $('#rate').val(rate.toFixed(4));

        // Record the conversion in history
        writeToHistory(amountToConvert, convertedCurrency.toFixed(2));
    }

    /**
     * Fetches exchange rate data from API
     * @returns {Promise<Object>} - API response with exchange rates
     */
    async function fetchData() {
        try {
            let response = await $.ajax({
                url: API_URL, type: 'GET', dataType: 'json', async: true
            });
            return response;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }


    function addFlagsOnlyOnFiat() {
        if (!isCrypto) {

            // Check if there are flags already being shown and removes them if true
            removeFlagsSpan();

            // Input flag
            const inputFlag = document.createElement("span"); // Create a new span element
            inputFlag.className = "input-group-text"; // Add the class using className property
            inputFlag.id = "countryFlagIn";      // Set the ID
            document.querySelector("#divFlagIn").appendChild(inputFlag); // append to DOM

            // Output flag
            const outputFlag = document.createElement("span");
            outputFlag.className = "input-group-text";
            outputFlag.id = "countryFlagOut";
            document.querySelector("#divFlagOut").appendChild(outputFlag);
        }
    }

    function removeFlagsSpan() {

        const preExistingInputFlag = document.getElementById("countryFlagIn");
        const preExistingOutputFlat = document.getElementById("countryFlagOut");

        if (preExistingInputFlag) {
            preExistingInputFlag.remove();
        }

        if (preExistingOutputFlat) {
            preExistingOutputFlat.remove();
        }
    }

    /**
     * Adds a conversion record to the history display
     * @param {number} amountToConvert - Original amount
     * @param {string} resultToAddtoHistory - Converted amount
     */
    function writeToHistory(amountToConvert, resultToAddtoHistory) {
        const historyElements = document.querySelectorAll(".result-history");
        historyElements.forEach(function (element) {
            const newParagraph = document.createElement("p");
            const newResult = document.createTextNode(amountToConvert + " " + inputSelectedCurrency + " = " + resultToAddtoHistory + " " + outputSelectedCurrency);
            newParagraph.appendChild(newResult);
            element.appendChild(newParagraph);
        });
    }

    /**
     * Utility function to reset multiple fields
     * @param {string} typeOfField - Type of field to reset ('val' or 'text')
     * @param {Array<string>} fields - Array of field selectors
     */
    function resetFields(typeOfField, fields) {
        if (typeOfField === "val") {
            fields.forEach(field => {
                $(field).val('');
            });
        } else if (typeOfField === "text") {
            fields.forEach(field => {
                $(field).text('');
            });
        }
    }

    /**
     * Sets the currency icon for the rate display
     * Falls back to text if image fails to load
     */
    function setCurrencyIcon() {
        $("#rateCurrency").empty();

        const currencyIcon = new Image();
        currencyIcon.src = getAssetUrl(outputSelectedCurrency);

        currencyIcon.onload = function () {
            $("#rateCurrency").append($(currencyIcon).addClass("loaded"));
        };

        currencyIcon.onerror = function () {
            $("#rateCurrency").text(outputSelectedCurrency);
        };
    }

    /**
     * Determines if country names should be displayed instead of currency codes
     * @returns {boolean} - True if country names should be displayed
     */
    function isDisplayCountries() {
        const isCountriesChecked = document.getElementById("countriesSwitch").checked;
        const display = isCountriesChecked ? countryNames : fiatCurrencies;

        if (display === countryNames) {
            return true;
        } else {
            return false;
        }
    }
});