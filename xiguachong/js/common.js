/**
 * 判断终端类型
 */
var browser={
    versions:function(){
        var u = navigator.userAgent;
        return { 
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核  
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),  
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
};

/**
 * 获取请求url的参数
 * @param {String} name URL后缀的参数名
 */
function getQueryString(name){      
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
    
/**  
 * 检测浏览器类型
 * @param {String} browserStr 浏览器标志字符串   
 * @return {boolean}     
 */    
function browserType(browserStr){     
    return (navigator.userAgent.indexOf(browserStr) != -1) ? true: false;
}
   
/**
 * 写入Cookie   
 * @param {String} cname  Cookie的key
 * @param {String} cvalue Cookie的value
 * @param {String} days   Cookie的存活天数
 */
function setCookie(cname, cvalue, days){
    var date = new Date();
    date.setDate(date.getDate()+days);
    var exdate = "; expires="+date.toGMTString();  
    document.cookie = cname+"="+escape(cvalue)+exdate;  
}

/**
 * 读取Cookie
 * @param  {String} cname Cookie的key
 * @return {String} Cookie的value
 */
function getCookie(cname){
    var cvalue = "";  
    var cookies = document.cookie;
    if(cookies.length > 0){     // 有cookie
        var search = cname + "=";
        var start = cookies.indexOf(search);
        if(start != -1){     // 有名字为cname的cookie
            start += search.length;  
            var end = cookies.indexOf(";", start);
            if(end == -1){
                end = cookies.length;  
            }
            cvalue = unescape(cookies.substring(start, end));
        }
    }
    return cvalue;
}

/**   
 * 过滤两端空格
 * @param {String} str 要过滤的原字符串    
 * @return {String} 过滤后的字符串   
 */   
function trim(str){        
    return str.replace(/(^\s*)|(\s*$)/g, ""); 
} 


