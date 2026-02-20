$(document).ready(function () {
    $('#navToggle').click(function () {
        $('#navbarNav').collapse('toggle');
    });
})

$('.carousel').carousel({
    interval: 2000,
    pause: "hover"
})


const images = [
    "images/astrantia.jpg",
    "images/geranium.jpg",
    "images/sanguineum.jpg",
    "images/sulphurea.jpg"
];

const descriptions = [
    "descriptions/astrantiaDesc.txt",
    "descriptions/geraniumDesc.txt",
    "descriptions/sanguineumDesc.txt",
    "descriptions/sulphureaDesc.txt"
];

let currentIndex = 0;

function loadContent() {
    $("#images").attr("src", images[currentIndex]);
    $.ajax({
        url: descriptions[currentIndex],
        dataType: "text",
        success: function (fileText) {
            $("#descriptions").text(fileText);
        }
    });

    currentIndex = (currentIndex + 1) % images.length;
}

$(document).ready(function () {
    loadContent();
    setInterval(loadContent, 2000);
});

$.ajax({
    type:"GET",
    url:"car.json",
    success:function(response)
    {
       displayCar(response);
    }
});

function displayCar(response) {
    const container = $("#carContainer");
    const carElement = `<div class="col-8 font-weight-bold">
        ${response.name}
        </div>
        <div class="col-4">
        ${response.year}
        </div>

        <div class="col-12 text-center">
        <img src="${response.imageURL}" alt="${response.name}" class="img-fluid">
        </div>

        <div class="col-4 font-weight-bold">
        Engine
        </div>
        <div class="col-8">
        Type: ${response.engine.type}, Size: ${response.engine.size}, Configuration: ${response.engine.configuration}
        </div>

        <div class="col-4 font-weight-bold">
        Brakes
        </div>
        <div class="col-8">
        Front: ${response.brakes.front}, Back: ${response.brakes.back}
        </div>`;
        container.append(carElement);
    };


