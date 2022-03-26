$(document).ready(function () {
    $("#div1").click(function () {
        $("#div4").css("top", '-300vw');
        $("#div1").animate({top: '+=100vw'}, "slow");
        $("#div2").animate({top: '+=100vw'}, "slow");
        $("#div3").animate({top: '+=100vw'}, "slow");
        $("#div4").animate({top: '+=100vw'}, "slow");
    });

    $("#div2").click(function () {
        $("#div1").css("top", '-300vw');
        $("#div2").animate({top: '+=100vw'}, "slow");
        $("#div1").animate({top: '+=100vw'}, "slow");
        $("#div3").animate({top: '+=100vw'}, "slow");
        $("#div4").animate({top: '+=100vw'}, "slow");
    });

    $("#div3").click(function () {
        $("#div2").css("top", '-300vw');
        $("#div3").animate({top: '+=100vw'}, "slow");
        $("#div2").animate({top: '+=100vw'}, "slow");
        $("#div1").animate({top: '+=100vw'}, "slow");
        $("#div4").animate({top: '+=100vw'}, "slow");
    });

    $("#div4").click(function () {
        $("#div3").css("top", '-300vw');
        $("#div4").animate({top: '+=100vw'}, "slow");
        $("#div2").animate({top: '+=100vw'}, "slow");
        $("#div3").animate({top: '+=100vw'}, "slow");
        $("#div1").animate({top: '+=100vw'}, "slow");
    });
});
