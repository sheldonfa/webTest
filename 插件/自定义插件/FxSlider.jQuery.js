/**
 * Created by Administrator on 2016/11/29 0029.
 */

;(function($){
    $.fn.extend({
        slider:function(){
            //var curIndex = 0, //当前index
            //imgLen = $(".imgList li").length; //图片总数
            //
            //var autoChange = setInterval(function(){
            //    if(curIndex < imgLen-1){
            //        curIndex ++;
            //    }else{
            //        curIndex = 0;
            //    }
            //    //调用变换处理函数
            //    changeTo(curIndex);
            //},2500);
            //
            ////左箭头点击处理
            //$("#prev").click(function(){
            //    //根据curIndex进行上一个图片处理
            //    curIndex = (curIndex > 0) ? (--curIndex) : (imgLen - 1);
            //    changeTo(curIndex);
            //});
            //
            ////其中changeTo()就是一个图片切换的处理函数
            //function changeTo(num){
            //    var goLeft = num * 400;
            //    $(".imgList").animate({left: "-" + goLeft + "px"},500);
            //    $(".infoList").find("li").removeClass("infoOn").eq(num).addClass("infoOn");
            //    $(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
            //}
            var currentIndex = 0;
            var oneStepLength = 1657;
            var imgLen = $(".iconList").find("p").find("i").length;
            console.log(imgLen);
            // 点击轮播
            $(".iconList i").click(function(){
                //alert($(this).index());
                var moveStep = $(this).index();
                var moveLength = moveStep*oneStepLength;
                $(".carousel a").animate({left: '-'+moveLength+'px'}, "slow");

            });
            // 自动轮播
            //setInterval(function(){
            //    if(currentIndex==0){
            //        for(var i=0;i<imgLen;i++){
            //            $(".carousel a").animate({left: '-'+oneStepLength+'px'}, "slow");
            //        }
            //    }
            //},1000)
        }
    })
})(jQuery);
