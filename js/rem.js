// 要让他一进入html就开始执行:::所以要使用自执行函数
/*
var docEl = document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px"
doc = document   addEventListern  DOMContentLoaded
window = orientationOnchange 相当于横竖屏 翻转

 */

(function(doc,win){
    console.log(doc)
    var docEl = doc.documentElement,
    // 设备重置
    resizeEvt = 'orientationOnchange' in window?'orientationOnchange':'resize',
    relalc = function(){
        // 获取屏幕宽度
        var clientWidth = docEl.clientWidth;
        if(!clientWidth)return;
        docEl.style.fontSize = clientWidth/7.5 + "px";
    }
    if(!addEventListener)return
    win.addEventListener(resizeEvt,relalc,false);
    doc.addEventListener('DOMContentLoaded',relalc,false)
})(document,window);