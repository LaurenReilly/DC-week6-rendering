
function renderNametags(nametags) {
    var nametagHTML = nametags.map(function(name) {
        return `
        <div class="d-flex flex-column border border-dark rounded mt-5" style="margin: 0 auto; width: 402px">
            <div class="border rounded" style="background-color: blue; width: 400px; height: 50px">
                <h3 style="color: white;" class="text-center">Hello my name is:</h3>
            </div>
            <div class="border rounded" style="width: 400px; height: 150px;">
                <h2 class="text-center mt-5">${name}</h2>
            </div>
        </div>
    `
    })
    return nametagHTML.join("");
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}