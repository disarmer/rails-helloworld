if(navigator.appVersion.indexOf("MSIE")!=-1){window.onload=init_header_to_letters;}
window.addEventListener("load",init_header_to_letters,true);function init_header_to_letters(){var arr=document.querySelectorAll("h1, h2, h3, h4, h5, h6");for(var idx in arr){var obj=arr[idx];if(obj.nodeType==1){if(obj.childNodes.length==1&&obj.childNodes[0].nodeType==3){addClass(obj,'letters');}}}}
function hasClass(ele,cls){return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));}
function addClass(ele,cls){if(!this.hasClass(ele,cls))ele.className+=" "+cls;}
function removeClass(ele,cls){if(hasClass(ele,cls)){var reg=new RegExp('(\\s|^)'+cls+'(\\s|$)');ele.className=ele.className.replace(reg,' ');}}
if(navigator.appVersion.indexOf("MSIE")!=-1){window.onload=init_letters;}
window.addEventListener("load",init_letters,true);function init_letters(){var arr=document.    getElementsByClassName('letters');for(var idx in arr){var obj=arr[idx];if(obj.childNodes&&obj. childNodes.length<=1){if(obj.nodeType==1){var txt=obj.innerHTML;txt=txt.replace(/&amp;/g,"&"). replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#39;/g,"'");obj.    innerHTML='<span>'+txt.split('').join('</span><span>')+'</span>';}}}}

