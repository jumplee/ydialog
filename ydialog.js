////貌似是不需要重新定位啊，在css中设置了fixed属性
// jQuery(document).ready(function($) {
//   $(window).resize(reszieHandler);
//   function reszieHandler () {
  // if(document.getElementById("lee_window")){
  //   alert("ss");
  // }
// }
// 居中吧，不考虑定位功能
// function mousePosition(ev) 
// {
//   if(ev.pageX || ev.pageY) 
//   { 
//     return {x:ev.pageX, y:ev.pageY}; 
//   } 
//   return { 
//     x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,y:ev.clientY + document.body.scrollTop - document.body.clientTop 
//   }; 
// }
var ydialog={isIe:jQuery.browser.msie};
   // 弹出方法
ydialog.show=function(wTitle,eleName,width,height,pos){
      ydialog.close(); 
      if(ydialog.isIe){ 
       $("select").hide();
     }
     elem=document.getElementById(eleName);
     var back=document.createElement("div"); 
     back.id="lee_overlay"; 
     back.className="lee_overlayBG";
     document.body.appendChild(back); 
     $(back).fadeIn("slow");
     $(back).click(ydialog.close);
     var leeW=document.createElement("div"); 
     leeW.id="lee_window"; 
     leeW.className="lee_window"; 
     leeW.innerHTML="<div class='lee_windowTop'><span style='float:left'>"+wTitle+"</span><span style='margin-right:5px;' class='close' onclick='ydialog.close()'>关闭</span></div><div class='lee_windowContent' id='lee_windowContent'></div><div class='lee_windowBottom'></div>"; 
     leeW.style.width=elem.style.width;
     leeW.style.height=elem.style.height;
     leeW.style.left=(parseInt($("body").innerWidth())-parseInt(leeW.style.width))/2;
     leeW.style.top=(parseInt($("body").innerHeight())-parseInt(leeW.style.height))/2;
     document.body.appendChild(leeW); 
     $("#lee_windowContent").append($(elem).children());
     $("#lee_window").unload(function(){
      $(elem).append($("#lee_windowContent").children());
     });
     $(leeW).show();
   };
    //关闭窗口 
ydialog.close=function(){ 
  if(document.getElementById('lee_overlay')!=null) 
  { 
    document.getElementById('lee_overlay').parentNode.removeChild(document.getElementById('lee_overlay')); 
  } 
  if(document.getElementById('lee_window')!=null) 
  { 
    $("#lee_window").unload();
    document.getElementById('lee_window').parentNode.removeChild(document.getElementById('lee_window')); 
  } 
  if(ydialog.isIe){ 
    $("select").show(); 
  } 
};   
//init
ydialog.init=function(opt){
  if(!opt){
    opt=".ydialog";
  }
  $(opt).click(function(){
    ydialog.show(this.title,this.rel);
    return false;
  })
}
   // init
  jQuery(document).ready(function($) {
 ydialog.init();
  });