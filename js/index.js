var timer = null;
var isplaying=false
emp();
function emp() {
    timer = setInterval(function () {
        auto();
    }, 800)
}
function playSong() {

    var timer1 = setTimeout(function () {
        $('.Text span:nth-child(' + 1 + ")").css("color", "#fff")
    }, 100);
    var timer2 = setTimeout(function () {
        clearTimeout(timer1);
        $('.Text span:nth-child(' + 1 + ")").css("color", $(".Con ul li.xz").data("color"))
        $('.Text .say:nth-child(' + 3 + ")").css("color", "#fff")
    }, 6000);
    var timer3 = setTimeout(function () {
        clearTimeout(timer2);
        $('.Text span:nth-child(' + 3 + ")").css("color", $(".Con ul li.xz").data("color"))
        $('.Text .say:nth-child(' + 5 + ")").css("color", "#fff")
    }, 11000);
    var timer4 = setTimeout(function () {
        clearTimeout(timer3);
        $('.Text span:nth-child(' + 5 + ")").css("color", $(".Con ul li.xz").data("color"))
        $('.Text .say:nth-child(' + 7 + ")").css("color", "#fff")
    }, 15000);
    var timer5 = setTimeout(function () {
        clearTimeout(timer4);
        $('.Text span:nth-child(' + 7 + ")").css("color", $(".Con ul li.xz").data("color"))
        $('.Text .say:nth-child(' + 9 + ")").css("color", "#fff")
    }, 20000);
    var timer6 = setTimeout(function () {
        clearTimeout(timer5);
        $('.Text span:nth-child(' + 9 + ")").css("color", $(".Con ul li.xz").data("color"))
        $('.Text .say:nth-child(' + 11 + ")").css("color", "#fff")
    }, 26000);
    var timer7 = setTimeout(function () {
        clearTimeout(timer6);
        $('.Text span:nth-child(' + 11 + ")").css("color", $(".Con ul li.xz").data("color"))
        $('.Text .say:nth-child(' + 13 + ")").css("color", "#fff")
    }, 30000);
    var timer8 = setTimeout(function () {
        clearTimeout(timer7);
        $('.Text span:nth-child(' + 13 + ")").css("color", $(".Con ul li.xz").data("color"))
        $('.Text .say:nth-child(' + 15 + ")").css("color", "#fff")
    }, 35000);
    var timer9 = setTimeout(function () {
        clearTimeout(timer8);
        $('.Text span:nth-child(' + 15 + ")").css("color", $(".Con ul li.xz").data("color"))
        $('.Text .say:nth-child(' + 17 + ")").css("color", "#fff")
    }, 39000);
    var timer10 = setTimeout(function () {
        clearTimeout(timer9);
        $('.Text span:nth-child(' + 17 + ")").css("color", $(".Con ul li.xz").data("color"))
        $('.Text .say:nth-child(' + 19 + ")").css("color", "#fff")
    }, 43000);
    var timer11 = setTimeout(function () {
        clearTimeout(timer10);
        $('.Text span:nth-child(' + 19 + ")").css("color", $(".Con ul li.xz").data("color"))
        $('.Text .say:nth-child(' + 21 + ")").css("color", "#fff")
    }, 47000);
    var timer12 = setTimeout(function () {
        clearTimeout(timer11);
        $('.Text span:nth-child(' + 21 + ")").css("color", $(".Con ul li.xz").data("color"))
        $('.Text .say:nth-child(' + 23 + ")").css("color", "#fff")
    }, 52000);
    var timer13 = setTimeout(function () {
        clearTimeout(timer12);
        $('.Text span:nth-child(' + 23 + ")").css("color", $(".Con ul li.xz").data("color"))
        $('.Text .say:nth-child(' + 25 + ")").css("color", "#fff")
    }, 55000);
    var timer14 = setTimeout(function () {
        clearTimeout(timer13);
        $('.Text .say:nth-child(' + 25 + ")").css("color", $(".Con ul li.xz").data("color"))
    }, 61000);
}
$('#logo').click(function () {
    $(this).css({
        // "transform": '',
        "animation": "rotate 3s infinite linear"
    })
    $("#Tz_gray").show(); //显示
    $("#Music").get(0).play();
})
$("#Music").bind("play", function () {
    playSong()
});
$("#Music").bind("ended", function () {
    $('#logo').css({
        "animation": ""
    })
});
$("img.gb").click(function () {
    $('#logo').css({
        // "transform":'',
        "animation":"rotate 5s infinite linear"
    })
    $("#Tz_gray").show(); //显示
    $("#Music").get(0).play();
});
//点击颜色时，显示和隐藏
$("span.col").click(function () {
    $(".Con ul").toggle("slow");
});
//点击颜色时，更换颜色
$(".Con ul li").click(function () {
    var col = $(this).data("color");
    $("span.col font").css("background-color", col);
    $('.Text span').css('color', col)
    $(this).addClass("xz").siblings().removeClass("xz"); //指定的加上 class="xz" 其它的移除
    $(".Con ul").toggle("slow"); //隐藏
});
//当我们抬起键盘时
var arr = [];
$('p.txt').blur(function () {
    emp();
})
$("p.txt").keyup(function (e) {
    clearInterval(timer);
    var col = $(".Con ul li.xz").data("color");
    var txt = "<span style='color:" + col + "'>" + $(this).text() + "</span>"; //获取输入框内容
    $(".Text").html(arr.join("").toString() + txt); //保证输入的内容同步
    //判断有没有按回车键
    //keyCode 的值为 13时，说明是回车键
    if (e.keyCode == 13) {
        //清空输入框内容
        $("p.txt").empty(); //清空
        arr.push("<P>" + txt + "</p>");
        var html = "";
        for (var i = 0; i < arr.length; i++) {
            html += arr[i];
        }
        $(".Text").html(html);
    }
    $('.but').click(function () {
        auto();
    })
    function auto() {
        $(".Text span").animate({
            opacity: 0.6
        }, 500, function () {
            $('.Text').find('span').empty()
            $('.Text').find('p').remove();
        })
        $("p.txt").empty();
    }
});
$('#replayMusic img').click(function () {
    for (var i = 1; i <= 500; i++) {
        clearTimeout(i)
    }
    var col = $(".Con ul li.xz").data("color");
    $('.Text span').css('color', col)
    $("#Music").get(0).load();
    $("#Music").get(0).play();
})
$(document).snowfall({
    flakeCount: 100
})