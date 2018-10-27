
function renderSurveys(surveys) {
    var finalHTML = surveys.map(function (survey) {
        return `
        <div class="container-fluid">
            <div class="d-flex flex-column">
                <h1>${survey.title}</h1>
                <hr>
                ${renderFields(survey.fields)}
            </div>
            <button></button>
        </div>
        `
    });
    return finalHTML.join("");
}

function renderFields(fields) {
    var fieldsHTML = fields.map(function (field){
        return `
        <div class="radio">
            <h3>${field.label}</h3>
            ${renderOptions(field.options)}
        </div>
        <div class="text">
            <h3></h3>
            <input type="text">
            
        </div>
        `
    });
    return fieldsHTML.join("");
}

function renderOptions(options) {
    var optionsHTML = options.map(function(option) {
        return `
            <input type="radio" value="${option}">
        `
    });
    return optionsHTML.join("");
}

function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text"
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}