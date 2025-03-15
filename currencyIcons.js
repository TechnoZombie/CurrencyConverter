let currencyIconsList = [];
let apiKeyIcons = provideKey();

// Function to fetch and store the icon URLs
function preloadCurrencyIcons() {
    const url = "https://rest.coinapi.io/v1/assets/icons/1?apikey=" + apiKeyIcons;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            currencyIconsList = data; // Store the data in the assets array
        })
        .catch(error => console.error('Error:', error));
}

// Function to get the URL for a specific asset_id
function getAssetUrl(asset_id) {
    const asset = currencyIconsList.find(item => item.asset_id === asset_id);

    if (asset) {
        return asset.url;
    } else {
        return null
    }
}
