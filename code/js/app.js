function scrolltop(){
    let head = document.getElementById("head");
    let phone = document.getElementById('phone');
    if (window.scrollY>0){
        head.style.background = "#fff";
        head.style.transition = ".2s";
        head.style.boxShadow = "0px 1px 9px 0px rgba(0,0,0,.2)";
        styleEtA(home,"#000","900");
        styleEtA(about,"#000","900");
        styleEtA(contact,"#000","900");
        styleEtA(phone,"#000","900");
    }else{
        head.style.backgroundColor = "rgba(0,0,0,.7)";
        head.style.transition = ".2s";
        head.style.boxShadow = "0px 0px 0px 0px rgba(0,0,0)";
        styleEtA(home,"#fff","400");
        styleEtA(about,"#fff","400");
        styleEtA(contact,"#fff","400");
        styleEtA(phone,"#fff");
    }
}
function styleEtA(variable,color,weigth){
    if(color){
        variable.style.color = color;
    }
    if(weigth){
        variable.style.fontWeight = weigth;
    }
}