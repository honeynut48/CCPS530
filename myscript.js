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
        success: function(data) {
            $("#imageDescriptions").text(data);
        }
    });

    currentIndex = (currentIndex + 1) % images.length;
}

$(document).ready(function () {
    loadContent();
    setInterval(loadContent, 2000);
});



