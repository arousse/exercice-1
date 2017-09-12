var timing;

$(document).ready(function () {
    console.log("ready");
    // document is ready
    console.log($("#div1").html());
    $("#div1").html("thanks");
    $("div").css("border", "none");
    $("#btn-start").click(function () {
        startAnimation(500);
    });
    $("#btn-stop").click(function () {
        stopAnimation()
    });
    $("#btn-invert").click(function () {
        invertIcon()

    })
});

function startAnimation(time) {
    timing = setInterval(function () {
        $("span").toggleClass("glyphicon-heart");
        $("span").toggleClass("glyphicon-star");
        $("#div2row2").toggleClass("yellow");
        $("#div2row2").toggleClass("bleu");
    }, time);
}

function stopAnimation() {
    clearInterval(timing);
}

function invertIcon() {
    if ($("#icon-1").hasClass("glyphicon-star")) {
        $("#icon-1").removeClass("glyphicon-star");
        $("#icon-1").addClass("glyphicon-heart");
        $("#icon-2").removeClass("glyphicon-heart");
        $("#icon-2").addClass("glyphicon-star");
    } else {
        $("#icon-2").removeClass("glyphicon-star");
        $("#icon-2").addClass("glyphicon-heart");
        $("#icon-1").removeClass("glyphicon-heart");
        $("#icon-1").addClass("glyphicon-star");
    }
}