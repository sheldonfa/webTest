/**
 * Created by Administrator on 2017/1/13 0013.
 */

;(function($){
    $.fn.extend({
        blink:function(option){
            var defaults = {
                speed:600
            };
            var settings = $.extend(defaults, option);

            var target = $(this);
            var imgLength = target.find("ul li").length;
            // 当前坐标，从0开始
            var current = 0;

            // 自动移动
            var auto = setInterval(function(){
                    leftScroll(target)
                },3000);

            // 鼠标移入效果
            target.hover(function(){
                    target.find(".arrowLeft").css('display','block');
                    target.find(".arrowRight").css('display','block');
                    clearInterval(auto);
                },function(){
                    target.find('.arrowLeft').css('display','none');
                    target.find('.arrowRight').css('display','none');
                    auto = setInterval(function(){
                        leftScroll(target)
                    },3000);
                }
            );

            // 点击事件
            var btnFlag = true;
            target.find('.arrowLeft').click(function(){
                if(btnFlag){
                    btnFlag = false;
                    rightScroll(target);
                }
            });
            target.find('.arrowRight').click(function(){
                if(btnFlag){
                    btnFlag = false;
                    leftScroll(target);
                }
            });

            // 下标移入效果
            target.find('.iconList span').mouseover(function(){
                var index = $(this).index();
                indexScroll(target,index);
            });

            // 左移动
            function leftScroll(target){
                target.find("li").eq(current).fadeOut(settings.speed,function(){
                    // 更新当前坐标
                    if(current<imgLength-1){
                        current = current +1;
                    }else{
                        current = 0;
                    }
                    target.find('li').eq(current).fadeIn(settings.speed);
                    btnFlag = true;
                    target.find(".iconList span").eq(current).addClass('on').siblings().removeClass("on");
                });
            }

            // 右移动
            function rightScroll(target){
                target.find("li").eq(current).fadeOut(settings.speed,function(){
                    // 更新当前坐标
                    if(current>0){
                        current -=1;
                    }else{
                        current = imgLength-1;
                    }
                    target.find('li').eq(current).fadeIn(settings.speed);
                    btnFlag = true;
                    target.find(".iconList span").eq(current).addClass('on').siblings().removeClass("on");
                });
            }

            function indexScroll(target,index){
                target.find(".iconList span").eq(index).addClass('on').siblings().removeClass("on");

                target.find("li").eq(current).fadeOut("fast");
                current = index;
                target.find('li').eq(current).fadeIn(settings.speed);
            }

        }
    })

})(jQuery);
