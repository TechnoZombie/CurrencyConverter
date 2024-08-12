let URL = 'https://open.er-api.com/v6/latest/';
let inputSelectedCurrency;
let outputSelectedCurrency;
let API_URL;

$(document).ready(function () {
    const convertButton = $('#buttonConvert');
    const resetButton = $('#buttonReset')

    convertButton.click(function () {
        convertAmount(calculate);
    });

    resetButton.click(function () {
        $("#rateCurrency").text("");
    })

    // Add an event listener to the outputCurrency dropdown
    $("#outputCurrency").change(function () {
        // Get the selected value from the dropdown
        outputSelectedCurrency = $(this).val();
        $("#rateCurrency").text(outputSelectedCurrency);
    });

    // Add an event listener to the inputCurrency dropdown
    $("#inputCurrency").change(function () {
        // Get the selected value from the dropdown
        inputSelectedCurrency = $(this).val();
        API_URL = URL + inputSelectedCurrency;
    });

});

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

function calculate(result) {
    let rate = result.rates && result.rates[outputSelectedCurrency];

    if (result && result.rates && rate !== undefined) {
        let amountToConvert = $('#amount').val();
        let convertedCurrency = amountToConvert * rate;
        // Limiting the result to two decimal places.
        $('#result').val(convertedCurrency.toFixed(2));
        $('#rate').val(rate);
    } else {
        console.error('Invalid data structure in API response.');
        $('#rate').val('ERROR!');
    }
}

//fetchData function for handling API requests with error callback
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

