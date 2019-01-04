$(function () {
    var index = 0;
    var imgWidth = $(".lb").width();
//          console.log(imgWidth);
    var timer = null;
    var new1 = $(".li1").clone(true);
    new1.appendTo(".banner ul");
    var right = function () {
        index++;
        if (index > $(".lb").length - 2) {
            index = 0;
            $(".banner ul").css({"left": 0});
        }
        $(".banner ul").animate({"left": -(index) * imgWidth});
        $(".point ol li").eq(index).addClass("sx").siblings().removeClass("sx")
    }
    timer = setInterval(right, 1000);

})