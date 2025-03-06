window.filtrarArticulos = function() {
    const busqueda = $('#busqueda').val().toLowerCase();
    console.log(busqueda);
    $("#articulos div").each(function(){
        const nombreArticulo = $(this).find("h3").eq(0).text().toLowerCase();
        console.log(busqueda + "," + nombreArticulo + "," + nombreArticulo.indexOf(busqueda))
        if(nombreArticulo.indexOf(busqueda) > -1) {
            $(this).show();
        } else {
            $(this).hide();
        }
    })
}


const hackAndSlash = document.getElementsByTagName("input")[1];
const plataformas = document.getElementsByTagName("input")[2];
const tresDe = document.getElementsByTagName("input")[3];
const enElEspacio = document.getElementsByTagName("input")[4];

window.buscar = function() {
    console.log("buscando");
    $("#articulos div").each(function(){
        let wrong = false;
        const tags = $(this).find("span").eq(0).text().toLowerCase();
        if(hackAndSlash.checked==true){
            if(tags.indexOf("hackandslash") > -1) {
                $(this).show();
            } else {
                $(this).hide();
                wrong = true;
            }
        }
        if(plataformas.checked==true){
            if(tags.indexOf("plataformas") > -1 && wrong == false) {
                $(this).show();
            } else {
                $(this).hide();
                wrong = true;
            }
        }
        if(tresDe.checked==true){
            if(tags.indexOf("3d") > -1 && wrong == false) {
                $(this).show();
            } else {
                $(this).hide();
                wrong = true;
            }
        }
        if(enElEspacio.checked==true){
            if(tags.indexOf("enelespacio") > -1 && wrong == false) {
                $(this).show();
            } else {
                $(this).hide();
            }
        }
        if(plataformas.checked==false && hackAndSlash.checked==false && tresDe.checked==false && enElEspacio.checked==false){
            reset();
        }
    })
}

function reset() {
    $("#articulos div").each(function(){
        $(this).show();
    })
}