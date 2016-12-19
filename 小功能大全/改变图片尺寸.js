/**
 * Created by Administrator on 2016/12/12 0012.
 */
// 改变图片尺寸
reSizePic:function(){
    $(".two,.three").find("img").each(function(){
        var target = this;
        var img = new Image();
        img.src = $(this).attr("src");
        img.onload = function(){
            // 图片缩放
//                        var height = 0.86302*img.height;
            // 图片不缩放
            var height = img.height;
            $(target).css("height",height).css("max-height","100%");
        }
    })
},