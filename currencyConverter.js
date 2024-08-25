let URL = 'https://open.er-api.com/v6/latest/';
let inputSelectedCurrency;
let outputSelectedCurrency;
let cryptoRate;
let API_URL;
let isCrypto = false;


$(document).ready(function () {
    const convertButton = $('#buttonConvert');
    const resetAmountButton = $('#buttonResetAmount');
    const resetAllButton = $('#buttonResetAll');
    const reverseButton = $('#reverseButton');

    preloadCurrencyIcons();

    convertButton.click(async function () {
        if (isCrypto === false) {
            convertAmount(calculateFiat);
        } else {
            await setCryptoRate(inputSelectedCurrency, outputSelectedCurrency);
            let amountToConvert = $('#amount').val();
            standaloneCalculator(amountToConvert, cryptoRate);
        }
    });

    resetAmountButton.click(function () {
        resetFields('val', ['#amount', '#result'])
    });

    resetAllButton.click(function () {
        resetFields("val", ['#amount', '#result', '#rate', '#inputCurrency', '#outputCurrency'])
        resetFields("text", ['#rateCurrency', '#history'])
        inputSelectedCurrency = null;
        outputSelectedCurrency = null;
        API_URL = null;
    });

    reverseButton.click(function () {
        let newOutput;
        let newInput;

        // Swapping the values
        newInput = outputSelectedCurrency;
        newOutput = inputSelectedCurrency;
        inputSelectedCurrency = newInput;
        outputSelectedCurrency = newOutput;

        // Update the UI
        $('#inputCurrency').val(inputSelectedCurrency);
        $('#outputCurrency').val(outputSelectedCurrency);
        setIcon();

        //Build the api url with new input currency
        API_URL = URL + inputSelectedCurrency;
    });

    // Event listener for switch change
    $('#currencySwitch').change(function () {
        isCrypto = $(this).is(':checked');
    });

    // Event listener for the outputCurrency dropdown
    $("#outputCurrency").change(function () {
        // Get the selected value from the dropdown
        outputSelectedCurrency = $(this).val();
       setIcon();
    });

    // Event listener for the inputCurrency dropdown
    $("#inputCurrency").change(function () {
        // Get the selected value from the dropdown
        inputSelectedCurrency = $(this).val();
        API_URL = URL + inputSelectedCurrency;
    });
});

async function setCryptoRate(fromCurrency, toCurrency) {
    cryptoRate = await callCryptoRates(fromCurrency, toCurrency);
}

function convertAmount(callBackFunction) {
    fetchData(function (error, result) {
        if (error) {
            // Handle error
            console.error('Error fetching data:', error);
        } else {
            // Call the callback function with the result
            callBackFunction(result);
        }
    });
}

function calculateFiat(result) {
    let rate = result?.rates?.[outputSelectedCurrency] ?? null;

    // checking if input is a number.
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

function standaloneCalculator(amountToConvert, rate) {
    let convertedCurrency = amountToConvert * rate;

    // Limiting the result to two decimal places.
    $('#result').val(convertedCurrency.toFixed(2));
    $('#rate').val(rate.toFixed(4));

    writeToHistory(amountToConvert, convertedCurrency.toFixed(2));
}

// fetchData function for handling API requests with error callback
function fetchData(cb) {
    $.ajax({
        url: API_URL,
        type: 'GET',
        dataType: 'json',
        async: true,
        success: function (results) {
            cb(null, results);
        },
        error: function (request, statusText, httpError) {
            cb(httpError || statusText);
        }
    });
}

function writeToHistory(amountToConvert, resultToAddtoHistory) {
    const historyElements = document.querySelectorAll(".result-history");
    historyElements.forEach(function (element) {
        const newParagraph = document.createElement("p");
        const newResult = document.createTextNode(amountToConvert + " " + inputSelectedCurrency + " = " + resultToAddtoHistory + " " + outputSelectedCurrency);
        newParagraph.appendChild(newResult);
        element.appendChild(newParagraph);
    });
}

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

function setIcon() {
    $("#rateCurrency").empty();

    // Create a new img element and set its src attribute
    const img = new Image();
    img.src = getAssetUrl(outputSelectedCurrency);
    img.onload = function () {
        $("#rateCurrency").append($(img).addClass("loaded"));
    };
    img.onerror = function () {
        // Handle the error by showing fallback text
        $("#rateCurrency").text(outputSelectedCurrency);
    };
}