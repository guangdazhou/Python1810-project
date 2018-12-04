$(function(){



       $.get("json/lunbo.json",function(data){
           console.log(data);
           //2, 显示数据到页面上
           //遍历data数组, 将每个图片显示在页面上
           for (var i=0; i<data.length; i++) {
               var obj = data.lunbo[i];
               var img = obj.img; //img
               //var id = obj.id; //id
               //将创建的节点添加到页面上
               $("#list").append( "<li><img src=" + img +" /></li>" );
               $("#list2").append( "<li> </li>" );

               //初始化把第一个li的样式变成选中状态
               if (i == 0) {
                   $("#list2 li").addClass("active");
               }
           }
                //开启自动轮播
                lunbo();
       });
                //轮播图
            function lunbo() {
                var _list1 = $("#list");
                var _list2 = $("#list2");
                var _li1 = $("#list li");
                var _li2 = $("#list2 li");
            //复制第1张图到最后
            _li1.first().clone().appendTo(_list1);

            var size = $("#list li").length;
            //console.log(size); //5
            var i = 0; //即将显示的图片的下标
            //开启定时器, 自动轮播
            var timer = setInterval(function(){
            i++;
            move();
            }, 2000);
            //移动
            function move(){
            //如果超出左边界
                if (i < 0) {
                    _list1.css("left", -(size-1)*955); //瞬间移动到第5张图(i=4的图片)
                    i = size-2; //即将移动到第4张图(i=3的图)
                }
                //如果超出右边界
                if (i >= size) {
                    _list1.css("left", 0); //瞬间移动到第1张图(非动画)
                    i = 1; //即将移动到第2张图(i=1的图)
                }
                //动画移动
                _list1.stop().animate({left: -i*955}, 500);
                //更改按钮的选中状态
                _li2.removeClass().eq(i).addClass("active");
                if (i == size-1) {
                    _li2.removeClass().eq(0).addClass("active");
                }
            }

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
            _li2.mouseenter(function(){
                i = $(this).index();
                move();
            })
            $("#lbLeft").hover(
                function(){ //mouseenter
                    clearInterval(timer); //停止定时器
                },
                function(){ //mouseleave
                    clearInterval(timer);
                    timer = setInterval(function(){
                    i++;
                    move();
                    }, 2000)
            })
            }
        })
