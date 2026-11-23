let poster = document.getElementById("poster");
let progress = document.getElementById("progressFill");
let start = 0;

if (window.innerWidth > 767) {

    poster.onwheel = function(e) {
        poster.scrollLeft += e.deltaY;
        e.preventDefault();
    };

    document.onkeydown = function(e) {
        if (e.key == "ArrowRight" || e.key == "ArrowDown") {
            poster.scrollLeft += 300;
        }

        if (e.key == "ArrowLeft" || e.key == "ArrowUp") {
            poster.scrollLeft -= 300;
        }
    };

    poster.onmousedown = function(e) {
        start = e.pageX;
    };

    poster.onmousemove = function(e) {
        if (e.buttons == 1) {
            poster.scrollLeft -= e.pageX - start;
            start = e.pageX;
        }
    };

    poster.onscroll = function() {
        progress.style.width =
            poster.scrollLeft /
            (poster.scrollWidth - poster.clientWidth) * 100 + "%";
    };
}