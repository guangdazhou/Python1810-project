/**
 * Created by Administrator on 2016/10/4 0004.
 */
$(function(){
    $("#idcode").html($.idcode.setCode());   //加载生成验证码方法
    //忘记密码
    $(".forgetA").on("mouseenter",function(){
        $(this).css({
            "color":"darkorange"
        });
        $("#forget-password").css({
            "display":"block"
        })
    }).on("mouseleave",function(){
        $("#forget-password").css({
            "display":"none"
        });
        $(this).css({
            "color":"grey"
        });
    });
//div显示/隐藏===
    $("#forget-password").on("mouseenter",function(){
        $(this).css({
            "display":"block"
        })
    }).on("mouseleave",function(){
        $(this).css({
            "display":"none"
        })
    });


//忘记密码鼠标enter/leave样式
    $("#forget-password a").on("mouseenter",function(){
        $("#forget-password a").css({
            "color":"grey"
        });
        $(this).css({
            "color":"darkorange"
        });
        $(this).find(".i1").css({
            "background-position": "-19px 0"
        })
        $(this).find(".i2").css({
            "background-position": "-19px -16px"
        })
    }).on("mouseleave",function(){
        $("#forget-password a").css({
            "color":"grey"
        });
        $("#forget-password a").find(".i1").css({
            "background-position": "0 0"
        });
        $("#forget-password a").find(".i2").css({
            "background-position": "0 -16px"
        })
    })

    //=================input获取焦点时样式的变化============
        $("input").not("input:button").focus(function(){
            $(this).val("");
            $(this).css({
                "background":"lavender"
            })
        }).blur(function(){
            $(this).css({
                "background":"white"
            })
        })
});