window.onload = function(){
  //全局变量
var timer = null,
    nav = byId("nav"),
    index = 0,
    main = byId("main"),
    navItems = nav.getElementsByClassName("nav-item"),
    banner = byId("banner"),
    bannerItems = banner.getElementsByClassName("banner-item"),
    size = bannerItems.length;

//封装getElementById函数
function byId(id){
    return typeof id === "string"?document.getElementById(id):id;
}

//封装事件函数
function addHandler(element,type,handler){
    if(element.addEventListener){
        return element.addEventListener(type,handler,true);
    }else if(element.attachEvent){
        return element.attachEvent("on"+type,handler);
    }else{
        return element["on"+type]=handler;
    }
}

//点击导航选项切换图片
for(var d=0;d<size;d++){
    navItems[d].setAttribute("data-id",d);
    addHandler(navItems[d],"click",function(){
        index = this.getAttribute("data-id");
        for(var i=0;i<size;i++){
            bannerItems[i].style.display = "none";
            navItems[i].style.background = "#fff";
        }
        bannerItems[index].style.display = "block";
        navItems[index].style.background = "#ffcc00";
    })
}

//自动播放
function autoPlay(){
    timer = setInterval(function () {
        index++;
        if(index>=size) index=0;
        for(var j=0;j<size;j++){
            bannerItems[j].style.display = "none";
            navItems[j].style.background = "#fff";
            navItems[j].style.fontWeight = "";
            
        }
        bannerItems[index].style.display = "block";
        navItems[index].style.background = "#ffcc00";
        navItems[index].style.fontWeight = "bold";
    },1000);
}

//进入main清除自动播放
addHandler(main,"mouseover",function(){
    if(timer){
        clearInterval(timer);
    }
});

//离开main开启自动播放
addHandler(main,"mouseout",function(){
        autoPlay();
});

autoPlay();  
}





