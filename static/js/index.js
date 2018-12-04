$(function (e) {


    new Swiper('#topSwiper', {
        pagination: '.swiper-pagination',
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 5,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true
    });


    new Swiper('#mustbuySwiper', {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true
    });
//
// //header 显示/隐藏手机版app-img
//    $(".lastLi").on("mouseenter",function(){
//        $(".app-img").css({
//            "display":"block"
//        })
//    }).on("mouseleave",function(){
//        $(".app-img").css({
//            "display":"none"
//        })
//    });

//=============================
//轮播
//     $.get("/static/json/lunbo.json",function(a){
//         console.log(a);
//         var res = a.lunbo;
    //2, 显示数据到页面上
    //遍历data数组, 将每个图片显示在页面上
    // for (var i=0; i<res.length; i++) {
    //
    //     var obj = res[i];
    //     var img = obj.img; //img
    //     //var id = obj.id; //id
    //     //将创建的节点添加到页面上
    //     $("#list").append( "<li><img src=" + img +" /></li>" );
    //     $("#list2").append( "<li> </li>" );
    //
    //     //初始化把第一个li的样式变成选中状态
    //     if (i == 0) {
    //         $("#list2 li").addClass("active");
    //     }
    // }
    //开启自动轮播
    //     lunbo();
    // });
    // //轮播图
    // function lunbo() {
    //     var _list1 = $("#list");
    //     var _list2 = $("#list2");
    //     var _li1 = $("#list li");
    //     var _li2 = $("#list2 li");
    //     //复制第1张图到最后
    //     _li1.first().clone().appendTo(_list1);
    //
    //     var size = $("#list li").length;
    //     //console.log(size); //5
    //     var i = 0; //即将显示的图片的下标
    //     //开启定时器, 自动轮播
    //     var timer = setInterval(function(){
    //         i++;
    //         move();
    //     }, 2000);
    //     //移动
    //     function move(){
    //         //如果超出左边界
    //         if (i < 0) {
    //             _list1.css("left", -(size-1)*955); //瞬间移动到第5张图(i=4的图片)
    //             i = size-2; //即将移动到第4张图(i=3的图)
    //         }
    //         //如果超出右边界
    //         if (i >= size) {
    //             _list1.css("left", 0); //瞬间移动到第1张图(非动画)
    //             i = 1; //即将移动到第2张图(i=1的图)
    //         }
    //         //动画移动
    //         _list1.stop().animate({left: -i*955}, 500);
    //         //更改按钮的选中状态
    //         _li2.removeClass().eq(i).addClass("active");
    //         if (i == size-1) {
    //             _li2.removeClass().eq(0).addClass("active");
    //         }
    //     }

    //    //上一页
    //    $("#left").click(function(){
    //    i--;
    //    move();
    //})
    //
    //    //下一页
    //    $("#right").click(function(){
    //    i++;
    //    move();
    //})

    //按钮的移入事件
    //     _li2.mouseenter(function(){
    //         i = $(this).index();
    //         move();
    //     })
    //     $("#lbLeft").hover(
    //         function(){ //mouseenter
    //             clearInterval(timer); //停止定时器
    //         },
    //         function(){ //mouseleave
    //             clearInterval(timer);
    //             timer = setInterval(function(){
    //                 i++;
    //                 move();
    //             }, 2000)
    //         })
    // }

//=================================
//    //导航栏nav下移动的li标签
//
//    var liNode = $("#navUl li");
//    liNode.on("mouseenter",function(){
//        //移动li标签
//        console.log($(this).index());
//        if ($(this).index()==0){
//            $("#lastli").css({
//                display:"none"
//            })
//        }else {
//        $("#lastli").css({
//            display:"block"
//        })
//        var iTarget = 120*$(this).index();
//        $("#lastli").stop().animate({left:iTarget},300);
//        //二级菜单
//        $(".navList").css({
//            "display":"none"
//        });
//        $(".navList").eq($(this).index()-1).css({
//            "display":"block"
//        })
//        }
//
//    });
//    $("#navUl").on("mouseleave",function(){
//        //移动li标签
//        $("#lastli").css({
//            left:0,
//            display:"none"
//        });
//        //二级菜单
//        $(".navList").css({
//            "display":"none"
//        });
//    });
//    //当移动到第一个li标签（首页）上时，隐藏二级菜单
//    liNode.eq(0).on("mouseenter",function(){
//        $(".navList").css({
//            "display":"none"
//        });
//    });
//    //当移动到二级菜单时执行显示/隐藏
//    $(".navList").on("mouseenter",function(){
//        $(this).css({
//            "display":"block"
//        })
//
//    }).on("mouseleave",function(){
//            $(this).css({
//            "display":"none"
//        })
//    });


//====================================
//轮播旁倒计时

//2016-10-01  10:10:10 某个时间点结束
//        让上面的时间和现在的时间比较，得到一个时间差，可转换成时间戳
    var date1 = new Date("2016-11-11  10:0:0");
    var now = new Date();

    var timeInterval = date1.getTime() - now.getTime();//时间差
    var timeSec = timeInterval / 1000;  //转换成秒
//开启定时器，开始倒计时
    setInterval(function () {
        timeSec--;
        var day = parseInt(timeSec / 24 / 60 / 60); //天
        var hour = parseInt(timeSec / 60 / 60) % 24;//时
        var min = parseInt(timeSec / 60) % 60;//分
        var sec = parseInt(timeSec) % 60;
        $("#lbRight3").html("剩余时间:" + day + "天" + hour + "时" + min + "分" + sec + "秒");
    }, 1000);


//    二级菜单栏显示/隐藏
    var liNode = $("#navUl li");
    liNode.on("mouseenter", function () {

    })

    //=========================
    //热卖倒计时
    var date2 = new Date("2016-12-12  23:0:0");
    var now2 = new Date();

    var timeInterval2 = date2.getTime() - now2.getTime();//时间差
    var timeSec2 = timeInterval2 / 1000;  //转换成秒
//开启定时器，开始倒计时
    setInterval(function () {
        timeSec2--;
        var day2 = parseInt(timeSec2 / 24 / 60 / 60); //天
        var hour2 = parseInt(timeSec2 / 60 / 60) % 24;//时
        var min2 = parseInt(timeSec2 / 60) % 60;//分
        var sec2 = parseInt(timeSec2) % 60;
        if (hour2 < 10) {
            hour2 = "0" + hour2;
        }
        if (min2 < 10) {
            min2 = "0" + min2;
        }
        if (sec2 < 10) {
            sec2 = "0" + sec2;
        }
        var spanNode = $("#limitBox .p4");
        spanNode.find("span").eq(0).html(hour2);
        spanNode.find("span").eq(1).html(min2);
        spanNode.find("span").eq(2).html(sec2);

    }, 1000);
    //热卖获取json
    $.get("/static/json/lunbo.json", function (b) {
        console.log(b);
        var res = b.remai;
        //2, 显示数据到页面上
        //遍历data数组, 将每个图片显示在页面上
        for (var i = 0; i < res.length; i++) {

            var obj = res[i];
            var img = obj.img; //img
            var p1 = obj.p1;
            var p2 = obj.p2;
            var p3 = obj.p3;
            var money1 = obj.money1;
            var money2 = obj.money2;
            var span = obj.span;
            //添加内容
            $(" <img src=" + img + "/>").appendTo($(".limitBox").eq(i + 1));
            $(" <p>" + p1 + "</p>").addClass("p5").appendTo($(".limitBox").eq(i + 1));
            $(" <p>" + p2 + "</p>").addClass("p6").appendTo($(".limitBox").eq(i + 1));
            $(" <p>" + p3 + "</p>").addClass("p6").appendTo($(".limitBox").eq(i + 1));
            $(" <span>" + money1 + "</span>").addClass("span3").appendTo($(".limitBox").eq(i + 1));
            $(" <span>" + money2 + "</span>").addClass("span4").appendTo($(".limitBox").eq(i + 1));
            $(" <span>" + span + "</span>").addClass("span5").appendTo($(".limitBox").eq(i + 1));
        }

    });

    //人气推荐json
    $.get("/static/json/lunbo.json", function (c) {
        //console.log(b);
        var res = c.renqi1;
        //2, 显示数据到页面上
        //遍历data数组, 将每个图片显示在页面上
        for (var i = 0; i < res.length; i++) {

            var obj = res[i];
            var img = obj.img; //img
            var p = obj.p;
            var money1 = obj.span1;
            var money2 = obj.span2;
            var id = obj.id;
            //添加内容
            $(" <a href=Goods-details.html?" + id + "><img src=" + img + "/></a>").addClass("a1").appendTo($("#renqi1 .recBox").eq(i));
            $(" <p><a href=Goods-details.html?" + id + ">" + p + "</a></p>").appendTo($("#renqi1 .recBox").eq(i));
            $(" <p><span class='span1'>" + money1 + "</span><span class='span2'>" + money2 + "</span> </p>").appendTo($("#renqi1 .recBox").eq(i));

        }

    });
    //人气推荐2json
    $.get("/static/json/lunbo.json", function (d) {
        //console.log(b);
        var res = d.renqi2;
        //2, 显示数据到页面上
        //遍历data数组, 将每个图片显示在页面上
        for (var i = 0; i < res.length; i++) {

            var obj = res[i];
            var img = obj.img; //img
            var p = obj.p;
            var money1 = obj.span1;
            var money2 = obj.span2;
            //添加内容
            $(" <a href=''><img src=" + img + "/></a>").addClass("a1").appendTo($("#renqi2 .recBox").eq(i));
            $(" <p><a href=''>" + p + "</a></p>").appendTo($("#renqi2 .recBox").eq(i));
            $(" <p><span class='span1'>" + money1 + "</span><span class='span2'>" + money2 + "</span> </p>").appendTo($("#renqi2 .recBox").eq(i));

        }

    });

    //当鼠标移动到美妆和女装上时轮现以上两个DIV
    $("#recTop a").on("mouseenter", function () {
        var index = $(this).index();
        $("#recTop a").removeClass("active");
        $(this).addClass("active");
        //console.log(index);
        $("#recConttop .recContent").css({
            "display": "none"
        });
        $("#recConttop .recContent").eq(index).css({
            "display": "block"
        })
    });

    //鼠标放在商品上时显示渐变边框
    $("#recConttop .recBox").on("mouseenter", function () {

        $(this).css({
            "border-color": "lavender",
            "box-shadow": "0px 0px 5px"
        });
        $(this).find("a").css({
            "color": "red"
        })
    });
    $("#recConttop .recBox").on("mouseleave", function () {
        $(this).find("a").css({
            "color": "black"
        });
        $("#recConttop .recBox").css({
            "border-color": "white",
            "box-shadow": ""
        });
    });
//人气推荐旁li1  的json
    $.get("/static/json/lunbo.json", function (g) {
        //console.log(b);
        var res = g.li1;
        //2, 显示数据到页面上
        //遍历data数组, 将每个图片显示在页面上
        for (var i = 0; i < res.length; i++) {

            var obj = res[i];
            var img = obj.img; //img
            var a = obj.a;
            var money1 = obj.span1;
            var money2 = obj.span2;
            //添加内容
            $("<img src=" + img + "/>").appendTo($("#li1 div").eq(i));
            $(" <a href=''>" + a + "</a>").appendTo($("#li1 div").eq(i));
            $(" <span class='span1'>" + money1 + "</span><span class='span2'>" + money2 + "</span>").appendTo($("#li1 div").eq(i));
        }
    });

    //人气推荐旁li2  的json
    $.get("/static/json/lunbo.json", function (f) {

        var res = f.li2;
        //2, 显示数据到页面上
        //遍历data数组, 将每个图片显示在页面上
        for (var i = 0; i < res.length; i++) {

            var obj = res[i];
            var img = obj.img; //img
            var a = obj.a;
            var money1 = obj.span1;
            var money2 = obj.span2;
            //添加内容
            $("<img src=" + img + "/>").appendTo($("#li2 div").eq(i));
            $(" <a href=''>" + a + "</a>").appendTo($("#li2 div").eq(i));
            $(" <span class='span1'>" + money1 + "</span><span class='span2'>" + money2 + "</span>").appendTo($("#li2 div").eq(i));
        }
    });

    //点击左右按钮切换


    $("#recRight .a1").click(function () {

        $("#recList1").animate({
            "left": 0
        }, 1000);
        $("#recList2").css({
            "left": 0
        })
    });

    $("#recRight .a2").click(function () {

        $("#recList1").animate({
            "left": -190
        }, 1000);

        $("#recList2").css({
            "left": -300
        })
    });

//新品上架  的json
    $.get("/static/json/lunbo.json", function (h) {
        //console.log(b);
        var res = h.xinpin;
        //2, 显示数据到页面上
        //遍历data数组, 将每个图片显示在页面上
        for (var i = 0; i < res.length; i++) {

            var obj = res[i];
            var img = obj.img; //img
            var a = obj.a;
            var money1 = obj.span1;
            var money2 = obj.span2;
            //添加内容
            $("<img src=" + img + "/>").appendTo($("#newContent .newPro").eq(i));
            $(" <a href=''>" + a + "</a>").appendTo($("#newContent .newPro").eq(i));
            $(" <span class='span1'>" + money1 + "</span><span class='span2'>" + money2 + "</span>").appendTo($("#newContent .newPro").eq(i));
        }
    });

    $.get("/static/json/lunbo.json", function (j) {
        //console.log(b);
        var res = j.xinpin2;
        //2, 显示数据到页面上
        //遍历data数组, 将每个图片显示在页面上
        for (var i = 0; i < res.length; i++) {

            var obj = res[i];
            var img = obj.img; //img
            var a = obj.a;
            var money1 = obj.span1;
            var money2 = obj.span2;
            //添加内容
            $("<img src=" + img + "/>").appendTo($("#newContent2 .newPro").eq(i));
            $(" <a href=''>" + a + "</a>").appendTo($("#newContent2 .newPro").eq(i));
            $(" <span class='span1'>" + money1 + "</span><span class='span2'>" + money2 + "</span>").appendTo($("#newContent2 .newPro").eq(i));
        }
    });
    //新品Tab切换
    $(".newBtn span").on("mouseenter", function () {
        var index = $(this).index();
        $(".newBtn span").css({
            "color": "black",
            "background": "white"
        });
        $(this).css({
            "color": "white",
            "background": "#36dbd9"
        });
        //console.log(index);
        $(".newContent").css({
            "display": "none"
        });
        $(".newContent").eq(index).css({
            "display": "block"
        })
    });

//随便看看一栏 json
    $.get("/static/json/lunbo.json", function (k) {
        //console.log(b);
        var res = k.Look;
        //2, 显示数据到页面上
        //遍历data数组, 将每个图片显示在页面上
        for (var i = 0; i < res.length; i++) {
            var liNode = $("<li />");
            var obj = res[i];
            var img = obj.img; //img
            var a = obj.a;
            var money1 = obj.span1;
            var money2 = obj.span2;
            //添加内容
            $("<a><img src=" + img + "/></a>").appendTo(liNode);
            $("<p> <a href=''>" + a + "</a></p>").appendTo(liNode);
            $(" <span class='span1'>" + money1 + "</span><span class='span2'>" + money2 + "</span>").appendTo(liNode);
            $("#see-list").append(liNode);
        }
    });

    $.get("/static/json/lunbo.json", function (l) {
        //console.log(b);
        var res = l.Look2;
        //2, 显示数据到页面上
        //遍历data数组, 将每个图片显示在页面上
        for (var i = 0; i < res.length; i++) {
            var liNode = $("<li />");
            var obj = res[i];
            var img = obj.img; //img
            var a = obj.a;
            var money1 = obj.span1;
            var money2 = obj.span2;
            //添加内容
            $("<a><img src=" + img + "/></a>").appendTo(liNode);
            $("<p> <a href=''>" + a + "</a></p>").appendTo(liNode);
            $(" <span class='span1'>" + money1 + "</span><span class='span2'>" + money2 + "</span>").appendTo(liNode);
            $("#see-list2").append(liNode);
        }
    });


    //品牌推荐================
    $.get("/static/json/lunbo.json", function (m) {
        //console.log(b);
        $("#brandLeft").append($("<a><img src=" + m.tittle + "/></a>"));
        var res = m.brand;
        //2, 显示数据到页面上
        //遍历data数组, 将每个图片显示在页面上
        for (var i = 0; i < res.length; i++) {
            var obj = res[i];
            var img = obj.img; //img
            //添加内容
            $("<a><img src=" + img + "/></a>").appendTo($("#brandRight"));
        }
    });

//========右侧栏===========

    $("#rightBar").css({
        "height": $(window).height()
    });

    $("#barContent").css({
        "top": ($(window).height() - 300) / 2
    })

//    //右侧栏隐藏图片运动
//$(".li").on("mouseenter",function(){
//    var index = $(this).index();
//    console.log(index);
//    $(".bar-item-tip").eq(index).animate({
//        "left":-116,
//        "opacity":1
//    },200);
//})
//    $(".li").on("mouseleave",function(){
//        var index = $(this).index();
//        $(".bar-item-tip").eq(index).animate({
//            "left":-200,
//            "opacity":0
//        },200)
//    })
//
////点击top回到顶部==============
//$("#barContent .li6").click(function(){
//    $("body").animate({
//        "scrollTop":0
//    },500);
//})
//    console.log($("body").scrollTop());

//===================================
    $(window).scroll(function () {
        var currentTop = $(this).scrollTop();
        //console.log(currentTop);
        if (currentTop >= 165) {
            $("#nav0").css({
                "position": "fixed",
                "top": 0,
                "border-bottom": "2px solid #ed145b",
                "background": "#fff"

            });

            $("#navUl").find("a").css({
                "color": "black"
            });
            //三角形颜色
            $(".i").css({
                "border-color": "black transparent"
            });
            //左边帮海贝
            $("#navUl .a1").css({
                "display": "none"
            });
            $("#navUl .a2").css({
                "display": "block",
                "color": "white"
            });
            //右边电话购物车
            $("#navRight").css({
                "display": "none"
            });
            $("#phone").css({
                "display": "block"
            })
        } else {
            $("#nav0").css({
                "position": "absolute",
                "border-bottom": "",
                "background": "",
                "color": "black"
            });
            $("#navUl").find("a").css({
                "color": "white"
            });
            //三角形颜色
            $(".i").css({
                "border-color": "white transparent"
            });
            //左边帮海贝
            $("#navUl .a1").css({
                "display": "block"
            });
            $("#navUl .a2").css({
                "display": "none"
            })
            //右边电话购物车
            $("#navRight").css({
                "display": "block"
            });
            $("#phone").css({
                "display": "none"
            })
        }

    })


    //====获取cookie中用户名==========
    var users1 = $.cookie("users");
    if (users1) {
        users1 = JSON.parse(users1);
        var size = users1.length;
//        var isExist = false; //表示是否存在该用户
//        for (var i = 0; i < users.length; i++) {
//        if ($(".username").val() == users[i].name && $(".value").val() ==users[i].pwd) {
        var Name = users1[size - 1].name;
        var Password = users1[size - 1].pwd;
        $("#usename").css({
            "display": "block"
        });
        $("#usename").html("用户：" + Name);
        $("#tuichu").css({
            "display": "block"
        });

        $(".zhuce-li").css({
            "display": "none"
        });
        $(".denglu-li").css({
            "display": "none"
        });

    }


    //=======点击退出=========
    $("#tuichu").click(function () {
        $("#usename").css({
            "display": "none"
        });
        $("#usename").html("");
        $("#tuichu").css({
            "display": "none"
        });

        $(".zhuce-li").css({
            "display": "block"
        });
        $(".denglu-li").css({
            "display": "block"
        });
    })


    ////购物车显示数量=========
    //var num = $.cookie("cart");
    //num = JSON.parse(num);
    //$("#num-total").html(num.length)


});//$(function(){})结束标签