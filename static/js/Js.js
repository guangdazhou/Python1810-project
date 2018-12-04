/**
 * Created by Administrator on 2016/10/5 0005.
 */
$(function(e) {

    //header 显示/隐藏手机版app-img
    $(".lastLi").on("mouseenter", function () {
        $(".app-img").css({
            "display": "block"
        })
    }).on("mouseleave", function () {
        $(".app-img").css({
            "display": "none"
        })
    });


    //导航栏nav下移动的li标签

    var liNode = $("#navUl li");
    liNode.on("mouseenter",function(){
        //移动li标签
        console.log($(this).index());
        if ($(this).index()==0){
            $("#lastli").css({
                display:"none"
            })
        }else {
            $("#lastli").css({
                display:"block"
            })
            var iTarget = 120*$(this).index();
            $("#lastli").stop().animate({left:iTarget},300);
            //二级菜单
            $(".navList").css({
                "display":"none"
            });
            $(".navList").eq($(this).index()-1).css({
                "display":"block"
            })
        }

    });
    $("#navUl").on("mouseleave",function(){
        //移动li标签
        $("#lastli").css({
            left:0,
            display:"none"
        });
        //二级菜单
        $(".navList").css({
            "display":"none"
        });
    });
    //当移动到第一个li标签（首页）上时，隐藏二级菜单
    liNode.eq(0).on("mouseenter",function(){
        $(".navList").css({
            "display":"none"
        });
    });
    //当移动到二级菜单时执行显示/隐藏
    $(".navList").on("mouseenter",function(){
        $(this).css({
            "display":"block"
        })

    }).on("mouseleave",function(){
        $(this).css({
            "display":"none"
        })
    });
//========右侧栏===========

    $("#rightBar").css({
        "height":$(window).height()
    });

    $("#barContent").css({
        "top":($(window).height()-300)/2
    });

    //右侧栏隐藏图片运动
    $(".li>.bar-item-logo").on("mouseenter",function(){
        var index = $(this).parent().index();
        console.log($(this));
        console.log(index);
        $(".bar-item-tip").eq(index).animate({
            "left":-116,
            "opacity":1
        },200);
    })
    $(".li>.bar-item-logo").on("mouseleave",function(){
        var index = $(this).parent().index();
        $(".bar-item-tip").eq(index).animate({
            "left":-200,
            "opacity":0
        },200)
    })

//点击top回到顶部==============
    $("#barContent .li6").click(function(){
        $("body").animate({
            "scrollTop":0
        },500);
    })
    console.log($("body").scrollTop());

})