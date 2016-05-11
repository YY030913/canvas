
$(window).load(function() {
    var choose = $(".choose").width();
    var chooseleft = choose - 231 - 10
    $(".choose-left").css("width", chooseleft)
    var floorone = $(".xin").offset();
    $(".floor-first").css({"top":floorone.top+20,"left":floorone.left+30})
    var floortwo = $(".xin").offset();
    $(".floor-second").css({"top":floortwo.top+40,"right":265})

    $(".floor-third").css({"top":377,"right":265})
});
$(window).resize(function(){




    var choose=$(".choose").width();
    var chooseleft=choose-231-10

    var windowwidth=$(window).width()

    var leftmain=$(".left-main").width()
    var rightmain=windowwidth-leftmain-34

    $(".choose-left").css("width",chooseleft)
    $(".right-main").css("width",rightmain)

    var floorone = $(".xin").offset();
    $(".floor-first").css({"top":floorone.top+20,"left":floorone.left+30})
    var floortwo = $(".xin").offset();
    $(".floor-second").css({"top":floortwo.top+40,"right":265})

    $(".floor-third").css({"top":377,"right":265})
});

$(document).ready(function(){

    $("#clear").click(function(){
        $(".dod").find("img").attr("url","images/xxxxx.png");
        $(".dod").find("img").attr("src","images/xxxxx.png");
        $(".nm").each(function(){
            $(this).removeClass("activer");
        })

    })





    $(".imformation-xinshou").click(function(){
        $(".nav-floor").fadeIn()
        $(".floor").hide()
        $(".floor-floor").fadeIn()

        $(".order li").removeClass("listyle");
        $(this).delay("slow").hide()
    });


    //当点击跳转链接后，回到页面顶部位置

    $("#back-to-top").click(function(){
        $('body').animate({scrollTop:0},1000);
        $(".order li").removeClass("listyle");
        $(this).delay("slow").hide()
    });

//xuan的active

    $(".xuan").find('.but').click(function(){
        $(this).addClass("acc").siblings(".but").removeClass("acc");

    });

//触发input
    $(".nb").click(function (){
        var fileInput = document.getElementById("fileInput");//隐藏的file文本ID
        fileInput.click();//加一个触发事件
    });


//根据颜色替换背景色
//    $('#sRed').click(function(){
//
//        $(".dod").find("img").css("width","auto")
//        $(".dod").css("width","auto")
////        $(".con-fangDaIMg").css("width","auto")
//        $(".dod").prepend("<img src='images/主料材质.jpg' style='position: absolute'class='imgg'>");
//
//
//        var el = $('#artwork');
//        //初始化img对象
//        var img = new Image();
//        img.src =  el.attr('url');
//        //加载入Canvas
//        var canvas = document.createElement('canvas');
//        canvas.width =  el.width();
//        canvas.height =  el.height();
//
//        var ctx = canvas.getContext('2d');
//        ctx.drawImage(img,0,0);
//        var imgData  = ctx.getImageData(0,0, el.width(), el.height());
//        var data =  imgData.data;
//
//        //局部红色
//        for(var i=0,n=data.length;i<n;i+=4){
//            var r	=	data[i];
//            var g	=	data[i+1];
//            var b	=	data[i+2];
//            var a	=	data[i+3];
//            if( r==255 && g==0 && b==0 && a==255  ){
//
//                data[i]=0;
//                data[i+1]=0;
//                data[i+2]=0;
//                data[i+3]=0;
//            }
//        };
//        ctx.putImageData(imgData,0,0);
//        //处理图片代码结束
//        //重新设置图片的src属性
//        el.attr('src', canvas.toDataURL());
//        var arr = [];
//
//        $('.imgg').each(function(){
//            arr.push($(this).attr('src'));
//
//        })
//        var data=arr,base64=[];
//
//
//        draw(function(){
////            document.ge('imgBox').innerHTML='<img class="dou" src="'+base64[0]+'">';
//
//            $(".dod").prepend('<img class="imgg img-responsive" style="width:338px;" url="'+base64[0]+'" id="artwork" src="'+base64[0]+'">');
//            $(".magnifyingShow").find("img").remove();
//            $(".magnifyingShow").prepend('<img src="'+base64[0]+'">');
//        })
//
//        function draw(fn){
//            var c=document.createElement('canvas'),
//                ctx=c.getContext('2d'),
//                len=data.length;
//            c.width=800;
//            c.height=982;
//            ctx.rect(0,0,c.width,c.height);
//            ctx.fillStyle='#fff';
//            ctx.fill();
//            function drawing(n){
//                if(n<len){
//                    var img=new Image;
//                    //img.crossOrigin = 'Anonymous'; //解决跨域
//                    img.src=data[n];
//                    img.onload=function(){
//                        ctx.drawImage(img,0,0,800,982);
//                        drawing(n+1);//递归
//                    }
//                }else{
//                    //保存生成作品图片
//                    base64.push(c.toDataURL("images/jpeg",0.8));
//                    //alert(JSON.stringify(base64));
//                    fn();
//                }
//            }
//            drawing(0);
//        }
//        $(".dod img:lt(2)").remove();
//        $(".dod").css("width","338")
//
//
//    });
//
//    $('#sBlue').click(function(){
//        $(".dod").find("img").css("width","auto")
//        $(".dod").css("width","auto")
//        $(".dod").prepend("<img src='images/副料材质.jpg' style='position: absolute'class='imgg'>");
//
//
//        var el = $('#artwork');
//        //初始化img对象
//        var img = new Image();
//        img.src =  el.attr('url');
//        //加载入Canvas
//        var canvas = document.createElement('canvas');
//        canvas.width =  el.width();
//        canvas.height =  el.height();
//        var ctx = canvas.getContext('2d');
//        ctx.drawImage(img,0,0);
//        var imgData  = ctx.getImageData(0,0, el.width(), el.height());
//        var data =  imgData.data;
//
//        //局部红色
//        for(var i=0,n=data.length;i<n;i+=4){
//            var r	=	data[i];
//            var g	=	data[i+1];
//            var b	=	data[i+2];
//            var a	=	data[i+3];
//            if( r==38 && g==42 && b==172 && a==255  ){
//
//                data[i]=0;
//                data[i+1]=0;
//                data[i+2]=0;
//                data[i+3]=0;
//            }
//        };
//        ctx.putImageData(imgData,0,0);
//        //处理图片代码结束
//        //重新设置图片的src属性
//        el.attr('src', canvas.toDataURL());
//        var arr = [];
//
//        $('.imgg').each(function(){
//            arr.push($(this).attr('src'));
//
//        })
//        var data=arr,base64=[];
//
//
//        draw(function(){
////            document.ge('imgBox').innerHTML='<img class="dou" src="'+base64[0]+'">';
//
//            $(".dod").prepend('<img class="imgg img-responsive" style="width:338px;" url="'+base64[0]+'" id="artwork" src="'+base64[0]+'">');
//            $(".magnifyingShow").find("img").remove();
//            $(".magnifyingShow").prepend('<img src="'+base64[0]+'">');
//        })
//
//        function draw(fn){
//            var c=document.createElement('canvas'),
//                ctx=c.getContext('2d'),
//                len=data.length;
//            c.width=800;
//            c.height=982;
//            ctx.rect(0,0,c.width,c.height);
//            ctx.fillStyle='#fff';
//            ctx.fill();
//            function drawing(n){
//                if(n<len){
//                    var img=new Image;
//                    //img.crossOrigin = 'Anonymous'; //解决跨域
//                    img.src=data[n];
//                    img.onload=function(){
//                        ctx.drawImage(img,0,0,800,982);
//                        drawing(n+1);//递归
//                    }
//                }else{
//                    //保存生成作品图片
//                    base64.push(c.toDataURL("images/jpeg",0.8));
//                    //alert(JSON.stringify(base64));
//                    fn();
//                }
//            }
//            drawing(0);
//        }
//        $(".dod img:lt(2)").remove();
//        $(".dod").css("width","338")
//
//    });
//
//    $('#sGreen').click(function(){
//        $(".dod").find("img").css("width","auto")
//        $(".dod").css("width","auto")
//        $(".dod").prepend("<img src='images/背料材质.jpg' style='position: absolute'class='imgg'>");
//
//
//        var el = $('#artwork');
//        //初始化img对象
//        var img = new Image();
//        img.src =  el.attr('url');
//        //加载入Canvas
//        var canvas = document.createElement('canvas');
//        canvas.width =  el.width();
//        canvas.height =  el.height();
//        var ctx = canvas.getContext('2d');
//        ctx.drawImage(img,0,0);
//        var imgData  = ctx.getImageData(0,0, el.width(), el.height());
//        var data =  imgData.data;
//
//        //局部红色
//        for(var i=0,n=data.length;i<n;i+=4){
//            var r	=	data[i];
//            var g	=	data[i+1];
//            var b	=	data[i+2];
//            var a	=	data[i+3];
//            if( r==32 && g==86 && b==13 && a==255  ){
//
//                data[i]=0;
//                data[i+1]=0;
//                data[i+2]=0;
//                data[i+3]=0;
//            }
//        };
//        ctx.putImageData(imgData,0,0);
//        //处理图片代码结束
//        //重新设置图片的src属性
//        el.attr('src', canvas.toDataURL());
//        var arr = [];
//
//        $('.imgg').each(function(){
//            arr.push($(this).attr('src'));
//
//        })
//        var data=arr,base64=[];
//
//
//        draw(function(){
////            document.ge('imgBox').innerHTML='<img class="dou" src="'+base64[0]+'">';
//
//            $(".dod").prepend('<img class="imgg img-responsive" style="width:338px;" url="'+base64[0]+'" id="artwork" src="'+base64[0]+'">');
//            $(".magnifyingShow").find("img").remove();
//            $(".magnifyingShow").prepend('<img src="'+base64[0]+'">');
//        })
//
//        function draw(fn){
//            var c=document.createElement('canvas'),
//                ctx=c.getContext('2d'),
//                len=data.length;
//            c.width=800;
//            c.height=982;
//            ctx.rect(0,0,c.width,c.height);
//            ctx.fillStyle='#fff';
//            ctx.fill();
//            function drawing(n){
//                if(n<len){
//                    var img=new Image;
//                    //img.crossOrigin = 'Anonymous'; //解决跨域
//                    img.src=data[n];
//                    img.onload=function(){
//                        ctx.drawImage(img,0,0,800,982);
//                        drawing(n+1);//递归
//                    }
//                }else{
//                    //保存生成作品图片
//                    base64.push(c.toDataURL("images/jpeg",0.8));
//                    //alert(JSON.stringify(base64));
//                    fn();
//                }
//            }
//            drawing(0);
//        }
//        $(".dod img:lt(2)").remove();
//        $(".dod").css("width","338")
//    });

    $('.bei').click(function(){

        $(".dod").find("img").css("width","auto")
        $(".dod").css("width","auto")
        var skin=$(this).attr("skin")

//        $(".dod").prepend("<img src='images/主料材质.jpg' style='position: absolute'class='imgg'>");
        $(".dod").prepend('<img class="imgg" style="position:absolute;"  src="'+skin+'">');

        var el = $('#artwork');
        //初始化img对象
        var img = new Image();
        img.src =  el.attr('url');
        //加载入Canvas
        var canvas = document.createElement('canvas');
        canvas.width =  el.width();
        canvas.height =  el.height();

        var ctx = canvas.getContext('2d');
        ctx.drawImage(img,0,0);
        var imgData  = ctx.getImageData(0,0, el.width(), el.height());
        var data =  imgData.data;

        //局部红色
        for(var i=0,n=data.length;i<n;i+=4){
            var r	=	data[i];
            var g	=	data[i+1];
            var b	=	data[i+2];
            var a	=	data[i+3];
            if( r==38 && g==102 && b==102 && a==255  ){

                data[i]=0;
                data[i+1]=0;
                data[i+2]=0;
                data[i+3]=0;
            }
        };
        ctx.putImageData(imgData,0,0);
        //处理图片代码结束
        //重新设置图片的src属性
        el.attr('src', canvas.toDataURL());
        var arr = [];

        $('.imgg').each(function(){
            arr.push($(this).attr('src'));

        })
        var data=arr,base64=[];


        draw(function(){
//            document.ge('imgBox').innerHTML='<img class="dou" src="'+base64[0]+'">';

            $(".dod").prepend('<img class="imgg img-responsive" style="width:338px;" url="'+base64[0]+'" id="artwork" src="'+base64[0]+'">');
            $(".magnifyingShow").find("img").remove();
            $(".magnifyingShow").prepend('<img src="'+base64[0]+'">');
        })

        function draw(fn){
            var c=document.createElement('canvas'),
                ctx=c.getContext('2d'),
                len=data.length;
            c.width=800;
            c.height=982;
            ctx.rect(0,0,c.width,c.height);
            ctx.fillStyle='#fff';
            ctx.fill();
            function drawing(n){
                if(n<len){
                    var img=new Image;
                    //img.crossOrigin = 'Anonymous'; //解决跨域
                    img.src=data[n];
                    img.onload=function(){
                        ctx.drawImage(img,0,0,800,982);
                        drawing(n+1);//递归
                    }
                }else{
                    //保存生成作品图片
                    base64.push(c.toDataURL("images/jpeg",0.8));
                    //alert(JSON.stringify(base64));
                    fn();
                }
            }
            drawing(0);
        }
        $(".dod img:lt(2)").remove();
        $(".dod").css("width","338")


    });

    $('.fu').click(function(){
        $(".dod").find("img").css("width","auto")
        $(".dod").css("width","auto")
        var skin=$(this).attr("skin")

//        $(".dod").prepend("<img src='images/主料材质.jpg' style='position: absolute'class='imgg'>");
        $(".dod").prepend('<img class="imgg" style="position:absolute;"  src="'+skin+'">');

        var el = $('#artwork');
        //初始化img对象
        var img = new Image();
        img.src =  el.attr('url');
        //加载入Canvas
        var canvas = document.createElement('canvas');
        canvas.width =  el.width();
        canvas.height =  el.height();
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img,0,0);
        var imgData  = ctx.getImageData(0,0, el.width(), el.height());
        var data =  imgData.data;

        //局部红色
        for(var i=0,n=data.length;i<n;i+=4){
            var r	=	data[i];
            var g	=	data[i+1];
            var b	=	data[i+2];
            var a	=	data[i+3];
            if( r==162 && g==204 && b==203 && a==255  ){

                data[i]=0;
                data[i+1]=0;
                data[i+2]=0;
                data[i+3]=0;
            }
        };
        ctx.putImageData(imgData,0,0);
        //处理图片代码结束
        //重新设置图片的src属性
        el.attr('src', canvas.toDataURL());
        var arr = [];

        $('.imgg').each(function(){
            arr.push($(this).attr('src'));

        })
        var data=arr,base64=[];


        draw(function(){
//            document.ge('imgBox').innerHTML='<img class="dou" src="'+base64[0]+'">';

            $(".dod").prepend('<img class="imgg img-responsive" style="width:338px;" url="'+base64[0]+'" id="artwork" src="'+base64[0]+'">');
            $(".magnifyingShow").find("img").remove();
            $(".magnifyingShow").prepend('<img src="'+base64[0]+'">');
        })

        function draw(fn){
            var c=document.createElement('canvas'),
                ctx=c.getContext('2d'),
                len=data.length;
            c.width=800;
            c.height=982;
            ctx.rect(0,0,c.width,c.height);
            ctx.fillStyle='#fff';
            ctx.fill();
            function drawing(n){
                if(n<len){
                    var img=new Image;
                    //img.crossOrigin = 'Anonymous'; //解决跨域
                    img.src=data[n];
                    img.onload=function(){
                        ctx.drawImage(img,0,0,800,982);
                        drawing(n+1);//递归
                    }
                }else{
                    //保存生成作品图片
                    base64.push(c.toDataURL("images/jpeg",0.8));
                    //alert(JSON.stringify(base64));
                    fn();
                }
            }
            drawing(0);
        }
        $(".dod img:lt(2)").remove();
        $(".dod").css("width","338")

    });


    $(".zhu").click(function(){

        $(".dod").find("img").css("width","auto")
        $(".dod").css("width","auto")
        var skin=$(this).attr("skin")

//        $(".dod").prepend("<img src='images/主料材质.jpg' style='position: absolute'class='imgg'>");
        $(".dod").prepend('<img class="imgg" style="position:absolute;"  src="'+skin+'">');

        var el = $('#artwork');
        //初始化img对象
        var img = new Image();
        img.src =  el.attr('url');
        //加载入Canvas
        var canvas = document.createElement('canvas');
        canvas.width =  el.width();
        canvas.height =  el.height();
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img,0,0);
        var imgData  = ctx.getImageData(0,0, el.width(), el.height());
        var data =  imgData.data;

        //局部红色
        for(var i=0,n=data.length;i<n;i+=4){
            var r	=	data[i];
            var g	=	data[i+1];
            var b	=	data[i+2];
            var a	=	data[i+3];
            if( r==255 && g==255 && b==255 && a==255  ){

                data[i]=0;
                data[i+1]=0;
                data[i+2]=0;
                data[i+3]=0;
            }
        };
        ctx.putImageData(imgData,0,0);
        //处理图片代码结束
        //重新设置图片的src属性
        el.attr('src', canvas.toDataURL());
        var arr = [];

        $('.imgg').each(function(){
            arr.push($(this).attr('src'));

        })
        var data=arr,base64=[];


        draw(function(){
//            document.ge('imgBox').innerHTML='<img class="dou" src="'+base64[0]+'">';

            $(".dod").prepend('<img class="imgg img-responsive" style="width:338px;" url="'+base64[0]+'" id="artwork" src="'+base64[0]+'">');
            $(".magnifyingShow").find("img").remove();
            $(".magnifyingShow").prepend('<img src="'+base64[0]+'">');
        })

        function draw(fn){
            var c=document.createElement('canvas'),
                ctx=c.getContext('2d'),
                len=data.length;
            c.width=800;
            c.height=982;
            ctx.rect(0,0,c.width,c.height);
            ctx.fillStyle='#fff';
            ctx.fill();
            function drawing(n){
                if(n<len){
                    var img=new Image;
                    //img.crossOrigin = 'Anonymous'; //解决跨域
                    img.src=data[n];
                    img.onload=function(){
                        ctx.drawImage(img,0,0,800,982);
                        drawing(n+1);//递归
                    }
                }else{
                    //保存生成作品图片
                    base64.push(c.toDataURL("images/jpeg",0.8));
                    //alert(JSON.stringify(base64));
                    fn();
                }
            }
            drawing(0);
        }
        $(".dod img:lt(2)").remove();
        $(".dod").css("width","338")
    });














    //图片叠加替换


    $(".homeimg1 img:first,.homeimg2 img:first,.homeimg3 img:first,.homeimg4 img:first,.homeimg5 img:first,.homeimg6 img:first").show();

    $("#home1 .se").find('.nm').click(function(){
        $(this).addClass("activer").siblings(".nm").removeClass("activer");
        var topIndex=$(this).index();
        $(".homeimg1 img").eq(topIndex).fadeIn().siblings("img").hide();
    });
    $("#home2 .se").find('.nm').click(function(){
        $(this).addClass("activer").siblings(".nm").removeClass("activer");
        var topIndex=$(this).index();
        $(".homeimg2 img").eq(topIndex).fadeIn().siblings("img").hide();
    });
    $("#home3 .se").find('.nm').click(function(){
        $(this).addClass("activer").siblings(".nm").removeClass("activer");
        var topIndex=$(this).index();
        $(".homeimg3 img").eq(topIndex).fadeIn().siblings("img").hide();
    });
    $("#home4 .se").find('.nm').click(function(){
        $(this).addClass("activer").siblings(".nm").removeClass("activer");
        var topIndex=$(this).index();
        $(".homeimg4 img").eq(topIndex).fadeIn().siblings("img").hide();
    });
    $("#home5 .se").find('.nm').click(function(){
        $(this).addClass("activer").siblings(".nm").removeClass("activer");
        var topIndex=$(this).index();
        $(".homeimg5 img").eq(topIndex).fadeIn().siblings("img").hide();
    });
    $("#home6 .se").find('.nm').click(function(){
        $(this).addClass("activer").siblings(".nm").removeClass("activer");
        var topIndex=$(this).index();
        $(".homeimg6 img").eq(topIndex).fadeIn().siblings("img").hide();
    });










    $(".se").find(".nm").css('display', 'none');











//鼠标悬浮，图片放大
    $(".prolist img").mouseover(function(){
        var tooltip = "<img src='"+ this.src +"' alt='产品预览图' width='350'/>";

        $(".bigger").append(tooltip);
        $(".bigger img").show("fast");
    }).mouseout(function(){

        $(".bigger img").remove();	 //移除
    })

//选择款式
    $(".prolist a").click(function(){
        $(this).toggleClass("active").siblings("a").removeClass("active");
    });
    $(".config").click(function(){
        $('#myModal').modal('hide')
       var ss= $(".prolist").find(".active").attr("ename");
        $("#input2").val(ss)
    })

//
//清空订单信息里的值
    $(".ff img").click(function(){

        $(this).parent().find("input").val('')

    })

//统计款式数量并显示
    var pagge=$(".prolist").parent().attr("page")
    var pronum=$(".prolist a").length/pagge
    $(".count").find(".mo").html(Math.ceil(pronum))


    $(".fenye").each(function(){

        var paggee=$(this).parent().attr("page")
        var pronumm=$(this).prev().children().length/paggee
        $(this).find(".mo").html(Math.ceil(pronumm))
    });

    $(".se").each(function(){

        $(this).children().slice(0,17).css('display', 'block');
    })
//显示款式条
    $(".list").click(function(){
        $(".prolist").fadeToggle()
        $(".count").fadeToggle()
        $(".prolist").children().slice(0,17).css('display', 'block');
    })

//显示款式条







    var windowwidth = $(window).width()

    var leftmain = $(".left-main").width()
    var rightmain = windowwidth - leftmain - 34


    $(".right-main").css("width", rightmain)


//右侧订单信息
    $(".order li").click(function(){

        $(this).toggleClass("listyle").siblings("li").removeClass("listyle");

        var topIndex=$(this).index();
        $(".ordermore .xx").eq(topIndex).fadeToggle().siblings(".xx").hide();
    });




//款式选择
    $(".kuan").click(function(){
        $(".list").toggle();
    });



        //$(".order").mouseleave(function(){
        //    $(".order li").removeClass("listyle");
        //    $(".ordermore .xx").hide();
        //});



//新手引导
    $(".floor-floor").click(function(){
        $(".floor-floor").hide();
        $(".floor-first").fadeIn();
    });
    $(".floor-first").click(function(){
        $(".floor-first").hide();
        $(".floor-second").fadeIn();
    });

    $(".floor-second").click(function(){
        $(".floor-second").hide();
        $(".floor-third").fadeIn();
    });
    $(".floor-third").click(function(){
        $(".floor-third").hide();
    });
    $(".floor-close").click(function(){
        $(this).parent().parent().hide();
    });




    $(window).resize(function(){




        var choose=$(".choose").width();
        var chooseleft=choose-231-10

        var windowwidth=$(window).width()

        var leftmain=$(".left-main").width()
        var rightmain=windowwidth-leftmain-34

        $(".choose-left").css("width",chooseleft)
        $(".right-main").css("width",rightmain)

        var floorone = $(".xin").offset();
        $(".floor-first").css({"top":floorone.top+20,"left":floorone.left+30})
        var floortwo = $(".xin").offset();
        $(".floor-second").css({"top":floortwo.top+40,"right":265})

        $(".floor-third").css({"top":377,"right":265})
    });






//分页
    $(".top").click(function() {
        var pagge=$(this).parent().parent().parent().attr("page")
        var prohome=$(this).parent().parent();


        var home=$(this).parent()
        var num=parseInt( $(home).find(".xiye").html());
        var v=$(home).find(".xiye");

        if(num>1)
        {
            $(prohome).prev().find(".nm").css('display', 'none');
            $(prohome).prev().find(".nm").slice(pagge*(num-2),pagge*(num-1)).css('display', 'block');
            num--;
            num=num;
            v.html(num);
        }
    });

    $(".down").click(function() {
        var pagge=$(this).parent().parent().parent().attr("page")
        var prohome=$(this).parent().parent();

        var home=$(this).parent();

        var pages=parseInt( $(home).find(".mo").html());

        var num=parseInt( $(home).find(".xiye").html());

        var v=$(home).find(".xiye");


        if(num<pages && num>0){

            $(prohome).prev().find(".nm").css('display', 'none');
            $(prohome).prev().find(".nm").slice(pagge*num,pagge*(num+1)).css('display', 'block');

            num = ++num;
            v.html(num);

        }
        else{}
    });


    $(".sub").click(function() {
        var pagge=$(this).parent().parent().parent().attr("page")
        var prohome=$(this).parent().parent();


        var home=$(this).parent()

        var print = $(home).find(".print").val();

        var pages=parseInt($(home).find(".mo").html());
        var page=parseInt($(home).find(".xiye").html());
        if(print>pages || print<1) {
            alert("请输入正确的数字")

            $(".print").val('')
        }
        else{

            $(prohome).prev().find(".nm").css('display', 'none');
            $(prohome).prev().find(".nm").slice(pagge*(print-1),pagge*print).css('display', 'block');


            $(home).find(".xiye").html(print);
            $(home).find(".print").val('')

        }
    });
});

$(function () { $("[data-toggle='tooltip']").tooltip(); });
