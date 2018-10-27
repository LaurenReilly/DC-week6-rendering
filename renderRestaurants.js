
function renderRestaurants(restaurants) {
    var finalHTML = restaurants.map(function (restaurant) {
        var dollar = "$";
        var rating = dollar.repeat(`${restaurant.priceRating}`);   
        return `
            <div class="d-flex flex-column justify-content-start border border-dark rounded" style="width: 300px; float: left;">
                <h2>${restaurant.name}</h2>
                <h4 style="color: grey">${restaurant.type}</h4>
                <h4 style="color: green">${rating}</h4>
            </div>
         `
    });
    return finalHTML.join("");
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}