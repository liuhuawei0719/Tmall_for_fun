// JavaScript Document
$(function () {
    $('div#menu>ul>li:nth-of-type(1),div#menu>ul>li:nth-of-type(8)').click(function(){
        $("html body").animate({scrollTop:0}, 1000);
    });
    $('div#menu>ul>li:nth-of-type(2)').click(function(){
        $("html body").animate({scrollTop:$('.item:nth-of-type(1)').offset().top},1000);
    });
    $('div#menu>ul>li:nth-of-type(3)').click(function(){
        $("html body").animate({scrollTop:$('.item:nth-of-type(2)').offset().top},1000);
    });
    $('div#menu>ul>li:nth-of-type(4)').click(function(){
        $("html body").animate({scrollTop:$('.item:nth-of-type(3)').offset().top},1000);
    });
    $('div#menu>ul>li:nth-of-type(5)').click(function(){
        $("html body").animate({scrollTop:$('.item:nth-of-type(4)').offset().top},1000);
    });
    $(window).scroll(function () {
        var items = $("#class_content").find(".item");
        var menu = $("#menu");
        var top = $(document).scrollTop();
        var id = "";
        if(top > $("#header").offset().top - 200){
            id = '#' + $("#header").attr("id");
        }
            items.each(function () {
            if (top > $(this).offset().top - 200) {
                id = '#' + $(this).attr("id");
            } else {
                return false;
            }
        });

        var currentLink = menu.find(".current");
        if (id&& currentLink.attr("href") != id) {
            currentLink.removeClass("current");
            menu.find("[href=" + id + "]").addClass("current");
        }
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 400) {
            $("#menu").css({'opacity':'1'
            },1000);
        } else {
            $("#menu").css({'opacity':'0'
            },1000);
        }
    })
    });
$(window).scroll(function() {
    if ($(window).scrollTop() >= 600) {
        $(".hide_search").css({'top':'0'
        },2000);
    } else {
        $(".hide_search").css({'top':'-50px'
        },2000);
    }
});


$(function(){
    $("li").find("img").hover(
        function(){
            $(this).animate({right:"+=5px"},200)},
        function(){
            $(this).animate({right:"0px"},200)
        })

});
