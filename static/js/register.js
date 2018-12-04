/**
 * Created by Administrator on 2016/10/4 0004.
 */

//$("#idcode").html($.idcode.setCode());   //加载生成验证码方法
$(function(){

    $("#idcode").html($.idcode.setCode());   //加载生成验证码方法

    //============input获取/失去焦点时样式=========================
    $("input").focus(function(){
        $(this).css({
            "border-color":"red"
        });
        $(this).parent().find(".p2").css({
            "display":"block"
        })
    }).blur(function(){

        $(this).css({
            "border-color":""
        });
        //$(this).parent().find(".p2").css({
        //    "display":"none"
        //})
    });

    var code = true;
        //验证手机号===========
    $(".username").blur(function(){
        if(!(/^1[34578]\d{9}$/.test($(".username").val()))){
            if(($(".username").val()).length==0){
                $(this).parent().find(".p2").html("手机号码不能为空！")

            }else {
                $(this).parent().find(".p2").html("手机号码格式错误！");

            }
            $(this).parent().find(".p2").css({
                "border-color":"red",
                "background":"pink",
                "color":"red"
            });
            code = false;
        }else {
            $(this).parent().find(".p2").css({
                "display":"none"
            });
            $(this).parent().find("i").css({
                "display":"block"
            });
            $(this).parent().find(".p2").html("完成验证后，您可以用该手机号登录和找回密码");
            $(this).parent().find(".p2").css({
                "border-color":"",
                "background":"",
                "color":""
            })
    }
        if($(this).val().length==0){
            $(this).parent().find("i").css({
                "display":"none"
            });
        }
    });

    //=====验证码========
    //$("#Txtidcode").blur(function(){
    //    if ($("#Txtidcode").val()==$("#idcode").val()){
    //        $(this).parent().find(".p2").css({
    //            "display":"none"
    //        })
    //        code=true
    //    }else {
    //        $(this).parent().find(".p2").html("验证码错误！");
    //        $(this).parent().find(".p2").css({
    //            "border-color":"red",
    //            "background":"pink",
    //            "color":"red"
    //        })
    //        code = false;
    //    }
    //})
//====验证密码===========
        $(".password").blur(function(){
            if(!(/^[0-9A-Za-z]{6,15}$/.test($(".password").val()))){
                $(this).parent().find(".p2").html("密码格式错误！");
                $(this).parent().find(".p2").css({
                    "border-color":"red",
                    "background":"pink",
                    "color":"red"
                });
                code = false;
            }else {
                $(this).parent().find(".p2").css({
                    "display":"none"
                });
                $(this).parent().find("i").css({
                    "display":"block"
                });
                $(this).parent().find(".p2").html("6-15位字母，建议字母、数字及下划线两种以上组合");
                $(this).parent().find(".p2").css({
                    "border-color":"",
                    "background":"",
                    "color":""
                });
            }
            if($(this).val().length==0){
                $(this).parent().find("i").css({
                    "display":"none"
                });
            }
        });
    //====再次验证密码=====
    $(".password2").blur(function(){
        if($(".password").val()==$(".password2").val()){
            $(this).parent().find(".p2").css({
                "display":"none"
            });
            $(this).parent().find(".p2").html("请再次输入密码");
            $(this).parent().find(".p2").css({
                "border-color":"",
                "background":"",
                "color":""
            });
        }else {
            $(this).parent().find(".p2").html("两次密码输入不相同！");
            $(this).parent().find(".p2").css({
                "border-color":"red",
                "background":"pink",
                "color":"red"
            });
            code = false;
        }
    });
    //console.log($(".checkbox").prop("checked"));


    $(".p1 .password").change(function(){
        console.log("aaa");
        if ($(this).val().length>=6&&$(this).val().length<8){
            $("#safe").css({
                "display":"block"
            })
        }else if($(this).val().length>=8&&$(this).val().length<12){
            $("#safe").css({
                "display":"block",
            })
            $("#safe span").css({
                "background-position": "0 -23px"
            })

        }else if($(this).val().length>=12&&$(this).val().length<16){
            $("#safe").css({
                "display":"block",

            })
            $("#safe span").css({
                "background-position": "0 -46px"
            })

        }
        else if($(this).val().length==0){
            $("#safe").css({
                "display":"none"
            })
        }

    })



    //======注册===============
    //            点击注册按钮
//     $(".zhuce").find("input").click(function(){
//
//         if($(".checkbox").prop("checked")) {
//             //if (code) {
//
//                 // 先获取之前保存在cookie中的用户
//                 var users = $.cookie("users") ? JSON.parse($.cookie("users")) : [];
//
// //                遍历users数组，判断是否存在该用户，如果存在则不能注册
//
//                 for (var i = 0; i < users.length; i++) {
//                     if ($(".username").val() == users[i].name) {
//                         alert("用户已存在，不能注册");
//                         return;
//                     }
//                 }
// //            需要注册的用户（需要保存到cookie中的用户）
//                 var user = {
//                     name: $(".username").val(),
//                     pwd: $(".password").val()
//                 };
//                 users.push(user);//添加新用户
//
//                 // 保存到cookie中
//                 $.cookie("users", JSON.stringify(users), {expires: 30, path: "/"})
//                 //console.log($.cookie("users"));
//                 alert("注册成功！")
//
//             //} else {
//             //
//             //alert("注册信息有误！")
//         //}
//
//         }else {
//             alert("请阅读并同意《帮5买用户注册协议》")
//         }
//     });

    //=====点击登录跳转登录页面-===========
    //$(".zhuce").find("input").click(function)
 });