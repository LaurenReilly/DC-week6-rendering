
function renderRectangle(rectangle) {
    var rectangle = `
            <div style="background-color: ${rectangle.color}; height: ${rectangle.height}px; width: ${rectangle.width}px">
            </div>
    `;
    return rectangle;
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}
