/**
 * Created by Administrator on 2016/10/5 0005.
 */
$(function () {

    $(window).scroll(function () {
        var currentTop = $(this).scrollTop();
        //console.log(currentTop);
        if (currentTop >= 985) {
            $(".tittle").css({
                "position": "fixed",
                "top": 0,
                "width": "100%",
                "border-bottom": "2px solid #ed145b"
            })
        } else {
            $(".tittle").css({
                "position": "absolute",
                "border-bottom": ""
            });
        }
    })


    //===================放大镜==================
    function fdj() {
        var _smallImg = $("#smallImg");//小图
        var _smallArea = $("#smallArea");//小区域
        var _bigImg = $("#bigImg");//大图
        var _bigArea = $("#bigArea");//大区域
//        大图/小图==大区域/小区域
//        计算小区域的宽高
        _smallArea.width(_bigArea.width() * _smallImg.width() / _bigImg.width());
        _smallArea.height(_bigArea.height() * _smallImg.width() / _bigImg.height());
//            放大倍数
        var scale = _bigImg.width() / _smallImg.width(); // 4

        //mousemove
        _smallImg.mousemove(function (e) {
            _smallArea.show();//显示小区域
            _bigArea.show();
            var x = e.pageX - _smallImg.offset().left - _smallArea.width() / 2;
            var y = e.pageY - _smallImg.offset().top - _smallArea.height() / 2;
            //控制小区域范围在小图内
            if (x <= 0) {
                x = 0;
            } else if (x >= _smallImg.width() - _smallArea.width()) {
                x = _smallImg.width() - _smallArea.width();
            }

            if (y < 0) {
                y = 0;
            } else if (y >= _smallImg.height() - _smallArea.height()) {
                y = _smallImg.height() - _smallArea.height();
            }
//                移动小区域
            _smallArea.css({left: x, top: y});
            //移动大图
            _bigImg.css({left: -x * scale, top: -y * scale});
        });
        // mouseleave
        _smallImg.mouseleave(function () {
            _smallArea.hide();//隐藏小区域
            _bigArea.hide();
        });
    }

    var loc = location.search;
    var ID = loc.replace("?", "");

    //===========json=============

    $.get("/static/json/Goods-details.json", function (a) {
        //console.log(a);

        var obj;
        var pre;
        //遍历data数组,
        for (var i = 0; i < a.length; i++) {
            if (a[i].id == ID) {
                obj = a[i].data;
                for (var j = 0; j < obj.length; j++) {

                    if (obj[j].tittle == "文字") {
                        pre = obj[j].word;
                        for (var n = 0; n < pre.length; n++) {
                            $("<p>" + pre[n].p + "</p>").addClass("p" + n).appendTo($("#right-word"));

                        }
                    }
//===============
                    if (obj[j].tittle == "图片") {
                        pre = obj[j].img;
                        for (var k = 0; k < pre.length; k++) {
                            //console.log(pre.length);
                            if (k == 1) {
                                $("<img  id='bigImg'  src=" + pre[k].src + "/>").appendTo($(".img-json").eq(k))
                            } else {
                                $("<img src=" + pre[k].src + "/>").appendTo($(".img-json").eq(k));
                            }

                        }
                    }
                }
            }

        }

        fdj();

        //===================点击 + - 增减商品数量 =======================
        var num;
        $(".add2").click(function () {
            num = $(".number").val();
            num++;
            if (num >= 20) {
                num = 20;
            }
            $(".number").val(num)
        });
        $(".add1").click(function () {
            num = $(".number").val();
            num--;

            if (num <= 0) {
                num = 0
            }
            $(".number").val(num);
        });

        //console.log($(".number").val());
        //======================================


        //  =======点击加入购物车按钮============
        //cookie：存储的是字符串
//            cookie：存储json形式的字符串
//            json解析（反序列化）：把json字符串转换成json对象（数组或对象）
//            json序列化：把json对象转换成json字符串
        console.log(location.search.replace("?", ""));
//            点击加入购物车
        $(".inp2").click(function () {
            var goodsNum = parseInt($(".number").val());
            console.log(goodsNum);
//                要加入购物车的商品信息
            var goodsId = location.search.replace("?", "");
            var goodsImg = $(".small-img .img").html();
            var goodsName = $(".p0").text();
            var goodsName1 = $(".p5").text();
            var goodsName2 = $(".p6").text();
            var goodsPrice = $(".p2 .span1").html().replace("¥", "");
//                获取之前保存在cookie中的购物车信息
            var arr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];//取原来保存的商品，再加入的话就能在之前的基础上添加而不是再覆盖
            //商品数量
//                遍历查找是否之前的购物车cookie中即将添加的商品
            var isExist = false; //表示是否存在该商品
            for (var i = 0; i < arr.length; i++) {
//                    如果存在改商品，把数量num增加
                if (goodsId == arr[i].id) {
                    arr[i].Num += goodsNum;
                    isExist = true;

                }
            }
//                如果不存在  ,则添加一个新商品
            if (!isExist) {
                // /商品对象
                var goods = {
                    id: goodsId,
                    Num: goodsNum,
                    img: goodsImg,
                    name: goodsName,
                    name1: goodsName1,
                    name2: goodsName2,
                    price: goodsPrice
                    //num:1 //商品数量
                };
//                    console.log(goods);
//                    console.log(arr);
                arr.push(goods);// 保存多个商品/
            }

//                保存到cookie中
            // 保存的goods必须是字符串，所以对其进行序列化   json形式的字符串
            $.cookie("cart", JSON.stringify(arr), {expires: 30, path: "/"});
            console.log($.cookie("cart"));
        });


        //结算
        //$("#caculate").click(function(){
        //    location.href = "3.结算cart2.html"
        //})
    });
//=============点击商品信息跳转到相应的高度==========
    $(window).scroll(function () {

        var currentTop = $(this).scrollTop();
        //console.log(currentTop);
        $(".scroll").each(function (index, ele) {
            //console.log(index);
//            //判断当前的div是否在页面中出现
            //判断对应的楼层
            //for (var i=0;i<($(".scroll").length);i++){
            //console.log($(".scroll").length);//4
            //console.log($(this).index());

            if (currentTop >= $(this).offset().top - 60 && currentTop <= $(this).offset().top + $(this).outerHeight()) {
                //console.log($(this).index());
                //第0个div 对应0 li
                //1          1
                $(".btn a").removeClass("a1").eq(index).addClass("a1");
            }

            //}
        })
    });


    $(".btn a").click(function () {
        var index = $(this).index();
        $(".btn a").removeClass("a1");
        $(this).addClass("a1");
        $("body,html").animate({
            "scrollTop": $(".scroll").eq(index).offset().top - 60
        }, 500);

    });

//========点击商品数量增减=================
//    $(".add2").click(function(){
//        var num = $(".number").val();
//        console.log(num);

    //});

    $(".inp2").click(function () {
        $("#cart-out").css({
            "display": "block"
        });
        //$("#cart-box").css({
        //    "display":"block"
        //});

    });
    $(".go-shoping").click(function () {
        $("#cart-out").css({
            "display": "none"
        });
        //$("body").css({
        //    "opacity":1
        //})
    });
    $(".go-cart").click(function () {


    })

//===============
    //====获取cookie中用户名==========
    var users2 = $.cookie("users");
    if (users2) {
        users2 = JSON.parse(users2);
        var size = users2.length;
//        var isExist = false; //表示是否存在该用户
//        for (var i = 0; i < users.length; i++) {
//        if ($(".username").val() == users[i].name && $(".value").val() ==users[i].pwd) {
        var Name = users2[size - 1].name;
        var Password = users2[size - 1].pwd;
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

    $('.span1 .glyphicon-minus').hide()
    $('.span1 .num1').hide()


    $(' .span1 .num1').each(function () {
        var num = parseInt($(this).html())
        if (num) {   // 有数据，即有添加购物车
            $(this).show()
            $(this).prev().show()
        }
    })


    $('.span1 .glyphicon-plus').click(function () {
        var showgoodsid = $(this).attr('showgoodsid')

        var $that = $(this)

        $.get('/addcart/', {'showgoodsid': showgoodsid}, function (response) {
            console.log(response)
            if (response.status == -1) { // 未登录
                window.open('/login/', target = "_self")
            } else if (response.status == 1) {   // 添加成功
                // 错误的！！！
                // $('.bt-wrapper .glyphicon-minus').show()
                // $('.bt-wrapper .num').show().html(response.number)


                // 只修改当前操作的商品
                // $(this).prev().show().html(response.number)
                // $(this).prev().prev().show()

                $that.prev().show().html(response.number)
                $that.prev().prev().show()
            }
        })

    })


});