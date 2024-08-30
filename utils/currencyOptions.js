import {fiatCurrencies, cryptoCurrencies} from "/utils/currencyLists.js";

function generateCurrencyOptions() {

    const selectElements = document.querySelectorAll(".dynamic-select");
    const currencyOptions = document.getElementById("currencySwitch").checked ? cryptoCurrencies : fiatCurrencies;

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

// Event listener for switch change
document.getElementById("currencySwitch").addEventListener("change", generateCurrencyOptions);

// Initial load
document.addEventListener("DOMContentLoaded", generateCurrencyOptions);

