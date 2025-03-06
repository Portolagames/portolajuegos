let idioma = document.getElementById("idioma");
let novedades = document.getElementById("novedades");
let coleccion = document.getElementById("coleccion");
let verTodo = document.getElementById("verTodo");
let fin = document.getElementById("fin");

idioma.addEventListener("change",()=>{
    console.log(idioma.value);
    switch(idioma.value){
        case "spanish":
            novedades.textContent = "Novedades:";
            coleccion.textContent = "Colección";
            verTodo.textContent = "Ver todo";
            fin.textContent = "Fin";
            break;
        case "english":
            novedades.textContent = "News:";
            coleccion.textContent = "Collection";  
            verTodo.textContent = "Show all";
            fin.textContent = "End";
            break;
        case "catalan":
            novedades.textContent = "Novetats:";  
            coleccion.textContent = "Colecció";
            verTodo.textContent = "Veure tot";
            fin.textContent = "Fi";
    }
})