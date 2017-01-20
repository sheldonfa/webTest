/**
 * Created by fangxin on 2017/1/17 0017.
 * 扩展验证信息
 */

// 添加新的验证规则
$.validator.addMethod(
    "formulate",                    // 验证方法名称
    function(value,element,param){  // 验证规则
        console.log(element);       // element是元素对象
        return value == eval(param);
    },
    "请正确输入数学公式计算后的结果"      // 验证提示信息
);
