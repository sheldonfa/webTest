/**
 * Created by Administrator on 2016/11/29 0029.
 */

/**
 * 要求结构
 * <div>
 *    <ul>
 *        <li></li>
 *        <li></li>
 *    <ul>
 * <div>
 */

/**
 * 执行后的结构
 * <div>
 *    <ul>
 *        <li></li>
 *        <li></li>
 *    <ul>
 *    // 下标 动态添加
 *    <p class="iconList">
 *        <span class="on">1</span>
 *        <span>2</span>
 *    </p>
 *    // 箭头 动态添加
 *    <div class="arrowLeft"></div>
 *    <div class="arrowRight"></div>
 * <div>
 */


/**
 * 轮播插件，需要符合一定的结构 见顶部
 *
 * @param option 可以设置的轮播属性，包括：单步长度，间隔时间，轮播速度
 * @author fangxin
 * @version v1.0
 */

;(function ($) {
    $.fn.extend({
        slider: function (option) {
            var defaults = {
                oneStepLength: 770,
                interval: 3000,
                speed:    600
            };
            var settings = $.extend(defaults, option);


            var imgLen = this.find("ul li").length;

            var currentIndex = 1;
            var nextIndex = 2;
            var prevIndex = 0;
            var tailLiIndex = imgLen+1;
            var headLiIndex= 0;


            var target = $(this);
            function init(){
                // 初始化下标 见顶部
                var _iconList = $('<p class="iconList"></p>');
                for(var i=0;i <imgLen;i++){
                    var _span = $('<span>'+parseInt(i+1)+'</span>');
                    _span.appendTo(_iconList);
                    if(i==0){
                        _span.addClass("on");
                    }
                }
                _iconList.appendTo(target);

                // 初始化箭头 见顶部
                var _arrowLeft = $('<div class="arrowLeft" style="display: none;"><i></i></div>');
                var _arrowRight = $('<div class="arrowRight" style="display: none;"><i></i></div>');
                target.append(_arrowLeft);
                target.append(_arrowRight);


                // 复制头图片复制尾图片
                var headLi = target.find("ul li:last").clone(true);
                var tailLi = target.find("ul li:first").clone(true);
                headLi.attr("id","-1").prependTo(target.find("ul"));
                tailLi.attr("id",imgLen+1).appendTo(target.find("ul"));
                target.find("ul").css("left","-"+settings.oneStepLength+"px").css("width",(settings.oneStepLength*(imgLen+2))+"px");

                target.css("overflow","hidden");
                target.css("position","relative");
                target.find("ul").css("position","absolute");
            }
            init();

            // 鼠标移入显示左右箭头
            target.mouseenter(function(){
                target.find(".arrowLeft,.arrowRight").show();
                clearInterval(autoScroll);
            }).mouseleave(function(){
                target.find(".arrowLeft,.arrowRight").hide();
                autoScroll = setInterval(function () {
                    leftScroll(target);
                }, settings.interval);
            });

            // 自动轮播
            var autoScroll = setInterval(function () {
                leftScroll(target);
            }, settings.interval);

            // 向左滚动
            function leftScroll(target){
                target.find("ul").animate({left: "-" + settings.oneStepLength*nextIndex + "px"}, settings.speed, function () {
                    currentIndex = nextIndex;
                    if (currentIndex == tailLiIndex) {
                        currentIndex = 1;
                        target.find("ul").css("left", "-"+settings.oneStepLength+"px");
                    }
                    target.find(".iconList span:eq(" + (currentIndex-1) + ")").addClass("on").siblings().removeClass("on");
                    nextIndex = currentIndex + 1;
                    prevIndex = currentIndex - 1;
                    btnFlag = true;
                });
            }

            // 点击轮播
            target.find(".iconList span").click(function () {
                $(this).addClass("on").siblings().removeClass("on");
                currentIndex = $(this).index()+1;
                indexScroll(currentIndex);

            });

            // 左箭头轮播
            var btnFlag = true;
            target.find(".arrowLeft").click(function () {
                if(btnFlag){
                    btnFlag = false;
                    rightScroll(target);
                }
            });

            // 右箭头轮播
            target.find(".arrowRight").click(function () {
                if(btnFlag){
                    btnFlag = false;
                    leftScroll(target);
                }
            });


            // 向右滚动
            function rightScroll(target){
                target.find("ul").animate({left: "-" + settings.oneStepLength*prevIndex + "px"}, settings.speed, function () {
                    currentIndex = prevIndex;
                    if (currentIndex == headLiIndex) {
                        currentIndex = imgLen;
                        target.find("ul").css("left", "-"+parseInt(settings.oneStepLength*imgLen)+"px");
                    }
                    target.find(".iconList span:eq(" + (currentIndex-1) + ")").addClass("on").siblings().removeClass("on");
                    nextIndex = currentIndex + 1;
                    prevIndex = currentIndex - 1;
                    btnFlag = true;
                });
            }

            // 根据坐标滚
            function indexScroll(currentIndex){
                target.find("ul").animate({left: "-" + settings.oneStepLength*(currentIndex) + "px"}, settings.speed);
                nextIndex = currentIndex + 1;
                prevIndex = currentIndex - 1;
            }
        }
    })
})(jQuery);
