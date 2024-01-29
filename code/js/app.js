let index = 0;
function scrolltop(){
    if(screen.width > 480){
        let head = document.getElementById("head");
        let cards = document.getElementById('cards');
        let logoBlack = document.getElementById('fghdfdgc');
        let logoWhite = document.getElementById('ceefhcgh');
        if (window.scrollY>0){
            head.style.background = "#fff";
            head.style.transition = ".2s";
            head.style.boxShadow = "0px 1px 9px 0px rgba(0,0,0,.2)";
            logoWhite.style.display = "none";
            logoBlack.style.display = "flex";
            styleEtA(home,"#000","900");
            styleEtA(about,"#000","900");
            styleEtA(contact,"#000","900");
            styleEtA(cards,"#000");
        }else{
            head.style.backgroundColor = "rgba(0,0,0,.7)";
            head.style.transition = ".2s";
            head.style.boxShadow = "0px 0px 0px 0px rgba(0,0,0)";
            logoBlack.style.display = "none";
            logoWhite.style.display = "flex";
            styleEtA(home,"#fff","400");
            styleEtA(about,"#fff","400");
            styleEtA(contact,"#fff","400");
            styleEtA(cards,"#fff");
        }
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

function solicitudInformacion(solicitud){
    if(solicitud == "mostrar"){
        let formulario = document.getElementById('formulario');
        formulario.style.left = "0";
        formulario.style.opacity = "1";
        formulario.style.transition = "left .2s";
        formulario.style.transition = "opacity .5s";
    }else if(solicitud == "ocultar"){
        let formulario = document.getElementById('formulario');
        formulario.style.left = "-100%";
        formulario.style.opacity = "0";
        formulario.style.transition = "left .5s";
        formulario.style.transition = "opacity .2s";
    }
}

function menuBar(){
    let menu = document.getElementById("menu");
    if(index == 0){
        menu.style.left = 0;
        menu.style.opacity = 1;
        index = 1;
    }else{
        menu.style.left = "-100%";
        menu.style.opacity = 0;
        index = 0;
    }
}