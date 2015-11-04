$(document).ready(function(){

    /*输入提示*/
    $(".m-account>input").focus(function(){
        var value = $(this).val();
        if(value!=null){

            $(this).siblings("span").hide();
        }
        else{
            $(this).siblings("span").show();
        }
    });
    $(".m-account>input").blur(function(){
        var value = $(".m-account>input").val();

        if(value[0]!=null&&value[1]!=null){
            //$(this).css('background-color','red');
            $(this).siblings("span").hide();
        }else if(value[0]==null||value[1]==null){
           // $(this).css('background-color','blue');
            $(this).siblings("span").show();
        }

    });

    /*轮播图*/
    var count=0;
    var n=0;
    var bannerlist = $('.u-bannerlist a');
    count = bannerlist.length;
    $(".u-bannerlist a:not(:first-child)").hide();
    $(".u-bannercirle li").mouseover(function() {
        var i = $(this).text() -1;
        if (i >= count) return;
        bannerlist.filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
        $(this).addClass('s-orange');
        $(this).siblings("li").removeClass("s-orange");
    });
    var tt = 0;
    tt = setInterval(function(){
        n = n >=(count -1) ?0 : ++n;
        $(".u-bannercirle li").eq(n).trigger('mouseover');
    },1000);
    bannerlist.mouseover(function(){
       clearInterval(tt);
    });
    bannerlist.mouseout(function(){
        tt=setInterval(function(){
            n = n >=(count -1) ?0 : ++n;
            $(".u-bannercirle li").eq(n).trigger('mouseover');
        },2000);
    });
    /*导航电梯*/
    $('.m-floorbox a').click(function(){
        var msg = $(this).children().html();
        if(msg=='返回顶部'){
            $("html,body").animate({scrollTop:0},1000);
        }else if(msg=='精品推荐'){
            var Y = $('.m-recommendedgoods').offset().top-200;
            $("html,body").animate({scrollTop:Y},1000);
            $('.m-floorbox a:nth-child(2)').addClass('s-pre');
            $('.m-floorbox a:nth-child(2)').siblings().removeClass('s-pre');
        }else if(msg=='进口商品'){
            var Y = $('.m-importgoods').offset().top-200;
            $("html,body").animate({scrollTop:Y},1000);
            $('.m-floorbox a:nth-child(3)').addClass('s-pre');
            $('.m-floorbox a:nth-child(3)').siblings().removeClass('s-pre');
        }else if(msg=='食品饮料'){
            var Y = $('.m-foods').offset().top-50;
            $("html,body").animate({scrollTop:Y},1000);
            $('.m-floorbox a:nth-child(4)').addClass('s-pre');
            $('.m-floorbox a:nth-child(4)').siblings().removeClass('s-pre');
        }else if(msg=='粮油副食'){
            var Y = $('.m-Graingoods').offset().top-50;
            $("html,body").animate({scrollTop:Y},1000);
            $('.m-floorbox a:nth-child(5)').addClass('s-pre');
            $('.m-floorbox a:nth-child(5)').siblings().removeClass('s-pre');
        }else if(msg=='家庭清洁'){
            var Y = $('.m-cleaninggoods').offset().top-50;
            $("html,body").animate({scrollTop:Y},1000);
            $('.m-floorbox a:nth-child(6)').addClass('s-pre');
            $('.m-floorbox a:nth-child(6)').siblings().removeClass('s-pre');
        }else if(msg=='美容洗护'){
            var Y = $('.m-toiletriesgoods').offset().top-50;
            $("html,body").animate({scrollTop:Y},1000);
            $('.m-floorbox a:nth-child(7)').addClass('s-pre');
            $('.m-floorbox a:nth-child(7)').siblings().removeClass('s-pre');
        }else{
            var Y = $('.m-fruitgoods').offset().top-50;
            $("html,body").animate({scrollTop:Y},1000);
            $('.m-floorbox a:nth-child(8)').addClass('s-pre');
            $('.m-floorbox a:nth-child(8)').siblings().removeClass('s-pre');
        }
    });

    /*放大镜效果*/
    var title = $('title').html();
    if(title=='产品详情页'){
    $(".jqzoom").imagezoom();
    $("#thumblist li a").click(function(){
        $(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
        $(".jqzoom").attr('src',$(this).find("img").attr("src"));
        $(".jqzoom").attr('rel',$(this).find("img").attr("src"));
    });
    }
});
/*楼层定位*/
var title = $('title').html();
if(title=='index'){
$(window).scroll(function (){
    var top = $(document).scrollTop();
    console.log(top);
    if(top>$(window).height()-200){
        $('.m-floorbox').show();
        if(top>$('.m-recommendedgoods').offset().top-100 && top<$('.m-importgoods').offset().top-360){
            $('.m-floorbox a:nth-child(2)').addClass('s-pre');
            $('.m-floorbox a:nth-child(2)').siblings().removeClass('s-pre');
        }else if(top>$('.m-importgoods').offset().top-100 && top<$('.m-foods').offset().top-360){
            $('.m-floorbox a:nth-child(3)').addClass('s-pre');
            $('.m-floorbox a:nth-child(3)').siblings().removeClass('s-pre');
        }else if(top>$('.m-foods').offset().top-100 && top<$('.m-Graingoods').offset().top-360){
            $('.m-floorbox a:nth-child(4)').addClass('s-pre');
            $('.m-floorbox a:nth-child(4)').siblings().removeClass('s-pre');
        }else if(top>$('.m-Graingoods').offset().top-100 && top<$('.m-cleaninggoods').offset().top-360){
            $('.m-floorbox a:nth-child(5)').addClass('s-pre');
            $('.m-floorbox a:nth-child(5)').siblings().removeClass('s-pre');
        }else if(top>$('.m-cleaninggoods').offset().top-100 && top<$('.m-toiletriesgoods').offset().top-360){
            $('.m-floorbox a:nth-child(6)').addClass('s-pre');
            $('.m-floorbox a:nth-child(6)').siblings().removeClass('s-pre');
        }else if(top>$('.m-toiletriesgoods').offset().top-100&& top<$('.m-fruitgoods').offset().top-360){
            $('.m-floorbox a:nth-child(7)').addClass('s-pre');
            $('.m-floorbox a:nth-child(7)').siblings().removeClass('s-pre');
        }else if(top>$('.m-fruitgoods').offset().top-300){
            $('.m-floorbox a:nth-child(8)').addClass('s-pre');
            $('.m-floorbox a:nth-child(8)').siblings().removeClass('s-pre');
        }
    }else{
        $('.m-floorbox').hide();
    }
});
}
/*面值下拉列表*/
$('.u-value.w130').click(function(){
    $('.u-valuedetail.w130').toggle();
    return false;
 });
$('.u-valuedetail a').click(function(){
    $('.u-value.w130').val($(this).html().replace("￥",""));
});
/*流量下拉列表*/
$('.u-value.w80').click(function(){
    $('.u-valuedetail.w80').toggle();
    return false;
});
$('.u-valuedetail a').click(function(){
    $('.u-value.w80').val($(this).html().replace("￥",""));
});


/*tab*/
function tab(title,con){
    $(title).hover(function(){
        var Index;
        Index=$(this).index();
        $(this).addClass('li:hover').siblings('li').removeClass('li:hover');
        $(con).eq(Index).show(200).siblings('.u-tabcontent').hide();
    });
}
$('.u-tabtitle li').hover(function(){
    var Index;
    Index=$(this).index();
    $(this).addClass('li:hover').siblings('li').removeClass('li:hover');
    $('.u-tabcontent').eq(Index).show(200).siblings('.u-tabcontent').hide();
});

/*leftMenu*/
$('.g-leftbox li').hover(function(){
    if($(this).index()=='0'){
        console.log($(this).index());
        if($.browser.msie && ( $.browser.version == "7.0" )){
            $(this).children('.u-list-item').css('margin-top','-52px');
        }else{
            $(this).children('.u-list-item').css('margin-top','-76px');
        }
    }else if($(this).index()=='1'){
        if($.browser.msie && ( $.browser.version == "7.0" )){
            $(this).children('.u-list-item').css('margin-top','-80px');
        }else{
            $(this).children('.u-list-item').css('margin-top','-100px');
        }
    }else if($(this).index()=='2'){
        if($.browser.msie && ( $.browser.version == "7.0" )){
            $(this).children('.u-list-item').css('margin-top','-124px');
        }else{
            $(this).children('.u-list-item').css('margin-top','-152px');
        }
    }else if($(this).index()=='3'){
        if($.browser.msie && ( $.browser.version == "7.0" )){
            $(this).children('.u-list-item').css('margin-top','-156px');
        }else{
            $(this).children('.u-list-item').css('margin-top','-200px');
        }
    }else if($(this).index()=='4'){
        if($.browser.msie && ( $.browser.version == "7.0" )){
            $(this).children('.u-list-item').css('margin-top','-166px');
        }else{
            $(this).children('.u-list-item').css('margin-top','-228px');
        }
    }else if($(this).index()=='5'){
        if($.browser.msie && ( $.browser.version == "7.0" )){
            $(this).children('.u-list-item').css('margin-top','-194px');
        }else{
            $(this).children('.u-list-item').css('margin-top','-285px');
        }
    }
    $(this).find('.u-list-item').show();
},
function(){
    $(this).find('.u-list-item').hide();
});

/*我的购物车*/
$('.u-mycart.fr,.u-cart').hover(function () {
        $('.u-cart').show();
    },function(){
        $('.u-cart').hide();
    }
);
$("input[value='+']").click(function(){
    $(this).next().html(parseInt($(this).next().html())+1);
});
$("input[value='-']").click(function(){
    $(this).prev('').html(parseInt($(this).prev().html())-1);
    if($(this).prev('').html()=="0"){
        $(this).closest('li').remove();
    }
});

/*点击空白处隐藏*/
$('body').click(function(){
    if($(this)!=$('.u-valuedetail.w130')||$(this)!=$('.u-valuedetail.w80')){
        $('.u-valuedetail.w130').hide();
        $('.u-valuedetail.w80').hide();
    }
});

var title = $('title').html();
if(title!='index'){
    $('.u-menutitle,.g-leftbox').hover(function(){
        $('.g-leftbox').show();
    },function(){
        $('.g-leftbox').hide();
    });
}

/*productdetail*/
$('.u-type li').click(function(){
    $(this).children().css('border','1px solid #DA3434');
    $(this).siblings('li').children().css('border','1px solid #787878');
});
$('.total li').click(function(){
    var Index2;
    Index2=$(this).index();
    $(this).addClass('hover').siblings('li').removeClass('hover');
    $('.u-content2').eq(Index2).show().siblings('.u-content2').hide();
});
$("input[value='+']").click(function(){
    $(this).prev('').val(parseInt($(this).prev().val())+1);
});
$("input[value='-']").click(function(){
    if($(this).next().val()=='1'){
        return
    }else{
        $(this).next().val(parseInt($(this).next().val())-1);
    }

});
$('.u-addr').hover(function(){
    $(this).next().next().show();
});
$('.u-addrdetail').hover(function(){
    $(this).show();
},function() {
        $(this).hide();
    }
);
/*配送地址*/
$('.u-addrdetail .con li').click(function(){
    var name=$(this).closest('ul').closest('div').attr('class');
    var arr =  name.split(' ');
    var str = '.'+arr[3];
    $(this).closest('div').siblings('ul').children(str).children('span').html($(this).html());
    console.log($(this).closest('.u-addrdetail').prev().prev().children('span').html());
    var addr = $(this).closest('.u-addrdetail').prev().prev().children('span').html();
    var cd = $(this).closest('.con').siblings('ul').children('li');
    var arr1 =  addr.split(' ');
    arr1[0] = $(cd[0]).children('span').html();
    arr1[1] = $(cd[1]).children('span').html();
    arr1[2] = $(cd[2]).children('span').html();
    $(this).closest('.u-addrdetail').prev().prev().children('span').html([arr1[0],arr1[1],arr1[2]].join(" "));
});
$('.choose li').click(function(){
    $(this).addClass('hover').siblings('li').removeClass('hover');
    $('.con').eq($(this).index()).show().siblings('.con').hide();
});
/*全选 反选*/
$(".cart-title>.allchoose>input[type='checkbox'],.m-carttoolbar>.choose>input[type='checkbox']").click(function(){
    var checkbox1 = $(".cart-title>.allchoose>input[type='checkbox']");
    var checkbox2 = $(".m-carttoolbar>.choose>input[type='checkbox']");
    checkbox1.attr('checked',$(this).attr('checked'));
    checkbox2.attr('checked',$(this).attr('checked'));
    if($(this).attr('checked')=='checked'){
        checkbox1.attr('checked','checked');
        checkbox2.attr('checked','checked');
        $('.cart-con').find(".allchoose>input[type='checkbox']").attr('checked','checked');
        return;
    }
    $('.cart-con').find(".allchoose>input[type='checkbox']").removeAttr('checked');
    checkbox1.removeAttr('checked');
    checkbox2.removeAttr('checked');
});

/*购物车删除*/
$('.cart-con>.handle>a').click(function(){
    $(this).closest('.cart-con').remove();
});
