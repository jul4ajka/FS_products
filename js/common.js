$(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    if ($(".menu").css("display") == "none") {
        $(".menu").css({"display": "flex"});
        $("body").css({"overflow": "hidden"});
    } else {
        $(".menu").css({"display": "none"});
        $("body").css({"overflow": "auto"});

    }
});
$(".menu-item-science").click(function () {
    $(this).find("i").toggleClass("fa-angle-down").toggleClass("fa-angle-up");
    $(".menu-science-subitems").fadeToggle();
});


$(".menu-item-science-mobile").click(function(e){
    e.preventDefault();
    $(this).find("i").toggleClass("fa-angle-down").toggleClass("fa-angle-up");
    $(".menu-science-subitems-mobile").fadeToggle();
});

$(".dropdown-btn").on("click", function () {
    var dropdown = $(".dropdown-content");
    if ($(".mobile").css("display") == "none") {
        dropdown.fadeToggle();
    } else {
        if (dropdown.css("display") == "none") {
            dropdown.css({"display": "block"});
            dropdown.animate({"right": "0"}, 500);
        } else {
            dropdown.animate({"right": "-350px"}, 500, function () {
                dropdown.css({"display": "none"});
            });
        }
    }


});
window.onclick = function (event) {
    if (!(event.target.matches('.dropdown-btn')
        || event.target.matches(".heart-icon")
        || event.target.matches(".dropdown-content")
        || event.target.matches(".dropdown-content-share-it")
        || event.target.matches(".dropdown-content-subscribe, .dropdown-content-subscribe h2, .dropdown-content-subscribe p, .dropdown-content-subscribe input, .dropdown-content-subscribe button")
        || event.target.matches(".dropdown-content div, .dropdown-content a")
        || event.target.matches(".share-it-icons"))) {
        var dropdown = $(".dropdown-content");
        if ($(".mobile").css("display") == "none") {
            dropdown.fadeOut();
        } else {
            if (dropdown.css("display") == "block") {
                dropdown.animate({ "right": "-350px" }, 1000, function () {
                    dropdown.css({ "display": "none" });
                });
            }
        }
    }
}

//animation main text desktop

$(".section-1-text-anime").cycle({
    timeout: 0.5,
    speed: 800
});


//animation main text mobile

$(".section-mobile-text-anime").cycle({
    timeout: 0.5,
    speed: 800
});

//table 1

function openTab(evt, componentName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("original-table-page");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-section-2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(componentName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

//table 2

function openTabLight(evt, componentName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("light-table-page");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-2-section-2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(componentName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen-2").click();

//spoiler first mobile

var spoilers = $(".spoiler");
spoilers.each(function () {
    var spoiler = $(this);
    spoiler.find(".spoiler-header").click(function () {
        if ($(this).hasClass("spoiler-open-btn")) {
            $(this).removeClass("spoiler-open-btn").addClass("spoiler-close-btn");
            spoiler.find(".spoiler-body").slideUp(1000);
            spoiler.find(".spoiler-header").css("border-top", "1px solid black");
            spoiler.find(".wide_line_bottom").css("border-bottom", "1px solid black");
            spoiler.find(".vertical").css({"display": "block"});                 
        } else {
            $(this).removeClass("spoiler-close-btn").addClass("spoiler-open-btn");
            spoiler.find(".spoiler-body").slideDown(1000);
            spoiler.find(".spoiler-header").css("border", "none");
            spoiler.find(".vertical").css({"display": "none"});
        }
    });
});