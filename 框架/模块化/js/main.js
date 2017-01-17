/**
 * Created by Administrator on 2017/1/13 0013.
 *
 */

require.config({
    paths: {
        "b": "a",
        "jquery": "jquery-1.11.3"
    }
});

require(['b','jquery'],function(_,$$){

    _.add(3,4);

    $$(function(){
        $$("#box").css("background","red");
    })

});
