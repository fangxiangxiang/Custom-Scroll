var obj1 ={apple:0,banana:{weight:52,price:100},cherry:97};/*定义一个名为obj1的对象*/
$.extend(obj);/*相当于给jQuery这个类(这个对象)添加新的方法或属性。*/

/*调用($等同于jQuery)*/
jQuery.cherry /*97*/
jQuery.banana /*Object{weight:52,price:100}*/
jQuery.apple /*0*/

/*************************************************************************/
var obj1 ={apple:0,banana:{weight:52,price:100},cherry:97};
var obj2{banana:{price:200},durian:100}
var obj = $.extend(obj1,obj2);  /*对象合并*/
JSON.stringify(obj);/*将对象转为字符串 "{"apple":0,"banana":{"price":200},"chery":97,"durian":100}" */
JSON.stringify(obj1);/*obj1等于obj "{"apple":0,"banana":{"price":200},"chery":97,"durian":100}" */

/************************************************************************/

var obj1 ={apple:0,banana:{weight:52,price:100},cherry:97};
var obj2{banana:{price:200},durian:100}
var obj = $.extend(true,obj1,obj2);  /*递归合并(深拷贝)*/
JSON.stringify(obj);
/*"{"apple":0,"banana":{"weight":200,"price":200},"chery":97,"durian":100}" */


