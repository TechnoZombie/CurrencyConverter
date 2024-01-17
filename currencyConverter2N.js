var API_URL2 = 'https://open.er-api.com/v6/latest/EUR';

$(document).ready(function () {
    const convertButton = $('#buttonConvert');
    const resetButton = $('#buttonReset')

    convertButton.click(function () {
        convertButtonFeedback();
        convertAmount(calculate);
    });

    resetButton.click(function () {
        resetButtonFeedback();
    })
});

function convertButtonFeedback() {
    console.log('Convert button was clicked.');
}

function resetButtonFeedback() {
    console.log('Reset button was clicked.');
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

function calculate(result) {
    if (result && result.rates && result.rates.USD) {
        var amountToConvert = $('#amount').val();
        var rate = result.rates.USD;
        var convertedCurrency = (amountToConvert * rate);

        $('#result').val(convertedCurrency);
        // container.html('<p>1 EUR = ' + usd + ' USD</p>');
        $('#rate').val(rate);

    } else {

        console.error('Invalid data structure in API response.');
        $('#rate').val('ERROR!');
    }
}

// Refactored fetchData function for handling API requests with error callback
function fetchData(cb) {
    $.ajax({
        url: API_URL2,
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
