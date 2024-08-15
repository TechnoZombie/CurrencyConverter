let URL = 'https://open.er-api.com/v6/latest/';
let inputSelectedCurrency;
let outputSelectedCurrency;
let API_URL;

$(document).ready(function () {
    const convertButton = $('#buttonConvert');
    const resetAmountButton = $('#buttonResetAmount');
    const resetAllButton = $('#buttonResetAll');
    const reverseButton = $('#reverseButton');

    convertButton.click(function () {
        convertAmount(calculate);
    });

    resetAmountButton.click(function () {
        $("#amount").val(""); // Clear only the amount input field
        $('#result').val(''); // Clear the result field
    });

    resetAllButton.click(function () {
        $("#amount").val(""); // Clear the amount input field
        $('#result').val(''); // Clear the result field
        $('#rate').val(''); // Clear the rate field
        $('#rateCurrency').text(""); // Clear the currency symbol
        $('#inputCurrency').val(''); // Reset input currency dropdown
        $('#outputCurrency').val(''); // Reset output currency dropdown
        $('#history').text('');
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
        $("#rateCurrency").text(outputSelectedCurrency);

        //Build the api url with new input currency
        API_URL = URL + inputSelectedCurrency;

    });

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

function writeToHistory(amountToConvert, resultToAddtoHistory) {
    const historyElements = document.querySelectorAll(".result-history");
    historyElements.forEach(function (element) {
        const newParagraph = document.createElement("p");
        const newResult = document.createTextNode(amountToConvert + " " + inputSelectedCurrency + " = " + resultToAddtoHistory + " " + outputSelectedCurrency);
        newParagraph.appendChild(newResult);
        element.appendChild(newParagraph);
    });
}

function calculate(result) {
    let rate = result?.rates?.[outputSelectedCurrency] ?? null;

    //checking if input is a number.
    if (rate) {
        let amountToConvert = parseFloat($('#amount').val());
        if (isNaN(amountToConvert)) {
            console.error('Input value is not a number.');
            $('#result').val('Enter a valid number');
            return;
        }
        let convertedCurrency = amountToConvert * rate;
        testvalue = convertedCurrency;
        // Limiting the result to two decimal places.
        $('#result').val(convertedCurrency.toFixed(2));
        $('#rate').val(rate.toFixed(4));

        writeToHistory(amountToConvert, convertedCurrency.toFixed(2));

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
