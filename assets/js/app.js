$(window).on("resize", function () {
    menuPosition();
    logoPosition();
    prevPosition();
    nextPosition();
});

$("#viajar").on("click", function(){
   handleBtnTravel();
});

function menuPosition() {
    if ($("body").width() >= 992) {
        setTimeout(function () {
            let a = ($("body").width() - $("#idInicio div.fp-tableCell").width()) / 2;
            $("ul.navbar-nav").animate({marginRight: a + "px"}, 3000);
        }, 2000);
    }
}

function logoPosition() {
    setTimeout(function () {
        let a = ($("body").width() - $("#idInicio div.fp-tableCell").width()) / 2;
        $("#logo > span").animate({marginLeft: a + a / 20 + "px"}, 3000);
    }, 2000);
}

function prevPosition() {
    if ($("body").width() >= 992) {
        setTimeout(function () {
            let a = ($("body").width() - $("#idInicio div.fp-tableCell").width()) / 2;
            $(".fp-prev").animate({marginLeft: a + "px"}, 3000);
        }, 2000);
    }
}

function nextPosition() {
    if ($("body").width() >= 992) {
        setTimeout(function () {
            let a = ($("body").width() - $("#idInicio div.fp-tableCell").width()) / 2;
            $(".fp-next").animate({marginRight: a + "px"}, 3000);
        }, 2000);
    }
}

function handleBtnTravel(){
    let destinosPosition = $("#idDestinos").offset().top;
    $("html, body").animate({ scrollTop: destinosPosition }, 1500);
}

menuPosition();
logoPosition();
prevPosition();
nextPosition();