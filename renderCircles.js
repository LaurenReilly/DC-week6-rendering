
function renderCircles(circles) {
    var circleHTML = circles.map(function(circle) {
        var circles = 
        `<div class="text-center mt-5">
            <div style="margin: 0 auto; background-color: ${circle.color}; border-radius: 100%; width: ${circle.radius}px; height: ${circle.radius}px">
            </div>
        </div>
        `;
        return circles;
        
    });
    return circleHTML.join("");
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}