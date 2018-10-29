
function renderSurveys(surveys) {
    var finalHTML = surveys.map(function (survey) {
        return `
        <div class="border border-dark rounded mb-5" style="width: 800px">
            <div class="d-flex flex-column align-items-start m-5">
                <h1>${survey.title}</h1>
                <hr class="survey">
                ${renderFields(survey.fields)}
                <button class="btn btn-primary btn-sm mt-3" type="submit">${survey.submitButtonText}</button>
            </div>
            
        </div>
        `
    });
    return finalHTML.join("");
}

function renderFields(fields) {
    var fieldsHTML = fields.map(function (field){
        if (field.type === "radio") {
            return `
            <div class="d-flex flex-column align-items-start">
                <label>${field.label}</label>
                ${renderOptions(field.options)}
            </div>
            `
        } else {
            return `
            <div class="d-flex flex-column align-items-start">
                <label>${field.label}</label>
                <input type="${field.type}"
            </div>
            `
        }
     
    });
    return fieldsHTML.join("");
}

function renderOptions(options) {
    var optionsHTML = options.map(function(option) {
        return `
            <div>
                <input type="radio" id="${option}" value="${option}" />
                <label for="${option}">${option}</label>
            </div>
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