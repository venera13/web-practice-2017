var images = $('img');

$.each(images, function (index, element) {
    var imageSrc = element.src;
    console.log(imageSrc);
});
