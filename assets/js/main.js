$(document).ready(function () {

    $("#nav li a[href^='#']").on('click', function (event) {
        var target;
        target = this.hash;
        event.preventDefault();
        var navOffset;
        navOffset = $('#navbar').height() + 8;
        return $('html, body').animate({
            scrollTop: $(this.hash).offset().top - navOffset
        }, 300, function () {
            return window.history.pushState(null, null, target);
        });
    });

    // Slider
    var wallopEl = document.querySelector('.Wallop');
    var slider = new Wallop(wallopEl);
    jQuery(function () {
        setInterval(function () {
            slider.next();
        }, 5000);
    });

    // Gallery
    document.getElementById('gallery').onclick = function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement,
            link = target.src ? target.parentNode : target,
            options = {index: link, event: event},
            links = this.getElementsByTagName('a');
        blueimp.Gallery(links, options);
    };
});