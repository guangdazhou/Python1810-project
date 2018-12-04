/**
 * Created by Administrator on 2016/10/8.
 */


$(function(){
    //top栏右侧显示/隐藏
    $(".top-right div").on("mouseenter",function(){
        $(this).find("p").css({
            "display":"block"
        })
    }).on("mouseleave",function(){
        $(this).find("p").css({
            "display":"none"
        })
    });

//======================

//            从cookie中获取购物车的所有商品
    var arr = $.cookie("cart");
    var sum=0; //总价格
    console.log(arr);
    if(arr){
        $("#product").css({
            "display":"block"
        });
        $("#check").css({
            "display":"block"
        });
        $("#pay").css({
            "display":"block"
        });
        $("#cart-head").css({
            "display":"block"
        });

        $(".good-list").css({
           "display":"none"
        });
        $("#empty-cart").css({
            "display":"none"
        });

        arr = JSON.parse(arr);
//                遍历数组，显示所有商品的信息
        for(var i=0;i<arr.length;i++){
            $(".pro-msg").append($(" <ul><li class='li1'><input type='checkbox' checked='checked'></li></ul>"));
            $(".pro-msg ul").eq(i).append($("<li class='li2'>"+arr[i].img+"</li>"));
            $(".pro-msg ul").eq(i).append($("<li class='li3'>"+arr[i].name+"</li>"));
            $(".pro-msg ul").eq(i).append($("<li class='li4'>"+arr[i].name1+';'+arr[i].name2+"</li>"));
            $(".pro-msg ul").eq(i).append($("<li class='li5'>"+arr[i].price+"</li>"));
            $(".pro-msg ul").eq(i).append($("<li class='li6'><a class='a1'>-</a><input type='text' value="+"'"+arr[i].Num+"'"+"><a class='a2'>+</a></li>"));
            $(".pro-msg ul").eq(i).append($("<li class='li7'>"+(parseInt(arr[i].price)*parseInt(arr[i].Num))+"</li>"));
            $(".pro-msg ul").eq(i).append($("<li class='li8'><a href='cart.html'>删除</a></li>"));

            //===================
            sum+=parseInt(arr[i].price)*parseInt(arr[i].Num)
        }

        //======商品数量========
        $(".pay-content").find("b").html($(".pro-msg ul input:checked").length);
        //============总价格==============
        $(".pay-content .span2").html("¥"+sum);


        //=========点击增减数量=====
        $(".li6 .a1").click(function(){

            //var index = $(this).parent().parent().index();
            //console.log(typeof $(this).siblings("input").val());
            var num =parseInt($(this).siblings("input").val());
            //console.log(num);
            num--;
            if(num<=1){
                num=1
            }
            $(this).siblings("input").val(num);
            //===总价============
            var price =  parseInt($(this).parent().siblings(".li5").html());
            //console.log(price);
            $(this).parent().siblings(".li7").html(price*num);

            zongjia()

        });
        $(".li6 .a2").click(function(){

            //var index = $(this).parent().parent().index();
            //console.log(typeof $(this).siblings("input").val());
            var num =parseInt($(this).siblings("input").val());
            //console.log(num);
            num++;
            if (num>=20){
                num=20;
            }
            $(this).siblings("input").val(num);
            //===总价============
            var price =  parseInt($(this).parent().siblings(".li5").html());
            $(this).parent().siblings(".li7").html(price*num)

            zongjia()

        })
        //=======结算总价==========
        //console.log($(".inp-quanxuan").prop("checked"));
        //$(".pro-msg").find("input").prop("checked",$(".inp-quanxuan").prop("checked"))
        function zongjia(){
            //======总价格=====

            var Arr=0;var a;

            for(var j=0;j<$(".pro-msg ul").length;j++){
                if($(".pro-msg ul").eq(j).find("input").prop("checked")){
                    a = parseInt($(".pro-msg ul").eq(j).find(".li7").html());
                }else {
                    a=0
                }
                Arr+=a;
            }
            //console.log(Arr);
            $(".pay-content .span2").html("¥"+Arr);
            //======商品数量========
            $(".pay-content").find("b").html($(".pro-msg ul input:checked").length);
        }

//======手动输入数量时计算总价==========
//        $(".a1 input").blur(function(){
//            zongjia();
//        })



        $("input").click(function(){
            //$(this).toggle("checked",true)
            //console.log($(".pro-msg ul").length);
            //console.log($("ul input:checked").length);
            if($("ul input:checked").length!=$(".pro-msg ul").length){
                $(".inp-quanxuan").prop("checked",false)
            }else {
                $(".inp-quanxuan").prop("checked",true)
            }

            zongjia()

        })

//==========全选按钮===========
        $(".inp-quanxuan").click(function(){
            if($(".pro-msg ul input:checked").length!=$(".pro-msg ul").length){
                $("input").prop("checked",true)
            }else {
                $("input").prop("checked",false)
            }


            zongjia()
            ////===========总价格===================
            //var Arr=0;var a;
            //
            //for(var j=0;j<$(".pro-msg ul").length;j++){
            //    if($(".pro-msg ul").eq(j).find("input").prop("checked")){
            //        a = parseInt($(".pro-msg ul").eq(j).find(".li7").html());
            //    }else {
            //        a=0
            //    }
            //    Arr+=a;
            //}
            //console.log(Arr);
            //$(".pay-content .span2").html("¥"+Arr);
            ////======商品数量========
            //$(".pay-content").find("b").html($(".pro-msg ul input:checked").length);

        })

    }else {
        $(".good-list").css({
            "display":"block"
        });
        $("#empty-cart").css({
            "display":"block"
        });
    }

//    function sum(){
////======计算总价============
//       var Arr = 0;
//        console.log(this);
//        console.log($(this).parent().siblings(".li7").html());
//        if ($(".pro-msg ul input").prop("checked")){
//       Arr += parseInt($(this).parent().siblings(".li7").html())
//    }
//
//    }


    //            清除购物车
    $(".pro-msg .li8").find("a").click(function(){
        if ($(this).parents(".pro-msg").find("ul").length<=1){
            $.cookie("cart",JSON.stringify(arr),{expires:0,path:"/"});
        }

        var index = $(this).parent().parent().index();
        //console.log(index);
        var Cookie = JSON.parse($.cookie("cart"));
        Cookie.splice(index,1);
        //console.log(newCookie);
        $.cookie("cart",JSON.stringify(Cookie),{expires:30,path:"/"});


    });

        //=======全选删除===========

        if($("#check input").prop("checked")){
            $("#check a").click(function(){
                console.log("aa");
                $.cookie("cart","",{expires:0,path:"/"});

                location.href="cart.html"
            })
        }
//==============
    //====获取cookie中用户名==========
    var users3 = $.cookie("users");
    if(users3){
        users3 = JSON.parse(users3);
        var size = users3.length;
//        var isExist = false; //表示是否存在该用户
//        for (var i = 0; i < users.length; i++) {
//        if ($(".username").val() == users[i].name && $(".value").val() ==users[i].pwd) {
        var Name = users3[size-1].name;
        var Password = users3[size-1].pwd;
        $("#usename").css({
            "display":"block"
        });
        $("#usename").html("用户："+Name);
        $("#tuichu").css({
            "display":"block"
        });

        $(".zhuce-li").css({
            "display":"none"
        });
        $(".denglu-li").css({
            "display":"none"
        });

    }


    //=======点击退出=========
    $("#tuichu").click(function(){
        $("#usename").css({
            "display":"none"
        });
        $("#usename").html("");
        $("#tuichu").css({
            "display":"none"
        });

        $(".zhuce-li").css({
            "display":"block"
        });
        $(".denglu-li").css({
            "display":"block"
        });
    })
});